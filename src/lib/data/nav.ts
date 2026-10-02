import type { IconName } from '$lib/components/icons';

/**
 * Site sections. `key` points to sections.{key} (page name + short text) and, in the
 * navigation, to nav.items.{key}. `live` marks built pages; the rest show a "being built" page.
 */
export type NavItem = { href: string; key: string; live?: boolean; icon?: IconName };

/** Ecosystem dropdown: the region, its sectors and its events. */
export const ECOSYSTEM_MENU: NavItem[] = [
	{ href: '/territories', key: 'territories', icon: 'map', live: true },
	{ href: '/industries', key: 'industries', icon: 'gear', live: true },
	{ href: '/invest', key: 'invest', icon: 'chart', live: true },
	{ href: '/internationalisation', key: 'internationalisation', icon: 'globe', live: true },
	{ href: '/culture-tourism', key: 'cultureTourism', icon: 'column', live: true },
	{ href: '/agrifood-wine', key: 'agrifoodWine', icon: 'grapes', live: true },
	{ href: '/events', key: 'events', icon: 'calendar', live: true }
];

/** Pages in the main bar besides the Ecosystem dropdown. The Platform entry opens PLATFORM_MENU. */
export const MAIN_NAV: NavItem[] = [
	{ href: '/platform', key: 'platform', live: true },
	{ href: '/about', key: 'about', live: true }
];

export const PLATFORM_KEY = 'platform';

/** Platform dropdown. */
export const PLATFORM_MENU: NavItem[] = [
	{ href: '/bandihub', key: 'bandihub', icon: 'euro', live: true },
	{ href: '/matchmaking', key: 'matchmaking', icon: 'link', live: true },
	{ href: '/project-management', key: 'projectManagement', icon: 'grid', live: true },
	{ href: '/funding-alerts', key: 'fundingAlerts', icon: 'bell', live: true },
	{ href: '/messaging', key: 'messaging', icon: 'mail', live: true },
	{ href: '/ai-assistant', key: 'aiAssistant', icon: 'chip', live: true },
	{ href: '/membership', key: 'membership', icon: 'star', live: true },
	{ href: '/app', key: 'app', icon: 'phone', live: true }
];

/** Other sections, reachable from the footer and from page content. */
export const RESOURCES: NavItem[] = [
	{ href: '/business', key: 'business' },
	{ href: '/opportunities', key: 'opportunities' },
	{ href: '/funding', key: 'funding' },
	{ href: '/network', key: 'network' },
	{ href: '/innovation', key: 'innovation' },
	{ href: '/intelligence', key: 'intelligence' },
	{ href: '/news', key: 'news' }
];

export const COMPANY: NavItem[] = [
	{ href: '/about', key: 'about', live: true },
	{ href: '/trust', key: 'trust' },
	{ href: '/advertise', key: 'advertise' },
	{ href: '/contact', key: 'contact', live: true }
];

export const LEGAL: NavItem[] = [
	{ href: '/legal', key: 'legal', live: true },
	{ href: '/privacy', key: 'privacy' },
	{ href: '/cookies', key: 'cookies' },
	{ href: '/terms', key: 'terms' },
	{ href: '/data-protection', key: 'dataProtection' },
	{ href: '/accessibility', key: 'accessibility' },
	{ href: '/ai-notice', key: 'aiNotice' }
];

/** Footer columns. Labels: footer.links.{key}. */
export type FooterLink = { href: string; key: string };
export const FOOTER_COLUMNS: { key: string; items: FooterLink[] }[] = [
	{
		key: 'explore',
		items: [
			{ href: '/territories', key: 'territory' },
			{ href: '/industries', key: 'industries' },
			{ href: '/invest', key: 'invest' },
			{ href: '/internationalisation', key: 'internationalisation' },
			{ href: '/culture-tourism', key: 'cultureTourism' },
			{ href: '/agrifood-wine', key: 'agrifoodWine' },
			{ href: '/events', key: 'events' }
		]
	},
	{
		key: 'platform',
		items: [
			{ href: '/bandihub', key: 'bandihub' },
			{ href: '/matchmaking', key: 'matchmaking' },
			{ href: '/funding-alerts', key: 'fundingAlerts' },
			{ href: '/project-management', key: 'projectManagement' },
			{ href: '/app', key: 'app' },
			{ href: '/membership', key: 'membership' }
		]
	},
	{
		key: 'participate',
		items: [
			{ href: '/contact?reason=business', key: 'presentBusiness' },
			{ href: '/contact?reason=investment', key: 'submitOpportunity' },
			{ href: '/matchmaking', key: 'findPartner' },
			{ href: '/contact?reason=event', key: 'promoteEvent' },
			{ href: '/contact?reason=funding', key: 'submitProject' },
			{ href: '/contact?reason=expert', key: 'requestExpert' }
		]
	},
	{
		key: 'company',
		items: [
			{ href: '/about', key: 'about' },
			{ href: '/about#founder', key: 'founder' },
			{ href: '/about#zoe-milano', key: 'zoeMilano' },
			{ href: '/contact', key: 'contact' },
			{ href: '/login', key: 'login' },
			{ href: '/register', key: 'join' }
		]
	},
	{
		key: 'legal',
		items: [
			{ href: '/legal', key: 'legalNotice' },
			{ href: '/privacy', key: 'privacy' },
			{ href: '/cookies', key: 'cookies' },
			{ href: '/cookies#preferences', key: 'cookiePreferences' },
			{ href: '/terms', key: 'terms' },
			{ href: '/data-protection', key: 'dataProtection' },
			{ href: '/accessibility', key: 'accessibility' },
			{ href: '/ai-notice', key: 'aiNotice' }
		]
	}
];

const ACCOUNT: NavItem[] = [
	{ href: '/register', key: 'register' },
	{ href: '/login', key: 'login' },
	{ href: '/search', key: 'search' },
	{ href: '/dashboard', key: 'dashboard' },
	{ href: '/discover', key: 'discover' }
];

/** Every section that has a route, built or not (deduplicated by href). */
export const SECTIONS: NavItem[] = [
	...new Map(
		[...ECOSYSTEM_MENU, ...MAIN_NAV, ...PLATFORM_MENU, ...RESOURCES, ...COMPANY, ...LEGAL, ...ACCOUNT].map((s) => [s.href, s])
	).values()
];

export const PLANNED_SLUGS = SECTIONS.filter((s) => !s.live).map((s) => s.href.slice(1));
