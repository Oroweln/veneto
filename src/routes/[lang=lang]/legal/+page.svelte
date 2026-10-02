<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import type { IconName } from '$lib/components/icons';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();
	/** Statement clauses, in order. Text: legalPage.clauses.{key}. */
	const CLAUSES: { key: string; icon: IconName }[] = [
		{ key: 'independent', icon: 'shield' },
		{ key: 'notOfficial', icon: 'building' },
		{ key: 'funding', icon: 'euro' },
		{ key: 'noGuarantee', icon: 'target' },
		{ key: 'services', icon: 'briefcase' }
	];
</script>

<Seo title={i18n.t('legalPage.seo.title')} description={i18n.t('legalPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.legal.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('legalPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('legalPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('legalPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('legalPage.clauses.independent.text')}</p>
	{/snippet}
</PageHero>

<section class="section">
	<div class="container">
		<ol class="clauses">
			{#each CLAUSES as c, i (c.key)}
				<li class="clause" use:reveal={i * 40}>
					<span class="clause__num">{String(i + 1).padStart(2, '0')}</span>
					<span class="disc"><Icon name={c.icon} size={20} /></span>
					<div class="clause__body">
						<h2 class="clause__title">{i18n.t(`legalPage.clauses.${c.key}.title`)}</h2>
						<p>{i18n.t(`legalPage.clauses.${c.key}.text`)}</p>
					</div>
				</li>
			{/each}
		</ol>
		<p class="contact" use:reveal>
			{i18n.t('legalPage.contact')}
			<a href={i18n.path('/contact?reason=general')}>{i18n.t('sections.contact.name')}</a>
		</p>
	</div>
</section>

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
	.clauses {
		display: grid;
		gap: 14px;
		max-width: 920px;
	}
	.clause {
		display: grid;
		grid-template-columns: auto auto 1fr;
		gap: 18px;
		align-items: start;
		padding: 24px 26px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.clause__num {
		padding-top: 10px;
		font-size: 0.74rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		color: var(--burgundy);
	}
	.clause__body {
		display: grid;
		gap: 8px;
	}
	.clause__title {
		font-size: 1.3rem;
		line-height: 1.2;
	}
	.clause__body p {
		color: var(--text-muted);
		line-height: 1.65;
	}
	.contact {
		margin-top: 32px;
		color: var(--text-muted);
	}
	.contact a {
		font-weight: 800;
		color: var(--burgundy);
	}
	@media (max-width: 560px) {
		.clause {
			grid-template-columns: auto 1fr;
		}
		.clause__num {
			display: none;
		}
	}
</style>
