<script lang="ts">
	import { PROVINCE_SHAPES, TOWNS, type Town } from '$lib/data/veneto-geo';
	import { PROVINCES, type ProvinceCode } from '$lib/data/provinces';

	let {
		code,
		town,
		towns = false,
		context = true,
		tone = 'metal',
		labels = true,
		title
	}: {
		code: ProvinceCode;
		/** Town to light up (pulsing dot). Defaults to the capital. */
		town?: string;
		/** Show the province's main towns with labels where they fit. */
		towns?: boolean;
		/** Draw the neighbouring provinces faintly. */
		context?: boolean;
		tone?: 'metal' | 'outline';
		/** Set false for small covers where text would be unreadable. */
		labels?: boolean;
		title?: string;
	} = $props();

	const uid = $props.id();

	const shape = $derived(PROVINCE_SHAPES[code]);
	const box = $derived.by(() => {
		const [x1, y1, x2, y2] = shape.bbox;
		const w = x2 - x1;
		const h = y2 - y1;
		const p = Math.max(w, h) * 0.12;
		return { x: x1 - p, y: y1 - p, w: w + 2 * p, h: h + 2 * p, span: Math.max(w, h) + 2 * p, right: x2 };
	});

	const allTowns = $derived(TOWNS[code] ?? []);
	const litName = $derived(town ?? allTowns.find((t) => t.capital)?.name);

	const fs = $derived(box.span * 0.038);
	const r = $derived(box.span * 0.014);

	type Rect = { x1: number; y1: number; x2: number; y2: number };
	const overlaps = (a: Rect, b: Rect) => a.x1 < b.x2 && b.x1 < a.x2 && a.y1 < b.y2 && b.y1 < a.y2;

	// Dots are always drawn; a label is shown only if its box hits no other label or dot.
	// The capital and the lit town are placed first so they always get their name.
	const placed = $derived.by(() => {
		const shown = towns ? allTowns : allTowns.filter((t) => t.name === litName);
		const rank = (t: Town) => (t.capital ? 2 : 0) + (t.name === litName ? 1 : 0);
		const ordered = [...shown].sort((a, b) => rank(b) - rank(a));
		const dots: Rect[] = shown.map((t) => ({ x1: t.x - r, y1: t.y - r, x2: t.x + r, y2: t.y + r }));
		const taken: Rect[] = [];
		return ordered.map((t) => {
			const lit = t.name === litName;
			const size = t.capital ? fs : fs * 0.82;
			const width = t.name.length * size * (t.capital ? 0.72 : 0.58);
			const end = t.x + r * 2 + width > box.x + box.w;
			const x1 = end ? t.x - r * 2 - width : t.x + r * 2;
			const rect = { x1, y1: t.y - size * 0.7, x2: x1 + width, y2: t.y + size * 0.45 };
			const own = (d: Rect) => d.x1 === t.x - r && d.y1 === t.y - r;
			const free =
				!taken.some((o) => overlaps(o, rect)) && !dots.some((d) => !own(d) && overlaps(d, rect));
			const label = t.capital || lit || free;
			if (label) taken.push(rect);
			return { ...t, label, lit, end, size };
		});
	});
</script>

<svg
	class="pmap tone-{tone}"
	viewBox="{box.x} {box.y} {box.w} {box.h}"
	role={title ? 'img' : undefined}
	aria-label={title}
	aria-hidden={title ? undefined : 'true'}
>
	<defs>
		<linearGradient id="{uid}-metal" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#fff1e0" />
			<stop offset="0.35" stop-color="#e8cdb0" />
			<stop offset="0.6" stop-color="#f2dcc3" />
			<stop offset="1" stop-color="#b08c6c" />
		</linearGradient>
	</defs>

	{#if context}
		{#each PROVINCES.filter((p) => p.code !== code) as p (p.code)}
			<path class="neighbour" d={PROVINCE_SHAPES[p.code].d} stroke-width={box.span * 0.003} />
		{/each}
	{/if}

	<path
		class="shape"
		d={shape.d}
		fill={tone === 'metal' ? `url(#${uid}-metal)` : undefined}
		stroke-width={box.span * 0.004}
	/>

	{#each placed as t (t.name)}
		<g transform="translate({t.x} {t.y})">
			{#if t.lit}
				<circle class="ring" r={r * 1.4} stroke-width={r * 0.4} />
			{/if}
			<circle class="dot" class:lit={t.lit} r={t.lit ? r : r * 0.7} stroke-width={r * 0.35} />
		</g>
		{#if labels && t.label}
			<text
				class="label"
				class:capital={t.capital}
				x={t.end ? t.x - r * 2 : t.x + r * 2}
				y={t.y + t.size * 0.35}
				font-size={t.size}
				stroke-width={t.size * 0.22}
				text-anchor={t.end ? 'end' : 'start'}
			>
				{t.capital ? t.name.toUpperCase() : t.name}
			</text>
		{/if}
	{/each}
</svg>

<style>
	.pmap {
		width: 100%;
		height: 100%;
		overflow: visible;
	}
	.neighbour {
		fill: rgba(245, 230, 211, 0.05);
		stroke: rgba(245, 230, 211, 0.16);
	}
	.tone-outline .neighbour {
		fill: none;
		stroke: rgba(36, 26, 23, 0.1);
	}
	.shape {
		stroke: rgba(255, 246, 234, 0.9);
		stroke-linejoin: round;
		filter: drop-shadow(0 14px 22px rgba(0, 0, 0, 0.35));
	}
	.tone-outline .shape {
		fill: rgba(var(--glow-rgb), 0.05);
		stroke: rgba(36, 26, 23, 0.5);
		filter: none;
	}
	.dot {
		fill: var(--ink-2);
		stroke: var(--cream);
	}
	.dot.lit {
		fill: var(--vermilion);
		stroke: var(--ink);
	}
	.tone-outline .dot:not(.lit) {
		fill: var(--ink);
		stroke: var(--paper);
	}
	.tone-outline .dot.lit {
		stroke: var(--paper);
	}
	.ring {
		fill: none;
		stroke: var(--vermilion);
		transform-box: fill-box;
		transform-origin: center;
		animation: pulse 2.4s ease-out infinite;
	}
	@keyframes pulse {
		from {
			transform: scale(0.8);
			opacity: 0.9;
		}
		to {
			transform: scale(2.4);
			opacity: 0;
		}
	}
	.label {
		font-family: var(--font-sans);
		font-weight: 700;
		fill: var(--ink);
		paint-order: stroke;
		stroke: rgba(255, 246, 234, 0.85);
		stroke-linejoin: round;
	}
	.label.capital {
		font-weight: 800;
		letter-spacing: 0.06em;
		fill: var(--vermilion-deep);
	}
	:global(.is-offscreen) .ring {
		animation-play-state: paused;
	}
</style>
