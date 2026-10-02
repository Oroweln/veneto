<script lang="ts">
	import { onMount } from 'svelte';
	import { formatNumber, useI18n } from '$lib/i18n';
	import { prefersReducedMotion } from '$lib/actions/reveal';

	let {
		value,
		prefix = '',
		suffix = '',
		duration = 1400
	}: { value: number; prefix?: string; suffix?: string; duration?: number } = $props();

	const i18n = useI18n();
	// Server render shows the final figure; the count-up only runs once on screen.
	let shown = $state(0);
	let animating = $state(false);
	const display = $derived(animating ? shown : value);
	let el: HTMLElement;

	onMount(() => {
		if (prefersReducedMotion()) return;
		const rect = el.getBoundingClientRect();
		if (rect.top < window.innerHeight) return;
		shown = 0;
		animating = true;
		const io = new IntersectionObserver((entries) => {
			if (!entries.some((e) => e.isIntersecting)) return;
			io.disconnect();
			const start = performance.now();
			const tick = (now: number) => {
				const p = Math.min(1, (now - start) / duration);
				shown = Math.round(value * (1 - Math.pow(1 - p, 3)));
				if (p < 1) requestAnimationFrame(tick);
				else animating = false;
			};
			requestAnimationFrame(tick);
		});
		io.observe(el);
		return () => io.disconnect();
	});
</script>

<span bind:this={el} class="count">{prefix}{formatNumber(i18n.lang, display)}{suffix}</span>

<style>
	.count {
		font-variant-numeric: tabular-nums;
	}
</style>
