import type { IconName } from '$lib/components/icons';

/** Event filters, in display order. Labels live in i18n (eventsPage.filters.{id}). */
export const EVENT_FILTERS = [
	'today',
	'week',
	'business',
	'industry',
	'international',
	'funding',
	'innovation',
	'culture',
	'tourism',
	'foodWine',
	'sport',
	'local'
] as const;
export type EventFilter = (typeof EVENT_FILTERS)[number];
export type EventCategory = Exclude<EventFilter, 'today' | 'week'>;

export const CATEGORY_ICON: Record<EventCategory, IconName> = {
	business: 'briefcase',
	industry: 'gear',
	international: 'globe',
	funding: 'euro',
	innovation: 'bulb',
	culture: 'column',
	tourism: 'compass',
	foodWine: 'wine',
	sport: 'target',
	local: 'pin'
};

/**
 * Invented sample events (labelled "Sample") until real listings arrive.
 * `day` counts from today, so "Today" and "This week" always have something to show.
 * Titles and places live in i18n (eventsPage.items.{key}).
 */
export const SAMPLE_EVENTS: { key: string; day: number; time: string; province: string; categories: EventCategory[] }[] = [
	{ key: 'exportBreakfast', day: 0, time: '08:30', province: 'padova', categories: ['business', 'international'] },
	{ key: 'fundingClinic', day: 1, time: '15:00', province: 'vicenza', categories: ['funding', 'industry'] },
	{ key: 'openFactory', day: 3, time: '10:00', province: 'treviso', categories: ['industry'] },
	{ key: 'startupNight', day: 5, time: '19:00', province: 'verona', categories: ['innovation', 'business'] },
	{ key: 'wineBuyers', day: 6, time: '17:30', province: 'verona', categories: ['foodWine', 'international'] },
	{ key: 'villaConcert', day: 9, time: '21:00', province: 'vicenza', categories: ['culture', 'tourism'] },
	{ key: 'trailRun', day: 12, time: '07:00', province: 'belluno', categories: ['sport', 'tourism'] },
	{ key: 'deltaFestival', day: 15, time: '18:00', province: 'rovigo', categories: ['local', 'foodWine'] },
	{ key: 'lagoonForum', day: 20, time: '09:30', province: 'venezia', categories: ['tourism', 'culture', 'business'] },
	{ key: 'balkanMission', day: 25, time: '09:00', province: 'venezia', categories: ['international', 'business'] }
];
