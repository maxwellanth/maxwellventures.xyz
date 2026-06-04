<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Agent Interaction Ledger

This repository keeps durable agent memory in `docs/agent-memory/`.

Before finishing any meaningful repo work, add a concise entry:

```bash
npm run agent:log -- --agent "Codex" --task "What changed" --input "User request summary" --summary "What the agent did" --vision "No vision change" --files "AGENTS.md,scripts/agent-log.mjs"
```

Log summaries, decisions, vision changes, and touched files. Do not commit raw private conversation transcripts, API keys, secrets, private contact data, or unapproved personal information. If the Maxwell Ventures vision changes, include the change in `--vision`; the script will append it to `docs/agent-memory/vision.md`.

The daily GitHub Actions workflow creates a dated page under `docs/agent-memory/daily/` so agents browsing the repo can find the latest activity even on days when no one manually logged an interaction.

## Nightly Preview Workflow

Use `/studio-preview-9k4m2x` as the unlisted owner-review route for draft website iterations. Keep it out of navigation, footer links, and `publicRoutes`; keep it `noindex` and disallowed in `robots.txt`; and do not promote preview changes to `/` until Max explicitly approves them. See `docs/nightly-preview-workflow.md`.

## Maxwell Ventures Launch Guardrails

- Keep the public brand direction premium, heritage-modern, Pacific Northwest-influenced, practical, calm, strategic, and human-centered.
- Do not invent client proof, testimonials, case studies, credentials, awards, metrics, dashboard data, phone numbers, emails, or legal certainty.
- Do not change DNS, nameservers, MX, SPF, DKIM, or DMARC records. Public launch DNS remains a manual Max approval step.
- Contact copy must stay honest. A form may claim delivery only after the real destination accepts the inquiry; otherwise report the missing env or approval clearly.
- Privacy and Terms copy must stay conservative. Service-specific agreements control actual client work, and final legal review remains an owner/legal approval item.
- Before reporting meaningful site work as complete, run `npm run lint`, `npm run build`, and browser QA for the affected public routes plus `/studio-preview-9k4m2x`.
