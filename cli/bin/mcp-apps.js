#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");
const https = require("node:https");
const { validate } = require("../lib/validate");
const { writeChatgptConfig, writeClaudeConfig } = require("../lib/hosts");

const REGISTRY_BASE = process.env.MCP_APPS_REGISTRY || "https://raw.githubusercontent.com/agentrhq/mcp-apps.directory/main/entries";

function usage() {
  console.log(`mcp-apps - install MCP App manifests into ChatGPT and Claude.

usage:
  mcp-apps install <slug> [--host chatgpt|claude|both]
  mcp-apps validate <path-to-manifest.json>
  mcp-apps list

environment:
  MCP_APPS_REGISTRY  Override the registry base URL.

examples:
  mcp-apps install linear-search --host both
  mcp-apps validate entries/stripe-charge/manifest.json
`);
}

async function main() {
  const [cmd, ...rest] = process.argv.slice(2);
  if (!cmd || cmd === "--help" || cmd === "-h") return usage();

  if (cmd === "validate") {
    const file = rest[0];
    if (!file) {
      console.error("mcp-apps validate: missing path");
      process.exit(2);
    }
    const manifest = JSON.parse(fs.readFileSync(file, "utf8"));
    const result = validate(manifest);
    if (!result.ok) {
      console.error(`invalid: ${file}`);
      for (const err of result.errors) console.error("  -", err);
      process.exit(1);
    }
    console.log(`ok: ${file}`);
    return;
  }

  if (cmd === "list") {
    console.log("Browse the full gallery at https://mcp-apps.directory");
    return;
  }

  if (cmd === "install") {
    const slug = rest[0];
    if (!slug) {
      console.error("mcp-apps install: missing slug");
      process.exit(2);
    }
    const hostFlag = parseFlag(rest, "--host") || "both";
    const manifestUrl = `${REGISTRY_BASE}/${slug}/manifest.json`;
    console.log(`fetching ${manifestUrl}`);
    const manifest = await fetchJson(manifestUrl);
    const result = validate(manifest);
    if (!result.ok) {
      console.error("manifest failed schema validation:");
      for (const err of result.errors) console.error("  -", err);
      process.exit(1);
    }
    if (hostFlag === "chatgpt" || hostFlag === "both") {
      const p = writeChatgptConfig(slug, manifest);
      console.log(`wrote ChatGPT config: ${p}`);
    }
    if (hostFlag === "claude" || hostFlag === "both") {
      const p = writeClaudeConfig(slug, manifest);
      console.log(`wrote Claude config: ${p}`);
    }
    console.log(`installed: ${slug}. Restart the host app to pick up the new connector.`);
    return;
  }

  console.error(`unknown command: ${cmd}`);
  usage();
  process.exit(2);
}

function parseFlag(args, name) {
  const idx = args.indexOf(name);
  if (idx === -1) return null;
  return args[idx + 1];
}

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return resolve(fetchJson(res.headers.location));
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`${url}: HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => {
        try { resolve(JSON.parse(Buffer.concat(chunks).toString("utf8"))); }
        catch (e) { reject(e); }
      });
    }).on("error", reject);
  });
}

main().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
