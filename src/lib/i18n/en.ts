import contentEn from './content.en';

/** Interface strings. English is the source language; it.ts must mirror this shape. */
const en = {
	brand: {
		name: 'Veneto.app',
		wordmark: 'VENETO',
		wordmarkSuffix: '.APP',
		owner: 'ZOE MILANO',
		tagline: 'Make. Connect. Export.',
		statementA: 'Built for Veneto.',
		statementB: 'Ready for the world.',
		altStatement: 'One region. Global impact.',
		supporting: 'Business · Industry · Culture · Territory · Opportunity',
		moves: 'Veneto moves.',
		region: 'Veneto'
	},
	common: {
		skip: 'Skip to content',
		soon: 'Soon',
		appSoon: 'App coming soon',
		language: 'Language',
		breadcrumbs: 'Breadcrumbs',
		onThisPage: 'On this page',
		open: 'Open',
		seeAll: 'See all',
		sample: 'Sample',
		demo: 'Demo',
		preview: 'Preview',
		newTab: 'opens in a new tab',
		premium: 'Premium',
		draftNotice: '',
		languageNames: {
			en: 'English',
			it: 'Italiano',
			de: 'Deutsch',
			fr: 'Français'
		},
		indicative:
			'* Indicative figures, rounded, from public sources (chamber of commerce registers, ISTAT). Always check the official source before relying on them.',
		indicativeShort: 'Indicative',
		demoCounts: 'Platform counts on this page are demo data while Veneto.app is in preview.',
		independence:
			'Veneto.app is an independent private platform. It is not affiliated with Regione del Veneto or any public body.',
		/** Hints and labels for the interactive hero illustrations. */
		try: {
			label: 'Interactive',
			provinces: 'Tap a province',
			sectors: 'Pick a sector',
			listings: 'Tap a listing, star to save',
			routes: 'Pick a destination',
			postcards: 'Tap a postcard',
			businesses: 'businesses*',
			explore: 'Explore {name}',
			save: 'Save {name}',
			savedCount: '{n} saved',
			route: 'Veneto to {hub}',
			routeNote: 'Partners, buyers and events on this route',
			tools: 'Tap a tool',
			calls: 'Tap a call',
			matches: 'Tap a match, star to save',
			tasks: 'Tick a task or pick a phase',
			alerts: 'Tap a notification',
			chat: 'Send a quick reply',
			ai: 'Ask a sample question',
			regions: 'Switch region',
			costShare: '{n}% of eligible costs',
			typing: 'typing…'
		}
	},
	nav: {
		home: 'Home',
		homeLabel: 'Veneto.app, home page',
		shortcut: 'Ctrl K',
		main: 'Main navigation',
		search: 'Search Veneto.app',
		join: 'Join',
		joinNetwork: 'Join the network',
		login: 'Log In',
		ecosystemMenu: 'Explore the ecosystem',
		ecosystemIntro: 'The region, its sectors, its markets and its events.',
		platformMenu: 'Platform tools',
		platformIntro: 'The tools that turn the network into business.',
		platformOverview: 'Platform overview',
		items: {
			ecosystem: 'Ecosystem',
			territories: 'Territory',
			industries: 'Business & Industry',
			invest: 'Investment',
			internationalisation: 'Internationalisation',
			cultureTourism: 'Culture & Tourism',
			agrifoodWine: 'Agrifood & Wine',
			events: 'Events',
			platform: 'Platform',
			about: 'About',
			bandihub: 'BandiHub',
			matchmaking: 'Smart Matchmaking',
			projectManagement: 'Project Management',
			fundingAlerts: 'Funding Alerts',
			messaging: 'Messaging & Calls',
			aiAssistant: 'AI Assistant',
			membership: 'Membership',
			app: 'Mobile App'
		},
		menu: 'Menu',
		close: 'Close menu',
		groups: {
			explore: 'Explore',
			platform: 'Platform',
			resources: 'Resources',
			company: 'Company',
			legal: 'Legal',
			participate: 'Participate'
		}
	},
	sections: {
		business: { name: 'Business directory', short: 'Find companies and professionals across all seven provinces.' },
		opportunities: { name: 'Opportunities', short: 'Partnerships, supply requests and projects looking for you.' },
		funding: { name: 'Funding', short: 'Regional, national and EU calls in one clear board.' },
		events: { name: 'Events', short: 'Trade fairs, networking and business events across Veneto.' },
		industries: { name: 'Business & Industry', short: 'The companies and sectors that make Veneto one of Europe’s manufacturing engines.' },
		internationalisation: { name: 'Internationalisation', short: 'Export, foreign markets and international partners for Veneto businesses.' },
		cultureTourism: { name: 'Culture & Tourism', short: 'Heritage, creative industries and tourism as an economy, from the lagoon to the Dolomites.' },
		agrifoodWine: { name: 'Agrifood & Wine', short: 'Prosecco, Amarone, Soave and the food supply chains behind them.' },
		bandihub: { name: 'BandiHub', short: 'Regional, national and EU funding calls for Veneto businesses, in one hub.' },
		projectManagement: { name: 'Project Management', short: 'Plan and run projects with partners, from first contact to delivery.' },
		fundingAlerts: { name: 'Funding Alerts', short: 'Get notified when a call that fits your company opens.' },
		app: { name: 'Mobile App', short: 'Veneto.app on your phone, for iOS and Android.' },
		territories: { name: 'Territories', short: 'Seven provinces, each with its own strengths.' },
		platform: { name: 'Platform', short: 'Everything Veneto.app does, in one place.' },
		network: { name: 'Network', short: 'The business network of Veneto, connected.' },
		matchmaking: { name: 'Smart Matchmaking', short: 'Tell us what you need. Get ranked matches that explain why.' },
		messaging: { name: 'Messaging & Video Calls', short: 'Talk to members, partners and experts without leaving the app.' },
		aiAssistant: { name: 'AI Assistant', short: 'A future assistant to help you find funding, partners and services.' },
		membership: { name: 'Membership', short: 'Start free. Grow when you are ready.' },
		trust: { name: 'Trust', short: 'Know who you are doing business with.' },
		invest: { name: 'Invest in Veneto', short: 'Why and where to invest in the region.' },
		innovation: { name: 'Innovation & Technology', short: 'Startups, research, digital solutions and innovation partners in Veneto.' },
		intelligence: { name: 'Veneto Intelligence', short: 'Data on businesses, sectors and territories.' },
		discover: { name: 'Discover', short: 'Everything on the platform, filtered your way.' },
		news: { name: 'News', short: 'Stories from Veneto’s business ecosystem.' },
		about: { name: 'About', short: 'An independent private platform for doing business in Veneto.' },
		advertise: { name: 'Advertise', short: 'Billboards, not banners. Reach Veneto’s businesses.' },
		contact: { name: 'Contact', short: 'Questions about the platform or partnerships.' },
		legal: { name: 'Legal & independence', short: 'Who operates Veneto.app and what it does not guarantee.' },
		terms: { name: 'Terms', short: 'Terms of use of Veneto.app.' },
		dataProtection: { name: 'Data Protection / GDPR', short: 'Your rights over your personal data.' },
		accessibility: { name: 'Accessibility', short: 'How Veneto.app works for everyone.' },
		aiNotice: { name: 'AI Content Notice', short: 'Where and how AI-generated content is used and labelled.' },
		privacy: { name: 'Privacy', short: 'How Veneto.app handles personal data.' },
		cookies: { name: 'Cookies', short: 'How Veneto.app uses cookies.' },
		register: { name: 'Join Veneto.app', short: 'Create your free company profile in a few steps.' },
		login: { name: 'Log in', short: 'Welcome back to Veneto.app.' },
		search: { name: 'Search', short: 'Search companies, opportunities, funding and events.' },
		dashboard: { name: 'Dashboard', short: 'Your member workspace.' }
	},
	billboard: {
		label: 'Sponsored billboard',
		sponsored: 'Sponsored',
		slides: 'Billboard slides',
		slide: 'Slide'
	},
	company: {
		lookingFor: 'Looking for',
		verified: 'Verified',
		since: 'Since {year}',
		view: 'View profile'
	},
	home: {
		seo: {
			title: 'Veneto.app · Built for Veneto. Ready for the world.',
			description:
				'The independent digital platform connecting Veneto’s companies, industries, territories and opportunities with Italy, Europe and the world.'
		},
		hero: {
			eyebrow: 'Independent digital platform · Veneto, Italy',
			line1a: 'Built for',
			line2: 'Ready for the world',
			lede: 'Veneto.app brings together companies, professionals, investors, institutions, projects, funding and international connections in one evolving digital ecosystem.',
			cta: 'Explore the network',
			ctaSecondary: 'Join Veneto.app',
			aiLabel: 'AI-generated content',
			europe: 'EUROPE',
			world: 'WORLD',
			mediterranean: 'MEDITERRANEAN'
		},
		chips: {
			provinces: 'provinces, one ecosystem',
			exports: 'Exports €80bn+ a year*',
			live: '3 new opportunities today · Demo'
		},
		stats: {
			registered: 'Registered businesses',
			provinces: 'Provinces, all connected',
			exports: 'Exports a year',
			bn: 'bn'
		},
		ticker: {
			business: 'Business',
			industry: 'Industry',
			culture: 'Culture',
			territory: 'Territory',
			opportunity: 'Opportunity',
			export: 'Export',
			design: 'Design',
			craft: 'Craftsmanship',
			innovation: 'Innovation'
		},
		billboard01: {
			line1: 'Veneto',
			line2: 'does not wait.',
			line3: 'It builds.',
			support: 'A region shaped by enterprise, knowledge and international vision.'
		},
		search: {
			eyebrow: 'Business search',
			title: 'Discover business opportunities in',
			keyword: 'Keyword',
			placeholder: 'Company, product or service',
			where: 'Where',
			allVeneto: 'All Veneto',
			industry: 'Industry',
			any: 'Any',
			lookingFor: 'Looking for',
			type: 'Type',
			language: 'Language',
			submit: 'Search',
			seeking: {
				partners: 'Partners',
				suppliers: 'Suppliers',
				clients: 'Clients',
				investors: 'Investors',
				distributors: 'Distributors',
				talent: 'Talent'
			},
			types: {
				company: 'Company',
				startup: 'Startup',
				professional: 'Professional',
				association: 'Association'
			}
		},
		categories: {
			kicker: 'Explore by category',
			title: 'Where do you want to start?',
			lede: 'Eight ways into the same ecosystem. Every category connects back to real companies, places and opportunities.',
			items: {
				business: {
					title: 'Business & Industry',
					text: 'Discover companies, manufacturers, suppliers, professionals and specialised industrial networks.',
					cta: 'Explore business'
				},
				investment: {
					title: 'Investment & Real Estate',
					text: 'Find business opportunities, commercial properties, industrial locations, hospitality projects and professional support.',
					cta: 'Discover investment'
				},
				internationalisation: {
					// Soft hyphen (\u00AD) so the long word breaks cleanly in narrow cards.
					title: 'Internationali\u00ADsation',
					text: 'Connect Veneto companies with new markets, international partners, buyers, distributors and cross-border projects.',
					cta: 'Go international'
				},
				funding: {
					title: 'European Projects & Funding',
					text: 'Explore European, national and regional funding opportunities, digital vouchers and professional support.',
					cta: 'Explore funding'
				},
				culture: {
					title: 'Culture & Tourism',
					text: 'Discover cities, heritage, design, art, events, mountains, lakes, coastlines and year-round experiences.',
					cta: 'Discover Veneto'
				},
				agrifood: {
					title: 'Agrifood & Wine',
					text: 'Meet wineries, producers, food companies, agricultural businesses and international excellence.',
					cta: 'Explore agrifood'
				},
				innovation: {
					title: 'Innovation & Technology',
					text: 'Find startups, research, digital solutions, advanced services and innovation partners.',
					cta: 'Explore innovation'
				},
				events: {
					title: 'Events & Exchange',
					text: 'Discover fairs, conferences, cultural events, business meetings and international exchange opportunities.',
					cta: 'View events'
				}
			}
		},
		moves: {
			eyebrow: 'The idea behind Veneto.app',
			lede: 'Manufacturing, craftsmanship, culture, tourism, agriculture, design and international trade never stand still here. They interact, every day. Veneto.app is built to keep them moving.',
			items: {
				goods: { title: 'Goods moving', text: 'From workshops and districts to ports, corridors and markets.' },
				ideas: { title: 'Ideas moving', text: 'Between universities, startups and established industry.' },
				people: { title: 'People moving', text: 'Talent, professionals and partners finding each other.' },
				exports: { title: 'Businesses exporting', text: 'Made in Veneto, sold across Europe and the world.' },
				projects: { title: 'Projects developing', text: 'Collaborations that start with one introduction.' },
				culture: { title: 'Culture travelling', text: 'Heritage and creativity as an economic engine.' },
				regions: { title: 'Regions connecting', text: 'Seven provinces, one network, many borders crossed.' },
				tradition: { title: 'Tradition becoming innovation', text: 'Centuries of know-how, redesigned for what comes next.' }
			}
		},
		billboard02: {
			line1: 'Tradition made it strong.',
			line2: 'Innovation keeps it moving.'
		},
		network: {
			eyebrow: 'Veneto Business Network',
			titleA: 'The right connection',
			titleB: 'can move an entire project.',
			text1: 'Find companies, professionals, consultants, suppliers, technology partners and investors across Veneto.',
			text2: 'Join the network to present your business, develop collaborations and access private matchmaking through the mobile application.',
			cta: 'Explore the network',
			ctaSecondary: 'Join the network',
			phone: {
				title: 'Smart Matchmaking',
				badge: 'Preview',
				request: 'Your request',
				need: 'Distribution partner',
				chipA: 'Germany & Austria',
				chipB: 'Logistics',
				why: 'Why this match',
				reasonA: 'Already exports to the DACH region',
				reasonB: 'Looking for distributors',
				reasonC: 'Verified profile',
				propose: 'Propose collaboration'
			},
			chips: {
				private: 'Private matchmaking in the app',
				why: 'Every match explains why'
			}
		},
		featured: {
			kicker: 'Premium members',
			cta: 'Browse the directory',
			notice:
				'Preview: these companies are invented samples to show how profiles will look. Real member profiles will replace them.'
		},
		motto: 'Make. Connect. Export.',
		explore: {
			eyebrow: 'Seven provinces. One connected region.',
			titleA: 'More than a destination.',
			titleB: 'More than an economy.',
			text1: 'Veneto brings together global cities, industrial districts, cultural heritage, mountain territories, agricultural excellence and internationally connected businesses.',
			text2: 'From Venice and Verona to Padua, Vicenza, Treviso, Belluno and Rovigo, every province contributes a different strength to the regional ecosystem.',
			text3: 'Veneto.app creates one digital point of access to the people, places, industries and opportunities behind the region.',
			cta: 'Explore the territory',
			mapTitle: 'Map of Veneto with its seven provinces',
			mapHint: 'Select a province on the map to open its page.',
			regionTile: 'All seven provinces side by side: figures, sectors and what is live now.',
			allTerritories: 'Compare all territories'
		},
		international: {
			eyebrow: 'From Veneto to the world',
			titleA: 'Local expertise.',
			titleB: 'Global direction.',
			text1: 'Veneto.app supports international connections between regional companies and foreign markets, professional networks, investors, institutions and project partners.',
			text2: 'Discover export opportunities, international collaborations, business exchanges and cross-border projects.',
			cta: 'Explore internationalisation',
			ctaSecondary: 'Find a partner',
			hubs: {
				saoPaulo: 'São Paulo',
				newYork: 'New York',
				london: 'London',
				paris: 'Paris',
				munich: 'Munich',
				vienna: 'Vienna',
				belgrade: 'Belgrade',
				dubai: 'Dubai',
				shanghai: 'Shanghai'
			}
		},
		billboard03: {
			line1: 'Made here.',
			line2: 'Trusted everywhere.'
		},
		funding: {
			eyebrow: 'European Projects & Funding',
			titleA: 'A strong idea',
			titleB: 'deserves the right programme.',
			text1: 'Explore European, national and regional opportunities supporting innovation, digitalisation, sustainability, tourism, culture, industry, craftsmanship and international growth.',
			text2: 'Browse opportunities on Veneto.app. Become a member and access complete funding details, personalised alerts and expert matchmaking through the mobile application.',
			cta: 'Explore funding',
			ctaSecondary: 'Access the mobile app',
			chip: 'New call matches your profile',
			stage: {
				title: 'BandiHub',
				upTo: 'Up to',
				share: '50% of eligible costs',
				members: 'Full details for members',
				scopes: {
					regional: 'Regional',
					national: 'National',
					eu: 'EU'
				},
				calls: {
					digital: { name: 'Digital transition voucher', deadline: 'Deadline 15 March 2027' },
					green: { name: 'Green manufacturing programme', deadline: 'Deadline 30 June 2027' },
					craft: { name: 'Craft & design export grant', deadline: 'Deadline 10 May 2027' }
				}
			}
		},
		tourism: {
			eyebrow: 'A region of many worlds',
			titleA: 'Venice opens the door.',
			titleB: 'Veneto changes the story.',
			text: 'Discover historic cities, the Dolomites, Lake Garda, the Adriatic coast, thermal destinations, the Prosecco Hills, the Po Delta and the cultural landscape connecting them all.',
			cta: 'Discover the territory',
			allProvinces: 'All seven provinces',
			worlds: {
				dolomites: { name: 'The Dolomites', text: 'UNESCO World Heritage peaks, Cortina d’Ampezzo and mountain life all year round.' },
				cities: { name: 'Historic cities', text: 'Venice, Verona, Padua, Vicenza, Treviso, Belluno and Rovigo: centuries of art, trade and city life.' },
				garda: { name: 'Lake Garda', text: 'Italy’s largest lake, framed by vineyards and olive groves.' },
				coast: { name: 'Adriatic coast', text: 'Beaches from Bibione and Caorle to Jesolo and Chioggia.' },
				thermal: { name: 'Thermal destinations', text: 'Abano and Montegrotto, in the Euganean thermal basin.' },
				prosecco: { name: 'Prosecco Hills', text: 'Conegliano Valdobbiadene, a UNESCO World Heritage landscape.' },
				delta: { name: 'Po Delta', text: 'Wetlands, lagoons and birdlife in a UNESCO biosphere reserve.' },
				villas: { name: 'Palladian villas', text: 'Palladio’s Vicenza and villas, the cultural landscape that links the region.' }
			}
		},
		billboard04: {
			line1: 'One region.',
			line2: 'More worlds',
			line3: 'than expected.'
		},
		industries: {
			kicker: 'Industries',
			title: 'The engines of Veneto.',
			lede: 'Much more than Venice and tourism: Veneto is one of Europe’s great manufacturing and export regions.'
		},
		audiences: {
			kicker: 'Who it is for',
			title: 'For everyone who moves Veneto.',
			items: {
				companies: { title: 'Companies', text: 'Be found by partners, clients and buyers, in Italy and abroad.' },
				startups: { title: 'Startups', text: 'Meet investors, pilot customers and the industry around you.' },
				investors: { title: 'Investors', text: 'See where the region is growing and who is building it.' },
				professionals: { title: 'Professionals', text: 'Offer your expertise to the companies that need it.' },
				institutions: { title: 'Associations & institutions', text: 'Share calls, events and programmes with the right audience.' },
				international: { title: 'International partners', text: 'Find reliable counterparts in Veneto, in your language.' }
			}
		},
		journey: {
			kicker: 'How it works',
			title: 'From profile to partnership.',
			steps: {
				join: { title: 'Join', text: 'Create a free profile for your company in a few minutes.' },
				discover: { title: 'Discover', text: 'Explore companies, opportunities, funding and events.' },
				connect: { title: 'Connect', text: 'Get matched, start a conversation, propose a collaboration.' },
				grow: { title: 'Grow', text: 'Go Premium to be featured across Veneto and beyond.' }
			}
		},
		closing: {
			eyebrow: 'Become part of Veneto.app',
			line1: 'Your business.',
			line2: 'Your project.',
			line3: 'Your next connection.',
			text: 'Present your company, opportunity, event or project through a premium regional platform connected with a wider international ecosystem.',
			cta: 'Join the network',
			secondary: 'Request information'
		}
	},
	territories: {
		seo: {
			title: 'Territories of Veneto: seven provinces',
			description:
				'Explore the seven provinces of Veneto: Belluno, Padova, Rovigo, Treviso, Venezia, Verona and Vicenza. Key sectors, figures and opportunities.'
		},
		hero: {
			eyebrow: 'The complete Veneto',
			titleA: 'Seven provinces.',
			titleB: 'Countless directions.',
			text: 'Explore Veneto through its cities, industries, landscapes, businesses and regional communities.',
			chip: 'Belluno to Rovigo, all equal'
		},
		chart: { title: 'Registered businesses by territory' },
		figures: {
			kicker: 'In figures',
			title: 'Seven provinces, one region.',
			provinces: 'Provinces',
			population: 'Residents'
		},
		map: {
			kicker: 'The seven territories',
			title: 'Choose your territory.',
			lede: 'Every province page shows its key sectors, its figures and what is live on the platform right now.'
		},
		areas: {
			kicker: 'Destination areas',
			title: 'Additional destination areas.',
			lede: 'Twelve areas that cross and connect the seven provinces, from the lagoon to the Dolomites.',
			items: {
				venice: 'Venice and its Lagoon',
				verona: 'Verona',
				padua: 'Padua',
				vicenza: 'Vicenza and the Pedemontana',
				treviso: 'Treviso and the Prosecco Hills',
				belluno: 'Belluno and the Dolomites',
				garda: 'Lake Garda',
				brenta: 'Brenta Riviera',
				euganean: 'Euganean Hills and Thermal Area',
				asiago: 'Asiago Plateau',
				beaches: 'Adriatic Beaches',
				delta: 'Po Delta'
			}
		},
		billboard: {
			line1: 'Do not reduce',
			line2: 'a region',
			line3: 'to one city.'
		},
		table: {
			kicker: 'Compare',
			title: 'Businesses by territory.',
			window: 'Seven provinces compared',
			territory: 'Territory',
			role: 'Profile',
			registered: 'Registered businesses*',
			population: 'Residents*',
			density: 'Per 1,000 residents',
			sectors: 'Key sectors'
		},
		closing: {
			title: 'Is your company in Veneto?',
			text: 'Create your free profile and be found across all seven provinces.',
			cta: 'Register your company'
		}
	},
	territory: {
		seo: {
			title: '{name}: business, sectors and opportunities',
			description: '{name} on Veneto.app: {role}. Key sectors, figures, companies and opportunities in the province of {name}.'
		},
		companies: 'companies',
		opportunities: 'opportunities',
		events: 'events',
		openOpportunities: 'open opportunities',
		upcomingEvents: 'upcoming events',
		explore: 'Explore {name}',
		find: 'Find companies in {name}',
		register: 'Register your company in {name}',
		mainTowns: 'Main towns',
		capital: 'Capital: {name}',
		mapTitle: 'Map of the province of {name} with its main towns',
		nav: {
			figures: 'In figures',
			sectors: 'Key sectors',
			live: 'Live now',
			platform: 'The platform',
			others: 'Other territories'
		},
		figures: {
			title: '{name} in figures.',
			onPlatform: 'Companies on the platform'
		},
		sectors: {
			title: 'What {name} does best.',
			window: 'Registered businesses by industry',
			note: 'Share of registered businesses in selected industries. Indicative, rounded.'
		},
		live: {
			title: 'Live in {name} now.',
			joinEyebrow: 'Is your company missing?',
			joinTitle: 'Put your company on the map of {name}.',
			joinText: 'A free profile takes a few minutes.'
		},
		platform: { title: 'The platform in {name}.' },
		others: { title: 'The other six territories.' },
		closing: {
			title: 'Is your company in {name}?',
			text: 'Join the businesses of {name} on Veneto.app. Free to start.'
		}
	},
	industriesPage: {
		seo: {
			title: 'Business & Industry in Veneto: companies and sectors',
			description: 'Discover companies, manufacturers, suppliers, professionals and industrial ecosystems operating across Veneto, in seventeen industry categories.'
		},
		hero: {
			eyebrow: 'The productive Veneto',
			line1: 'This region',
			line2: 'knows how',
			line3: 'to make things happen.',
			text: 'Discover companies, manufacturers, suppliers, professionals and industrial ecosystems operating across Veneto.',
			secondary: 'See the industries',
			chip: 'industry categories'
		},
		categories: {
			kicker: 'Industry categories',
			title: 'Seventeen ways Veneto works.',
			lede: 'From machinery to eyewear, from wine to digital technology: the sectors that keep the regional economy moving.',
			missing: 'Your sector is not listed? Every business in Veneto is welcome.',
			items: {
				advanced: 'Advanced manufacturing',
				machinery: 'Machinery and automation',
				fashion: 'Fashion and textiles',
				eyewear: 'Eyewear',
				jewellery: 'Jewellery',
				furniture: 'Furniture and interior design',
				agrifood: 'Agrifood',
				wine: 'Wine and beverages',
				logistics: 'Logistics and transport',
				construction: 'Construction',
				energy: 'Energy',
				chemicals: 'Chemicals and materials',
				health: 'Healthcare and life sciences',
				digital: 'Digital technology',
				tourism: 'Tourism and hospitality',
				creative: 'Cultural and creative industries',
				services: 'Professional services'
			}
		},
		billboard: {
			line1: 'Small company?',
			line2: 'Big market?',
			line3: 'Welcome to Veneto.'
		},
		cta: {
			title: 'Put your company on the Veneto map.',
			text: 'Create a premium company profile and become visible to regional and international partners.',
			button: 'Present your business'
		}
	},
	investPage: {
		seo: {
			title: 'Invest in Veneto: companies, properties and projects',
			description: 'Discover companies, projects, properties and professional networks within one of Italy’s most internationally connected regions.'
		},
		hero: {
			eyebrow: 'Investment & opportunity',
			line1: 'Invest where',
			line2: 'enterprise already',
			line3: 'has deep roots.',
			text: 'Discover companies, projects, properties and professional networks within one of Italy’s most internationally connected regions.',
			secondary: 'See the categories',
			chip: 'investment categories'
		},
		stage: {
			title: 'Open opportunities',
			items: {
				site: { type: 'Industrial location', name: 'Production site with logistics access', place: 'Vicenza' },
				hotel: { type: 'Hospitality property', name: 'Boutique hotel seeking investor', place: 'Lake Garda · Verona' },
				winery: { type: 'Winery opportunity', name: 'Family winery open to partnership', place: 'Prosecco Hills · Treviso' }
			}
		},
		categories: {
			kicker: 'Investment categories',
			title: 'Where capital meets the territory.',
			lede: 'From industrial sites to wine estates, from startups to cultural regeneration: thirteen ways to invest in Veneto.',
			items: {
				business: 'Business investment',
				industrial: 'Industrial locations',
				commercial: 'Commercial real estate',
				hospitality: 'Hospitality properties',
				tourism: 'Tourism projects',
				agricultural: 'Agricultural estates',
				winery: 'Winery opportunities',
				innovation: 'Innovation projects',
				startup: 'Startup opportunities',
				energy: 'Energy and sustainability',
				cultural: 'Cultural regeneration',
				logistics: 'Logistics and infrastructure',
				advisory: 'Professional advisory services'
			}
		},
		billboard: {
			line1: 'The opportunity',
			line2: 'is not only',
			line3: 'in the view.'
		},
		cta: {
			title: 'Have an investment opportunity to present?',
			button: 'Submit an opportunity'
		}
	},
	internationalPage: {
		seo: {
			title: 'Internationalisation: Veneto companies and international markets',
			description: 'Connect Veneto companies with international buyers, distributors, consultants, investors and project partners.'
		},
		hero: {
			eyebrow: 'From Veneto to international markets',
			line1: 'Go further.',
			line2: 'Without losing',
			line3: 'where you come from.',
			text: 'Connect Veneto companies with international buyers, distributors, consultants, investors and project partners.',
			secondary: 'See the services',
			chip: 'international routes',
			featured: 'Serbia · Balkans',
			chip2: 'Veneto · Serbia · Balkans'
		},
		services: {
			kicker: 'Main services',
			title: 'Seven ways to reach new markets.',
			lede: 'From the first contact abroad to delegations and cross-border projects, with a dedicated bridge to Serbia and the Balkans.',
			items: {
				markets: {
					title: 'Market connections',
					text: 'Discover companies and professionals interested in international cooperation.'
				},
				export: {
					title: 'Export support',
					text: 'Find expertise related to market research, commercial development, communication, logistics and distribution.'
				},
				exchange: {
					title: 'Business exchange',
					text: 'Create connections between Veneto and international business communities.'
				},
				partners: {
					title: 'International partners',
					text: 'Search for distributors, technology providers, consultants and project organisations.'
				},
				crossBorder: {
					title: 'Cross-border projects',
					text: 'Develop cooperation connected with innovation, culture, tourism, sustainability, training and regional development.'
				},
				balkans: {
					title: 'Balkans and Serbia connections',
					text: 'Create new business and project connections between Veneto, Serbia and the wider Balkan market through the professional network of ZOE MILANO.'
				},
				events: {
					title: 'Events and delegations',
					text: 'Promote business meetings, fairs, delegations and international exchange programmes.'
				}
			}
		},
		billboard: {
			line1: 'Local identity.',
			line2: 'No borders.'
		},
		cta: {
			title: 'Looking for an international partner?',
			button: 'Request a business connection'
		}
	},
	tourismPage: {
		seo: {
			title: 'Culture & Tourism in Veneto: from the Dolomites to the Adriatic',
			description: 'Explore Veneto from the Dolomites to the Adriatic, through historic cities, lakes, vineyards, thermal destinations and cultural landscapes.'
		},
		hero: {
			eyebrow: 'Culture, landscape, experience',
			line1: 'One region.',
			line2: 'Many reasons',
			line3: 'to return.',
			text: 'Explore a territory extending from the Dolomites to the Adriatic, through historic cities, lakes, vineyards, thermal destinations and cultural landscapes.',
			secondary: 'See the categories',
			chip: 'ways to experience Veneto',
			chip2: 'From the Dolomites to the Adriatic'
		},
		categories: {
			kicker: 'Categories',
			title: 'Sixteen reasons, and counting.',
			lede: 'From the lagoon to the peaks, from galleries to vineyards: the experiences that bring people to Veneto, and bring them back.',
			items: {
				venice: 'Venice and its Lagoon',
				artCities: 'Art cities',
				dolomites: 'Dolomites and mountain experiences',
				garda: 'Lake Garda',
				coast: 'Adriatic coast',
				prosecco: 'Prosecco Hills',
				thermal: 'Thermal tourism',
				heritage: 'Cultural heritage',
				architecture: 'Architecture and design',
				museums: 'Museums and galleries',
				cycling: 'Cycling and slow tourism',
				sport: 'Sport and outdoor activities',
				events: 'Events and festivals',
				business: 'Business tourism',
				luxury: 'Luxury hospitality',
				local: 'Local experiences'
			}
		},
		billboard: {
			line1: 'Venice is iconic.',
			line2: 'Veneto is endless.'
		},
		cta: {
			title: 'Create an experience worth travelling for.',
			button: 'Present your experience'
		}
	},
	agriPage: {
		seo: {
			title: 'Agrifood & Wine in Veneto: wineries, producers and export',
			description: 'Discover wineries, food producers, agricultural companies, hospitality businesses and the people behind Veneto’s international food and wine identity.'
		},
		hero: {
			eyebrow: 'From territory to international tables',
			line1: 'Made with land.',
			line2: 'Built for the world.',
			text: 'Discover wineries, food producers, agricultural companies, hospitality businesses and the people behind Veneto’s international food and wine identity.',
			secondary: 'See the categories',
			chip: 'food & wine categories'
		},
		stage: {
			title: 'Producers on the platform',
			items: {
				winery: { type: 'Winery', name: 'Family winery looking for importers', place: 'Valpolicella · Verona' },
				dairy: { type: 'Cheese', name: 'Mountain dairy open to distributors', place: 'Asiago Plateau · Vicenza' },
				oil: { type: 'Olive oil', name: 'Olive oil mill seeking export partners', place: 'Lake Garda · Verona' }
			}
		},
		categories: {
			kicker: 'Categories',
			title: 'From the vineyard to the table.',
			lede: 'Sixteen ways into Veneto’s food and wine economy: producers, places, technology and the businesses that take it abroad.',
			items: {
				wineries: 'Wineries',
				wineExperiences: 'Wine experiences',
				prosecco: 'Prosecco',
				amarone: 'Amarone and Valpolicella',
				soave: 'Soave',
				regionalWines: 'Regional wines',
				food: 'Food producers',
				agricultural: 'Agricultural businesses',
				organic: 'Organic production',
				oliveOil: 'Olive oil',
				cheese: 'Cheese',
				artisan: 'Artisan products',
				foodTech: 'Food technology',
				packaging: 'Packaging',
				export: 'Export and distribution',
				restaurants: 'Restaurants and hospitality'
			}
		},
		billboard: {
			line1: 'The product is local.',
			line2: 'The ambition is global.'
		},
		cta: {
			title: 'Does your product belong here?',
			button: 'Present your company'
		}
	},
	eventsPage: {
		seo: {
			title: 'Events in Veneto: fairs, conferences, culture and business meetings',
			description: 'Discover business fairs, cultural events, conferences, wine experiences, festivals and professional meetings across Veneto.'
		},
		hero: {
			eyebrow: 'What is happening in Veneto',
			line1: 'Meet. Exhibit.',
			line2: 'Exchange. Move.',
			text: 'Discover business fairs, cultural events, conferences, wine experiences, festivals and professional meetings across the region.',
			cta: 'See the calendar',
			chip: 'events this week'
		},
		stage: { title: 'Coming up' },
		filters: {
			label: 'Filter events',
			all: 'All events',
			today: 'Today',
			week: 'This week',
			business: 'Business',
			industry: 'Industry',
			international: 'Internationalisation',
			funding: 'Funding',
			innovation: 'Innovation',
			culture: 'Culture',
			tourism: 'Tourism',
			foodWine: 'Food and wine',
			sport: 'Sport',
			local: 'Local events'
		},
		list: {
			kicker: 'Event calendar',
			title: 'The region’s calendar.',
			lede: 'Filter by date or by theme. Every event is linked to its place, so you can see where Veneto is meeting.',
			results: '{count} events',
			empty: 'No events match this filter yet.',
			note: 'These are sample events showing how the calendar will work. Real events will replace them as organisers publish.'
		},
		items: {
			exportBreakfast: { title: 'Export breakfast: selling to the DACH market', place: 'Padova' },
			fundingClinic: { title: 'EU funding clinic for small manufacturers', place: 'Vicenza' },
			openFactory: { title: 'Open factory day: precision mechanics', place: 'Treviso' },
			startupNight: { title: 'Startup pitch night', place: 'Verona' },
			wineBuyers: { title: 'Wine tasting for international buyers', place: 'Valpolicella · Verona' },
			villaConcert: { title: 'Evening concert in a Palladian villa', place: 'Vicenza' },
			trailRun: { title: 'Dolomites trail run', place: 'Belluno' },
			deltaFestival: { title: 'Po Delta local food festival', place: 'Rovigo' },
			lagoonForum: { title: 'Forum on lagoon tourism and culture', place: 'Venezia' },
			balkanMission: { title: 'Business mission: Veneto meets Serbia', place: 'Venezia' }
		},
		cta: {
			title: 'Organising an event in Veneto?',
			button: 'Promote an event'
		}
	},
	platformPage: {
		seo: {
			title: 'The Veneto.app platform: funding, matchmaking and projects',
			description: 'One connected environment for funding intelligence, business matchmaking, project management and international cooperation in Veneto.'
		},
		hero: {
			eyebrow: 'Veneto.app digital platform',
			line1: 'Find funding.',
			line2: 'Meet partners.',
			line3: 'Build projects.',
			text1: 'One connected environment for funding intelligence, business matchmaking, project management and international cooperation.',
			text2: 'Explore public information on Veneto.app. Join the network and continue in the mobile application to access complete operational tools.',
			cta: 'Explore the platform',
			secondary: 'Access the mobile app',
			chip: 'connected tools',
			chip2: 'Web + mobile app'
		},
		phone: { hello: 'Good morning. Three new matches today.' },
		tools: {
			kicker: 'Platform tools',
			title: 'Everything connects.',
			lede: 'Funding, partners and projects in the same place: a call you find in BandiHub becomes a match, then a project you can run with your partners.'
		},
		steps: {
			kicker: 'How the platform works',
			title: 'Seven steps from profile to project.',
			lede: 'Start on the web, continue in the mobile app: each step builds on the one before.',
			step: 'Step {n}',
			inApp: 'Mobile app',
			items: {
				profile: { title: 'Create your profile', text: 'Register as a company, consultant, organisation, investor or professional.' },
				interests: { title: 'Select your interests', text: 'Choose provinces, industries, markets, funding areas and project objectives.' },
				discover: { title: 'Discover opportunities', text: 'Browse companies, funding previews, projects and international connections.' },
				membership: { title: 'Select your membership', text: 'Choose the access level appropriate for your needs.' },
				app: { title: 'Continue in the mobile app', text: 'Access complete funding details, matchmaking, alerts and private operational tools.' },
				network: { title: 'Build your network', text: 'Connect with qualified companies, experts and project partners.' },
				projects: { title: 'Develop and manage projects', text: 'Organise documents, tasks, deadlines and communication in the private project area.' }
			}
		},
		channels: {
			kicker: 'Web and app',
			title: 'Start on the web. Continue in the app.',
			web: {
				title: 'On Veneto.app',
				text: 'Public information, open to everyone.',
				p1: 'Browse funding calls and opportunities',
				p2: 'Discover companies across the seven provinces',
				p3: 'Follow events, territories and industries',
				p4: 'Create your company profile'
			},
			app: {
				title: 'In the mobile app',
				text: 'Complete operational tools for members.',
				p1: 'Full funding details and personalised alerts',
				p2: 'Smart matchmaking with partners and experts',
				p3: 'Project management with your partners',
				p4: 'Private messages and collaboration requests'
			}
		},
		closing: { title: 'Ready to work with Veneto?' }
	},
	bandihubPage: {
		seo: {
			title: 'BandiHub: European, national and regional funding for Veneto',
			description: 'Explore a structured database of European, national and regional funding calls, incentives and digital vouchers for Veneto businesses.'
		},
		hero: {
			eyebrow: 'BandiHub',
			line1: 'Updated funding',
			line2: 'opportunities.',
			text: 'Explore a structured database of European, national and regional funding calls, incentives and digital vouchers.'
		},
		searchCta: 'Search funding opportunities',
		unlock: 'Unlock in the app',
		locked: 'Complete funding details are available to Premium members through the mobile application.',
		search: {
			kicker: 'Funding search',
			title: 'Find the right call.',
			lede: 'Search by region, province, industry, organisation type, instrument, project category, status and dates.',
			placeholder: 'Search funding calls',
			any: 'Any',
			results: '{count} calls',
			reset: 'Reset filters',
			empty: 'No calls match these filters. Try removing one.',
			note: 'These are sample calls showing how BandiHub search will work. Real calls will replace them; always check the official source before applying.'
		},
		filters: {
			region: { label: 'Region', veneto: 'Veneto', italy: 'Italy (national)', eu: 'European Union' },
			province: { label: 'Province' },
			industry: {
				label: 'Industry',
				manufacturing: 'Manufacturing',
				craft: 'Craft and design',
				tourism: 'Tourism',
				agrifood: 'Agrifood',
				digital: 'Digital technology',
				culture: 'Culture',
				research: 'Research'
			},
			orgType: {
				label: 'Organisation type',
				sme: 'Small and medium enterprise',
				large: 'Large company',
				startup: 'Startup',
				research: 'University or research body',
				public: 'Public body',
				farm: 'Farm',
				nonprofit: 'Non-profit'
			},
			instrument: { label: 'Funding instrument', grant: 'Grant', voucher: 'Voucher', loan: 'Subsidised loan', taxCredit: 'Tax credit' },
			category: {
				label: 'Project category',
				digital: 'Digitalisation',
				sustainability: 'Sustainability',
				internationalisation: 'Internationalisation',
				tourism: 'Tourism',
				innovation: 'Innovation and research',
				culture: 'Culture',
				agrifood: 'Agrifood'
			},
			status: { label: 'Call status', open: 'Open', upcoming: 'Opening soon', closed: 'Closed' },
			opening: { label: 'Opening date', openNow: 'Already open', next30: 'Within 30 days' },
			deadline: { label: 'Deadline', d30: 'Within 30 days', d90: 'Within 90 days', later: 'Later than 90 days' }
		},
		card: {
			deadline: 'Deadline',
			opens: 'Opens',
			budget: 'Budget',
			intensity: 'Funding intensity',
			costs: 'Eligible costs'
		},
		calls: {
			digital: { title: 'Digital transition voucher', eligibility: 'Small and medium enterprises based in Veneto' },
			green: { title: 'Green manufacturing programme', eligibility: 'Manufacturers in the EU, alone or in partnership' },
			craft: { title: 'Craft & design export grant', eligibility: 'Craft and design SMEs selling abroad' },
			hospitality: { title: 'Hospitality renewal loan', eligibility: 'Hotels and tourism businesses in Belluno, Verona and Venezia' },
			research: { title: 'Research partnerships call', eligibility: 'Research bodies working with companies' },
			startup: { title: 'Startup innovation tax credit', eligibility: 'Innovative startups registered in Italy' },
			heritage: { title: 'Cultural heritage regeneration', eligibility: 'Public bodies and non-profits in Venezia, Vicenza and Padova' },
			farms: { title: 'Rural development measure for farms', eligibility: 'Farms and agrifood SMEs in Rovigo, Treviso and Verona' }
		},
		access: {
			kicker: 'What you can access',
			title: 'Search on the web. Apply with full details in the app.',
			web: {
				title: 'Available on Veneto.app',
				search: 'Public funding search',
				filters: 'Advanced filters',
				previews: 'Funding-call previews',
				eligibility: 'Basic eligibility information',
				deadlines: 'Deadlines',
				alerts: 'Registration for alerts'
			},
			app: {
				title: 'Available to Premium members in the mobile app',
				profiles: 'Complete funding-call profiles',
				requirements: 'Eligibility requirements',
				costs: 'Eligible costs',
				budgets: 'Available budgets',
				intensity: 'Funding intensity',
				cofinancing: 'Co-financing requirements',
				documents: 'Required documentation',
				saved: 'Saved opportunities',
				recommendations: 'Personalised recommendations',
				experts: 'Expert-support requests'
			}
		}
	},
	matchPage: {
		seo: {
			title: 'Smart Matchmaking: business partners in Veneto',
			description: 'Veneto.app connects companies, consultants, technology providers, professionals, investors and project organisations with complementary objectives and expertise.'
		},
		hero: {
			line1: 'Connections that',
			line2: 'become collaboration.',
			text: 'Veneto.app connects companies, consultants, technology providers, professionals, investors and project organisations with complementary objectives and expertise.',
			chip: 'Every match explains why',
			chip2: 'Private until you connect'
		},
		cta: 'Start matchmaking',
		label: 'Available in the mobile app',
		stage: {
			title: 'Recommended matches',
			score: '{score}% match · {reason}',
			reasons: {
				distribution: 'Export partner',
				supplier: 'Supplier',
				research: 'Research partner'
			}
		},
		criteria: {
			kicker: 'Matching criteria',
			title: 'Matches built on what really fits.',
			lede: 'Matchmaking may be based on eleven criteria, so every suggestion comes with a reason you can check.',
			items: {
				territory: 'Territory',
				industry: 'Industry',
				expertise: 'Expertise',
				project: 'Project requirements',
				funding: 'Funding interests',
				markets: 'Export markets',
				budget: 'Available budget',
				technology: 'Technology requirements',
				objectives: 'Partnership objectives',
				languages: 'Languages',
				international: 'International experience'
			}
		},
		functions: {
			kicker: 'Premium mobile app functions',
			title: 'From a match to a project.',
			lede: 'In the mobile app, Premium members move from discovery to real collaboration.',
			items: {
				matches: 'Recommended business matches',
				profiles: 'Complete member profiles',
				consultants: 'Consultant discovery',
				suppliers: 'Supplier discovery',
				technology: 'Technology-partner search',
				connections: 'Connection requests',
				projectInterest: 'Project-interest requests',
				introductions: 'Expert introductions',
				groups: 'Private project groups',
				workflows: 'Future pre-engagement workflows'
			}
		},
		billboard: {
			line1: 'Your next partner',
			line2: 'may already be',
			line3: 'in the network.'
		}
	},
	contactPage: {
		seo: {
			title: 'Contact Veneto.app',
			description: 'Contact Veneto.app regarding business profiles, investment, funding, internationalisation, events, partnerships or digital services. Email info@zoemilano.com.'
		},
		hero: {
			eyebrow: 'Contact',
			line1: 'Let us start',
			line2: 'with a conversation.',
			text: 'Contact Veneto.app regarding business profiles, investment, funding, internationalisation, events, partnerships or digital services.'
		},
		email: 'Email',
		owner: 'Veneto.app is a platform by',
		reasons: {
			business: 'Present a business',
			join: 'Join the network',
			matchmaking: 'Request matchmaking',
			investment: 'Submit an investment opportunity',
			funding: 'Find a funding programme',
			expert: 'Request an expert connection',
			event: 'Promote an event',
			internationalisation: 'Discuss internationalisation',
			digital: 'Request digital services',
			general: 'General information'
		},
		form: {
			kicker: 'Send an enquiry',
			title: 'How can we help?',
			lede: 'Choose the reason for your enquiry and tell us a little about it. We will reply by email.',
			reason: 'Contact reason',
			name: 'Name and surname',
			organisation: 'Company or organisation',
			email: 'Email',
			phone: 'Phone',
			message: 'Your message',
			consent: 'I agree that Veneto.app may use these details to reply to my enquiry, as described in the',
			submit: 'Send enquiry',
			sending: 'Sending…',
			or: 'Or write directly to',
			subject: 'Enquiry from Veneto.app',
			sentTitle: 'Thank you. Your enquiry has been sent.',
			sentText: 'We will reply to the email address you provided.',
			unavailable: 'The online form is not active yet. Please send your enquiry by email to',
			errors: {
				reason: 'Please choose a contact reason.',
				name: 'Please enter your name.',
				email: 'Please enter a valid email address.',
				message: 'Please write a short message.',
				consent: 'Please confirm that we may use your details to reply.'
			}
		}
	},
	alertsPage: {
		seo: {
			title: 'Smart Funding Alerts: funding opportunities for your business',
			description: 'Receive relevant funding notifications based on your company profile, sector, province and project interests.'
		},
		hero: {
			eyebrow: 'Smart Funding Alerts',
			line1: 'Opportunities selected',
			line2: 'around your business.',
			text: 'Receive relevant notifications based on your company profile, sector, province and project interests.',
			chip: 'alert types',
			chip2: 'delivery channels'
		},
		cta: 'Activate funding alerts',
		phone: {
			date: 'Tuesday, 14 March',
			items: {
				match: { when: 'now', title: 'New call matches your profile', text: 'Digital transition voucher · Veneto' },
				deadline: { when: '1h ago', title: 'Deadline in 7 days', text: 'Craft & design export grant' },
				opening: { when: 'Yesterday', title: 'Opening soon', text: 'Hospitality renewal loan · opens in 15 days' }
			}
		},
		types: {
			kicker: 'Alert types',
			title: 'Only what concerns you.',
			lede: 'Choose the alerts that matter. Each one is filtered by your profile, so you hear about the right calls and nothing else.',
			join: 'Set up your alerts in a few minutes.',
			items: {
				newCalls: 'New funding calls',
				openingSoon: 'Calls opening soon',
				deadlines: 'Upcoming deadlines',
				vouchers: 'Digital vouchers',
				regional: 'Regional incentives',
				national: 'National programmes',
				european: 'European programmes',
				international: 'Internationalisation opportunities',
				partners: 'Partner searches',
				experts: 'Expert recommendations'
			}
		},
		channels: {
			kicker: 'Delivery channels',
			title: 'Where you want them.',
			lede: 'Instantly on your phone, in a weekly summary or by email: you decide how and how often.',
			optional: 'Optional',
			items: {
				push: 'Mobile push notifications',
				inApp: 'In-app notifications',
				email: 'Email alerts',
				summaries: 'Periodic summaries',
				newsletter: 'Newsletter'
			}
		}
	},
	projectPage: {
		seo: {
			title: 'Private Project Area: your project workspace on Veneto.app',
			description: 'Premium members organise projects, partners, documents, responsibilities and deadlines within one private digital environment.'
		},
		hero: {
			eyebrow: 'Private Project Area',
			line1: 'Your operational',
			line2: 'project workspace.',
			text: 'Premium members can organise projects, partners, documents, responsibilities and deadlines within one private digital environment.',
			chip: 'Private to your team',
			chip2: 'partners on this project'
		},
		cta: 'Open project workspace',
		label: 'Premium mobile app feature',
		stage: {
			label: 'Active project',
			title: 'Green packaging line',
			progress: 'Progress',
			phases: {
				idea: 'Idea',
				funding: 'Funding',
				prototype: 'Prototype',
				testing: 'Testing',
				launch: 'Launch'
			},
			tasks: {
				quotes: { name: 'Upload supplier quotes', due: 'Done' },
				documents: { name: 'Review funding documents', due: 'In 3 days' },
				meeting: { name: 'Partner meeting in Padova', due: 'Next week' }
			}
		},
		functions: {
			kicker: 'Functions',
			title: 'Everything the project needs, in one place.',
			lede: 'From the first phase to delivery: partners, files, tasks and deadlines stay together, private to the people you invite.',
			items: {
				dashboard: 'Active-project dashboard',
				phases: 'Project phases',
				progress: 'Progress monitoring',
				access: 'Team and partner access',
				folders: 'Document folders',
				sharing: 'Secure file sharing',
				tasks: 'Task assignment',
				deadlines: 'Deadline monitoring',
				workflows: 'Visual workflows',
				history: 'Activity history',
				consultants: 'Consultant access',
				innovation: 'Innovation-manager coordination',
				realtime: 'Real-time collaboration'
			}
		}
	},
	messagingPage: {
		seo: {
			title: 'Messaging & Video Calls: integrated communication on Veneto.app',
			description: 'Direct messages, project groups, files, meeting requests, voice and video calls between members, partners and experts, progressively in the Veneto.app mobile app.'
		},
		hero: {
			eyebrow: 'Messaging & video calls',
			line1: 'Integrated',
			line2: 'communication.',
			text: 'The mobile application will progressively provide messaging, calls and introductions between members, partners and experts, right next to your projects.',
			chip: 'communication tools'
		},
		cta: 'Connect in the app',
		label: 'Rolling out progressively',
		phone: {
			group: 'Project group · 3 members',
			m1: 'We can ship the first samples to Munich next week.',
			m2: 'Great. Can we confirm on a video call?',
			m3: 'Sure, here is the logistics plan.',
			file: 'Logistics-plan.pdf',
			meeting: 'Video call · Thursday 10:00',
			/** Quick replies in the interactive hero, each with the answer it gets. */
			quick: {
				a: { send: 'Thursday works for us.', reply: 'Perfect, the invite is in your calendar.' },
				b: { send: 'Can you add the customs documents?', reply: 'Sure, uploading them to the project folder.' },
				c: { send: 'Who else joins the call?', reply: 'Our export manager and the consultant from Padova.' }
			}
		},
		features: {
			kicker: 'What the app will provide',
			title: 'Every conversation, next to the work.',
			lede: 'The mobile application will progressively provide these communication tools, so partners and experts stay one tap away.',
			join: 'Rolling out progressively in the mobile app.',
			items: {
				direct: 'Direct member messaging',
				groups: 'Project-group conversations',
				files: 'File attachments',
				experts: 'Expert consultations',
				meetings: 'Meeting requests',
				voice: 'Voice calls',
				video: 'Video calls',
				history: 'Conversation history',
				introductions: 'Partner introductions',
				notifications: 'In-app notifications'
			}
		}
	},
	aiPage: {
		seo: {
			title: 'Future AI Assistant on Veneto.app',
			description: 'A future AI assistant may help users search funding opportunities, identify partners, navigate the platform and prepare questions for professional advisors.'
		},
		hero: {
			eyebrow: 'Future AI assistant',
			line1: 'A guide',
			line2: 'for your next step.',
			text: 'A future AI assistant may help you search funding, understand filters, identify partners and find the right services, always as a starting point, never as a substitute for a professional.'
		},
		status: 'In development · not available yet',
		stage: {
			notice: 'You are chatting with an AI system',
			question: 'Which calls fit a small manufacturer in Treviso?',
			tag: 'AI',
			answer: 'Two open calls may fit your profile. Check the official requirements before applying.',
			r1: 'Digital transition voucher',
			r2: 'Ask an expert to review eligibility',
			disclaimer: 'Not legal, financial or funding advice.',
			badge: 'Concept',
			/** More sample questions for the interactive hero (the first is question / answer / r1 / r2 above). */
			q2: {
				question: 'Find importers for our wine in Germany',
				answer: 'Three verified importers and one trade fair match your profile. You can contact them through the platform.',
				r1: 'Importers in Bavaria and Hamburg',
				r2: 'Trade fair in Düsseldorf, March'
			},
			q3: {
				question: 'What do I need to start a funded project?',
				answer: 'Most calls ask for a budget, a timeline and partner letters. Your project workspace has a folder for each.',
				r1: 'Budget and timeline templates',
				r2: 'Shared folders with access control'
			}
		},
		help: {
			kicker: 'What it may help with',
			title: 'A faster way through the platform.',
			lede: 'The assistant may help users with seven everyday tasks.',
			join: 'In development. Join the network to hear when it launches.',
			items: {
				funding: 'Search funding opportunities',
				filters: 'Understand filters',
				partners: 'Identify potential partners',
				navigate: 'Navigate the platform',
				project: 'Prepare initial project information',
				advisors: 'Organise questions for professional advisors',
				services: 'Find relevant services'
			}
		},
		principles: {
			kicker: 'Transparency',
			title: 'Clear about what it is, and what it is not.',
			disclosure: {
				title: 'You will always know it is AI',
				text: 'Users will always be informed that they are interacting with an AI system.'
			},
			advice: {
				title: 'Guidance, not guaranteed advice',
				text: 'AI responses will never be presented as guaranteed legal, financial or funding advice. For decisions, talk to a qualified professional.'
			}
		},
		closing: {
			title: 'Real experts are already in the network.',
			text: 'Until the assistant arrives, and after it too, the right advice comes from people.'
		}
	},
	membershipPage: {
		seo: {
			title: 'Membership plans: Z Free, Z Region, Z Business, Z Ecosystem',
			description: 'Start free on Veneto.app, or choose Z Region (€100 a year), Z Business (€200 a year) or Z Ecosystem (€300 a year) for complete funding details, matchmaking and project tools.'
		},
		hero: {
			eyebrow: 'Membership plans',
			line1: 'Choose your',
			line2: 'access level.',
			text: 'Start free and discover the public ecosystem. Grow into the plan that fits your work, your team and your markets.'
		},
		perYear: 'per year',
		includes: 'Includes',
		platformsTitle: 'Participating platforms may include',
		futurePlatforms: 'Future territorial platforms',
		note: 'Paid plans are billed per year.',
		payment: {
			kicker: 'Payment information',
			title: 'Simple payment by bank transfer.',
			lede: 'Payment is currently available by bank transfer.',
			steps: {
				transfer: { title: 'Register and receive the instructions', text: 'Following registration, you receive the payment instructions for your chosen plan.' },
				receipt: { title: 'Upload your receipt', text: 'Make the bank transfer and upload the receipt through the registration process.' },
				activation: { title: 'Membership activated', text: 'Your membership is activated after payment verification.' }
			}
		},
		closing: {
			title: 'Not sure which plan fits?',
			text: 'Start with a free account and upgrade when you are ready, or write to us and we will help you choose.'
		},
		plans: {
			free: {
				name: 'Free',
				price: 'Free',
				for: 'For users who want to discover the public Veneto.app ecosystem.',
				cta: 'Register for free',
				features: {
					f1: 'Public platform access',
					f2: 'Company and opportunity previews',
					f3: 'Funding-call previews',
					f4: 'Basic search',
					f5: 'Basic alerts',
					f6: 'Public events',
					f7: 'Free account'
				}
			},
			region: {
				name: 'Region',
				price: '€100',
				for: 'For professionals, consultants and individual business members focused on Veneto.',
				cta: 'Join Z Region',
				features: {
					f1: 'Complete funding-call profiles',
					f2: 'Advanced search',
					f3: 'Saved opportunities',
					f4: 'Professional member profile',
					f5: 'Personalised funding alerts',
					f6: 'Regional matchmaking',
					f7: 'Direct enquiries',
					f8: 'Mobile-app access',
					f9: 'Private messaging',
					f10: 'Veneto project-workspace access'
				}
			},
			business: {
				name: 'Business',
				price: '€200',
				for: 'For companies, organisations, associations and business teams.',
				cta: 'Join Z Business',
				features: {
					f1: 'All Z Region functions',
					f2: 'Premium company profile',
					f3: 'Team access',
					f4: 'Advanced matchmaking',
					f5: 'Expert introductions',
					f6: 'Project-partner search',
					f7: 'Private project workspace',
					f8: 'Shared documentation',
					f9: 'Tasks and deadlines',
					f10: 'Messaging and video calls',
					f11: 'Internationalisation opportunities'
				}
			},
			ecosystem: {
				name: 'Ecosystem',
				price: '€300',
				for: 'For members who want access to the wider network of participating ZOE MILANO platforms.',
				cta: 'Access the ecosystem',
				features: {
					f1: 'All Z Business functions',
					f2: 'Access to participating regional networks',
					f3: 'Cross-region matchmaking',
					f4: 'International partner discovery',
					f5: 'Ecosystem-wide visibility',
					f6: 'Priority expert introductions',
					f7: 'Selected platform benefits',
					f8: 'Future cross-platform opportunities'
				}
			}
		}
	},
	appPage: {
		seo: {
			title: 'ZOE MILANO Network app: regions, business, funding, connections',
			description: 'Discover on the web, connect and work in the app: complete funding details, matchmaking, alerts and private project tools in one account.'
		},
		name: 'ZOE MILANO Network',
		descriptor: 'Regions. Business. Funding. Connections.',
		hero: {
			line1: 'Discover on the web.',
			line2: 'Connect and work in the app.',
			chip: 'account, every region',
			chip2: 'iOS and Android'
		},
		cta: {
			text: 'Continue in the mobile app to access complete funding information, matchmaking and private project tools.',
			open: 'Open the app',
			download: 'Download the app',
			member: 'Become a member'
		},
		phone: {
			spaces: 'Your regional spaces',
			funding: '3 calls match your profile',
			fundingText: 'Full details and deadlines',
			matches: '2 new partner matches',
			matchesText: 'Lagunare Logistics, Precisa Meccanica'
		},
		features: {
			kicker: 'Mobile app features',
			title: 'One account. Every tool.',
			lede: 'Everything you discover on Veneto.app continues in the app, with the complete tools to act on it.',
			items: {
				account: 'One account',
				regions: 'Multiple regional spaces',
				funding: 'Complete funding-call details',
				alerts: 'Personalised alerts',
				matchmaking: 'Smart matchmaking',
				profiles: 'Member profiles',
				enquiries: 'Direct enquiries',
				workspaces: 'Project workspaces',
				documents: 'Shared documents',
				tasks: 'Tasks and deadlines',
				messaging: 'Messaging',
				video: 'Video calls',
				ai: 'Future AI assistance'
			}
		},
		download: {
			kicker: 'Get the app',
			title: 'Take Veneto.app with you.',
			text: 'Download ZOE MILANO Network from the App Store or Google Play and sign in with your Veneto.app account.',
			soon: 'ZOE MILANO Network is being prepared for the App Store and Google Play. Become a member now and your account will be ready on day one.',
			scan: 'Scan with your phone',
			scanText: 'Open this page on your phone to go straight to the app.'
		},
		closing: { title: 'Discover on the web. Work in the app.' }
	},
	aboutPage: {
		seo: {
			title: 'About Veneto.app: an independent digital platform for Veneto',
			description: 'Veneto.app is an independent digital platform created to connect the region’s territories, companies, industries and opportunities with a wider international network.'
		},
		hero: {
			eyebrow: 'About Veneto.app',
			line1: 'A global region',
			line2: 'deserves a connected',
			line3: 'digital future.',
			text: 'Veneto.app is an independent digital platform created to connect the region’s territories, companies, industries and opportunities with a wider international network.'
		},
		story: {
			kicker: 'How the idea began',
			title: 'A region of many strengths needs one point of connection.',
			p1: 'Veneto.app began with research, observation and a clear entrepreneurial vision.',
			p2: 'Veneto is internationally recognised through Venice, its cultural heritage, manufacturing capacity, export traditions, tourism, wine and specialised industries.',
			p3: 'Yet these strengths are often presented separately.',
			p4: 'The idea behind Veneto.app is to create one digital environment capable of bringing the complete regional ecosystem together.',
			p5: 'The platform connects territory with business, heritage with technology, local expertise with international markets and strong ideas with the people who can help develop them.',
			quote1: 'Veneto.app is not created to repeat what is already known about the region.',
			quote2: 'It is created to reveal how much more can be connected.'
		},
		mission: {
			kicker: 'Mission',
			title: 'Our mission is to:',
			items: {
				territory: 'Present the complete Veneto territory',
				companies: 'Support companies and professionals',
				industries: 'Promote regional industries',
				international: 'Encourage internationalisation',
				partners: 'Connect businesses with qualified partners',
				funding: 'Increase access to relevant funding information',
				projects: 'Support innovative and European projects',
				exchange: 'Create cultural and professional exchange',
				tools: 'Develop practical digital tools',
				markets: 'Connect Veneto with wider European and international markets'
			}
		},
		values: {
			kicker: 'Values',
			title: 'What guides the platform.',
			lede: 'Seven values shape every page, every connection and every tool on Veneto.app.',
			items: {
				identity: { title: 'Identity', text: 'We respect the history, industries and character of the territory.' },
				enterprise: { title: 'Enterprise', text: 'We recognise the people and companies that create real economic value.' },
				connection: { title: 'Connection', text: 'We connect businesses, experts, markets, projects and opportunities.' },
				innovation: { title: 'Innovation', text: 'We use technology to solve practical challenges.' },
				international: { title: 'International perspective', text: 'We help local strengths reach wider markets.' },
				quality: { title: 'Quality', text: 'We believe strong territories deserve carefully designed digital products.' },
				responsibility: { title: 'Responsibility', text: 'We support transparent communication, human review and responsible technology.' }
			}
		},
		founder: {
			kicker: 'Founder’s vision',
			line1: 'Vision begins',
			line2: 'by connecting',
			line3: 'what others',
			line4: 'keep separate.',
			p1: 'Veneto.app was conceived by Zorana Petrović, founder and CEO of ZOE MILANO d.o.o.',
			p2: 'Zorana is a technology entrepreneur, creative strategist, visionary and philanthropist whose professional and personal journey has been strongly connected with Italy, culture, creativity and international cooperation.',
			p3: 'Her background brings together technology, entrepreneurship, music, art, communication and the development of digital ecosystems.',
			p4: 'After studying and living in Milan and working for years with Italian companies, professionals and projects, she recognised the need for platforms that do more than promote a place.',
			p5: 'Her vision is to create digital environments that connect businesses, territories, funding, culture and international opportunities through practical technology.',
			p6: 'Veneto.app is part of that wider vision.',
			p7: 'It is designed as an evolving ecosystem where Veneto’s strong identity can meet new markets, new projects and new collaborations.',
			statementLabel: 'Founder statement',
			quote1: 'Veneto represents the kind of Italy that knows how to preserve its identity while continuously producing, exporting, creating and evolving.',
			quote2: 'The purpose of Veneto.app is to connect these strengths within one digital environment and make new business, cultural and international opportunities easier to discover.',
			role: 'Founder & CEO, ZOE MILANO d.o.o.'
		},
		bridge: {
			kicker: 'ZOE MILANO and Veneto',
			line1: 'Connecting Italian',
			line2: 'excellence with',
			line3: 'new markets.',
			text: 'ZOE MILANO’s position between Italy, Serbia and international markets creates a valuable perspective for business exchange and cross-border cooperation.',
			nodes: { italy: 'Italy', serbia: 'Serbia', world: 'International markets' },
			aimsTitle: 'Through Veneto.app, the company aims to support',
			closing: 'The platform respects Veneto’s local identity while creating practical opportunities for wider cooperation.',
			aims: {
				visibility: 'Regional business visibility',
				partnerships: 'International partnerships',
				italySerbia: 'Italy–Serbia business connections',
				balkans: 'Balkan-market access',
				technology: 'Technology partnerships',
				culture: 'Cultural exchange',
				europe: 'European cooperation',
				tourism: 'Tourism and territorial projects',
				matchmaking: 'Cross-platform matchmaking',
				digital: 'Digital transformation'
			}
		},
		zoe: {
			kicker: 'About ZOE MILANO',
			line1: 'Technology with',
			line2: 'an international',
			line3: 'perspective.',
			p1: 'ZOE MILANO d.o.o. is a technology, digital strategy and platform-development company based in Belgrade, Serbia, with a strong professional connection to Italy and the European market.',
			p2: 'Its Italian-market project experience has been developing since 2018 through cooperation with companies, professionals, organisations and territorial initiatives.',
			stat: 'digital platforms and projects developed or contributed to, across different sectors and markets',
			visit: 'Visit ZOE MILANO',
			productsTitle: 'ZOE MILANO develops digital products combining',
			objective: 'Its objective is to build connected digital ecosystems rather than isolated websites.',
			products: {
				web: 'Custom web platforms',
				mobile: 'Mobile applications',
				b2b: 'B2B networks',
				matchmaking: 'Business matchmaking',
				funding: 'Funding intelligence',
				membership: 'Membership systems',
				projects: 'Project-management tools',
				ecommerce: 'E-commerce',
				directories: 'Digital directories',
				tourism: 'Tourism technology',
				cultural: 'Cultural and territorial platforms',
				sports: 'Sports technology',
				ai: 'Artificial intelligence integrations',
				multilingual: 'Multilingual communication',
				international: 'Internationalisation',
				europe: 'European project networks'
			}
		}
	},
	legalPage: {
		seo: {
			title: 'Legal and independence statement',
			description: 'Veneto.app is an independent private digital platform developed and operated by ZOE MILANO d.o.o. It is not an official website of any public body.'
		},
		hero: {
			eyebrow: 'Veneto.app',
			line1: 'Legal and',
			line2: 'independence statement.'
		},
		clauses: {
			independent: {
				title: 'An independent private platform',
				text: 'Veneto.app is an independent private digital platform developed and operated by ZOE MILANO d.o.o.'
			},
			notOfficial: {
				title: 'Not an official website',
				text: 'It is not an official website of Regione del Veneto, any province or municipality, the Italian Government, the European Union, tourism authorities, chambers of commerce, funding agencies or managing bodies.'
			},
			funding: {
				title: 'Funding information',
				text: 'Funding information is provided for general informational purposes.'
			},
			noGuarantee: {
				title: 'No guaranteed results',
				text: 'Registration, membership or publication of an opportunity does not guarantee eligibility, application approval, funding, investment or commercial results.'
			},
			services: {
				title: 'Separate agreements for services',
				text: 'Professional services, funding applications, consultancy, project management and technical implementation are subject to separate agreements, scopes and fees.'
			}
		},
		contact: 'Questions about this statement?'
	},
	next: {
		eyebrow: 'What next?',
		title: 'Keep exploring.',
		territories: { name: 'Territories', text: 'Seven provinces, their sectors and what is live now.' },
		home: { name: 'Home', text: 'Start again from the overview of the platform.' },
		register: { name: 'Join Veneto.app', text: 'Create your free company profile.' }
	},
	soon: {
		status: 'This section is being built.',
		register: 'Join Veneto.app',
		home: 'Back to home'
	},
	error: {
		notFound: 'This page does not exist.',
		generic: 'Something went wrong.',
		text: 'The link may be old or mistyped. Try a search, or go back to the home page.',
		textGeneric: 'Please try again in a moment.'
	},
	footer: {
		statement: 'Veneto.app — Built for Veneto. Ready for the world.',
		about: 'An independent digital platform connecting Veneto’s territories, companies, projects and international opportunities.',
		provided: 'Developed and provided by',
		links: {
			territory: 'Territory',
			industries: 'Business & Industry',
			invest: 'Investment',
			internationalisation: 'Internationalisation',
			cultureTourism: 'Culture & Tourism',
			agrifoodWine: 'Agrifood & Wine',
			events: 'Events',
			bandihub: 'BandiHub',
			matchmaking: 'Smart Matchmaking',
			fundingAlerts: 'Funding Alerts',
			projectManagement: 'Project Management',
			app: 'Mobile App',
			membership: 'Membership',
			presentBusiness: 'Present a Business',
			submitOpportunity: 'Submit an Opportunity',
			findPartner: 'Find a Partner',
			promoteEvent: 'Promote an Event',
			submitProject: 'Submit a Project',
			requestExpert: 'Request an Expert',
			about: 'About Veneto.app',
			founder: 'Founder’s Vision',
			zoeMilano: 'About ZOE MILANO',
			contact: 'Contact',
			login: 'Log In',
			join: 'Join',
			legalNotice: 'Legal Notice',
			privacy: 'Privacy Policy',
			cookies: 'Cookie Policy',
			cookiePreferences: 'Cookie Preferences',
			terms: 'Terms and Conditions',
			dataProtection: 'Data Protection / GDPR',
			accessibility: 'Accessibility',
			aiNotice: 'AI Content Notice'
		},
		independence:
			'Veneto.app is an independent private platform. It is not affiliated with Regione del Veneto or any public body. Sample content is always labelled.',
		readStatement: 'Read the full statement',
		bottomLine: 'Independent Digital Business & Territorial Platform',
		owner: 'A ZOE MILANO regional platform'
	},
	content: contentEn
};

export default en;
