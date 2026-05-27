---
name: Vercel · View deployment
vendor: vercel
slug: vercel-deployment
category: dev-tools
hosts: [chatgpt, claude]
auth: oauth2
requires_authsome: false
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Vercel · View deployment

Look up a Vercel deployment by id and return its project, state, branch, commit, and the live URL.

## What it does

- Reads any `dpl_*` deployment the user has access to.
- Returns the state as a colored chip matching Vercel's UI (READY blue, BUILDING amber, ERROR red).
- Read-only; safe to call without confirmation.

## Install

```bash
mcp-apps install vercel-deployment --host both
```

## Auth

Vercel OAuth with `read:deployments`. First call links via the host's connector UI.

## Source

[Vercel MCP docs](https://vercel.com/docs/mcp).

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
