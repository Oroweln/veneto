<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { createDemo } from '$lib/actions/demo.svelte';
	import BrowserFrame from './BrowserFrame.svelte';
	import Icon from './Icon.svelte';
	import type { IconName } from './icons';

	/**
	 * Browser window with invented sample listings (labelled "Sample"). With `interactive`,
	 * listings open on tap (the place line slides in) and can be starred; until then it demos itself.
	 */
	let {
		url,
		title,
		items,
		interactive = false,
		touched = $bindable(false)
	}: {
		url: string;
		title: string;
		items: { icon: IconName; type: string; name: string; place: string }[];
		interactive?: boolean;
		/** Bindable: true once the visitor has used the interactive preview (for the page's hint). */
		touched?: boolean;
	} = $props();

	const i18n = useI18n();
	const demo = createDemo(() => items.length);
	let saved = $state<number[]>([]);
	$effect(() => {
		touched = demo.touched;
	});

	function toggleSave(i: number) {
		demo.touch();
		saved = saved.includes(i) ? saved.filter((s) => s !== i) : [...saved, i];
	}
</script>

<div {...interactive ? demo.hold : {}}>
	<BrowserFrame {url}>
		<div class="head">
			<p class="title">{title}</p>
			<span class="head__tags">
				{#if saved.length}
					{#key saved.length}
						<span class="saved-count"><Icon name="star" size={12} stroke={2} />{i18n.t('common.try.savedCount', { n: saved.length })}</span>
					{/key}
				{/if}
				<span class="badge badge--demo">{i18n.t('common.sample')}</span>
			</span>
		</div>
		<ul class="listings" class:interactive>
			{#each items as l, i (i)}
				{@const open = !interactive || demo.index === i}
				<li class="listing" class:open>
					{#if interactive}
						<button class="listing__hit" type="button" aria-expanded={open} onclick={() => (demo.index = i)}>
							<span class="sr-only">{l.name}</span>
						</button>
					{/if}
					<span class="disc"><Icon name={l.icon} size={18} /></span>
					<span class="body">
						<span class="type">{l.type}</span>
						<span class="name">{l.name}</span>
						<span class="place"><span><Icon name="pin" size={13} />{l.place}</span></span>
					</span>
					{#if interactive}
						<button
							class="star"
							class:on={saved.includes(i)}
							type="button"
							aria-pressed={saved.includes(i)}
							aria-label={i18n.t('common.try.save', { name: l.name })}
							onclick={() => toggleSave(i)}
						>
							<Icon name="star" size={18} stroke={1.8} />
						</button>
					{/if}
				</li>
			{/each}
		</ul>
	</BrowserFrame>
</div>

<style>
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
	}
	.head__tags {
		display: flex;
		align-items: center;
		gap: 6px;
	}
	.title {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.15rem;
	}
	.saved-count {
		display: inline-flex;
		align-items: center;
		gap: 4px;
		padding: 3px 9px;
		border-radius: 999px;
		background: var(--vermilion);
		color: var(--cream);
		font-size: 0.66rem;
		font-weight: 800;
		animation: pop 0.45s cubic-bezier(0.34, 1.8, 0.64, 1);
	}
	.saved-count :global(path) {
		fill: currentColor;
	}
	.listings {
		display: grid;
		gap: 10px;
	}
	.listing {
		position: relative;
		display: flex;
		gap: 14px;
		align-items: flex-start;
		padding: 14px 16px;
		border-radius: 14px;
		background: var(--surface);
		border: 1px solid var(--line);
		transition:
			background 0.3s,
			border-color 0.3s,
			box-shadow 0.3s,
			transform 0.3s var(--ease);
	}
	.body {
		flex: 1;
		display: grid;
		gap: 3px;
	}
	.type {
		font-size: 0.64rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.05rem;
		line-height: 1.2;
	}
	.place {
		display: grid;
		font-size: 0.78rem;
		color: var(--text-muted);
	}
	.place > span {
		display: inline-flex;
		align-items: center;
		gap: 5px;
	}

	/* Interactive: the whole row is the hit area; the open row lifts and shows its place */
	.listing__hit {
		position: absolute;
		inset: 0;
		z-index: 1;
		border-radius: inherit;
		background: none;
		border: 0;
		cursor: pointer;
	}
	.listing__hit:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.interactive .place {
		grid-template-rows: 0fr;
		opacity: 0;
		transition:
			grid-template-rows 0.4s var(--ease),
			opacity 0.3s;
	}
	.interactive .place > span {
		overflow: hidden;
	}
	.interactive .open .place {
		grid-template-rows: 1fr;
		opacity: 1;
	}
	.interactive .listing:hover {
		border-color: rgba(194, 66, 26, 0.35);
		transform: translateX(4px);
	}
	.interactive .listing.open {
		background: #fffaf3;
		border-color: var(--vermilion);
		box-shadow: 0 14px 28px -18px rgba(36, 26, 23, 0.55);
		transform: translateX(6px);
	}
	.interactive .listing:not(.open) .disc {
		filter: saturate(0.5);
		opacity: 0.8;
	}
	.star {
		position: relative;
		z-index: 2;
		display: grid;
		place-items: center;
		flex: none;
		width: 34px;
		height: 34px;
		margin: -4px -6px 0 0;
		border-radius: 50%;
		border: 1px solid var(--line);
		background: var(--paper);
		color: var(--text-muted);
		cursor: pointer;
		transition:
			color 0.2s,
			background 0.2s,
			border-color 0.2s,
			transform 0.2s;
	}
	.star:hover {
		color: var(--vermilion);
		border-color: var(--vermilion);
		transform: scale(1.08);
	}
	.star:focus-visible {
		outline: 2px solid var(--vermilion);
		outline-offset: 2px;
	}
	.star.on {
		color: var(--cream);
		background: var(--vermilion);
		border-color: var(--vermilion);
		animation: pop 0.45s cubic-bezier(0.34, 1.8, 0.64, 1);
	}
	.star.on :global(path) {
		fill: currentColor;
	}
	@keyframes pop {
		from {
			transform: scale(0.6);
		}
	}
</style>
