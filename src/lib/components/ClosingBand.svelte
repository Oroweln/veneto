<script lang="ts">
	import type { Snippet } from 'svelte';
	import AppBadges from './AppBadges.svelte';
	import VenetoMap from './VenetoMap.svelte';
	import { useI18n } from '$lib/i18n';

	let {
		eyebrow,
		title,
		text,
		cta,
		href = '/register',
		secondary,
		badges = true,
		children
	}: {
		eyebrow?: string;
		/** One string, or several lines (last line in copper). */
		title: string | string[];
		text?: string;
		cta: string;
		href?: string;
		secondary?: { label: string; href: string };
		badges?: boolean;
		children?: Snippet;
	} = $props();

	const i18n = useI18n();
</script>

<section class="band on-ink">
	<div class="watermark" aria-hidden="true"><VenetoMap tone="watermark" capitals={false} /></div>
	<div class="container band__inner">
		{#if eyebrow}<p class="eyebrow">{eyebrow}</p>{/if}
		{#if Array.isArray(title)}
			<h2 class="title title--lines">
				{#each title as line, i (i)}
					<span class={i === title.length - 1 ? 'metal-copper-text' : 'metal-light-text'}>{line}</span>
				{/each}
			</h2>
		{:else}
			<h2 class="title metal-light-text">{title}</h2>
		{/if}
		{#if text}<p class="lede">{text}</p>{/if}
		{@render children?.()}
		<div class="actions">
			<a class="btn btn--primary btn--big" href={i18n.path(href)}>{cta} <span class="arrow">→</span></a>
			{#if secondary}<a class="btn btn--ghost" href={i18n.path(secondary.href)}>{secondary.label}</a>{/if}
		</div>
		{#if badges}<AppBadges />{/if}
	</div>
</section>

<style>
	.band {
		position: relative;
		overflow: hidden;
		background: var(--hero);
		color: var(--cream);
		padding-block: clamp(72px, 10vw, 128px);
		isolation: isolate;
	}
	.band::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(50% 70% at 100% 100%, rgba(var(--glow-rgb), 0.35), transparent 70%),
			radial-gradient(40% 60% at 0% 0%, rgba(var(--glow-2-rgb), 0.14), transparent 70%);
	}
	.band::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 5px;
		background: var(--metal-champagne);
	}
	.watermark {
		position: absolute;
		z-index: -1;
		right: -6%;
		top: 50%;
		width: min(560px, 70vw);
		transform: translateY(-50%);
		opacity: 0.9;
	}
	.band__inner {
		position: relative;
		display: grid;
		gap: 24px;
		justify-items: start;
	}
	.title {
		font-size: clamp(2.6rem, 6.4vw, 5.4rem);
		max-width: 16ch;
		line-height: 1.02;
	}
	.title--lines {
		max-width: none;
		font-size: clamp(2.1rem, 5.4vw, 4.6rem);
		text-transform: uppercase;
		letter-spacing: 0;
	}
	.title--lines span {
		display: block;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
</style>
