import { SECTIONS } from '$lib/data/nav';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	const section = SECTIONS.find((s) => s.href === `/${params.section}`)!;
	return { key: section.key, detail: params.rest || null };
};
