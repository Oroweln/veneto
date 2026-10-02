<script lang="ts">
	import { page } from '$app/state';
	import { useI18n } from '$lib/i18n';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import NextSteps from '$lib/components/NextSteps.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();
	const notFound = $derived(page.status === 404);
</script>

<Seo title={notFound ? i18n.t('error.notFound') : i18n.t('error.generic')} description={i18n.t('error.text')} noindex />

<PageHero>
	{#snippet copy()}
		<p class="code" aria-hidden="true">{page.status}</p>
		<h1>{notFound ? i18n.t('error.notFound') : i18n.t('error.generic')}</h1>
		<p class="lede">{notFound ? i18n.t('error.text') : i18n.t('error.textGeneric')}</p>
		<form class="search" action={i18n.path('/search')} method="get" role="search">
			<label class="sr-only" for="err-q">{i18n.t('nav.search')}</label>
			<Icon name="search" size={18} />
			<input id="err-q" name="q" type="search" placeholder={i18n.t('home.search.placeholder')} />
		</form>
		<a class="btn btn--primary btn--big" href={i18n.path('/')}>{i18n.t('soon.home')} <span class="arrow">→</span></a>
	{/snippet}
</PageHero>

<NextSteps />

<style>
	.code {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(5rem, 14vw, 10rem);
		line-height: 0.9;
		color: transparent;
		-webkit-text-stroke: 2px var(--vermilion);
	}
	.search {
		display: flex;
		align-items: center;
		gap: 10px;
		width: min(100%, 480px);
		height: 54px;
		padding: 0 18px;
		border-radius: 999px;
		background: var(--cream);
		color: var(--vermilion-deep);
	}
	.search input {
		flex: 1;
		min-width: 0;
		border: 0;
		background: transparent;
		color: var(--ink);
		font-weight: 600;
	}
	.search input:focus {
		outline: none;
	}
	.search:focus-within {
		outline: 3px solid var(--apricot);
		outline-offset: 3px;
	}
</style>
