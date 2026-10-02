<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { COMPANIES } from '$lib/data/companies';
	import { INDUSTRY_BY_ID } from '$lib/data/industries';
	import { PROVINCE_BY_CODE } from '$lib/data/provinces';
	import type { IconName } from '$lib/components/icons';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ListingsPreview from '$lib/components/ListingsPreview.svelte';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();
	let matchesUsed = $state(false);

	/** What a match can be based on. Names: matchPage.criteria.items.{id}. */
	const CRITERIA: { id: string; icon: IconName }[] = [
		{ id: 'territory', icon: 'map' },
		{ id: 'industry', icon: 'gear' },
		{ id: 'expertise', icon: 'bulb' },
		{ id: 'project', icon: 'grid' },
		{ id: 'funding', icon: 'euro' },
		{ id: 'markets', icon: 'globe' },
		{ id: 'budget', icon: 'chart' },
		{ id: 'technology', icon: 'chip' },
		{ id: 'objectives', icon: 'target' },
		{ id: 'languages', icon: 'mail' },
		{ id: 'international', icon: 'compass' }
	];
	const FUNCTIONS = ['matches', 'profiles', 'consultants', 'suppliers', 'technology', 'connections', 'projectInterest', 'introductions', 'groups', 'workflows'];

	/** Sample matches for the hero preview: invented companies, invented scores. */
	const MATCHES = [
		{ slug: 'lagunare-logistics', score: 94, reason: 'distribution' },
		{ slug: 'precisa-meccanica', score: 89, reason: 'supplier' },
		{ slug: 'biopatavina-labs', score: 86, reason: 'research' }
	].map((m) => ({ ...m, company: COMPANIES.find((c) => c.slug === m.slug)! }));
</script>

<Seo title={i18n.t('matchPage.seo.title')} description={i18n.t('matchPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.matchmaking.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('sections.matchmaking.name')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('matchPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('matchPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('matchPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/app')}>{i18n.t('matchPage.cta')} <span class="arrow">→</span></a>
			<span class="app-label"><Icon name="phone" size={15} />{i18n.t('matchPage.label')}</span>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.matches')} done={matchesUsed} />
		<div class="stage" use:tilt>
			<ListingsPreview
				interactive
				bind:touched={matchesUsed}
				url="veneto.app/matchmaking"
				title={i18n.t('matchPage.stage.title')}
				items={MATCHES.map((m) => ({
					icon: INDUSTRY_BY_ID[m.company.industry]?.icon ?? 'star',
					type: i18n.t('matchPage.stage.score', { score: m.score, reason: i18n.t(`matchPage.stage.reasons.${m.reason}`) }),
					name: m.company.name,
					place: `${m.company.town} · ${PROVINCE_BY_CODE[m.company.province].name}`
				}))}
			/>
			<FloatChip style="top: -18px; right: 8%;"><Icon name="link" size={14} />{i18n.t('matchPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; left: 6%;">{i18n.t('matchPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 CRITERIA -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('matchPage.criteria.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('matchPage.criteria.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('matchPage.criteria.lede')}</p>
		</div>
		<CategoryGrid
			items={CRITERIA}
			prefix="matchPage.criteria.items"
			join={{ text: i18n.t('matchPage.label'), cta: i18n.t('matchPage.cta'), href: '/app' }}
		/>
	</div>
</section>

<!-- 02 PREMIUM APP FUNCTIONS -->
<section class="section section--surface" use:onscreen>
	<div class="container functions">
		<div class="functions__copy">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('matchPage.functions.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('matchPage.functions.title')}</h2>
			<p class="lede" use:reveal={100}>{i18n.t('matchPage.functions.lede')}</p>
			<span class="app-label app-label--light" use:reveal={140}><Icon name="phone" size={15} />{i18n.t('matchPage.label')}</span>
			<a class="btn btn--primary btn--big" href={i18n.path('/app')} use:reveal={180}>{i18n.t('matchPage.cta')} <span class="arrow">→</span></a>
		</div>
		<ul class="functions__list on-ink" use:reveal={80}>
			{#each FUNCTIONS as f, i (f)}
				<li>
					<span class="functions__num">{String(i + 1).padStart(2, '0')}</span>
					<span>{i18n.t(`matchPage.functions.items.${f}`)}</span>
					{#if f === 'workflows'}<span class="soon">{i18n.t('common.soon')}</span>{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- MATCHMAKING BILLBOARD -->
<StatementBand
	lines={[i18n.t('matchPage.billboard.line1'), i18n.t('matchPage.billboard.line2'), i18n.t('matchPage.billboard.line3')]}
	align="right"
/>

<ClosingBand title={i18n.t('sections.matchmaking.short')} cta={i18n.t('matchPage.cta')} href="/app" />

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
		align-items: center;
		gap: 12px 18px;
		margin-top: 8px;
	}
	.app-label {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 7px 14px;
		border-radius: 999px;
		border: 1px dashed rgba(var(--glow-2-rgb), 0.6);
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.app-label--light {
		justify-self: start;
		border-color: var(--burgundy);
		color: var(--burgundy);
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

	.functions {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: center;
	}
	.functions__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.functions__list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 28px;
		padding: clamp(22px, 3vw, 34px);
		border-radius: 26px;
		background: var(--ink-2);
		color: var(--cream);
		box-shadow: var(--shadow-light);
	}
	.functions__list li {
		display: flex;
		align-items: baseline;
		gap: 12px;
		padding: 13px 0;
		border-bottom: 1px solid var(--line-on-ink);
		font-weight: 700;
	}
	.functions__num {
		flex: none;
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--gold);
	}
	.soon {
		margin-left: auto;
		padding: 2px 8px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		font-size: 0.58rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
	}
	@media (max-width: 900px) {
		.functions {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
		.functions__list {
			grid-template-columns: 1fr;
		}
	}
</style>
