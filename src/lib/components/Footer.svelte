<script lang="ts">
	import { useI18n } from '$lib/i18n';
	import { FOOTER_COLUMNS } from '$lib/data/nav';
	import logoMark from '$lib/assets/logo-mark.svg';
	import logoWordmark from '$lib/assets/logo-wordmark.svg';
	import LangSwitch from './LangSwitch.svelte';
	import AppBadges from './AppBadges.svelte';
	import Icon from './Icon.svelte';

	const i18n = useI18n();
	const year = new Date().getFullYear();
	const ZOE = 'https://zoemilano.rs/';

	const socials = [
		{ name: 'LinkedIn', short: 'in' },
		{ name: 'Instagram', short: 'ig' },
		{ name: 'YouTube', short: 'yt' }
	];
</script>

<footer class="footer on-ink">
	<div class="metal-edge"></div>
	<div class="container footer__inner">
		<div class="brand-col">
			<div class="brand-main">
			<img class="mark" src={logoMark} alt="" width="110" height="110" />
			<img class="wordmark" src={logoWordmark} alt={i18n.t('brand.name')} width="420" height="36" />
			<p class="claim statement">{i18n.t('footer.statement')}</p>
			<p class="about">{i18n.t('footer.about')}</p>
			<p class="provided">
				{i18n.t('footer.provided')}
				<a class="owner-link" href={ZOE} target="_blank" rel="noopener">
					ZOE MILANO d.o.o.<Icon name="arrowUpRight" size={13} /><span class="sr-only">({i18n.t('common.newTab')})</span>
				</a>
			</p>
			</div>
			<div class="brand-side">
			<p class="independence">
				{i18n.t('footer.independence')}
				<a href={i18n.path('/legal')}>{i18n.t('footer.readStatement')}</a>
			</p>
			<div class="socials">
				{#each socials as s (s.name)}
					<span class="social" title="{s.name} · {i18n.t('common.soon')}">
						<span aria-hidden="true">{s.short}</span>
						<span class="sr-only">{s.name} · {i18n.t('common.soon')}</span>
					</span>
				{/each}
			</div>
			<AppBadges />
			<LangSwitch />
			</div>
		</div>

		{#each FOOTER_COLUMNS as col (col.key)}
			<nav class="col" aria-label={i18n.t(`nav.groups.${col.key}`)}>
				<p class="col__title">{i18n.t(`nav.groups.${col.key}`)}</p>
				<ul>
					{#each col.items as item (item.href + item.key)}
						<li><a href={i18n.path(item.href)}>{i18n.t(`footer.links.${item.key}`)}</a></li>
					{/each}
				</ul>
			</nav>
		{/each}
	</div>
	<div class="container bottom">
		<p>{i18n.t('brand.name')} · {i18n.t('footer.bottomLine')}</p>
		<p>
			© {year}
			<a class="owner-link" href={ZOE} target="_blank" rel="noopener">
				{i18n.t('brand.owner')}<Icon name="arrowUpRight" size={13} /><span class="sr-only">({i18n.t('common.newTab')})</span>
			</a>
			· {i18n.t('footer.owner')}
		</p>
	</div>
</footer>

<style>
	.footer {
		background: var(--ink);
		color: var(--cream);
		position: relative;
		overflow: hidden;
	}
	.footer::before {
		content: '';
		position: absolute;
		inset: 0;
		background: radial-gradient(50% 60% at 10% 0%, rgba(var(--glow-rgb), 0.14), transparent 70%);
		pointer-events: none;
	}
	.footer__inner {
		position: relative;
		display: grid;
		grid-template-columns: repeat(5, minmax(0, 1fr));
		gap: 40px 28px;
		padding-block: clamp(56px, 7vw, 88px) 40px;
	}
	/* Brand row above the link columns */
	.brand-col {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: minmax(0, 1.3fr) minmax(0, 1fr);
		gap: 32px clamp(32px, 6vw, 96px);
		align-items: end;
		padding-bottom: 40px;
		border-bottom: 1px solid var(--line-on-ink);
	}
	.brand-main,
	.brand-side {
		display: grid;
		gap: 18px;
		justify-items: start;
		align-content: start;
	}
	.mark {
		width: 110px;
		height: 110px;
	}
	.wordmark {
		display: block;
		width: min(420px, 100%);
		height: auto;
	}
	.claim {
		font-size: 1.35rem;
		line-height: 1.2;
	}
	.about {
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--cream);
		max-width: 40ch;
	}
	.provided {
		font-size: 0.86rem;
		color: var(--text-on-ink-muted);
	}
	.independence a {
		color: var(--gold);
		font-weight: 800;
		text-underline-offset: 3px;
	}
	.independence {
		font-size: 0.86rem;
		color: var(--text-on-ink-muted);
		max-width: 44ch;
	}
	.socials {
		display: flex;
		gap: 8px;
	}
	.social {
		display: grid;
		place-items: center;
		width: 38px;
		height: 38px;
		border-radius: 50%;
		border: 1px solid var(--line-on-ink);
		font-size: 0.72rem;
		font-weight: 800;
		color: var(--text-on-ink-muted);
	}
	.col__title {
		font-size: 0.72rem;
		font-weight: 800;
		letter-spacing: 0.14em;
		text-transform: uppercase;
		color: var(--apricot);
		margin-bottom: 14px;
	}
	.col li + li {
		margin-top: 8px;
	}
	.col a {
		font-size: 0.88rem;
		line-height: 1.35;
		text-decoration: none;
		color: var(--text-on-ink-muted);
	}
	.col a:hover {
		color: var(--cream);
	}
	.bottom {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		gap: 8px 24px;
		padding-block: 22px 28px;
		border-top: 1px solid var(--line-on-ink);
		font-size: 0.78rem;
		color: var(--text-on-ink-muted);
	}
	.owner-link {
		display: inline-flex;
		align-items: center;
		gap: 3px;
		font-weight: 800;
		color: var(--gold);
		text-decoration: underline;
		text-decoration-color: rgba(var(--glow-2-rgb), 0.5);
		text-underline-offset: 3px;
		transition: color 0.2s, text-decoration-color 0.2s;
	}
	.owner-link:hover {
		color: var(--cream);
		text-decoration-color: var(--cream);
	}
	@media (max-width: 900px) {
		.brand-col {
			grid-template-columns: 1fr;
		}
	}
	@media (max-width: 760px) {
		.footer__inner {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
