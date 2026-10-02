import contentIt from './content.it';
import type en from './en';

/** Italian interface strings: draft translation, pending professional review. */
const it: typeof en = {
	brand: {
		name: 'Veneto.app',
		wordmark: 'VENETO',
		wordmarkSuffix: '.APP',
		owner: 'ZOE MILANO',
		tagline: 'Produrre. Connettere. Esportare.',
		statementA: 'Costruita per il Veneto.',
		statementB: 'Pronta per il mondo.',
		altStatement: 'Una regione. Impatto globale.',
		supporting: 'Impresa · Industria · Cultura · Territorio · Opportunità',
		moves: 'Veneto moves.',
		region: 'Veneto'
	},
	common: {
		skip: 'Vai al contenuto',
		soon: 'Presto',
		appSoon: 'App in arrivo',
		language: 'Lingua',
		breadcrumbs: 'Percorso',
		onThisPage: 'In questa pagina',
		open: 'Apri',
		seeAll: 'Vedi tutto',
		sample: 'Esempio',
		demo: 'Demo',
		preview: 'Anteprima',
		newTab: 'si apre in una nuova scheda',
		premium: 'Premium',
		draftNotice: 'Versione italiana in bozza: i testi sono in attesa di revisione professionale.',
		languageNames: {
			en: 'English',
			it: 'Italiano',
			de: 'Deutsch',
			fr: 'Français'
		},
		indicative:
			'* Dati indicativi e arrotondati, da fonti pubbliche (registri delle Camere di Commercio, ISTAT). Verifica sempre la fonte ufficiale prima di utilizzarli.',
		indicativeShort: 'Indicativo',
		demoCounts: 'I conteggi della piattaforma in questa pagina sono dati demo finché Veneto.app è in anteprima.',
		independence:
			'Veneto.app è una piattaforma privata indipendente. Non è affiliata alla Regione del Veneto né ad alcun ente pubblico.',
		try: {
			label: 'Interattivo',
			provinces: 'Tocca una provincia',
			sectors: 'Scegli un settore',
			listings: 'Tocca un annuncio, stella per salvarlo',
			routes: 'Scegli una destinazione',
			postcards: 'Tocca una cartolina',
			businesses: 'imprese*',
			explore: 'Scopri {name}',
			save: 'Salva {name}',
			savedCount: '{n} salvati',
			route: 'Dal Veneto a {hub}',
			routeNote: 'Partner, buyer ed eventi su questa rotta',
			tools: 'Tocca uno strumento',
			calls: 'Tocca un bando',
			matches: 'Tocca un match, stella per salvarlo',
			tasks: 'Spunta un’attività o scegli una fase',
			alerts: 'Tocca una notifica',
			chat: 'Invia una risposta rapida',
			ai: 'Fai una domanda di esempio',
			regions: 'Cambia regione',
			costShare: '{n}% dei costi ammissibili',
			typing: 'sta scrivendo…'
		}
	},
	nav: {
		home: 'Home',
		homeLabel: 'Veneto.app, pagina iniziale',
		shortcut: 'Ctrl K',
		main: 'Navigazione principale',
		search: 'Cerca su Veneto.app',
		join: 'Iscriviti',
		joinNetwork: 'Entra nel network',
		login: 'Accedi',
		ecosystemMenu: 'Esplora l’ecosistema',
		ecosystemIntro: 'La regione, i suoi settori, i suoi mercati e i suoi eventi.',
		platformMenu: 'Strumenti della piattaforma',
		platformIntro: 'Gli strumenti che trasformano il network in affari.',
		platformOverview: 'Panoramica della piattaforma',
		items: {
			ecosystem: 'Ecosistema',
			territories: 'Territorio',
			industries: 'Impresa e industria',
			invest: 'Investimenti',
			internationalisation: 'Internazionalizzazione',
			cultureTourism: 'Cultura e turismo',
			agrifoodWine: 'Agroalimentare e vino',
			events: 'Eventi',
			platform: 'Piattaforma',
			about: 'Chi siamo',
			bandihub: 'BandiHub',
			matchmaking: 'Smart Matchmaking',
			projectManagement: 'Gestione progetti',
			fundingAlerts: 'Alert finanziamenti',
			messaging: 'Messaggi e chiamate',
			aiAssistant: 'Assistente IA',
			membership: 'Abbonamenti',
			app: 'App mobile'
		},
		menu: 'Menu',
		close: 'Chiudi il menu',
		groups: {
			explore: 'Esplora',
			platform: 'Piattaforma',
			resources: 'Risorse',
			company: 'Chi siamo',
			legal: 'Note legali',
			participate: 'Partecipa'
		}
	},
	sections: {
		business: { name: 'Elenco imprese', short: 'Trova aziende e professionisti in tutte e sette le province.' },
		opportunities: { name: 'Opportunità', short: 'Partnership, richieste di fornitura e progetti che cercano te.' },
		funding: { name: 'Finanziamenti', short: 'Bandi regionali, nazionali ed europei in un’unica bacheca chiara.' },
		events: { name: 'Eventi', short: 'Fiere, networking ed eventi d’impresa in tutto il Veneto.' },
		industries: { name: 'Impresa e industria', short: 'Le aziende e i settori che fanno del Veneto uno dei motori manifatturieri d’Europa.' },
		internationalisation: { name: 'Internazionalizzazione', short: 'Export, mercati esteri e partner internazionali per le imprese venete.' },
		cultureTourism: { name: 'Cultura e turismo', short: 'Patrimonio, industrie creative e turismo come economia, dalla laguna alle Dolomiti.' },
		agrifoodWine: { name: 'Agroalimentare e vino', short: 'Prosecco, Amarone, Soave e le filiere alimentari che li sostengono.' },
		bandihub: { name: 'BandiHub', short: 'Bandi regionali, nazionali ed europei per le imprese venete, in un unico hub.' },
		projectManagement: { name: 'Gestione progetti', short: 'Pianifica e gestisci progetti con i partner, dal primo contatto alla consegna.' },
		fundingAlerts: { name: 'Alert finanziamenti', short: 'Ricevi un avviso quando si apre un bando adatto alla tua azienda.' },
		app: { name: 'App mobile', short: 'Veneto.app sul tuo telefono, per iOS e Android.' },
		territories: { name: 'Territori', short: 'Sette province, ognuna con i propri punti di forza.' },
		platform: { name: 'Piattaforma', short: 'Tutto ciò che fa Veneto.app, in un unico posto.' },
		network: { name: 'Network', short: 'La rete d’impresa del Veneto, connessa.' },
		matchmaking: { name: 'Smart Matchmaking', short: 'Dicci di cosa hai bisogno. Ricevi abbinamenti ordinati e motivati.' },
		messaging: { name: 'Messaggi e videochiamate', short: 'Parla con membri, partner ed esperti senza lasciare l’app.' },
		aiAssistant: { name: 'Assistente IA', short: 'Un futuro assistente per trovare finanziamenti, partner e servizi.' },
		membership: { name: 'Abbonamenti', short: 'Inizia gratis. Cresci quando sei pronto.' },
		trust: { name: 'Affidabilità', short: 'Sappi con chi stai facendo affari.' },
		invest: { name: 'Investire in Veneto', short: 'Perché e dove investire nella regione.' },
		innovation: { name: 'Innovazione e tecnologia', short: 'Startup, ricerca, soluzioni digitali e partner per l’innovazione in Veneto.' },
		intelligence: { name: 'Veneto Intelligence', short: 'Dati su imprese, settori e territori.' },
		discover: { name: 'Scopri', short: 'Tutto ciò che c’è sulla piattaforma, filtrato a modo tuo.' },
		news: { name: 'Notizie', short: 'Storie dall’ecosistema d’impresa del Veneto.' },
		about: { name: 'Chi siamo', short: 'Una piattaforma privata e indipendente per fare impresa in Veneto.' },
		advertise: { name: 'Pubblicità', short: 'Billboard, non banner. Raggiungi le imprese del Veneto.' },
		contact: { name: 'Contatti', short: 'Domande sulla piattaforma o sulle partnership.' },
		legal: { name: 'Note legali e indipendenza', short: 'Chi gestisce Veneto.app e cosa non garantisce.' },
		terms: { name: 'Termini', short: 'Termini d’uso di Veneto.app.' },
		dataProtection: { name: 'Protezione dei dati / GDPR', short: 'I tuoi diritti sui dati personali.' },
		accessibility: { name: 'Accessibilità', short: 'Come Veneto.app funziona per tutti.' },
		aiNotice: { name: 'Avviso sui contenuti IA', short: 'Dove e come vengono usati e segnalati i contenuti generati con l’IA.' },
		privacy: { name: 'Privacy', short: 'Come Veneto.app tratta i dati personali.' },
		cookies: { name: 'Cookie', short: 'Come Veneto.app utilizza i cookie.' },
		register: { name: 'Iscriviti a Veneto.app', short: 'Crea il profilo gratuito della tua azienda in pochi passaggi.' },
		login: { name: 'Accedi', short: 'Bentornato su Veneto.app.' },
		search: { name: 'Cerca', short: 'Cerca aziende, opportunità, finanziamenti ed eventi.' },
		dashboard: { name: 'Dashboard', short: 'Il tuo spazio di lavoro.' }
	},
	billboard: {
		label: 'Billboard sponsorizzato',
		sponsored: 'Sponsorizzato',
		slides: 'Slide del billboard',
		slide: 'Slide'
	},
	company: {
		lookingFor: 'Cerca',
		verified: 'Verificata',
		since: 'Dal {year}',
		view: 'Vedi profilo'
	},
	home: {
		seo: {
			title: 'Veneto.app · Costruita per il Veneto. Pronta per il mondo.',
			description:
				'La piattaforma digitale indipendente che connette imprese, settori, territori e opportunità del Veneto con l’Italia, l’Europa e il mondo.'
		},
		hero: {
			eyebrow: 'Piattaforma digitale indipendente · Veneto, Italia',
			line1a: 'Costruita per il',
			line2: 'Pronta per il mondo',
			lede: 'Veneto.app riunisce aziende, professionisti, investitori, istituzioni, progetti, finanziamenti e connessioni internazionali in un unico ecosistema digitale in evoluzione.',
			cta: 'Esplora il network',
			ctaSecondary: 'Iscriviti a Veneto.app',
			aiLabel: 'Contenuto generato con IA',
			europe: 'EUROPA',
			world: 'MONDO',
			mediterranean: 'MEDITERRANEO'
		},
		chips: {
			provinces: 'province, un ecosistema',
			exports: 'Export oltre €80 mld l’anno*',
			live: '3 nuove opportunità oggi · Demo'
		},
		stats: {
			registered: 'Imprese registrate',
			provinces: 'Province, tutte connesse',
			exports: 'Export all’anno',
			bn: ' mld'
		},
		ticker: {
			business: 'Impresa',
			industry: 'Industria',
			culture: 'Cultura',
			territory: 'Territorio',
			opportunity: 'Opportunità',
			export: 'Export',
			design: 'Design',
			craft: 'Saper fare',
			innovation: 'Innovazione'
		},
		billboard01: {
			line1: 'Il Veneto',
			line2: 'non aspetta.',
			line3: 'Costruisce.',
			support: 'Una regione plasmata dall’impresa, dalla conoscenza e da una visione internazionale.'
		},
		search: {
			eyebrow: 'Ricerca imprese',
			title: 'Scopri le opportunità d’impresa in',
			keyword: 'Parola chiave',
			placeholder: 'Azienda, prodotto o servizio',
			where: 'Dove',
			allVeneto: 'Tutto il Veneto',
			industry: 'Settore',
			any: 'Qualsiasi',
			lookingFor: 'Cerca',
			type: 'Tipo',
			language: 'Lingua',
			submit: 'Cerca',
			seeking: {
				partners: 'Partner',
				suppliers: 'Fornitori',
				clients: 'Clienti',
				investors: 'Investitori',
				distributors: 'Distributori',
				talent: 'Talenti'
			},
			types: {
				company: 'Azienda',
				startup: 'Startup',
				professional: 'Professionista',
				association: 'Associazione'
			}
		},
		categories: {
			kicker: 'Esplora per categoria',
			title: 'Da dove vuoi iniziare?',
			lede: 'Otto modi per entrare nello stesso ecosistema. Ogni categoria riporta ad aziende, luoghi e opportunità reali.',
			items: {
				business: {
					title: 'Impresa e industria',
					text: 'Scopri aziende, produttori, fornitori, professionisti e reti industriali specializzate.',
					cta: 'Esplora le imprese'
				},
				investment: {
					title: 'Investimenti e immobili',
					text: 'Trova opportunità d’impresa, immobili commerciali, aree industriali, progetti nell’ospitalità e supporto professionale.',
					cta: 'Scopri gli investimenti'
				},
				internationalisation: {
					title: 'Internaziona\u00ADlizzazione',
					text: 'Connetti le imprese venete con nuovi mercati, partner internazionali, buyer, distributori e progetti transfrontalieri.',
					cta: 'Vai all’estero'
				},
				funding: {
					title: 'Progetti europei e finanziamenti',
					text: 'Esplora finanziamenti europei, nazionali e regionali, voucher digitali e supporto professionale.',
					cta: 'Esplora i finanziamenti'
				},
				culture: {
					title: 'Cultura e turismo',
					text: 'Scopri città, patrimonio, design, arte, eventi, montagne, laghi, coste ed esperienze tutto l’anno.',
					cta: 'Scopri il Veneto'
				},
				agrifood: {
					title: 'Agroalimentare e vino',
					text: 'Incontra cantine, produttori, aziende alimentari, imprese agricole ed eccellenze internazionali.',
					cta: 'Esplora l’agroalimentare'
				},
				innovation: {
					title: 'Innovazione e tecnologia',
					text: 'Trova startup, ricerca, soluzioni digitali, servizi avanzati e partner per l’innovazione.',
					cta: 'Esplora l’innovazione'
				},
				events: {
					title: 'Eventi e scambi',
					text: 'Scopri fiere, conferenze, eventi culturali, incontri d’affari e opportunità di scambio internazionale.',
					cta: 'Vedi gli eventi'
				}
			}
		},
		moves: {
			eyebrow: 'L’idea dietro Veneto.app',
			lede: 'Manifattura, artigianato, cultura, turismo, agricoltura, design e commercio internazionale qui non stanno mai fermi. Si incontrano, ogni giorno. Veneto.app nasce per tenerli in movimento.',
			items: {
				goods: { title: 'Merci in movimento', text: 'Dai laboratori e dai distretti ai porti, ai corridoi e ai mercati.' },
				ideas: { title: 'Idee in movimento', text: 'Tra università, startup e industria consolidata.' },
				people: { title: 'Persone in movimento', text: 'Talenti, professionisti e partner che si trovano.' },
				exports: { title: 'Imprese che esportano', text: 'Fatto in Veneto, venduto in Europa e nel mondo.' },
				projects: { title: 'Progetti che crescono', text: 'Collaborazioni che nascono da un solo contatto.' },
				culture: { title: 'Cultura che viaggia', text: 'Patrimonio e creatività come motore economico.' },
				regions: { title: 'Territori che si connettono', text: 'Sette province, una rete, tanti confini superati.' },
				tradition: { title: 'La tradizione diventa innovazione', text: 'Secoli di saper fare, ripensati per ciò che verrà.' }
			}
		},
		billboard02: {
			line1: 'La tradizione lo ha reso forte.',
			line2: 'L’innovazione lo fa muovere.'
		},
		network: {
			eyebrow: 'Veneto Business Network',
			titleA: 'La connessione giusta',
			titleB: 'può muovere un intero progetto.',
			text1: 'Trova aziende, professionisti, consulenti, fornitori, partner tecnologici e investitori in tutto il Veneto.',
			text2: 'Entra nel network per presentare la tua impresa, sviluppare collaborazioni e accedere al matchmaking privato tramite l’applicazione mobile.',
			cta: 'Esplora il network',
			ctaSecondary: 'Entra nel network',
			phone: {
				title: 'Smart Matchmaking',
				badge: 'Anteprima',
				request: 'La tua richiesta',
				need: 'Partner distributivo',
				chipA: 'Germania e Austria',
				chipB: 'Logistica',
				why: 'Perché questo abbinamento',
				reasonA: 'Esporta già nell’area DACH',
				reasonB: 'Cerca distributori',
				reasonC: 'Profilo verificato',
				propose: 'Proponi una collaborazione'
			},
			chips: {
				private: 'Matchmaking privato nell’app',
				why: 'Ogni abbinamento è motivato'
			}
		},
		featured: {
			kicker: 'Membri Premium',
			cta: 'Sfoglia l’elenco imprese',
			notice:
				'Anteprima: queste aziende sono esempi inventati per mostrare come appariranno i profili. Verranno sostituite dai profili reali dei membri.'
		},
		motto: 'Produrre. Connettere. Esportare.',
		explore: {
			eyebrow: 'Sette province. Una regione connessa.',
			titleA: 'Più di una destinazione.',
			titleB: 'Più di un’economia.',
			text1: 'Il Veneto riunisce città globali, distretti industriali, patrimonio culturale, territori di montagna, eccellenze agricole e imprese connesse con il mondo.',
			text2: 'Da Venezia e Verona a Padova, Vicenza, Treviso, Belluno e Rovigo, ogni provincia porta un punto di forza diverso all’ecosistema regionale.',
			text3: 'Veneto.app crea un unico punto di accesso digitale alle persone, ai luoghi, ai settori e alle opportunità che danno vita alla regione.',
			cta: 'Esplora il territorio',
			mapTitle: 'Mappa del Veneto con le sue sette province',
			mapHint: 'Seleziona una provincia sulla mappa per aprirne la pagina.',
			regionTile: 'Tutte e sette le province a confronto: dati, settori e cosa c’è di attivo ora.',
			allTerritories: 'Confronta tutti i territori'
		},
		international: {
			eyebrow: 'Dal Veneto al mondo',
			titleA: 'Competenza locale.',
			titleB: 'Direzione globale.',
			text1: 'Veneto.app sostiene le connessioni internazionali tra le imprese della regione e i mercati esteri, le reti professionali, gli investitori, le istituzioni e i partner di progetto.',
			text2: 'Scopri opportunità di export, collaborazioni internazionali, scambi d’affari e progetti transfrontalieri.',
			cta: 'Esplora l’internazionalizzazione',
			ctaSecondary: 'Trova un partner',
			hubs: {
				saoPaulo: 'San Paolo',
				newYork: 'New York',
				london: 'Londra',
				paris: 'Parigi',
				munich: 'Monaco',
				vienna: 'Vienna',
				belgrade: 'Belgrado',
				dubai: 'Dubai',
				shanghai: 'Shanghai'
			}
		},
		billboard03: {
			line1: 'Fatto qui.',
			line2: 'Affidabile ovunque.'
		},
		funding: {
			eyebrow: 'Progetti europei e finanziamenti',
			titleA: 'Un’idea forte',
			titleB: 'merita il programma giusto.',
			text1: 'Esplora le opportunità europee, nazionali e regionali a sostegno di innovazione, digitalizzazione, sostenibilità, turismo, cultura, industria, artigianato e crescita internazionale.',
			text2: 'Consulta le opportunità su Veneto.app. Diventa membro e accedi ai dettagli completi dei finanziamenti, agli alert personalizzati e al matchmaking con esperti tramite l’applicazione mobile.',
			cta: 'Esplora i finanziamenti',
			ctaSecondary: 'Accedi all’app mobile',
			chip: 'Nuovo bando adatto al tuo profilo',
			stage: {
				title: 'BandiHub',
				upTo: 'Fino a',
				share: '50% dei costi ammissibili',
				members: 'Dettagli completi per i membri',
				scopes: {
					regional: 'Regionale',
					national: 'Nazionale',
					eu: 'UE'
				},
				calls: {
					digital: { name: 'Voucher per la transizione digitale', deadline: 'Scadenza 15 marzo 2027' },
					green: { name: 'Programma manifattura sostenibile', deadline: 'Scadenza 30 giugno 2027' },
					craft: { name: 'Contributo export artigianato e design', deadline: 'Scadenza 10 maggio 2027' }
				}
			}
		},
		tourism: {
			eyebrow: 'Una regione di tanti mondi',
			titleA: 'Venezia apre la porta.',
			titleB: 'Il Veneto cambia la storia.',
			text: 'Scopri le città d’arte, le Dolomiti, il Lago di Garda, la costa adriatica, le destinazioni termali, le Colline del Prosecco, il Delta del Po e il paesaggio culturale che li unisce.',
			cta: 'Scopri il territorio',
			allProvinces: 'Tutte e sette le province',
			worlds: {
				dolomites: { name: 'Le Dolomiti', text: 'Vette Patrimonio UNESCO, Cortina d’Ampezzo e vita di montagna tutto l’anno.' },
				cities: { name: 'Città d’arte', text: 'Venezia, Verona, Padova, Vicenza, Treviso, Belluno e Rovigo: secoli di arte, commercio e vita urbana.' },
				garda: { name: 'Lago di Garda', text: 'Il lago più grande d’Italia, tra vigneti e uliveti.' },
				coast: { name: 'Costa adriatica', text: 'Spiagge da Bibione e Caorle fino a Jesolo e Chioggia.' },
				thermal: { name: 'Destinazioni termali', text: 'Abano e Montegrotto, nel bacino termale euganeo.' },
				prosecco: { name: 'Colline del Prosecco', text: 'Conegliano Valdobbiadene, paesaggio Patrimonio UNESCO.' },
				delta: { name: 'Delta del Po', text: 'Zone umide, lagune e avifauna in una riserva della biosfera UNESCO.' },
				villas: { name: 'Ville palladiane', text: 'La Vicenza e le ville del Palladio, il paesaggio culturale che unisce la regione.' }
			}
		},
		billboard04: {
			line1: 'Una regione.',
			line2: 'Più mondi',
			line3: 'di quanto immagini.'
		},
		industries: {
			kicker: 'Settori',
			title: 'I motori del Veneto.',
			lede: 'Molto più di Venezia e del turismo: il Veneto è una delle grandi regioni manifatturiere ed esportatrici d’Europa.'
		},
		audiences: {
			kicker: 'Per chi è',
			title: 'Per chi fa muovere il Veneto.',
			items: {
				companies: { title: 'Aziende', text: 'Fatti trovare da partner, clienti e buyer, in Italia e all’estero.' },
				startups: { title: 'Startup', text: 'Incontra investitori, clienti pilota e l’industria intorno a te.' },
				investors: { title: 'Investitori', text: 'Scopri dove cresce la regione e chi la sta costruendo.' },
				professionals: { title: 'Professionisti', text: 'Offri le tue competenze alle aziende che ne hanno bisogno.' },
				institutions: { title: 'Associazioni e istituzioni', text: 'Condividi bandi, eventi e programmi con il pubblico giusto.' },
				international: { title: 'Partner internazionali', text: 'Trova controparti affidabili in Veneto, nella tua lingua.' }
			}
		},
		journey: {
			kicker: 'Come funziona',
			title: 'Dal profilo alla partnership.',
			steps: {
				join: { title: 'Iscriviti', text: 'Crea in pochi minuti il profilo gratuito della tua azienda.' },
				discover: { title: 'Scopri', text: 'Esplora aziende, opportunità, finanziamenti ed eventi.' },
				connect: { title: 'Connetti', text: 'Ricevi abbinamenti, avvia una conversazione, proponi una collaborazione.' },
				grow: { title: 'Cresci', text: 'Passa a Premium per essere in evidenza in Veneto e oltre.' }
			}
		},
		closing: {
			eyebrow: 'Entra a far parte di Veneto.app',
			line1: 'La tua impresa.',
			line2: 'Il tuo progetto.',
			line3: 'Il tuo prossimo contatto.',
			text: 'Presenta la tua azienda, opportunità, evento o progetto attraverso una piattaforma regionale premium, connessa a un più ampio ecosistema internazionale.',
			cta: 'Entra nel network',
			secondary: 'Richiedi informazioni'
		}
	},
	territories: {
		seo: {
			title: 'I territori del Veneto: sette province',
			description:
				'Esplora le sette province del Veneto: Belluno, Padova, Rovigo, Treviso, Venezia, Verona e Vicenza. Settori chiave, dati e opportunità.'
		},
		hero: {
			eyebrow: 'Tutto il Veneto',
			titleA: 'Sette province.',
			titleB: 'Infinite direzioni.',
			text: 'Esplora il Veneto attraverso le sue città, industrie, paesaggi, imprese e comunità regionali.',
			chip: 'Da Belluno a Rovigo, tutte alla pari'
		},
		chart: { title: 'Imprese registrate per territorio' },
		figures: {
			kicker: 'In cifre',
			title: 'Sette province, una regione.',
			provinces: 'Province',
			population: 'Residenti'
		},
		map: {
			kicker: 'I sette territori',
			title: 'Scegli il tuo territorio.',
			lede: 'Ogni pagina provinciale mostra i settori chiave, i dati e cosa è attivo sulla piattaforma in questo momento.'
		},
		areas: {
			kicker: 'Aree di destinazione',
			title: 'Altre aree di destinazione.',
			lede: 'Dodici aree che attraversano e collegano le sette province, dalla laguna alle Dolomiti.',
			items: {
				venice: 'Venezia e la sua Laguna',
				verona: 'Verona',
				padua: 'Padova',
				vicenza: 'Vicenza e la Pedemontana',
				treviso: 'Treviso e le Colline del Prosecco',
				belluno: 'Belluno e le Dolomiti',
				garda: 'Lago di Garda',
				brenta: 'Riviera del Brenta',
				euganean: 'Colli Euganei e area termale',
				asiago: 'Altopiano di Asiago',
				beaches: 'Spiagge dell’Adriatico',
				delta: 'Delta del Po'
			}
		},
		billboard: {
			line1: 'Non ridurre',
			line2: 'una regione',
			line3: 'a una sola città.'
		},
		table: {
			kicker: 'Confronta',
			title: 'Imprese per territorio.',
			window: 'Sette province a confronto',
			territory: 'Territorio',
			role: 'Profilo',
			registered: 'Imprese registrate*',
			population: 'Residenti*',
			density: 'Ogni 1.000 residenti',
			sectors: 'Settori chiave'
		},
		closing: {
			title: 'La tua azienda è in Veneto?',
			text: 'Crea il tuo profilo gratuito e fatti trovare in tutte e sette le province.',
			cta: 'Registra la tua azienda'
		}
	},
	territory: {
		seo: {
			title: '{name}: imprese, settori e opportunità',
			description: '{name} su Veneto.app: {role}. Settori chiave, dati, aziende e opportunità nella provincia di {name}.'
		},
		companies: 'aziende',
		opportunities: 'opportunità',
		events: 'eventi',
		openOpportunities: 'opportunità aperte',
		upcomingEvents: 'eventi in arrivo',
		explore: 'Esplora {name}',
		find: 'Trova aziende a {name}',
		register: 'Registra la tua azienda a {name}',
		mainTowns: 'Centri principali',
		capital: 'Capoluogo: {name}',
		mapTitle: 'Mappa della provincia di {name} con i centri principali',
		nav: {
			figures: 'In cifre',
			sectors: 'Settori chiave',
			live: 'Attivo ora',
			platform: 'La piattaforma',
			others: 'Altri territori'
		},
		figures: {
			title: '{name} in cifre.',
			onPlatform: 'Aziende sulla piattaforma'
		},
		sectors: {
			title: 'Cosa sa fare meglio {name}.',
			window: 'Imprese registrate per settore',
			note: 'Quota di imprese registrate in alcuni settori. Dati indicativi e arrotondati.'
		},
		live: {
			title: 'Attivo ora a {name}.',
			joinEyebrow: 'Manca la tua azienda?',
			joinTitle: 'Metti la tua azienda sulla mappa di {name}.',
			joinText: 'Un profilo gratuito richiede pochi minuti.'
		},
		platform: { title: 'La piattaforma a {name}.' },
		others: { title: 'Gli altri sei territori.' },
		closing: {
			title: 'La tua azienda è a {name}?',
			text: 'Unisciti alle imprese di {name} su Veneto.app. Iniziare è gratis.'
		}
	},
	industriesPage: {
		seo: {
			title: 'Impresa e industria in Veneto: aziende e settori',
			description: 'Scopri aziende, produttori, fornitori, professionisti ed ecosistemi industriali attivi in tutto il Veneto, in diciassette categorie industriali.'
		},
		hero: {
			eyebrow: 'Il Veneto che produce',
			line1: 'Questa regione',
			line2: 'sa come',
			line3: 'far accadere le cose.',
			text: 'Scopri aziende, produttori, fornitori, professionisti ed ecosistemi industriali attivi in tutto il Veneto.',
			secondary: 'Vedi i settori',
			chip: 'categorie industriali'
		},
		categories: {
			kicker: 'Categorie industriali',
			title: 'Diciassette modi di lavorare in Veneto.',
			lede: 'Dai macchinari all’occhialeria, dal vino alle tecnologie digitali: i settori che fanno muovere l’economia della regione.',
			missing: 'Il tuo settore non è in elenco? Ogni impresa del Veneto è benvenuta.',
			items: {
				advanced: 'Manifattura avanzata',
				machinery: 'Macchinari e automazione',
				fashion: 'Moda e tessile',
				eyewear: 'Occhialeria',
				jewellery: 'Oreficeria e gioielleria',
				furniture: 'Arredo e interior design',
				agrifood: 'Agroalimentare',
				wine: 'Vino e bevande',
				logistics: 'Logistica e trasporti',
				construction: 'Edilizia',
				energy: 'Energia',
				chemicals: 'Chimica e materiali',
				health: 'Sanità e scienze della vita',
				digital: 'Tecnologie digitali',
				tourism: 'Turismo e ospitalità',
				creative: 'Industrie culturali e creative',
				services: 'Servizi professionali'
			}
		},
		billboard: {
			line1: 'Piccola impresa?',
			line2: 'Grande mercato?',
			line3: 'Benvenuto in Veneto.'
		},
		cta: {
			title: 'Metti la tua azienda sulla mappa del Veneto.',
			text: 'Crea un profilo aziendale premium e diventa visibile a partner regionali e internazionali.',
			button: 'Presenta la tua impresa'
		}
	},
	investPage: {
		seo: {
			title: 'Investire in Veneto: aziende, immobili e progetti',
			description: 'Scopri aziende, progetti, immobili e reti professionali in una delle regioni italiane più connesse a livello internazionale.'
		},
		hero: {
			eyebrow: 'Investimenti e opportunità',
			line1: 'Investi dove',
			line2: 'l’impresa ha già',
			line3: 'radici profonde.',
			text: 'Scopri aziende, progetti, immobili e reti professionali in una delle regioni italiane più connesse a livello internazionale.',
			secondary: 'Vedi le categorie',
			chip: 'categorie di investimento'
		},
		stage: {
			title: 'Opportunità aperte',
			items: {
				site: { type: 'Sito industriale', name: 'Sito produttivo con accesso logistico', place: 'Vicenza' },
				hotel: { type: 'Struttura ricettiva', name: 'Hotel boutique cerca investitore', place: 'Lago di Garda · Verona' },
				winery: { type: 'Opportunità vitivinicola', name: 'Cantina di famiglia aperta a partnership', place: 'Colline del Prosecco · Treviso' }
			}
		},
		categories: {
			kicker: 'Categorie di investimento',
			title: 'Dove il capitale incontra il territorio.',
			lede: 'Dai siti industriali alle tenute vinicole, dalle startup alla rigenerazione culturale: tredici modi di investire in Veneto.',
			items: {
				business: 'Investimenti in impresa',
				industrial: 'Siti industriali',
				commercial: 'Immobili commerciali',
				hospitality: 'Strutture ricettive',
				tourism: 'Progetti turistici',
				agricultural: 'Tenute agricole',
				winery: 'Opportunità vitivinicole',
				innovation: 'Progetti di innovazione',
				startup: 'Opportunità startup',
				energy: 'Energia e sostenibilità',
				cultural: 'Rigenerazione culturale',
				logistics: 'Logistica e infrastrutture',
				advisory: 'Consulenza professionale'
			}
		},
		billboard: {
			line1: 'L’opportunità',
			line2: 'non è solo',
			line3: 'nel panorama.'
		},
		cta: {
			title: 'Hai un’opportunità di investimento da presentare?',
			button: 'Proponi un’opportunità'
		}
	},
	internationalPage: {
		seo: {
			title: 'Internazionalizzazione: imprese venete e mercati internazionali',
			description: 'Metti in contatto le imprese venete con buyer, distributori, consulenti, investitori e partner di progetto internazionali.'
		},
		hero: {
			eyebrow: 'Dal Veneto ai mercati internazionali',
			line1: 'Vai più lontano.',
			line2: 'Senza perdere',
			line3: 'le tue radici.',
			text: 'Metti in contatto le imprese venete con buyer, distributori, consulenti, investitori e partner di progetto internazionali.',
			secondary: 'Vedi i servizi',
			chip: 'rotte internazionali',
			featured: 'Serbia · Balcani',
			chip2: 'Veneto · Serbia · Balcani'
		},
		services: {
			kicker: 'Servizi principali',
			title: 'Sette modi per raggiungere nuovi mercati.',
			lede: 'Dal primo contatto all’estero alle delegazioni e ai progetti transfrontalieri, con un ponte dedicato verso la Serbia e i Balcani.',
			items: {
				markets: {
					title: 'Connessioni con i mercati',
					text: 'Scopri aziende e professionisti interessati alla cooperazione internazionale.'
				},
				export: {
					title: 'Supporto all’export',
					text: 'Trova competenze in ricerche di mercato, sviluppo commerciale, comunicazione, logistica e distribuzione.'
				},
				exchange: {
					title: 'Scambi d’affari',
					text: 'Crea connessioni tra il Veneto e le comunità d’affari internazionali.'
				},
				partners: {
					title: 'Partner internazionali',
					text: 'Cerca distributori, fornitori di tecnologia, consulenti e organizzazioni di progetto.'
				},
				crossBorder: {
					title: 'Progetti transfrontalieri',
					text: 'Sviluppa cooperazioni legate a innovazione, cultura, turismo, sostenibilità, formazione e sviluppo regionale.'
				},
				balkans: {
					title: 'Connessioni con Balcani e Serbia',
					text: 'Crea nuove connessioni d’affari e di progetto tra il Veneto, la Serbia e il più ampio mercato balcanico attraverso la rete professionale di ZOE MILANO.'
				},
				events: {
					title: 'Eventi e delegazioni',
					text: 'Promuovi incontri d’affari, fiere, delegazioni e programmi di scambio internazionale.'
				}
			}
		},
		billboard: {
			line1: 'Identità locale.',
			line2: 'Nessun confine.'
		},
		cta: {
			title: 'Cerchi un partner internazionale?',
			button: 'Richiedi un contatto d’affari'
		}
	},
	tourismPage: {
		seo: {
			title: 'Cultura e turismo in Veneto: dalle Dolomiti all’Adriatico',
			description: 'Esplora il Veneto dalle Dolomiti all’Adriatico, tra città storiche, laghi, vigneti, località termali e paesaggi culturali.'
		},
		hero: {
			eyebrow: 'Cultura, paesaggio, esperienza',
			line1: 'Una regione.',
			line2: 'Tanti motivi',
			line3: 'per tornare.',
			text: 'Esplora un territorio che si estende dalle Dolomiti all’Adriatico, tra città storiche, laghi, vigneti, località termali e paesaggi culturali.',
			secondary: 'Vedi le categorie',
			chip: 'modi di vivere il Veneto',
			chip2: 'Dalle Dolomiti all’Adriatico'
		},
		categories: {
			kicker: 'Categorie',
			title: 'Sedici motivi, e non solo.',
			lede: 'Dalla laguna alle vette, dalle gallerie ai vigneti: le esperienze che portano le persone in Veneto, e le fanno tornare.',
			items: {
				venice: 'Venezia e la sua Laguna',
				artCities: 'Città d’arte',
				dolomites: 'Dolomiti ed esperienze in montagna',
				garda: 'Lago di Garda',
				coast: 'Costa adriatica',
				prosecco: 'Colline del Prosecco',
				thermal: 'Turismo termale',
				heritage: 'Patrimonio culturale',
				architecture: 'Architettura e design',
				museums: 'Musei e gallerie',
				cycling: 'Cicloturismo e turismo lento',
				sport: 'Sport e attività all’aperto',
				events: 'Eventi e festival',
				business: 'Turismo d’affari',
				luxury: 'Ospitalità di lusso',
				local: 'Esperienze locali'
			}
		},
		billboard: {
			line1: 'Venezia è un’icona.',
			line2: 'Il Veneto è infinito.'
		},
		cta: {
			title: 'Crea un’esperienza per cui valga la pena viaggiare.',
			button: 'Presenta la tua esperienza'
		}
	},
	agriPage: {
		seo: {
			title: 'Agroalimentare e vino in Veneto: cantine, produttori ed export',
			description: 'Scopri cantine, produttori alimentari, aziende agricole, imprese dell’ospitalità e le persone dietro l’identità enogastronomica internazionale del Veneto.'
		},
		hero: {
			eyebrow: 'Dal territorio alle tavole del mondo',
			line1: 'Fatto con la terra.',
			line2: 'Costruito per il mondo.',
			text: 'Scopri cantine, produttori alimentari, aziende agricole, imprese dell’ospitalità e le persone dietro l’identità enogastronomica internazionale del Veneto.',
			secondary: 'Vedi le categorie',
			chip: 'categorie food & wine'
		},
		stage: {
			title: 'Produttori sulla piattaforma',
			items: {
				winery: { type: 'Cantina', name: 'Cantina di famiglia cerca importatori', place: 'Valpolicella · Verona' },
				dairy: { type: 'Formaggi', name: 'Caseificio di montagna aperto ai distributori', place: 'Altopiano di Asiago · Vicenza' },
				oil: { type: 'Olio d’oliva', name: 'Frantoio cerca partner per l’export', place: 'Lago di Garda · Verona' }
			}
		},
		categories: {
			kicker: 'Categorie',
			title: 'Dalla vigna alla tavola.',
			lede: 'Sedici porte d’ingresso nell’economia enogastronomica del Veneto: produttori, luoghi, tecnologia e le imprese che la portano all’estero.',
			items: {
				wineries: 'Cantine',
				wineExperiences: 'Esperienze del vino',
				prosecco: 'Prosecco',
				amarone: 'Amarone e Valpolicella',
				soave: 'Soave',
				regionalWines: 'Vini regionali',
				food: 'Produttori alimentari',
				agricultural: 'Aziende agricole',
				organic: 'Produzione biologica',
				oliveOil: 'Olio d’oliva',
				cheese: 'Formaggi',
				artisan: 'Prodotti artigianali',
				foodTech: 'Tecnologie alimentari',
				packaging: 'Packaging',
				export: 'Export e distribuzione',
				restaurants: 'Ristorazione e ospitalità'
			}
		},
		billboard: {
			line1: 'Il prodotto è locale.',
			line2: 'L’ambizione è globale.'
		},
		cta: {
			title: 'Il tuo prodotto merita di essere qui?',
			button: 'Presenta la tua azienda'
		}
	},
	eventsPage: {
		seo: {
			title: 'Eventi in Veneto: fiere, conferenze, cultura e incontri d’affari',
			description: 'Scopri fiere, eventi culturali, conferenze, esperienze del vino, festival e incontri professionali in tutto il Veneto.'
		},
		hero: {
			eyebrow: 'Cosa succede in Veneto',
			line1: 'Incontra. Esponi.',
			line2: 'Scambia. Muoviti.',
			text: 'Scopri fiere, eventi culturali, conferenze, esperienze del vino, festival e incontri professionali in tutta la regione.',
			cta: 'Vedi il calendario',
			chip: 'eventi questa settimana'
		},
		stage: { title: 'In arrivo' },
		filters: {
			label: 'Filtra gli eventi',
			all: 'Tutti gli eventi',
			today: 'Oggi',
			week: 'Questa settimana',
			business: 'Business',
			industry: 'Industria',
			international: 'Internazionalizzazione',
			funding: 'Finanziamenti',
			innovation: 'Innovazione',
			culture: 'Cultura',
			tourism: 'Turismo',
			foodWine: 'Food and wine',
			sport: 'Sport',
			local: 'Eventi locali'
		},
		list: {
			kicker: 'Calendario eventi',
			title: 'Il calendario della regione.',
			lede: 'Filtra per data o per tema. Ogni evento è legato al suo luogo, così vedi dove si incontra il Veneto.',
			results: '{count} eventi',
			empty: 'Nessun evento corrisponde ancora a questo filtro.',
			note: 'Questi sono eventi di esempio che mostrano come funzionerà il calendario. Saranno sostituiti dagli eventi reali man mano che gli organizzatori li pubblicano.'
		},
		items: {
			exportBreakfast: { title: 'Colazione export: vendere nell’area DACH', place: 'Padova' },
			fundingClinic: { title: 'Sportello fondi UE per piccole manifatture', place: 'Vicenza' },
			openFactory: { title: 'Fabbrica aperta: meccanica di precisione', place: 'Treviso' },
			startupNight: { title: 'Serata di pitch per startup', place: 'Verona' },
			wineBuyers: { title: 'Degustazione per buyer internazionali', place: 'Valpolicella · Verona' },
			villaConcert: { title: 'Concerto serale in una villa palladiana', place: 'Vicenza' },
			trailRun: { title: 'Trail run nelle Dolomiti', place: 'Belluno' },
			deltaFestival: { title: 'Festa dei sapori del Delta del Po', place: 'Rovigo' },
			lagoonForum: { title: 'Forum su turismo e cultura della laguna', place: 'Venezia' },
			balkanMission: { title: 'Missione d’affari: il Veneto incontra la Serbia', place: 'Venezia' }
		},
		cta: {
			title: 'Organizzi un evento in Veneto?',
			button: 'Promuovi un evento'
		}
	},
	platformPage: {
		seo: {
			title: 'La piattaforma Veneto.app: finanziamenti, matchmaking e progetti',
			description: 'Un unico ambiente connesso per informazioni sui finanziamenti, matchmaking tra imprese, gestione di progetti e cooperazione internazionale in Veneto.'
		},
		hero: {
			eyebrow: 'La piattaforma digitale Veneto.app',
			line1: 'Trova finanziamenti.',
			line2: 'Incontra partner.',
			line3: 'Costruisci progetti.',
			text1: 'Un unico ambiente connesso per informazioni sui finanziamenti, matchmaking tra imprese, gestione di progetti e cooperazione internazionale.',
			text2: 'Esplora le informazioni pubbliche su Veneto.app. Entra nel network e continua nell’applicazione mobile per accedere agli strumenti operativi completi.',
			cta: 'Esplora la piattaforma',
			secondary: 'Accedi all’app mobile',
			chip: 'strumenti connessi',
			chip2: 'Web + app mobile'
		},
		phone: { hello: 'Buongiorno. Tre nuovi match oggi.' },
		tools: {
			kicker: 'Strumenti della piattaforma',
			title: 'Tutto si collega.',
			lede: 'Finanziamenti, partner e progetti nello stesso posto: un bando trovato in BandiHub diventa un match, poi un progetto da gestire con i tuoi partner.'
		},
		steps: {
			kicker: 'Come funziona la piattaforma',
			title: 'Sette passi dal profilo al progetto.',
			lede: 'Inizia sul web, continua nell’app mobile: ogni passo si costruisce sul precedente.',
			step: 'Passo {n}',
			inApp: 'App mobile',
			items: {
				profile: { title: 'Crea il tuo profilo', text: 'Registrati come azienda, consulente, organizzazione, investitore o professionista.' },
				interests: { title: 'Scegli i tuoi interessi', text: 'Scegli province, settori, mercati, ambiti di finanziamento e obiettivi di progetto.' },
				discover: { title: 'Scopri le opportunità', text: 'Consulta aziende, anteprime dei bandi, progetti e connessioni internazionali.' },
				membership: { title: 'Scegli il tuo abbonamento', text: 'Scegli il livello di accesso adatto alle tue esigenze.' },
				app: { title: 'Continua nell’app mobile', text: 'Accedi ai dettagli completi dei bandi, al matchmaking, agli alert e agli strumenti operativi privati.' },
				network: { title: 'Costruisci la tua rete', text: 'Entra in contatto con aziende qualificate, esperti e partner di progetto.' },
				projects: { title: 'Sviluppa e gestisci i progetti', text: 'Organizza documenti, attività, scadenze e comunicazione nell’area progetti privata.' }
			}
		},
		channels: {
			kicker: 'Web e app',
			title: 'Inizia sul web. Continua nell’app.',
			web: {
				title: 'Su Veneto.app',
				text: 'Informazioni pubbliche, aperte a tutti.',
				p1: 'Consulta bandi e opportunità',
				p2: 'Scopri le imprese nelle sette province',
				p3: 'Segui eventi, territori e settori',
				p4: 'Crea il profilo della tua azienda'
			},
			app: {
				title: 'Nell’app mobile',
				text: 'Strumenti operativi completi per i membri.',
				p1: 'Dettagli completi dei bandi e alert personalizzati',
				p2: 'Matchmaking intelligente con partner ed esperti',
				p3: 'Gestione dei progetti con i tuoi partner',
				p4: 'Messaggi privati e richieste di collaborazione'
			}
		},
		closing: { title: 'Pronto a lavorare con il Veneto?' }
	},
	bandihubPage: {
		seo: {
			title: 'BandiHub: finanziamenti europei, nazionali e regionali per il Veneto',
			description: 'Esplora un database strutturato di bandi europei, nazionali e regionali, incentivi e voucher digitali per le imprese venete.'
		},
		hero: {
			eyebrow: 'BandiHub',
			line1: 'Opportunità di',
			line2: 'finanziamento aggiornate.',
			text: 'Esplora un database strutturato di bandi europei, nazionali e regionali, incentivi e voucher digitali.'
		},
		searchCta: 'Cerca opportunità di finanziamento',
		unlock: 'Sblocca nell’app',
		locked: 'I dettagli completi dei finanziamenti sono disponibili per i membri Premium tramite l’applicazione mobile.',
		search: {
			kicker: 'Ricerca finanziamenti',
			title: 'Trova il bando giusto.',
			lede: 'Cerca per regione, provincia, settore, tipo di organizzazione, strumento, categoria di progetto, stato e date.',
			placeholder: 'Cerca bandi',
			any: 'Qualsiasi',
			results: '{count} bandi',
			reset: 'Azzera i filtri',
			empty: 'Nessun bando corrisponde a questi filtri. Prova a rimuoverne uno.',
			note: 'Questi sono bandi di esempio che mostrano come funzionerà la ricerca di BandiHub. Saranno sostituiti dai bandi reali; verifica sempre la fonte ufficiale prima di candidarti.'
		},
		filters: {
			region: { label: 'Regione', veneto: 'Veneto', italy: 'Italia (nazionale)', eu: 'Unione europea' },
			province: { label: 'Provincia' },
			industry: {
				label: 'Settore',
				manufacturing: 'Manifattura',
				craft: 'Artigianato e design',
				tourism: 'Turismo',
				agrifood: 'Agroalimentare',
				digital: 'Tecnologie digitali',
				culture: 'Cultura',
				research: 'Ricerca'
			},
			orgType: {
				label: 'Tipo di organizzazione',
				sme: 'Piccola e media impresa',
				large: 'Grande impresa',
				startup: 'Startup',
				research: 'Università o ente di ricerca',
				public: 'Ente pubblico',
				farm: 'Azienda agricola',
				nonprofit: 'Non profit'
			},
			instrument: { label: 'Strumento di finanziamento', grant: 'Contributo a fondo perduto', voucher: 'Voucher', loan: 'Finanziamento agevolato', taxCredit: 'Credito d’imposta' },
			category: {
				label: 'Categoria di progetto',
				digital: 'Digitalizzazione',
				sustainability: 'Sostenibilità',
				internationalisation: 'Internazionalizzazione',
				tourism: 'Turismo',
				innovation: 'Innovazione e ricerca',
				culture: 'Cultura',
				agrifood: 'Agroalimentare'
			},
			status: { label: 'Stato del bando', open: 'Aperto', upcoming: 'In apertura', closed: 'Chiuso' },
			opening: { label: 'Data di apertura', openNow: 'Già aperto', next30: 'Entro 30 giorni' },
			deadline: { label: 'Scadenza', d30: 'Entro 30 giorni', d90: 'Entro 90 giorni', later: 'Oltre 90 giorni' }
		},
		card: {
			deadline: 'Scadenza',
			opens: 'Apertura',
			budget: 'Dotazione',
			intensity: 'Intensità del contributo',
			costs: 'Spese ammissibili'
		},
		calls: {
			digital: { title: 'Voucher per la transizione digitale', eligibility: 'Piccole e medie imprese con sede in Veneto' },
			green: { title: 'Programma manifattura sostenibile', eligibility: 'Imprese manifatturiere nell’UE, singole o in partenariato' },
			craft: { title: 'Contributo export artigianato e design', eligibility: 'PMI dell’artigianato e del design che vendono all’estero' },
			hospitality: { title: 'Finanziamento per il rinnovo ricettivo', eligibility: 'Hotel e imprese turistiche di Belluno, Verona e Venezia' },
			research: { title: 'Bando partenariati di ricerca', eligibility: 'Enti di ricerca che collaborano con imprese' },
			startup: { title: 'Credito d’imposta per startup innovative', eligibility: 'Startup innovative iscritte in Italia' },
			heritage: { title: 'Rigenerazione del patrimonio culturale', eligibility: 'Enti pubblici e non profit di Venezia, Vicenza e Padova' },
			farms: { title: 'Misura di sviluppo rurale per aziende agricole', eligibility: 'Aziende agricole e PMI agroalimentari di Rovigo, Treviso e Verona' }
		},
		access: {
			kicker: 'Cosa puoi consultare',
			title: 'Cerca sul web. Candidati con i dettagli completi nell’app.',
			web: {
				title: 'Disponibile su Veneto.app',
				search: 'Ricerca pubblica dei finanziamenti',
				filters: 'Filtri avanzati',
				previews: 'Anteprime dei bandi',
				eligibility: 'Informazioni di base sui requisiti',
				deadlines: 'Scadenze',
				alerts: 'Iscrizione agli alert'
			},
			app: {
				title: 'Disponibile per i membri Premium nell’app mobile',
				profiles: 'Schede complete dei bandi',
				requirements: 'Requisiti di ammissibilità',
				costs: 'Spese ammissibili',
				budgets: 'Dotazioni disponibili',
				intensity: 'Intensità del contributo',
				cofinancing: 'Requisiti di cofinanziamento',
				documents: 'Documentazione richiesta',
				saved: 'Opportunità salvate',
				recommendations: 'Raccomandazioni personalizzate',
				experts: 'Richieste di supporto da esperti'
			}
		}
	},
	matchPage: {
		seo: {
			title: 'Smart Matchmaking: partner d’affari in Veneto',
			description: 'Veneto.app mette in contatto aziende, consulenti, fornitori di tecnologia, professionisti, investitori e organizzazioni di progetto con obiettivi e competenze complementari.'
		},
		hero: {
			line1: 'Connessioni che',
			line2: 'diventano collaborazione.',
			text: 'Veneto.app mette in contatto aziende, consulenti, fornitori di tecnologia, professionisti, investitori e organizzazioni di progetto con obiettivi e competenze complementari.',
			chip: 'Ogni match spiega il perché',
			chip2: 'Privato finché non vi collegate'
		},
		cta: 'Inizia il matchmaking',
		label: 'Disponibile nell’app mobile',
		stage: {
			title: 'Match consigliati',
			score: 'Match al {score}% · {reason}',
			reasons: {
				distribution: 'Partner per l’export',
				supplier: 'Fornitore',
				research: 'Partner di ricerca'
			}
		},
		criteria: {
			kicker: 'Criteri di matching',
			title: 'Match costruiti su ciò che conta davvero.',
			lede: 'Il matchmaking può basarsi su undici criteri, così ogni suggerimento arriva con un motivo verificabile.',
			items: {
				territory: 'Territorio',
				industry: 'Settore',
				expertise: 'Competenze',
				project: 'Requisiti di progetto',
				funding: 'Interessi di finanziamento',
				markets: 'Mercati di export',
				budget: 'Budget disponibile',
				technology: 'Requisiti tecnologici',
				objectives: 'Obiettivi di partnership',
				languages: 'Lingue',
				international: 'Esperienza internazionale'
			}
		},
		functions: {
			kicker: 'Funzioni Premium dell’app mobile',
			title: 'Da un match a un progetto.',
			lede: 'Nell’app mobile i membri Premium passano dalla scoperta alla collaborazione reale.',
			items: {
				matches: 'Match d’affari consigliati',
				profiles: 'Profili completi dei membri',
				consultants: 'Ricerca di consulenti',
				suppliers: 'Ricerca di fornitori',
				technology: 'Ricerca di partner tecnologici',
				connections: 'Richieste di contatto',
				projectInterest: 'Richieste di interesse per progetti',
				introductions: 'Presentazioni a esperti',
				groups: 'Gruppi di progetto privati',
				workflows: 'Futuri flussi di pre-ingaggio'
			}
		},
		billboard: {
			line1: 'Il tuo prossimo partner',
			line2: 'potrebbe già essere',
			line3: 'nel network.'
		}
	},
	contactPage: {
		seo: {
			title: 'Contatta Veneto.app',
			description: 'Contatta Veneto.app per profili aziendali, investimenti, finanziamenti, internazionalizzazione, eventi, partnership o servizi digitali. Email info@zoemilano.com.'
		},
		hero: {
			eyebrow: 'Contatti',
			line1: 'Cominciamo',
			line2: 'con una conversazione.',
			text: 'Contatta Veneto.app per profili aziendali, investimenti, finanziamenti, internazionalizzazione, eventi, partnership o servizi digitali.'
		},
		email: 'Email',
		owner: 'Veneto.app è una piattaforma di',
		reasons: {
			business: 'Presentare un’impresa',
			join: 'Entrare nel network',
			matchmaking: 'Richiedere un matchmaking',
			investment: 'Proporre un’opportunità di investimento',
			funding: 'Trovare un programma di finanziamento',
			expert: 'Richiedere il contatto con un esperto',
			event: 'Promuovere un evento',
			internationalisation: 'Parlare di internazionalizzazione',
			digital: 'Richiedere servizi digitali',
			general: 'Informazioni generali'
		},
		form: {
			kicker: 'Invia una richiesta',
			title: 'Come possiamo aiutarti?',
			lede: 'Scegli il motivo della richiesta e raccontaci qualcosa in più. Ti risponderemo via email.',
			reason: 'Motivo del contatto',
			name: 'Nome e cognome',
			organisation: 'Azienda o organizzazione',
			email: 'Email',
			phone: 'Telefono',
			message: 'Il tuo messaggio',
			consent: 'Acconsento all’uso di questi dati da parte di Veneto.app per rispondere alla mia richiesta, come descritto nella',
			submit: 'Invia la richiesta',
			sending: 'Invio in corso…',
			or: 'Oppure scrivi direttamente a',
			subject: 'Richiesta da Veneto.app',
			sentTitle: 'Grazie. La tua richiesta è stata inviata.',
			sentText: 'Ti risponderemo all’indirizzo email indicato.',
			unavailable: 'Il modulo online non è ancora attivo. Invia la tua richiesta via email a',
			errors: {
				reason: 'Scegli un motivo di contatto.',
				name: 'Inserisci il tuo nome.',
				email: 'Inserisci un indirizzo email valido.',
				message: 'Scrivi un breve messaggio.',
				consent: 'Conferma che possiamo usare i tuoi dati per risponderti.'
			}
		}
	},
	alertsPage: {
		seo: {
			title: 'Smart Funding Alerts: opportunità di finanziamento per la tua impresa',
			description: 'Ricevi notifiche pertinenti sui finanziamenti in base al profilo aziendale, al settore, alla provincia e agli interessi di progetto.'
		},
		hero: {
			eyebrow: 'Smart Funding Alerts',
			line1: 'Opportunità selezionate',
			line2: 'intorno alla tua impresa.',
			text: 'Ricevi notifiche pertinenti in base al profilo aziendale, al settore, alla provincia e agli interessi di progetto.',
			chip: 'tipi di alert',
			chip2: 'canali di invio'
		},
		cta: 'Attiva gli alert sui finanziamenti',
		phone: {
			date: 'Martedì 14 marzo',
			items: {
				match: { when: 'ora', title: 'Nuovo bando adatto al tuo profilo', text: 'Voucher per la transizione digitale · Veneto' },
				deadline: { when: '1 h fa', title: 'Scadenza tra 7 giorni', text: 'Contributo export artigianato e design' },
				opening: { when: 'Ieri', title: 'In apertura', text: 'Finanziamento per il rinnovo ricettivo · apre tra 15 giorni' }
			}
		},
		types: {
			kicker: 'Tipi di alert',
			title: 'Solo ciò che ti riguarda.',
			lede: 'Scegli gli alert che contano. Ognuno è filtrato sul tuo profilo, così ricevi solo i bandi giusti.',
			join: 'Configura i tuoi alert in pochi minuti.',
			items: {
				newCalls: 'Nuovi bandi',
				openingSoon: 'Bandi in apertura',
				deadlines: 'Scadenze imminenti',
				vouchers: 'Voucher digitali',
				regional: 'Incentivi regionali',
				national: 'Programmi nazionali',
				european: 'Programmi europei',
				international: 'Opportunità di internazionalizzazione',
				partners: 'Ricerche di partner',
				experts: 'Raccomandazioni di esperti'
			}
		},
		channels: {
			kicker: 'Canali di invio',
			title: 'Dove li vuoi tu.',
			lede: 'Subito sul telefono, in un riepilogo settimanale o via email: decidi tu come e quanto spesso.',
			optional: 'Facoltativa',
			items: {
				push: 'Notifiche push sul cellulare',
				inApp: 'Notifiche nell’app',
				email: 'Alert via email',
				summaries: 'Riepiloghi periodici',
				newsletter: 'Newsletter'
			}
		}
	},
	projectPage: {
		seo: {
			title: 'Area progetti privata: il tuo spazio di lavoro su Veneto.app',
			description: 'I membri Premium organizzano progetti, partner, documenti, responsabilità e scadenze in un unico ambiente digitale privato.'
		},
		hero: {
			eyebrow: 'Area progetti privata',
			line1: 'Il tuo spazio di lavoro',
			line2: 'operativo per i progetti.',
			text: 'I membri Premium possono organizzare progetti, partner, documenti, responsabilità e scadenze in un unico ambiente digitale privato.',
			chip: 'Riservato al tuo team',
			chip2: 'partner su questo progetto'
		},
		cta: 'Apri lo spazio progetti',
		label: 'Funzione Premium dell’app mobile',
		stage: {
			label: 'Progetto attivo',
			title: 'Linea di packaging sostenibile',
			progress: 'Avanzamento',
			phases: {
				idea: 'Idea',
				funding: 'Fondi',
				prototype: 'Prototipo',
				testing: 'Test',
				launch: 'Lancio'
			},
			tasks: {
				quotes: { name: 'Caricare i preventivi dei fornitori', due: 'Fatto' },
				documents: { name: 'Rivedere i documenti del bando', due: 'Tra 3 giorni' },
				meeting: { name: 'Incontro con i partner a Padova', due: 'Settimana prossima' }
			}
		},
		functions: {
			kicker: 'Funzioni',
			title: 'Tutto ciò che serve al progetto, in un solo posto.',
			lede: 'Dalla prima fase alla consegna: partner, file, attività e scadenze restano insieme, riservati alle persone che inviti.',
			items: {
				dashboard: 'Dashboard dei progetti attivi',
				phases: 'Fasi di progetto',
				progress: 'Monitoraggio dell’avanzamento',
				access: 'Accesso per team e partner',
				folders: 'Cartelle documenti',
				sharing: 'Condivisione sicura dei file',
				tasks: 'Assegnazione delle attività',
				deadlines: 'Monitoraggio delle scadenze',
				workflows: 'Flussi di lavoro visuali',
				history: 'Cronologia delle attività',
				consultants: 'Accesso per consulenti',
				innovation: 'Coordinamento con l’innovation manager',
				realtime: 'Collaborazione in tempo reale'
			}
		}
	},
	messagingPage: {
		seo: {
			title: 'Messaggi e videochiamate: comunicazione integrata su Veneto.app',
			description: 'Messaggi diretti, gruppi di progetto, file, richieste di incontro, chiamate e videochiamate tra membri, partner ed esperti, progressivamente nell’app mobile Veneto.app.'
		},
		hero: {
			eyebrow: 'Messaggi e videochiamate',
			line1: 'Comunicazione',
			line2: 'integrata.',
			text: 'L’applicazione mobile offrirà progressivamente messaggi, chiamate e presentazioni tra membri, partner ed esperti, accanto ai tuoi progetti.',
			chip: 'strumenti di comunicazione'
		},
		cta: 'Connettiti nell’app',
		label: 'In arrivo progressivamente',
		phone: {
			group: 'Gruppo di progetto · 3 membri',
			m1: 'Possiamo spedire i primi campioni a Monaco la prossima settimana.',
			m2: 'Ottimo. Confermiamo in videochiamata?',
			m3: 'Certo, ecco il piano logistico.',
			file: 'Piano-logistico.pdf',
			meeting: 'Videochiamata · giovedì 10:00',
			quick: {
				a: { send: 'Giovedì per noi va bene.', reply: 'Perfetto, l’invito è nel tuo calendario.' },
				b: { send: 'Puoi aggiungere i documenti doganali?', reply: 'Certo, li carico nella cartella del progetto.' },
				c: { send: 'Chi altro partecipa alla chiamata?', reply: 'Il nostro export manager e il consulente di Padova.' }
			}
		},
		features: {
			kicker: 'Cosa offrirà l’app',
			title: 'Ogni conversazione, accanto al lavoro.',
			lede: 'L’applicazione mobile offrirà progressivamente questi strumenti di comunicazione, così partner ed esperti restano a portata di tocco.',
			join: 'In arrivo progressivamente nell’app mobile.',
			items: {
				direct: 'Messaggi diretti tra membri',
				groups: 'Conversazioni di gruppo di progetto',
				files: 'Allegati',
				experts: 'Consulenze con esperti',
				meetings: 'Richieste di incontro',
				voice: 'Chiamate vocali',
				video: 'Videochiamate',
				history: 'Cronologia delle conversazioni',
				introductions: 'Presentazioni ai partner',
				notifications: 'Notifiche nell’app'
			}
		}
	},
	aiPage: {
		seo: {
			title: 'Futuro assistente IA su Veneto.app',
			description: 'Un futuro assistente IA potrà aiutare a cercare finanziamenti, individuare partner, orientarsi nella piattaforma e preparare domande per i consulenti.'
		},
		hero: {
			eyebrow: 'Futuro assistente IA',
			line1: 'Una guida',
			line2: 'per il prossimo passo.',
			text: 'Un futuro assistente IA potrà aiutarti a cercare finanziamenti, capire i filtri, individuare partner e trovare i servizi giusti: sempre come punto di partenza, mai al posto di un professionista.'
		},
		status: 'In sviluppo · non ancora disponibile',
		stage: {
			notice: 'Stai parlando con un sistema di IA',
			question: 'Quali bandi vanno bene per una piccola manifattura di Treviso?',
			tag: 'IA',
			answer: 'Due bandi aperti potrebbero adattarsi al tuo profilo. Verifica i requisiti ufficiali prima di candidarti.',
			r1: 'Voucher per la transizione digitale',
			r2: 'Chiedi a un esperto di verificare i requisiti',
			disclaimer: 'Non è una consulenza legale, finanziaria o sui finanziamenti.',
			badge: 'Concept',
			q2: {
				question: 'Trova importatori per il nostro vino in Germania',
				answer: 'Tre importatori verificati e una fiera corrispondono al tuo profilo. Puoi contattarli attraverso la piattaforma.',
				r1: 'Importatori in Baviera e ad Amburgo',
				r2: 'Fiera a Düsseldorf, marzo'
			},
			q3: {
				question: 'Cosa serve per avviare un progetto finanziato?',
				answer: 'La maggior parte dei bandi chiede un budget, un cronoprogramma e lettere dei partner. Il tuo spazio di progetto ha una cartella per ciascuno.',
				r1: 'Modelli di budget e cronoprogramma',
				r2: 'Cartelle condivise con controllo degli accessi'
			}
		},
		help: {
			kicker: 'In cosa potrà aiutarti',
			title: 'Un modo più rapido di usare la piattaforma.',
			lede: 'L’assistente potrà aiutare gli utenti in sette attività quotidiane.',
			join: 'In sviluppo. Entra nel network per sapere quando sarà disponibile.',
			items: {
				funding: 'Cercare opportunità di finanziamento',
				filters: 'Capire i filtri',
				partners: 'Individuare potenziali partner',
				navigate: 'Orientarsi nella piattaforma',
				project: 'Preparare le prime informazioni di progetto',
				advisors: 'Organizzare le domande per i consulenti',
				services: 'Trovare i servizi pertinenti'
			}
		},
		principles: {
			kicker: 'Trasparenza',
			title: 'Chiaro su cosa è, e su cosa non è.',
			disclosure: {
				title: 'Saprai sempre che è un’IA',
				text: 'Gli utenti saranno sempre informati che stanno interagendo con un sistema di intelligenza artificiale.'
			},
			advice: {
				title: 'Un orientamento, non una consulenza garantita',
				text: 'Le risposte dell’IA non saranno mai presentate come consulenza legale, finanziaria o sui finanziamenti garantita. Per le decisioni, rivolgiti a un professionista qualificato.'
			}
		},
		closing: {
			title: 'Gli esperti veri sono già nel network.',
			text: 'Finché l’assistente non arriva, e anche dopo, il consiglio giusto viene dalle persone.'
		}
	},
	membershipPage: {
		seo: {
			title: 'Abbonamenti: Z Free, Z Region, Z Business, Z Ecosystem',
			description: 'Inizia gratis su Veneto.app, oppure scegli Z Region (100 € l’anno), Z Business (200 € l’anno) o Z Ecosystem (300 € l’anno) per i dettagli completi dei bandi, il matchmaking e gli strumenti di progetto.'
		},
		hero: {
			eyebrow: 'Abbonamenti',
			line1: 'Scegli il tuo',
			line2: 'livello di accesso.',
			text: 'Inizia gratis e scopri l’ecosistema pubblico. Cresci con il piano adatto al tuo lavoro, al tuo team e ai tuoi mercati.'
		},
		perYear: 'all’anno',
		includes: 'Include',
		platformsTitle: 'Le piattaforme aderenti possono includere',
		futurePlatforms: 'Future piattaforme territoriali',
		note: 'I piani a pagamento sono fatturati su base annuale.',
		payment: {
			kicker: 'Informazioni sul pagamento',
			title: 'Pagamento semplice con bonifico bancario.',
			lede: 'Il pagamento è attualmente disponibile tramite bonifico bancario.',
			steps: {
				transfer: { title: 'Registrati e ricevi le istruzioni', text: 'Dopo la registrazione ricevi le istruzioni di pagamento per il piano scelto.' },
				receipt: { title: 'Carica la ricevuta', text: 'Effettua il bonifico e carica la ricevuta durante la procedura di registrazione.' },
				activation: { title: 'Abbonamento attivato', text: 'L’abbonamento viene attivato dopo la verifica del pagamento.' }
			}
		},
		closing: {
			title: 'Non sai quale piano scegliere?',
			text: 'Inizia con un account gratuito e passa a un piano superiore quando sei pronto, oppure scrivici e ti aiuteremo a scegliere.'
		},
		plans: {
			free: {
				name: 'Free',
				price: 'Gratis',
				for: 'Per chi vuole scoprire l’ecosistema pubblico di Veneto.app.',
				cta: 'Registrati gratis',
				features: {
					f1: 'Accesso pubblico alla piattaforma',
					f2: 'Anteprime di aziende e opportunità',
					f3: 'Anteprime dei bandi',
					f4: 'Ricerca di base',
					f5: 'Alert di base',
					f6: 'Eventi pubblici',
					f7: 'Account gratuito'
				}
			},
			region: {
				name: 'Region',
				price: '100 €',
				for: 'Per professionisti, consulenti e singoli membri d’impresa con focus sul Veneto.',
				cta: 'Attiva Z Region',
				features: {
					f1: 'Schede complete dei bandi',
					f2: 'Ricerca avanzata',
					f3: 'Opportunità salvate',
					f4: 'Profilo professionale',
					f5: 'Alert personalizzati sui finanziamenti',
					f6: 'Matchmaking regionale',
					f7: 'Richieste dirette',
					f8: 'Accesso all’app mobile',
					f9: 'Messaggi privati',
					f10: 'Accesso allo spazio progetti del Veneto'
				}
			},
			business: {
				name: 'Business',
				price: '200 €',
				for: 'Per aziende, organizzazioni, associazioni e team aziendali.',
				cta: 'Attiva Z Business',
				features: {
					f1: 'Tutte le funzioni di Z Region',
					f2: 'Profilo aziendale Premium',
					f3: 'Accesso per il team',
					f4: 'Matchmaking avanzato',
					f5: 'Presentazioni a esperti',
					f6: 'Ricerca di partner di progetto',
					f7: 'Spazio progetti privato',
					f8: 'Documentazione condivisa',
					f9: 'Attività e scadenze',
					f10: 'Messaggi e videochiamate',
					f11: 'Opportunità di internazionalizzazione'
				}
			},
			ecosystem: {
				name: 'Ecosystem',
				price: '300 €',
				for: 'Per i membri che vogliono accedere alla rete più ampia delle piattaforme ZOE MILANO aderenti.',
				cta: 'Accedi all’ecosistema',
				features: {
					f1: 'Tutte le funzioni di Z Business',
					f2: 'Accesso alle reti regionali aderenti',
					f3: 'Matchmaking tra regioni',
					f4: 'Ricerca di partner internazionali',
					f5: 'Visibilità in tutto l’ecosistema',
					f6: 'Presentazioni prioritarie a esperti',
					f7: 'Vantaggi selezionati delle piattaforme',
					f8: 'Future opportunità tra piattaforme'
				}
			}
		}
	},
	appPage: {
		seo: {
			title: 'App ZOE MILANO Network: regioni, impresa, finanziamenti, connessioni',
			description: 'Scopri sul web, connettiti e lavora nell’app: dettagli completi dei bandi, matchmaking, alert e strumenti di progetto privati in un unico account.'
		},
		name: 'ZOE MILANO Network',
		descriptor: 'Regioni. Impresa. Finanziamenti. Connessioni.',
		hero: {
			line1: 'Scopri sul web.',
			line2: 'Connettiti e lavora nell’app.',
			chip: 'account, tutte le regioni',
			chip2: 'iOS e Android'
		},
		cta: {
			text: 'Continua nell’app mobile per accedere alle informazioni complete sui finanziamenti, al matchmaking e agli strumenti di progetto privati.',
			open: 'Apri l’app',
			download: 'Scarica l’app',
			member: 'Diventa membro'
		},
		phone: {
			spaces: 'I tuoi spazi regionali',
			funding: '3 bandi adatti al tuo profilo',
			fundingText: 'Dettagli completi e scadenze',
			matches: '2 nuovi partner compatibili',
			matchesText: 'Lagunare Logistics, Precisa Meccanica'
		},
		features: {
			kicker: 'Funzioni dell’app mobile',
			title: 'Un account. Tutti gli strumenti.',
			lede: 'Tutto ciò che scopri su Veneto.app continua nell’app, con gli strumenti completi per agire.',
			items: {
				account: 'Un unico account',
				regions: 'Più spazi regionali',
				funding: 'Dettagli completi dei bandi',
				alerts: 'Alert personalizzati',
				matchmaking: 'Smart matchmaking',
				profiles: 'Profili dei membri',
				enquiries: 'Richieste dirette',
				workspaces: 'Spazi di progetto',
				documents: 'Documenti condivisi',
				tasks: 'Attività e scadenze',
				messaging: 'Messaggi',
				video: 'Videochiamate',
				ai: 'Futura assistenza IA'
			}
		},
		download: {
			kicker: 'Scarica l’app',
			title: 'Porta Veneto.app con te.',
			text: 'Scarica ZOE MILANO Network dall’App Store o da Google Play e accedi con il tuo account Veneto.app.',
			soon: 'ZOE MILANO Network è in preparazione per l’App Store e Google Play. Diventa membro ora e il tuo account sarà pronto dal primo giorno.',
			scan: 'Inquadra con il telefono',
			scanText: 'Apri questa pagina sul telefono per andare direttamente all’app.'
		},
		closing: { title: 'Scopri sul web. Lavora nell’app.' }
	},
	aboutPage: {
		seo: {
			title: 'Chi siamo: Veneto.app, piattaforma digitale indipendente per il Veneto',
			description: 'Veneto.app è una piattaforma digitale indipendente creata per collegare territori, imprese, settori e opportunità della regione a una più ampia rete internazionale.'
		},
		hero: {
			eyebrow: 'Chi è Veneto.app',
			line1: 'Una regione globale',
			line2: 'merita un futuro digitale',
			line3: 'connesso.',
			text: 'Veneto.app è una piattaforma digitale indipendente creata per collegare territori, imprese, settori e opportunità della regione a una più ampia rete internazionale.'
		},
		story: {
			kicker: 'Com’è nata l’idea',
			title: 'Una regione dai tanti punti di forza ha bisogno di un unico punto di connessione.',
			p1: 'Veneto.app nasce da ricerca, osservazione e una chiara visione imprenditoriale.',
			p2: 'Il Veneto è riconosciuto a livello internazionale per Venezia, il patrimonio culturale, la capacità manifatturiera, la tradizione dell’export, il turismo, il vino e le industrie specializzate.',
			p3: 'Eppure questi punti di forza vengono spesso presentati separatamente.',
			p4: 'L’idea alla base di Veneto.app è creare un unico ambiente digitale capace di riunire l’intero ecosistema regionale.',
			p5: 'La piattaforma collega il territorio all’impresa, il patrimonio alla tecnologia, le competenze locali ai mercati internazionali e le idee forti alle persone che possono aiutarle a crescere.',
			quote1: 'Veneto.app non nasce per ripetere ciò che già si sa della regione.',
			quote2: 'Nasce per rivelare quanto di più si può connettere.'
		},
		mission: {
			kicker: 'Missione',
			title: 'La nostra missione è:',
			items: {
				territory: 'Presentare l’intero territorio veneto',
				companies: 'Sostenere aziende e professionisti',
				industries: 'Promuovere i settori produttivi regionali',
				international: 'Favorire l’internazionalizzazione',
				partners: 'Mettere in contatto le imprese con partner qualificati',
				funding: 'Ampliare l’accesso alle informazioni sui finanziamenti pertinenti',
				projects: 'Sostenere progetti innovativi ed europei',
				exchange: 'Creare scambi culturali e professionali',
				tools: 'Sviluppare strumenti digitali concreti',
				markets: 'Collegare il Veneto ai mercati europei e internazionali'
			}
		},
		values: {
			kicker: 'Valori',
			title: 'Ciò che guida la piattaforma.',
			lede: 'Sette valori danno forma a ogni pagina, ogni connessione e ogni strumento di Veneto.app.',
			items: {
				identity: { title: 'Identità', text: 'Rispettiamo la storia, le industrie e il carattere del territorio.' },
				enterprise: { title: 'Impresa', text: 'Riconosciamo le persone e le aziende che creano valore economico reale.' },
				connection: { title: 'Connessione', text: 'Colleghiamo imprese, esperti, mercati, progetti e opportunità.' },
				innovation: { title: 'Innovazione', text: 'Usiamo la tecnologia per risolvere sfide concrete.' },
				international: { title: 'Prospettiva internazionale', text: 'Aiutiamo i punti di forza locali a raggiungere mercati più ampi.' },
				quality: { title: 'Qualità', text: 'Crediamo che i territori forti meritino prodotti digitali progettati con cura.' },
				responsibility: { title: 'Responsabilità', text: 'Sosteniamo una comunicazione trasparente, la revisione umana e una tecnologia responsabile.' }
			}
		},
		founder: {
			kicker: 'La visione della fondatrice',
			line1: 'La visione nasce',
			line2: 'collegando',
			line3: 'ciò che altri',
			line4: 'tengono separato.',
			p1: 'Veneto.app è stata ideata da Zorana Petrović, fondatrice e CEO di ZOE MILANO d.o.o.',
			p2: 'Zorana è un’imprenditrice tecnologica, strategist creativa, visionaria e filantropa, il cui percorso professionale e personale è profondamente legato all’Italia, alla cultura, alla creatività e alla cooperazione internazionale.',
			p3: 'Il suo percorso unisce tecnologia, imprenditoria, musica, arte, comunicazione e sviluppo di ecosistemi digitali.',
			p4: 'Dopo aver studiato e vissuto a Milano e aver lavorato per anni con aziende, professionisti e progetti italiani, ha riconosciuto il bisogno di piattaforme capaci di fare di più che promuovere un luogo.',
			p5: 'La sua visione è creare ambienti digitali che colleghino imprese, territori, finanziamenti, cultura e opportunità internazionali attraverso una tecnologia concreta.',
			p6: 'Veneto.app fa parte di questa visione più ampia.',
			p7: 'È pensata come un ecosistema in evoluzione, dove la forte identità del Veneto può incontrare nuovi mercati, nuovi progetti e nuove collaborazioni.',
			statementLabel: 'Dichiarazione della fondatrice',
			quote1: 'Il Veneto rappresenta quell’Italia che sa preservare la propria identità continuando a produrre, esportare, creare ed evolversi.',
			quote2: 'Lo scopo di Veneto.app è collegare questi punti di forza in un unico ambiente digitale e rendere più facili da scoprire nuove opportunità imprenditoriali, culturali e internazionali.',
			role: 'Fondatrice e CEO, ZOE MILANO d.o.o.'
		},
		bridge: {
			kicker: 'ZOE MILANO e il Veneto',
			line1: 'Collegare l’eccellenza',
			line2: 'italiana con',
			line3: 'nuovi mercati.',
			text: 'La posizione di ZOE MILANO tra Italia, Serbia e mercati internazionali offre una prospettiva preziosa per gli scambi d’affari e la cooperazione transfrontaliera.',
			nodes: { italy: 'Italia', serbia: 'Serbia', world: 'Mercati internazionali' },
			aimsTitle: 'Attraverso Veneto.app, l’azienda intende sostenere',
			closing: 'La piattaforma rispetta l’identità locale del Veneto creando opportunità concrete per una cooperazione più ampia.',
			aims: {
				visibility: 'Visibilità delle imprese regionali',
				partnerships: 'Partnership internazionali',
				italySerbia: 'Connessioni d’affari Italia–Serbia',
				balkans: 'Accesso al mercato balcanico',
				technology: 'Partnership tecnologiche',
				culture: 'Scambio culturale',
				europe: 'Cooperazione europea',
				tourism: 'Progetti turistici e territoriali',
				matchmaking: 'Matchmaking tra piattaforme',
				digital: 'Trasformazione digitale'
			}
		},
		zoe: {
			kicker: 'Chi è ZOE MILANO',
			line1: 'Tecnologia con',
			line2: 'una prospettiva',
			line3: 'internazionale.',
			p1: 'ZOE MILANO d.o.o. è un’azienda di tecnologia, strategia digitale e sviluppo di piattaforme con sede a Belgrado, in Serbia, con un forte legame professionale con l’Italia e il mercato europeo.',
			p2: 'La sua esperienza in progetti per il mercato italiano si sviluppa dal 2018 attraverso la collaborazione con aziende, professionisti, organizzazioni e iniziative territoriali.',
			stat: 'piattaforme e progetti digitali sviluppati o a cui ha contribuito, in settori e mercati diversi',
			visit: 'Visita ZOE MILANO',
			productsTitle: 'ZOE MILANO sviluppa prodotti digitali che uniscono',
			objective: 'Il suo obiettivo è costruire ecosistemi digitali connessi, non siti web isolati.',
			products: {
				web: 'Piattaforme web su misura',
				mobile: 'Applicazioni mobile',
				b2b: 'Reti B2B',
				matchmaking: 'Matchmaking aziendale',
				funding: 'Informazioni sui finanziamenti',
				membership: 'Sistemi di membership',
				projects: 'Strumenti di gestione progetti',
				ecommerce: 'E-commerce',
				directories: 'Directory digitali',
				tourism: 'Tecnologia per il turismo',
				cultural: 'Piattaforme culturali e territoriali',
				sports: 'Tecnologia per lo sport',
				ai: 'Integrazioni di intelligenza artificiale',
				multilingual: 'Comunicazione multilingue',
				international: 'Internazionalizzazione',
				europe: 'Reti di progetti europei'
			}
		}
	},
	legalPage: {
		seo: {
			title: 'Note legali e dichiarazione di indipendenza',
			description: 'Veneto.app è una piattaforma digitale privata e indipendente, sviluppata e gestita da ZOE MILANO d.o.o. Non è un sito ufficiale di alcun ente pubblico.'
		},
		hero: {
			eyebrow: 'Veneto.app',
			line1: 'Note legali e',
			line2: 'dichiarazione di indipendenza.'
		},
		clauses: {
			independent: {
				title: 'Una piattaforma privata indipendente',
				text: 'Veneto.app è una piattaforma digitale privata e indipendente, sviluppata e gestita da ZOE MILANO d.o.o.'
			},
			notOfficial: {
				title: 'Non è un sito ufficiale',
				text: 'Non è un sito ufficiale della Regione del Veneto, di alcuna provincia o comune, del Governo italiano, dell’Unione europea, di enti del turismo, camere di commercio, agenzie di finanziamento o autorità di gestione.'
			},
			funding: {
				title: 'Informazioni sui finanziamenti',
				text: 'Le informazioni sui finanziamenti sono fornite a scopo puramente informativo.'
			},
			noGuarantee: {
				title: 'Nessun risultato garantito',
				text: 'La registrazione, l’abbonamento o la pubblicazione di un’opportunità non garantiscono l’ammissibilità, l’approvazione della domanda, il finanziamento, l’investimento o risultati commerciali.'
			},
			services: {
				title: 'Accordi separati per i servizi',
				text: 'Servizi professionali, domande di finanziamento, consulenza, gestione dei progetti e implementazione tecnica sono soggetti ad accordi, ambiti e compensi separati.'
			}
		},
		contact: 'Domande su questa dichiarazione?'
	},
	next: {
		eyebrow: 'E adesso?',
		title: 'Continua a esplorare.',
		territories: { name: 'Territori', text: 'Sette province, i loro settori e cosa è attivo ora.' },
		home: { name: 'Home', text: 'Riparti dalla panoramica della piattaforma.' },
		register: { name: 'Iscriviti a Veneto.app', text: 'Crea il profilo gratuito della tua azienda.' }
	},
	soon: {
		status: 'Questa sezione è in costruzione.',
		register: 'Iscriviti a Veneto.app',
		home: 'Torna alla home'
	},
	error: {
		notFound: 'Questa pagina non esiste.',
		generic: 'Qualcosa è andato storto.',
		text: 'Il link potrebbe essere vecchio o errato. Prova una ricerca o torna alla home.',
		textGeneric: 'Riprova tra qualche istante.'
	},
	footer: {
		statement: 'Veneto.app — Costruita per il Veneto. Pronta per il mondo.',
		about: 'Una piattaforma digitale indipendente che collega territori, imprese, progetti e opportunità internazionali del Veneto.',
		provided: 'Sviluppata e fornita da',
		links: {
			territory: 'Territorio',
			industries: 'Impresa e industria',
			invest: 'Investimenti',
			internationalisation: 'Internazionalizzazione',
			cultureTourism: 'Cultura e turismo',
			agrifoodWine: 'Agroalimentare e vino',
			events: 'Eventi',
			bandihub: 'BandiHub',
			matchmaking: 'Smart Matchmaking',
			fundingAlerts: 'Alert finanziamenti',
			projectManagement: 'Gestione progetti',
			app: 'App mobile',
			membership: 'Abbonamenti',
			presentBusiness: 'Presenta un’impresa',
			submitOpportunity: 'Proponi un’opportunità',
			findPartner: 'Trova un partner',
			promoteEvent: 'Promuovi un evento',
			submitProject: 'Proponi un progetto',
			requestExpert: 'Richiedi un esperto',
			about: 'Chi è Veneto.app',
			founder: 'La visione della fondatrice',
			zoeMilano: 'Chi è ZOE MILANO',
			contact: 'Contatti',
			login: 'Accedi',
			join: 'Iscriviti',
			legalNotice: 'Note legali',
			privacy: 'Informativa privacy',
			cookies: 'Cookie policy',
			cookiePreferences: 'Preferenze cookie',
			terms: 'Termini e condizioni',
			dataProtection: 'Protezione dei dati / GDPR',
			accessibility: 'Accessibilità',
			aiNotice: 'Avviso sui contenuti IA'
		},
		independence:
			'Veneto.app è una piattaforma privata indipendente. Non è affiliata alla Regione del Veneto né ad alcun ente pubblico. I contenuti di esempio sono sempre segnalati.',
		readStatement: 'Leggi la dichiarazione completa',
		bottomLine: 'Piattaforma digitale indipendente per impresa e territorio',
		owner: 'Una piattaforma regionale ZOE MILANO'
	},
	content: contentIt
};

export default it;
