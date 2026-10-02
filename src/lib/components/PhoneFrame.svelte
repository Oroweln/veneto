<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet } = $props();
</script>

<div class="phone">
	<div class="screen">
		<span class="notch"></span>
		{@render children()}
	</div>
</div>

<style>
	.phone {
		width: 230px;
		padding: 9px;
		border-radius: 38px;
		background: var(--metal-copper);
		background-size: 200% 100%;
		box-shadow:
			var(--shadow-dark),
			inset 0 0 0 1px rgba(255, 255, 255, 0.3);
	}
	.screen {
		position: relative;
		border-radius: 30px;
		overflow: hidden;
		background: var(--paper);
		color: var(--text);
		padding: 34px 12px 14px;
		min-height: 380px;
	}
	.notch {
		position: absolute;
		top: 9px;
		left: 50%;
		width: 74px;
		height: 18px;
		transform: translateX(-50%);
		border-radius: 999px;
		background: var(--ink);
	}
</style>
