<script lang="ts">
	import type { Snippet } from 'svelte';

	let { url = 'veneto.app', children }: { url?: string; children: Snippet } = $props();
</script>

<div class="browser">
	<div class="bar">
		<span class="dots"><i></i><i></i><i></i></span>
		<span class="url">{url}</span>
	</div>
	<div class="body">
		{@render children()}
	</div>
</div>

<style>
	.browser {
		border-radius: 16px;
		overflow: hidden;
		background: var(--paper);
		box-shadow: var(--shadow-dark);
		border: 1px solid rgba(245, 230, 211, 0.25);
		color: var(--text);
	}
	.bar {
		display: flex;
		align-items: center;
		gap: 14px;
		height: 38px;
		padding: 0 14px;
		background: #ead9c4;
	}
	.dots {
		display: flex;
		gap: 6px;
	}
	.dots i {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: #d2bba0;
	}
	.dots i:first-child {
		background: var(--vermilion);
	}
	.url {
		flex: 1;
		max-width: 260px;
		height: 22px;
		display: grid;
		place-items: center;
		border-radius: 999px;
		background: rgba(255, 250, 243, 0.8);
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--text-muted);
	}
	.body {
		padding: 18px;
	}
</style>
