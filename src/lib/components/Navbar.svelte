<script lang="ts">
	import { afterNavigate, goto } from '$app/navigation';
	import { page } from '$app/state';
	import { stripLang, useI18n } from '$lib/i18n';
	import { COMPANY, ECOSYSTEM_MENU, LEGAL, MAIN_NAV, PLATFORM_KEY, PLATFORM_MENU, RESOURCES } from '$lib/data/nav';
	import logoMark from '$lib/assets/logo-mark.svg';
	import logoWordmark from '$lib/assets/logo-wordmark.svg';
	import Icon from './Icon.svelte';
	import LangSwitch from './LangSwitch.svelte';

	const i18n = useI18n();

	let progress = $state(0);
	let scrolled = $state(false);
	let dialog: HTMLDialogElement | undefined = $state();
	/** Open dropdown in the main bar (ecosystem or platform), if any. */
	let openMenu = $state<string | null>(null);
	let menuItems: Record<string, HTMLElement> = $state({});

	/** Dropdowns in the main bar. Labels: nav.items.{key}, nav.{key}Menu, nav.{key}Intro. */
	const DROPDOWNS = [
		{ key: 'ecosystem', items: ECOSYSTEM_MENU, overview: null },
		{ key: PLATFORM_KEY, items: PLATFORM_MENU, overview: '/platform' }
	];

	function onScroll() {
		const max = document.documentElement.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
		// Big logo at the top of the page, compact once scrolling.
		if (!scrolled && window.scrollY > 80) scrolled = true;
		else if (scrolled && window.scrollY < 10) scrolled = false;
	}

	function onKey(e: KeyboardEvent) {
		if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
			e.preventDefault();
			goto(i18n.path('/search'));
		}
		if (e.key === 'Escape' && openMenu) {
			menuItems[openMenu]?.querySelector('button')?.focus();
			openMenu = null;
		}
	}

	function onPointerDown(e: PointerEvent) {
		if (openMenu && !menuItems[openMenu]?.contains(e.target as Node)) openMenu = null;
	}

	afterNavigate(() => {
		dialog?.close();
		openMenu = null;
		onScroll();
	});

	const current = $derived(stripLang(page.url.pathname));
	const isActive = (href: string) => current === href || current.startsWith(href + '/');
	// Drawer extras: everything not already in the main list.
	const drawerGroups = [
		{ key: 'resources', items: RESOURCES },
		{ key: 'company', items: COMPANY.filter((item) => !MAIN_NAV.some((m) => m.href === item.href)) }
	];
	const menuActive = (m: (typeof DROPDOWNS)[number]) =>
		(m.overview !== null && isActive(m.overview)) || m.items.some((item) => isActive(item.href));
</script>

<svelte:window onscroll={onScroll} onkeydown={onKey} onpointerdown={onPointerDown} />

<header class="nav on-ink" class:scrolled>
	<div class="container top">
		<a class="brand" href={i18n.path('/')} aria-label={i18n.t('nav.homeLabel')}>
			<img class="mark" src={logoMark} alt="" width="88" height="88" />
			<span class="brand__text">
				<img class="wordmark" src={logoWordmark} alt="" width="360" height="31" />
				<span class="tagline">{i18n.t('brand.tagline')}</span>
			</span>
		</a>

		<div class="actions">
			<span class="lang-wrap"><LangSwitch /></span>
			<a class="search-pill" href={i18n.path('/search')} aria-label={i18n.t('nav.search')}>
				<Icon name="search" size={17} />
				<span class="search-pill__text">{i18n.t('sections.search.name')}</span>
				<kbd>{i18n.t('nav.shortcut')}</kbd>
			</a>
			<a class="login" href={i18n.path('/login')}>{i18n.t('nav.login')}</a>
			<a class="btn btn--primary btn--sm join" href={i18n.path('/register')}>
				<span class="join__long">{i18n.t('nav.joinNetwork')}</span>
				<span class="join__short">{i18n.t('nav.join')}</span>
			</a>
			<button class="menu-pill" type="button" aria-haspopup="dialog" onclick={() => dialog?.showModal()}>
				<Icon name="menu" size={18} />
				<span>{i18n.t('nav.menu')}</span>
			</button>
		</div>
	</div>

	<nav class="main" aria-label={i18n.t('nav.main')}>
		<ul class="container main__list">
			{#each DROPDOWNS as m (m.key)}
				<li
					class="has-menu"
					bind:this={menuItems[m.key]}
					onmouseenter={() => (openMenu = m.key)}
					onmouseleave={() => (openMenu = null)}
					onfocusout={(e) => {
						if (!menuItems[m.key]?.contains(e.relatedTarget as Node) && openMenu === m.key) openMenu = null;
					}}
				>
					<button
						type="button"
						class="main__link"
						class:active={menuActive(m)}
						aria-expanded={openMenu === m.key}
						aria-controls="{m.key}-menu"
						onclick={() => (openMenu = openMenu === m.key ? null : m.key)}
					>
						{i18n.t(`nav.items.${m.key}`)}
						<span class="chev" class:open={openMenu === m.key}><Icon name="chevronDown" size={20} stroke={2} /></span>
					</button>
					<div id="{m.key}-menu" class="panel panel--{m.key}" class:open={openMenu === m.key}>
						<div class="panel__inner">
							<p class="panel__intro">
								<span class="eyebrow">{i18n.t(`nav.${m.key}Menu`)}</span>
								<span class="panel__lede">{i18n.t(`nav.${m.key}Intro`)}</span>
							</p>
							<ul class="panel__grid">
								{#each m.items as tool (tool.key)}
									<li>
										<a class="tool disc-host" href={i18n.path(tool.href)} aria-current={isActive(tool.href) ? 'page' : undefined}>
											<span class="disc disc--sm"><Icon name={tool.icon ?? 'star'} size={16} /></span>
											<span>
												<span class="tool__name">{i18n.t(`nav.items.${tool.key}`)}</span>
												<span class="tool__text">{i18n.t(`sections.${tool.key}.short`)}</span>
											</span>
										</a>
									</li>
								{/each}
							</ul>
							{#if m.overview}
								<a class="panel__all" href={i18n.path(m.overview)}>{i18n.t(`nav.${m.key}Overview`)} <span aria-hidden="true">→</span></a>
							{/if}
						</div>
					</div>
				</li>
			{/each}
			{#each MAIN_NAV.filter((item) => item.key !== PLATFORM_KEY) as item (item.key)}
				<li>
					<a class="main__link" class:active={isActive(item.href)} href={i18n.path(item.href)} aria-current={isActive(item.href) ? 'page' : undefined}>
						{i18n.t(`nav.items.${item.key}`)}
					</a>
				</li>
			{/each}
		</ul>
	</nav>
	<span class="progress" style="transform: scaleX({progress})" aria-hidden="true"></span>
</header>

<dialog class="drawer on-ink" bind:this={dialog} aria-label={i18n.t('nav.menu')} onclick={(e) => e.target === dialog && dialog?.close()}>
	<div class="drawer__panel">
		<div class="drawer__head">
			<a class="drawer__brand" href={i18n.path('/')} aria-label={i18n.t('nav.homeLabel')}>
				<img src={logoMark} alt="" width="48" height="48" />
				<img src={logoWordmark} alt="" width="190" height="16" />
			</a>
			<button class="close" type="button" onclick={() => dialog?.close()} aria-label={i18n.t('nav.close')}>
				<Icon name="close" size={22} />
			</button>
		</div>
		<div class="drawer__tools">
			<LangSwitch />
			<a class="drawer__search" href={i18n.path('/search')}><Icon name="search" size={16} />{i18n.t('sections.search.name')}</a>
		</div>
		<nav class="drawer__nav" aria-label={i18n.t('nav.main')}>
			<p class="eyebrow">{i18n.t('nav.groups.explore')}</p>
			<ul class="drawer__main">
				<li>
					<a href={i18n.path('/')} aria-current={current === '/' ? 'page' : undefined}>{i18n.t('nav.home')}</a>
				</li>
				{#each [...ECOSYSTEM_MENU, ...MAIN_NAV.filter((item) => item.key !== PLATFORM_KEY)] as item (item.key)}
					<li>
						<a href={i18n.path(item.href)} aria-current={isActive(item.href) ? 'page' : undefined}>
							{i18n.t(`nav.items.${item.key}`)}
							{#if !item.live}<span class="soon">{i18n.t('common.soon')}</span>{/if}
						</a>
					</li>
				{/each}
			</ul>
			<div class="drawer__platform">
				<p class="eyebrow">{i18n.t('nav.items.platform')}</p>
				<ul>
					{#each PLATFORM_MENU as tool (tool.key)}
						<li>
							<a class="drawer__tool" href={i18n.path(tool.href)}>
								<span class="disc disc--sm"><Icon name={tool.icon ?? 'star'} size={15} /></span>
								{i18n.t(`nav.items.${tool.key}`)}
							</a>
						</li>
					{/each}
				</ul>
				<a class="panel__all" href={i18n.path('/platform')}>{i18n.t('nav.platformOverview')} <span aria-hidden="true">→</span></a>
			</div>
			<div class="drawer__groups">
				{#each drawerGroups as g (g.key)}
					<div>
						<p class="eyebrow">{i18n.t(`nav.groups.${g.key}`)}</p>
						<ul>
							{#each g.items as item (item.href)}
								<li><a href={i18n.path(item.href)}>{i18n.t(`sections.${item.key}.name`)}</a></li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</nav>
		<div class="drawer__foot">
			<a class="btn btn--primary btn--big" href={i18n.path('/register')}>{i18n.t('nav.joinNetwork')} <span class="arrow">→</span></a>
			<a class="btn btn--ghost" href={i18n.path('/login')}>{i18n.t('nav.login')}</a>
			<p class="drawer__legal">
				{#each LEGAL as item (item.href)}<a href={i18n.path(item.href)}>{i18n.t(`sections.${item.key}.name`)}</a>{/each}
			</p>
		</div>
	</div>
</dialog>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 50;
		background: rgba(36, 26, 23, 0.97);
		backdrop-filter: blur(14px);
		-webkit-backdrop-filter: blur(14px);
		color: var(--cream);
		border-bottom: 1px solid rgba(245, 230, 211, 0.08);
		text-transform: uppercase;
	}
	.nav button {
		text-transform: inherit;
	}

	/* Top row: brand + actions */
	.top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 16px;
		height: 104px;
		transition: height 0.4s var(--ease);
	}
	.scrolled .top {
		height: 68px;
	}
	.brand {
		display: flex;
		align-items: center;
		gap: 16px;
		text-decoration: none;
		min-width: 0;
	}
	.brand__text {
		display: grid;
		gap: 2px;
		min-width: 0;
	}
	.mark,
	.wordmark,
	.tagline {
		transition:
			width 0.4s var(--ease),
			height 0.4s var(--ease),
			font-size 0.4s var(--ease);
	}
	.mark {
		flex: none;
		width: 84px;
		height: 84px;
	}
	.wordmark {
		display: block;
		width: 360px;
		height: auto;
	}
	.scrolled .mark {
		width: 52px;
		height: 52px;
	}
	.scrolled .wordmark {
		width: 230px;
	}
	.scrolled .tagline {
		font-size: 0.6rem;
	}
	.tagline {
		font-size: 0.74rem;
		font-weight: 700;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.actions {
		display: flex;
		align-items: center;
		gap: 10px;
		flex: none;
	}
	.lang-wrap :global(.lang a) {
		min-width: 34px;
		height: 28px;
		font-size: 0.72rem;
	}
	.search-pill,
	.menu-pill {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 40px;
		padding: 0 14px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		background: rgba(245, 230, 211, 0.05);
		color: var(--cream);
		font-size: 0.85rem;
		font-weight: 700;
		text-decoration: none;
		transition: border-color 0.2s;
	}
	.search-pill:hover,
	.menu-pill:hover {
		border-color: var(--apricot);
	}
	.search-pill__text {
		color: var(--text-on-ink-muted);
	}
	kbd {
		font-family: var(--font-sans);
		font-size: 0.66rem;
		font-weight: 700;
		padding: 2px 7px;
		border-radius: 6px;
		background: rgba(245, 230, 211, 0.1);
		color: var(--text-on-ink-muted);
	}
	.login {
		padding: 0 6px;
		font-size: 0.86rem;
		font-weight: 800;
		text-decoration: none;
		color: var(--cream);
		white-space: nowrap;
	}
	.login:hover {
		color: var(--apricot);
	}
	.join {
		text-transform: uppercase;
		letter-spacing: 0.08em;
		min-height: 42px;
	}
	.join__short {
		display: none;
	}

	/* Second row: main navigation */
	.main {
		border-top: 1px solid rgba(245, 230, 211, 0.07);
	}
	.main__list {
		display: flex;
		flex-wrap: wrap;
		align-items: stretch;
		justify-content: center;
		column-gap: 34px;
		padding-block: 4px;
	}
	.main__list > li {
		position: relative;
		display: flex;
	}
	.main__link {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 4px;
		min-height: 52px;
		padding: 0 4px;
		font-size: 23px;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: var(--text-on-ink-muted);
		text-decoration: none;
		white-space: nowrap;
		transition: color 0.2s;
	}
	.main__link::after {
		content: '';
		position: absolute;
		left: 4px;
		right: 4px;
		bottom: -1px;
		height: 3px;
		border-radius: 3px 3px 0 0;
		background: var(--vermilion);
		transform: scaleX(0);
		transition: transform 0.3s var(--ease);
	}
	.main__link:hover,
	.main__link.active,
	.main__link[aria-expanded='true'] {
		color: var(--cream);
	}
	.main__link.active::after,
	.main__link:hover::after {
		transform: scaleX(1);
	}
	.chev {
		display: inline-grid;
		transition: transform 0.3s var(--ease);
	}
	.chev.open {
		transform: rotate(180deg);
	}

	/* Platform dropdown */
	.panel {
		position: absolute;
		top: 100%;
		left: 50%;
		width: min(640px, 90vw);
		padding-top: 10px;
		visibility: hidden;
		opacity: 0;
		transform: translate(-50%, -6px);
		transition:
			opacity 0.25s var(--ease),
			transform 0.25s var(--ease),
			visibility 0s 0.25s;
	}
	.panel.open {
		visibility: visible;
		opacity: 1;
		transform: translateX(-50%);
		transition:
			opacity 0.25s var(--ease),
			transform 0.25s var(--ease);
	}
	.panel__inner {
		position: relative;
		display: grid;
		gap: 16px;
		padding: 22px;
		border-radius: 22px;
		background:
			radial-gradient(70% 60% at 100% 0%, rgba(var(--glow-rgb), 0.22), transparent 70%),
			var(--ink-2);
		border: 1px solid var(--line-on-ink);
		box-shadow: var(--shadow-dark);
		overflow: hidden;
	}
	.panel__inner::before {
		content: '';
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		height: 4px;
		background: var(--metal-champagne);
	}
	.panel__intro {
		display: grid;
		gap: 4px;
	}
	.panel__lede {
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.15;
	}
	.panel__grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 6px;
	}
	.tool {
		display: grid;
		grid-template-columns: auto 1fr;
		gap: 12px;
		align-items: start;
		padding: 12px;
		border-radius: 14px;
		text-decoration: none;
		transition: background 0.2s;
	}
	.tool:hover,
	.tool[aria-current='page'] {
		background: rgba(245, 230, 211, 0.06);
	}
	.tool__name {
		display: block;
		font-weight: 800;
		font-size: 0.92rem;
	}
	.tool__text {
		display: block;
		font-size: 0.78rem;
		line-height: 1.4;
		color: var(--text-on-ink-muted);
	}
	.panel__all {
		justify-self: start;
		font-size: 0.85rem;
		font-weight: 800;
		color: var(--apricot);
		text-decoration: none;
	}
	.panel__all:hover {
		color: var(--cream);
	}

	.progress {
		position: absolute;
		left: 0;
		right: 0;
		bottom: -1px;
		height: 2px;
		background: linear-gradient(90deg, var(--vermilion), var(--apricot));
		transform-origin: left;
	}

	/* Below desktop width the main row moves into the drawer */
	@media (max-width: 1180px) {
		.main {
			display: none;
		}
		.top {
			height: 84px;
		}
		.scrolled .top {
			height: 68px;
		}
		.mark {
			width: 64px;
			height: 64px;
		}
		.wordmark {
			width: 270px;
		}
		.scrolled .mark {
			width: 48px;
			height: 48px;
		}
		.scrolled .wordmark {
			width: 200px;
		}
	}
	@media (max-width: 1020px) {
		.search-pill__text,
		kbd,
		.tagline {
			display: none;
		}
		.search-pill {
			width: 40px;
			padding: 0;
			justify-content: center;
		}
	}
	@media (max-width: 760px) {
		.lang-wrap,
		.login {
			display: none;
		}
		.join__long {
			display: none;
		}
		.join__short {
			display: inline;
		}
	}
	@media (max-width: 560px) {
		.top {
			height: 72px;
		}
		.scrolled .top {
			height: 62px;
		}
		.brand {
			gap: 10px;
		}
		.mark {
			width: 50px;
			height: 50px;
		}
		.wordmark {
			width: 170px;
		}
		.scrolled .mark {
			width: 40px;
			height: 40px;
		}
		.scrolled .wordmark {
			width: 140px;
		}
		.menu-pill span {
			display: none;
		}
		.menu-pill {
			width: 40px;
			padding: 0;
			justify-content: center;
		}
		.actions {
			gap: 6px;
		}
	}
	@media (max-width: 380px) {
		.search-pill {
			display: none;
		}
	}

	/* Drawer */
	.drawer {
		margin: 0 0 0 auto;
		height: 100dvh;
		max-height: none;
		width: min(560px, 100vw);
		overflow-y: auto;
		max-width: 100vw;
		padding: 0;
		border: 0;
		background: var(--ink);
		color: var(--cream);
		text-transform: uppercase;
	}
	.drawer::backdrop {
		background: rgba(10, 6, 4, 0.6);
		backdrop-filter: blur(4px);
	}
	.drawer[open] {
		animation: slide-in 0.45s var(--ease);
	}
	@keyframes slide-in {
		from {
			transform: translateX(40px);
			opacity: 0;
		}
	}
	.drawer__panel {
		display: flex;
		flex-direction: column;
		gap: 28px;
		min-height: 100%;
		padding: 20px clamp(20px, 5vw, 40px) 32px;
		background:
			radial-gradient(70% 40% at 100% 0%, rgba(var(--glow-rgb), 0.18), transparent 70%),
			var(--ink);
	}
	.drawer__head {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.drawer__brand {
		display: flex;
		align-items: center;
		gap: 12px;
	}
	.drawer__brand img:last-child {
		width: 190px;
		height: auto;
	}
	.drawer__tools {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 12px;
	}
	.drawer__search {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		height: 40px;
		padding: 0 16px;
		border-radius: 999px;
		border: 1px solid var(--line-on-ink);
		font-size: 0.86rem;
		font-weight: 700;
		text-decoration: none;
	}
	.drawer__search:hover {
		border-color: var(--apricot);
	}
	.drawer__nav > .eyebrow {
		margin-bottom: -18px;
	}
	.drawer__groups {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 20px;
	}
	.drawer__groups ul {
		display: grid;
		gap: 2px;
		margin-top: 10px;
	}
	.drawer__groups a {
		display: block;
		padding: 5px 0;
		font-size: 0.92rem;
		font-weight: 600;
		color: var(--text-on-ink-muted);
		text-decoration: none;
	}
	.drawer__groups a:hover {
		color: var(--apricot);
	}
	.drawer__legal {
		flex-basis: 100%;
		display: flex;
		flex-wrap: wrap;
		gap: 6px 16px;
		margin-top: 6px;
		font-size: 0.78rem;
	}
	.drawer__legal a {
		color: var(--text-on-ink-muted);
		text-decoration: none;
	}
	.drawer__legal a:hover {
		color: var(--cream);
	}
	.close {
		display: grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		border: 1px solid var(--line-on-ink);
		color: var(--cream);
	}
	.close:hover {
		border-color: var(--apricot);
	}
	.drawer__nav {
		display: grid;
		gap: 28px;
	}
	.drawer__main a {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 7px 0;
		font-family: var(--font-display);
		font-weight: 700;
		font-size: 1.45rem;
		line-height: 1.15;
		text-decoration: none;
		color: var(--cream);
	}
	.drawer__main a:hover,
	.drawer__main a[aria-current='page'] {
		color: var(--vermilion);
	}
	.soon {
		font-family: var(--font-sans);
		font-size: 0.58rem;
		font-weight: 800;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--text-on-ink-muted);
		border: 1px solid var(--line-on-ink);
		border-radius: 999px;
		padding: 2px 7px;
	}
	.drawer__platform {
		display: grid;
		gap: 12px;
		padding: 18px;
		border-radius: 18px;
		background: var(--ink-2);
		border: 1px solid var(--line-on-ink);
	}
	.drawer__platform ul {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 4px 12px;
	}
	.drawer__tool {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 6px 0;
		font-size: 0.9rem;
		font-weight: 700;
		text-decoration: none;
	}
	.drawer__tool:hover {
		color: var(--apricot);
	}
	@media (max-width: 420px) {
		.drawer__platform ul {
			grid-template-columns: 1fr;
		}
	}
	.drawer__foot {
		margin-top: auto;
		display: flex;
		flex-wrap: wrap;
		gap: 12px;
		align-items: center;
	}
</style>
