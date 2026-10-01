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

**i18n**: The `i18n` package is installed. Internationalization setup lives in `src/lib/`.

**Route structure**: `src/routes/+layout.svelte` sets the favicon. `src/routes/+page.svelte` is the root page. All server-only code (email, config) uses the `.server.js` suffix convention to prevent browser bundling.
