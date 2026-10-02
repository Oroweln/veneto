import type { ParamMatcher } from '@sveltejs/kit';
import { PLANNED_SLUGS } from '$lib/data/nav';

/** Sections that exist in the site map but are not built yet. */
export const match: ParamMatcher = (param) => PLANNED_SLUGS.includes(param);
