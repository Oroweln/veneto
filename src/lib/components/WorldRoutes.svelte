<script lang="ts">
	import { PROVINCE_SHAPES } from '$lib/data/veneto-geo';
	import { useI18n } from '$lib/i18n';

	/** Veneto at the centre, routes out to international hubs (west → east). Decorative unless `onpick` is set. */
	const DEFAULT_HUBS = ['saoPaulo', 'newYork', 'london', 'paris', 'munich', 'vienna', 'dubai', 'shanghai'];

	let {
		hubs: keys = DEFAULT_HUBS,
		featured,
		featuredNote,
		onpick
	}: {
		/** Hub keys (home.international.hubs.*), listed west → east. */
		hubs?: string[];
		/** Hub drawn highlighted, with a solid route. */
		featured?: string;
		/** Small line under the featured hub's name. */
		featuredNote?: string;
		/** Makes the hubs buttons: called with the hub key the visitor picks. */
		onpick?: (key: string) => void;
	} = $props();

	const i18n = useI18n();
	const uid = $props.id();

	const C = { x: 300, y: 318 };
	const hubs = $derived(keys.map((key, i) => {
		// Spread evenly over the upper arc, from 172° (west) to 10° (east).
		const deg = keys.length > 1 ? 172 - (162 * i) / (keys.length - 1) : 90;
		const a = (deg * Math.PI) / 180;
		const x = Math.round(C.x + 255 * Math.cos(a));
		const y = Math.round(C.y - 235 * Math.sin(a));
		// Curve bends outward so routes read as flight paths.
		const mx = (C.x + x) / 2;
		const my = (C.y + y) / 2 - 60;
		return {
			key,
			x,
			y,
			d: `M${C.x} ${C.y}Q${mx} ${my} ${x} ${y}`,
			right: x > C.x + 20,
			left: x < C.x - 20,
			featured: key === featured
		};
	}));

	const region = Object.values(PROVINCE_SHAPES).map((s) => s.d);
</script>

<svg class="routes" class:interactive={onpick} viewBox="-70 20 740 390" aria-hidden={onpick ? undefined : 'true'}>
	<defs>
		<linearGradient id="{uid}-copper" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#ecdcbb" />
			<stop offset="0.5" stop-color="#c4a477" />
			<stop offset="1" stop-color="#9c7f55" />
		</linearGradient>
	</defs>

	{#each [70, 130, 190] as r (r)}
		<ellipse class="orbit" cx={C.x} cy={C.y} rx={r * 1.25} ry={r} />
	{/each}

	{#each hubs as h, i (h.key)}
		<path class="route" class:route--featured={h.featured} d={h.d} />
		{#if h.featured && onpick}
			{#key h.key}<path class="route-draw" d={h.d} pathLength="1" />{/key}
		{/if}
		<path class="packet" d={h.d} style="animation-delay: {-i * 0.6}s" />
	{/each}

	{#each hubs as h (h.key)}
		<!-- tabindex is only set together with role="button" (interactive mode) -->
		<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
		<g
			transform="translate({h.x} {h.y})"
			class="hub-g"
			class:featured={h.featured}
			role={onpick ? 'button' : undefined}
			tabindex={onpick ? 0 : undefined}
			aria-pressed={onpick ? h.featured : undefined}
			aria-label={onpick ? i18n.t(`home.international.hubs.${h.key}`) : undefined}
			onclick={() => onpick?.(h.key)}
			onkeydown={(e) => {
				if (onpick && (e.key === 'Enter' || e.key === ' ')) {
					e.preventDefault();
					onpick(h.key);
				}
			}}
		>
			{#if onpick}<circle class="hit" r="26" />{/if}
			<circle class="hub-ring" r={h.featured ? 13 : 9} />
			<circle class="hub" r={h.featured ? 6.5 : 4.5} />
			<text
				class="label"
				x={(h.right ? 14 : h.left ? -14 : 0) * (h.featured ? 1.3 : 1)}
				y={h.right || h.left ? 4 : -16}
				text-anchor={h.right ? 'start' : h.left ? 'end' : 'middle'}
			>
				{i18n.t(`home.international.hubs.${h.key}`)}
			</text>
			{#if h.featured && featuredNote}
				<text
					class="note"
					x={h.right ? 18 : h.left ? -18 : 0}
					y={h.right || h.left ? 21 : 2}
					text-anchor={h.right ? 'start' : h.left ? 'end' : 'middle'}
				>
					{featuredNote}
				</text>
			{/if}
		</g>
	{/each}

	<g transform="translate({C.x - 34} {C.y - 40}) scale(0.068)">
		{#each region as d, i (i)}
			<path class="region" {d} fill="url(#{uid}-copper)" />
		{/each}
	</g>
	<text class="origin" x={C.x} y={C.y + 62} text-anchor="middle">{i18n.t('brand.region').toUpperCase()}</text>
</svg>

<style>
	.routes {
		width: 100%;
		height: auto;
		overflow: visible;
	}
	.orbit {
		fill: none;
		stroke: rgba(245, 230, 211, 0.1);
		stroke-dasharray: 2 6;
	}
	.route {
		fill: none;
		stroke: rgba(var(--glow-2-rgb), 0.45);
		stroke-width: 1.4;
		stroke-dasharray: 3 6;
		animation: dash 3.6s linear infinite;
	}
	.packet {
		fill: none;
		stroke: var(--vermilion);
		stroke-width: 5;
		stroke-linecap: round;
		stroke-dasharray: 1 900;
		stroke-dashoffset: 901;
		animation: travel 4.8s var(--ease) infinite;
	}
	@keyframes dash {
		to {
			stroke-dashoffset: -18;
		}
	}
	@keyframes travel {
		to {
			stroke-dashoffset: 0;
		}
	}
	.route--featured {
		stroke: var(--apricot);
		stroke-width: 2.2;
		stroke-dasharray: none;
	}
	.hub {
		fill: var(--cream);
	}
	.hub-ring {
		fill: none;
		stroke: rgba(245, 230, 211, 0.35);
	}
	.label {
		font-family: var(--font-sans);
		font-size: 12.5px;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		fill: var(--cream);
	}
	.featured .hub {
		fill: var(--apricot);
	}
	.featured .hub-ring {
		stroke: var(--apricot);
	}
	.featured .label {
		font-size: 15px;
		fill: var(--apricot);
	}
	.note {
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.06em;
		fill: var(--cream);
	}
	.region {
		stroke: var(--ink-2);
		stroke-width: 12;
		stroke-linejoin: round;
	}
	.origin {
		font-family: var(--font-sans);
		font-size: 13px;
		font-weight: 800;
		letter-spacing: 0.2em;
		fill: var(--apricot);
	}
	/* Interactive: hubs are buttons with a generous hit area */
	.hit {
		fill: transparent;
	}
	.interactive .hub-g {
		cursor: pointer;
		outline: none;
	}
	.interactive .hub-ring {
		transform-box: fill-box;
		transform-origin: center;
		transition:
			transform 0.3s var(--ease),
			stroke 0.3s;
	}
	.interactive .hub-g:not(.featured) .hub-ring {
		stroke-dasharray: 3 3;
		animation: spin 8s linear infinite;
	}
	.interactive .hub-g:hover .hub-ring,
	.interactive .hub-g:focus-visible .hub-ring {
		stroke: var(--apricot);
		transform: scale(1.5);
	}
	.interactive .hub-g:focus-visible .hit {
		stroke: var(--apricot);
		stroke-width: 1.5;
	}
	.interactive .hub-g:hover .label {
		fill: var(--apricot);
	}
	.route-draw {
		fill: none;
		stroke: var(--apricot);
		stroke-width: 3.2;
		stroke-linecap: round;
		stroke-dasharray: 1 1;
		animation: draw 0.9s var(--ease) both;
	}
	@keyframes draw {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes spin {
		to {
			transform: rotate(360deg);
		}
	}

	:global(.is-offscreen) .route,
	:global(.is-offscreen) .packet {
		animation-play-state: paused;
	}
	@media (prefers-reduced-motion: reduce) {
		.packet {
			display: none;
		}
	}
</style>
