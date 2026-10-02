<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import logoMark from '$lib/assets/logo-mark.svg';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import type { IconName } from '$lib/components/icons';

	const i18n = useI18n();
	const STORY = ['p1', 'p2', 'p3', 'p4', 'p5'];
	const MISSION = ['territory', 'companies', 'industries', 'international', 'partners', 'funding', 'projects', 'exchange', 'tools', 'markets'];
	/** Values. Text: aboutPage.values.items.{key}. */
	const VALUES: { key: string; icon: IconName }[] = [
		{ key: 'identity', icon: 'column' },
		{ key: 'enterprise', icon: 'briefcase' },
		{ key: 'connection', icon: 'link' },
		{ key: 'innovation', icon: 'bulb' },
		{ key: 'international', icon: 'globe' },
		{ key: 'quality', icon: 'diamond' },
		{ key: 'responsibility', icon: 'shield' }
	];
	const VISION = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7'];
	/** ZOE MILANO capabilities. Names: aboutPage.zoe.products.{key}. */
	/** What ZOE MILANO aims to support through Veneto.app. Names: aboutPage.bridge.aims.{key}. */
	const AIMS: { key: string; icon: IconName }[] = [
		{ key: 'visibility', icon: 'star' },
		{ key: 'partnerships', icon: 'link' },
		{ key: 'italySerbia', icon: 'globe' },
		{ key: 'balkans', icon: 'map' },
		{ key: 'technology', icon: 'chip' },
		{ key: 'culture', icon: 'column' },
		{ key: 'europe', icon: 'users' },
		{ key: 'tourism', icon: 'compass' },
		{ key: 'matchmaking', icon: 'target' },
		{ key: 'digital', icon: 'bolt' }
	];
	const NODES = ['italy', 'serbia', 'world'];
	const PRODUCTS = ['web', 'mobile', 'b2b', 'matchmaking', 'funding', 'membership', 'projects', 'ecommerce', 'directories', 'tourism', 'cultural', 'sports', 'ai', 'multilingual', 'international', 'europe'];
</script>

<Seo title={i18n.t('aboutPage.seo.title')} description={i18n.t('aboutPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.about.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('aboutPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('aboutPage.hero.line1')}</span>
			<span>{i18n.t('aboutPage.hero.line2')}</span>
			<span class="metal-text">{i18n.t('aboutPage.hero.line3')}</span>
		</h1>
		<p class="lede">{i18n.t('aboutPage.hero.text')}</p>
	{/snippet}
	{#snippet stage()}
		<figure class="emblem">
			<img src={logoMark} alt="" width="200" height="200" />
			<figcaption>
				<span class="emblem__tagline">{i18n.t('brand.tagline')}</span>
				<span class="emblem__claim">{i18n.t('brand.statementA')} {i18n.t('brand.statementB')}</span>
			</figcaption>
		</figure>
	{/snippet}
</PageHero>

<!-- 01 HOW THE IDEA BEGAN -->
<section class="section">
	<div class="container story">
		<div class="story__head">
			<p class="kicker" use:reveal><span class="kicker__num">01</span>{i18n.t('aboutPage.story.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('aboutPage.story.title')}</h2>
		</div>
		<div class="story__body">
			{#each STORY as p, i (p)}
				<p class:lede={i === 0} use:reveal={i * 40}>{i18n.t(`aboutPage.story.${p}`)}</p>
			{/each}
		</div>
	</div>
	<div class="container">
		<blockquote class="quote" use:reveal>
			<p>{i18n.t('aboutPage.story.quote1')}</p>
			<p class="quote__accent">{i18n.t('aboutPage.story.quote2')}</p>
		</blockquote>
	</div>
</section>

<!-- 02 MISSION -->
<section class="section section--surface">
	<div class="container mission">
		<div class="mission__head">
			<p class="kicker" use:reveal><span class="kicker__num">02</span>{i18n.t('aboutPage.mission.kicker')}</p>
			<h2 class="h2" use:reveal={60}>{i18n.t('aboutPage.mission.title')}</h2>
		</div>
		<ol class="mission__list">
			{#each MISSION as m, i (m)}
				<li use:reveal={(i % 2) * 60}>
					<span class="mission__num">{String(i + 1).padStart(2, '0')}</span>
					<span>{i18n.t(`aboutPage.mission.items.${m}`)}</span>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- 03 VALUES -->
<section class="section">
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">03</span>{i18n.t('aboutPage.values.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('aboutPage.values.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('aboutPage.values.lede')}</p>
		</div>
		<ul class="values">
			{#each VALUES as v, i (v.key)}
				<li class="value" use:reveal={(i % 4) * 50}>
					<span class="disc"><Icon name={v.icon} size={20} /></span>
					<h3 class="value__title">{i18n.t(`aboutPage.values.items.${v.key}.title`)}</h3>
					<p class="value__text">{i18n.t(`aboutPage.values.items.${v.key}.text`)}</p>
				</li>
			{/each}
			<li class="value value--brand on-ink" aria-hidden="true" use:reveal={150}>
				<img src={logoMark} alt="" width="72" height="72" />
				<span class="value__tagline">{i18n.t('brand.tagline')}</span>
			</li>
		</ul>
	</div>
</section>

<!-- 04 FOUNDER'S VISION -->
<section class="section section--ink founder" id="founder">
	<div class="container founder__grid">
		<div class="founder__head">
			<p class="kicker" use:reveal><span class="kicker__num">04</span>{i18n.t('aboutPage.founder.kicker')}</p>
			<h2 class="founder__title" use:reveal={60}>
				<span>{i18n.t('aboutPage.founder.line1')}</span>
				<span>{i18n.t('aboutPage.founder.line2')}</span>
				<span>{i18n.t('aboutPage.founder.line3')}</span>
				<span class="metal-text">{i18n.t('aboutPage.founder.line4')}</span>
			</h2>
		</div>
		<div class="founder__body">
			{#each VISION as p, i (p)}
				<p class:lede={i === 0} use:reveal={i * 40}>{i18n.t(`aboutPage.founder.${p}`)}</p>
			{/each}
		</div>
	</div>
</section>

<!-- FOUNDER STATEMENT -->
<section class="section section--surface">
	<div class="container">
		<figure class="statement-card" use:reveal>
			<p class="statement-card__label">{i18n.t('aboutPage.founder.statementLabel')}</p>
			<blockquote>
				<p>“{i18n.t('aboutPage.founder.quote1')}</p>
				<p>{i18n.t('aboutPage.founder.quote2')}”</p>
			</blockquote>
			<figcaption>
				<span class="monogram" aria-hidden="true">ZP</span>
				<span>
					<strong>Zorana Petrović</strong>
					<span>{i18n.t('aboutPage.founder.role')}</span>
				</span>
			</figcaption>
		</figure>
	</div>
</section>

<!-- 03 ABOUT ZOE MILANO -->
<section class="section" id="zoe-milano">
	<div class="container zoe">
		<div class="zoe__copy">
			<p class="kicker" use:reveal><span class="kicker__num">05</span>{i18n.t('aboutPage.zoe.kicker')}</p>
			<h2 class="zoe__title" use:reveal={60}>
				<span>{i18n.t('aboutPage.zoe.line1')}</span>
				<span>{i18n.t('aboutPage.zoe.line2')}</span>
				<span class="accent">{i18n.t('aboutPage.zoe.line3')}</span>
			</h2>
			<p class="lede" use:reveal={100}>{i18n.t('aboutPage.zoe.p1')}</p>
			<p class="zoe__text" use:reveal={140}>{i18n.t('aboutPage.zoe.p2')}</p>
			<div class="zoe__stat" use:reveal={180}>
				<span class="zoe__figure">13+</span>
				<span>{i18n.t('aboutPage.zoe.stat')}</span>
			</div>
			<a class="btn btn--outline" href="https://zoemilano.rs/" target="_blank" rel="noopener" use:reveal={220}>
				{i18n.t('aboutPage.zoe.visit')} <Icon name="arrowUpRight" size={16} /><span class="sr-only">({i18n.t('common.newTab')})</span>
			</a>
		</div>
		<div class="zoe__products on-ink" use:reveal={80}>
			<p class="zoe__label">{i18n.t('aboutPage.zoe.productsTitle')}</p>
			<ul>
				{#each PRODUCTS as p (p)}
					<li><Icon name="check" size={15} />{i18n.t(`aboutPage.zoe.products.${p}`)}</li>
				{/each}
			</ul>
		</div>
	</div>
	<div class="container">
		<p class="zoe__objective" use:reveal>{i18n.t('aboutPage.zoe.objective')}</p>
	</div>
</section>

<!-- 04 ZOE MILANO AND VENETO -->
<section class="section section--ink bridge">
	<div class="container">
		<div class="bridge__head">
			<div>
				<p class="kicker" use:reveal><span class="kicker__num">06</span>{i18n.t('aboutPage.bridge.kicker')}</p>
				<h2 class="bridge__title" use:reveal={60}>
					<span>{i18n.t('aboutPage.bridge.line1')}</span>
					<span>{i18n.t('aboutPage.bridge.line2')}</span>
					<span class="metal-text">{i18n.t('aboutPage.bridge.line3')}</span>
				</h2>
			</div>
			<div class="bridge__intro">
				<p class="lede" use:reveal={100}>{i18n.t('aboutPage.bridge.text')}</p>
				<ol class="nodes" aria-hidden="true" use:reveal={140}>
					{#each NODES as n (n)}
						<li><span class="nodes__dot"></span>{i18n.t(`aboutPage.bridge.nodes.${n}`)}</li>
					{/each}
				</ol>
			</div>
		</div>
		<p class="bridge__label" use:reveal>{i18n.t('aboutPage.bridge.aimsTitle')}</p>
		<ul class="aims">
			{#each AIMS as a, i (a.key)}
				<li class="aim" use:reveal={(i % 5) * 40}>
					<span class="disc disc--sm"><Icon name={a.icon} size={16} /></span>
					<span>{i18n.t(`aboutPage.bridge.aims.${a.key}`)}</span>
				</li>
			{/each}
		</ul>
		<p class="bridge__closing" use:reveal>{i18n.t('aboutPage.bridge.closing')}</p>
	</div>
</section>

<ClosingBand
	eyebrow={i18n.t('home.closing.eyebrow')}
	title={[i18n.t('home.closing.line1'), i18n.t('home.closing.line2'), i18n.t('home.closing.line3')]}
	text={i18n.t('home.closing.text')}
	cta={i18n.t('home.closing.cta')}
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
	.emblem {
		display: grid;
		gap: 22px;
		justify-items: center;
		margin: 0;
		padding: clamp(28px, 4vw, 48px);
		border-radius: 30px;
		background:
			radial-gradient(60% 50% at 50% 30%, rgba(var(--glow-2-rgb), 0.18), transparent 70%),
			var(--ink-2);
		border: 1px solid var(--line-on-ink);
		box-shadow: var(--shadow-dark);
		text-align: center;
	}
	.emblem img {
		width: min(200px, 50vw);
		height: auto;
	}
	.emblem figcaption {
		display: grid;
		gap: 8px;
	}
	.emblem__tagline {
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.emblem__claim {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.2rem, 2vw, 1.5rem);
	}

	.story {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: start;
	}
	.story__head {
		position: sticky;
		top: calc(var(--header-h) + 32px);
		display: grid;
		gap: 18px;
	}
	.story__body {
		display: grid;
		gap: 20px;
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--text-muted);
	}
	.story__body .lede {
		color: var(--text);
	}
	.quote {
		margin: clamp(56px, 8vw, 96px) 0 0;
		padding: clamp(28px, 4vw, 48px) 0 0 clamp(20px, 3vw, 40px);
		border-left: 3px solid var(--burgundy);
		display: grid;
		gap: 10px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.6rem, 3.4vw, 2.8rem);
		line-height: 1.15;
	}
	.quote__accent {
		color: var(--burgundy);
	}
	/* Mission */
	.mission {
		display: grid;
		grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: start;
	}
	.mission__head {
		position: sticky;
		top: calc(var(--header-h) + 32px);
		display: grid;
		gap: 18px;
	}
	.mission__list {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 32px;
	}
	.mission__list li {
		display: flex;
		gap: 16px;
		align-items: baseline;
		padding: 18px 0;
		border-bottom: 1px solid var(--line);
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 1.25;
	}
	.mission__num {
		flex: none;
		font-family: var(--font-sans);
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--burgundy);
	}
	/* Values */
	.values {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
	}
	.value {
		display: grid;
		gap: 14px;
		align-content: start;
		justify-items: start;
		padding: 26px 24px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.value__title {
		font-size: 1.2rem;
		letter-spacing: 0.04em;
		text-transform: uppercase;
		line-height: 1.15;
	}
	.value__text {
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--text-muted);
	}
	.value--brand {
		align-content: center;
		justify-items: center;
		text-align: center;
		background: var(--ink-2);
		border-color: transparent;
	}
	.value__tagline {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--gold);
	}
	@media (max-width: 1000px) {
		.values {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 520px) {
		.values {
			grid-template-columns: 1fr;
		}
	}
	/* Founder's vision */
	.founder__grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: start;
	}
	.founder__head {
		position: sticky;
		top: calc(var(--header-h) + 32px);
		display: grid;
		gap: 18px;
	}
	.founder__title {
		font-size: clamp(2rem, 3.3vw, 2.9rem);
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0;
	}
	.founder__title span {
		display: block;
	}
	.founder__body {
		display: grid;
		gap: 20px;
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--text-on-ink-muted);
	}
	.founder__body .lede {
		color: var(--cream);
	}
	.statement-card {
		display: grid;
		gap: 26px;
		max-width: 980px;
		margin: 0 auto;
		padding: clamp(28px, 5vw, 64px);
		border-radius: 30px;
		background: var(--paper);
		border: 1px solid var(--line);
		box-shadow: var(--shadow-light);
	}
	.statement-card__label {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.statement-card blockquote {
		margin: 0;
		display: grid;
		gap: 16px;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.35rem, 2.6vw, 2rem);
		line-height: 1.3;
	}
	.statement-card blockquote p:last-child {
		color: var(--burgundy);
	}
	.statement-card figcaption {
		display: flex;
		align-items: center;
		gap: 16px;
		padding-top: 22px;
		border-top: 1px solid var(--line);
	}
	.statement-card figcaption strong {
		display: block;
		font-family: var(--font-display);
		font-size: 1.25rem;
	}
	.statement-card figcaption span span {
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.monogram {
		display: grid;
		place-items: center;
		flex: none;
		width: 58px;
		height: 58px;
		border-radius: 50%;
		background: var(--burgundy);
		color: var(--gold);
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.3rem;
	}
	/* About ZOE MILANO */
	.zoe {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: start;
	}
	.zoe__copy {
		display: grid;
		gap: 18px;
		justify-items: start;
	}
	.zoe__title {
		font-size: clamp(2rem, 3.6vw, 3.1rem);
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0;
	}
	.zoe__title span {
		display: block;
	}
	.zoe__text {
		color: var(--text-muted);
	}
	.zoe__stat {
		display: flex;
		align-items: center;
		gap: 16px;
		padding: 16px 0;
		border-top: 1px solid var(--line);
		border-bottom: 1px solid var(--line);
		font-weight: 700;
		max-width: 380px;
	}
	.zoe__figure {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 3.2rem;
		line-height: 1;
		color: var(--burgundy);
	}
	.zoe__products {
		display: grid;
		gap: 18px;
		padding: clamp(24px, 3vw, 36px);
		border-radius: 26px;
		background: var(--ink-2);
		color: var(--cream);
		box-shadow: var(--shadow-light);
	}
	.zoe__label {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.zoe__products ul {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0 22px;
	}
	.zoe__products li {
		display: flex;
		gap: 9px;
		align-items: flex-start;
		padding: 9px 0;
		border-bottom: 1px solid var(--line-on-ink);
		font-size: 0.9rem;
		font-weight: 600;
	}
	.zoe__products li :global(svg) {
		flex: none;
		margin-top: 3px;
		color: var(--gold);
	}
	.zoe__objective {
		margin-top: clamp(48px, 7vw, 80px);
		text-align: center;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.5rem, 3vw, 2.4rem);
		line-height: 1.2;
		max-width: 26ch;
		margin-inline: auto;
	}
	/* ZOE MILANO and Veneto */
	.bridge__head {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(32px, 6vw, 88px);
		align-items: end;
		margin-bottom: clamp(40px, 6vw, 64px);
	}
	.bridge__title {
		margin-top: 18px;
		font-size: clamp(1.9rem, 3vw, 2.7rem);
		line-height: 1.02;
		text-transform: uppercase;
		letter-spacing: 0;
	}
	.bridge__title span {
		display: block;
	}
	.bridge__intro {
		display: grid;
		gap: 24px;
	}
	.nodes {
		display: grid;
		grid-template-columns: repeat(3, auto);
		justify-content: space-between;
		position: relative;
	}
	.nodes::before {
		content: '';
		position: absolute;
		left: 6px;
		right: 6px;
		top: 6px;
		height: 2px;
		background: linear-gradient(90deg, var(--gold), rgba(var(--glow-2-rgb), 0.3));
	}
	.nodes li {
		position: relative;
		display: grid;
		gap: 10px;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.nodes li:nth-child(2) {
		justify-items: center;
	}
	.nodes li:last-child {
		justify-items: end;
	}
	.nodes__dot {
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background: var(--gold);
		box-shadow: 0 0 0 5px rgba(var(--glow-2-rgb), 0.2);
	}
	.bridge__label {
		margin-bottom: 16px;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
	}
	.aims {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 10px;
	}
	.aim {
		display: grid;
		gap: 12px;
		align-content: start;
		padding: 18px;
		border-radius: 18px;
		background: rgba(245, 230, 211, 0.05);
		border: 1px solid var(--line-on-ink);
		font-weight: 700;
		font-size: 0.92rem;
		line-height: 1.3;
	}
	.bridge__closing {
		margin-top: clamp(40px, 6vw, 64px);
		max-width: 34ch;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.4rem, 2.6vw, 2rem);
		line-height: 1.25;
		color: var(--cream);
	}
	@media (max-width: 1000px) {
		.aims {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 900px) {
		.mission {
			grid-template-columns: 1fr;
		}
		.mission__head {
			position: static;
		}
	}
	@media (max-width: 600px) {
		.mission__list {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 900px) {
		.bridge__head {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 560px) {
		.aims {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 900px) {
		.zoe {
			grid-template-columns: 1fr;
		}
		.founder__grid {
			grid-template-columns: 1fr;
		}
		.founder__head {
			position: static;
		}
		.story {
			grid-template-columns: 1fr;
		}
		.story__head {
			position: static;
		}
	}
	@media (max-width: 480px) {
		.zoe__products ul {
			grid-template-columns: 1fr;
		}
	}
</style>
