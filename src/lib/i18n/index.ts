import { getContext, setContext } from 'svelte';
import en from './en';
import it from './it';

/**
 * Languages. English is the source language: every string is written in en.ts / content.en.ts
 * first, then translated. Each language lives under its own URL prefix: /en/…, /it/…
 */
export const LANGS = ['en', 'it'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'en';

/**
 * Review status. A 'draft' language is fully usable but shows a notice and is kept out of
 * search engines (noindex) until a professional review is done. Set Italian to 'reviewed' then.
 */
export const LANG_STATUS: Record<Lang, 'source' | 'draft' | 'reviewed'> = {
	en: 'source',
	it: 'draft'
};

export const isPublished = (lang: Lang) => LANG_STATUS[lang] !== 'draft';

const dictionaries = { en, it };
const KEY = Symbol('i18n');

export function isLang(value: unknown): value is Lang {
	return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}

function lookup(dict: unknown, key: string): string | undefined {
	let node: unknown = dict;
	for (const part of key.split('.')) {
		if (node && typeof node === 'object' && part in node) {
			node = (node as Record<string, unknown>)[part];
		} else {
			return undefined;
		}
	}
	return typeof node === 'string' ? node : undefined;
}

export function translate(lang: Lang, key: string, vars?: Record<string, string | number>): string {
	let text = lookup(dictionaries[lang], key) ?? lookup(dictionaries.en, key);
	if (text === undefined) {
		if (import.meta.env.DEV) console.warn(`[i18n] missing key: ${key}`);
		return key;
	}
	if (vars) {
		for (const [name, value] of Object.entries(vars)) {
			text = text.replaceAll(`{${name}}`, String(value));
		}
	}
	return text;
}

/** Prefixes an internal path with the language: ('/territories', 'it') → '/it/territories', ('/', 'it') → '/it'. */
export function localizePath(path: string, lang: Lang): string {
	if (!path.startsWith('/') || path.startsWith('//')) return path;
	return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

/** Removes a leading language segment: '/it/territories' → '/territories'. */
export function stripLang(pathname: string): string {
	const match = pathname.match(/^\/(en|it)(\/.*)?$/);
	if (!match) return pathname;
	return match[2] && match[2] !== '/' ? match[2] : '/';
}

/** Reads the language from the first URL segment, if there is one. */
export function langFromPath(pathname: string): Lang | null {
	const first = pathname.split('/')[1];
	return isLang(first) ? first : null;
}

export type I18n = {
	readonly lang: Lang;
	t: (key: string, vars?: Record<string, string | number>) => string;
	/** Localized internal link. */
	path: (path: string) => string;
};

/** Called once in the root layout. `getLang` must read reactive state so text updates on switch. */
export function setI18n(getLang: () => Lang): I18n {
	const i18n: I18n = {
		get lang() {
			return getLang();
		},
		t: (key, vars) => translate(getLang(), key, vars),
		path: (path) => localizePath(path, getLang())
	};
	setContext(KEY, i18n);
	return i18n;
}

export function useI18n(): I18n {
	return getContext<I18n>(KEY);
}

export function formatNumber(lang: Lang, value: number, options?: Intl.NumberFormatOptions): string {
	return new Intl.NumberFormat(lang === 'it' ? 'it-IT' : 'en-GB', options).format(value);
}
