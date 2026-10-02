<script lang="ts">
	import { enhance } from '$app/forms';
	import { page } from '$app/state';
	import { useI18n } from '$lib/i18n';
	import { reveal } from '$lib/actions/reveal';
	import { CONTACT_EMAIL, CONTACT_REASONS, isReason } from '$lib/data/contact';
	import Seo from '$lib/components/Seo.svelte';
	import PageHero from '$lib/components/PageHero.svelte';
	import Icon from '$lib/components/Icon.svelte';

	let { form } = $props();
	const i18n = useI18n();
	const SITE = 'https://zoemilano.rs/';

	// A link like /contact?reason=investment preselects the reason.
	const fromUrl = page.url.searchParams.get('reason');
	let reason = $state<string>(isReason(fromUrl) ? fromUrl : '');
	let sending = $state(false);

	const values = $derived(form && 'values' in form ? form.values : undefined);
	const errors = $derived<Record<string, boolean>>(form && 'errors' in form && form.errors ? form.errors : {});
	const mailto = $derived(
		`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(reason ? i18n.t(`contactPage.reasons.${reason}`) : i18n.t('contactPage.form.subject'))}${
			values?.message ? `&body=${encodeURIComponent(values.message)}` : ''
		}`
	);
</script>

<Seo title={i18n.t('contactPage.seo.title')} description={i18n.t('contactPage.seo.description')} />

<PageHero crumbs={[{ label: i18n.t('sections.contact.name') }]}>
	{#snippet copy()}
		<p class="eyebrow">{i18n.t('contactPage.hero.eyebrow')}</p>
		<h1 class="hero-title">
			<span>{i18n.t('contactPage.hero.line1')}</span>
			<span class="metal-text">{i18n.t('contactPage.hero.line2')}</span>
		</h1>
		<p class="lede">{i18n.t('contactPage.hero.text')}</p>
		<div class="hero-actions">
			<a class="btn btn--primary btn--big" href="#enquiry">{i18n.t('contactPage.form.submit')} <span class="arrow">→</span></a>
		</div>
	{/snippet}
	{#snippet stage()}
		<div class="email-card">
			<span class="disc"><Icon name="mail" size={22} /></span>
			<p class="email-card__label">{i18n.t('contactPage.email')}</p>
			<a class="email-card__address" href="mailto:{CONTACT_EMAIL}">{CONTACT_EMAIL}</a>
			<p class="email-card__owner">
				{i18n.t('contactPage.owner')}
				<a href={SITE} target="_blank" rel="noopener">
					{i18n.t('brand.owner')}<Icon name="arrowUpRight" size={13} /><span class="sr-only">({i18n.t('common.newTab')})</span>
				</a>
			</p>
		</div>
	{/snippet}
</PageHero>

<section class="section" id="enquiry">
	<div class="container">
		<div class="section-head section-head--split">
			<div use:reveal>
				<p class="kicker"><span class="kicker__num">01</span>{i18n.t('contactPage.form.kicker')}</p>
				<h2 class="h2" style="margin-top: 14px">{i18n.t('contactPage.form.title')}</h2>
			</div>
			<p class="lede" use:reveal={80}>{i18n.t('contactPage.form.lede')}</p>
		</div>

		{#if form && 'sent' in form && form.sent}
			<div class="result result--ok" role="status">
				<span class="disc"><Icon name="check" size={22} /></span>
				<div>
					<h3>{i18n.t('contactPage.form.sentTitle')}</h3>
					<p>{i18n.t('contactPage.form.sentText')}</p>
				</div>
			</div>
		{:else}
			<form
				class="enquiry"
				method="POST"
				novalidate
				use:enhance={() => {
					sending = true;
					return async ({ update }) => {
						await update({ reset: false });
						sending = false;
					};
				}}
			>
				<fieldset class="reasons" class:invalid={errors.reason}>
					<legend class="label">{i18n.t('contactPage.form.reason')} <span class="req">*</span></legend>
					<div class="reasons__grid">
						{#each CONTACT_REASONS as r (r)}
							<label class="reason" class:checked={reason === r}>
								<input type="radio" name="reason" value={r} bind:group={reason} />
								<span>{i18n.t(`contactPage.reasons.${r}`)}</span>
							</label>
						{/each}
					</div>
					{#if errors.reason}<p class="error">{i18n.t('contactPage.form.errors.reason')}</p>{/if}
				</fieldset>

				<div class="fields">
					<label class="field">
						<span class="label">{i18n.t('contactPage.form.name')} <span class="req">*</span></span>
						<input name="name" autocomplete="name" required value={values?.name ?? ''} aria-invalid={errors.name ? 'true' : undefined} />
						{#if errors.name}<span class="error">{i18n.t('contactPage.form.errors.name')}</span>{/if}
					</label>
					<label class="field">
						<span class="label">{i18n.t('contactPage.form.organisation')}</span>
						<input name="organisation" autocomplete="organization" value={values?.organisation ?? ''} />
					</label>
					<label class="field">
						<span class="label">{i18n.t('contactPage.form.email')} <span class="req">*</span></span>
						<input name="email" type="email" autocomplete="email" required value={values?.email ?? ''} aria-invalid={errors.email ? 'true' : undefined} />
						{#if errors.email}<span class="error">{i18n.t('contactPage.form.errors.email')}</span>{/if}
					</label>
					<label class="field">
						<span class="label">{i18n.t('contactPage.form.phone')}</span>
						<input name="phone" type="tel" autocomplete="tel" value={values?.phone ?? ''} />
					</label>
					<label class="field field--wide">
						<span class="label">{i18n.t('contactPage.form.message')} <span class="req">*</span></span>
						<textarea name="message" rows="6" required aria-invalid={errors.message ? 'true' : undefined}>{values?.message ?? ''}</textarea>
						{#if errors.message}<span class="error">{i18n.t('contactPage.form.errors.message')}</span>{/if}
					</label>
					<!-- Spam trap, hidden from people -->
					<label class="trap" aria-hidden="true">Website <input name="website" tabindex="-1" autocomplete="off" /></label>
				</div>

				<label class="consent">
					<input type="checkbox" name="consent" required aria-invalid={errors.consent ? 'true' : undefined} />
					<span>
						{i18n.t('contactPage.form.consent')}
						<a href={i18n.path('/privacy')}>{i18n.t('sections.privacy.name')}</a>.
					</span>
				</label>
				{#if errors.consent}<p class="error">{i18n.t('contactPage.form.errors.consent')}</p>{/if}

				{#if form && 'unavailable' in form && form.unavailable}
					<div class="result result--warn" role="alert">
						<Icon name="mail" size={20} />
						<p>
							{i18n.t('contactPage.form.unavailable')}
							<a href={mailto}>{CONTACT_EMAIL}</a>
						</p>
					</div>
				{/if}

				<div class="enquiry__foot">
					<button class="btn btn--primary btn--big" type="submit" disabled={sending}>
						{i18n.t(sending ? 'contactPage.form.sending' : 'contactPage.form.submit')} <span class="arrow">→</span>
					</button>
					<p class="enquiry__alt">{i18n.t('contactPage.form.or')} <a href={mailto}>{CONTACT_EMAIL}</a></p>
				</div>
			</form>
		{/if}
	</div>
</section>

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
	.email-card {
		display: grid;
		gap: 14px;
		justify-items: start;
		padding: clamp(24px, 3.4vw, 40px);
		border-radius: 26px;
		background: var(--ink-2);
		border: 1px solid var(--line-on-ink);
		box-shadow: var(--shadow-dark);
	}
	.email-card__label {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--gold);
	}
	.email-card__address {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: clamp(1.5rem, 3vw, 2.3rem);
		line-height: 1.1;
		color: var(--cream);
		text-decoration: underline;
		text-decoration-color: rgba(var(--glow-2-rgb), 0.5);
		text-underline-offset: 6px;
		word-break: break-word;
	}
	.email-card__owner {
		font-size: 0.86rem;
		color: var(--text-on-ink-muted);
	}
	.email-card__owner a {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		font-weight: 800;
		color: var(--gold);
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	/* Form */
	.enquiry {
		display: grid;
		gap: 26px;
		padding: clamp(22px, 3.4vw, 44px);
		border-radius: 28px;
		background: var(--surface);
		border: 1px solid var(--line);
		box-shadow: var(--shadow-light);
	}
	.label {
		font-size: 0.68rem;
		font-weight: 800;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--burgundy);
	}
	.req {
		color: var(--burgundy);
	}
	.reasons {
		margin: 0;
		padding: 0;
		border: 0;
		display: grid;
		gap: 12px;
	}
	.reasons legend {
		margin-bottom: 12px;
	}
	.reasons__grid {
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 8px;
	}
	.reason {
		position: relative;
		display: flex;
		align-items: center;
		min-height: 56px;
		padding: 10px 14px;
		border-radius: 14px;
		border: 1px solid var(--line);
		background: var(--paper);
		font-size: 0.86rem;
		font-weight: 700;
		line-height: 1.25;
		cursor: pointer;
		transition:
			border-color 0.2s,
			background 0.2s,
			color 0.2s;
	}
	.reason:hover {
		border-color: var(--burgundy);
	}
	.reason input {
		position: absolute;
		opacity: 0;
		pointer-events: none;
	}
	.reason:has(input:focus-visible) {
		outline: 3px solid var(--burgundy);
		outline-offset: 2px;
	}
	.reason.checked {
		background: var(--burgundy);
		border-color: var(--burgundy);
		color: var(--cream);
	}
	.fields {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 14px;
	}
	.field {
		display: grid;
		gap: 6px;
	}
	.field--wide {
		grid-column: 1 / -1;
	}
	.field input,
	.field textarea {
		width: 100%;
		padding: 13px 16px;
		border-radius: var(--radius-input);
		border: 1px solid var(--line);
		background: var(--paper);
		font: inherit;
		color: var(--text);
	}
	.field textarea {
		resize: vertical;
		min-height: 140px;
	}
	.field input:focus,
	.field textarea:focus {
		outline: none;
		border-color: var(--burgundy);
		box-shadow: 0 0 0 3px rgba(var(--glow-rgb), 0.15);
	}
	[aria-invalid='true'] {
		border-color: #b3261e !important;
	}
	.error {
		font-size: 0.8rem;
		font-weight: 700;
		color: #b3261e;
	}
	.trap {
		position: absolute;
		left: -9999px;
	}
	.consent {
		display: flex;
		gap: 12px;
		align-items: flex-start;
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.consent input {
		flex: none;
		width: 20px;
		height: 20px;
		margin-top: 2px;
		accent-color: var(--burgundy);
	}
	.consent a,
	.enquiry__alt a,
	.result a {
		font-weight: 800;
		color: var(--burgundy);
	}
	.enquiry__foot {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 14px 22px;
	}
	.enquiry__foot button[disabled] {
		opacity: 0.7;
		cursor: progress;
	}
	.enquiry__alt {
		font-size: 0.9rem;
		color: var(--text-muted);
	}
	.result {
		display: flex;
		gap: 16px;
		align-items: flex-start;
		padding: 20px 22px;
		border-radius: 18px;
	}
	.result--ok {
		padding: clamp(24px, 3.4vw, 40px);
		background: var(--surface);
		border: 1px solid var(--line);
	}
	.result--ok h3 {
		font-size: 1.5rem;
		margin-bottom: 6px;
	}
	.result--warn {
		background: rgba(var(--glow-2-rgb), 0.18);
		border: 1px solid rgba(var(--glow-2-rgb), 0.6);
		font-weight: 600;
	}
	.result--warn :global(svg) {
		flex: none;
		margin-top: 2px;
		color: var(--burgundy);
	}
	@media (max-width: 1000px) {
		.reasons__grid {
			grid-template-columns: repeat(3, minmax(0, 1fr));
		}
	}
	@media (max-width: 640px) {
		.reasons__grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
		.fields {
			grid-template-columns: 1fr;
		}
	}
</style>
