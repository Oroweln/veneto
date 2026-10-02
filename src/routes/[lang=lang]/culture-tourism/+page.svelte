<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { TOURISM_CATEGORIES } from '$lib/data/sectors';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconName } from '$lib/components/icons';
	import { flip } from 'svelte/animate';
	import { cubicOut } from 'svelte/easing';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	const i18n = useI18n();
	/** Hero mosaic: four landscapes, named from the category list. */
	const POSTCARDS: { id: string; icon: IconName; tone: string }[] = [
		{ id: 'dolomites', icon: 'mountain', tone: 'burgundy' },
		{ id: 'venice', icon: 'ship', tone: 'cream' },
		{ id: 'prosecco', icon: 'wine', tone: 'gold' },
		{ id: 'coast', icon: 'sun', tone: 'ink' }
	];
	// The picked postcard moves into the large tile; it rotates through them until the visitor picks one.
	const mosaic = createDemo(() => POSTCARDS.length, { ms: 3200 });
	const ordered = $derived([POSTCARDS[mosaic.index], ...POSTCARDS.filter((_, i) => i !== mosaic.index)]);
</script>

<Seo title={i18n.t('tourismPage.seo.title')} description={i18n.t('tourismPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.cultureTourism.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('tourismPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('tourismPage.hero.line1')}</span>
			<span>{i18n.t('tourismPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('tourismPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('tourismPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/register')}>{i18n.t('tourismPage.cta.button')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href="#categories">{i18n.t('tourismPage.hero.secondary')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.postcards')} done={mosaic.touched} />
		<div class="stage" use:tilt {...mosaic.hold}>
			<ul class="postcards">
				{#each ordered as p, i (p.id)}
					<li
						class="postcard tone-{p.tone}"
						class:ink-scope={p.tone === 'burgundy' || p.tone === 'ink'}
						animate:flip={{ duration: 650, easing: cubicOut }}
					>
						<button
							class="postcard__hit"
							type="button"
							aria-pressed={i === 0}
							onclick={() => (mosaic.index = POSTCARDS.indexOf(p))}
						>
							<span class="sr-only">{i18n.t(`tourismPage.categories.items.${p.id}`)}</span>
						</button>
						<span class="postcard__art"><Icon name={p.icon} size={120} /></span>
						<span class="postcard__icon disc"><Icon name={p.icon} size={18} /></span>
						<span class="postcard__name">{i18n.t(`tourismPage.categories.items.${p.id}`)}</span>
					</li>
				{/each}
			</ul>
			<FloatChip style="top: -18px; right: 8%;"><strong>{TOURISM_CATEGORIES.length}</strong> {i18n.t('tourismPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -18px; right: 22%;">{i18n.t('tourismPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 CATEGORIES -->
<section class="section" id="categories" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('tourismPage.categories.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('tourismPage.categories.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('tourismPage.categories.lede')}</p>
		</div>
		<CategoryGrid
			items={TOURISM_CATEGORIES}
			prefix="tourismPage.categories.items"
			join={{ text: i18n.t('tourismPage.cta.title'), cta: i18n.t('tourismPage.cta.button'), href: '/register' }}
		/>
	</div>
</section>

<!-- TOURISM BILLBOARD -->
<StatementBand lines={[i18n.t('tourismPage.billboard.line1'), i18n.t('tourismPage.billboard.line2')]} align="right" />

<ClosingBand title={i18n.t('tourismPage.cta.title')} cta={i18n.t('tourismPage.cta.button')} href="/register" />

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
	.postcards {
		display: grid;
		grid-template-columns: 1.15fr 1fr;
		grid-template-rows: 170px 150px 110px;
		gap: 12px;
	}
	.postcard {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 18px;
		border-radius: 20px;
		overflow: hidden;
		box-shadow: var(--shadow-dark);
		isolation: isolate;
	}
	.postcard:first-child {
		grid-row: span 2;
	}
	.postcard__hit {
		position: absolute;
		inset: 0;
		z-index: 2;
		border: 0;
		border-radius: inherit;
		background: none;
		cursor: pointer;
	}
	.postcard__hit:focus-visible {
		outline: 3px solid var(--apricot);
		outline-offset: -3px;
	}
	.postcard {
		transition:
			box-shadow 0.3s,
			translate 0.3s var(--ease);
	}
	.postcard:not(:first-child):hover {
		translate: 0 -5px;
		box-shadow:
			0 0 0 2px var(--apricot),
			var(--shadow-dark);
	}
	.postcard__art {
		transition:
			transform 0.6s var(--ease),
			opacity 0.4s;
	}
	.postcard:hover .postcard__art {
		transform: rotate(-8deg) scale(1.08);
		opacity: 0.26;
	}
	.postcard:last-child {
		grid-column: span 2;
	}
	.postcard:first-child .postcard__art {
		top: 40px;
		bottom: auto;
	}
	.postcard__art {
		position: absolute;
		right: -14px;
		bottom: -18px;
		z-index: -1;
		opacity: 0.16;
	}
	.postcard__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.12;
	}
	.postcard:first-child .postcard__name {
		font-size: clamp(1.5rem, 2.4vw, 2rem);
	}
	.tone-burgundy {
		background: linear-gradient(160deg, #74264a, var(--burgundy));
		color: var(--cream);
	}
	.tone-cream {
		background: var(--cream);
		color: var(--text);
	}
	.tone-gold {
		background: var(--metal-gold);
		color: var(--text);
	}
	.tone-ink {
		background: var(--ink);
		color: var(--cream);
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
		.postcards {
			grid-template-rows: 150px 130px 100px;
		}
	}
</style>
