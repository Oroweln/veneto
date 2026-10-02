<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import type { IconName } from '$lib/components/icons';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();

	/** Alert types. Names: alertsPage.types.items.{id}. */
	const TYPES: { id: string; icon: IconName }[] = [
		{ id: 'newCalls', icon: 'bell' },
		{ id: 'openingSoon', icon: 'calendar' },
		{ id: 'deadlines', icon: 'target' },
		{ id: 'vouchers', icon: 'chip' },
		{ id: 'regional', icon: 'map' },
		{ id: 'national', icon: 'building' },
		{ id: 'european', icon: 'star' },
		{ id: 'international', icon: 'globe' },
		{ id: 'partners', icon: 'link' },
		{ id: 'experts', icon: 'users' }
	];
	/** Delivery channels. Text: alertsPage.channels.items.{id}. */
	const CHANNELS: { id: string; icon: IconName; optional?: boolean }[] = [
		{ id: 'push', icon: 'phone' },
		{ id: 'inApp', icon: 'bell' },
		{ id: 'email', icon: 'mail' },
		{ id: 'summaries', icon: 'news' },
		{ id: 'newsletter', icon: 'megaphone', optional: true }
	];
	/** Sample notifications on the phone (invented, labelled "Sample"). */
	const NOTIFICATIONS: { key: string; icon: IconName }[] = [
		{ key: 'match', icon: 'bell' },
		{ key: 'deadline', icon: 'target' },
		{ key: 'opening', icon: 'calendar' }
	];
	// One notification is open at a time; they open in turn until the visitor taps one.
	const inbox = createDemo(() => NOTIFICATIONS.length);
</script>

<Seo title={i18n.t('alertsPage.seo.title')} description={i18n.t('alertsPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.fundingAlerts.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('alertsPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('alertsPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('alertsPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('alertsPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/register')}>{i18n.t('alertsPage.cta')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/bandihub')}>{i18n.t('sections.bandihub.name')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="stage" use:tilt {...inbox.hold}>
			<TryHint hint={i18n.t('common.try.alerts')} done={inbox.touched} />
			<PhoneFrame>
				<div class="lock">
					<p class="lock__time">09:41</p>
					<p class="lock__date">{i18n.t('alertsPage.phone.date')}</p>
					<ul class="notes">
						{#each NOTIFICATIONS as n, i (n.key)}
							<li class="note-card" class:open={i === inbox.index}>
								<button class="note-card__hit" type="button" aria-expanded={i === inbox.index} onclick={() => (inbox.index = i)}>
									<span class="sr-only">{i18n.t(`alertsPage.phone.items.${n.key}.title`)}</span>
								</button>
								<span class="note-card__icon"><Icon name={n.icon} size={13} /></span>
								<span class="note-card__body">
									<span class="note-card__app">{i18n.t('brand.name')} · {i18n.t(`alertsPage.phone.items.${n.key}.when`)}</span>
									<span class="note-card__title">{i18n.t(`alertsPage.phone.items.${n.key}.title`)}</span>
									<span class="note-card__text"><span>{i18n.t(`alertsPage.phone.items.${n.key}.text`)}</span></span>
								</span>
							</li>
						{/each}
					</ul>
					<span class="badge badge--demo lock__badge">{i18n.t('common.sample')}</span>
				</div>
			</PhoneFrame>
			<FloatChip style="top: 10%; right: 0;"><strong>{TYPES.length}</strong> {i18n.t('alertsPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: 12%; left: 0;"><strong>{CHANNELS.length}</strong> {i18n.t('alertsPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 ALERT TYPES -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('alertsPage.types.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('alertsPage.types.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('alertsPage.types.lede')}</p>
		</div>
		<CategoryGrid
			items={TYPES}
			prefix="alertsPage.types.items"
			join={{ text: i18n.t('alertsPage.types.join'), cta: i18n.t('alertsPage.cta'), href: '/register' }}
		/>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.funding.deadline'))} align="right" size="lg" />

<!-- 02 DELIVERY CHANNELS -->
<section class="section section--surface" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">02</span>{i18n.t('alertsPage.channels.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('alertsPage.channels.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('alertsPage.channels.lede')}</p>
		</div>
		<ul class="channels">
			{#each CHANNELS as c, i (c.id)}
				<li class="channel" use:reveal={i * 50}>
					<span class="disc"><Icon name={c.icon} size={22} /></span>
					<span class="channel__name">{i18n.t(`alertsPage.channels.items.${c.id}`)}</span>
					{#if c.optional}<span class="channel__tag">{i18n.t('alertsPage.channels.optional')}</span>{/if}
				</li>
			{/each}
		</ul>
	</div>
</section>

<ClosingBand title={i18n.t('sections.fundingAlerts.short')} cta={i18n.t('alertsPage.cta')} href="/register" />

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
		display: grid;
		justify-items: center;
		padding-block: 10px;
		/* Upright at rest; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
		transition: transform 0.6s var(--ease);
	}

	/* Phone lock screen */
	.lock {
		position: relative;
		display: grid;
		gap: 4px;
		min-height: 420px;
		padding: 40px 10px 16px;
		background:
			radial-gradient(90% 60% at 50% 0%, rgba(var(--glow-2-rgb), 0.45), transparent 70%),
			linear-gradient(180deg, #74264a, var(--burgundy) 60%, #3f0f24);
		color: var(--cream);
		align-content: start;
	}
	.lock__time {
		text-align: center;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 2.6rem;
		line-height: 1;
	}
	.lock__date {
		text-align: center;
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--text-on-ink-muted);
		margin-bottom: 14px;
	}
	.notes {
		display: grid;
		gap: 7px;
	}
	.note-card {
		position: relative;
		transition:
			transform 0.35s var(--ease),
			background 0.3s,
			box-shadow 0.3s;
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 8px;
		padding: 9px 10px;
		border-radius: 14px;
		background: rgba(245, 230, 211, 0.92);
		color: var(--text);
		box-shadow: 0 8px 18px -10px rgba(0, 0, 0, 0.5);
	}
	.note-card__icon {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 7px;
		background: var(--burgundy);
		color: var(--gold);
	}
	.note-card__body {
		display: grid;
		gap: 1px;
		min-width: 0;
	}
	.note-card__app {
		font-size: 0.56rem;
		font-weight: 800;
		letter-spacing: 0.06em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.note-card__title {
		font-size: 0.7rem;
		font-weight: 800;
		line-height: 1.25;
	}
	.note-card__text {
		display: grid;
		grid-template-rows: 0fr;
		opacity: 0;
		font-size: 0.64rem;
		line-height: 1.3;
		color: var(--text-muted);
		transition:
			grid-template-rows 0.4s var(--ease),
			opacity 0.3s;
	}
	.note-card__text > span {
		overflow: hidden;
	}
	.note-card.open .note-card__text {
		grid-template-rows: 1fr;
		opacity: 1;
	}
	.note-card.open {
		background: #fffaf3;
		transform: scale(1.04);
		box-shadow: 0 14px 26px -12px rgba(0, 0, 0, 0.6);
	}
	.note-card:not(.open):hover {
		transform: translateY(-2px);
	}
	.note-card__hit {
		position: absolute;
		inset: 0;
		z-index: 1;
		border: 0;
		border-radius: inherit;
		background: none;
		cursor: pointer;
	}
	.note-card__hit:focus-visible {
		outline: 2px solid var(--apricot);
		outline-offset: 2px;
	}
	.lock__badge {
		justify-self: center;
		margin-top: 10px;
	}

	/* Channels */
	.channels {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 14px;
	}
	.channel {
		display: grid;
		gap: 14px;
		justify-items: start;
		align-content: start;
		padding: 22px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.channel__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.15;
	}
	.channel__tag {
		padding: 2px 9px;
		border-radius: 999px;
		border: 1px dashed var(--burgundy);
		font-size: 0.6rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	@media (max-width: 1000px) {
		.channels {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 640px) {
		.channels {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
