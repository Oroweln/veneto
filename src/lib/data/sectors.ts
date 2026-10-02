import type { IconName } from '$lib/components/icons';

type Category = { id: string; icon: IconName };

/** Industry categories on the Business & Industry page. Names live in i18n (industriesPage.categories.items.{id}). */
export const SECTORS: Category[] = [
	{ id: 'advanced', icon: 'rocket' },
	{ id: 'machinery', icon: 'gear' },
	{ id: 'fashion', icon: 'hanger' },
	{ id: 'eyewear', icon: 'glasses' },
	{ id: 'jewellery', icon: 'diamond' },
	{ id: 'furniture', icon: 'chair' },
	{ id: 'agrifood', icon: 'leaf' },
	{ id: 'wine', icon: 'wine' },
	{ id: 'logistics', icon: 'ship' },
	{ id: 'construction', icon: 'building' },
	{ id: 'energy', icon: 'bolt' },
	{ id: 'chemicals', icon: 'flask' },
	{ id: 'health', icon: 'cross' },
	{ id: 'digital', icon: 'chip' },
	{ id: 'tourism', icon: 'suitcase' },
	{ id: 'creative', icon: 'column' },
	{ id: 'services', icon: 'briefcase' }
];

/** Investment categories on the Investment page. Names live in i18n (investPage.categories.items.{id}). */
export const INVEST_CATEGORIES: Category[] = [
	{ id: 'business', icon: 'euro' },
	{ id: 'industrial', icon: 'cube' },
	{ id: 'commercial', icon: 'building' },
	{ id: 'hospitality', icon: 'suitcase' },
	{ id: 'tourism', icon: 'compass' },
	{ id: 'agricultural', icon: 'leaf' },
	{ id: 'winery', icon: 'wine' },
	{ id: 'innovation', icon: 'bulb' },
	{ id: 'startup', icon: 'rocket' },
	{ id: 'energy', icon: 'bolt' },
	{ id: 'cultural', icon: 'column' },
	{ id: 'logistics', icon: 'ship' },
	{ id: 'advisory', icon: 'users' }
];

/** Culture & tourism categories. Names live in i18n (tourismPage.categories.items.{id}). */
export const TOURISM_CATEGORIES: Category[] = [
	{ id: 'venice', icon: 'ship' },
	{ id: 'artCities', icon: 'column' },
	{ id: 'dolomites', icon: 'mountain' },
	{ id: 'garda', icon: 'waves' },
	{ id: 'coast', icon: 'sun' },
	{ id: 'prosecco', icon: 'wine' },
	{ id: 'thermal', icon: 'drop' },
	{ id: 'heritage', icon: 'villa' },
	{ id: 'architecture', icon: 'building' },
	{ id: 'museums', icon: 'vase' },
	{ id: 'cycling', icon: 'compass' },
	{ id: 'sport', icon: 'target' },
	{ id: 'events', icon: 'calendar' },
	{ id: 'business', icon: 'briefcase' },
	{ id: 'luxury', icon: 'diamond' },
	{ id: 'local', icon: 'pin' }
];

/** Agrifood & wine categories. Names live in i18n (agriPage.categories.items.{id}). */
export const AGRI_CATEGORIES: Category[] = [
	{ id: 'wineries', icon: 'wine' },
	{ id: 'wineExperiences', icon: 'star' },
	{ id: 'prosecco', icon: 'bottle' },
	{ id: 'amarone', icon: 'grapes' },
	{ id: 'soave', icon: 'column' },
	{ id: 'regionalWines', icon: 'map' },
	{ id: 'food', icon: 'building' },
	{ id: 'agricultural', icon: 'leaf' },
	{ id: 'organic', icon: 'shield' },
	{ id: 'oliveOil', icon: 'drop' },
	{ id: 'cheese', icon: 'cheese' },
	{ id: 'artisan', icon: 'vase' },
	{ id: 'foodTech', icon: 'flask' },
	{ id: 'packaging', icon: 'cube' },
	{ id: 'export', icon: 'ship' },
	{ id: 'restaurants', icon: 'fork' }
];
