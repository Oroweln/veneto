<script lang="ts">
	import { onscreen } from '$lib/actions/reveal';

	let { items, label }: { items: string[]; label: string } = $props();
</script>

<!-- Horizontal moving text. The visible copy is decorative; the list is read once by screen readers. -->
<div class="ticker" use:onscreen>
	<p class="sr-only">{label}: {items.join(', ')}</p>
	<div class="track" aria-hidden="true">
		{#each [0, 1] as copy (copy)}
			<div class="run">
				{#each items as item, i (i)}
					<span class="item">{item}</span>
					<span class="sep">✦</span>
				{/each}
			</div>
		{/each}
	</div>
</div>

<style>
	.ticker {
		overflow: hidden;
		background: var(--metal-copper);
		background-size: 200% 100%;
		color: var(--on-accent);
		border-block: 1px solid rgba(36, 26, 23, 0.25);
	}
	.track {
		display: flex;
		width: max-content;
		animation: run 38s linear infinite;
	}
	.run {
		display: flex;
		align-items: center;
		gap: 28px;
		padding: 16px 14px;
	}
	.item {
		font-family: var(--font-billboard);
		font-weight: 800;
		font-style: italic;
		font-size: clamp(1.3rem, 2.6vw, 1.8rem);
		letter-spacing: 0.02em;
		text-transform: uppercase;
		white-space: nowrap;
	}
	.sep {
		font-size: 0.8rem;
		opacity: 0.6;
	}
	@keyframes run {
		to {
			transform: translateX(-50%);
		}
	}
	.ticker:global(.is-offscreen) .track,
	.ticker:hover .track {
		animation-play-state: paused;
	}
	@media (prefers-reduced-motion: reduce) {
		.track {
			animation: none;
		}
	}
</style>
