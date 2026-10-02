<script lang="ts">
	import type { Snippet } from 'svelte';
	import { onscreen } from '$lib/actions/reveal';
	import { useI18n } from '$lib/i18n';

	let {
		crumbs = [],
		copy,
		stage
	}: {
		crumbs?: { label: string; href?: string }[];
		copy: Snippet;
		stage?: Snippet;
	} = $props();

	const i18n = useI18n();
</script>

<!-- Shared page hero: dark surface, glows, copy left, stage right, champagne edge. -->
<section class="phero on-ink" use:onscreen>
	<div class="container">
		{#if crumbs.length}
			<nav class="crumbs" aria-label={i18n.t('common.breadcrumbs')}>
				<ol>
					<li><a href={i18n.path('/')}>{i18n.t('nav.home')}</a></li>
					{#each crumbs as c (c.label)}
						<li>
							{#if c.href}<a href={i18n.path(c.href)}>{c.label}</a>{:else}<span aria-current="page">{c.label}</span>{/if}
						</li>
					{/each}
				</ol>
			</nav>
		{/if}
		<div class="phero__grid" class:single={!stage}>
			<div class="phero__copy">{@render copy()}</div>
			{#if stage}<div class="phero__stage">{@render stage()}</div>{/if}
		</div>
	</div>
	<div class="metal-edge phero__edge"></div>
</section>

<style>
	.phero {
		position: relative;
		overflow: hidden;
		background: var(--hero);
		color: var(--cream);
		padding-top: clamp(28px, 4vw, 48px);
		isolation: isolate;
	}
	.phero::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			radial-gradient(45% 60% at 80% 35%, rgba(var(--glow-rgb), 0.3), transparent 70%),
			radial-gradient(40% 50% at 0% 100%, rgba(var(--glow-2-rgb), 0.12), transparent 70%),
			repeating-linear-gradient(115deg, rgba(245, 230, 211, 0.025) 0 1px, transparent 1px 44px);
	}
	.crumbs ol {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--text-on-ink-muted);
	}
	.crumbs li + li::before {
		content: '/';
		margin-right: 6px;
		opacity: 0.5;
	}
	.crumbs a {
		text-decoration: none;
	}
	.crumbs a:hover {
		color: var(--cream);
	}
	.crumbs [aria-current] {
		color: var(--apricot);
	}
	.phero__grid {
		display: grid;
		grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
		gap: clamp(40px, 8vw, 128px);
		align-items: center;
		padding-block: clamp(36px, 5vw, 64px) clamp(56px, 7vw, 96px);
	}
	.phero__grid.single {
		grid-template-columns: minmax(0, 860px);
	}
	.phero__copy {
		display: grid;
		gap: 20px;
		justify-items: start;
	}
	.phero__copy :global(h1) {
		font-size: var(--fs-h1);
	}
	.phero__stage {
		position: relative;
		width: 100%;
	}
	.phero__edge {
		position: relative;
	}
	@media (max-width: 980px) {
		.phero__grid {
			grid-template-columns: 1fr;
		}
		.phero__stage {
			max-width: 520px;
			margin-inline: auto;
		}
	}
</style>
