"use strict";

const fs = require("node:fs");
const os = require("node:os");
const path = require("node:path");

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function readJson(p, fallback) {
  if (!fs.existsSync(p)) return fallback;
  try { return JSON.parse(fs.readFileSync(p, "utf8")); }
  catch { return fallback; }
}

function writeJson(p, data) {
  ensureDir(path.dirname(p));
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n");
}

function claudeConfigPath() {
  const home = os.homedir();
  if (process.platform === "darwin") {
    return path.join(home, "Library", "Application Support", "Claude", "claude_desktop_config.json");
  }
  if (process.platform === "win32") {
    return path.join(process.env.APPDATA || path.join(home, "AppData", "Roaming"), "Claude", "claude_desktop_config.json");
  }
  return path.join(home, ".config", "Claude", "claude_desktop_config.json");
}

function chatgptConfigPath() {
  const home = os.homedir();
  return path.join(home, ".config", "mcp-apps", "chatgpt", "connectors.json");
}

function writeClaudeConfig(slug, manifest) {
  const p = claudeConfigPath();
  const cfg = readJson(p, { mcpServers: {} });
  cfg.mcpServers = cfg.mcpServers || {};
  cfg.mcpServers[slug] = {
    url: manifest.server.url,
    transport: manifest.server.transport || "streamable-http",
  };
  writeJson(p, cfg);
  return p;
}

function writeChatgptConfig(slug, manifest) {
  const p = chatgptConfigPath();
  const cfg = readJson(p, { connectors: {} });
  cfg.connectors = cfg.connectors || {};
  cfg.connectors[slug] = {
    name: manifest.display?.name || slug,
    serverUrl: manifest.server.url,
    transport: manifest.server.transport || "streamable-http",
    manifest_version: manifest.manifest_version,
  };
  writeJson(p, cfg);
  return p;
}

module.exports = { writeChatgptConfig, writeClaudeConfig, claudeConfigPath, chatgptConfigPath };
