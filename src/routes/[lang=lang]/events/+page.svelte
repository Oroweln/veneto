<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { reveal, onscreen } from '$lib/actions/reveal';
	import { CATEGORY_ICON, EVENT_FILTERS, SAMPLE_EVENTS, type EventFilter } from '$lib/data/events';
	import { toLines } from '$lib/billboards';
	import Seo from '$lib/components/Seo.svelte';
	import StatementBand from '$lib/components/StatementBand.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import ListingsPreview from '$lib/components/ListingsPreview.svelte';
	import { tilt } from '$lib/actions/tilt';
	import TryHint from '$lib/components/TryHint.svelte';
	import FloatChip from '$lib/components/FloatChip.svelte';
	import ClosingBand from '$lib/components/ClosingBand.svelte';
	import Icon from '$lib/components/Icon.svelte';

	const i18n = useI18n();
	let listingsUsed = $state(false);
	let filter = $state<EventFilter | null>(null);

	const today = new Date();
	today.setHours(0, 0, 0, 0);
	const DAY = 86_400_000;

	const events = $derived(
		SAMPLE_EVENTS.map((e) => {
			const date = new Date(today.getTime() + e.day * DAY);
			return {
				...e,
				icon: CATEGORY_ICON[e.categories[0]],
				dayNum: new Intl.DateTimeFormat(i18n.lang, { day: 'numeric' }).format(date),
				month: new Intl.DateTimeFormat(i18n.lang, { month: 'short' }).format(date).replace('.', ''),
				weekday: new Intl.DateTimeFormat(i18n.lang, { weekday: 'long' }).format(date),
				label: new Intl.DateTimeFormat(i18n.lang, { weekday: 'short', day: 'numeric', month: 'short' }).format(date)
			};
		})
	);

	const matches = (e: (typeof SAMPLE_EVENTS)[number], f: EventFilter | null) =>
		f === null ? true : f === 'today' ? e.day === 0 : f === 'week' ? e.day < 7 : e.categories.includes(f);

	const shown = $derived(events.filter((e) => matches(e, filter)));
	const count = (f: EventFilter) => SAMPLE_EVENTS.filter((e) => matches(e, f)).length;
</script>

<Seo title={i18n.t('eventsPage.seo.title')} description={i18n.t('eventsPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.events.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('eventsPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('eventsPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('eventsPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('eventsPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href="#calendar">{i18n.t('eventsPage.hero.cta')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/advertise')}>{i18n.t('eventsPage.cta.button')}</a>
		</div>
	{/snippet}
	{#snippet stage()}
		<TryHint hint={i18n.t('common.try.listings')} done={listingsUsed} />
		<div class="stage" use:tilt>
			<ListingsPreview
				interactive
				bind:touched={listingsUsed}
				url="veneto.app/events"
				title={i18n.t('eventsPage.stage.title')}
				items={events.slice(0, 3).map((e) => ({
					icon: e.icon,
					type: `${e.label} · ${e.time}`,
					name: i18n.t(`eventsPage.items.${e.key}.title`),
					place: i18n.t(`eventsPage.items.${e.key}.place`)
				}))}
			/>
			<FloatChip style="top: -18px; right: 8%;"><strong>{count('week')}</strong> {i18n.t('eventsPage.hero.chip')}</FloatChip>
			<FloatChip tone="apricot" delay={2} hideOnPhone style="bottom: -16px; left: 6%;"><strong>7</strong> {i18n.t('home.chips.provinces')}</FloatChip>
		</div>
	{/snippet}
</PageHero>

<!-- 01 CALENDAR -->
<section class="section" id="calendar" use:onscreen>
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('eventsPage.list.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('eventsPage.list.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('eventsPage.list.lede')}</p>
		</div>

		<div class="filters" role="group" aria-label={i18n.t('eventsPage.filters.label')}>
			<button class="filter" aria-pressed={filter === null} onclick={() => (filter = null)}>
				{i18n.t('eventsPage.filters.all')} <span class="filter__count">{SAMPLE_EVENTS.length}</span>
			</button>
			{#each EVENT_FILTERS as f (f)}
				<button class="filter" class:filter--time={f === 'today' || f === 'week'} aria-pressed={filter === f} onclick={() => (filter = filter === f ? null : f)}>
					{i18n.t(`eventsPage.filters.${f}`)} <span class="filter__count">{count(f)}</span>
				</button>
			{/each}
		</div>

		<p class="results" aria-live="polite">
			{i18n.t('eventsPage.list.results', { count: shown.length })}
			<span class="badge badge--demo">{i18n.t('common.sample')}</span>
		</p>

		{#if shown.length}
			<ul class="events">
				{#each shown as e (e.key)}
					<li class="event card-hover">
						<div class="event__date">
							<span class="event__day">{e.dayNum}</span>
							<span class="event__month">{e.month}</span>
						</div>
						<div class="event__body">
							<p class="event__tags">
								{#each e.categories as c (c)}<span>{i18n.t(`eventsPage.filters.${c}`)}</span>{/each}
							</p>
							<h3 class="event__title">{i18n.t(`eventsPage.items.${e.key}.title`)}</h3>
							<p class="event__meta">
								<span><Icon name="calendar" size={14} />{e.weekday} · {e.time}</span>
								<span><Icon name="pin" size={14} />{i18n.t(`eventsPage.items.${e.key}.place`)}</span>
							</p>
						</div>
						<span class="event__icon disc"><Icon name={e.icon} size={18} /></span>
					</li>
				{/each}
			</ul>
		{:else}
			<p class="empty">{i18n.t('eventsPage.list.empty')}</p>
		{/if}
		<p class="note" style="margin-top: 20px">{i18n.t('eventsPage.list.note')}</p>
	</div>
</section>

<!-- BILLBOARD -->
<StatementBand lines={toLines(i18n.t('content.bank.matchmaking.oneIntroduction'))} size="lg" />

<ClosingBand title={i18n.t('eventsPage.cta.title')} cta={i18n.t('eventsPage.cta.button')} href="/advertise" />

<style>
	:global(.phero__copy) .hero-title {
		text-transform: uppercase;
		letter-spacing: 0;
		line-height: 1.02;
		font-size: clamp(2rem, 3.6vw, 3.2rem);
	}
	.hero-title span {
		display: block;
	}
	.hero-actions {
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		margin-top: 8px;
	}
	.stage {
		position: relative;
		/* Resting angle; the tilt action leans it toward the pointer */
		transform: perspective(1400px) rotateY(var(--ry, -8deg)) rotateX(var(--rx, 4deg));
		transition: transform 0.6s var(--ease);
	}

	.filters {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-bottom: 22px;
	}
	.filter {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		min-height: 40px;
		padding: 0 16px;
		border-radius: 999px;
		border: 1px solid var(--line);
		background: var(--surface);
		color: var(--text);
		font: inherit;
		font-size: 0.86rem;
		font-weight: 700;
		cursor: pointer;
		transition:
			background 0.2s,
			color 0.2s,
			border-color 0.2s;
	}
	.filter:hover {
		border-color: var(--burgundy);
	}
	.filter--time {
		border-style: dashed;
	}
	.filter[aria-pressed='true'] {
		background: var(--burgundy);
		border-color: var(--burgundy);
		color: var(--cream);
	}
	.filter__count {
		min-width: 22px;
		padding: 1px 6px;
		border-radius: 999px;
		background: rgba(36, 26, 23, 0.08);
		font-size: 0.72rem;
		text-align: center;
	}
	.filter[aria-pressed='true'] .filter__count {
		background: rgba(245, 230, 211, 0.2);
	}
	.results {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 16px;
		font-weight: 700;
		color: var(--text-muted);
	}

	.events {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 14px;
	}
	.event {
		position: relative;
		display: grid;
		grid-template-columns: auto 1fr auto;
		gap: 18px;
		align-items: start;
		padding: 20px;
		border-radius: var(--radius-card);
		border: 1px solid var(--line);
		background: var(--surface);
	}
	.event__date {
		display: grid;
		justify-items: center;
		min-width: 64px;
		padding: 10px 8px;
		border-radius: 14px;
		background: var(--burgundy);
		color: var(--cream);
	}
	.event__day {
		font-family: var(--font-display);
		font-weight: 800;
		font-size: 1.9rem;
		line-height: 1;
	}
	.event__month {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.event__body {
		display: grid;
		gap: 6px;
		min-width: 0;
	}
	.event__tags {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 12px;
		font-size: 0.66rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.event__title {
		font-size: 1.25rem;
		line-height: 1.2;
	}
	.event__meta {
		display: flex;
		flex-wrap: wrap;
		gap: 4px 16px;
		font-size: 0.84rem;
		color: var(--text-muted);
	}
	.event__meta span {
		display: inline-flex;
		align-items: center;
		gap: 6px;
	}
	.event__meta span:first-child {
		text-transform: capitalize;
	}
	.empty {
		padding: 40px;
		border-radius: var(--radius-card);
		border: 1px dashed var(--line);
		text-align: center;
		color: var(--text-muted);
	}
	@media (max-width: 900px) {
		.events {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 520px) {
		.stage {
			transform: none;
		}
		.event {
			grid-template-columns: auto 1fr;
		}
		.event__icon {
			display: none;
		}
	}
</style>
