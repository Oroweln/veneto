<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { INVEST_CATEGORIES } from '$lib/data/sectors';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ListingsPreview from '$lib/components/ListingsPreview.svelte';
	import { tilt } from '$lib/actions/tilt';
	import TryHint from '$lib/components/TryHint.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import type { IconName } from '$lib/components/icons';

	const i18n = useI18n();
	let listingsUsed = $state(false);
	/** Invented sample listings for the hero preview (labelled "Sample"). */
	const LISTINGS: { key: string; icon: IconName }[] = [
		{ key: 'site', icon: 'cube' },
		{ key: 'hotel', icon: 'suitcase' },
		{ key: 'winery', icon: 'wine' }
	];
</script>

<Seo title={i18n.t('investPage.seo.title')} description={i18n.t('investPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.invest.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('investPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('investPage.hero.line1')}</span>
			<span>{i18n.t('investPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('investPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('investPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/contact?reason=investment')}>{i18n.t('investPage.cta.button')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href="#categories">{i18n.t('investPage.hero.secondary')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.listings')} done={listingsUsed} />
		<div class="stage" use:tilt>
			<ListingsPreview
				interactive
				bind:touched={listingsUsed}
				url="veneto.app/invest"
				title={i18n.t('investPage.stage.title')}
				items={LISTINGS.map((l) => ({
					icon: l.icon,
					type: i18n.t(`investPage.stage.items.${l.key}.type`),
					name: i18n.t(`investPage.stage.items.${l.key}.name`),
					place: i18n.t(`investPage.stage.items.${l.key}.place`)
				}))}
			/>
			<FloatChip style="top: -18px; right: 6%;"><strong>{INVEST_CATEGORIES.length}</strong> {i18n.t('investPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; left: 6%;"><strong>7</strong> {i18n.t('home.chips.provinces')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 INVESTMENT CATEGORIES -->
<section class="section" id="categories" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('investPage.categories.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('investPage.categories.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('investPage.categories.lede')}</p>
		</div>
		<CategoryGrid
			items={INVEST_CATEGORIES}
			prefix="investPage.categories.items"
			join={{ text: i18n.t('investPage.cta.title'), cta: i18n.t('investPage.cta.button'), href: '/contact?reason=investment' }}
		/>
	</div>
</section>

<!-- INVESTMENT BILLBOARD -->
<StatementBand
	lines={[i18n.t('investPage.billboard.line1'), i18n.t('investPage.billboard.line2'), i18n.t('investPage.billboard.line3')]}
	align="right"
/>

<ClosingBand title={i18n.t('investPage.cta.title')} cta={i18n.t('investPage.cta.button')} href="/contact?reason=investment" />

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
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
	}
</style>
