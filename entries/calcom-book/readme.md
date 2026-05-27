---
name: Cal.com · Book meeting
vendor: calcom
slug: calcom-book
category: ops
hosts: [chatgpt, claude]
auth: api-key
requires_authsome: false
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Cal.com · Book meeting

Book a Cal.com meeting from inside the chat.

## What it does

- Books any Cal.com event type by `event_type_id`.
- Accepts attendee email, optional name, and timezone.
- Returns the confirmation card with timezone-aware formatting.

## Install

```bash
mcp-apps install calcom-book --host both
```

## Auth

Uses a Cal.com API key. Generate one at [app.cal.com/settings/developer/api-keys](https://app.cal.com/settings/developer/api-keys). The host stores it in its connector secret store, encrypted at rest.

## Source

[calcom/cal-mcp](https://github.com/calcom/cal-mcp).

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
