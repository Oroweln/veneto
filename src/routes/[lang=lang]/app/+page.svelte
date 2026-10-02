<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { APP_LINKS, appPublished, storeLink } from '$lib/data/app';
	import type { IconName } from '$lib/components/icons';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import AppBadges from '$lib/components/AppBadges.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	let { data } = $props();
	const i18n = useI18n();

	/** App features. Names: appPage.features.items.{id}. */
	const FEATURES: { id: string; icon: IconName }[] = [
		{ id: 'account', icon: 'users' },
		{ id: 'regions', icon: 'map' },
		{ id: 'funding', icon: 'euro' },
		{ id: 'alerts', icon: 'bell' },
		{ id: 'matchmaking', icon: 'link' },
		{ id: 'profiles', icon: 'star' },
		{ id: 'enquiries', icon: 'mail' },
		{ id: 'workspaces', icon: 'grid' },
		{ id: 'documents', icon: 'news' },
		{ id: 'tasks', icon: 'calendar' },
		{ id: 'messaging', icon: 'megaphone' },
		{ id: 'video', icon: 'phone' },
		{ id: 'ai', icon: 'chip' }
	];
	const REGIONS = ['Veneto', 'Lombardia', 'Lazio', 'Liguria'];
	// Hero phone: the active region space; it switches in turn until the visitor picks one.
	const space = createDemo(() => REGIONS.length, { ms: 3000 });

	// Device-aware links: filled in on the client once we know the device.
	let store = $state('');
	const published = appPublished();
	const openHref = $derived(APP_LINKS.deepLink || store || '#download');
	const downloadHref = $derived(store || '#download');

	function openApp(e: MouseEvent) {
		if (!APP_LINKS.deepLink) return;
		// Try the installed app; if nothing happens, fall back to the store.
		e.preventDefault();
		const fallback = setTimeout(() => {
			if (store) window.location.href = store;
		}, 1500);
		window.addEventListener('blur', () => clearTimeout(fallback), { once: true });
		window.location.href = APP_LINKS.deepLink;
	}

	onMount(() => {
		store = storeLink(navigator.userAgent);
		// Arriving from the desktop QR code on a phone: go straight to the app or the store.
		if (page.url.searchParams.get('open') === '1' && store) {
			if (APP_LINKS.deepLink) {
				setTimeout(() => (window.location.href = store), 1500);
				window.location.href = APP_LINKS.deepLink;
			} else window.location.href = store;
		}
	});
</script>

<Seo title={i18n.t('appPage.seo.title')} description={i18n.t('appPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.app.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('appPage.name')} · {i18n.t('appPage.descriptor')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('appPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('appPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('appPage.cta.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={openHref} onclick={openApp}>{i18n.t('appPage.cta.open')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={downloadHref}>{i18n.t('appPage.cta.download')}</a>
			<a class="btn btn--ghost" href={i18n.path('/membership')}>{i18n.t('appPage.cta.member')}</a>
		</div>
		{#if !published}<p class="status"><Icon name="phone" size={15} />{i18n.t('common.appSoon')}</p>{/if}
	{/snippet}
	{#snippet stage()}
		<div class="stage" use:tilt {...space.hold}>
			<TryHint hint={i18n.t('common.try.regions')} done={space.touched} />
			<PhoneFrame>
				<div class="app">
					<p class="app__brand">
						<span class="app__z">Z</span>
						<span>
							<strong>{i18n.t('appPage.name')}</strong>
							<small>{i18n.t('appPage.descriptor')}</small>
						</span>
					</p>
					<p class="app__label">{i18n.t('appPage.phone.spaces')}</p>
					<ul class="app__regions">
						{#each REGIONS as r, i (r)}
							<li>
								<button class:active={i === space.index} type="button" aria-pressed={i === space.index} onclick={() => (space.index = i)}>
									<Icon name="pin" size={12} />{r}
								</button>
							</li>
						{/each}
					</ul>
					{#key space.index}
						<div class="app__cards">
					<div class="app__card">
						<span class="app__icon"><Icon name="euro" size={14} /></span>
						<span><strong>{i18n.t('appPage.phone.funding')}</strong><small>{i18n.t('appPage.phone.fundingText')}</small></span>
					</div>
					<div class="app__card">
						<span class="app__icon"><Icon name="link" size={14} /></span>
						<span><strong>{i18n.t('appPage.phone.matches')}</strong><small>{i18n.t('appPage.phone.matchesText')}</small></span>
					</div>
						</div>
					{/key}
					<span class="badge badge--demo app__badge">{i18n.t('common.preview')}</span>
				</div>
			</PhoneFrame>
			<FloatChip style="top: 10%; right: 0;"><strong>1</strong> {i18n.t('appPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: 12%; left: 0;">{i18n.t('appPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 FEATURES -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('appPage.features.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('appPage.features.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('appPage.features.lede')}</p>
		</div>
		<CategoryGrid
			items={FEATURES}
			prefix="appPage.features.items"
			join={{ text: i18n.t('appPage.cta.text'), cta: i18n.t('appPage.cta.member'), href: '/membership' }}
		/>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.innovation.buildNext'))} align="right" size="lg" />

<!-- 02 DOWNLOAD -->
<section class="section section--surface" id="download" use:onscreen>
	<div class="container download">
		<div class="download__copy">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('appPage.download.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('appPage.download.title')}</h2>
			<p class="lede" use:reveal={100}>{i18n.t(published ? 'appPage.download.text' : 'appPage.download.soon')}</p>
			<div class="download__stores" use:reveal={140}>
				{#if published}
					{#if APP_LINKS.ios}<a class="btn btn--primary" href={APP_LINKS.ios}>App Store <span class="arrow">→</span></a>{/if}
					{#if APP_LINKS.android}<a class="btn btn--primary" href={APP_LINKS.android}>Google Play <span class="arrow">→</span></a>{/if}
				{:else}
					<div class="on-ink badges-wrap"><AppBadges /></div>
				{/if}
			</div>
		</div>
		<!-- Desktop: scan to continue on the phone -->
		<figure class="qr" use:reveal={80}>
			<div class="qr__code">{@html data.qr}</div>
			<figcaption>
				<strong>{i18n.t('appPage.download.scan')}</strong>
				<span>{i18n.t('appPage.download.scanText')}</span>
			</figcaption>
		</figure>
	</div>
</section>

<ClosingBand
	title={i18n.t('appPage.closing.title')}
	text={i18n.t('appPage.cta.text')}
	cta={i18n.t('appPage.cta.member')}
	href="/membership"
	secondary={{ label: i18n.t('appPage.cta.download'), href: '/app#download' }}
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
	.status {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		justify-self: start;
		padding: 7px 14px;
		border-radius: 999px;
		border: 1px dashed rgba(var(--glow-2-rgb), 0.6);
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.stage {
		position: relative;
		display: grid;
		justify-items: center;
		padding-block: 10px;
		/* Upright at rest; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
		transition: transform 0.6s var(--ease);
	}

	/* Phone preview */
	.app {
		display: grid;
		gap: 10px;
		min-height: 420px;
		padding: 40px 12px 16px;
		align-content: start;
		color: var(--text);
	}
	.app__brand {
		display: flex;
		align-items: center;
		gap: 9px;
	}
	.app__brand strong,
	.app__card strong {
		display: block;
		font-size: 0.74rem;
		font-weight: 800;
	}
	.app__brand small,
	.app__card small {
		display: block;
		font-size: 0.56rem;
		color: var(--text-muted);
	}
	.app__z {
		display: grid;
		place-items: center;
		width: 34px;
		height: 34px;
		border-radius: 10px;
		background: var(--burgundy);
		color: var(--gold);
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.2rem;
	}
	.app__label {
		margin-top: 6px;
		font-size: 0.56rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.app__regions {
		display: flex;
		flex-wrap: wrap;
		gap: 5px;
	}
	.app__regions button {
		cursor: pointer;
		background: none;
		color: inherit;
		font: inherit;
		transition:
			background 0.25s,
			border-color 0.25s,
			color 0.25s,
			transform 0.2s;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 4px 8px;
		border-radius: 999px;
		border: 1px solid var(--line);
		font-size: 0.6rem;
		font-weight: 700;
	}
	.app__regions button:hover {
		border-color: var(--burgundy);
		transform: translateY(-1px);
	}
	.app__regions button:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.app__regions button.active {
		background: var(--burgundy);
		border-color: var(--burgundy);
		color: var(--cream);
	}
	/* Cards re-enter when the region changes */
	.app__cards {
		display: grid;
		gap: 10px;
	}
	.app__card {
		animation: card-in 0.5s var(--ease) both;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 8px;
		align-items: center;
		padding: 10px;
		border-radius: 12px;
		background: var(--surface);
		border: 1px solid var(--line);
	}
	.app__icon {
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		border-radius: 8px;
		background: var(--burgundy);
		color: var(--gold);
	}
	.app__card + .app__card {
		animation-delay: 0.08s;
	}
	@keyframes card-in {
		from {
			opacity: 0;
			transform: translateX(16px);
		}
	}
	.app__badge {
		justify-self: center;
		margin-top: 6px;
	}

	/* Download */
	.download {
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(0, 0.7fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: center;
	}
	.download__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.download__stores {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.badges-wrap {
		padding: 14px;
		border-radius: 18px;
		background: var(--ink-2);
	}
	.qr {
		display: grid;
		gap: 16px;
		justify-items: center;
		margin: 0;
		padding: 26px;
		border-radius: 26px;
		background: var(--paper);
		border: 1px solid var(--line);
		box-shadow: var(--shadow-light);
		text-align: center;
	}
	.qr__code {
		width: 180px;
		height: 180px;
	}
	.qr__code :global(svg) {
		width: 100%;
		height: 100%;
	}
	.qr figcaption {
		display: grid;
		gap: 4px;
		font-size: 0.86rem;
		color: var(--text-muted);
	}
	.qr figcaption strong {
		font-family: var(--font-display);
		font-size: 1.2rem;
		color: var(--text);
	}
	/* Touch devices get the store buttons; the QR code is for desktop screens */
	@media (pointer: coarse) {
		.qr {
			display: none;
		}
	}
	@media (max-width: 900px) {
		.download {
			grid-template-columns: 1fr;
		}
	}
</style>
