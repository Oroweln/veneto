<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { createDemo } from '$lib/actions/demo.svelte';
	import Icon from './Icon.svelte';

	/**
	 * Funding preview: a gauge plus sample calls (invented, labelled "Sample"). Decorative by default;
	 * with `interactive` the calls are buttons and the gauge swings to the picked call's figures.
	 */
	const CALLS = [
		{ key: 'digital', scope: 'regional', locked: false, amount: '€150K', share: 50 },
		{ key: 'green', scope: 'eu', locked: true, amount: '€400K', share: 40 },
		{ key: 'craft', scope: 'national', locked: true, amount: '€60K', share: 60 }
	];

	let { interactive = false, touched = $bindable(false) }: { interactive?: boolean; touched?: boolean } = $props();

	const i18n = useI18n();
	const demo = createDemo(() => CALLS.length);
	$effect(() => {
		touched = demo.touched;
	});
	const call = $derived(interactive ? CALLS[demo.index] : CALLS[0]);
	const uid = $props.id();

	const R = 52;
	const LEN = 2 * Math.PI * R;
</script>

<div class="stage grid-texture ink-scope" class:interactive aria-hidden={interactive ? undefined : 'true'} {...interactive ? demo.hold : {}}>
	<div class="head">
		<span class="eyebrow">{i18n.t('home.funding.stage.title')}</span>
		<span class="badge badge--demo">{i18n.t('common.sample')}</span>
	</div>

	<div class="gauge-row">
		<svg class="gauge" viewBox="0 0 140 140">
			<defs>
				<linearGradient id="{uid}-copper" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0" stop-color="#ecdcbb" />
					<stop offset="0.5" stop-color="#c4a477" />
					<stop offset="1" stop-color="#9c7f55" />
				</linearGradient>
			</defs>
			<circle class="track" cx="70" cy="70" r={R} />
			<circle
				class="fill"
				cx="70"
				cy="70"
				r={R}
				stroke="url(#{uid}-copper)"
				stroke-dasharray="{(LEN * call.share) / 100} {LEN}"
				transform="rotate(-90 70 70)"
			/>
		</svg>
		{#key call.key}
			<div class="gauge-text" aria-live={interactive ? 'polite' : undefined}>
				<span class="upto">{i18n.t('home.funding.stage.upTo')}</span>
				<span class="amount metal-text">{call.amount}</span>
				<span class="share">{interactive ? i18n.t('common.try.costShare', { n: call.share }) : i18n.t('home.funding.stage.share')}</span>
			</div>
		{/key}
	</div>

	<ul class="calls">
		{#each CALLS as call, i (call.key)}
			<li class="call" class:on={interactive && i === demo.index}>
				{#if interactive}
					<button class="call__hit" type="button" aria-pressed={i === demo.index} onclick={() => (demo.index = i)}>
						<span class="sr-only">{i18n.t(`home.funding.stage.calls.${call.key}.name`)}</span>
					</button>
				{/if}
				<span class="scope">{i18n.t(`home.funding.stage.scopes.${call.scope}`)}</span>
				<span class="name">{i18n.t(`home.funding.stage.calls.${call.key}.name`)}</span>
				<span class="meta">
					<Icon name="calendar" size={13} />
					{i18n.t(`home.funding.stage.calls.${call.key}.deadline`)}
				</span>
				{#if call.locked}
					<span class="lock"><Icon name="lock" size={13} />{i18n.t('home.funding.stage.members')}</span>
				{/if}
			</li>
		{/each}
	</ul>
</div>

<style>
	.stage {
		position: relative;
		display: grid;
		gap: 18px;
		padding: clamp(20px, 3vw, 30px);
		border-radius: 26px;
		background-color: var(--ink-2);
		color: var(--cream);
		box-shadow: var(--shadow-light);
		overflow: hidden;
		isolation: isolate;
	}
	.stage::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background: radial-gradient(55% 50% at 30% 25%, rgba(var(--glow-rgb), 0.28), transparent 70%);
	}
	.stage::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4px;
		background: var(--metal-copper);
	}
	.head {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	.gauge-row {
		display: flex;
		align-items: center;
		gap: 22px;
	}
	.gauge {
		width: 132px;
		flex: none;
	}
	.track {
		fill: none;
		stroke: rgba(245, 230, 211, 0.12);
		stroke-width: 12;
	}
	.fill {
		fill: none;
		stroke-width: 12;
		stroke-linecap: round;
	}
	.gauge-text {
		display: grid;
		gap: 2px;
	}
	.upto {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--apricot);
	}
	.amount {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: clamp(2.2rem, 4vw, 3rem);
		line-height: 1;
	}
	.share {
		font-size: 0.82rem;
		color: var(--text-on-ink-muted);
	}
	.calls {
		display: grid;
		gap: 8px;
	}
	.call {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'scope name' 'scope meta' 'scope lock';
		align-items: center;
		gap: 2px 12px;
		padding: 12px 14px;
		border-radius: 14px;
		background: rgba(245, 230, 211, 0.05);
		border: 1px solid var(--line-on-ink);
	}
	/* Interactive: whole call is the hit area, the gauge animates between calls */
	.call {
		position: relative;
		transition:
			background 0.3s,
			border-color 0.3s,
			transform 0.3s var(--ease);
	}
	.call__hit {
		position: absolute;
		inset: 0;
		z-index: 1;
		border: 0;
		border-radius: inherit;
		background: none;
		cursor: pointer;
	}
	.call__hit:focus-visible {
		outline: 2px solid var(--apricot);
		outline-offset: 2px;
	}
	.interactive .call:hover {
		border-color: rgba(var(--glow-2-rgb), 0.6);
		transform: translateX(4px);
	}
	.interactive .call.on {
		background: rgba(245, 230, 211, 0.12);
		border-color: var(--apricot);
		transform: translateX(6px);
	}
	.interactive .fill {
		transition: stroke-dasharray 0.8s var(--ease);
	}
	.interactive .gauge-text {
		animation: gauge-in 0.5s var(--ease);
	}
	@keyframes gauge-in {
		from {
			opacity: 0;
			transform: translateY(8px);
		}
	}
	.scope {
		grid-area: scope;
		align-self: start;
		min-width: 84px;
		text-align: center;
		padding: 4px 8px;
		border-radius: 8px;
		background: var(--metal-champagne);
		color: var(--ink);
		font-size: 0.6rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}
	.name {
		grid-area: name;
		font-weight: 800;
		font-size: 0.88rem;
	}
	.meta {
		grid-area: meta;
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 0.74rem;
		color: var(--text-on-ink-muted);
	}
	.lock {
		grid-area: lock;
		justify-self: start;
		margin-top: 6px;
		display: inline-flex;
		align-items: center;
		gap: 5px;
		padding: 4px 9px;
		border-radius: 999px;
		border: 1px solid rgba(var(--glow-2-rgb), 0.45);
		color: var(--apricot);
		font-size: 0.64rem;
		font-weight: 800;
		white-space: nowrap;
	}
</style>
