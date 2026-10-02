<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		tone = 'vermilion',
		delay = 0,
		style = '',
		hideOnPhone = false,
		children
	}: {
		tone?: 'vermilion' | 'apricot' | 'ink';
		delay?: number;
		style?: string;
		/** Hide below 640px where the stage is too small for every chip. */
		hideOnPhone?: boolean;
		children: Snippet;
	} = $props();
</script>

<span class="chip" class:hide-phone={hideOnPhone} style="animation-delay: {delay}s; {style}">
	<i class="dot dot--{tone}"></i>
	<span>{@render children()}</span>
</span>

<style>
	.chip {
		position: absolute;
		z-index: 3;
		display: inline-flex;
		align-items: center;
		gap: 9px;
		padding: 9px 15px 9px 12px;
		border-radius: 999px;
		background: var(--cream);
		color: var(--ink);
		font-size: 0.8rem;
		font-weight: 700;
		line-height: 1.2;
		white-space: nowrap;
		box-shadow: 0 18px 36px -16px rgba(0, 0, 0, 0.6);
		animation: float 6s ease-in-out infinite;
	}
	.chip :global(strong) {
		font-weight: 800;
	}
	.dot {
		width: 9px;
		height: 9px;
		border-radius: 50%;
		flex: none;
	}
	.dot--vermilion {
		background: var(--vermilion);
	}
	.dot--apricot {
		background: var(--apricot);
	}
	.dot--ink {
		background: var(--ink-3);
	}
	@keyframes float {
		0%,
		100% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
	}
	:global(.is-offscreen) .chip {
		animation-play-state: paused;
	}
	@media (max-width: 640px) {
		.hide-phone {
			display: none;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.chip {
			animation: none;
		}
	}
</style>
