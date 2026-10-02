import { isLang } from '$lib/i18n';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = ({ params, locals }) => {
	const fromRoute = (params as { lang?: string }).lang;
	return { lang: isLang(fromRoute) ? fromRoute : locals.lang };
};
