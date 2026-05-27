---
name: Notion · Quick page
vendor: notion
slug: notion-quick-page
category: content
hosts: [chatgpt, claude]
auth: oauth2
requires_authsome: false
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Notion · Quick page

Create a Notion page from inside the chat. Returns a preview card with the page title, cover, and URL.

## What it does

- Creates a new Notion page in any workspace you have access to.
- Optionally nests under a parent page or database via `parent_id`.
- Returns the resulting page as a clickable preview card.

## Install

```bash
mcp-apps install notion-quick-page --host both
```

## Auth

Uses Notion's hosted MCP server at `mcp.notion.com` with OAuth. The first call triggers the host's connector linking UI. No client-side credentials.

## Source

Notion's official remote MCP at [mcp.notion.com](https://www.notion.com/help/notion-mcp).

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
