<script lang="ts">
	import { formatNumber, useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { PROVINCES, REGION_FIGURES, type ProvinceCode } from '$lib/data/provinces';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import BrowserFrame from '$lib/components/BrowserFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CountUp from '$lib/components/CountUp.svelte';
	import VenetoMap from '$lib/components/VenetoMap.svelte';
	import TerritoryCard from '$lib/components/TerritoryCard.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import { AREAS } from '$lib/data/areas';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	const i18n = useI18n();
	const compact = { notation: 'compact', maximumFractionDigits: 2 } as const;
	let lit = $state<ProvinceCode | null>(null);

	const maxRegistered = Math.max(...PROVINCES.map((p) => p.registered));
	const byRegistered = [...PROVINCES].sort((a, b) => b.registered - a.registered);
	const provinceName = (id: string) => PROVINCES.find((p) => p.id === id)?.name ?? id;
	const density = (p: (typeof PROVINCES)[number]) => Math.round((p.registered / p.population) * 1000);

	// Hero chart: a province is always selected; it steps through them until the visitor picks one.
	const chart = createDemo(() => byRegistered.length);
	const picked = $derived(byRegistered[chart.index]);
</script>

<Seo title={i18n.t('territories.seo.title')} description={i18n.t('territories.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.territories.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('territories.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('territories.hero.titleA')}</span>
			<span class="metal-text">{i18n.t('territories.hero.titleB')}</span>
		</h1>
		<p class="lede">{i18n.t('territories.hero.text')}</p>
		<div class="pill-row pill-row--scroll">
			{#each PROVINCES as p (p.id)}
				<a class="pill" href={i18n.path(`/territories/${p.id}`)}>{p.name}</a>
			{/each}
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.provinces')} done={chart.touched} />
		<div class="stage" use:tilt {...chart.hold}>
			<BrowserFrame url="veneto.app/territories">
				<p class="w-title">{i18n.t('territories.chart.title')}</p>
				<ul class="bars">
					{#each byRegistered as p, i (p.code)}
						<li>
							<button class="bar" class:on={i === chart.index} type="button" aria-pressed={i === chart.index} onclick={() => (chart.index = i)}>
								<span class="bars__code">{p.code}</span>
								<span class="bars__track">
									<span class="bars__fill" style="width: {(p.registered / maxRegistered) * 100}%"></span>
								</span>
								<span class="bars__val">{formatNumber(i18n.lang, p.registered, compact)}*</span>
							</button>
						</li>
					{/each}
				</ul>
				{#key picked.code}
					<div class="pick" aria-live="polite">
						<p class="pick__name">{picked.name}</p>
						<p class="pick__figs">
							<span><strong>{formatNumber(i18n.lang, picked.registered)}</strong> {i18n.t('common.try.businesses')}</span>
							<span><strong>{density(picked)}</strong> {i18n.t('territories.table.density').toLowerCase()}</span>
						</p>
						<a class="pick__link" href={i18n.path(`/territories/${picked.id}`)}>
							{i18n.t('common.try.explore', { name: picked.name })} <span aria-hidden="true">→</span>
						</a>
					</div>
				{/key}
				<p class="w-note">{i18n.t('common.indicativeShort')}</p>
			</BrowserFrame>
			<FloatChip style="top: -18px; right: 8%;"><strong>7</strong> {i18n.t('home.chips.provinces')}</FloatChip>
			<FloatChip tone="apricot" delay={2} style="bottom: -16px; left: 6%;">{i18n.t('territories.hero.chip')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 PROVINCES -->
<section class="section section--ink" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">01</span>{i18n.t('territories.map.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territories.map.title')}</h2>
			<p class="lede" use:reveal={120}>{i18n.t('territories.map.lede')}</p>
		</div>
		<div class="explore">
			<div class="explore__map">
				<VenetoMap links labels highlight={lit} onhover={(c) => (lit = c)} title={i18n.t('home.explore.mapTitle')} />
				<p class="note">{i18n.t('home.explore.mapHint')}</p>
			</div>
			<ul class="cards">
				{#each PROVINCES as p, i (p.id)}
					<li use:reveal={i * 40}>
						<TerritoryCard province={p} active={lit === p.code} onhover={(on) => (lit = on ? p.code : null)} />
					</li>
				{/each}
			</ul>
		</div>
		<p class="note" style="margin-top: 20px">{i18n.t('common.demoCounts')}</p>
	</div>
</section>

<!-- 02 DESTINATION AREAS -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('territories.areas.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territories.areas.title')}</h2>
			<p class="lede" use:reveal={120}>{i18n.t('territories.areas.lede')}</p>
		</div>
		<ul class="areas">
			{#each AREAS as a, i (a.id)}
				<li use:reveal={(i % 4) * 40}>
					<a class="area card-hover" href={i18n.path(`/territories/${a.provinces[0]}`)}>
						<span class="area__icon disc"><Icon name={a.icon} size={20} /></span>
						<span class="area__num">{String(i + 1).padStart(2, '0')}</span>
						<span class="area__name">{i18n.t(`territories.areas.items.${a.id}`)}</span>
						<span class="area__prov">{a.provinces.map(provinceName).join(' · ')}</span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- TERRITORY BILLBOARD -->
<StatementBand
	lines={[i18n.t('territories.billboard.line1'), i18n.t('territories.billboard.line2'), i18n.t('territories.billboard.line3')]}
	align="right"
/>

<!-- 03 FIGURES -->
<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">03</span>{i18n.t('territories.figures.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territories.figures.title')}</h2>
		</div>
		<dl class="figures">
			<div use:reveal>
				<dd class="figure"><CountUp value={7} /></dd>
				<dt>{i18n.t('territories.figures.provinces')}</dt>
			</div>
			<div use:reveal={40}>
				<dd class="figure">{formatNumber(i18n.lang, REGION_FIGURES.population, compact)}*</dd>
				<dt>{i18n.t('territories.figures.population')}</dt>
			</div>
			<div use:reveal={80}>
				<dd class="figure"><CountUp value={REGION_FIGURES.registered} />*</dd>
				<dt>{i18n.t('home.stats.registered')}</dt>
			</div>
			<div use:reveal={120}>
				<dd class="figure">€<CountUp value={REGION_FIGURES.exportsBn} />{i18n.t('home.stats.bn')}*</dd>
				<dt>{i18n.t('home.stats.exports')}</dt>
			</div>
		</dl>
		<p class="note" style="margin-top: 20px">{i18n.t('common.indicative')}</p>
	</div>
</section>

<!-- 04 COMPARISON -->
<section class="section section--surface">
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">04</span>{i18n.t('territories.table.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('territories.table.title')}</h2>
		</div>
		<div class="window" use:reveal={100}>
			<div class="window__bar">
				<span class="window__dots"><i></i><i></i><i></i></span>
				{i18n.t('territories.table.window')}
				<span class="badge badge--demo" style="margin-left: auto">{i18n.t('common.indicativeShort')}</span>
			</div>
			<div class="table-wrap">
				<table>
					<caption class="sr-only">{i18n.t('territories.table.title')}</caption>
					<thead>
						<tr>
							<th scope="col">{i18n.t('territories.table.territory')}</th>
							<th scope="col">{i18n.t('territories.table.role')}</th>
							<th scope="col" class="num">{i18n.t('territories.table.registered')}</th>
							<th scope="col" class="num">{i18n.t('territories.table.population')}</th>
							<th scope="col" class="num">{i18n.t('territories.table.density')}</th>
							<th scope="col">{i18n.t('territories.table.sectors')}</th>
						</tr>
					</thead>
					<tbody>
						{#each PROVINCES as p (p.id)}
							<tr>
								<th scope="row">
									<a href={i18n.path(`/territories/${p.id}`)} class="t-name"><span class="disc disc--sm">{p.code}</span>{p.name}</a>
								</th>
								<td>{i18n.t(`content.provinces.${p.id}.role`)}</td>
								<td class="num">{formatNumber(i18n.lang, p.registered)}*</td>
								<td class="num">{formatNumber(i18n.lang, p.population)}*</td>
								<td class="num">{density(p)}</td>
								<td class="sectors">{p.sectors.slice(0, 3).map((s) => i18n.t(`content.industries.${s}.name`)).join(' · ')}</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
		<p class="note" style="margin-top: 16px">{i18n.t('common.indicative')}</p>
		<p class="independence"><Icon name="shield" size={16} /> {i18n.t('common.independence')}</p>
	</div>
</section>

<ClosingBand
	title={i18n.t('territories.closing.title')}
	text={i18n.t('territories.closing.text')}
	cta={i18n.t('territories.closing.cta')}
	secondary={{ label: i18n.t('home.featured.cta'), href: '/business' }}
/>

<style>
	:global(.phero__copy) .hero-title {
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.02;
		font-size: clamp(2.2rem, 4.6vw, 3.9rem);
	}
	.hero-title span {
		display: block;
	}
	.stage {
		position: relative;
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}
	.w-title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
		margin-bottom: 14px;
	}
	.w-note {
		margin-top: 12px;
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.bars {
		display: grid;
		gap: 9px;
	}
	.bar {
		display: grid;
		grid-template-columns: 30px 1fr 52px;
		align-items: center;
		gap: 10px;
		width: 100%;
		margin: -3px 0;
		padding: 3px 6px;
		border: 0;
		border-radius: 8px;
		background: none;
		color: inherit;
		font: inherit;
		font-size: 0.78rem;
		font-weight: 800;
		text-align: left;
		cursor: pointer;
		transition: background 0.2s;
	}
	.bar:hover {
		background: rgba(194, 66, 26, 0.08);
	}
	.bar:focus-visible {
		outline: 2px solid var(--vermilion);
	}
	.bar.on {
		background: rgba(194, 66, 26, 0.1);
		color: var(--vermilion-deep);
	}
	.bars__track {
		height: 12px;
		border-radius: 6px;
		background: var(--surface);
		overflow: hidden;
	}
	.bars__fill {
		display: block;
		height: 100%;
		border-radius: 6px;
		background: var(--metal-champagne);
		transform-origin: left;
		transition: filter 0.3s;
	}
	.bar:hover .bars__fill {
		filter: brightness(1.06);
	}
	.bar.on .bars__fill {
		background: var(--metal-copper);
		animation: bar-grow 0.6s var(--ease);
	}
	@keyframes bar-grow {
		from {
			transform: scaleX(0.4);
		}
	}
	/* Selected province */
	.pick {
		display: grid;
		gap: 4px;
		margin-top: 14px;
		padding: 12px 14px;
		border-radius: 12px;
		background: var(--surface);
		border-left: 3px solid var(--vermilion);
		animation: pick-in 0.45s var(--ease);
	}
	.pick__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.1rem;
	}
	.pick__figs {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 14px;
		font-size: 0.76rem;
		color: var(--text-muted);
	}
	.pick__figs strong {
		color: var(--text);
		font-variant-numeric: tabular-nums;
	}
	.pick__link {
		justify-self: start;
		margin-top: 2px;
		font-size: 0.78rem;
		font-weight: 800;
		color: var(--vermilion-deep);
		text-decoration: none;
	}
	.pick__link:hover {
		text-decoration: underline;
	}
	@keyframes pick-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}
	.bars__val {
		text-align: right;
		font-variant-numeric: tabular-nums;
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
	}
	@media (max-width: 860px) {
		.figures {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	.explore {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(32px, 5vw, 64px);
		align-items: start;
	}
	.explore__map {
		position: sticky;
		top: calc(var(--header-h) + 24px);
		display: grid;
		gap: 12px;
	}
	.cards {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}
	.cards li {
		display: grid;
	}
	@media (max-width: 980px) {
		.explore {
			grid-template-columns: 1fr;
		}
		.explore__map {
			position: static;
			max-width: 440px;
			margin-inline: auto;
		}
	}
	@media (max-width: 560px) {
		.cards {
			grid-template-columns: 1fr;
		}
	}

	.areas {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
	}
	.areas li {
		display: grid;
	}
	.area {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'icon num' 'name name' 'prov prov';
		align-content: start;
		gap: 12px;
		padding: 20px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
		text-decoration: none;
	}
	.area:hover {
		border-color: rgba(var(--glow-rgb), 0.55);
	}
	.area__icon {
		grid-area: icon;
	}
	.area__num {
		grid-area: num;
		justify-self: end;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		color: var(--text-muted);
	}
	.area__name {
		grid-area: name;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.22rem;
		line-height: 1.15;
	}
	.area__prov {
		grid-area: prov;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--vermilion-deep);
	}
	@media (max-width: 980px) {
		.areas {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 480px) {
		.areas {
			grid-template-columns: 1fr;
		}
	}

	.table-wrap {
		overflow-x: auto;
	}
	table {
		width: 100%;
		border-collapse: collapse;
		font-size: 0.9rem;
		min-width: 760px;
	}
	th,
	td {
		padding: 14px 18px;
		text-align: left;
		border-bottom: 1px solid var(--line);
		vertical-align: middle;
	}
	thead th {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
		background: var(--surface);
	}
	.num {
		text-align: right;
		font-variant-numeric: tabular-nums;
		font-weight: 700;
	}
	.t-name {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.1rem;
		text-decoration: none;
	}
	.t-name:hover {
		color: var(--vermilion-deep);
	}
	.t-name .disc {
		font-family: var(--font-sans);
		font-size: 0.66rem;
		font-weight: 800;
	}
	.sectors {
		color: var(--text-muted);
		font-size: 0.82rem;
	}
	.independence {
		display: flex;
		align-items: center;
		gap: 8px;
		margin-top: 28px;
		font-size: 0.85rem;
		font-weight: 600;
		color: var(--text-muted);
	}
</style>
