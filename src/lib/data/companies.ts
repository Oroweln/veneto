import type { ProvinceCode } from './provinces';

/** Sample companies — invented for the preview, always shown with a "Sample" label. */
export type Company = {
	slug: string;
	name: string;
	initials: string;
	town: string;
	province: ProvinceCode;
	industry: string;
	/** Keys of content.needs. The description lives in content.companies.{slug}. */
	lookingFor: string[];
	premium: boolean;
	verified: boolean;
	founded: number;
};

export const COMPANIES: Company[] = [
	{
		slug: 'lagunare-logistics',
		name: 'Lagunare Logistics',
		initials: 'LL',
		town: 'Venezia',
		province: 'VE',
		industry: 'logistics',
		lookingFor: ['distributors', 'exportPartners'],
		premium: true,
		verified: true,
		founded: 2004
	},
	{
		slug: 'officina-ottica-cadorina',
		name: 'Officina Ottica Cadorina',
		initials: 'OC',
		town: 'Pieve di Cadore',
		province: 'BL',
		industry: 'eyewear',
		lookingFor: ['internationalBuyers', 'designers'],
		premium: true,
		verified: true,
		founded: 1987
	},
	{
		slug: 'montello-sport-boots',
		name: 'Montello Sport Boots',
		initials: 'MS',
		town: 'Montebelluna',
		province: 'TV',
		industry: 'footwear',
		lookingFor: ['suppliers', 'rdPartners'],
		premium: true,
		verified: false,
		founded: 1996
	},
	{
		slug: 'precisa-meccanica',
		name: 'Precisa Meccanica',
		initials: 'PM',
		town: 'Thiene',
		province: 'VI',
		industry: 'mechanics',
		lookingFor: ['clientsAbroad', 'investors'],
		premium: true,
		verified: true,
		founded: 2001
	},
	{
		slug: 'biopatavina-labs',
		name: 'BioPatavina Labs',
		initials: 'BP',
		town: 'Padova',
		province: 'PD',
		industry: 'lifesciences',
		lookingFor: ['investors', 'clinicalPartners'],
		premium: true,
		verified: true,
		founded: 2019
	},
	{
		slug: 'adige-agritech',
		name: 'Adige Agritech',
		initials: 'AA',
		town: 'Legnago',
		province: 'VR',
		industry: 'agrifood',
		lookingFor: ['distributors', 'pilotFarms'],
		premium: true,
		verified: false,
		founded: 2016
	},
	{
		slug: 'delta-solare',
		name: 'Delta Solare',
		initials: 'DS',
		town: 'Adria',
		province: 'RO',
		industry: 'energy',
		lookingFor: ['landowners', 'installers'],
		premium: false,
		verified: true,
		founded: 2012
	}
];
