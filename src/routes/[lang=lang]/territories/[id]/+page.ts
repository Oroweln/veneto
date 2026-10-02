import { error } from '@sveltejs/kit';
import { LANGS } from '$lib/i18n';
import { PROVINCE_BY_ID, PROVINCES } from '$lib/data/provinces';
import type { EntryGenerator, PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const province = PROVINCE_BY_ID[params.id];
	if (!province) error(404, 'Territory not found');
	return { province };
};

export const entries: EntryGenerator = () =>
	LANGS.flatMap((lang) => PROVINCES.map((p) => ({ lang, id: p.id })));
