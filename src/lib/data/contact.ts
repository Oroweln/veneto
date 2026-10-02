/** Contact page. Reason labels live in i18n (contactPage.reasons.{id}). */
export const CONTACT_EMAIL = 'info@zoemilano.com';

export const CONTACT_REASONS = [
	'business',
	'join',
	'matchmaking',
	'investment',
	'funding',
	'expert',
	'event',
	'internationalisation',
	'digital',
	'general'
] as const;

export type ContactReason = (typeof CONTACT_REASONS)[number];

export const isReason = (v: unknown): v is ContactReason => CONTACT_REASONS.includes(v as ContactReason);
