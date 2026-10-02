<script lang="ts">
	import { PROVINCE_SHAPES, REGION_VIEWBOX, TOWNS } from '$lib/data/veneto-geo';
	import { PROVINCE_BY_CODE, PROVINCES, type ProvinceCode } from '$lib/data/provinces';
	import { useI18n } from '$lib/i18n';

	type Tone = 'metal' | 'outline' | 'copper' | 'watermark';

	let {
		tone = 'metal',
		highlight = null,
		capitals = true,
		labels = false,
		flows = false,
		links = false,
		intro = false,
		onhover,
		title
	}: {
		tone?: Tone;
		highlight?: ProvinceCode | null;
		capitals?: boolean;
		labels?: boolean;
		/** "Veneto moves": animated routes between the capitals and out to the world. */
		flows?: boolean;
		links?: boolean;
		/** Entrance animation on first paint: provinces draw in, then capitals, labels and routes. */
		intro?: boolean;
		onhover?: (code: ProvinceCode | null) => void;
		title?: string;
	} = $props();

	const i18n = useI18n();

	const uid = $props.id();
	const codes = PROVINCES.map((p) => p.code);
	const capitalOf = (code: ProvinceCode) => TOWNS[code].find((t) => t.capital)!;

	const ROUTES: [ProvinceCode, ProvinceCode][] = [
		['VR', 'VI'],
		['VI', 'PD'],
		['PD', 'VE'],
		['VE', 'TV'],
		['TV', 'BL'],
		['PD', 'RO'],
		['VR', 'RO'],
		['VI', 'TV'],
		['VI', 'BL'],
		['PD', 'TV'],
		['VR', 'PD']
	];

	function curve(a: { x: number; y: number }, b: { x: number; y: number }, bend = 0.18) {
		const mx = (a.x + b.x) / 2;
		const my = (a.y + b.y) / 2;
		const dx = b.x - a.x;
		const dy = b.y - a.y;
		return `M${a.x} ${a.y}Q${mx - dy * bend} ${my + dx * bend} ${b.x} ${b.y}`;
	}

	// Routes leaving the region: north to Europe, east over the Adriatic, south to the Mediterranean.
	const OUTBOUND = $derived.by(() => {
		const vr = capitalOf('VR');
		const bl = capitalOf('BL');
		const ve = capitalOf('VE');
		const ro = capitalOf('RO');
		return [
			{ d: curve(vr, { x: vr.x - 40, y: -40 }, -0.12), key: 'europe', x: vr.x - 40, y: -56, anchor: 'middle' },
			{ d: curve(bl, { x: bl.x + 110, y: -40 }, 0.1), key: 'europe', x: bl.x + 110, y: -56, anchor: 'middle', hideLabel: true },
			{ d: curve(ve, { x: 1150, y: ve.y - 90 }, 0.12), key: 'world', x: 1158, y: ve.y - 104, anchor: 'end' },
			{ d: curve(ro, { x: ro.x + 260, y: 1160 }, -0.1), key: 'mediterranean', x: ro.x + 260, y: 1176, anchor: 'middle' }
		];
	});

	const pad = $derived(flows ? { x: -150, y: -90, w: 1320, h: 1290 } : { x: -6, y: -6, w: 1012, h: 1100 });
</script>

<svg
	class="map tone-{tone}"
	class:has-highlight={highlight !== null}
	class:intro
	viewBox="{pad.x} {pad.y} {pad.w} {pad.h}"
	role={title ? 'img' : undefined}
	aria-label={title}
	aria-hidden={title ? undefined : 'true'}
	style="--ratio: {REGION_VIEWBOX.w / REGION_VIEWBOX.h}"
>
	<defs>
		<linearGradient id="{uid}-metal" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#fff1e0" />
			<stop offset="0.35" stop-color="#e8cdb0" />
			<stop offset="0.6" stop-color="#f2dcc3" />
			<stop offset="1" stop-color="#b08c6c" />
		</linearGradient>
		<linearGradient id="{uid}-copper" x1="0" y1="0" x2="1" y2="1">
			<stop offset="0" stop-color="#ecdcbb" />
			<stop offset="0.45" stop-color="#c4a477" />
			<stop offset="1" stop-color="#9c7f55" />
		</linearGradient>
	</defs>

	<g class="provinces">
		{#each codes as code, i (code)}
			{@const lit = highlight === code}
			{#if links}
				<a
					href={i18n.path(`/territories/${PROVINCE_BY_CODE[code].id}`)}
					aria-label={PROVINCE_BY_CODE[code].name}
					onmouseenter={() => onhover?.(code)}
					onmouseleave={() => onhover?.(null)}
					onfocus={() => onhover?.(code)}
					onblur={() => onhover?.(null)}
				>
					<path
						class="prov"
						class:lit
						d={PROVINCE_SHAPES[code].d}
						pathLength={intro ? 1 : undefined}
						style="--i: {i}"
						fill={lit ? `url(#${uid}-copper)` : tone === 'metal' ? `url(#${uid}-metal)` : undefined}
					/>
				</a>
			{:else}
				<path
					class="prov"
					class:lit
					d={PROVINCE_SHAPES[code].d}
					pathLength={intro ? 1 : undefined}
					style="--i: {i}"
					fill={lit ? `url(#${uid}-copper)` : tone === 'metal' ? `url(#${uid}-metal)` : undefined}
				/>
			{/if}
		{/each}
	</g>

	{#if flows}
		<g class="flows">
			{#each ROUTES as [a, b], i (a + b)}
				<path class="route" d={curve(capitalOf(a), capitalOf(b), i % 2 ? 0.16 : -0.16)} />
				<path
					class="packet"
					d={curve(capitalOf(a), capitalOf(b), i % 2 ? 0.16 : -0.16)}
					style="animation-delay: {-i * 0.7}s"
				/>
			{/each}
			{#each OUTBOUND as out, i (i)}
				<path class="route route--out" d={out.d} />
				<path class="packet packet--out" d={out.d} style="animation-delay: {-i * 1.1}s" />
				{#if !out.hideLabel}
					<text class="out-label" x={out.x} y={out.y} text-anchor={out.anchor}>
						{i18n.t(`home.hero.${out.key}`)}
					</text>
				{/if}
			{/each}
		</g>
	{/if}

	{#if capitals}
		<g class="capitals">
			{#each codes as code, i (code)}
				{@const c = capitalOf(code)}
				{@const lit = highlight === code || (flows && highlight === null)}
				<g transform="translate({c.x} {c.y})" class="cap" class:lit style="--i: {i}">
					{#if lit}<circle class="ring" r="11" />{/if}
					<circle class="dot" r={tone === 'watermark' ? 6 : 8} />
				</g>
				{#if labels}
					<text
						class="cap-label"
						class:lit={highlight === code}
						x={c.x + 16}
						y={c.y + 7}
						style="--i: {i}"
					>
						{c.name.toUpperCase()}
					</text>
				{/if}
			{/each}
		</g>
	{/if}
</svg>

<style>
	.map {
		width: 100%;
		height: auto;
		overflow: visible;
	}
	.prov {
		stroke-linejoin: round;
		transition:
			opacity 0.35s,
			fill 0.35s;
	}
	.tone-metal .prov {
		stroke: rgba(245, 230, 211, 0.85);
		stroke-width: 2;
	}
	.tone-metal.has-highlight .prov:not(.lit) {
		opacity: 0.55;
	}
	.tone-outline .prov {
		fill: rgba(var(--glow-rgb), 0.04);
		stroke: rgba(36, 26, 23, 0.35);
		stroke-width: 2;
	}
	.tone-outline .prov.lit {
		stroke: var(--vermilion-deep);
	}
	.tone-copper .prov {
		fill: var(--vermilion);
		stroke: var(--ink);
		stroke-width: 6;
	}
	.tone-watermark .prov {
		fill: rgba(245, 230, 211, 0.04);
		stroke: rgba(245, 230, 211, 0.16);
		stroke-width: 2;
	}
	a:hover .prov:not(.lit),
	a:focus-visible .prov:not(.lit) {
		opacity: 1;
		filter: brightness(1.08);
	}
	a:focus-visible {
		outline: none;
	}
	a:focus-visible .prov {
		stroke: var(--vermilion);
		stroke-width: 5;
	}

	.route {
		fill: none;
		stroke: rgba(194, 66, 26, 0.75);
		stroke-width: 3;
		stroke-dasharray: 4 9;
		animation: dash 3.6s linear infinite;
	}
	.route--out {
		stroke: rgba(var(--glow-2-rgb), 0.7);
	}
	.packet {
		fill: none;
		stroke: var(--vermilion);
		stroke-width: 9;
		stroke-linecap: round;
		stroke-dasharray: 1 1400;
		stroke-dashoffset: 1401;
		animation: travel 4.6s var(--ease) infinite;
	}
	.packet--out {
		stroke: var(--apricot);
		animation-duration: 5.6s;
	}
	.out-label {
		font-family: var(--font-sans);
		font-size: 26px;
		font-weight: 800;
		letter-spacing: 0.18em;
		fill: var(--apricot);
	}
	@keyframes dash {
		to {
			stroke-dashoffset: -24;
		}
	}
	@keyframes travel {
		from {
			stroke-dashoffset: 1401;
		}
		to {
			stroke-dashoffset: 0;
		}
	}

	.dot {
		fill: var(--vermilion);
		stroke: var(--ink);
		stroke-width: 3;
	}
	.tone-outline .dot {
		stroke: var(--paper);
	}
	.tone-copper .dot {
		fill: var(--cream);
		stroke: none;
	}
	.ring {
		fill: none;
		stroke: var(--vermilion);
		stroke-width: 3;
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
			transform: scale(2.6);
			opacity: 0;
		}
	}
	.cap-label {
		font-family: var(--font-sans);
		font-size: 24px;
		font-weight: 800;
		letter-spacing: 0.08em;
		fill: var(--ink);
		paint-order: stroke;
		stroke: rgba(255, 246, 234, 0.8);
		stroke-width: 6px;
		stroke-linejoin: round;
	}
	.tone-outline .cap-label {
		fill: var(--ink);
		stroke: var(--paper);
	}
	.cap-label.lit {
		fill: var(--vermilion-deep);
	}
	.tone-outline .cap-label.lit {
		fill: var(--vermilion-deep);
	}

	/* Intro: outlines draw in province by province, the fill floods in behind,
	   then the capitals pop, the names appear and the routes switch on. */
	.intro .prov {
		stroke-dasharray: 1 1;
		animation:
			map-draw 1.3s var(--ease) calc(0.45s + var(--i) * 0.12s) both,
			map-fill 0.9s ease-out calc(1s + var(--i) * 0.12s) both;
	}
	.intro .cap {
		animation: map-fade 0.3s ease-out calc(1.7s + var(--i) * 0.09s) both;
	}
	.intro .dot {
		transform-box: fill-box;
		transform-origin: center;
		animation: map-pop 0.6s cubic-bezier(0.34, 1.8, 0.64, 1) calc(1.7s + var(--i) * 0.09s) both;
	}
	.intro .cap-label {
		animation: map-fade 0.6s ease-out calc(2s + var(--i) * 0.07s) both;
	}
	.intro .flows {
		animation: map-fade 1.2s ease-out 2.3s both;
	}
	@keyframes map-draw {
		from {
			stroke-dashoffset: 1;
		}
		to {
			stroke-dashoffset: 0;
		}
	}
	@keyframes map-fill {
		from {
			fill-opacity: 0;
		}
		to {
			fill-opacity: 1;
		}
	}
	@keyframes map-pop {
		from {
			transform: scale(0);
		}
		to {
			transform: scale(1);
		}
	}
	@keyframes map-fade {
		from {
			opacity: 0;
		}
	}

	:global(.is-offscreen) .route,
	:global(.is-offscreen) .packet,
	:global(.is-offscreen) .ring {
		animation-play-state: paused;
	}
	@media (prefers-reduced-motion: reduce) {
		.packet {
			display: none;
		}
		.intro .prov,
		.intro .cap,
		.intro .dot,
		.intro .cap-label,
		.intro .flows {
			animation: none;
		}
	}
</style>
