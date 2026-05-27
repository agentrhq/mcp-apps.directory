---
name: Figma · Comment on file
vendor: figma
slug: figma-comment
category: content
hosts: [chatgpt, claude]
auth: oauth2
requires_authsome: false
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Figma · Comment on file

Post a Figma comment from the chat. Anchor to a specific node or leave it on the file itself.

## What it does

- Posts a comment to any Figma file you can access.
- Optional `node_id` anchors the comment to a specific frame or layer.
- Returns a clickable card with the file name and comment URL.

## Install

```bash
mcp-apps install figma-comment --host both
```

## Auth

Figma OAuth with the `file_comments:write` and `file_content:read` scopes. First call triggers the host's connector linking UI.

## Source

Figma announced first-class MCP App support in January 2026.

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
