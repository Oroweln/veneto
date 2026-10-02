<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import type { IconName } from '$lib/components/icons';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import BrowserFrame from '$lib/components/BrowserFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';

	const i18n = useI18n();

	/** Workspace functions. Names: projectPage.functions.items.{id}. */
	const FUNCTIONS: { id: string; icon: IconName }[] = [
		{ id: 'dashboard', icon: 'grid' },
		{ id: 'phases', icon: 'compass' },
		{ id: 'progress', icon: 'chart' },
		{ id: 'access', icon: 'users' },
		{ id: 'folders', icon: 'news' },
		{ id: 'sharing', icon: 'lock' },
		{ id: 'tasks', icon: 'check' },
		{ id: 'deadlines', icon: 'calendar' },
		{ id: 'workflows', icon: 'link' },
		{ id: 'history', icon: 'target' },
		{ id: 'consultants', icon: 'briefcase' },
		{ id: 'innovation', icon: 'bulb' },
		{ id: 'realtime', icon: 'bolt' }
	];

	/** Sample workspace in the hero (invented, labelled "Sample"). */
	const PHASES = ['idea', 'funding', 'prototype', 'testing', 'launch'];
	const TASKS = [
		{ key: 'quotes', who: 'LL', done: true },
		{ key: 'documents', who: 'PM', done: false },
		{ key: 'meeting', who: 'BP', done: false }
	];
	// The visitor can tick tasks and move the project between phases; progress follows both.
	let phase = $state(2);
	let done = $state(TASKS.map((t) => t.done));
	let workspaceUsed = $state(false);
	const progress = $derived(Math.round(((phase + done.filter(Boolean).length / TASKS.length) / PHASES.length) * 100));
	const nextTask = $derived(done.indexOf(false));

	function toggle(i: number) {
		done[i] = !done[i];
		workspaceUsed = true;
	}
	function setPhase(i: number) {
		phase = i;
		workspaceUsed = true;
	}
</script>

<Seo title={i18n.t('projectPage.seo.title')} description={i18n.t('projectPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.projectManagement.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('projectPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('projectPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('projectPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('projectPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/app')}>{i18n.t('projectPage.cta')} <span class="arrow">→</span></a>
			<span class="app-label"><Icon name="phone" size={15} />{i18n.t('projectPage.label')}</span>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.tasks')} done={workspaceUsed} />
		<div class="stage" use:tilt>
			<BrowserFrame url="veneto.app/projects">
				<div class="ws">
					<div class="ws__head">
						<div>
							<p class="ws__label">{i18n.t('projectPage.stage.label')}</p>
							<p class="ws__title">{i18n.t('projectPage.stage.title')}</p>
						</div>
						<span class="badge badge--demo">{i18n.t('common.sample')}</span>
					</div>
					<ol class="phases">
						{#each PHASES as p, i (p)}
							<li class:done={i < phase} class:current={i === phase}>
								<button class="phases__btn" type="button" aria-pressed={i === phase} onclick={() => setPhase(i)}>
									<span class="phases__dot">{#if i < phase}<Icon name="check" size={11} stroke={2.5} />{:else}{i + 1}{/if}</span>
									<span class="phases__name">{i18n.t(`projectPage.stage.phases.${p}`)}</span>
								</button>
							</li>
						{/each}
					</ol>
					<div class="ws__progress">
						<span>{i18n.t('projectPage.stage.progress')}</span>
						<span class="bar"><span style="width: {progress}%"></span></span>
						<strong>{progress}%</strong>
					</div>
					<ul class="tasks">
						{#each TASKS as t, i (t.key)}
							<li>
								<button
									class="tasks__row"
									class:done={done[i]}
									class:next={!workspaceUsed && i === nextTask}
									type="button"
									aria-pressed={done[i]}
									onclick={() => toggle(i)}
								>
									<span class="tasks__check">{#if done[i]}<Icon name="check" size={12} stroke={2.5} />{/if}</span>
									<span class="tasks__name">{i18n.t(`projectPage.stage.tasks.${t.key}.name`)}</span>
									<span class="tasks__due">{i18n.t(`projectPage.stage.tasks.${t.key}.due`)}</span>
									<span class="tasks__who">{t.who}</span>
								</button>
							</li>
						{/each}
					</ul>
				</div>
			</BrowserFrame>
			<FloatChip style="top: -18px; right: 8%;"><Icon name="lock" size={14} />{i18n.t('projectPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; left: 6%;"><strong>{TASKS.length}</strong> {i18n.t('projectPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 FUNCTIONS -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('projectPage.functions.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('projectPage.functions.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('projectPage.functions.lede')}</p>
		</div>
		<CategoryGrid
			items={FUNCTIONS}
			prefix="projectPage.functions.items"
			join={{ text: i18n.t('projectPage.label'), cta: i18n.t('projectPage.cta'), href: '/app' }}
		/>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.funding.projectNeedsYou'))} size="lg" />

<ClosingBand title={i18n.t('sections.projectManagement.short')} cta={i18n.t('projectPage.cta')} href="/app" />

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
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}
	.stage :global(.chip > span) {
		display: inline-flex;
		align-items: center;
		gap: 7px;
	}

	/* Sample workspace */
	.ws {
		display: grid;
		gap: 16px;
	}
	.ws__head {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 10px;
	}
	.ws__label {
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.ws__title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
	}
	.phases {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 4px;
	}
	.phases li {
		position: relative;
	}
	.phases__btn {
		display: grid;
		justify-items: center;
		gap: 5px;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		font: inherit;
		text-align: center;
		cursor: pointer;
	}
	.phases__btn:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
		border-radius: 6px;
	}
	.phases__btn:hover .phases__dot {
		border-color: var(--burgundy);
		transform: scale(1.12);
	}
	.phases li:not(:last-child)::after {
		content: '';
		position: absolute;
		top: 11px;
		left: calc(50% + 14px);
		right: calc(-50% + 14px);
		height: 2px;
		background: var(--line);
	}
	.phases li.done::after {
		background: var(--burgundy);
	}
	.phases__dot {
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		border: 2px solid var(--line);
		background: var(--paper);
		font-size: 0.66rem;
		font-weight: 800;
		color: var(--text-muted);
		transition:
			transform 0.25s var(--ease),
			border-color 0.25s,
			background 0.25s;
	}
	.done .phases__dot {
		border-color: var(--burgundy);
		background: var(--burgundy);
		color: var(--gold);
	}
	.current .phases__dot {
		border-color: var(--burgundy);
		color: var(--burgundy);
	}
	.phases__name {
		font-size: 0.64rem;
		font-weight: 700;
		color: var(--text-muted);
	}
	.current .phases__name {
		color: var(--text);
		font-weight: 800;
	}
	.ws__progress {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 10px;
		font-size: 0.74rem;
		font-weight: 700;
	}
	.bar {
		height: 8px;
		border-radius: 4px;
		background: var(--surface);
		overflow: hidden;
	}
	.bar span {
		display: block;
		height: 100%;
		border-radius: 4px;
		background: var(--metal-burgundy);
		transition: width 0.7s var(--ease);
	}
	.tasks {
		display: grid;
		gap: 7px;
	}
	.tasks__row {
		width: 100%;
		color: inherit;
		font: inherit;
		text-align: left;
		cursor: pointer;
		transition:
			border-color 0.25s,
			transform 0.25s var(--ease);
		display: grid;
		grid-template-columns: auto 1fr auto auto;
		align-items: center;
		gap: 10px;
		padding: 10px 12px;
		border-radius: 12px;
		background: var(--surface);
		border: 1px solid var(--line);
		font-size: 0.78rem;
	}
	.tasks__row:hover {
		border-color: var(--burgundy);
		transform: translateX(3px);
	}
	.tasks__row:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	/* Until the visitor has ticked something, the next open checkbox pulses */
	.tasks__row.next .tasks__check {
		animation: nudge 1.6s ease-out infinite;
	}
	@keyframes nudge {
		0% {
			box-shadow: 0 0 0 0 rgba(194, 66, 26, 0.55);
		}
		100% {
			box-shadow: 0 0 0 9px rgba(194, 66, 26, 0);
		}
	}
	.tasks__check {
		display: grid;
		place-items: center;
		width: 18px;
		height: 18px;
		border-radius: 5px;
		border: 2px solid var(--line);
	}
	.tasks__row.done .tasks__check {
		animation: tick 0.4s cubic-bezier(0.34, 1.8, 0.64, 1);
		border-color: var(--burgundy);
		background: var(--burgundy);
		color: var(--gold);
	}
	.tasks__name {
		font-weight: 700;
	}
	@keyframes tick {
		from {
			transform: scale(0.5);
		}
	}
	.tasks__row.done .tasks__name {
		text-decoration: line-through;
		color: var(--text-muted);
	}
	.tasks__due {
		font-size: 0.7rem;
		color: var(--text-muted);
	}
	.tasks__who {
		display: grid;
		place-items: center;
		width: 26px;
		height: 26px;
		border-radius: 50%;
		background: var(--ink-2);
		color: var(--gold);
		font-size: 0.6rem;
		font-weight: 800;
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
		.tasks__due {
			display: none;
		}
	}
</style>
