<script lang="ts">
	import { onscreen, reveal } from '$lib/actions/reveal';

	let {
		lines,
		accent = lines.length - 1,
		support,
		align = 'left',
		size = 'xl'
	}: {
		/** Short, high-impact lines in the billboard type. */
		lines: string[];
		/** Index of the line set in copper. */
		accent?: number;
		support?: string;
		align?: 'left' | 'right';
		/** 'lg' for longer statements that would otherwise wrap. */
		size?: 'xl' | 'lg';
	} = $props();
</script>

<!-- Homepage billboard statement: one short message, full width, billboard type. -->
<section class="band on-ink grid-texture align-{align} size-{size}" use:onscreen>
	<div class="glow" aria-hidden="true"></div>
	<div class="container inner">
		<h2 class="title billboard-type">
			{#each lines as line, i (i)}
				<span class="line" class:metal-copper-text={i === accent} use:reveal={i * 120}>{line}</span>
			{/each}
		</h2>
		{#if support}<p class="support" use:reveal={lines.length * 120}>{support}</p>{/if}
	</div>
</section>

<style>
	.band {
		position: relative;
		overflow: hidden;
		background-color: var(--ink);
		color: var(--cream);
		padding-block: clamp(72px, 10vw, 136px);
		isolation: isolate;
	}
	.glow {
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(45% 70% at 92% 85%, rgba(var(--glow-rgb), 0.34), transparent 70%),
			radial-gradient(35% 55% at 0% 0%, rgba(var(--glow-2-rgb), 0.1), transparent 70%);
	}
	.align-right .glow {
		transform: scaleX(-1);
	}
	.band::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 5px;
		background: var(--metal-champagne);
	}
	.inner {
		display: grid;
		gap: 36px;
	}
	.title {
		font-size: clamp(3.4rem, 10.5vw, 9.6rem);
		line-height: 0.86;
	}
	.size-lg .title {
		font-size: clamp(2.6rem, 6.6vw, 5.9rem);
		line-height: 0.9;
	}
	.line {
		display: block;
	}
	.align-right .title {
		text-align: right;
	}
	.support {
		position: relative;
		justify-self: end;
		max-width: 34ch;
		padding-top: 18px;
		font-size: var(--fs-lede);
		font-weight: 600;
		line-height: 1.45;
		color: var(--text-on-ink-muted);
	}
	.support::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 56px;
		height: 3px;
		border-radius: 3px;
		background: var(--vermilion);
	}
	.align-right .support {
		justify-self: start;
	}
	@media (max-width: 860px) {
		.support {
			justify-self: start;
		}
		.align-right .title {
			text-align: left;
		}
	}
</style>
