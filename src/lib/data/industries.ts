import type { IconName } from '$lib/components/icons';

/** Names and intros live in the translation files: content.industries.{id}. */
export type Industry = {
	id: string;
	icon: IconName;
};

/** Veneto's productive engines, ordered by how central they are to the regional economy. */
export const INDUSTRIES: Industry[] = [
	{ id: 'mechanics', icon: 'gear' },
	{ id: 'eyewear', icon: 'glasses' },
	{ id: 'fashion', icon: 'hanger' },
	{ id: 'footwear', icon: 'shoe' },
	{ id: 'furniture', icon: 'chair' },
	{ id: 'agrifood', icon: 'wine' },
	{ id: 'jewellery', icon: 'diamond' },
	{ id: 'logistics', icon: 'ship' },
	{ id: 'tourism', icon: 'suitcase' },
	{ id: 'glass', icon: 'vase' },
	{ id: 'chemicals', icon: 'flask' },
	{ id: 'digital', icon: 'chip' },
	{ id: 'lifesciences', icon: 'cross' },
	{ id: 'energy', icon: 'bolt' },
	{ id: 'culture', icon: 'column' },
	{ id: 'construction', icon: 'cube' }
];

export const INDUSTRY_BY_ID: Record<string, Industry> = Object.fromEntries(
	INDUSTRIES.map((i) => [i.id, i])
);
