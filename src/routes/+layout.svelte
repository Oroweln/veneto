<script lang="ts">
	import '../app.css';
	import { isPublished, setI18n } from '$lib/i18n';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { data, children } = $props();

	const i18n = setI18n(() => data.lang);
</script>

<svelte:head>
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
	<link rel="icon" type="image/png" sizes="192x192" href="/favicon-192.png" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<a class="skip-link" href="#main">{i18n.t('common.skip')}</a>
{#if !isPublished(i18n.lang)}
	<p class="draft-notice" role="note">{i18n.t('common.draftNotice')}</p>
{/if}
<Navbar />
<main id="main">
	{@render children()}
</main>
<Footer />

<style>
	.draft-notice {
		padding: 8px var(--gutter);
		background: var(--apricot);
		color: var(--ink);
		font-size: 0.8rem;
		font-weight: 700;
		text-align: center;
	}
</style>
