# Deployment

## Platform

The project is built for Vercel using Next.js App Router.

## Current Vercel Status

Production deployment is live on Vercel.

- Project: `maxwellanth-7601s-projects/maxwell-ventures`
- Deployment ID: `dpl_6VWdLhPYdeksBj4vDffCt6CKfgio`
- Deployment URL: `https://maxwell-ventures-caxwe9hbp-maxwellanth-7601s-projects.vercel.app`
- Vercel status: `Ready`
- Aliases attached in Vercel: `maxwellventures.xyz` and `www.maxwellventures.xyz`

## Expected Vercel Settings

- Framework preset: Next.js
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: managed by Next.js
- Production domain target: `maxwellventures.xyz`

## DNS Status

The deployment is verified, but the custom domain is not serving yet because Namecheap DNS still points at parking records.

Current DNS evidence:

- `maxwellventures.xyz A` resolves to `192.64.119.225`
- `www.maxwellventures.xyz CNAME` resolves to `parkingpage.namecheap.com`
- Email forwarding records exist and should be preserved:
  - `MX 10 eforward1.registrar-servers.com`
  - `MX 10 eforward2.registrar-servers.com`
  - `MX 10 eforward3.registrar-servers.com`
  - `MX 15 eforward4.registrar-servers.com`
  - `MX 20 eforward5.registrar-servers.com`
  - `TXT "v=spf1 include:spf.efwd.registrar-servers.com ~all"`

Vercel's project-specific recommendation from `vercel domains inspect`:

- Set `A maxwellventures.xyz 76.76.21.21`
- Set `A www.maxwellventures.xyz 76.76.21.21`

Do not change nameservers unless the full DNS zone, including email records, is copied first. Updating only the web A records at Namecheap is the safer next step.

## Pre-Deploy Checks

- `npm run lint`
- `npm run build`
- Confirm all final assets exist in `public/`
- Confirm `app/favicon.ico`, `app/icon.png`, and `app/apple-icon.png` use the approved mark
- Confirm `public/social/og-image.png` exists
- Confirm Privacy and Terms content has been reviewed
