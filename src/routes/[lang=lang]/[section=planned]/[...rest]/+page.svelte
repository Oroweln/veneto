<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import MapCard from '$lib/components/MapCard.svelte';
	import Logo from '$lib/components/Logo.svelte';
	import NextSteps from '$lib/components/NextSteps.svelte';

	let { data } = $props();
	const i18n = useI18n();
	const name = $derived(i18n.t(`sections.${data.key}.name`));
</script>

<Seo title={name} description={i18n.t(`sections.${data.key}.short`)} noindex />

<PageHero crumbs={[{ label: name }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('brand.name')}</p>
		<h1>{name}</h1>
		<p class="lede">{i18n.t(`sections.${data.key}.short`)}</p>
		<p class="status"><span class="live-dot"></span>{i18n.t('soon.status')}</p>
		<div class="actions">
			<a class="btn btn--primary btn--big" href={i18n.path('/register')}>{i18n.t('soon.register')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/')}>{i18n.t('soon.home')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<MapCard label={i18n.t('brand.name')} caption={i18n.t('brand.altStatement')} icon="star">
			<div class="mark"><Logo size={200} /></div>
		</MapCard>
	{/snippet}
</PageHero>

<NextSteps />

<style>
	.status {
		display: inline-flex;
		align-items: center;
		gap: 12px;
		padding: 10px 16px;
		border-radius: 999px;
		background: rgba(var(--glow-rgb), 0.12);
		border: 1px solid rgba(var(--glow-rgb), 0.4);
		font-weight: 700;
		font-size: 0.9rem;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
	}
	.mark {
		display: grid;
		place-items: center;
		padding: 20px;
	}
</style>
