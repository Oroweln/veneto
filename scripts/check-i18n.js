// Verifies translation coverage: every key used in the code exists in English (the source
// language), every data id has its content strings, and Italian mirrors English exactly.
// Usage: node scripts/check-i18n.js
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = path.resolve(import.meta.dirname, '..');
const src = path.join(root, 'src');
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'i18n-check-'));

// Copy TS modules to a temp dir with explicit extensions so Node can strip types and load them.
async function load(rel) {
	const files = [rel];
	const seen = new Set();
	while (files.length) {
		const f = files.pop();
		if (seen.has(f)) continue;
		seen.add(f);
		let code = fs.readFileSync(path.join(src, f), 'utf8');
		code = code.replace(/^import type .*$/gm, '');
		code = code.replace(/from '(\.\/[^']+)'/g, (m, p) => {
			const dep = path.join(path.dirname(f), p + '.ts');
			files.push(dep);
			return `from '${p}.ts'`;
		});
		const out = path.join(tmp, f);
		fs.mkdirSync(path.dirname(out), { recursive: true });
		fs.writeFileSync(out, code);
	}
	return import(pathToFileURL(path.join(tmp, rel)).href);
}

const en = (await load('lib/i18n/en.ts')).default;
const it = (await load('lib/i18n/it.ts')).default;
const { INDUSTRIES } = await load('lib/data/industries.ts');
const { PROVINCES } = await load('lib/data/provinces.ts');
const { COMPANIES } = await load('lib/data/companies.ts');
const { SLIDES } = await load('lib/data/billboards.ts');
const { SECTIONS, MAIN_NAV, PLATFORM_MENU, ECOSYSTEM_MENU } = await load('lib/data/nav.ts');
fs.rmSync(tmp, { recursive: true, force: true });

const has = (dict, key) => {
	let node = dict;
	for (const part of key.split('.')) {
		if (!node || typeof node !== 'object' || !(part in node)) return false;
		node = node[part];
	}
	return typeof node === 'string';
};

const flatten = (obj, prefix = '') =>
	Object.entries(obj).flatMap(([k, v]) =>
		typeof v === 'string' ? [prefix + k] : flatten(v, prefix + k + '.')
	);

const problems = [];

// 1. Static keys used in components and routes.
const walk = (d) =>
	fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
		const p = path.join(d, e.name);
		return e.isDirectory() ? walk(p) : /\.(svelte|ts)$/.test(p) ? [p] : [];
	});
for (const file of walk(src)) {
	const code = fs.readFileSync(file, 'utf8');
	for (const m of code.matchAll(/\bt\('([a-zA-Z0-9_.]+)'/g)) {
		if (!has(en, m[1])) problems.push(`missing key "${m[1]}" used in ${path.relative(root, file)}`);
	}
}

// 2. Dynamic keys built from data ids.
const expect = (key) => has(en, key) || problems.push(`missing key "${key}"`);
for (const i of INDUSTRIES) ['name', 'intro'].forEach((f) => expect(`content.industries.${i.id}.${f}`));
for (const p of PROVINCES) ['role', 'summary'].forEach((f) => expect(`content.provinces.${p.id}.${f}`));
for (const c of COMPANIES) {
	expect(`content.companies.${c.slug}.description`);
	c.lookingFor.forEach((n) => expect(`content.needs.${n}`));
}
for (const s of SLIDES) ['kicker', 'headline', 'sub', 'cta'].forEach((f) => expect(`content.billboards.${s.id}.${f}`));
for (const s of SECTIONS) ['name', 'short'].forEach((f) => expect(`sections.${s.key}.${f}`));
for (const n of [...ECOSYSTEM_MENU, ...MAIN_NAV, ...PLATFORM_MENU]) expect(`nav.items.${n.key}`);

// 3. Italian mirrors English (TypeScript checks the shape; this also catches empty strings).
const enKeys = flatten(en);
const itKeys = new Set(flatten(it));
for (const k of enKeys) if (!itKeys.has(k)) problems.push(`Italian is missing "${k}"`);

const empty = (dict, name) =>
	flatten(dict).filter((k) => k !== 'common.draftNotice' && k.split('.').reduce((n, p) => n[p], dict).trim() === '');
for (const k of empty(en, 'en')) problems.push(`empty English string "${k}"`);
for (const k of empty(it, 'it')) problems.push(`empty Italian string "${k}"`);

if (problems.length) {
	console.error(problems.join('\n'));
	console.error(`\n${problems.length} problem(s).`);
	process.exit(1);
}
console.log(`i18n OK: ${enKeys.length} strings in English and Italian, all keys in use are defined.`);
