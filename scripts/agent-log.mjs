#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import {
  appendFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const memoryRoot = path.join(repoRoot, "docs", "agent-memory");
const dailyRoot = path.join(memoryRoot, "daily");
const interactionsPath = path.join(memoryRoot, "interactions.jsonl");
const visionPath = path.join(memoryRoot, "vision.md");

const args = parseArgs(process.argv.slice(2));

if (args.help || args.h) {
  printHelp(0);
}

ensureDirs();

const date = stringValue(args.date) || pacificDate(new Date());

if (args.daily) {
  const dailyPath = ensureDaily(date);
  console.log(`Agent memory daily log ready: ${relativePath(dailyPath)}`);
  process.exit(0);
}

const entry = buildEntry(args, date);
validateEntry(entry);
appendInteraction(entry);
const dailyPath = appendDaily(entry);

if (entry.vision_change && !isNoVisionChange(entry.vision_change)) {
  appendVisionChange(entry);
}

console.log(`Agent interaction logged: ${relativePath(dailyPath)}`);

function buildEntry(parsedArgs, entryDate) {
  const ciAgent = process.env.GITHUB_ACTIONS ? "github-actions[bot]" : "";
  const userName = safeOsUser();
  const files = splitList(
    stringValue(parsedArgs.files) || process.env.AGENT_FILES || ""
  );

  return compactObject({
    timestamp: new Date().toISOString(),
    date: entryDate,
    repo: "maxwellventures.xyz",
    agent:
      stringValue(parsedArgs.agent) ||
      process.env.AGENT_NAME ||
      ciAgent ||
      "unspecified-agent",
    actor:
      stringValue(parsedArgs.actor) ||
      process.env.GITHUB_ACTOR ||
      process.env.USER ||
      userName,
    user:
      stringValue(parsedArgs.user) ||
      process.env.AGENT_USER ||
      "Maxwell Ventures team",
    status:
      stringValue(parsedArgs.status) ||
      process.env.AGENT_STATUS ||
      "completed",
    task: stringValue(parsedArgs.task) || process.env.AGENT_TASK || "",
    user_input:
      stringValue(parsedArgs.input) ||
      stringValue(parsedArgs.user_input) ||
      process.env.AGENT_USER_INPUT ||
      "",
    summary:
      stringValue(parsedArgs.summary) || process.env.AGENT_SUMMARY || "",
    vision_change:
      stringValue(parsedArgs.vision) ||
      stringValue(parsedArgs.vision_change) ||
      process.env.AGENT_VISION_CHANGE ||
      "No vision change",
    conversation_ref:
      stringValue(parsedArgs.conversation_ref) ||
      process.env.AGENT_CONVERSATION_REF ||
      "",
    touched_files: files,
    git: compactObject({
      branch: git(["rev-parse", "--abbrev-ref", "HEAD"]),
      commit: git(["rev-parse", "--short", "HEAD"]),
    }),
  });
}

function validateEntry(entry) {
  const missing = [];

  if (!entry.task) missing.push("--task");
  if (!entry.summary) missing.push("--summary");

  if (missing.length > 0) {
    console.error(`Missing required field(s): ${missing.join(", ")}`);
    printHelp(1);
  }
}

function appendInteraction(entry) {
  appendFileSync(interactionsPath, `${JSON.stringify(entry)}\n`, "utf8");
}

function appendDaily(entry) {
  const dailyPath = ensureDaily(entry.date);
  const existing = readFileSync(dailyPath, "utf8").replace(
    "\nNo entries recorded yet.\n",
    "\n"
  );
  writeFileSync(dailyPath, `${existing.trimEnd()}\n\n${toMarkdown(entry)}\n`, "utf8");
  return dailyPath;
}

function ensureDaily(day) {
  const dailyPath = path.join(dailyRoot, `${day}.md`);

  if (!existsSync(dailyPath)) {
    const body = [
      `# Agent Memory - ${day}`,
      "",
      "This daily page is maintained by `npm run agent:daily` and appended by `npm run agent:log`.",
      "It records durable summaries only. Raw private conversations, secrets, and unapproved personal data should not be committed.",
      "",
      "## Entries",
      "",
      "No entries recorded yet.",
      "",
    ].join("\n");
    writeFileSync(dailyPath, body, "utf8");
  }

  return dailyPath;
}

function appendVisionChange(entry) {
  const line = [
    `- ${entry.timestamp}`,
    `agent=${entry.agent}`,
    `task=${entry.task}`,
    `change=${entry.vision_change}`,
  ].join(" | ");

  appendFileSync(visionPath, `${line}\n`, "utf8");
}

function toMarkdown(entry) {
  const lines = [
    `### ${entry.timestamp} - ${entry.agent} - ${entry.status}`,
    "",
    `- User: ${plain(entry.user)}`,
    `- Actor: ${plain(entry.actor)}`,
    `- Task: ${plain(entry.task)}`,
  ];

  if (entry.user_input) {
    lines.push(`- User input: ${plain(entry.user_input)}`);
  }

  if (entry.vision_change) {
    lines.push(`- Vision change: ${plain(entry.vision_change)}`);
  }

  lines.push(`- Summary: ${plain(entry.summary)}`);

  if (entry.touched_files?.length) {
    lines.push(
      `- Files touched: ${entry.touched_files.map((file) => inlineCode(file)).join(", ")}`
    );
  }

  if (entry.conversation_ref) {
    lines.push(`- Conversation ref: ${plain(entry.conversation_ref)}`);
  }

  if (entry.git?.branch || entry.git?.commit) {
    lines.push(
      `- Git: branch ${inlineCode(entry.git?.branch || "unknown")}, commit ${inlineCode(
        entry.git?.commit || "unknown"
      )}`
    );
  }

  return lines.join("\n");
}

function parseArgs(tokens) {
  const parsed = {};

  for (let i = 0; i < tokens.length; i += 1) {
    const token = tokens[i];

    if (!token.startsWith("--")) {
      continue;
    }

    const key = token.slice(2).replaceAll("-", "_");
    const next = tokens[i + 1];

    if (!next || next.startsWith("--")) {
      parsed[key] = true;
      continue;
    }

    if (parsed[key]) {
      parsed[key] = `${parsed[key]},${next}`;
    } else {
      parsed[key] = next;
    }

    i += 1;
  }

  return parsed;
}

function printHelp(exitCode) {
  const message = `
Usage:
  npm run agent:log -- --agent "Codex" --task "Task" --summary "What changed"
  npm run agent:daily

Options:
  --agent             Agent or model name, for example "Codex"
  --actor             GitHub actor or local operator
  --user              Human stakeholder name
  --task              Short task name, required for interaction entries
  --input             Summary of the user's request
  --summary           Summary of what the agent did, required
  --vision            Vision change, or "No vision change"
  --files             Comma-separated files touched
  --status            completed, in_progress, blocked, reviewed, etc.
  --conversation-ref  Optional external conversation identifier or URL
  --date              Override daily page date as YYYY-MM-DD
  --daily             Create today's daily page without appending an interaction
`.trim();

  console.error(message);
  process.exit(exitCode);
}

function ensureDirs() {
  mkdirSync(dailyRoot, { recursive: true });

  if (!existsSync(interactionsPath)) {
    writeFileSync(interactionsPath, "", "utf8");
  } else if (readFileSync(interactionsPath, "utf8").trim() === "") {
    writeFileSync(interactionsPath, "", "utf8");
  }

  if (!existsSync(visionPath)) {
    writeFileSync(
      visionPath,
      [
        "# Maxwell Ventures Vision Memory",
        "",
        "## Current Direction",
        "",
        "Maxwell Ventures is currently framed by the repo docs as a premium heritage-modern consulting firm with Pacific Northwest influence and a practical AI operations studio edge.",
        "",
        "The public site should act as the source of truth for the company, its services, its assets, and its launch state. Future agents should update this file when user direction changes the business vision, brand direction, public positioning, or operating assumptions.",
        "",
        "## Vision Change Log",
        "",
      ].join("\n"),
      "utf8"
    );
  }
}

function splitList(value) {
  return value
    .split(/[,\n]/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function git(gitArgs) {
  try {
    return execFileSync("git", gitArgs, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
      timeout: 2000,
    }).trim();
  } catch {
    return "";
  }
}

function pacificDate(value) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(value);

  const byType = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return `${byType.year}-${byType.month}-${byType.day}`;
}

function stringValue(value) {
  return typeof value === "string" ? value.trim() : "";
}

function compactObject(value) {
  return Object.fromEntries(
    Object.entries(value).filter(([, entryValue]) => {
      if (Array.isArray(entryValue)) return entryValue.length > 0;
      if (entryValue && typeof entryValue === "object") {
        return Object.keys(entryValue).length > 0;
      }
      return entryValue !== "";
    })
  );
}

function isNoVisionChange(value) {
  return /^no vision change\.?$/i.test(value.trim());
}

function plain(value) {
  return String(value).replace(/\s+/g, " ").trim();
}

function inlineCode(value) {
  return `\`${String(value).replaceAll("`", "'")}\``;
}

function relativePath(value) {
  return path.relative(repoRoot, value).replaceAll("\\", "/");
}

function safeOsUser() {
  try {
    return os.userInfo().username;
  } catch {
    return "unknown";
  }
}
