<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { PLATFORM_MENU } from '$lib/data/nav';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import PhoneFrame from '$lib/components/PhoneFrame.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconName } from '$lib/components/icons';
	import TryHint from '$lib/components/TryHint.svelte';
	import { tilt } from '$lib/actions/tilt';
	import { createDemo } from '$lib/actions/demo.svelte';

	const i18n = useI18n();
	// Hero phone: every tool row links to its page; the highlight tours them until hovered.
	const TOOLS = PLATFORM_MENU.filter((t) => t.key !== 'app');
	const tour = createDemo(() => TOOLS.length, { ms: 2200 });
	/** What lives on the website and what continues in the app. Text: platformPage.channels.{key}. */
	/** How the platform works, in order. Text: platformPage.steps.items.{key}. `app` marks the move to the mobile app. */
	const STEPS: { key: string; icon: IconName; app?: boolean }[] = [
		{ key: 'profile', icon: 'users' },
		{ key: 'interests', icon: 'target' },
		{ key: 'discover', icon: 'search' },
		{ key: 'membership', icon: 'star' },
		{ key: 'app', icon: 'phone', app: true },
		{ key: 'network', icon: 'link' },
		{ key: 'projects', icon: 'grid' }
	];
	const CHANNELS = [
		{ key: 'web', icon: 'globe', points: ['p1', 'p2', 'p3', 'p4'] },
		{ key: 'app', icon: 'phone', points: ['p1', 'p2', 'p3', 'p4'] }
	] as const;
</script>

<Seo title={i18n.t('platformPage.seo.title')} description={i18n.t('platformPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('platformPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('platformPage.hero.line1')}</span>
			<span>{i18n.t('platformPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('platformPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('platformPage.hero.text1')}</p>
		<p class="hero-text2">{i18n.t('platformPage.hero.text2')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href="#tools">{i18n.t('platformPage.hero.cta')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/app')}>{i18n.t('platformPage.hero.secondary')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="stage" use:tilt {...tour.hold}>
			<TryHint hint={i18n.t('common.try.tools')} done={tour.touched} />
			<PhoneFrame>
				<div class="app">
					<p class="app__head">
						<span>{i18n.t('brand.name')}</span>
						<span class="badge badge--demo">{i18n.t('common.preview')}</span>
					</p>
					<p class="app__hello">{i18n.t('platformPage.phone.hello')}</p>
					<ul class="app__tools">
						{#each TOOLS as t, i (t.key)}
							<li>
								<a class="app__tool" class:on={i === tour.index} href={i18n.path(t.href)} onpointerenter={() => (tour.index = i)}>
									<span class="app__icon"><Icon name={t.icon ?? 'star'} size={15} /></span>
									<span class="app__name">{i18n.t(`sections.${t.key}.name`)}</span>
									<span class="app__go"><Icon name="arrow" size={13} /></span>
								</a>
							</li>
						{/each}
					</ul>
				</div>
			</PhoneFrame>
			<FloatChip style="top: 8%; right: 0;"><strong>{PLATFORM_MENU.length}</strong> {i18n.t('platformPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: 10%; left: 0;">{i18n.t('platformPage.hero.chip2')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 TOOLS -->
<section class="section" id="tools" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('platformPage.tools.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('platformPage.tools.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('platformPage.tools.lede')}</p>
		</div>
		<ul class="tools">
			{#each PLATFORM_MENU as t, i (t.key)}
				<li use:reveal={(i % 3) * 40}>
					<a class="tool card-hover disc-host" href={i18n.path(t.href)}>
						<span class="tool__icon disc"><Icon name={t.icon ?? 'star'} size={20} /></span>
						<span class="tool__num">{String(i + 1).padStart(2, '0')}</span>
						<span class="tool__name">{i18n.t(`sections.${t.key}.name`)}</span>
						<span class="tool__text">{i18n.t(`sections.${t.key}.short`)}</span>
						<span class="tool__go">{i18n.t('common.open')} <span class="arrow-circle"><Icon name="arrow" size={16} /></span></span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.innovation.digitalTools'))} align="right" size="lg" />

<!-- 02 HOW IT WORKS -->
<section class="section" use:onscreen>
	<div class="container how">
		<div class="how__head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('platformPage.steps.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('platformPage.steps.title')}</h2>
			<p class="lede" use:reveal={100}>{i18n.t('platformPage.steps.lede')}</p>
			<a class="btn btn--primary btn--big" href={i18n.path('/register')} use:reveal={140}>{i18n.t('nav.joinNetwork')} <span class="arrow">→</span></a>
		</div>
		<ol class="steps">
			{#each STEPS as s, i (s.key)}
				<li class="step" class:step--app={s.app} use:reveal={i * 40}>
					<span class="step__num">{i + 1}</span>
					<div class="step__body">
						<p class="step__label">
							{i18n.t('platformPage.steps.step', { n: i + 1 })}
							{#if s.app}<span class="step__app"><Icon name="phone" size={12} />{i18n.t('platformPage.steps.inApp')}</span>{/if}
						</p>
						<h3 class="step__title">{i18n.t(`platformPage.steps.items.${s.key}.title`)}</h3>
						<p class="step__text">{i18n.t(`platformPage.steps.items.${s.key}.text`)}</p>
					</div>
					<span class="step__icon disc"><Icon name={s.icon} size={18} /></span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- 03 WEB + APP -->
<section class="section section--surface" use:onscreen>
	<div class="container">
		<div class="section-head">
			<p class="kicker" use:reveal><span class="kicker__num">03</span>{i18n.t('platformPage.channels.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('platformPage.channels.title')}</h2>
		</div>
		<div class="channels">
			{#each CHANNELS as c, i (c.key)}
				<div class="channel" class:channel--app={c.key === 'app'} class:on-ink={c.key === 'app'} use:reveal={i * 80}>
					<span class="disc"><Icon name={c.icon} size={20} /></span>
					<h3 class="channel__title">{i18n.t(`platformPage.channels.${c.key}.title`)}</h3>
					<p class="channel__text">{i18n.t(`platformPage.channels.${c.key}.text`)}</p>
					<ul class="channel__points">
						{#each c.points as p (p)}
							<li><Icon name="check" size={16} />{i18n.t(`platformPage.channels.${c.key}.${p}`)}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</section>

<ClosingBand
	title={i18n.t('platformPage.closing.title')}
	cta={i18n.t('nav.joinNetwork')}
	href="/register"
	secondary={{ label: i18n.t('platformPage.hero.secondary'), href: '/app' }}
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
	.hero-text2 {
		max-width: 56ch;
		font-size: 0.95rem;
		color: var(--text-on-ink-muted);
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

	.app {
		display: grid;
		gap: 12px;
		padding: 34px 14px 18px;
		color: var(--text);
	}
	.app__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 800;
		font-size: 0.82rem;
	}
	.app__hello {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
		line-height: 1.15;
	}
	.app__tools {
		display: grid;
		gap: 7px;
	}
	.app__tool {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: center;
		gap: 9px;
		padding: 9px 10px;
		border-radius: 12px;
		background: var(--surface);
		border: 1px solid var(--line);
		font-size: 0.74rem;
		font-weight: 800;
		color: inherit;
		text-decoration: none;
		transition:
			background 0.25s,
			border-color 0.25s,
			transform 0.3s var(--ease);
	}
	.app__tool.on {
		background: #fffaf3;
		border-color: var(--burgundy);
		transform: translateX(4px);
		box-shadow: 0 10px 20px -14px rgba(36, 26, 23, 0.6);
	}
	.app__tool:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.app__go {
		display: grid;
		transition: transform 0.3s var(--ease);
	}
	.app__tool.on .app__go {
		color: var(--vermilion);
		transform: translateX(3px);
	}
	.app__icon {
		display: grid;
		place-items: center;
		width: 26px;
		height: 26px;
		border-radius: 8px;
		background: var(--burgundy);
		color: var(--gold);
	}

	.tools {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}
	.tools li {
		display: grid;
	}
	.tool {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'icon num' 'name name' 'text text' 'go go';
		align-content: start;
		gap: 12px 14px;
		padding: 22px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
		text-decoration: none;
	}
	.tool__icon {
		grid-area: icon;
	}
	.tool__num {
		grid-area: num;
		justify-self: end;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		color: var(--text-muted);
	}
	.tool__name {
		grid-area: name;
		margin-top: 4px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.4rem;
	}
	.tool__text {
		grid-area: text;
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.tool__go {
		grid-area: go;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 6px;
		font-size: 0.86rem;
		font-weight: 800;
	}

	.channels {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 16px;
	}
	.channel {
		display: grid;
		gap: 14px;
		align-content: start;
		justify-items: start;
		padding: clamp(24px, 3vw, 36px);
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.channel--app {
		background: var(--ink-2);
		border-color: transparent;
		color: var(--cream);
	}
	.channel__title {
		font-size: clamp(1.4rem, 2.4vw, 1.9rem);
	}
	.channel__text {
		color: var(--text-muted);
	}
	.channel--app .channel__text {
		color: var(--text-on-ink-muted);
	}
	.channel__points {
		display: grid;
		gap: 10px;
	}
	.channel__points li {
		display: flex;
		gap: 10px;
		align-items: flex-start;
		font-weight: 600;
	}
	.channel__points :global(svg) {
		flex: none;
		margin-top: 3px;
		color: var(--vermilion);
	}
	/* How it works */
	.how {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: start;
	}
	.how__head {
		position: sticky;
		top: calc(var(--header-h) + 32px);
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.steps {
		position: relative;
		display: grid;
		gap: 12px;
	}
	/* The line joining the step numbers */
	.steps::before {
		content: '';
		position: absolute;
		left: 27px;
		top: 30px;
		bottom: 30px;
		width: 2px;
		background: linear-gradient(180deg, var(--gold), var(--burgundy));
		opacity: 0.5;
	}
	.step {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 18px;
		align-items: start;
		padding: 18px 20px 18px 0;
	}
	.step__num {
		position: relative;
		display: grid;
		place-items: center;
		width: 56px;
		height: 56px;
		border-radius: 50%;
		background: var(--paper);
		border: 2px solid var(--burgundy);
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.5rem;
		color: var(--burgundy);
	}
	.step__body {
		display: grid;
		gap: 4px;
		padding-top: 4px;
	}
	.step__label {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 10px;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.step__app {
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 2px 9px;
		border-radius: 999px;
		background: var(--burgundy);
		color: var(--gold);
		letter-spacing: 0.08em;
	}
	.step__title {
		font-size: clamp(1.25rem, 2vw, 1.5rem);
		line-height: 1.2;
	}
	.step__text {
		color: var(--text-muted);
	}
	.step__icon {
		margin-top: 4px;
	}
	/* Step 5: the move into the mobile app */
	.step--app {
		padding-left: 0;
		border-radius: var(--radius-card);
		background: linear-gradient(90deg, rgba(var(--glow-rgb), 0.08), transparent 80%);
	}
	.step--app .step__num {
		background: var(--burgundy);
		color: var(--gold);
	}
	@media (max-width: 900px) {
		.how {
			grid-template-columns: 1fr;
		}
		.how__head {
			position: static;
		}
		.tools {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.channels {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 560px) {
		.tools {
			grid-template-columns: 1fr;
		}
		.step__icon {
			display: none;
		}
		.step {
			grid-template-columns: auto 1fr;
		}
	}
</style>
