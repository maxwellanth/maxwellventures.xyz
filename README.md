# Maxwell Ventures Website

Public website for `maxwellventures.xyz`.

## Current Status

- Version 1 is the approved public site at `https://www.maxwellventures.xyz`.
- Version 2 is available only through the private review route listed below.
- TypeScript, Tailwind CSS, and ESLint are configured.
- Required routes and reusable layout components are in place.
- Asset intake folders and documentation are prepared.
- Approved SVG source assets have been preserved, and optimized website-ready WebP/PNG/ICO files live under `public/` and `app/`.
- Public canonical host for this branch: `https://www.maxwellventures.xyz`.
- Production changes require Max approval before publishing.

## Local Setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

If Hermes/OpenClaw is using `localhost:3000` on this Mac, run the site on
`3001` instead:

```bash
npm run dev:site
```

Open `http://localhost:3001`.

## Build

```bash
npm run build
```

## Private Review Preview

Use `/studio-preview-9k4m2x` for the current unlisted website review candidate. It is intentionally excluded from navigation and the sitemap, marked `noindex`, and disallowed in `robots.txt`.

Version 2 preview URL:

`https://www.maxwellventures.xyz/studio-preview-9k4m2x`

Workflow details: `docs/nightly-preview-workflow.md`

## Project Structure

- `app/` route files and global layout
- `components/` reusable site and UI components
- `content/` editable site copy and navigation data
- `lib/` shared utilities
- `public/brand/` final approved logo assets
- `public/images/` final approved website images
- `public/social/` final approved social preview assets
- `docs/` project documentation
- `asset-intake/` repo-side intake notes and fallback location

## Asset Workflow

Use the Desktop drop folder:

`~/Desktop/Maxwell Ventures Website Assets/`

Original files should stay preserved there first. Only approved, optimized, website-ready files should move into `public/`.

Current approved source assets have been copied into the Desktop intake folders and the website-ready copies live under `public/brand`, `public/images/team`, `public/social`, and `app`.

## Important Limits

- Do not change Namecheap nameservers unless the full DNS zone, including email records, is preserved first.
- Preserve the existing Namecheap email-forwarding MX and SPF records during web DNS cleanup.
- Do not invent testimonials, client names, logos, proof numbers, phone numbers, or portal data.
- Do not alter `.org`, DNS, MX, SPF, DKIM, or DMARC records without explicit instruction.
