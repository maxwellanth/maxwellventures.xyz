# Agent Memory

This folder is the durable handoff layer for Maxwell Ventures website work. It lets humans, AI agents, GitHub reviewers, and future maintainers see who interacted with the repo, what changed, and whether the Maxwell Ventures vision shifted.

## Files

- `interactions.jsonl`: structured append-only interaction entries.
- `vision.md`: current vision baseline plus vision change log.
- `daily/`: dated daily pages created by automation and appended by agent log entries.

## Logging Rule

Every agent should add a concise entry before finishing meaningful repo work:

```bash
npm run agent:log -- --agent "Codex" --task "Short task name" --input "User request summary" --summary "What changed" --vision "No vision change" --files "path/one,path/two"
```

If the user's direction changes Maxwell Ventures positioning, service scope, brand direction, launch assumptions, or operating model, put the change in `--vision`. The logging script appends that change to `vision.md`.

## Daily Automation

GitHub Actions runs `npm run agent:daily` once per day and on manual dispatch. It creates `docs/agent-memory/daily/YYYY-MM-DD.md` and commits it when a new daily page is needed.

The workflow cannot see private Codex, ChatGPT, Gemini, Claude, or local conversations by itself. Those conversations should be summarized by the agent or human who performed the work.

## Privacy Boundary

Commit durable summaries, not raw transcripts. Do not log API keys, webhook URLs, secrets, private contact data, private customer details, or unapproved personal information.
