<script lang="ts">
	import { page } from '$app/state';
	import { LANGS, localizePath, stripLang, useI18n } from '$lib/i18n';

	const i18n = useI18n();
	// Same page, other language: /en/territories/treviso ↔ /it/territories/treviso
	const rest = $derived(stripLang(page.url.pathname) + page.url.search);
</script>

<nav class="lang" aria-label={i18n.t('common.language')}>
	{#each LANGS as code (code)}
		<a
			href={localizePath(rest, code)}
			data-sveltekit-reload
			hreflang={code}
			lang={code}
			aria-current={i18n.lang === code ? 'true' : undefined}
			title={i18n.t(`common.languageNames.${code}`)}
		>
			{code.toUpperCase()}
		</a>
	{/each}
</nav>

<style>
	.lang {
		display: inline-flex;
		padding: 3px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
	}
	a {
		display: grid;
		place-items: center;
		min-width: 40px;
		height: 32px;
		padding: 0 10px;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-decoration: none;
		color: var(--text-on-ink-muted);
	}
	a:hover {
		color: var(--cream);
	}
	a[aria-current='true'] {
		background: var(--cream);
		color: var(--ink);
	}
</style>
