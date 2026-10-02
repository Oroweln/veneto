<script lang="ts">
	import { useI18n } from '$lib/i18n';

	const i18n = useI18n();
</script>

<div class="badges" role="group" aria-label={i18n.t('common.appSoon')}>
	{#each ['App Store', 'Google Play'] as store (store)}
		<span class="store">
			<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
				{#if store === 'App Store'}
					<path fill="currentColor" d="M16.4 12.6c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.1-2.8.9-3.5.9-.7 0-1.9-.9-3.1-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.2 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.3-2.6 1.3-2.6s-2.4-1-2.4-3.8ZM14.1 5.8c.6-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.1 1.8-1 2.9 1 .1 2.1-.5 2.7-1.3Z" />
				{:else}
					<path fill="currentColor" d="M4 3.3v17.4c0 .4.4.6.7.4l10-8.7c.3-.2.3-.6 0-.8l-10-8.7c-.3-.2-.7 0-.7.4Zm12.3 6.9 2.9-1.7c.6-.3.6-1.2 0-1.5L6.5 0.7l9.8 9.5Zm0 3.6-9.8 9.5 12.7-6.3c.6-.3.6-1.2 0-1.5l-2.9-1.7Z" />
				{/if}
			</svg>
			<span class="txt"><small>{i18n.t('common.appSoon')}</small>{store}</span>
		</span>
	{/each}
</div>

<style>
	.badges {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}
	.store {
		display: inline-flex;
		align-items: center;
		gap: 9px;
		height: 44px;
		padding: 0 14px 0 12px;
		border-radius: 12px;
		border: 1px solid var(--line-on-ink);
		background: rgba(0, 0, 0, 0.25);
		color: var(--cream);
		opacity: 0.85;
	}
	.txt {
		display: grid;
		line-height: 1.1;
		font-size: 0.86rem;
		font-weight: 700;
	}
	small {
		font-size: 0.58rem;
		font-weight: 700;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
	}
</style>
