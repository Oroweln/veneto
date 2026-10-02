<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import type { IconName } from '$lib/components/icons';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import BrowserFrame from '$lib/components/BrowserFrame.svelte';
	import CategoryGrid from '$lib/components/CategoryGrid.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';
	import { prefersReducedMotion } from '$lib/actions/reveal';

	const i18n = useI18n();

	/** What the future assistant may help with. Names: aiPage.help.items.{id}. */
	const HELP: { id: string; icon: IconName }[] = [
		{ id: 'funding', icon: 'euro' },
		{ id: 'filters', icon: 'search' },
		{ id: 'partners', icon: 'link' },
		{ id: 'navigate', icon: 'compass' },
		{ id: 'project', icon: 'news' },
		{ id: 'advisors', icon: 'briefcase' },
		{ id: 'services', icon: 'target' }
	];
	/** Transparency commitments. Text: aiPage.principles.{key}. */
	const PRINCIPLES: { key: string; icon: IconName }[] = [
		{ key: 'disclosure', icon: 'chip' },
		{ key: 'advice', icon: 'shield' }
	];

	/** Sample questions in the hero. Text: aiPage.stage (first) and aiPage.stage.q2 / q3. */
	const QA: { base: string; refs: [IconName, IconName] }[] = [
		{ base: 'aiPage.stage', refs: ['euro', 'link'] },
		{ base: 'aiPage.stage.q2', refs: ['link', 'calendar'] },
		{ base: 'aiPage.stage.q3', refs: ['news', 'lock'] }
	];
	const chat = createDemo(() => QA.length, { ms: 7000 });
	const qa = $derived(QA[chat.index]);
	const answer = $derived(i18n.t(`${qa.base}.answer`));

	// The answer types itself out; the references appear once it is complete.
	let typed = $state(0);
	$effect(() => {
		const full = answer.length;
		if (prefersReducedMotion()) {
			typed = full;
			return;
		}
		typed = 0;
		const id = setInterval(() => {
			typed = Math.min(full, typed + 2);
			if (typed >= full) clearInterval(id);
		}, 16);
		return () => clearInterval(id);
	});
</script>

<Seo title={i18n.t('aiPage.seo.title')} description={i18n.t('aiPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.aiAssistant.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('aiPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('aiPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('aiPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('aiPage.hero.text')}</p>
		<span class="status"><Icon name="bulb" size={15} />{i18n.t('aiPage.status')}</span>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.ai')} done={chat.touched} />
		<div class="stage" use:tilt {...chat.hold}>
			<BrowserFrame url="veneto.app/assistant">
				<div class="ai">
					<p class="ai__notice"><Icon name="chip" size={14} />{i18n.t('aiPage.stage.notice')}</p>
					{#key chat.index}
						<p class="ai__q">{i18n.t(`${qa.base}.question`)}</p>
					{/key}
					<div class="ai__a" aria-live="polite">
						<span class="ai__tag">{i18n.t('aiPage.stage.tag')}</span>
						<!-- Full answer reserves the height; the typed part is drawn over it -->
						<p class="ai__text">
							<span class="ai__ghost" aria-hidden="true">{answer}</span>
							<span class="ai__typed">{answer.slice(0, typed)}{#if typed < answer.length}<i class="ai__caret"></i>{/if}</span>
						</p>
						<ul class:shown={typed >= answer.length}>
							<li><Icon name={qa.refs[0]} size={13} />{i18n.t(`${qa.base}.r1`)}</li>
							<li><Icon name={qa.refs[1]} size={13} />{i18n.t(`${qa.base}.r2`)}</li>
						</ul>
					</div>
					<div class="ai__ask">
						{#each QA as item, i (item.base)}
							<button class="ai__chip" class:on={i === chat.index} type="button" aria-pressed={i === chat.index} onclick={() => (chat.index = i)}>
								{i18n.t(`${item.base}.question`)}
							</button>
						{/each}
					</div>
					<p class="ai__disclaimer"><Icon name="shield" size={13} />{i18n.t('aiPage.stage.disclaimer')}</p>
					<span class="badge badge--demo ai__badge">{i18n.t('aiPage.stage.badge')}</span>
				</div>
			</BrowserFrame>
		</div>
	{/snippet}
</PageHero>

<!-- 01 WHAT IT MAY HELP WITH -->
<section class="section" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('aiPage.help.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('aiPage.help.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('aiPage.help.lede')}</p>
		</div>
		<CategoryGrid
			items={HELP}
			prefix="aiPage.help.items"
			join={{ text: i18n.t('aiPage.help.join'), cta: i18n.t('nav.joinNetwork'), href: '/register' }}
		/>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.matchmaking.ideasNeedExpertise'))} size="lg" />

<!-- 02 TRANSPARENCY -->
<section class="section section--surface" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('aiPage.principles.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('aiPage.principles.title')}</h2>
		</div>
		<div class="principles">
			{#each PRINCIPLES as p, i (p.key)}
				<div class="principle" use:reveal={i * 80}>
					<span class="disc"><Icon name={p.icon} size={20} /></span>
					<h3>{i18n.t(`aiPage.principles.${p.key}.title`)}</h3>
					<p>{i18n.t(`aiPage.principles.${p.key}.text`)}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<ClosingBand
	title={i18n.t('aiPage.closing.title')}
	text={i18n.t('aiPage.closing.text')}
	cta={i18n.t('nav.joinNetwork')}
	href="/register"
	secondary={{ label: i18n.t('sections.contact.name'), href: '/contact' }}
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
	.status {
		justify-self: start;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		margin-top: 6px;
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

	/* Sample assistant */
	.ai {
		display: grid;
		gap: 12px;
	}
	.ai__notice,
	.ai__disclaimer {
		display: flex;
		align-items: center;
		gap: 8px;
		padding: 8px 12px;
		border-radius: 10px;
		font-size: 0.72rem;
		font-weight: 700;
	}
	.ai__notice {
		background: var(--burgundy);
		color: var(--cream);
	}
	.ai__disclaimer {
		background: var(--surface);
		color: var(--text-muted);
		font-weight: 600;
	}
	.ai__q {
		justify-self: end;
		max-width: 80%;
		padding: 10px 14px;
		border-radius: 14px 14px 4px 14px;
		background: var(--ink-2);
		color: var(--cream);
		font-size: 0.82rem;
	}
	.ai__a {
		display: grid;
		gap: 8px;
		max-width: 92%;
		padding: 12px 14px;
		border-radius: 14px 14px 14px 4px;
		background: var(--surface);
		border: 1px solid var(--line);
		font-size: 0.8rem;
		line-height: 1.45;
	}
	.ai__tag {
		justify-self: start;
		padding: 2px 8px;
		border-radius: 999px;
		background: var(--metal-champagne);
		font-size: 0.58rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.ai__a ul {
		display: grid;
		gap: 5px;
		opacity: 0;
		transform: translateY(4px);
		transition:
			opacity 0.35s,
			transform 0.35s var(--ease);
	}
	.ai__a ul.shown {
		opacity: 1;
		transform: none;
	}
	.ai__q {
		animation: ask 0.4s var(--ease);
	}
	@keyframes ask {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
	}
	.ai__text {
		display: grid;
	}
	.ai__ghost,
	.ai__typed {
		grid-area: 1 / 1;
	}
	.ai__ghost {
		visibility: hidden;
	}
	.ai__caret {
		display: inline-block;
		width: 2px;
		height: 1em;
		margin-left: 2px;
		vertical-align: -2px;
		background: var(--burgundy);
		animation: blink 0.8s steps(2) infinite;
	}
	@keyframes blink {
		to {
			opacity: 0;
		}
	}
	/* Sample questions */
	.ai__ask {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.ai__chip {
		padding: 6px 11px;
		border-radius: 999px;
		border: 1px solid var(--line);
		background: var(--paper);
		color: var(--text);
		font: inherit;
		font-size: 0.7rem;
		font-weight: 700;
		text-align: left;
		cursor: pointer;
		transition:
			background 0.2s,
			border-color 0.2s,
			color 0.2s,
			transform 0.2s var(--ease);
	}
	.ai__chip:hover {
		border-color: var(--ink-2);
		transform: translateY(-2px);
	}
	.ai__chip:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.ai__chip.on {
		background: var(--ink-2);
		border-color: var(--ink-2);
		color: var(--cream);
	}
	.ai__a li {
		display: flex;
		align-items: center;
		gap: 7px;
		font-weight: 700;
		color: var(--burgundy);
	}
	.ai__badge {
		justify-self: center;
	}

	.principles {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}
	.principle {
		display: grid;
		gap: 14px;
		justify-items: start;
		align-content: start;
		padding: clamp(24px, 3vw, 36px);
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.principle h3 {
		font-size: clamp(1.3rem, 2.2vw, 1.7rem);
	}
	.principle p {
		color: var(--text-muted);
	}
	@media (max-width: 800px) {
		.principles {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
	}
</style>
