<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import Icon from './Icon.svelte';

	/** Pill above an interactive illustration. Pulses until the visitor has used it. */
	let { hint, done = false }: { hint: string; done?: boolean } = $props();

	const i18n = useI18n();
</script>

<p class="try" class:done>
	<span class="try__icon"><Icon name="pointer" size={13} stroke={2} /></span>
	<span class="try__label">{i18n.t('common.try.label')}</span>
	<span class="try__hint">{hint}</span>
</p>

<style>
	.try {
		position: relative;
		z-index: 4;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		width: fit-content;
		margin: 0 0 32px;
		padding: 5px 13px 5px 5px;
		border-radius: 999px;
		background: rgba(36, 26, 23, 0.6);
		border: 1px solid var(--line-on-ink);
		backdrop-filter: blur(6px);
		font-size: 0.74rem;
		font-weight: 700;
		color: var(--cream);
	}
	.try__icon {
		position: relative;
		display: grid;
		place-items: center;
		width: 24px;
		height: 24px;
		border-radius: 50%;
		background: var(--apricot);
		color: var(--ink);
	}
	.try__icon::after {
		content: '';
		position: absolute;
		inset: -3px;
		border-radius: 50%;
		border: 2px solid var(--apricot);
		animation: try-ping 1.8s ease-out infinite;
	}
	.done .try__icon::after {
		animation: none;
		opacity: 0;
	}
	.try__label {
		font-size: 0.64rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.try__hint {
		color: var(--text-on-ink-muted);
	}
	@keyframes try-ping {
		0% {
			transform: scale(0.8);
			opacity: 0.9;
		}
		100% {
			transform: scale(1.7);
			opacity: 0;
		}
	}
	:global(.is-offscreen) .try__icon::after {
		animation-play-state: paused;
	}
</style>
