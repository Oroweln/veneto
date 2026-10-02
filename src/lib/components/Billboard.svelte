<script lang="ts">
	import { onMount } from 'svelte';
	import { useI18n } from '$lib/i18n';
	import { SLIDES } from '$lib/data/billboards';
	import { onscreen, prefersReducedMotion } from '$lib/actions/reveal';

	let { variant = 'landscape' }: { variant?: 'portrait' | 'landscape' } = $props();

	const i18n = useI18n();
	let index = $state(0);
	let visible = $state(true);
	let hovering = $state(false);

	onMount(() => {
		if (prefersReducedMotion()) return;
		const id = setInterval(() => {
			if (visible && !hovering && document.visibilityState === 'visible') {
				index = (index + 1) % SLIDES.length;
			}
		}, 5500);
		return () => clearInterval(id);
	});
</script>

<aside
	class="billboard billboard--{variant}"
	aria-label={i18n.t('billboard.label')}
	use:onscreen={(v) => (visible = v)}
	onmouseenter={() => (hovering = true)}
	onmouseleave={() => (hovering = false)}
>
	<div class="frame">
		<div class="screen ink-scope">
			{#each SLIDES as slide, i (slide.id)}
				<a
					class="slide tone-{slide.tone}"
					class:active={i === index}
					href={i18n.path('/advertise')}
					aria-hidden={i !== index}
					tabindex={i === index ? 0 : -1}
				>
					<svg class="art" viewBox="0 0 400 300" aria-hidden="true">
						<circle cx="260" cy="150" r="70" />
						<circle cx="260" cy="150" r="115" />
						<circle cx="260" cy="150" r="160" />
						<path d="M40 230 Q160 60 260 150 T 400 60" />
						<circle class="node" cx="260" cy="150" r="9" />
						<circle class="node" cx="145" cy="72" r="6" />
						<circle class="node" cx="375" cy="104" r="6" />
						<circle class="node" cx="205" cy="258" r="6" />
					</svg>
					<span class="kicker-line">{i18n.t(`content.billboards.${slide.id}.kicker`)}</span>
					<span class="headline">{i18n.t(`content.billboards.${slide.id}.headline`)}</span>
					<span class="sub">{i18n.t(`content.billboards.${slide.id}.sub`)}</span>
					<span class="cta">{i18n.t(`content.billboards.${slide.id}.cta`)} →</span>
				</a>
			{/each}
			<span class="tag"><span class="live-dot"></span>{i18n.t('billboard.sponsored')} · {i18n.t('common.demo')}</span>
		</div>
	</div>
	<div class="dots" role="group" aria-label={i18n.t('billboard.slides')}>
		{#each SLIDES as _, i (i)}
			<button
				type="button"
				class:on={i === index}
				aria-label="{i18n.t('billboard.slide')} {i + 1}"
				aria-pressed={i === index}
				onclick={() => (index = i)}
			></button>
		{/each}
	</div>
</aside>

<style>
	.billboard {
		display: grid;
		gap: 12px;
		justify-items: center;
		min-width: 0;
	}
	.frame {
		width: 100%;
		padding: 10px;
		border-radius: 22px;
		background: linear-gradient(160deg, #74264a, #3f0f24);
		box-shadow:
			var(--shadow-dark),
			inset 0 0 0 1px rgba(245, 230, 211, 0.18);
		position: relative;
	}
	.frame::after {
		content: '';
		position: absolute;
		left: 18%;
		right: 18%;
		top: -1px;
		height: 3px;
		border-radius: 3px;
		background: var(--metal-champagne);
	}
	.screen {
		position: relative;
		border-radius: 14px;
		overflow: hidden;
		background: var(--ink);
	}
	.billboard--landscape .screen {
		min-height: 320px;
	}
	@media (min-width: 760px) {
		.billboard--landscape .screen {
			aspect-ratio: 970 / 300;
			min-height: 240px;
		}
	}
	.billboard--portrait .frame {
		max-width: 340px;
	}
	.billboard--portrait .screen {
		aspect-ratio: 9 / 14;
	}
	.slide {
		position: absolute;
		inset: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		gap: 10px;
		padding: clamp(20px, 3.4vw, 40px);
		text-decoration: none;
		opacity: 0;
		transform: scale(1.02);
		transition:
			opacity 0.8s var(--ease),
			transform 1.2s var(--ease);
		pointer-events: none;
	}
	.slide.active {
		opacity: 1;
		transform: none;
		pointer-events: auto;
	}
	.tone-vermilion {
		background:
			radial-gradient(80% 90% at 90% 10%, rgba(var(--glow-2-rgb), 0.65), transparent 60%),
			linear-gradient(135deg, #45112a, #5b1731);
		color: var(--cream);
	}
	.tone-ink {
		background:
			radial-gradient(70% 80% at 85% 0%, rgba(var(--glow-rgb), 0.45), transparent 60%),
			repeating-linear-gradient(90deg, rgba(245, 230, 211, 0.05) 0 1px, transparent 1px 28px),
			var(--ink-2);
		color: var(--cream);
	}
	.tone-apricot {
		background:
			radial-gradient(70% 80% at 10% 100%, rgba(var(--glow-rgb), 0.5), transparent 60%),
			linear-gradient(135deg, #f5e6d3, #c4a477);
		color: var(--ink);
	}
	.art {
		position: absolute;
		right: 0;
		top: 0;
		height: 100%;
		width: 55%;
		fill: none;
		stroke: currentColor;
		stroke-width: 1.5;
		stroke-dasharray: 3 7;
		opacity: 0.35;
		pointer-events: none;
	}
	.art .node {
		fill: currentColor;
		stroke: none;
	}
	.billboard--portrait .art {
		width: 100%;
		height: 60%;
	}
	.kicker-line,
	.headline,
	.sub,
	.cta {
		position: relative;
	}
	.kicker-line {
		font-size: 0.7rem;
		font-weight: 800;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		opacity: 0.85;
	}
	.headline {
		font-family: var(--font-billboard);
		font-weight: 800;
		font-style: italic;
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 0.9;
		font-size: clamp(2.2rem, 4.6vw, 3.9rem);
		max-width: 16ch;
	}
	.billboard--portrait .headline {
		font-size: clamp(2.3rem, 3.8vw, 3rem);
	}
	.sub {
		font-size: 0.92rem;
		font-weight: 600;
		max-width: 40ch;
		opacity: 0.9;
	}
	.cta {
		align-self: flex-start;
		margin-top: 6px;
		padding: 9px 16px;
		border-radius: 999px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.08em;
		text-transform: uppercase;
		background: var(--ink);
		color: var(--cream);
	}
	.tone-ink .cta {
		background: var(--metal-copper);
		color: var(--on-accent);
	}
	.tag {
		position: absolute;
		top: 14px;
		right: 14px;
		display: inline-flex;
		align-items: center;
		gap: 8px;
		padding: 5px 10px 5px 9px;
		border-radius: 999px;
		background: rgba(36, 26, 23, 0.75);
		color: var(--cream);
		font-size: 0.62rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		pointer-events: none;
	}
	.dots {
		display: flex;
		gap: 6px;
	}
	.dots button {
		width: 22px;
		height: 6px;
		border-radius: 3px;
		background: rgba(106, 82, 69, 0.35);
		transition:
			background 0.3s,
			width 0.3s;
	}
	:global(.on-ink) .dots button,
	:global(.section--ink) .dots button {
		background: rgba(245, 230, 211, 0.25);
	}
	.dots button.on {
		width: 36px;
		background: var(--vermilion) !important;
	}
</style>
