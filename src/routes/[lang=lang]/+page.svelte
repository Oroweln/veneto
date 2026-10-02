<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen, bgVideo } from '$lib/actions/reveal';
	import { PROVINCES, REGION_FIGURES, type ProvinceCode } from '$lib/data/provinces';
	import { INDUSTRIES } from '$lib/data/industries';
	import { COMPANIES } from '$lib/data/companies';
	import type { IconName } from '$lib/components/icons';
	import Seo from '$lib/components/Seo.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import VenetoMap from '$lib/components/VenetoMap.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import Ticker from '$lib/components/Ticker.svelte';
	import AppBadges from '$lib/components/AppBadges.svelte';
	import CompanyCard from '$lib/components/CompanyCard.svelte';
	import TerritoryCard from '$lib/components/TerritoryCard.svelte';
	import Billboard from '$lib/components/Billboard.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import WorldRoutes from '$lib/components/WorldRoutes.svelte';
	import FundingStage from '$lib/components/FundingStage.svelte';
	import { PROVINCE_BY_CODE } from '$lib/data/provinces';

	const i18n = useI18n();

	let lit = $state<ProvinceCode | null>(null);

	// Main category cards. Text: home.categories.items.{key}.
	const categories: { key: string; href: string; icon: IconName }[] = [
		{ key: 'business', href: '/industries', icon: 'gear' },
		{ key: 'investment', href: '/invest', icon: 'chart' },
		{ key: 'internationalisation', href: '/internationalisation', icon: 'globe' },
		{ key: 'funding', href: '/bandihub', icon: 'euro' },
		{ key: 'culture', href: '/culture-tourism', icon: 'column' },
		{ key: 'agrifood', href: '/agrifood-wine', icon: 'wine' },
		{ key: 'innovation', href: '/innovation', icon: 'chip' },
		{ key: 'events', href: '/events', icon: 'calendar' }
	];

	const moves: { key: string; icon: IconName }[] = [
		{ key: 'goods', icon: 'ship' },
		{ key: 'ideas', icon: 'bulb' },
		{ key: 'people', icon: 'users' },
		{ key: 'exports', icon: 'globe' },
		{ key: 'projects', icon: 'rocket' },
		{ key: 'culture', icon: 'column' },
		{ key: 'regions', icon: 'link' },
		{ key: 'tradition', icon: 'gear' }
	];

	const audiences: { key: string; icon: IconName }[] = [
		{ key: 'companies', icon: 'building' },
		{ key: 'startups', icon: 'rocket' },
		{ key: 'investors', icon: 'chart' },
		{ key: 'professionals', icon: 'briefcase' },
		{ key: 'institutions', icon: 'column' },
		{ key: 'international', icon: 'globe' }
	];

	const journey = ['join', 'discover', 'connect', 'grow'];
	// Tourism & culture mosaic: one tile per landscape, linked to its province (or to all territories).
	const worlds: { key: string; icon: IconName; href: string; province?: string; size?: 'big' | 'wide'; tone: string }[] = [
		{ key: 'dolomites', icon: 'mountain', href: '/territories/belluno', province: 'Belluno', size: 'big', tone: 'vermilion' },
		{ key: 'cities', icon: 'column', href: '/territories', size: 'wide', tone: 'ink' },
		{ key: 'garda', icon: 'waves', href: '/territories/verona', province: 'Verona', tone: 'cream' },
		{ key: 'coast', icon: 'sun', href: '/territories/venezia', province: 'Venezia', tone: 'apricot' },
		{ key: 'thermal', icon: 'drop', href: '/territories/padova', province: 'Padova', tone: 'cream' },
		{ key: 'prosecco', icon: 'wine', href: '/territories/treviso', province: 'Treviso', tone: 'ink' },
		{ key: 'delta', icon: 'reeds', href: '/territories/rovigo', province: 'Rovigo', tone: 'cream' },
		{ key: 'villas', icon: 'villa', href: '/territories/vicenza', province: 'Vicenza', tone: 'ink' }
	];
	// Sample matches shown in the app preview.
	const matches = ['lagunare-logistics', 'precisa-meccanica'].map((slug) => COMPANIES.find((c) => c.slug === slug)!);
	const tickerItems = $derived(
		['business', 'industry', 'culture', 'territory', 'opportunity', 'export', 'design', 'craft', 'innovation'].map((k) =>
			i18n.t(`home.ticker.${k}`)
		)
	);
</script>

<Seo title={i18n.t('home.seo.title')} description={i18n.t('home.seo.description')} />

<!-- HERO -->
<section class="hero on-ink" use:onscreen>
	<div class="hero__media" aria-hidden="true">
		<video use:bgVideo src="/media/hero.mp4" poster="/media/hero-poster.jpg" autoplay muted loop playsinline preload="auto"></video>
	</div>
	<div class="hero__glow" aria-hidden="true"></div>
	<p class="hero__ai"><Icon name="star" size={12} />{i18n.t('home.hero.aiLabel')}</p>
	<div class="container hero__grid">
		<div class="hero__copy">
			<p class="eyebrow">{i18n.t('home.hero.eyebrow')}</p>
			<h1 class="hero__title">
				<span class="line"><span class="line__in">{i18n.t('home.hero.line1a')} <span class="metal-text">{i18n.t('brand.region')}</span>.</span></span>
				<span class="line"><span class="line__in">{i18n.t('home.hero.line2')}<span class="dot-accent">.</span></span></span>
			</h1>
			<p class="lede">{i18n.t('home.hero.lede')}</p>
			<div class="hero__actions">
				<a class="btn btn--primary btn--big" href={i18n.path('/business')}>{i18n.t('home.hero.cta')} <span class="arrow">→</span></a>
				<a class="btn btn--ghost" href={i18n.path('/register')}>{i18n.t('home.hero.ctaSecondary')}</a>
			</div>
			<p class="support">{i18n.t('brand.supporting')}</p>
			<AppBadges />
		</div>

		<div class="hero__stage" aria-hidden="true" inert>
			<div class="stage__map">
				<VenetoMap flows labels intro />
			</div>
			<span class="stage__claim billboard-type">{i18n.t('brand.moves')}</span>
			<FloatChip style="top: 6%; left: -2%;"><strong>7</strong> {i18n.t('home.chips.provinces')}</FloatChip>
			<FloatChip tone="apricot" delay={1.6} hideOnPhone style="top: 22%; right: -4%;">{i18n.t('home.chips.exports')}</FloatChip>
			<FloatChip tone="ink" delay={3.1} style="bottom: 8%; left: 4%;">{i18n.t('home.chips.live')}</FloatChip>
		</div>
	</div>

	<div class="container">
		<dl class="stats">
			<div class="stat">
				<dt>{i18n.t('home.stats.registered')}</dt>
				<dd class="figure"><CountUp value={REGION_FIGURES.registered} suffix="*" /></dd>
			</div>
			<div class="stat">
				<dt>{i18n.t('home.stats.provinces')}</dt>
				<dd class="figure">7</dd>
			</div>
			<div class="stat">
				<dt>{i18n.t('home.stats.exports')}</dt>
				<dd class="figure">€<CountUp value={REGION_FIGURES.exportsBn} suffix={i18n.t('home.stats.bn') + '*'} /></dd>
			</div>
		</dl>
		<p class="note stats__note">{i18n.t('common.indicative')}</p>
	</div>
	<div class="metal-edge hero__edge"></div>
</section>

<Ticker items={tickerItems} label={i18n.t('brand.supporting')} />

<!-- BILLBOARD 01 -->
<StatementBand
	lines={[i18n.t('home.billboard01.line1'), i18n.t('home.billboard01.line2'), i18n.t('home.billboard01.line3')]}
	support={i18n.t('home.billboard01.support')}
/>

<!-- SEARCH -->
<section class="section search-section">
	<div class="container">
		<div class="section-head section-head--center" use:reveal>
			<p class="eyebrow">{i18n.t('home.search.eyebrow')}</p>
			<h2 class="h2">{i18n.t('home.search.title')} <span class="accent">{i18n.t('brand.region')}</span>.</h2>
		</div>
		<form class="searchbar" action={i18n.path('/business')} method="get" use:reveal={80}>
			<label class="field field--q">
				<span class="sr-only">{i18n.t('home.search.keyword')}</span>
				<Icon name="search" size={20} />
				<input name="q" type="search" placeholder={i18n.t('home.search.placeholder')} />
			</label>
			<label class="field">
				<span class="field__label">{i18n.t('home.search.where')}</span>
				<select name="territory">
					<option value="">{i18n.t('home.search.allVeneto')}</option>
					{#each PROVINCES as p (p.id)}<option value={p.id}>{p.name}</option>{/each}
				</select>
			</label>
			<label class="field">
				<span class="field__label">{i18n.t('home.search.industry')}</span>
				<select name="industry">
					<option value="">{i18n.t('home.search.any')}</option>
					{#each INDUSTRIES as ind (ind.id)}<option value={ind.id}>{i18n.t(`content.industries.${ind.id}.name`)}</option>{/each}
				</select>
			</label>
			<label class="field">
				<span class="field__label">{i18n.t('home.search.lookingFor')}</span>
				<select name="seeking">
					<option value="">{i18n.t('home.search.any')}</option>
					{#each ['partners', 'suppliers', 'clients', 'investors', 'distributors', 'talent'] as k (k)}
						<option value={k}>{i18n.t(`home.search.seeking.${k}`)}</option>
					{/each}
				</select>
			</label>
			<label class="field">
				<span class="field__label">{i18n.t('home.search.type')}</span>
				<select name="type">
					<option value="">{i18n.t('home.search.any')}</option>
					{#each ['company', 'startup', 'professional', 'association'] as k (k)}
						<option value={k}>{i18n.t(`home.search.types.${k}`)}</option>
					{/each}
				</select>
			</label>
			<label class="field">
				<span class="field__label">{i18n.t('home.search.language')}</span>
				<select name="lang">
					<option value="">{i18n.t('home.search.any')}</option>
					{#each ['it', 'en', 'de', 'fr'] as code (code)}
						<option value={code}>{i18n.t(`common.languageNames.${code}`)}</option>
					{/each}
				</select>
			</label>
			<button class="btn btn--primary btn--big submit" type="submit">{i18n.t('home.search.submit')}</button>
		</form>
		<div class="pill-row pill-row--scroll quick" use:reveal={140}>
			{#each PROVINCES as p (p.id)}
				<a class="pill" href={i18n.path(`/territories/${p.id}`)}><Icon name="pin" size={14} />{p.name}</a>
			{/each}
		</div>
	</div>
</section>

<!-- MAIN CATEGORIES -->
<section class="section section--surface">
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('home.categories.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('home.categories.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('home.categories.lede')}</p>
		</div>
		<ul class="categories">
			{#each categories as c, i (c.key)}
				<li use:reveal={(i % 4) * 40}>
					<a class="category card-hover disc-host on-ink" href={i18n.path(c.href)}>
						<span class="category__art" aria-hidden="true"><Icon name={c.icon} size={150} stroke={0.6} /></span>
						<span class="category__top">
							<span class="disc"><Icon name={c.icon} size={20} /></span>
							<span class="category__num">{String(i + 1).padStart(2, '0')}</span>
						</span>
						<span class="category__title">{i18n.t(`home.categories.items.${c.key}.title`)}</span>
						<span class="category__text">{i18n.t(`home.categories.items.${c.key}.text`)}</span>
						<span class="category__cta">{i18n.t(`home.categories.items.${c.key}.cta`)} <span class="arrow-circle"><Icon name="arrow" size={16} /></span></span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- VENETO MOVES -->
<section class="section section--vermilion moves" use:onscreen>
	<div class="container">
		<div class="moves__head">
			<p class="moves__eyebrow">{i18n.t('home.moves.eyebrow')}</p>
			<h2 class="moves__title billboard-type" use:reveal>{i18n.t('brand.moves')}</h2>
			<p class="moves__lede" use:reveal={80}>{i18n.t('home.moves.lede')}</p>
		</div>
		<ul class="moves__grid">
			{#each moves as m, i (m.key)}
				<li class="move" use:reveal={i * 40}>
					<span class="move__icon"><Icon name={m.icon} size={22} /></span>
					<span class="move__title">{i18n.t(`home.moves.items.${m.key}.title`)}</span>
					<span class="move__text">{i18n.t(`home.moves.items.${m.key}.text`)}</span>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- BILLBOARD 02 -->
<StatementBand
	lines={[i18n.t('home.billboard02.line1'), i18n.t('home.billboard02.line2')]}
	align="right"
	size="lg"
/>

<!-- BUSINESS NETWORK PREVIEW -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="network">
			<div class="network__copy">
				<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('home.network.eyebrow')}</p>
				<h2 class="network__title stack-lines" use:reveal={60}>
					<span>{i18n.t('home.network.titleA')}</span>
					<span class="accent">{i18n.t('home.network.titleB')}</span>
				</h2>
				<p class="lede" use:reveal={100}>{i18n.t('home.network.text1')}</p>
				<p class="network__text" use:reveal={140}>{i18n.t('home.network.text2')}</p>
				<div class="network__actions" use:reveal={180}>
					<a class="btn btn--primary btn--big" href={i18n.path('/network')}>{i18n.t('home.network.cta')} <span class="arrow">→</span></a>
					<a class="btn btn--outline btn--big" href={i18n.path('/register')}>{i18n.t('home.network.ctaSecondary')}</a>
				</div>
			</div>

			<div class="network__stage" aria-hidden="true" inert>
				<div class="network__glow"></div>
				<PhoneFrame>
					<div class="match">
						<p class="match__app">
							<span>{i18n.t('home.network.phone.title')}</span>
							<span class="badge badge--demo">{i18n.t('home.network.phone.badge')}</span>
						</p>
						<div class="match__req">
							<span class="match__label">{i18n.t('home.network.phone.request')}</span>
							<span class="match__need">{i18n.t('home.network.phone.need')}</span>
							<span class="match__chips">
								<span>{i18n.t('home.network.phone.chipA')}</span>
								<span>{i18n.t('home.network.phone.chipB')}</span>
							</span>
						</div>
						<ul class="match__list">
							{#each matches as c, i (c.slug)}
								<li class="match__item" class:top={i === 0}>
									<span class="match__rank">{String(i + 1).padStart(2, '0')}</span>
									<span class="match__logo">{c.initials}</span>
									<span class="match__who">
										<span class="match__name">{c.name}</span>
										<span class="match__place">{c.town} · {PROVINCE_BY_CODE[c.province].name}</span>
									</span>
								</li>
							{/each}
						</ul>
						<p class="match__why">{i18n.t('home.network.phone.why')}</p>
						<ul class="match__reasons">
							{#each ['reasonA', 'reasonB', 'reasonC'] as r (r)}
								<li><Icon name="check" size={13} stroke={2.4} />{i18n.t(`home.network.phone.${r}`)}</li>
							{/each}
						</ul>
						<span class="match__btn">{i18n.t('home.network.phone.propose')}</span>
					</div>
				</PhoneFrame>
				<FloatChip style="top: -4px; left: 0;">{i18n.t('home.network.chips.private')}</FloatChip>
				<FloatChip tone="apricot" delay={2} style="bottom: -8px; right: 0;">{i18n.t('home.network.chips.why')}</FloatChip>
			</div>
		</div>

		<div class="featured-head" use:reveal>
			<p class="eyebrow">{i18n.t('home.featured.kicker')}</p>
			<a class="btn btn--outline btn--sm" href={i18n.path('/business')}>{i18n.t('home.featured.cta')} <span class="arrow">→</span></a>
		</div>
		<ul class="companies">
			{#each COMPANIES.filter((c) => c.premium).slice(0, 6) as c, i (c.slug)}
				<li use:reveal={i * 40}><CompanyCard company={c} /></li>
			{/each}
		</ul>
		<p class="demo-notice" style="margin-top: 28px">{i18n.t('home.featured.notice')}</p>
	</div>
</section>

<!-- BILLBOARD -->
<section class="section section--surface billboard-section">
	<div class="container">
		<Billboard variant="landscape" />
	</div>
</section>

<!-- MOTTO -->
<section class="motto">
	<div class="container">
		<p class="statement motto__text" use:reveal>
			{#each i18n.t('home.motto').split('.').filter(Boolean) as word, i (i)}
				<span>{word.trim()}<span class="dot-accent">.</span></span>
			{/each}
		</p>
	</div>
</section>

<!-- EXPLORE VENETO -->
<section class="section section--ink explore" use:onscreen>
	<div class="container">
		<div class="intro">
			<div class="intro__head">
				<p class="kicker" use:reveal><span class="kicker__num">03</span>{i18n.t('home.explore.eyebrow')}</p>
				<h2 class="intro__title stack-lines" use:reveal={60}>
					<span>{i18n.t('home.explore.titleA')}</span>
					<span class="metal-text">{i18n.t('home.explore.titleB')}</span>
				</h2>
			</div>
			<p class="lede intro__lead" use:reveal={100}>{i18n.t('home.explore.text1')}</p>
			<div class="intro__body">
				<p use:reveal={140}>{i18n.t('home.explore.text2')}</p>
				<p use:reveal={180}>{i18n.t('home.explore.text3')}</p>
				<a class="btn btn--primary btn--big" href={i18n.path('/territories')} use:reveal={220}>
					{i18n.t('home.explore.cta')} <span class="arrow">→</span>
				</a>
			</div>
		</div>

		<div class="explore__grid">
			<div class="explore__map">
				<div class="explore__map-inner">
					<VenetoMap links labels highlight={lit} onhover={(c) => (lit = c)} title={i18n.t('home.explore.mapTitle')} />
					<p class="note">{i18n.t('home.explore.mapHint')}</p>
				</div>
			</div>
			<ul class="explore__cards">
				{#each PROVINCES as p, i (p.id)}
					<li use:reveal={i * 40}>
						<TerritoryCard province={p} active={lit === p.code} onhover={(on) => (lit = on ? p.code : null)} />
					</li>
				{/each}
				<li use:reveal={280}>
					<a class="region-tile" href={i18n.path('/territories')}>
						<span class="region-tile__map" aria-hidden="true"><VenetoMap capitals={false} tone="copper" /></span>
						<span class="region-tile__name">{i18n.t('brand.region').toUpperCase()}</span>
						<span class="region-tile__text">{i18n.t('home.explore.regionTile')}</span>
						<span class="region-tile__go">{i18n.t('home.explore.allTerritories')} →</span>
					</a>
				</li>
			</ul>
		</div>
		<p class="note" style="margin-top: 20px">{i18n.t('common.demoCounts')}</p>
	</div>
</section>

<!-- INTERNATIONALISATION PREVIEW -->
<section class="section section--surface" use:onscreen>
	<div class="container international">
		<div class="international__stage" use:reveal>
			<div class="international__card grid-texture ink-scope">
				<WorldRoutes />
			</div>
		</div>
		<div class="international__copy">
			<p class="kicker" use:reveal><span class="kicker__num">04</span>{i18n.t('home.international.eyebrow')}</p>
			<h2 class="international__title stack-lines" use:reveal={60}>
				<span>{i18n.t('home.international.titleA')}</span>
				<span class="accent">{i18n.t('home.international.titleB')}</span>
			</h2>
			<p class="lede" use:reveal={100}>{i18n.t('home.international.text1')}</p>
			<p class="international__text" use:reveal={140}>{i18n.t('home.international.text2')}</p>
			<div class="international__actions" use:reveal={180}>
				<a class="btn btn--primary btn--big" href={i18n.path('/internationalisation')}>{i18n.t('home.international.cta')} <span class="arrow">→</span></a>
				<a class="btn btn--outline btn--big" href={i18n.path('/matchmaking')}>{i18n.t('home.international.ctaSecondary')}</a>
			</div>
		</div>
	</div>
</section>

<!-- BILLBOARD 03 -->
<StatementBand lines={[i18n.t('home.billboard03.line1'), i18n.t('home.billboard03.line2')]} size="lg" />

<!-- FUNDING PREVIEW -->
<section class="section" use:onscreen>
	<div class="container funding">
		<div class="funding__copy">
			<p class="kicker" use:reveal><span class="kicker__num">05</span>{i18n.t('home.funding.eyebrow')}</p>
			<h2 class="funding__title stack-lines" use:reveal={60}>
				<span>{i18n.t('home.funding.titleA')}</span>
				<span class="accent">{i18n.t('home.funding.titleB')}</span>
			</h2>
			<p class="lede" use:reveal={100}>{i18n.t('home.funding.text1')}</p>
			<p class="funding__text" use:reveal={140}>{i18n.t('home.funding.text2')}</p>
			<div class="funding__actions" use:reveal={180}>
				<a class="btn btn--primary btn--big" href={i18n.path('/bandihub')}>{i18n.t('home.funding.cta')} <span class="arrow">→</span></a>
				<a class="btn btn--outline btn--big" href={i18n.path('/app')}>{i18n.t('home.funding.ctaSecondary')}</a>
			</div>
		</div>
		<div class="funding__stage" use:reveal={80}>
			<FundingStage />
			<FloatChip tone="vermilion" style="top: -18px; right: 6%;">
				<Icon name="bell" size={14} />
				{i18n.t('home.funding.chip')}
			</FloatChip>
		</div>
	</div>
</section>

<!-- TOURISM & CULTURE PREVIEW -->
<section class="section section--surface">
	<div class="container">
		<div class="section-head section-head--split worlds-head">
			<div class="worlds-head__title">
				<p class="kicker" use:reveal><span class="kicker__num">06</span>{i18n.t('home.tourism.eyebrow')}</p>
				<h2 class="worlds__title stack-lines" use:reveal={60}>
					<span>{i18n.t('home.tourism.titleA')}</span>
					<span class="accent">{i18n.t('home.tourism.titleB')}</span>
				</h2>
			</div>
			<div class="worlds-head__side" use:reveal={100}>
				<p class="lede">{i18n.t('home.tourism.text')}</p>
				<a class="btn btn--primary btn--big" href={i18n.path('/territories')}>{i18n.t('home.tourism.cta')} <span class="arrow">→</span></a>
			</div>
		</div>
		<ul class="worlds">
			{#each worlds as w, i (w.key)}
				<li class="world-cell {w.size ?? ''}" use:reveal={(i % 4) * 50}>
					<a class="world tone-{w.tone} card-hover" class:ink-scope={w.tone === 'ink' || w.tone === 'vermilion'} href={i18n.path(w.href)}>
						<span class="world__art" aria-hidden="true"><Icon name={w.icon} size={w.size === 'big' ? 260 : 150} stroke={0.7} /></span>
						<span class="world__icon"><Icon name={w.icon} size={20} /></span>
						<span class="world__body">
							<span class="world__place">{w.province ?? i18n.t('home.tourism.allProvinces')}</span>
							<span class="world__name">{i18n.t(`home.tourism.worlds.${w.key}.name`)}</span>
							<span class="world__text">{i18n.t(`home.tourism.worlds.${w.key}.text`)}</span>
						</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- BILLBOARD 04 -->
<StatementBand
	lines={[i18n.t('home.billboard04.line1'), i18n.t('home.billboard04.line2'), i18n.t('home.billboard04.line3')]}
	align="right"
/>

<!-- INDUSTRIES -->
<section class="section">
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">07</span>{i18n.t('home.industries.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('home.industries.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('home.industries.lede')}</p>
		</div>
		<ul class="industries">
			{#each INDUSTRIES as ind, i (ind.id)}
				<li use:reveal={(i % 4) * 40}>
					<a class="industry disc-host" href={i18n.path(`/industries/${ind.id}`)}>
						<span class="disc"><Icon name={ind.icon} size={20} /></span>
						<span class="industry__name">{i18n.t(`content.industries.${ind.id}.name`)}</span>
						<span class="industry__intro">{i18n.t(`content.industries.${ind.id}.intro`)}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- AUDIENCES -->
<section class="section section--surface">
	<div class="container">
		<div class="section-head section-head--center">
			<p class="kicker" use:reveal><span class="kicker__num">08</span>{i18n.t('home.audiences.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('home.audiences.title')}</h2>
		</div>
		<ul class="audiences">
			{#each audiences as a, i (a.key)}
				<li class="audience" use:reveal={i * 40}>
					<span class="disc disc--lg"><Icon name={a.icon} size={24} /></span>
					<h3>{i18n.t(`home.audiences.items.${a.key}.title`)}</h3>
					<p>{i18n.t(`home.audiences.items.${a.key}.text`)}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- JOURNEY -->
<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">09</span>{i18n.t('home.journey.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('home.journey.title')}</h2>
		</div>
		<ol class="route">
			{#each journey as step, i (step)}
				<li class="route__step" use:reveal={i * 60}>
					<span class="route__dot">{String(i + 1).padStart(2, '0')}</span>
					<h3>{i18n.t(`home.journey.steps.${step}.title`)}</h3>
					<p>{i18n.t(`home.journey.steps.${step}.text`)}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<ClosingBand
	eyebrow={i18n.t('home.closing.eyebrow')}
	title={[i18n.t('home.closing.line1'), i18n.t('home.closing.line2'), i18n.t('home.closing.line3')]}
	text={i18n.t('home.closing.text')}
	cta={i18n.t('home.closing.cta')}
	secondary={{ label: i18n.t('home.closing.secondary'), href: '/contact?reason=general' }}
/>

<style>
	/* Hero */
	.hero {
		position: relative;
		overflow: hidden;
		background: var(--ink);
		color: var(--cream);
		padding-top: clamp(48px, 7vw, 96px);
		isolation: isolate;
	}
	/* Background video, darkened so the copy stays readable */
	.hero__media {
		position: absolute;
		inset: 0;
		z-index: -2;
		background: url('/media/hero-poster.jpg') center / cover;
	}
	.hero__media video {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.hero__glow {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(0deg, rgba(36, 26, 23, 0.92) 0%, rgba(36, 26, 23, 0) 38%),
			linear-gradient(180deg, rgba(36, 26, 23, 0.7) 0%, rgba(36, 26, 23, 0) 22%),
			linear-gradient(90deg, rgba(36, 26, 23, 0.9) 0%, rgba(36, 26, 23, 0.72) 42%, rgba(91, 23, 49, 0.38) 78%, rgba(91, 23, 49, 0.5) 100%);
	}
	/* Disclosure: the hero footage is AI-generated */
	.hero__ai {
		position: absolute;
		right: var(--gutter);
		bottom: 18px;
		z-index: 1;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 5px 11px;
		border-radius: 999px;
		background: rgba(36, 26, 23, 0.55);
		border: 1px solid var(--line-on-ink);
		backdrop-filter: blur(6px);
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
	}
	.hero__glow::after {
		content: '';
		position: absolute;
		inset: 0;
		background-image: repeating-linear-gradient(
			115deg,
			rgba(245, 230, 211, 0.025) 0 1px,
			transparent 1px 44px
		);
	}
	.hero__grid {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(40px, 7vw, 112px);
		align-items: center;
	}
	.hero__copy {
		display: grid;
		gap: 22px;
		justify-items: start;
	}
	.hero__title {
		font-size: var(--fs-home-hero);
		line-height: 1.02;
	}
	.hero__title > span {
		display: block;
	}

	/* Hero entrance, played once on first paint (CSS only, so it never waits for hydration).
	   Timeline: footage settles → eyebrow → headline lines rise → lede, actions → map draws in → chips. */
	.hero__media {
		animation: hero-settle 2.4s var(--ease) both;
	}
	.hero__copy > .eyebrow {
		animation: hero-track 1s var(--ease) 0.15s both;
	}
	/* Each headline line rises out of its own mask */
	.line {
		overflow: hidden;
		padding-bottom: 0.08em;
		margin-bottom: -0.08em;
	}
	.line__in {
		display: block;
		transform-origin: 0 100%;
		animation: hero-rise 1.1s var(--ease) both;
		animation-delay: 0.3s;
	}
	.line:nth-child(2) .line__in {
		animation-delay: 0.45s;
	}
	/* A light sweep across the region name once it has landed */
	.hero__title .metal-text {
		animation: hero-shine 1.6s ease-in-out 1.2s both;
	}
	.hero__title .dot-accent {
		display: inline-block;
		animation: hero-pop 0.7s cubic-bezier(0.34, 1.8, 0.64, 1) 1.15s both;
	}
	.hero__copy > .lede {
		animation: hero-focus 1.1s var(--ease) 0.75s both;
	}
	.hero__copy > :is(.hero__actions, .support, :global(:last-child)) {
		animation: hero-up 0.9s var(--ease) 0.95s both;
	}
	.hero__copy > .support {
		animation-delay: 1.05s;
	}
	.hero__copy > :global(:last-child) {
		animation-delay: 1.15s;
	}
	.hero__stage {
		animation: hero-stage 1.6s var(--ease) 0.2s both;
	}
	/* "Veneto moves" wipes in from the left */
	.stage__claim {
		animation: hero-wipe 1s var(--ease) 2.2s both;
	}
	/* Chips pop in last; transitions keep their own float animation untouched */
	.hero__stage :global(.chip) {
		transition:
			opacity 0.5s ease-out,
			scale 0.7s cubic-bezier(0.34, 1.6, 0.64, 1);
		transition-delay: 2.5s;
	}
	.hero__stage :global(.chip:nth-child(4)) {
		transition-delay: 2.7s;
	}
	.hero__stage :global(.chip:nth-child(5)) {
		transition-delay: 2.9s;
	}
	@starting-style {
		.hero__stage :global(.chip) {
			opacity: 0;
			scale: 0.4;
		}
	}
	@keyframes hero-settle {
		from {
			opacity: 0;
			transform: scale(1.12);
		}
	}
	@keyframes hero-track {
		from {
			opacity: 0;
			letter-spacing: 0.5em;
		}
	}
	@keyframes hero-rise {
		from {
			transform: translateY(110%) rotate(3deg);
		}
	}
	@keyframes hero-shine {
		from {
			background-position: 100% 0;
		}
		to {
			background-position: 0 0;
		}
	}
	@keyframes hero-pop {
		from {
			transform: scale(0);
		}
	}
	@keyframes hero-focus {
		from {
			opacity: 0;
			filter: blur(10px);
			transform: translateY(12px);
		}
	}
	@keyframes hero-up {
		from {
			opacity: 0;
			transform: translateY(18px);
		}
	}
	@keyframes hero-stage {
		from {
			opacity: 0;
			transform: translateY(24px) scale(0.94);
		}
	}
	@keyframes hero-wipe {
		from {
			clip-path: inset(0 100% 0 0);
			transform: translateX(-16px);
		}
		to {
			clip-path: inset(0 0 0 0);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.hero__media,
		.hero__copy > :global(*),
		.line__in,
		.hero__title .metal-text,
		.hero__title .dot-accent,
		.hero__stage,
		.stage__claim {
			animation: none;
		}
		.hero__stage :global(.chip) {
			transition: none;
		}
	}
	.hero__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 6px;
	}
	.support {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.hero__stage {
		position: relative;
		max-width: 560px;
		width: 100%;
		justify-self: center;
	}
	.stage__map {
		filter: drop-shadow(0 30px 40px rgba(0, 0, 0, 0.45));
	}
	.stage__claim {
		display: block;
		text-align: right;
		margin-top: 4px;
		font-size: clamp(1.9rem, 3.4vw, 2.8rem);
		color: var(--vermilion);
		opacity: 0.95;
	}
	.stats {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 24px;
		margin: clamp(48px, 7vw, 88px) 0 0;
		padding-top: 32px;
		border-top: 1px solid var(--line-on-ink);
	}
	.stat {
		display: flex;
		flex-direction: column-reverse;
		gap: 6px;
	}
	.stat dd {
		margin: 0;
		color: var(--cream);
	}
	.stat dt {
		font-size: 0.86rem;
		font-weight: 600;
		color: var(--text-on-ink-muted);
	}
	.stats__note {
		margin-top: 16px;
		padding-bottom: 36px;
	}
	.hero__edge {
		position: relative;
	}
	@media (max-width: 980px) {
		.hero__grid {
			grid-template-columns: 1fr;
		}
		.hero__stage {
			max-width: 460px;
			margin-inline: auto;
		}
	}
	@media (max-width: 640px) {
		.stats {
			grid-template-columns: 1fr;
			gap: 18px;
		}
		.hero__stage :global(.chip) {
			font-size: 0.7rem;
		}
	}

	/* Territory introduction */
	.intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 28px clamp(32px, 6vw, 88px);
		align-items: start;
		margin-bottom: clamp(48px, 6vw, 80px);
	}
	.intro__head {
		grid-column: 1 / -1;
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.intro__title {
		font-size: clamp(1.9rem, 4.4vw, 3.6rem);
		text-transform: uppercase;
		letter-spacing: 0.01em;
		line-height: 1.02;
	}
	.intro__body {
		display: grid;
		gap: 16px;
		justify-items: start;
		color: var(--text-on-ink-muted);
	}
	.intro__lead {
		color: var(--cream);
	}
	.intro__body .btn {
		margin-top: 10px;
	}
	@media (max-width: 900px) {
		.intro {
			grid-template-columns: 1fr;
		}
	}

	/* Search */
	.searchbar {
		display: grid;
		grid-template-columns: minmax(0, 2fr) repeat(5, minmax(0, 1fr)) auto;
		gap: 0;
		align-items: stretch;
		padding: 8px;
		border-radius: 26px;
		background: #fffaf3;
		border: 1px solid var(--line);
		box-shadow: var(--shadow-light);
	}
	.field {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 2px;
		padding: 8px 14px;
		min-width: 0;
		border-right: 1px solid var(--line);
	}
	.field--q {
		flex-direction: row;
		align-items: center;
		gap: 10px;
		color: var(--vermilion-deep);
	}
	.field__label {
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.field input,
	.field select {
		width: 100%;
		min-width: 0;
		border: 0;
		background: transparent;
		font-size: 0.92rem;
		font-weight: 700;
		color: var(--ink);
		padding: 2px 0;
	}
	.field input:focus,
	.field select:focus {
		outline: none;
	}
	.field:focus-within {
		background: var(--surface);
		border-radius: 14px;
	}
	.submit {
		margin-left: 8px;
	}
	.quick {
		margin-top: 22px;
		justify-content: center;
	}
	@media (max-width: 1100px) {
		.searchbar {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			gap: 6px;
		}
		.field {
			border-right: 0;
			border-radius: 14px;
			background: var(--paper);
			min-height: 56px;
		}
		.field--q {
			grid-column: 1 / -1;
		}
		.submit {
			grid-column: 1 / -1;
			margin: 4px 0 0;
		}
	}
	@media (max-width: 720px) {
		.quick {
			justify-content: flex-start;
		}
	}

	/* Main categories */
	.categories {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 16px;
	}
	.categories li {
		display: grid;
	}
	.category {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 12px;
		min-height: 340px;
		padding: 24px;
		border-radius: var(--radius-card);
		background:
			radial-gradient(80% 60% at 100% 0%, rgba(var(--glow-rgb), 0.22), transparent 70%),
			var(--ink-2);
		color: var(--cream);
		text-decoration: none;
		overflow: hidden;
		isolation: isolate;
	}
	.category__art {
		position: absolute;
		right: -28px;
		top: -24px;
		z-index: -1;
		color: rgba(var(--glow-2-rgb), 0.1);
		transition:
			color 0.4s,
			transform 0.6s var(--ease);
	}
	.category:hover .category__art {
		color: rgba(var(--glow-2-rgb), 0.2);
		transform: rotate(-6deg) scale(1.05);
	}
	.category__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.category__num {
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		color: var(--apricot);
	}
	.category__title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.1rem, 1.4vw, 1.25rem);
		line-height: 1.14;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		hyphens: auto;
		overflow-wrap: break-word;
		margin-top: 18px;
	}
	.category__text {
		color: var(--text-on-ink-muted);
		font-size: 0.9rem;
		line-height: 1.5;
	}
	.category__cta {
		margin-top: auto;
		padding-top: 12px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}
	@media (max-width: 1080px) {
		.categories {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.category {
			min-height: 280px;
		}
	}
	@media (max-width: 560px) {
		.categories {
			grid-template-columns: 1fr;
		}
		.category {
			min-height: 0;
		}
	}

	/* Veneto moves */
	.moves {
		overflow: hidden;
	}
	.moves__head {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
		gap: 16px 56px;
		align-items: end;
		margin-bottom: clamp(40px, 6vw, 72px);
	}
	.moves__eyebrow {
		grid-column: 1 / -1;
		font-size: 0.75rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}
	.moves__title {
		font-size: clamp(4.6rem, 14vw, 11.5rem);
		line-height: 0.86;
	}
	.moves__lede {
		font-size: var(--fs-lede);
		font-weight: 600;
		line-height: 1.5;
		max-width: 46ch;
	}
	.moves__grid {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		border-top: 2px solid var(--cream);
	}
	.move {
		display: grid;
		gap: 8px;
		align-content: start;
		padding: 24px 22px 28px 0;
		border-bottom: 1px solid rgba(245, 230, 211, 0.25);
	}
	.move:not(:nth-child(4n + 1)) {
		padding-left: 22px;
		border-left: 1px solid rgba(245, 230, 211, 0.25);
	}
	.move__icon {
		display: grid;
		place-items: center;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: var(--ink);
		color: var(--apricot);
	}
	.move__title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.45rem;
		line-height: 1.1;
		margin-top: 6px;
	}
	.move__text {
		font-size: 0.92rem;
		font-weight: 600;
		opacity: 0.85;
	}
	@media (max-width: 900px) {
		.moves__head {
			grid-template-columns: 1fr;
		}
		.moves__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.move:not(:nth-child(4n + 1)) {
			padding-left: 0;
			border-left: 0;
		}
		.move:nth-child(2n) {
			padding-left: 18px;
			border-left: 1px solid rgba(245, 230, 211, 0.25);
		}
	}

	/* Business network preview */
	.network {
		display: grid;
		grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.65fr);
		gap: clamp(40px, 5vw, 80px);
		align-items: center;
		margin-bottom: clamp(56px, 7vw, 96px);
	}
	.network__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.network__title {
		font-size: clamp(1.6rem, 3vw, 2.4rem);
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.04;
	}
	.network__text {
		color: var(--text-muted);
		max-width: 58ch;
	}
	.network__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
	.network__stage {
		position: relative;
		display: grid;
		place-items: center;
		padding-block: 44px;
	}
	.network__glow {
		position: absolute;
		inset: 8% 10%;
		border-radius: 50%;
		background: radial-gradient(closest-side, rgba(var(--glow-rgb), 0.28), transparent);
		filter: blur(10px);
	}
	.network__stage :global(.phone) {
		position: relative;
		transform: rotate(-4deg);
	}
	.match {
		display: grid;
		gap: 10px;
		font-size: 0.7rem;
	}
	.match__app {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: 4px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 0.82rem;
		white-space: nowrap;
	}
	.match__app .badge {
		height: 20px;
		font-size: 0.55rem;
		padding: 0 7px;
	}
	.match__req {
		display: grid;
		gap: 4px;
		padding: 10px;
		border-radius: 12px;
		background: var(--ink-2);
		color: var(--cream);
	}
	.match__label {
		font-size: 0.55rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.match__need {
		font-weight: 800;
		font-size: 0.8rem;
	}
	.match__chips {
		display: flex;
		flex-wrap: wrap;
		gap: 4px;
	}
	.match__chips span {
		padding: 2px 7px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		font-size: 0.6rem;
		font-weight: 700;
	}
	.match__list {
		display: grid;
		gap: 6px;
	}
	.match__item {
		display: grid;
		grid-template-columns: auto auto 1fr;
		align-items: center;
		gap: 8px;
		padding: 8px;
		border-radius: 12px;
		background: #fffaf3;
		border: 1px solid var(--line);
	}
	.match__item.top {
		border-color: var(--vermilion);
	}
	.match__rank {
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		border-radius: 6px;
		background: var(--metal-champagne);
		font-size: 0.6rem;
		font-weight: 800;
	}
	.top .match__rank {
		background: var(--metal-copper);
	}
	.match__logo {
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		border-radius: 8px;
		background: var(--ink);
		color: var(--apricot);
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 0.7rem;
	}
	.match__who {
		display: grid;
		min-width: 0;
	}
	.match__name {
		font-weight: 800;
		font-size: 0.72rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.match__place {
		font-size: 0.6rem;
		color: var(--text-muted);
	}
	.match__why {
		font-size: 0.58rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vermilion-deep);
	}
	.match__reasons {
		display: grid;
		gap: 4px;
	}
	.match__reasons li {
		display: flex;
		align-items: center;
		gap: 6px;
		font-weight: 600;
	}
	.match__reasons :global(svg) {
		color: var(--vermilion-deep);
		flex: none;
	}
	.match__btn {
		display: grid;
		place-items: center;
		height: 32px;
		border-radius: 999px;
		background: var(--metal-copper);
		color: var(--on-accent);
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	@media (max-width: 900px) {
		.network {
			grid-template-columns: 1fr;
		}
	}

	/* Companies */
	.featured-head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		margin-bottom: 22px;
		padding-top: 22px;
		border-top: 1px solid var(--line);
	}
	.companies {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 20px;
	}
	.companies li {
		display: grid;
	}
	@media (max-width: 980px) {
		.companies {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 640px) {
		.companies {
			grid-template-columns: 1fr;
		}
	}

	.billboard-section {
		padding-block: clamp(48px, 6vw, 80px);
	}

	/* Motto */
	.motto {
		padding-block: clamp(64px, 10vw, 140px);
		background: var(--paper);
		text-align: center;
	}
	.motto__text {
		font-size: clamp(3rem, 9vw, 7.25rem);
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		gap: 0 0.3em;
	}

	/* Explore */
	.explore__grid {
		display: grid;
		grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
		gap: clamp(32px, 5vw, 64px);
		align-items: start;
	}
	.explore__map {
		position: sticky;
		top: calc(var(--header-h) + 24px);
	}
	.explore__map-inner {
		display: grid;
		gap: 12px;
	}
	.explore__cards {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}
	.explore__cards li {
		display: grid;
	}
	.region-tile {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 22px;
		border-radius: var(--radius-card);
		background: var(--metal-copper);
		background-size: 200% 100%;
		color: var(--on-accent);
		text-decoration: none;
		overflow: hidden;
		min-height: 100%;
		transition: background-position 0.8s var(--ease);
	}
	.region-tile:hover {
		background-position: 100% 0;
	}
	.region-tile__map {
		width: 120px;
		opacity: 0.9;
	}
	.region-tile__map :global(.prov) {
		fill: var(--ink-2) !important;
		stroke: var(--vermilion) !important;
	}
	.region-tile__name {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 2rem;
		letter-spacing: 0.02em;
	}
	.region-tile__text {
		font-weight: 600;
		font-size: 0.92rem;
	}
	.region-tile__go {
		margin-top: auto;
		font-weight: 800;
		font-size: 0.88rem;
	}
	@media (max-width: 980px) {
		.explore__grid {
			grid-template-columns: 1fr;
		}
		.explore__map {
			position: static;
			max-width: 440px;
			margin-inline: auto;
		}
	}
	@media (max-width: 560px) {
		.explore__cards {
			grid-template-columns: 1fr;
		}
	}

	/* Internationalisation preview */
	.international {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(40px, 6vw, 96px);
		align-items: center;
	}
	.international__card {
		position: relative;
		padding: clamp(20px, 3vw, 36px);
		border-radius: 26px;
		background-color: var(--ink-2);
		box-shadow: var(--shadow-light);
		overflow: hidden;
		isolation: isolate;
	}
	.international__card::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: radial-gradient(55% 60% at 50% 80%, rgba(var(--glow-rgb), 0.3), transparent 70%);
	}
	.international__card::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4px;
		background: var(--metal-copper);
	}
	.international__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.international__title {
		font-size: clamp(1.8rem, 3.4vw, 2.9rem);
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.04;
	}
	.international__text {
		color: var(--text-muted);
		max-width: 58ch;
	}
	.international__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
	@media (max-width: 900px) {
		.international {
			grid-template-columns: 1fr;
		}
		.international__copy {
			order: -1;
		}
	}

	/* Funding preview */
	.funding {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
		gap: clamp(40px, 5vw, 72px);
		align-items: center;
	}
	.funding__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.funding__title {
		font-size: clamp(1.5rem, 2.5vw, 2.05rem);
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.04;
	}
	.funding__text {
		color: var(--text-muted);
		max-width: 60ch;
	}
	.funding__actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
	.funding__stage {
		position: relative;
	}
	.funding__stage :global(.chip > span) {
		display: inline-flex;
		align-items: center;
		gap: 7px;
	}
	@media (max-width: 900px) {
		.funding {
			grid-template-columns: 1fr;
		}
	}

	/* Tourism & culture preview */
	.worlds-head {
		align-items: end;
		grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
	}
	.worlds-head__title {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.worlds-head__side {
		display: grid;
		gap: 22px;
		justify-items: start;
	}
	.worlds__title {
		font-size: clamp(1.5rem, 2.6vw, 2.2rem);
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.06;
	}
	.worlds {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		grid-auto-rows: minmax(210px, auto);
		gap: 14px;
	}
	.world-cell {
		display: grid;
	}
	.world-cell.big {
		grid-column: span 2;
		grid-row: span 2;
	}
	.world-cell.wide {
		grid-column: span 2;
	}
	.world {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 16px;
		padding: 22px;
		border-radius: var(--radius-card);
		text-decoration: none;
		overflow: hidden;
		isolation: isolate;
	}
	.world__art {
		position: absolute;
		right: -24px;
		bottom: -30px;
		z-index: -1;
		opacity: 0.16;
		transition:
			transform 0.6s var(--ease),
			opacity 0.4s;
	}
	.world:hover .world__art {
		opacity: 0.26;
		transform: translateY(-6px) rotate(-3deg);
	}
	.world__icon {
		display: grid;
		place-items: center;
		width: 42px;
		height: 42px;
		border-radius: 50%;
		background: var(--metal-champagne);
		color: var(--ink);
	}
	.world__body {
		display: grid;
		gap: 6px;
	}
	.world__place {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
	}
	.world__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.45rem;
		line-height: 1.08;
	}
	.big .world__name {
		font-size: clamp(2rem, 3.6vw, 3rem);
	}
	.world__text {
		font-size: 0.88rem;
		line-height: 1.45;
		max-width: 36ch;
	}
	.tone-vermilion {
		background: var(--burgundy);
		color: var(--cream);
	}
	.tone-vermilion .world__icon {
		background: var(--ink);
		color: var(--apricot);
	}
	.tone-ink {
		background:
			radial-gradient(70% 60% at 100% 0%, rgba(var(--glow-rgb), 0.22), transparent 70%),
			var(--ink-2);
		color: var(--cream);
	}
	.tone-ink .world__place {
		color: var(--apricot);
	}
	.tone-ink .world__text {
		color: var(--text-on-ink-muted);
	}
	.tone-cream {
		background: #fffaf3;
		border: 1px solid var(--line);
		color: var(--ink);
	}
	.tone-cream .world__place {
		color: var(--vermilion-deep);
	}
	.tone-cream .world__text {
		color: var(--text-muted);
	}
	.tone-apricot {
		background: var(--apricot);
		color: var(--ink);
	}
	@media (max-width: 1000px) {
		.worlds {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 560px) {
		.worlds {
			grid-template-columns: 1fr;
		}
		.world-cell.big,
		.world-cell.wide {
			grid-column: auto;
			grid-row: auto;
		}
	}

	/* Industries */
	.industries {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
	}
	.industries li {
		display: grid;
	}
	.industry {
		display: grid;
		gap: 8px;
		align-content: start;
		padding: 20px;
		border-radius: 18px;
		background: #fffaf3;
		border: 1px solid var(--line);
		text-decoration: none;
		transition:
			border-color 0.25s,
			transform 0.3s var(--ease);
	}
	.industry:hover {
		border-color: var(--vermilion);
		transform: translateY(-3px);
	}
	.industry__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.15;
		margin-top: 6px;
	}
	.industry__intro {
		font-size: 0.85rem;
		color: var(--text-muted);
	}
	@media (max-width: 980px) {
		.industries {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 480px) {
		.industries {
			grid-template-columns: 1fr;
		}
	}

	/* Audiences */
	.audiences {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 18px;
	}
	.audience {
		display: grid;
		gap: 10px;
		align-content: start;
		padding: 26px;
		border-radius: var(--radius-card);
		background: #fffaf3;
		border: 1px solid var(--line);
		position: relative;
		overflow: hidden;
	}
	.audience::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 4px;
		background: var(--metal-champagne);
	}
	.audience h3 {
		font-size: 1.45rem;
		margin-top: 6px;
	}
	.audience p {
		color: var(--text-muted);
		font-size: 0.94rem;
	}
	@media (max-width: 900px) {
		.audiences {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 560px) {
		.audiences {
			grid-template-columns: 1fr;
		}
	}

	/* Journey route: champagne → vermilion */
	.route {
		position: relative;
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 24px;
		counter-reset: step;
	}
	.route::before {
		content: '';
		position: absolute;
		left: 22px;
		right: 22px;
		top: 22px;
		height: 3px;
		border-radius: 3px;
		background: linear-gradient(90deg, #d9bc9c, var(--apricot), var(--vermilion));
	}
	.route__step {
		position: relative;
		display: grid;
		gap: 10px;
		align-content: start;
	}
	.route__dot {
		display: grid;
		place-items: center;
		width: 46px;
		height: 46px;
		border-radius: 50%;
		background: var(--ink);
		color: var(--cream);
		font-weight: 800;
		font-size: 0.85rem;
		box-shadow: 0 0 0 6px var(--paper);
	}
	.route__step:last-child .route__dot {
		background: var(--metal-copper);
		color: var(--on-accent);
	}
	.route__step h3 {
		font-size: 1.6rem;
		margin-top: 8px;
	}
	.route__step p {
		color: var(--text-muted);
		font-size: 0.94rem;
	}
	@media (max-width: 860px) {
		.route {
			grid-template-columns: 1fr;
			gap: 28px;
			padding-left: 64px;
		}
		.route::before {
			left: 22px;
			right: auto;
			top: 22px;
			bottom: 22px;
			width: 3px;
			height: auto;
			background: linear-gradient(180deg, #d9bc9c, var(--apricot), var(--vermilion));
		}
		.route__dot {
			position: absolute;
			left: -64px;
			top: 0;
		}
		.route__step h3 {
			margin-top: 6px;
		}
	}
</style>
