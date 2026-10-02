<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import Icon from './Icon.svelte';
	import type { IconName } from './icons';

	const i18n = useI18n();

	// Live sections only.
	const steps: { href: string; key: string; icon: IconName; recommended?: boolean }[] = [
		{ href: '/territories', key: 'territories', icon: 'map', recommended: true },
		{ href: '/', key: 'home', icon: 'compass' },
		{ href: '/register', key: 'register', icon: 'plus' }
	];
</script>

<section class="section">
	<div class="container">
		<div class="section-head">
			<p class="eyebrow">{i18n.t('next.eyebrow')}</p>
			<h2 class="h2">{i18n.t('next.title')}</h2>
		</div>
		<ul class="steps">
			{#each steps as s, i (s.href)}
				<li use:reveal={i * 40}>
					<a class="step card-hover disc-host" class:recommended={s.recommended} class:ink-scope={s.recommended} href={i18n.path(s.href)}>
						<span class="disc"><Icon name={s.icon} size={20} /></span>
						<span class="step__name">{i18n.t(`next.${s.key}.name`)}</span>
						<span class="step__text">{i18n.t(`next.${s.key}.text`)}</span>
						<span class="arrow-circle"><Icon name="arrow" size={16} /></span>
					</a>
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.steps {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 16px;
	}
	.steps li {
		display: grid;
	}
	.step {
		display: grid;
		gap: 10px;
		align-content: start;
		padding: 24px;
		border-radius: var(--radius-card);
		background: #fffaf3;
		border: 1px solid var(--line);
		text-decoration: none;
		overflow: hidden;
	}
	.step.recommended {
		background: var(--ink-2);
		color: var(--cream);
		border-color: transparent;
	}
	.step__name {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.4rem;
		margin-top: 6px;
	}
	.step__text {
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.recommended .step__text {
		color: var(--text-on-ink-muted);
	}
	.arrow-circle {
		margin-top: 6px;
	}
	@media (max-width: 760px) {
		.steps {
			grid-template-columns: 1fr;
		}
	}
</style>
