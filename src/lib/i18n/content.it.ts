import type contentEn from './content.en';

/** Italian content: draft translation, pending professional review. */
const contentIt: typeof contentEn = {
	industries: {
		mechanics: {
			name: 'Meccanica e macchinari',
			intro: 'Meccanica di precisione, automazione e macchinari industriali venduti nel mondo.'
		},
		eyewear: {
			name: 'Occhialeria',
			intro: 'Il distretto bellunese che ha reso l’occhiale italiano un riferimento mondiale.'
		},
		fashion: {
			name: 'Moda e tessile',
			intro: 'Maglieria, tessile, pelle e concia lungo tutta la filiera.'
		},
		footwear: {
			name: 'Calzature e sportswear',
			intro: 'Scarpe di lusso sulla Riviera del Brenta, scarponi tecnici a Montebelluna.'
		},
		furniture: {
			name: 'Arredo e design',
			intro: 'Mobili, cucine, illuminazione e contract per progetti internazionali.'
		},
		agrifood: {
			name: 'Vino e agroalimentare',
			intro: 'Prosecco, Amarone, Soave e un’industria alimentare fondata su filiere di qualità.'
		},
		jewellery: {
			name: 'Gioielleria e oreficeria',
			intro: 'La tradizione orafa vicentina, dai laboratori artigiani alle fiere globali.'
		},
		logistics: {
			name: 'Logistica e porti',
			intro: 'Porti, interporti e corridoi europei che si incontrano in una regione.'
		},
		tourism: {
			name: 'Turismo e ospitalità',
			intro: 'Dalla laguna al Lago di Garda e alle Dolomiti, tutto l’anno.'
		},
		glass: {
			name: 'Vetro e artigianato artistico',
			intro: 'Il vetro di Murano e le botteghe che trasformano il mestiere in design contemporaneo.'
		},
		chemicals: {
			name: 'Chimica e materiali',
			intro: 'Chimica industriale, plastica, concia e materiali avanzati.'
		},
		digital: {
			name: 'ICT e digitale',
			intro: 'Software, IoT industriale e servizi digitali per la manifattura.'
		},
		lifesciences: {
			name: 'Scienze della vita',
			intro: 'Ricerca biomedica, farmaceutica e dispositivi medici attorno a università forti.'
		},
		energy: {
			name: 'Energia e green economy',
			intro: 'Rinnovabili, idroelettrico, economia circolare e infrastrutture energetiche.'
		},
		culture: {
			name: 'Cultura e industrie creative',
			intro: 'Biennale, Palladio, la lirica all’Arena e l’economia creativa che le circonda.'
		},
		construction: {
			name: 'Edilizia e pietra',
			intro: 'Distretti del marmo e della pietra, sistemi costruttivi e ingegneria.'
		}
	},
	provinces: {
		belluno: {
			role: 'Occhialeria e Dolomiti',
			focus: 'Le Dolomiti, l’occhialeria, lo sport, il turismo, l’impresa di montagna e la cooperazione transfrontaliera.',
			summary: 'Culla del distretto italiano dell’occhiale e porta delle Dolomiti, Patrimonio UNESCO. Industria di montagna, idroelettrico e turismo tutto l’anno.'
		},
		padova: {
			role: 'Conoscenza, scienze della vita e servizi',
			focus: 'Ricerca, formazione, sanità, tecnologia, servizi e imprenditorialità.',
			summary: 'Una delle università più antiche d’Europa al centro della regione: ricerca, scienze della vita, servizi digitali, fiere e un grande interporto.'
		},
		rovigo: {
			role: 'Agricoltura, energia e Delta del Po',
			focus: 'Agricoltura, logistica, energia, il Delta del Po, progetti ambientali e sviluppo locale.',
			summary: 'Tra Adige e Po, il Polesine unisce agricoltura su larga scala e agritech, infrastrutture energetiche e il Delta del Po, riserva della biosfera UNESCO.'
		},
		treviso: {
			role: 'Design, arredo e colline del Prosecco',
			focus: 'Impresa, moda, agroalimentare, vino, design, logistica e le Colline del Prosecco.',
			summary: 'Distretti dell’arredo e degli elettrodomestici, il cluster dello scarpone di Montebelluna e le colline del Prosecco di Conegliano Valdobbiadene, Patrimonio UNESCO.'
		},
		venezia: {
			role: 'Porto, logistica e capitale culturale',
			focus: 'Cultura, turismo, la laguna, industrie creative, artigianato, logistica e visibilità internazionale.',
			summary: 'Il porto di Venezia e l’area industriale di Marghera, il vetro di Murano, il distretto della calzatura di lusso della Riviera del Brenta e un marchio culturale noto ovunque.'
		},
		verona: {
			role: 'Agroalimentare, vino e snodo logistico',
			focus: 'Impresa, fiere, vino, turismo, manifattura, logistica e scambi internazionali.',
			summary: 'Dove si incrociano i corridoi del Brennero e del Mediterraneo: l’interporto Quadrante Europa, i vini di Valpolicella e Soave, il Lago di Garda e un grande sistema fieristico.'
		},
		vicenza: {
			role: 'Potenza manifatturiera ed export',
			focus: 'Manifattura, oreficeria, design, meccanica, architettura e industria specializzata.',
			summary: 'Una delle province italiane più orientate all’export: meccanica di precisione, oreficeria, tessile e il distretto conciario di Arzignano. E la città del Palladio.'
		}
	},
	companies: {
		'lagunare-logistics': {
			description: 'Spedizioni portuali e trasporto intermodale tra Adriatico ed Europa centrale.'
		},
		'officina-ottica-cadorina': {
			description: 'Montature artigianali in acetato e titanio per marchi indipendenti.'
		},
		'montello-sport-boots': {
			description: 'Scarponi tecnici da montagna e da sci, dal prototipo alla piccola serie.'
		},
		'precisa-meccanica': {
			description: 'Lavorazioni CNC e assemblaggio per costruttori di packaging e automazione.'
		},
		'biopatavina-labs': {
			description: 'Spin-off universitario che sviluppa test diagnostici per laboratori clinici.'
		},
		'adige-agritech': {
			description: 'Sensori e software di agricoltura di precisione per frutteti e vigneti.'
		},
		'delta-solare': {
			description: 'Impianti agrivoltaici progettati insieme alle aziende agricole del territorio.'
		}
	},
	needs: {
		distributors: 'Distributori',
		exportPartners: 'Partner export',
		internationalBuyers: 'Buyer internazionali',
		designers: 'Designer',
		suppliers: 'Fornitori',
		rdPartners: 'Partner R&S',
		clientsAbroad: 'Clienti esteri',
		investors: 'Investitori',
		clinicalPartners: 'Partner clinici',
		pilotFarms: 'Aziende pilota',
		landowners: 'Proprietari di terreni',
		installers: 'Installatori'
	},
	/** Billboard copy bank: short statements for pages and animated videos. Use a few at a time. */
	bank: {
		territory: {
			sevenProvinces: 'Sette province. Una regione connessa.',
			oneCity: 'Non ridurre una regione a una sola città.',
			veniceDoor: 'Venezia apre la porta. Il Veneto cambia la storia.',
			dolomitesAdriatic: 'Dalle Dolomiti all’Adriatico.',
			moreWorlds: 'Una regione. Più mondi di quanto immagini.'
		},
		business: {
			doesNotWait: 'Il Veneto non aspetta. Costruisce.',
			madeHere: 'Fatto qui. Affidabile ovunque.',
			smallCompany: 'Piccola impresa. Ambizione globale.',
			italianAddress: 'L’industria ha un indirizzo italiano.',
			regionWorks: 'La regione lavora. Il mondo se ne accorge.'
		},
		international: {
			noBorders: 'Identità locale. Nessun confine.',
			takeFurther: 'Porta il Veneto più lontano.',
			exportKnowledge: 'Esporta più dei prodotti. Esporta conoscenza.',
			newMarket: 'Nuovo mercato. Il contatto giusto.',
			builtLocally: 'Costruito qui. Connesso al mondo.'
		},
		funding: {
			rightProgramme: 'Le buone idee hanno bisogno del programma giusto.',
			findTheCall: 'Trova il bando. Forma la squadra. Muovi il progetto.',
			projectNeedsYou: 'Il finanziamento può esistere. Il progetto ha ancora bisogno di te.',
			deadline: 'Non perdere la scadenza di cui non hai mai sentito parlare.',
			europeanOpportunity: 'Dalla forza regionale all’opportunità europea.'
		},
		matchmaking: {
			rightConnection: 'Il contatto giusto può muovere un intero progetto.',
			nextPartner: 'Il tuo prossimo partner potrebbe già essere nel network.',
			ideasNeedExpertise: 'Le idee hanno bisogno di competenze. Le competenze hanno bisogno di connessioni.',
			connectBetter: 'Non fare più networking. Connettiti meglio.',
			oneIntroduction: 'Una presentazione può cambiare la direzione.'
		},
		culture: {
			endless: 'Venezia è un’icona. Il Veneto è infinito.',
			comeForIcon: 'Vieni per l’icona. Scopri la regione.',
			notStill: 'La cultura non sta ferma.',
			artCities: 'Dalle città d’arte agli orizzonti aperti.',
			anotherVeneto: 'C’è sempre un altro Veneto.'
		},
		innovation: {
			tradition: 'La tradizione l’ha resa forte. L’innovazione la fa avanzare.',
			oldKnowledge: 'Sapere antico. Nuova tecnologia.',
			madeLocally: 'Il futuro si può ancora costruire qui.',
			digitalTools: 'Strumenti digitali. Imprese reali.',
			buildNext: 'Costruisci ciò che verrà.'
		}
	},
	billboards: {
		madeHere: {
			kicker: 'Made in Veneto',
			headline: 'I tuoi prodotti. Visti in tutto il Veneto.',
			sub: 'Porta i tuoi prodotti davanti a buyer in Italia, in Europa e nel mondo.',
			cta: 'Pubblicizzati qui'
		},
		dolomitesToDelta: {
			kicker: 'Sette province',
			headline: 'Dalle Dolomiti al Delta.',
			sub: 'Uno schermo, visto dalle imprese di tutta la regione.',
			cta: 'Vedi gli spazi'
		},
		billboardsNotBanners: {
			kicker: 'Il tuo marchio',
			headline: 'Billboard, non banner.',
			sub: 'Schermi digitali premium su tutto Veneto.app.',
			cta: 'Media kit'
		}
	}
};

export default contentIt;
