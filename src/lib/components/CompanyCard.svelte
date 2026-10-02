<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import type { Company } from '$lib/data/companies';
	import { INDUSTRY_BY_ID } from '$lib/data/industries';
	import { PROVINCE_BY_CODE } from '$lib/data/provinces';
	import Icon from './Icon.svelte';
	import ProvinceMap from './ProvinceMap.svelte';

	let { company }: { company: Company } = $props();

	const i18n = useI18n();
	const industry = $derived(INDUSTRY_BY_ID[company.industry]);
	const province = $derived(PROVINCE_BY_CODE[company.province]);
</script>

<article class="card card-hover light-scope" class:premium={company.premium}>
	<div class="cover" class:grid-texture={company.premium} class:ink-scope={company.premium}>
		<div class="cover__map">
			<ProvinceMap
				code={company.province}
				town={company.town}
				context={false}
				labels={false}
				tone={company.premium ? 'metal' : 'outline'}
			/>
		</div>
		<span class="disc disc--sm cover__disc"><Icon name={industry.icon} size={16} /></span>
		<span class="cover__tags">
			{#if company.premium}<span class="badge badge--copper">{i18n.t('common.premium')}</span>{/if}
			<span class="badge badge--demo">{i18n.t('common.sample')}</span>
		</span>
	</div>

	<div class="body">
		<span class="logo" aria-hidden="true">{company.initials}</span>
		<h3 class="name">{company.name}</h3>
		<p class="place">{company.town} · {province.name}</p>
		<p class="industry"><span class="mini-disc"><Icon name={industry.icon} size={12} /></span>{i18n.t(`content.industries.${industry.id}.name`)}</p>
		<p class="desc">{i18n.t(`content.companies.${company.slug}.description`)}</p>

		<div class="looking">
			<span class="looking__label">{i18n.t('company.lookingFor')}</span>
			<ul class="pill-row">
				{#each company.lookingFor as need (need)}
					<li class="need">{i18n.t(`content.needs.${need}`)}</li>
				{/each}
			</ul>
		</div>

		<div class="foot">
			{#if company.verified}
				<span class="trust"><Icon name="shield" size={15} />{i18n.t('company.verified')}</span>
			{:else}
				<span class="trust trust--muted">{i18n.t('company.since', { year: company.founded })}</span>
			{/if}
			<a class="view" href={i18n.path(`/business/${company.slug}`)}>
				{i18n.t('company.view')}
				<span class="sr-only">: {company.name}</span>
				<span class="arrow-circle"><Icon name="arrow" size={16} /></span>
			</a>
		</div>
	</div>
</article>

<style>
	.card {
		display: flex;
		flex-direction: column;
		border-radius: var(--radius-card);
		background: #fffaf3;
		border: 1px solid var(--line);
		overflow: hidden;
		box-shadow: var(--shadow-light);
	}
	.cover {
		position: relative;
		height: 150px;
		background-color: var(--surface);
		background-image:
			linear-gradient(rgba(36, 26, 23, 0.05) 1px, transparent 1px),
			linear-gradient(90deg, rgba(36, 26, 23, 0.05) 1px, transparent 1px);
		background-size: 24px 24px;
		border-bottom: 1px solid var(--line);
	}
	.premium .cover {
		height: 170px;
		background-color: var(--ink-2);
		border-bottom: 0;
	}
	.premium .cover::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(60% 80% at 75% 40%, rgba(var(--glow-rgb), 0.28), transparent 70%);
	}
	.premium .cover::after {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		bottom: 0;
		height: 4px;
		background: var(--metal-copper);
	}
	.cover__map {
		position: absolute;
		top: 14px;
		right: 18px;
		bottom: 18px;
		width: 46%;
	}
	.cover__disc {
		position: absolute;
		left: 18px;
		top: 16px;
	}
	.cover__tags {
		position: absolute;
		left: 58px;
		top: 19px;
		display: flex;
		gap: 6px;
		flex-wrap: wrap;
		max-width: 45%;
	}
	.premium .badge--demo {
		color: var(--apricot);
		border-color: rgba(var(--glow-2-rgb), 0.5);
	}
	.body {
		position: relative;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding: 0 22px 22px;
		flex: 1;
	}
	.logo {
		display: grid;
		place-items: center;
		width: 64px;
		height: 64px;
		margin-top: -32px;
		margin-bottom: 6px;
		border-radius: 16px;
		background: var(--cream);
		border: 3px solid #fffaf3;
		box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.45);
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.3rem;
		color: var(--vermilion-deep);
		position: relative;
		z-index: 1;
	}
	.premium .logo {
		background: var(--ink);
		color: var(--apricot);
	}
	.name {
		font-size: 1.55rem;
		line-height: 1.1;
	}
	.place {
		font-size: 0.82rem;
		font-weight: 700;
		color: var(--text-muted);
	}
	.industry {
		display: flex;
		align-items: center;
		gap: 8px;
		font-size: 0.86rem;
		font-weight: 700;
	}
	.mini-disc {
		display: grid;
		place-items: center;
		width: 22px;
		height: 22px;
		border-radius: 50%;
		background: var(--metal-champagne);
	}
	.desc {
		font-size: 0.92rem;
		color: var(--text-muted);
	}
	.looking {
		display: grid;
		gap: 6px;
		margin-top: 4px;
	}
	.looking__label {
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--vermilion-deep);
	}
	.need {
		padding: 4px 10px;
		border-radius: 999px;
		background: var(--surface);
		font-size: 0.74rem;
		font-weight: 700;
	}
	.foot {
		margin-top: auto;
		padding-top: 14px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 10px;
	}
	.trust {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-size: 0.78rem;
		font-weight: 800;
		color: var(--ink);
	}
	.trust--muted {
		font-weight: 700;
		color: var(--text-muted);
	}
	.view {
		display: inline-flex;
		align-items: center;
		gap: 10px;
		font-size: 0.85rem;
		font-weight: 800;
		text-decoration: none;
	}
	.view::after {
		content: '';
		position: absolute;
		inset: 0;
	}
	.card {
		position: relative;
	}
</style>
