# Maxwell Ventures Website

Phase 1 foundation for `maxwellventures.xyz`.

## Current Status

- Draft 2 website foundation created with approved Maxwell Ventures assets.
- TypeScript, Tailwind CSS, and ESLint are configured.
- Required routes and reusable layout components are in place.
- Asset intake folders and documentation are prepared.
- Approved SVG source assets have been preserved, and optimized website-ready WebP/PNG/ICO files live under `public/` and `app/`.
- Production Vercel deployment is ready at `https://maxwell-ventures-caxwe9hbp-maxwellanth-7601s-projects.vercel.app`.
- `maxwellventures.xyz` is attached in Vercel but still needs Namecheap DNS records updated away from parking.

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
