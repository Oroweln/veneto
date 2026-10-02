/** BandiHub search fields and their options, in display order. Labels live in i18n (bandihubPage.filters.{field}.{option}). */
export const FUNDING_FILTERS = {
	region: ['veneto', 'italy', 'eu'],
	province: ['belluno', 'padova', 'rovigo', 'treviso', 'venezia', 'verona', 'vicenza'],
	industry: ['manufacturing', 'craft', 'tourism', 'agrifood', 'digital', 'culture', 'research'],
	orgType: ['sme', 'large', 'startup', 'research', 'public', 'farm', 'nonprofit'],
	instrument: ['grant', 'voucher', 'loan', 'taxCredit'],
	category: ['digital', 'sustainability', 'internationalisation', 'tourism', 'innovation', 'culture', 'agrifood'],
	status: ['open', 'upcoming', 'closed'],
	opening: ['openNow', 'next30'],
	deadline: ['d30', 'd90', 'later']
} as const;

export type FundingField = keyof typeof FUNDING_FILTERS;

export type FundingCall = {
	key: string;
	region: 'veneto' | 'italy' | 'eu';
	/** Empty = the whole of Veneto. */
	provinces: string[];
	/** Empty = any industry. */
	industries: string[];
	orgTypes: string[];
	instrument: string;
	category: string;
	/** Days from today; negative = in the past. */
	opens: number;
	deadline: number;
};

/**
 * Invented sample calls (labelled "Sample") showing how the search works.
 * Dates count from today so the status filters always have results. Titles live in i18n (bandihubPage.calls.{key}).
 */
export const SAMPLE_CALLS: FundingCall[] = [
	{ key: 'digital', region: 'veneto', provinces: [], industries: [], orgTypes: ['sme'], instrument: 'voucher', category: 'digital', opens: -20, deadline: 45 },
	{ key: 'green', region: 'eu', provinces: [], industries: ['manufacturing'], orgTypes: ['sme', 'large'], instrument: 'grant', category: 'sustainability', opens: -40, deadline: 120 },
	{ key: 'craft', region: 'italy', provinces: [], industries: ['craft'], orgTypes: ['sme'], instrument: 'grant', category: 'internationalisation', opens: -60, deadline: 25 },
	{ key: 'hospitality', region: 'veneto', provinces: ['belluno', 'verona', 'venezia'], industries: ['tourism'], orgTypes: ['sme'], instrument: 'loan', category: 'tourism', opens: 15, deadline: 90 },
	{ key: 'research', region: 'eu', provinces: [], industries: ['research', 'digital'], orgTypes: ['research', 'sme', 'large'], instrument: 'grant', category: 'innovation', opens: -10, deadline: 200 },
	{ key: 'startup', region: 'italy', provinces: [], industries: [], orgTypes: ['startup'], instrument: 'taxCredit', category: 'innovation', opens: 30, deadline: 150 },
	{ key: 'heritage', region: 'veneto', provinces: ['venezia', 'vicenza', 'padova'], industries: ['culture'], orgTypes: ['public', 'nonprofit'], instrument: 'grant', category: 'culture', opens: -90, deadline: -10 },
	{ key: 'farms', region: 'veneto', provinces: ['rovigo', 'treviso', 'verona'], industries: ['agrifood'], orgTypes: ['farm', 'sme'], instrument: 'grant', category: 'agrifood', opens: -5, deadline: 60 }
];

export const callStatus = (c: FundingCall) => (c.deadline < 0 ? 'closed' : c.opens > 0 ? 'upcoming' : 'open');

/** True when the call matches every filter that has a value. */
export function matchesCall(c: FundingCall, f: Partial<Record<FundingField, string>>): boolean {
	if (f.region && c.region !== f.region) return false;
	if (f.province && c.provinces.length && !c.provinces.includes(f.province)) return false;
	if (f.industry && c.industries.length && !c.industries.includes(f.industry)) return false;
	if (f.orgType && !c.orgTypes.includes(f.orgType)) return false;
	if (f.instrument && c.instrument !== f.instrument) return false;
	if (f.category && c.category !== f.category) return false;
	if (f.status && callStatus(c) !== f.status) return false;
	if (f.opening === 'openNow' && c.opens > 0) return false;
	if (f.opening === 'next30' && !(c.opens > 0 && c.opens <= 30)) return false;
	if (f.deadline === 'd30' && !(c.deadline >= 0 && c.deadline <= 30)) return false;
	if (f.deadline === 'd90' && !(c.deadline >= 0 && c.deadline <= 90)) return false;
	if (f.deadline === 'later' && c.deadline <= 90) return false;
	return true;
}
