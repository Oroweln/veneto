<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { FUNDING_FILTERS, SAMPLE_CALLS, callStatus, matchesCall, type FundingField } from '$lib/data/funding';
	import { PROVINCE_BY_ID } from '$lib/data/provinces';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import FundingStage from '$lib/components/FundingStage.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();
	let fundingUsed = $state(false);
	const FIELDS = Object.keys(FUNDING_FILTERS) as FundingField[];

	let filters = $state<Partial<Record<FundingField, string>>>({});
	let query = $state('');

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const fmtDate = (days: number) =>
		new Intl.DateTimeFormat(i18n.lang, { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(today.getTime() + days * 86_400_000));

	const title = (key: string) => i18n.t(`bandihubPage.calls.${key}.title`);
	const results = $derived(
		SAMPLE_CALLS.filter((c) => matchesCall(c, filters) && title(c.key).toLowerCase().includes(query.trim().toLowerCase()))
	);
	const active = $derived(Object.values(filters).filter(Boolean).length + (query.trim() ? 1 : 0));

	// Label of an option: provinces use their proper names.
	const optionLabel = (field: FundingField, o: string) =>
		field === 'province' ? PROVINCE_BY_ID[o]?.name ?? o : i18n.t(`bandihubPage.filters.${field}.${o}`);

	const WEB = ['search', 'filters', 'previews', 'eligibility', 'deadlines', 'alerts'];
	const APP = ['profiles', 'requirements', 'costs', 'budgets', 'intensity', 'cofinancing', 'documents', 'saved', 'recommendations', 'experts'];
</script>

<Seo title={i18n.t('bandihubPage.seo.title')} description={i18n.t('bandihubPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.bandihub.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('bandihubPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('bandihubPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('bandihubPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('bandihubPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href="#search">{i18n.t('bandihubPage.searchCta')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/app')}>{i18n.t('bandihubPage.unlock')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="stage-col">
			<TryHint hint={i18n.t('common.try.calls')} done={fundingUsed} />
			<div class="stage" use:tilt>
				<FundingStage interactive bind:touched={fundingUsed} />
				<FloatChip tone="vermilion" style="top: -18px; right: 6%;"><Icon name="bell" size={14} />{i18n.t('home.funding.chip')}</FloatChip>
			</div>
		</div>
	{/snippet}
</PageHero>

<!-- 01 SEARCH -->
<section class="section" id="search" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('bandihubPage.search.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('bandihubPage.search.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('bandihubPage.search.lede')}</p>
		</div>

		<form class="finder" role="search" onsubmit={(e) => e.preventDefault()}>
			<label class="finder__query">
				<Icon name="search" size={18} />
				<span class="sr-only">{i18n.t('bandihubPage.search.placeholder')}</span>
				<input type="search" bind:value={query} placeholder={i18n.t('bandihubPage.search.placeholder')} />
			</label>
			<div class="finder__grid">
				{#each FIELDS as field (field)}
					<label class="field">
						<span class="field__label">{i18n.t(`bandihubPage.filters.${field}.label`)}</span>
						<select bind:value={filters[field]}>
							<option value="">{i18n.t('bandihubPage.search.any')}</option>
							{#each FUNDING_FILTERS[field] as o (o)}
								<option value={o}>{optionLabel(field, o)}</option>
							{/each}
						</select>
					</label>
				{/each}
			</div>
			<div class="finder__bar">
				<p class="finder__count" aria-live="polite">
					<strong>{i18n.t('bandihubPage.search.results', { count: results.length })}</strong>
					<span class="badge badge--demo">{i18n.t('common.sample')}</span>
				</p>
				{#if active}
					<button
						type="button"
						class="btn btn--outline btn--sm"
						onclick={() => {
							filters = {};
							query = '';
						}}>{i18n.t('bandihubPage.search.reset')}</button
					>
				{/if}
			</div>
		</form>

		{#if results.length}
			<ul class="calls">
				{#each results as c (c.key)}
					{@const status = callStatus(c)}
					<li class="call">
						<div class="call__top">
							<span class="scope scope--{c.region}">{i18n.t(`bandihubPage.filters.region.${c.region}`)}</span>
							<span class="status status--{status}">{i18n.t(`bandihubPage.filters.status.${status}`)}</span>
						</div>
						<h3 class="call__title">{title(c.key)}</h3>
						<p class="call__basic">
							<Icon name="check" size={15} />
							{i18n.t(`bandihubPage.calls.${c.key}.eligibility`)}
						</p>
						<dl class="call__facts">
							<div>
								<dt>{i18n.t('bandihubPage.filters.instrument.label')}</dt>
								<dd>{i18n.t(`bandihubPage.filters.instrument.${c.instrument}`)}</dd>
							</div>
							<div>
								<dt>{i18n.t(status === 'upcoming' ? 'bandihubPage.card.opens' : 'bandihubPage.card.deadline')}</dt>
								<dd>{fmtDate(status === 'upcoming' ? c.opens : c.deadline)}</dd>
							</div>
						</dl>
						<div class="call__locked">
							<div class="call__blur" aria-hidden="true">
								<span>{i18n.t('bandihubPage.card.budget')}: €•••••</span>
								<span>{i18n.t('bandihubPage.card.intensity')}: ••%</span>
								<span>{i18n.t('bandihubPage.card.costs')}: ••••••••</span>
							</div>
							<a class="lock" href={i18n.path('/app')}>
								<Icon name="lock" size={14} />
								{i18n.t('bandihubPage.unlock')}
							</a>
						</div>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="empty">{i18n.t('bandihubPage.search.empty')}</p>
		{/if}
		<p class="note" style="margin-top: 20px">{i18n.t('bandihubPage.search.note')}</p>
	</div>
</section>

<!-- 02 WEB vs APP -->
<section class="section section--surface" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('bandihubPage.access.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('bandihubPage.access.title')}</h2>
		</div>
		<div class="access">
			<div class="access__col" use:reveal>
				<span class="disc"><Icon name="globe" size={20} /></span>
				<h3>{i18n.t('bandihubPage.access.web.title')}</h3>
				<ul>
					{#each WEB as k (k)}
						<li><Icon name="check" size={16} />{i18n.t(`bandihubPage.access.web.${k}`)}</li>
					{/each}
				</ul>
				<a class="btn btn--primary" href="#search">{i18n.t('bandihubPage.searchCta')} <span class="arrow">→</span></a>
			</div>
			<div class="access__col access__col--app on-ink" use:reveal={80}>
				<span class="disc"><Icon name="lock" size={20} /></span>
				<h3>{i18n.t('bandihubPage.access.app.title')}</h3>
				<ul class="two">
					{#each APP as k (k)}
						<li><Icon name="star" size={15} />{i18n.t(`bandihubPage.access.app.${k}`)}</li>
					{/each}
				</ul>
				<a class="btn btn--primary" href={i18n.path('/app')}>{i18n.t('bandihubPage.unlock')} <span class="arrow">→</span></a>
			</div>
		</div>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.funding.findTheCall'))} size="lg" />

<ClosingBand title={i18n.t('bandihubPage.locked')} cta={i18n.t('bandihubPage.unlock')} href="/app" />

<style>
	:global(.phero__copy) .hero-title {
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.02;
		font-size: clamp(2rem, 3.6vw, 3.2rem);
	}
	.hero-title span {
		display: block;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
	.stage-col {
		max-width: 480px;
		margin-inline: auto;
	}
	.stage {
		position: relative;
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}
	.stage :global(.chip > span) {
		display: inline-flex;
		align-items: center;
		gap: 7px;
	}

	/* Finder */
	.finder {
		display: grid;
		gap: 16px;
		padding: clamp(18px, 2.4vw, 28px);
		border-radius: 26px;
		background: var(--surface);
		border: 1px solid var(--line);
		box-shadow: var(--shadow-light);
		margin-bottom: 24px;
	}
	.finder__query {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 0 18px;
		min-height: 56px;
		border-radius: 999px;
		background: var(--paper);
		border: 1px solid var(--line);
		color: var(--text-muted);
	}
	.finder__query:focus-within {
		border-color: var(--burgundy);
	}
	.finder__query input {
		flex: 1;
		min-width: 0;
		border: 0;
		outline: 0;
		background: none;
		font: inherit;
		font-size: 1rem;
		color: var(--text);
	}
	.finder__grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
		gap: 10px;
	}
	.field {
		display: grid;
		min-width: 0;
		gap: 4px;
		padding: 10px 14px;
		border-radius: var(--radius-input);
		background: var(--paper);
		border: 1px solid var(--line);
	}
	.field:focus-within {
		border-color: var(--burgundy);
	}
	.field__label {
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.field select {
		width: 100%;
		min-width: 0;
		text-overflow: ellipsis;
		border: 0;
		background: none;
		font: inherit;
		font-size: 0.9rem;
		font-weight: 700;
		color: var(--text);
		cursor: pointer;
		padding: 0;
	}
	.field select:focus-visible {
		outline: none;
	}
	.finder__bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 12px;
		min-height: 36px;
	}
	.finder__count {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	/* Results */
	.calls {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px;
	}
	.call {
		display: grid;
		gap: 12px;
		align-content: start;
		padding: 22px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.call__top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	.scope {
		padding: 4px 10px;
		border-radius: 8px;
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		background: var(--metal-champagne);
		color: var(--ink);
	}
	.scope--eu {
		background: var(--burgundy);
		color: var(--cream);
	}
	.status {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 0.74rem;
		font-weight: 800;
	}
	.status::before {
		content: '';
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: currentColor;
	}
	.status--open {
		color: #2f7a4d;
	}
	.status--upcoming {
		color: #9a6b1f;
	}
	.status--closed {
		color: var(--text-muted);
	}
	.call__title {
		font-size: 1.3rem;
		line-height: 1.2;
	}
	.call__basic {
		display: flex;
		gap: 8px;
		align-items: flex-start;
		font-size: 0.88rem;
		color: var(--text-muted);
	}
	.call__basic :global(svg) {
		flex: none;
		margin-top: 2px;
		color: var(--burgundy);
	}
	.call__facts {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 10px;
		margin: 0;
		padding-top: 12px;
		border-top: 1px solid var(--line);
	}
	.call__facts dt {
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.call__facts dd {
		margin: 2px 0 0;
		font-weight: 800;
	}
	.call__locked {
		position: relative;
		display: grid;
		place-items: center;
		padding: 14px;
		border-radius: 14px;
		background: var(--surface);
		border: 1px dashed var(--line);
		overflow: hidden;
	}
	.call__blur {
		display: grid;
		gap: 4px;
		width: 100%;
		font-size: 0.82rem;
		font-weight: 700;
		filter: blur(3px);
		user-select: none;
	}
	.lock {
		position: absolute;
		display: inline-flex;
		align-items: center;
		gap: 7px;
		padding: 8px 14px;
		border-radius: 999px;
		background: var(--burgundy);
		color: var(--cream);
		font-size: 0.78rem;
		font-weight: 800;
		text-decoration: none;
		box-shadow: var(--shadow-light);
	}
	.lock:hover {
		background: var(--ink);
	}
	.empty {
		padding: 40px;
		border-radius: var(--radius-card);
		border: 1px dashed var(--line);
		text-align: center;
		color: var(--text-muted);
	}

	/* Web vs app */
	.access {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.4fr);
		gap: 16px;
	}
	.access__col {
		display: grid;
		gap: 16px;
		align-content: start;
		justify-items: start;
		padding: clamp(24px, 3vw, 36px);
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.access__col--app {
		background: var(--ink-2);
		border-color: transparent;
		color: var(--cream);
	}
	.access__col h3 {
		font-size: clamp(1.3rem, 2.2vw, 1.7rem);
	}
	.access__col ul {
		display: grid;
		gap: 10px;
	}
	.access__col ul.two {
		grid-template-columns: 1fr 1fr;
		gap: 10px 20px;
	}
	.access__col li {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		font-weight: 600;
	}
	.access__col li :global(svg) {
		flex: none;
		margin-top: 3px;
		color: var(--vermilion);
	}
	@media (max-width: 900px) {
		.calls,
		.access {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.access__col ul.two {
			grid-template-columns: 1fr;
		}
	}
</style>
