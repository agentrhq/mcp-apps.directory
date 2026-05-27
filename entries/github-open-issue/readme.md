---
name: GitHub · Open issue
vendor: github
slug: github-open-issue
category: dev-tools
hosts: [chatgpt, claude]
auth: oauth2
requires_authsome: false
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# GitHub · Open issue

Open a GitHub issue from inside the chat.com.

## What it does

- Opens an issue in any repo you have `issues:write` on.
- Supports labels and assignees.
- Returns the issue number, url, state, and repo full name.

## Install

```bash
mcp-apps install github-open-issue --host both
```

## Auth

OAuth via GitHub's hosted MCP. The first call links your account through the host's connector UI. No personal access tokens to manage.

## Source

[github/github-mcp-server](https://github.com/github/github-mcp-server) plus the hosted endpoint at `api.githubcopilot.com/mcp`.

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
