<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { COMPANIES } from '$lib/data/companies';
	import { SECTORS } from '$lib/data/sectors';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import CompanyCard from '$lib/components/CompanyCard.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TryHint from '$lib/components/TryHint.svelte';
	import { INDUSTRY_BY_ID } from '$lib/data/industries';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	const i18n = useI18n();
	// Hero: one sample company per sector tab, stepping through until the visitor picks one.
	const deck = createDemo(() => COMPANIES.length, { start: COMPANIES.findIndex((c) => c.slug === 'precisa-meccanica') });
</script>

<Seo title={i18n.t('industriesPage.seo.title')} description={i18n.t('industriesPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.industries.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('industriesPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('industriesPage.hero.line1')}</span>
			<span>{i18n.t('industriesPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('industriesPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('industriesPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/register')}>{i18n.t('industriesPage.cta.button')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href="#categories">{i18n.t('industriesPage.hero.secondary')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.sectors')} done={deck.touched} />
		<div class="stage" use:tilt {...deck.hold}>
			<div class="tabs">
				{#each COMPANIES as c, i (c.slug)}
					{@const ind = INDUSTRY_BY_ID[c.industry]}
					<button
						class="tab"
						class:on={i === deck.index}
						type="button"
						aria-pressed={i === deck.index}
						title={i18n.t(`content.industries.${ind.id}.name`)}
						onclick={() => (deck.index = i)}
					>
						<Icon name={ind.icon} size={16} />
						<span class="tab__name">{i18n.t(`content.industries.${ind.id}.name`)}</span>
					</button>
				{/each}
			</div>
			<div class="deck">
				{#each COMPANIES as c, i (c.slug)}
					<div class="deck__card" class:on={i === deck.index} inert={i !== deck.index}>
						<CompanyCard company={c} />
					</div>
				{/each}
				<FloatChip style="top: -18px; right: -4%;"><strong>{SECTORS.length}</strong> {i18n.t('industriesPage.hero.chip')}</FloatChip>
				<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; left: -6%;"><strong>7</strong> {i18n.t('home.chips.provinces')}</FloatChip>
			</div>
		</div>
	{/snippet}
</PageHero>

<!-- 01 INDUSTRY CATEGORIES -->
<section class="section" id="categories" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('industriesPage.categories.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('industriesPage.categories.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('industriesPage.categories.lede')}</p>
		</div>
		<CategoryGrid
			items={SECTORS}
			prefix="industriesPage.categories.items"
			join={{ text: i18n.t('industriesPage.categories.missing'), cta: i18n.t('industriesPage.cta.button'), href: '/register' }}
		/>
	</div>
</section>

<!-- BUSINESS BILLBOARD -->
<StatementBand
	lines={[i18n.t('industriesPage.billboard.line1'), i18n.t('industriesPage.billboard.line2'), i18n.t('industriesPage.billboard.line3')]}
/>

<ClosingBand
	title={i18n.t('industriesPage.cta.title')}
	text={i18n.t('industriesPage.cta.text')}
	cta={i18n.t('industriesPage.cta.button')}
	href="/register"
/>

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
	.stage {
		position: relative;
		max-width: 380px;
		margin-inline: auto;
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}
	/* Sector tabs: icon discs, the selected one opens to show its name */
	.tabs {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
		margin-bottom: 30px;
	}
	.tab {
		display: inline-flex;
		align-items: center;
		gap: 0;
		height: 32px;
		padding: 0 8px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		background: rgba(245, 230, 211, 0.06);
		color: var(--cream);
		font: inherit;
		font-size: 0.76rem;
		font-weight: 800;
		cursor: pointer;
		transition:
			background 0.25s,
			color 0.25s,
			border-color 0.25s,
			transform 0.2s;
	}
	.tab:hover {
		border-color: var(--apricot);
		transform: translateY(-2px);
	}
	.tab:focus-visible {
		outline: 2px solid var(--apricot);
		outline-offset: 2px;
	}
	.tab__name {
		max-width: 0;
		overflow: hidden;
		white-space: nowrap;
		transition:
			max-width 0.45s var(--ease),
			margin 0.45s var(--ease);
	}
	.tab.on {
		background: var(--apricot);
		border-color: var(--apricot);
		color: var(--ink);
	}
	.tab.on .tab__name {
		max-width: 200px;
		margin-left: 7px;
	}
	/* Every card sits in the same cell, so the stage keeps the tallest card's height */
	.deck {
		position: relative;
		display: grid;
	}
	.deck__card {
		grid-area: 1 / 1;
		opacity: 0;
		visibility: hidden;
		transform: translateY(14px) scale(0.97);
		transition:
			opacity 0.4s,
			transform 0.5s var(--ease),
			visibility 0s 0.4s;
	}
	.deck__card.on {
		opacity: 1;
		visibility: visible;
		transform: none;
		transition:
			opacity 0.4s,
			transform 0.5s var(--ease);
	}

	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
	}
</style>
