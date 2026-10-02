import type { IconName } from '$lib/components/icons';

/** Destination areas across Veneto. Names live in i18n (territories.areas.items.{id}); the first province is the link target. */
export const AREAS: { id: string; icon: IconName; provinces: string[] }[] = [
	{ id: 'venice', icon: 'ship', provinces: ['venezia'] },
	{ id: 'verona', icon: 'star', provinces: ['verona'] },
	{ id: 'padua', icon: 'bulb', provinces: ['padova'] },
	{ id: 'vicenza', icon: 'column', provinces: ['vicenza'] },
	{ id: 'treviso', icon: 'wine', provinces: ['treviso'] },
	{ id: 'belluno', icon: 'mountain', provinces: ['belluno'] },
	{ id: 'garda', icon: 'waves', provinces: ['verona'] },
	{ id: 'brenta', icon: 'villa', provinces: ['venezia', 'padova'] },
	{ id: 'euganean', icon: 'drop', provinces: ['padova'] },
	{ id: 'asiago', icon: 'leaf', provinces: ['vicenza'] },
	{ id: 'beaches', icon: 'sun', provinces: ['venezia', 'rovigo'] },
	{ id: 'delta', icon: 'reeds', provinces: ['rovigo'] }
];
