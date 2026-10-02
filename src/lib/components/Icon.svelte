<script lang="ts">
	import { ICONS, type IconName } from './icons';

	let {
		name,
		size = 20,
		stroke = 1.6,
		label
	}: { name: IconName; size?: number; stroke?: number; label?: string } = $props();
</script>

<svg
	width={size}
	height={size}
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width={stroke}
	stroke-linecap="round"
	stroke-linejoin="round"
	role={label ? 'img' : undefined}
	aria-label={label}
	aria-hidden={label ? undefined : 'true'}
	focusable="false"
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- static icon markup -->
	{@html ICONS[name]}
</svg>
