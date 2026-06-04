# Nightly Preview Workflow

The goal is to let Max review the next website iteration on a real mobile-friendly URL without replacing the approved public homepage.

## Review URL

Use this unlisted route for the current review candidate:

`/studio-preview-9k4m2x`

Full production URL after deployment:

`https://www.maxwellventures.xyz/studio-preview-9k4m2x`

This URL is intentionally not linked in the header, footer, or sitemap. It is also marked `noindex` and disallowed in `robots.txt`.

This is review privacy, not real authentication. If the route becomes sensitive, add password, signed-link, or Vercel Deployment Protection instead of relying on obscurity.

## How Agents Should Use It

1. Keep the approved public homepage at `/` unless Max explicitly greenlights promotion.
2. Put experimental homepage work in `components/nightly-homepage-preview.tsx` and render it from `app/studio-preview-9k4m2x/page.tsx`.
3. Do not add the preview route to `publicRoutes`, navigation, footer links, sitemap, or public CTAs.
4. Keep preview copy honest: no fake testimonials, fake client logos, invented metrics, invented contact details, or claims that lead delivery works before it has been tested.
5. Run local checks before reporting the preview as ready:
   - `npm run lint`
   - `npm run build`
   - mobile check at 390px
   - contact regression if contact behavior changed
   - `/robots.txt` and `/sitemap.xml` checks
6. After Max approves the preview, promote deliberately by moving the approved preview changes into the public routes, then run the same checks again.
7. Log the interaction with `npm run agent:log` before finishing meaningful repo work.

## Promotion Rule

The preview route can change nightly. The public homepage changes only after Max approves the candidate.
