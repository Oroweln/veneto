<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import WorldRoutes from '$lib/components/WorldRoutes.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconName } from '$lib/components/icons';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	const i18n = useI18n();
	/** Map hubs, west → east; Belgrade is highlighted (Serbia and Balkans service). */
	const HUBS = ['saoPaulo', 'newYork', 'london', 'paris', 'munich', 'vienna', 'belgrade', 'dubai', 'shanghai'];
	// Hero map: the picked hub gets the solid route; it tours the hubs until the visitor picks one.
	const route = createDemo(() => HUBS.length, { start: HUBS.indexOf('belgrade') });
	const hub = $derived(HUBS[route.index]);
	/** Main services. `feature` marks the wide, dark card. */
	const SERVICES: { key: string; icon: IconName; feature?: boolean }[] = [
		{ key: 'markets', icon: 'link' },
		{ key: 'export', icon: 'ship' },
		{ key: 'exchange', icon: 'users' },
		{ key: 'partners', icon: 'globe' },
		{ key: 'crossBorder', icon: 'compass' },
		{ key: 'balkans', icon: 'map', feature: true },
		{ key: 'events', icon: 'calendar' }
	];
</script>

<Seo title={i18n.t('internationalPage.seo.title')} description={i18n.t('internationalPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.internationalisation.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('internationalPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('internationalPage.hero.line1')}</span>
			<span>{i18n.t('internationalPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('internationalPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('internationalPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/matchmaking')}>{i18n.t('internationalPage.cta.button')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href="#services">{i18n.t('internationalPage.hero.secondary')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.routes')} done={route.touched} />
		<div class="stage" use:tilt={4} {...route.hold}>
			<div class="routes-card grid-texture ink-scope">
				<WorldRoutes
					hubs={HUBS}
					featured={hub}
					featuredNote={hub === 'belgrade' ? i18n.t('internationalPage.hero.featured') : undefined}
					onpick={(key) => (route.index = HUBS.indexOf(key))}
				/>
				{#key hub}
					<p class="route-line" aria-live="polite">
						<strong>{i18n.t('common.try.route', { hub: i18n.t(`home.international.hubs.${hub}`) })}</strong>
						<span>{i18n.t('common.try.routeNote')}</span>
					</p>
				{/key}
			</div>
			<FloatChip style="top: -18px; left: 6%;"><strong>{HUBS.length}</strong> {i18n.t('internationalPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; right: 6%;">{i18n.t('internationalPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 MAIN SERVICES -->
<section class="section" id="services" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('internationalPage.services.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('internationalPage.services.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('internationalPage.services.lede')}</p>
		</div>
		<ul class="services">
			{#each SERVICES as s, i (s.key)}
				<li class="service" class:feature={s.feature} class:on-ink={s.feature} use:reveal={(i % 4) * 40}>
					<span class="service__icon disc"><Icon name={s.icon} size={20} /></span>
					<span class="service__num">{String(i + 1).padStart(2, '0')}</span>
					<h3 class="service__title">{i18n.t(`internationalPage.services.items.${s.key}.title`)}</h3>
					<p class="service__text">{i18n.t(`internationalPage.services.items.${s.key}.text`)}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- INTERNATIONALISATION BILLBOARD -->
<StatementBand lines={[i18n.t('internationalPage.billboard.line1'), i18n.t('internationalPage.billboard.line2')]} />

<ClosingBand title={i18n.t('internationalPage.cta.title')} cta={i18n.t('internationalPage.cta.button')} href="/matchmaking" />

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
		transform: perspective(1400px) rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
		transition: transform 0.6s var(--ease);
	}
	.route-line {
		display: grid;
		gap: 2px;
		margin-top: 6px;
		padding-top: 12px;
		border-top: 1px solid var(--line-on-ink);
		font-size: 0.8rem;
		color: var(--text-on-ink-muted);
		animation: route-in 0.5s var(--ease);
	}
	.route-line strong {
		font-family: var(--font-display);
		font-size: 1.1rem;
		color: var(--apricot);
	}
	@keyframes route-in {
		from {
			opacity: 0;
			transform: translateY(6px);
		}
	}
	.routes-card {
		position: relative;
		padding: clamp(18px, 2.6vw, 30px);
		border-radius: 26px;
		background-color: var(--ink);
		border: 1px solid var(--line-on-ink);
		box-shadow: var(--shadow-dark);
		overflow: hidden;
	}

	.services {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
	}
	.service {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'icon num' 'title title' 'text text';
		align-content: start;
		gap: 12px 14px;
		padding: 22px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.service__icon {
		grid-area: icon;
	}
	.service__num {
		grid-area: num;
		justify-self: end;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		color: var(--text-muted);
	}
	.service__title {
		grid-area: title;
		margin-top: 6px;
		font-size: 1.05rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		line-height: 1.2;
	}
	.service__text {
		grid-area: text;
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--text-muted);
	}
	.feature {
		grid-column: span 2;
		background: var(--ink-2);
		border-color: transparent;
		color: var(--cream);
		box-shadow: var(--shadow-light);
	}
	.feature .service__num,
	.feature .service__text {
		color: var(--text-on-ink-muted);
	}
	.feature .service__title {
		font-size: clamp(1.2rem, 2vw, 1.5rem);
	}
	@media (max-width: 1000px) {
		.services {
			grid-template-columns: repeat(2, minmax(0, 1fr));
			grid-auto-flow: dense;
		}
	}
	@media (max-width: 560px) {
		.services {
			grid-template-columns: 1fr;
		}
		.feature {
			grid-column: auto;
		}
	}
</style>
