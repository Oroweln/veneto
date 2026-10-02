<script lang="ts">
	import { PROVINCE_SHAPES, TOWNS } from '$lib/data/veneto-geo';

	let { size = 44 }: { size?: number } = $props();

	const shapes = Object.values(PROVINCE_SHAPES).map((s) => s.d);
	const capitals = Object.values(TOWNS).map((list) => list.find((t) => t.capital)!);
</script>

<span class="logo" style="--size: {size}px" aria-hidden="true">
	<svg viewBox="-60 -50 1120 1190">
		{#each shapes as d, i (i)}
			<path {d} />
		{/each}
		{#each capitals as c (c.name)}
			<circle cx={c.x} cy={c.y} r="34" />
		{/each}
	</svg>
</span>

<style>
	.logo {
		display: grid;
		place-items: center;
		flex: none;
		width: var(--size);
		height: var(--size);
		border-radius: calc(var(--size) * 0.26);
		background:
			radial-gradient(80% 80% at 30% 20%, rgba(var(--glow-rgb), 0.22), transparent 70%),
			var(--ink-2);
		box-shadow:
			inset 0 0 0 1px rgba(245, 230, 211, 0.28),
			0 8px 20px -10px rgba(0, 0, 0, 0.6);
	}
	svg {
		width: 74%;
		height: 74%;
	}
	path {
		fill: var(--vermilion);
		stroke: var(--ink-2);
		stroke-width: 10;
		stroke-linejoin: round;
	}
	circle {
		fill: var(--cream);
	}
</style>
