<script lang="ts">
	import { formatNumber, useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { PROVINCES } from '$lib/data/provinces';
	import { INDUSTRY_BY_ID } from '$lib/data/industries';
	import { COMPANIES } from '$lib/data/companies';
	import { TOWNS } from '$lib/data/veneto-geo';
	import type { IconName } from '$lib/components/icons';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import MapCard from '$lib/components/MapCard.svelte';
	import ProvinceMap from '$lib/components/ProvinceMap.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import CompanyCard from '$lib/components/CompanyCard.svelte';
	import TerritoryCard from '$lib/components/TerritoryCard.svelte';
	import Billboard from '$lib/components/Billboard.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { data } = $props();
	const i18n = useI18n();

	const p = $derived(data.province);
	const capital = $derived(TOWNS[p.code].find((t) => t.capital)!.name);
	const others = $derived(PROVINCES.filter((o) => o.id !== p.id));
	const companies = $derived(COMPANIES.filter((c) => c.province === p.code));
	const maxShare = $derived(Math.max(...p.mix.map((m) => m.share)));

	const sections = ['figures', 'sectors', 'live', 'platform', 'others'];

	const modules: { key: string; href: string; icon: IconName }[] = [
		{ key: 'business', href: '/business', icon: 'building' },
		{ key: 'opportunities', href: '/opportunities', icon: 'target' },
		{ key: 'funding', href: '/funding', icon: 'euro' },
		{ key: 'events', href: '/events', icon: 'calendar' },
		{ key: 'matchmaking', href: '/matchmaking', icon: 'link' },
		{ key: 'invest', href: '/invest', icon: 'chart' }
	];
</script>

<Seo
	title={i18n.t('territory.seo.title', { name: p.name })}
	description={i18n.t('territory.seo.description', { name: p.name, role: i18n.t(`content.provinces.${p.id}.role`).toLowerCase() })}
/>

<PageHero crumbs={[{ label: i18n.t('sections.territories.name'), href: '/territories' }, { label: p.name }]}>
	{#snippet copy()}
		<p class="role"><span class="disc">{p.code}</span>{i18n.t(`content.provinces.${p.id}.role`)}</p>
		<h1 class="name metal-text">{p.name.toUpperCase()}</h1>
		<p class="lede">{i18n.t(`content.provinces.${p.id}.summary`)}</p>
		<div class="actions">
			<a class="btn btn--primary btn--big" href={i18n.path(`/business?territory=${p.id}`)}>{i18n.t('territory.find', { name: p.name })} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/register')}>{i18n.t('territory.register', { name: p.name })}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="stage" use:onscreen>
			<MapCard label={i18n.t('territory.mainTowns')} caption={i18n.t('territory.capital', { name: capital })}>
				<ProvinceMap code={p.code} towns title={i18n.t('territory.mapTitle', { name: p.name })} />
			</MapCard>
			<div aria-hidden="true">
				<FloatChip style="top: -16px; left: -12px;"><strong>{p.platform.companies}</strong> {i18n.t('territory.companies')}</FloatChip>
				<FloatChip tone="apricot" delay={1.8} style="top: 34%; left: -18px;"><strong>{p.platform.opportunities}</strong> {i18n.t('territory.openOpportunities')}</FloatChip>
				<FloatChip tone="ink" delay={3.2} style="bottom: 96px; right: -18px;"><strong>{p.platform.events}</strong> {i18n.t('territory.upcomingEvents')}</FloatChip>
			</div>
		</div>
	{/snippet}
</PageHero>

<nav class="secbar" aria-label={i18n.t('common.onThisPage')}>
	<div class="container">
		<ul class="pill-row pill-row--scroll">
			{#each sections as s, i (s)}
				<li>
					<a class="secbar__pill" href="#{s}">
						<span class="secbar__num">{String(i + 1).padStart(2, '0')}</span>
						{i18n.t(`territory.nav.${s}`)}
					</a>
				</li>
			{/each}
		</ul>
	</div>
</nav>

<!-- 01 FIGURES -->
<section class="section" id="figures">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">01</span>{i18n.t('territory.nav.figures')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territory.figures.title', { name: p.name })}</h2>
		</div>
		<dl class="figures">
			<div use:reveal>
				<dd class="figure"><CountUp value={p.registered} />*</dd>
				<dt>{i18n.t('home.stats.registered')}</dt>
			</div>
			<div use:reveal={40}>
				<dd class="figure"><CountUp value={p.population} />*</dd>
				<dt>{i18n.t('territories.figures.population')}</dt>
			</div>
			<div use:reveal={80}>
				<dd class="figure"><CountUp value={p.platform.companies} /></dd>
				<dt>{i18n.t('territory.figures.onPlatform')} <span class="badge badge--demo">{i18n.t('common.demo')}</span></dt>
			</div>
			<div use:reveal={120}>
				<dd class="figure"><CountUp value={p.platform.opportunities} /></dd>
				<dt>{i18n.t('territory.openOpportunities')} <span class="badge badge--demo">{i18n.t('common.demo')}</span></dt>
			</div>
		</dl>
		<p class="note" style="margin-top: 20px">{i18n.t('common.indicative')}</p>
	</div>
</section>

<!-- 02 KEY SECTORS -->
<section class="section section--surface" id="sectors">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('territory.nav.sectors')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territory.sectors.title', { name: p.name })}</h2>
		</div>
		<div class="sectors">
			<ul class="sector-tiles">
				{#each p.sectors as id, i (id)}
					{@const ind = INDUSTRY_BY_ID[id]}
					<li use:reveal={i * 40}>
						<a class="sector disc-host" href={i18n.path(`/business?territory=${p.id}&industry=${id}`)}>
							<span class="disc"><Icon name={ind.icon} size={20} /></span>
							<span>
								<span class="sector__name">{i18n.t(`content.industries.${id}.name`)}</span>
								<span class="sector__intro">{i18n.t(`content.industries.${id}.intro`)}</span>
							</span>
							<Icon name="arrow" size={18} />
						</a>
					</li>
				{/each}
			</ul>
			<div class="window" use:reveal={100}>
				<div class="window__bar">
					<span class="window__dots"><i></i><i></i><i></i></span>
					{i18n.t('territory.sectors.window')}
					<span class="badge badge--demo" style="margin-left: auto">{i18n.t('common.indicativeShort')}</span>
				</div>
				<div class="window__body">
					<ul class="mix">
						{#each p.mix as m (m.id)}
							<li>
								<span class="mix__label">{i18n.t(`content.industries.${m.id}.name`)}</span>
								<span class="mix__track"><span class="mix__fill" class:top={m.share === maxShare} style="width: {(m.share / maxShare) * 100}%"></span></span>
								<span class="mix__val">{m.share}%*</span>
							</li>
						{/each}
					</ul>
					<p class="note" style="margin-top: 14px">{i18n.t('territory.sectors.note')}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- 03 LIVE NOW -->
<section class="section" id="live">
	<div class="container">
		<div class="section-head section-head--split">
			<div>
				<p class="kicker" use:reveal><span class="kicker__num">03</span>{i18n.t('territory.nav.live')}</p>
				<h2 class="h2" style="margin-top: 14px" use:reveal={60}>{i18n.t('territory.live.title', { name: p.name })}</h2>
			</div>
			<div class="live-counts" use:reveal={100}>
				<a class="pill" href={i18n.path(`/business?territory=${p.id}`)}><strong>{p.platform.companies}</strong> {i18n.t('territory.companies')} · {i18n.t('common.seeAll')}</a>
				<a class="pill" href={i18n.path(`/opportunities?territory=${p.id}`)}><strong>{p.platform.opportunities}</strong> {i18n.t('territory.opportunities')} · {i18n.t('common.seeAll')}</a>
				<a class="pill" href={i18n.path(`/events?territory=${p.id}`)}><strong>{p.platform.events}</strong> {i18n.t('territory.events')} · {i18n.t('common.seeAll')}</a>
			</div>
		</div>
		<ul class="companies">
			{#each companies as c, i (c.slug)}
				<li use:reveal={i * 40}><CompanyCard company={c} /></li>
			{/each}
			<li use:reveal={80}>
				<a class="join-tile on-ink" href={i18n.path('/register')}>
					<span class="eyebrow">{i18n.t('territory.live.joinEyebrow')}</span>
					<span class="join-tile__title">{i18n.t('territory.live.joinTitle', { name: p.name })}</span>
					<span class="join-tile__text">{i18n.t('territory.live.joinText')}</span>
					<span class="btn btn--primary">{i18n.t('nav.join')} <span class="arrow">→</span></span>
				</a>
			</li>
		</ul>
		<p class="note" style="margin-top: 20px">{i18n.t('common.demoCounts')}</p>
	</div>
</section>

<section class="section section--surface billboard-section">
	<div class="container"><Billboard /></div>
</section>

<!-- 04 THE PLATFORM -->
<section class="section" id="platform">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">04</span>{i18n.t('territory.nav.platform')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territory.platform.title', { name: p.name })}</h2>
		</div>
		<ul class="modules">
			{#each modules as m, i (m.key)}
				<li use:reveal={i * 40}>
					<a class="module disc-host" href={i18n.path(`${m.href}?territory=${p.id}`)}>
						<span class="disc"><Icon name={m.icon} size={20} /></span>
						<span class="module__name">{i18n.t(`sections.${m.key}.name`)}</span>
						<span class="module__text">{i18n.t(`sections.${m.key}.short`)}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- 05 OTHER TERRITORIES -->
<section class="section section--ink" id="others" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">05</span>{i18n.t('territory.nav.others')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territory.others.title')}</h2>
		</div>
		<ul class="others">
			{#each others as o, i (o.id)}
				<li use:reveal={i * 40}><TerritoryCard province={o} /></li>
			{/each}
		</ul>
		<p class="independence"><Icon name="shield" size={16} /> {i18n.t('common.independence')}</p>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.territory.sevenProvinces'))} align="right" size="lg" />

<ClosingBand
	title={i18n.t('territory.closing.title', { name: p.name })}
	text={i18n.t('territory.closing.text')}
	cta={i18n.t('territories.closing.cta')}
	secondary={{ label: i18n.t('territory.find', { name: p.name }), href: `/business?territory=${p.id}` }}
/>

<style>
	.role {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.role .disc {
		font-size: 0.8rem;
		letter-spacing: 0.04em;
	}
	.name {
		font-size: clamp(3rem, 8vw, 6.4rem) !important;
		font-weight: 800;
		letter-spacing: 0.01em;
		line-height: 0.95;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.stage {
		position: relative;
	}
	.stage :global(.mapcard) {
		min-height: 440px;
	}

	.secbar {
		position: sticky;
		top: var(--header-h);
		z-index: 20;
		background: rgba(251, 245, 236, 0.94);
		backdrop-filter: blur(10px);
		-webkit-backdrop-filter: blur(10px);
		border-bottom: 1px solid var(--line);
		padding-block: 10px;
	}
	.secbar__pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 5px 14px 5px 5px;
		border-radius: 999px;
		border: 1px solid var(--line);
		background: #fffaf3;
		font-size: 0.82rem;
		font-weight: 700;
		text-decoration: none;
		white-space: nowrap;
	}
	.secbar__pill:hover {
		border-color: var(--vermilion);
	}
	.secbar__num {
		display: grid;
		place-items: center;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: var(--ink);
		color: var(--cream);
		font-size: 0.68rem;
		font-weight: 800;
	}
	section[id] {
		scroll-margin-top: calc(var(--header-h) + 70px);
	}

	.figures {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 24px;
		margin: 0;
	}
	.figures div {
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-top: 18px;
		border-top: 2px solid var(--ink);
	}
	.figures dd {
		margin: 0;
	}
	.figures dt {
		color: var(--text-muted);
		font-weight: 600;
		font-size: 0.92rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 8px;
	}
	@media (max-width: 860px) {
		.figures {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 480px) {
		.figures {
			grid-template-columns: 1fr;
		}
	}

	.sectors {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: 28px;
		align-items: start;
	}
	.sector-tiles {
		display: grid;
		gap: 12px;
	}
	.sector {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 16px;
		padding: 16px 18px;
		border-radius: 18px;
		background: #fffaf3;
		border: 1px solid var(--line);
		text-decoration: none;
		transition: border-color 0.25s;
	}
	.sector:hover {
		border-color: var(--vermilion);
	}
	.sector__name {
		display: block;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
	}
	.sector__intro {
		display: block;
		font-size: 0.84rem;
		color: var(--text-muted);
	}
	.mix {
		display: grid;
		gap: 14px;
	}
	.mix li {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 1fr) 48px;
		gap: 12px;
		align-items: center;
		font-size: 0.85rem;
		font-weight: 700;
	}
	.mix__track {
		height: 12px;
		border-radius: 6px;
		background: var(--surface);
		overflow: hidden;
	}
	.mix__fill {
		display: block;
		height: 100%;
		border-radius: 6px;
		background: var(--metal-champagne);
	}
	.mix__fill.top {
		background: var(--metal-copper);
	}
	.mix__val {
		text-align: right;
		font-variant-numeric: tabular-nums;
	}
	@media (max-width: 900px) {
		.sectors {
			grid-template-columns: 1fr;
		}
	}

	.live-counts {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		justify-content: flex-end;
	}
	.live-counts strong {
		font-weight: 800;
		color: var(--vermilion-deep);
	}
	.companies {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 20px;
	}
	.companies li {
		display: grid;
	}
	.join-tile {
		display: flex;
		flex-direction: column;
		gap: 14px;
		justify-content: flex-end;
		align-items: flex-start;
		min-height: 360px;
		padding: 28px;
		border-radius: var(--radius-card);
		background:
			radial-gradient(70% 60% at 100% 0%, rgba(var(--glow-rgb), 0.35), transparent 70%),
			var(--ink-2);
		color: var(--cream);
		text-decoration: none;
	}
	.join-tile__title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.8rem, 3vw, 2.4rem);
		line-height: 1.05;
	}
	.join-tile__text {
		color: var(--text-on-ink-muted);
	}
	@media (max-width: 980px) {
		.companies {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.live-counts {
			justify-content: flex-start;
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

	.modules {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}
	.modules li {
		display: grid;
	}
	.module {
		display: grid;
		gap: 8px;
		align-content: start;
		padding: 22px;
		border-radius: 18px;
		background: #fffaf3;
		border: 1px solid var(--line);
		text-decoration: none;
		transition:
			border-color 0.25s,
			transform 0.3s var(--ease);
	}
	.module:hover {
		border-color: var(--vermilion);
		transform: translateY(-3px);
	}
	.module__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		margin-top: 6px;
	}
	.module__text {
		font-size: 0.88rem;
		color: var(--text-muted);
	}
	@media (max-width: 860px) {
		.modules {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 520px) {
		.modules {
			grid-template-columns: 1fr;
		}
	}

	.others {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}
	.others li {
		display: grid;
	}
	@media (max-width: 900px) {
		.others {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 560px) {
		.others {
			grid-template-columns: 1fr;
		}
	}
	.independence {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 32px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-on-ink-muted);
	}
</style>
