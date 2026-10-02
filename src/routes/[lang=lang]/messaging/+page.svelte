<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import type { IconName } from '$lib/components/icons';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';

	const i18n = useI18n();

	/** Communication features, rolled out progressively. Names: messagingPage.features.items.{id}. */
	const FEATURES: { id: string; icon: IconName }[] = [
		{ id: 'direct', icon: 'mail' },
		{ id: 'groups', icon: 'users' },
		{ id: 'files', icon: 'news' },
		{ id: 'experts', icon: 'briefcase' },
		{ id: 'meetings', icon: 'calendar' },
		{ id: 'voice', icon: 'phone' },
		{ id: 'video', icon: 'globe' },
		{ id: 'history', icon: 'target' },
		{ id: 'introductions', icon: 'link' },
		{ id: 'notifications', icon: 'bell' }
	];
	/** Sample conversation on the phone (invented, labelled "Sample"). */
	const CHAT = [
		{ key: 'm1', mine: false },
		{ key: 'm2', mine: true },
		{ key: 'm3', mine: false, file: true }
	];
	// Quick replies: each sends a message, shows "typing…", then gets its answer. Text: messagingPage.phone.quick.{key}.
	const QUICK = ['a', 'b', 'c'];
	let sent = $state<string[]>([]);
	let answered = $state<string[]>([]);
	let typing = $state(false);

	type Line = { id: string; text: string; mine: boolean; file?: boolean };
	const thread = $derived.by(() => {
		const lines: Line[] = CHAT.map((m) => ({ id: m.key, text: i18n.t(`messagingPage.phone.${m.key}`), mine: m.mine, file: m.file }));
		for (const k of sent) {
			lines.push({ id: `${k}-send`, text: i18n.t(`messagingPage.phone.quick.${k}.send`), mine: true });
			if (answered.includes(k)) lines.push({ id: `${k}-reply`, text: i18n.t(`messagingPage.phone.quick.${k}.reply`), mine: false });
		}
		// The phone shows the latest four messages
		return lines.slice(-4);
	});

	function send(k: string) {
		if (typing) return;
		sent = [...sent, k];
		typing = true;
		setTimeout(() => {
			answered = [...answered, k];
			typing = false;
		}, 1200);
	}
</script>

<Seo title={i18n.t('messagingPage.seo.title')} description={i18n.t('messagingPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.messaging.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('messagingPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('messagingPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('messagingPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('messagingPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/app')}>{i18n.t('messagingPage.cta')} <span class="arrow">→</span></a>
			<span class="app-label"><Icon name="phone" size={15} />{i18n.t('messagingPage.label')}</span>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="stage" use:tilt>
			<TryHint hint={i18n.t('common.try.chat')} done={sent.length > 0} />
			<PhoneFrame>
				<div class="chat">
					<div class="chat__head">
						<span class="chat__avatar">LL</span>
						<span class="chat__who">
							<span class="chat__name">Lagunare Logistics</span>
							<span class="chat__group">{i18n.t('messagingPage.phone.group')}</span>
						</span>
						<span class="chat__call"><Icon name="phone" size={14} /></span>
					</div>
					<ul class="chat__list" aria-live="polite">
						{#each thread as m (m.id)}
							<li class="bubble" class:mine={m.mine} in:fly={{ y: 12, duration: 350 }} animate:flip={{ duration: 300 }}>
								{m.text}
								{#if m.file}
									<span class="bubble__file"><Icon name="news" size={13} />{i18n.t('messagingPage.phone.file')}</span>
								{/if}
							</li>
						{/each}
						{#if typing}
							<li class="bubble typing" in:fly={{ y: 8, duration: 250 }}>
								<span class="sr-only">{i18n.t('common.try.typing')}</span>
								<i></i><i></i><i></i>
							</li>
						{/if}
					</ul>
					{#if sent.length < QUICK.length}
						<div class="quick">
							{#each QUICK.filter((k) => !sent.includes(k)) as k (k)}
								<button class="quick__btn" class:nudge={sent.length === 0} type="button" disabled={typing} onclick={() => send(k)}>
									{i18n.t(`messagingPage.phone.quick.${k}.send`)}
								</button>
							{/each}
						</div>
					{/if}
					<span class="chat__video"><Icon name="calendar" size={13} />{i18n.t('messagingPage.phone.meeting')}</span>
					<span class="badge badge--demo chat__badge">{i18n.t('common.sample')}</span>
				</div>
			</PhoneFrame>
			<FloatChip style="top: 10%; right: 0;"><strong>{FEATURES.length}</strong> {i18n.t('messagingPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: 12%; left: 0;">{i18n.t('messagingPage.label')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 FEATURES -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('messagingPage.features.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('messagingPage.features.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('messagingPage.features.lede')}</p>
		</div>
		<CategoryGrid
			items={FEATURES}
			prefix="messagingPage.features.items"
			join={{ text: i18n.t('messagingPage.features.join'), cta: i18n.t('messagingPage.cta'), href: '/app' }}
		/>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.matchmaking.connectBetter'))} align="right" size="lg" />

<ClosingBand title={i18n.t('sections.messaging.short')} cta={i18n.t('messagingPage.cta')} href="/app" />

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
	.stage {
		position: relative;
		display: grid;
		justify-items: center;
		padding-block: 10px;
		/* Upright at rest; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, 0deg)) rotateX(var(--rx, 0deg));
		transition: transform 0.6s var(--ease);
	}

	/* Sample chat */
	.chat {
		display: grid;
		gap: 10px;
		min-height: 420px;
		padding: 38px 10px 14px;
		align-content: start;
		color: var(--text);
	}
	.chat__head {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 8px;
		padding-bottom: 10px;
		border-bottom: 1px solid var(--line);
	}
	.chat__avatar {
		display: grid;
		place-items: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: var(--burgundy);
		color: var(--gold);
		font-size: 0.62rem;
		font-weight: 800;
	}
	.chat__who {
		display: grid;
		min-width: 0;
	}
	.chat__name {
		font-size: 0.74rem;
		font-weight: 800;
	}
	.chat__group {
		font-size: 0.6rem;
		color: var(--text-muted);
	}
	.chat__call {
		display: grid;
		place-items: center;
		width: 28px;
		height: 28px;
		border-radius: 50%;
		background: var(--surface);
		color: var(--burgundy);
	}
	.chat__list {
		display: grid;
		gap: 7px;
	}
	.bubble {
		display: grid;
		gap: 6px;
		max-width: 86%;
		padding: 8px 10px;
		border-radius: 14px 14px 14px 4px;
		background: var(--surface);
		font-size: 0.68rem;
		line-height: 1.35;
	}
	.bubble.mine {
		justify-self: end;
		border-radius: 14px 14px 4px 14px;
		background: var(--burgundy);
		color: var(--cream);
	}
	.typing {
		display: flex;
		gap: 4px;
		padding: 10px 12px;
	}
	.typing i {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: var(--text-muted);
		animation: dot 1s ease-in-out infinite;
	}
	.typing i:nth-of-type(2) {
		animation-delay: 0.15s;
	}
	.typing i:nth-of-type(3) {
		animation-delay: 0.3s;
	}
	@keyframes dot {
		0%,
		100% {
			opacity: 0.3;
			transform: translateY(0);
		}
		50% {
			opacity: 1;
			transform: translateY(-3px);
		}
	}
	/* Quick replies */
	.quick {
		display: grid;
		justify-items: end;
		gap: 5px;
	}
	.quick__btn {
		max-width: 90%;
		padding: 6px 10px;
		border-radius: 999px;
		border: 1px solid var(--burgundy);
		background: var(--paper);
		color: var(--burgundy);
		font: inherit;
		font-size: 0.62rem;
		font-weight: 800;
		text-align: right;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s,
			transform 0.2s var(--ease);
	}
	.quick__btn:hover:not(:disabled) {
		background: var(--burgundy);
		color: var(--cream);
		transform: translateX(-3px);
	}
	.quick__btn:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.quick__btn:disabled {
		opacity: 0.5;
		cursor: default;
	}
	.quick__btn.nudge:first-child {
		animation: nudge 1.8s ease-out infinite;
	}
	@keyframes nudge {
		0% {
			box-shadow: 0 0 0 0 rgba(91, 23, 49, 0.45);
		}
		100% {
			box-shadow: 0 0 0 8px rgba(91, 23, 49, 0);
		}
	}
	.bubble__file {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 5px 7px;
		border-radius: 8px;
		background: var(--paper);
		border: 1px solid var(--line);
		font-weight: 800;
		font-size: 0.62rem;
	}
	.chat__video {
		justify-self: center;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		margin-top: 4px;
		padding: 6px 10px;
		border-radius: 999px;
		border: 1px dashed var(--burgundy);
		color: var(--burgundy);
		font-size: 0.62rem;
		font-weight: 800;
	}
	.chat__badge {
		justify-self: center;
	}
</style>
