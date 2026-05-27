# mcp-apps

CLI for [mcp-apps.directory](https://mcp-apps.directory). Install and validate MCP App manifests for ChatGPT and Claude.

## Install

```bash
npm install -g mcp-apps
```

## Commands

```bash
mcp-apps install <slug> [--host chatgpt|claude|both]
mcp-apps validate <path-to-manifest.json>
mcp-apps list
```

## Where the CLI writes

- **Claude (macOS):** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Claude (Linux):** `~/.config/Claude/claude_desktop_config.json`
- **Claude (Windows):** `%APPDATA%/Claude/claude_desktop_config.json`
- **ChatGPT:** `~/.config/mcp-apps/chatgpt/connectors.json` (export-only, since ChatGPT does not yet expose a local connector file. Paste the JSON into Settings · Connectors · Add.)

Override the registry with `MCP_APPS_REGISTRY=https://your-host/entries`.

## License

MIT.
