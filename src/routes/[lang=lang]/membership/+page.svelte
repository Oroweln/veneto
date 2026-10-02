<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();

	/** Plans in order. `features` = number of items in membershipPage.plans.{key}.features (f1…fn). */
	const PLANS = [
		{ key: 'free', features: 7 },
		{ key: 'region', features: 10 },
		{ key: 'business', features: 11 },
		{ key: 'ecosystem', features: 8, dark: true }
	];
	/** Payment, in order. Text: membershipPage.payment.steps.{key}. */
	const PAYMENT = [
		{ key: 'transfer', icon: 'euro' },
		{ key: 'receipt', icon: 'news' },
		{ key: 'activation', icon: 'check' }
	] as const;
	const PLATFORMS = ['Veneto.app', 'Lombardia.app', 'LazioItalia.app', 'Liguria.app', 'Montalcino.app', 'Sannio.app'];
	const signup = (plan: string) => `${i18n.path('/register')}?plan=${plan}`;
</script>

<Seo title={i18n.t('membershipPage.seo.title')} description={i18n.t('membershipPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.platform.name'), href: '/platform' }, { label: i18n.t('sections.membership.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('membershipPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('membershipPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('membershipPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('membershipPage.hero.text')}</p>
	{/snippet}
</PageHero>

<section class="section" id="plans" use:onscreen>
	<div class="container">
		<ul class="plans">
			{#each PLANS as p, i (p.key)}
				<li class="plan" class:plan--dark={p.dark} class:on-ink={p.dark} use:reveal={i * 60}>
					<div class="plan__head">
						<p class="plan__name"><span class="plan__z">Z</span>{i18n.t(`membershipPage.plans.${p.key}.name`)}</p>
						<p class="plan__price">
							<strong>{i18n.t(`membershipPage.plans.${p.key}.price`)}</strong>
							{#if p.key !== 'free'}<span>{i18n.t('membershipPage.perYear')}</span>{/if}
						</p>
						<p class="plan__for">{i18n.t(`membershipPage.plans.${p.key}.for`)}</p>
					</div>
					<a class="btn {p.key === 'free' ? 'btn--outline' : 'btn--primary'} plan__cta" href={signup(p.key)}>
						{i18n.t(`membershipPage.plans.${p.key}.cta`)} <span class="arrow">→</span>
					</a>
					<p class="plan__includes">{i18n.t('membershipPage.includes')}</p>
					<ul class="plan__features">
						{#each Array.from({ length: p.features }, (_, n) => `f${n + 1}`) as f (f)}
							<li><Icon name="check" size={15} />{i18n.t(`membershipPage.plans.${p.key}.features.${f}`)}</li>
						{/each}
					</ul>
					{#if p.key === 'ecosystem'}
						<div class="plan__platforms">
							<p class="plan__includes">{i18n.t('membershipPage.platformsTitle')}</p>
							<ul>
								{#each PLATFORMS as name (name)}<li>{name}</li>{/each}
								<li class="future">{i18n.t('membershipPage.futurePlatforms')}</li>
							</ul>
						</div>
					{/if}
				</li>
			{/each}
		</ul>
		<p class="note" style="margin-top: 20px">{i18n.t('membershipPage.note')}</p>
	</div>
</section>

<!-- PAYMENT INFORMATION -->
<section class="section section--surface" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker">{i18n.t('membershipPage.payment.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('membershipPage.payment.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('membershipPage.payment.lede')}</p>
		</div>
		<ol class="pay">
			{#each PAYMENT as s, i (s.key)}
				<li class="pay__step" use:reveal={i * 60}>
					<span class="pay__num">{i + 1}</span>
					<span class="disc"><Icon name={s.icon} size={20} /></span>
					<h3>{i18n.t(`membershipPage.payment.steps.${s.key}.title`)}</h3>
					<p>{i18n.t(`membershipPage.payment.steps.${s.key}.text`)}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<ClosingBand
	title={i18n.t('membershipPage.closing.title')}
	text={i18n.t('membershipPage.closing.text')}
	cta={i18n.t('membershipPage.plans.free.cta')}
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

	.plans {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: 14px;
		align-items: start;
	}
	.plan {
		display: grid;
		gap: 18px;
		padding: 26px 22px;
		border-radius: 26px;
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.plan--dark {
		background:
			radial-gradient(70% 40% at 100% 0%, rgba(var(--glow-2-rgb), 0.18), transparent 70%),
			var(--ink-2);
		border-color: transparent;
		color: var(--cream);
		box-shadow: var(--shadow-light);
	}
	.plan__head {
		display: grid;
		gap: 10px;
	}
	.plan__name {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.8rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
	}
	.plan__z {
		display: grid;
		place-items: center;
		width: 30px;
		height: 30px;
		border-radius: 8px;
		background: var(--burgundy);
		color: var(--gold);
		font-family: var(--font-display);
		font-size: 1.1rem;
		letter-spacing: 0;
	}
	.plan--dark .plan__z {
		background: var(--metal-gold);
		color: var(--ink);
	}
	.plan__price {
		display: flex;
		align-items: baseline;
		gap: 8px;
	}
	.plan__price strong {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(2.2rem, 3.4vw, 2.9rem);
		line-height: 1;
	}
	.plan__price span {
		font-size: 0.85rem;
		font-weight: 700;
		color: var(--text-muted);
	}
	.plan--dark .plan__price span,
	.plan--dark .plan__for {
		color: var(--text-on-ink-muted);
	}
	.plan__for {
		min-height: 4.8em;
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.plan__cta {
		justify-content: center;
		min-height: 48px;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-size: 0.82rem;
	}
	.plan__includes {
		padding-top: 16px;
		border-top: 1px solid var(--line);
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--text-muted);
	}
	.plan--dark .plan__includes {
		border-color: var(--line-on-ink);
		color: var(--gold);
	}
	.plan__features {
		display: grid;
		gap: 9px;
		margin-top: -6px;
	}
	.plan__features li {
		display: flex;
		gap: 9px;
		align-items: flex-start;
		font-size: 0.88rem;
		font-weight: 600;
		line-height: 1.4;
	}
	.plan__features :global(svg) {
		flex: none;
		margin-top: 2px;
		color: var(--vermilion);
	}
	.plan__platforms {
		display: grid;
		gap: 10px;
	}
	.plan__platforms ul {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.plan__platforms li {
		padding: 4px 10px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		font-size: 0.74rem;
		font-weight: 700;
	}
	.plan__platforms li.future {
		border-style: dashed;
		color: var(--text-on-ink-muted);
	}
	.pay {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}
	.pay__step {
		position: relative;
		display: grid;
		gap: 12px;
		justify-items: start;
		align-content: start;
		padding: 26px 24px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--paper);
	}
	.pay__num {
		position: absolute;
		top: 18px;
		right: 22px;
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 2.4rem;
		line-height: 1;
		color: var(--line);
	}
	.pay__step h3 {
		font-size: 1.3rem;
	}
	.pay__step p {
		color: var(--text-muted);
	}
	@media (max-width: 900px) {
		.pay {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 1100px) {
		.plans {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (max-width: 640px) {
		.plans {
			grid-template-columns: 1fr;
		}
		.plan__for {
			min-height: 0;
		}
	}
</style>
