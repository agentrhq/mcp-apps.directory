---
name: Linear · Search
vendor: linear
slug: linear-search
category: project-management
hosts: [chatgpt, claude]
auth: oauth2
requires_authsome: true
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Linear · Search

Search Linear issues from inside ChatGPT or Claude. Results come back with id, title, team, and a deep link to linear.app.

## What it does

- Full-text search across every Linear issue you can see.
- Returns up to 25 matches with team, state, priority, and assignee.
- Click a row to open the issue in linear.app.

## Install

```bash
mcp-apps install linear-search --host both
```

Or pipe the bundled installer:

```bash
curl -fsSL https://raw.githubusercontent.com/agentrhq/mcp-apps.directory/main/entries/linear-search/install.sh | bash
```

## Auth

Uses Linear's remote MCP OAuth flow. First call triggers the host's connector linking UI. See [authsome.md](authsome.md) for the credential-injection recipe if you do not want to ship Linear OAuth credentials through the host.

## Source

Linear ships the remote MCP server at `https://mcp.linear.app/mcp`. This entry wraps that server.

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
