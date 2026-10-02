<script lang="ts">
	import { page } from '$app/state';
	import { DEFAULT_LANG, isPublished, LANGS, localizePath, stripLang, useI18n } from '$lib/i18n';

	let {
		title,
		description,
		noindex = false
	}: { title: string; description: string; noindex?: boolean } = $props();

	const i18n = useI18n();
	const SITE = 'https://veneto.app';
	const brand = $derived(i18n.t('brand.name'));
	const fullTitle = $derived(title.includes(brand) ? title : `${title} · ${brand}`);
	const rest = $derived(stripLang(page.url.pathname));
	const url = $derived(SITE + localizePath(rest, i18n.lang));
	// Draft languages stay out of search engines until professionally reviewed.
	const hidden = $derived(noindex || !isPublished(i18n.lang));
	const alternates = $derived(LANGS.filter(isPublished));
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />
	{#if hidden}<meta name="robots" content="noindex, follow" />{/if}
	{#if !noindex}
		{#each alternates as code (code)}
			<link rel="alternate" hreflang={code} href={SITE + localizePath(rest, code)} />
		{/each}
		<link rel="alternate" hreflang="x-default" href={SITE + localizePath(rest, DEFAULT_LANG)} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={brand} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:locale" content={i18n.lang === 'it' ? 'it_IT' : 'en_GB'} />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>
