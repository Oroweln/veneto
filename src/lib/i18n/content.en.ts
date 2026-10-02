/** Content strings: industries, territories, sample data. English is the source language. */
const contentEn = {
	industries: {
		mechanics: {
			name: 'Mechanics & machinery',
			intro: 'Precision engineering, automation and industrial machinery sold worldwide.'
		},
		eyewear: {
			name: 'Eyewear',
			intro: 'The Belluno district that made Italian eyewear a global reference.'
		},
		fashion: {
			name: 'Fashion & textiles',
			intro: 'Knitwear, textiles, leather and tanning across the whole supply chain.'
		},
		footwear: {
			name: 'Footwear & sportswear',
			intro: 'Luxury shoes on the Riviera del Brenta, technical boots in Montebelluna.'
		},
		furniture: {
			name: 'Furniture & design',
			intro: 'Furniture, kitchens, lighting and contract design for international projects.'
		},
		agrifood: {
			name: 'Wine & agrifood',
			intro: 'Prosecco, Amarone, Soave and a food industry built on quality supply chains.'
		},
		jewellery: {
			name: 'Jewellery & goldsmithing',
			intro: 'Vicenza’s goldsmith tradition, from craft workshops to global trade fairs.'
		},
		logistics: {
			name: 'Logistics & ports',
			intro: 'Seaports, freight villages and European corridors meeting in one region.'
		},
		tourism: {
			name: 'Tourism & hospitality',
			intro: 'From the lagoon to Lake Garda and the Dolomites, all year round.'
		},
		glass: {
			name: 'Glass & artisan crafts',
			intro: 'Murano glass and the workshops that turn craft into contemporary design.'
		},
		chemicals: {
			name: 'Chemicals & materials',
			intro: 'Industrial chemistry, plastics, tanning and advanced materials.'
		},
		digital: {
			name: 'ICT & digital',
			intro: 'Software, industrial IoT and digital services for manufacturing.'
		},
		lifesciences: {
			name: 'Life sciences',
			intro: 'Biomedical research, pharma and medical devices around strong universities.'
		},
		energy: {
			name: 'Energy & green economy',
			intro: 'Renewables, hydropower, circular economy and energy infrastructure.'
		},
		culture: {
			name: 'Culture & creative industries',
			intro: 'Biennale, Palladio, opera at the Arena and a creative economy around them.'
		},
		construction: {
			name: 'Construction & stone',
			intro: 'Marble and stone districts, building systems and engineering.'
		}
	},
	provinces: {
		belluno: {
			role: 'Eyewear & Dolomites',
			focus: 'The Dolomites, eyewear, sport, tourism, mountain enterprise and cross-border cooperation.',
			summary: 'Birthplace of the Italian eyewear district and gateway to the Dolomites, a UNESCO World Heritage site. Mountain industry, hydropower and year-round tourism.'
		},
		padova: {
			role: 'Knowledge, life sciences & services',
			focus: 'Research, education, healthcare, technology, services and entrepreneurship.',
			summary: 'One of Europe’s oldest universities at the centre of the region: research, life sciences, digital services, trade fairs and a major freight village.'
		},
		rovigo: {
			role: 'Agriculture, energy & Po Delta',
			focus: 'Agriculture, logistics, energy, the Po Delta, environmental projects and local development.',
			summary: 'Between the Adige and the Po, Polesine combines large-scale agriculture and agritech, energy infrastructure and the Po Delta, a UNESCO biosphere reserve.'
		},
		treviso: {
			role: 'Design, furniture & Prosecco hills',
			focus: 'Enterprise, fashion, food, wine, design, logistics and the Prosecco Hills.',
			summary: 'Furniture and appliance districts, the Montebelluna sportsboot cluster and the Conegliano Valdobbiadene Prosecco hills, a UNESCO World Heritage site.'
		},
		venezia: {
			role: 'Port, logistics & cultural capital',
			focus: 'Culture, tourism, the lagoon, creative industries, craftsmanship, logistics and international visibility.',
			summary: 'The port of Venezia and the Marghera industrial area, Murano glass, the Riviera del Brenta luxury shoe district and a cultural brand known everywhere.'
		},
		verona: {
			role: 'Agrifood, wine & logistics gateway',
			focus: 'Business, fairs, wine, tourism, manufacturing, logistics and international exchange.',
			summary: 'Where the Brenner and Mediterranean corridors cross: the Quadrante Europa freight village, Valpolicella and Soave wines, Lake Garda and a major trade-fair system.'
		},
		vicenza: {
			role: 'Manufacturing & export powerhouse',
			focus: 'Manufacturing, jewellery, design, machinery, architecture and specialised industry.',
			summary: 'One of Italy’s most export-oriented provinces: precision mechanics, jewellery and goldsmithing, textiles, and the Arzignano tanning district. And Palladio’s city.'
		}
	},
	companies: {
		'lagunare-logistics': {
			description: 'Port forwarding and intermodal transport between the Adriatic and Central Europe.'
		},
		'officina-ottica-cadorina': {
			description: 'Handmade acetate and titanium frames for independent brands.'
		},
		'montello-sport-boots': {
			description: 'Technical mountain and ski boots, from prototype to small series.'
		},
		'precisa-meccanica': {
			description: 'CNC machining and assembly for packaging and automation OEMs.'
		},
		'biopatavina-labs': {
			description: 'University spin-off developing diagnostic assays for clinical labs.'
		},
		'adige-agritech': {
			description: 'Precision-farming sensors and software for orchards and vineyards.'
		},
		'delta-solare': {
			description: 'Agrivoltaic installations designed with local farms.'
		}
	},
	needs: {
		distributors: 'Distributors',
		exportPartners: 'Export partners',
		internationalBuyers: 'International buyers',
		designers: 'Designers',
		suppliers: 'Suppliers',
		rdPartners: 'R&D partners',
		clientsAbroad: 'Clients abroad',
		investors: 'Investors',
		clinicalPartners: 'Clinical partners',
		pilotFarms: 'Pilot farms',
		landowners: 'Landowners',
		installers: 'Installers'
	},
	/** Billboard copy bank: short statements for pages and animated videos. Use a few at a time. */
	bank: {
		territory: {
			sevenProvinces: 'Seven provinces. One connected region.',
			oneCity: 'Do not reduce a region to one city.',
			veniceDoor: 'Venice opens the door. Veneto changes the story.',
			dolomitesAdriatic: 'From the Dolomites to the Adriatic.',
			moreWorlds: 'One region. More worlds than expected.'
		},
		business: {
			doesNotWait: 'Veneto does not wait. It builds.',
			madeHere: 'Made here. Trusted everywhere.',
			smallCompany: 'Small company. Global ambition.',
			italianAddress: 'Industry has an Italian address.',
			regionWorks: 'The region works. The world notices.'
		},
		international: {
			noBorders: 'Local identity. No borders.',
			takeFurther: 'Take Veneto further.',
			exportKnowledge: 'Export more than products. Export knowledge.',
			newMarket: 'New market. Right connection.',
			builtLocally: 'Built locally. Connected globally.'
		},
		funding: {
			rightProgramme: 'Good ideas need the right programme.',
			findTheCall: 'Find the call. Build the team. Move the project.',
			projectNeedsYou: 'The funding may exist. The project still needs you.',
			deadline: 'Do not miss the deadline you never heard about.',
			europeanOpportunity: 'From regional strength to European opportunity.'
		},
		matchmaking: {
			rightConnection: 'The right connection can move an entire project.',
			nextPartner: 'Your next partner may already be in the network.',
			ideasNeedExpertise: 'Ideas need expertise. Expertise needs connections.',
			connectBetter: 'Do not network more. Connect better.',
			oneIntroduction: 'One introduction can change the direction.'
		},
		culture: {
			endless: 'Venice is iconic. Veneto is endless.',
			comeForIcon: 'Come for the icon. Discover the region.',
			notStill: 'Culture does not stand still.',
			artCities: 'From art cities to open horizons.',
			anotherVeneto: 'There is always another Veneto.'
		},
		innovation: {
			tradition: 'Tradition made it strong. Innovation keeps it moving.',
			oldKnowledge: 'Old knowledge. New technology.',
			madeLocally: 'The future can still be made locally.',
			digitalTools: 'Digital tools. Real businesses.',
			buildNext: 'Build what comes next.'
		}
	},
	billboards: {
		madeHere: {
			kicker: 'Made in Veneto',
			headline: 'Your products. Seen across Veneto.',
			sub: 'Put your products in front of buyers in Italy, Europe and the world.',
			cta: 'Advertise here'
		},
		dolomitesToDelta: {
			kicker: 'Seven provinces',
			headline: 'From the Dolomites to the Delta.',
			sub: 'One screen, seen by businesses across the whole region.',
			cta: 'See placements'
		},
		billboardsNotBanners: {
			kicker: 'Your brand',
			headline: 'Billboards, not banners.',
			sub: 'Premium digital screens across Veneto.app.',
			cta: 'Media kit'
		}
	}
};

export default contentEn;
