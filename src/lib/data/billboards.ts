/** Demo billboard slides. Text lives in the translation files: content.billboards.{id}. */
export type Slide = { id: string; tone: 'vermilion' | 'ink' | 'apricot' };

export const SLIDES: Slide[] = [
	{ id: 'madeHere', tone: 'vermilion' },
	{ id: 'dolomitesToDelta', tone: 'ink' },
	{ id: 'billboardsNotBanners', tone: 'apricot' }
];
