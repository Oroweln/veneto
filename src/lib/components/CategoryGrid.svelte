<script lang="ts">
	import { reveal } from '$lib/actions/reveal';
	import { useI18n } from '$lib/i18n';
	import type { IconName } from './icons';
	import Icon from './Icon.svelte';

	/** Numbered category tiles, closed by a dark tile with a call to action. */
	let {
		items,
		prefix,
		join
	}: {
		items: { id: string; icon: IconName }[];
		/** i18n key prefix; each name is `${prefix}.${id}`. */
		prefix: string;
		join: { text: string; cta: string; href: string };
	} = $props();

	const i18n = useI18n();
	// The join tile fills the last row of the 3-column grid.
	const joinSpan = $derived(3 - (items.length % 3));
</script>

<ul class="grid">
	{#each items as s, i (s.id)}
		<li class="tile" use:reveal={(i % 3) * 40}>
			<span class="tile__icon disc"><Icon name={s.icon} size={20} /></span>
			<span class="tile__num">{String(i + 1).padStart(2, '0')}</span>
			<span class="tile__name">{i18n.t(`${prefix}.${s.id}`)}</span>
		</li>
	{/each}
	<li class="tile tile--join on-ink span-{joinSpan}" use:reveal={40}>
		<span class="tile__name">{join.text}</span>
		<a class="btn btn--primary btn--sm" href={i18n.path(join.href)}>{join.cta} <span class="arrow">→</span></a>
	</li>
</ul>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 14px;
	}
	.tile {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-areas: 'icon num' 'name name';
		align-content: start;
		gap: 14px;
		padding: 20px 22px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.tile__icon {
		grid-area: icon;
	}
	.tile__num {
		grid-area: num;
		justify-self: end;
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		color: var(--text-muted);
	}
	.tile__name {
		grid-area: name;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.3rem;
		line-height: 1.15;
	}
	.tile--join {
		grid-template-columns: 1fr;
		grid-template-areas: none;
		align-content: space-between;
		background: var(--ink-2);
		border-color: transparent;
		color: var(--cream);
	}
	.tile--join .tile__name {
		grid-area: auto;
	}
	.tile--join .btn {
		justify-self: start;
	}
	.span-2 {
		grid-column: span 2;
	}
	.span-3 {
		grid-column: 1 / -1;
	}
	@media (max-width: 900px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.span-2,
		.span-3 {
			grid-column: auto;
		}
	}
	@media (max-width: 520px) {
		.grid {
			grid-template-columns: 1fr;
		}
	}
</style>
