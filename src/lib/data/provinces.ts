export type ProvinceCode = 'BL' | 'PD' | 'RO' | 'TV' | 'VE' | 'VR' | 'VI';

/** Role and summary live in the translation files: content.provinces.{id}. */
export type Province = {
	id: string;
	code: ProvinceCode;
	name: string;
	/** Industry ids, most characteristic first. */
	sectors: string[];
	/** Indicative, rounded figures (chamber of commerce registers / ISTAT). */
	registered: number;
	population: number;
	/** Registered businesses by industry, indicative share in %. */
	mix: { id: string; share: number }[];
	/** Demo platform counts — not live data. */
	platform: { companies: number; opportunities: number; events: number };
};

/** The seven provinces of Veneto, all equal. Alphabetical order. */
export const PROVINCES: Province[] = [
	{
		id: 'belluno',
		code: 'BL',
		name: 'Belluno',
		sectors: ['eyewear', 'tourism', 'mechanics', 'energy'],
		registered: 15000,
		population: 197000,
		mix: [
			{ id: 'tourism', share: 21 },
			{ id: 'eyewear', share: 14 },
			{ id: 'mechanics', share: 12 },
			{ id: 'construction', share: 11 },
			{ id: 'energy', share: 4 }
		],
		platform: { companies: 18, opportunities: 4, events: 2 }
	},
	{
		id: 'padova',
		code: 'PD',
		name: 'Padova',
		sectors: ['lifesciences', 'digital', 'mechanics', 'logistics'],
		registered: 95000,
		population: 933000,
		mix: [
			{ id: 'digital', share: 15 },
			{ id: 'mechanics', share: 14 },
			{ id: 'construction', share: 13 },
			{ id: 'logistics', share: 9 },
			{ id: 'lifesciences', share: 6 }
		],
		platform: { companies: 46, opportunities: 12, events: 5 }
	},
	{
		id: 'rovigo',
		code: 'RO',
		name: 'Rovigo',
		sectors: ['agrifood', 'energy', 'logistics', 'tourism'],
		registered: 25000,
		population: 228000,
		mix: [
			{ id: 'agrifood', share: 27 },
			{ id: 'construction', share: 12 },
			{ id: 'mechanics', share: 9 },
			{ id: 'logistics', share: 6 },
			{ id: 'energy', share: 4 }
		],
		platform: { companies: 14, opportunities: 3, events: 2 }
	},
	{
		id: 'treviso',
		code: 'TV',
		name: 'Treviso',
		sectors: ['furniture', 'agrifood', 'footwear', 'mechanics'],
		registered: 88000,
		population: 876000,
		mix: [
			{ id: 'mechanics', share: 15 },
			{ id: 'furniture', share: 12 },
			{ id: 'agrifood', share: 12 },
			{ id: 'construction', share: 12 },
			{ id: 'footwear', share: 5 }
		],
		platform: { companies: 41, opportunities: 10, events: 4 }
	},
	{
		id: 'venezia',
		code: 'VE',
		name: 'Venezia',
		sectors: ['logistics', 'tourism', 'glass', 'footwear', 'culture'],
		registered: 75000,
		population: 836000,
		mix: [
			{ id: 'tourism', share: 19 },
			{ id: 'logistics', share: 11 },
			{ id: 'construction', share: 11 },
			{ id: 'culture', share: 7 },
			{ id: 'glass', share: 3 }
		],
		platform: { companies: 39, opportunities: 9, events: 6 }
	},
	{
		id: 'verona',
		code: 'VR',
		name: 'Verona',
		sectors: ['agrifood', 'logistics', 'tourism', 'construction'],
		registered: 95000,
		population: 927000,
		mix: [
			{ id: 'agrifood', share: 17 },
			{ id: 'logistics', share: 11 },
			{ id: 'tourism', share: 11 },
			{ id: 'mechanics', share: 10 },
			{ id: 'construction', share: 6 }
		],
		platform: { companies: 44, opportunities: 11, events: 5 }
	},
	{
		id: 'vicenza',
		code: 'VI',
		name: 'Vicenza',
		sectors: ['mechanics', 'jewellery', 'fashion', 'chemicals'],
		registered: 80000,
		population: 852000,
		mix: [
			{ id: 'mechanics', share: 19 },
			{ id: 'fashion', share: 10 },
			{ id: 'construction', share: 12 },
			{ id: 'jewellery', share: 5 },
			{ id: 'chemicals', share: 4 }
		],
		platform: { companies: 43, opportunities: 11, events: 4 }
	}
];

export const PROVINCE_BY_ID: Record<string, Province> = Object.fromEntries(
	PROVINCES.map((p) => [p.id, p])
);
export const PROVINCE_BY_CODE = Object.fromEntries(PROVINCES.map((p) => [p.code, p])) as Record<
	ProvinceCode,
	Province
>;

export const REGION_FIGURES = {
	registered: PROVINCES.reduce((sum, p) => sum + p.registered, 0),
	population: PROVINCES.reduce((sum, p) => sum + p.population, 0),
	/** Annual exports, € billions — indicative, rounded. */
	exportsBn: 80
};
