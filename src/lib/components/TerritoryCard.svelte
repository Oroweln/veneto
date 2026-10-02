<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import type { Province } from '$lib/data/provinces';
	import ProvinceMap from './ProvinceMap.svelte';
	import Icon from './Icon.svelte';

	let {
		province,
		active = false,
		onhover
	}: { province: Province; active?: boolean; onhover?: (on: boolean) => void } = $props();

	const i18n = useI18n();
</script>

<article
	class="tcard card-hover on-ink"
	class:active
	onmouseenter={() => onhover?.(true)}
	onmouseleave={() => onhover?.(false)}
	onfocusin={() => onhover?.(true)}
	onfocusout={() => onhover?.(false)}
>
	<div class="art grid-texture">
		<ProvinceMap code={province.code} context={false} labels={false} />
		<span class="code disc">{province.code}</span>
	</div>
	<div class="body">
		<h3 class="name">{province.name.toUpperCase()}</h3>
		<p class="focus">{i18n.t(`content.provinces.${province.id}.focus`)}</p>
		<div class="counts">
			<span class="pill"><strong>{province.platform.companies}</strong> {i18n.t('territory.companies')}</span>
			<span class="pill"><strong>{province.platform.opportunities}</strong> {i18n.t('territory.opportunities')}</span>
		</div>
		<a class="go" href={i18n.path(`/territories/${province.id}`)}>
			{i18n.t('territory.explore', { name: province.name })}
			<span class="arrow-circle"><Icon name="arrow" size={16} /></span>
		</a>
	</div>
</article>

<style>
	.tcard {
		position: relative;
		display: flex;
		flex-direction: column;
		border-radius: var(--radius-card);
		background: var(--ink-2);
		color: var(--cream);
		overflow: hidden;
		border: 1px solid var(--line-on-ink);
		transition:
			transform 0.35s var(--ease),
			border-color 0.35s;
	}
	.tcard.active {
		border-color: rgba(var(--glow-rgb), 0.7);
	}
	.art {
		position: relative;
		height: 170px;
		padding: 16px 18px 8px;
		background-color: rgba(0, 0, 0, 0.15);
	}
	.art::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(55% 70% at 50% 50%, rgba(var(--glow-rgb), 0.2), transparent 70%);
	}
	.code {
		position: absolute;
		left: 16px;
		top: 16px;
		font-size: 0.78rem;
		font-weight: 800;
		letter-spacing: 0.06em;
	}
	.body {
		display: flex;
		flex-direction: column;
		gap: 10px;
		padding: 18px 20px 20px;
		flex: 1;
	}
	.name {
		font-size: 1.6rem;
		letter-spacing: 0.02em;
	}
	.focus {
		font-size: 0.9rem;
		line-height: 1.55;
		color: var(--text-on-ink-muted);
	}
	.counts {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}
	.counts .pill {
		min-height: 28px;
		font-size: 0.74rem;
		font-weight: 600;
	}
	.counts strong {
		font-weight: 800;
		color: var(--cream);
	}
	.go {
		margin-top: auto;
		padding-top: 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
		font-weight: 800;
		font-size: 0.88rem;
		text-decoration: none;
	}
	.go::after {
		content: '';
		position: absolute;
		inset: 0;
	}
</style>
