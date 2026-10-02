<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { IconName } from './icons';
	import Icon from './Icon.svelte';

	let {
		caption,
		label,
		icon = 'pin',
		children
	}: { caption?: string; label?: string; icon?: IconName; children: Snippet } = $props();
</script>

<figure class="mapcard grid-texture ink-scope">
	<div class="art">
		{@render children()}
	</div>
	{#if caption || label}
		<figcaption>
			<span class="disc disc--sm"><Icon name={icon} size={16} /></span>
			<span>
				{#if label}<span class="label">{label}</span>{/if}
				{#if caption}<span class="caption">{caption}</span>{/if}
			</span>
		</figcaption>
	{/if}
</figure>

<style>
	.mapcard {
		position: relative;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
		padding: clamp(20px, 3vw, 32px);
		border-radius: 26px;
		background-color: var(--ink-2);
		color: var(--cream);
		overflow: hidden;
		box-shadow: var(--shadow-dark);
		isolation: isolate;
	}
	.mapcard::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: radial-gradient(60% 55% at 60% 40%, rgba(var(--glow-rgb), 0.22), transparent 70%);
	}
	.mapcard::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4px;
		background: var(--metal-copper);
	}
	.art {
		flex: 1;
		display: grid;
		place-items: center;
		min-height: 260px;
	}
	.art :global(svg) {
		max-height: 380px;
	}
	figcaption {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.label {
		display: block;
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.caption {
		display: block;
		font-weight: 700;
		font-size: 0.95rem;
	}
</style>
