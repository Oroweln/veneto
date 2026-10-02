# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev          # Start development server
npm run build        # Build for production (outputs to build/)
npm run preview      # Preview production build locally
npm run check        # Type-check with svelte-check
npm run check:watch  # Type-check in watch mode
```

No test runner or linter is configured in this project.

## Architecture

This is a **SvelteKit 2 + Svelte 5** app using `@sveltejs/adapter-node` for Node.js deployment.

**Production deployment**: Build outputs `build/index.js`. The `server.cjs` file is the Node.js entry point — it dynamically imports `./index.js` (the built output). Run in production with `node server.cjs` from the project root after building.

**Email (nodemailer)**: `src/lib/config.server.js` holds SMTP credentials. It must be filled in before building for production. `example.config.server.js` is the committed template — never commit `config.server.js` with real credentials. The config exports `emailConfig` and `validateEmailConfig()`.

**Security headers**: `src/hooks.server.js` applies security headers on every response: HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. The CSP allows inline scripts (required by SvelteKit hydration) and Google Fonts.

**i18n**: English and Italian, set up in `src/lib/i18n/` (own small module; the installed `svelte-i18n` package is not used).
- English is the source language. Write every new string in `en.ts` (interface) or `content.en.ts` (industries, provinces, sample data) first, then add it to `it.ts` / `content.it.ts`. TypeScript enforces that Italian has the same shape.
- No text hardcoded in components or data files: use `i18n.t('key')` (from `useI18n()`); data files hold only ids, icons and numbers.
- Italian is a draft pending professional review: `LANG_STATUS` in `src/lib/i18n/index.ts`. Draft languages show a notice and are `noindex`; set `it: 'reviewed'` once reviewed.
- `npm run check:i18n` verifies every key used in the code exists and Italian mirrors English.

**Route structure**: every page lives under a language prefix, `src/routes/[lang=lang]/…` → `/en/…`, `/it/…`. `src/hooks.server.ts` redirects unprefixed URLs (`/`, `/territories`) to the visitor's language (saved cookie, then browser, then English). Build internal links with `i18n.path('/territories')`, never a bare `href="/…"`. Sections not built yet are served by `[lang=lang]/[section=planned]/[...rest]` (list in `src/lib/data/nav.ts`). All server-only code (email, config) uses the `.server.js` suffix convention to prevent browser bundling.
