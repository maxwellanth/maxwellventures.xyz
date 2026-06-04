# QA Report

## Phase 1 Setup Checks

- Repository: `maxwellanth/maxwellventures.xyz`
- Local path: `/Users/max/Documents/maxwellventures.xyz`
- Framework: Next.js App Router
- Package manager: npm
- Styling: Tailwind CSS
- Fonts: Cinzel Semibold and Montserrat through `next/font/google`

## Build Checks

- `npm install`: completed from a clean dependency tree; two moderate advisories remain through `next@16.2.7` / nested `postcss`
- `npm run lint`: passed on June 3 launch-readiness patch
- `npm run build`: passed on June 3 launch-readiness patch
- Generated routes now include dynamic `/api/contact` and static public pages for `/`, `/about`, `/contact`, `/local-business-audit`, `/privacy`, `/services`, `/team`, `/terms`, and `/studio-preview-9k4m2x`
- Production-server route QA at `http://localhost:3001`: `/`, `/studio-preview-9k4m2x`, `/services`, `/local-business-audit`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms` returned `200`
- Redirect QA: `/audit` returned `307` to `/local-business-audit`
- Contact API QA without env vars: `POST /api/contact` returned `503` with `code: "unconfigured"` and did not claim delivery
- Asset QA: `/favicon.ico`, `/icon.png`, `/apple-icon.png`, and `/social/og-image.png` returned `200`
- Metadata/privacy QA: root metadata includes the `www.maxwellventures.xyz` canonical host and social image; preview route remains `noindex`; `robots.txt` disallows preview; `sitemap.xml` excludes preview and includes public routes
- In-app Browser QA attempt: blocked by Browser webview attach timeout; fallback HTTP and production-server checks were used

- `npm run lint`: passed after Draft 2 asset insertion and generated QA-profile ignore
- `npm run build`: passed after Draft 2 asset insertion and team-image loading update
- Local dev server: use `npm run dev:site` and open `http://localhost:3001` when Hermes/OpenClaw is using `localhost:3000`
- Local response check: `http://localhost:3001` returned `200 OK`
- Production preview: `npx next start --port 3001`
- In-app Browser QA: home page title, hero text, console health, screenshot, and Team navigation verified
- Browser matrix QA: 40 checks across `/`, `/services`, `/local-business-audit`, `/about`, `/team`, `/contact`, `/privacy`, and `/terms`
- Responsive widths checked: `375x812`, `390x844`, `430x932`, `768x1024`, and `1280x900`
- Responsive result: zero matrix failures, no horizontal overflow, and no broken images
- Team image checks: Max / Anthony Maxwell, Alexander Maxwell, and Rae Maxwell headshots completed at every checked width
- Screenshot evidence: 13 viewport screenshots saved under `.qa/`
- Static routes generated: `/`, `/about`, `/contact`, `/local-business-audit`, `/privacy`, `/services`, `/team`, `/terms`

## Vercel Deployment Checks

- Project: `maxwellanth-7601s-projects/maxwell-ventures`
- Deployment ID: `dpl_6VWdLhPYdeksBj4vDffCt6CKfgio`
- Deployment URL: `https://maxwell-ventures-caxwe9hbp-maxwellanth-7601s-projects.vercel.app`
- Vercel status: `Ready`
- Deployment URL response: `200 OK`
- Deployment HTML check: home page contains `Heritage calm for modern business systems.` and approved asset paths
- Vercel aliases attached: `maxwellventures.xyz` and `www.maxwellventures.xyz`
- Custom domain status: aliases are attached, but DNS still points to Namecheap parking, so `https://maxwellventures.xyz` does not resolve to this deployment yet

## Known Notes

- `npm audit --audit-level=moderate` reports two moderate findings through `next@16.2.7` and its nested `postcss` dependency. The suggested forced fix is a breaking downgrade, so it was not applied.
- Vercel project `maxwell-ventures` exists and the local folder is linked through `.vercel/project.json`, which is ignored by Git.
- `localhost:3000` was serving the local Hermes/OpenClaw office app during QA, so the Maxwell Ventures site should use `localhost:3001` for local preview on this machine.
- Draft 2 asset insertion used approved SVG files from `/Users/max/Desktop/website assets? svgs/`.
- Current Namecheap email-forwarding MX and SPF records were observed and should be preserved during DNS cleanup.

## Draft 2 Inserted Assets

- `public/brand/logo-mark.webp`
- `public/brand/logo-primary.webp`
- `public/brand/logo-horizontal.webp`
- `public/images/team/team-group.webp`
- `public/images/team/max-fullbody.webp`
- `public/images/team/alexander-fullbody.webp`
- `public/images/team/rae-fullbody.webp`
- `public/images/team/max-headshot.webp`
- `public/images/team/alexander-headshot.webp`
- `public/images/team/rae-headshot.webp`
- `public/social/og-image.png`
- `app/favicon.ico`
- `app/icon.png`
- `app/apple-icon.png`

## Missing Assets

See `LAUNCH_CHECKLIST.md` and `docs/asset-targets.md`.
