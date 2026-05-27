---
name: Stripe · Charge customer
vendor: stripe
slug: stripe-charge
category: billing
hosts: [chatgpt, claude]
auth: api-key
requires_authsome: true
verified_date: 2026-05-27
verified_by: agentrhq
manifest_version: 1.0
---

# Stripe · Charge customer

Run a one-time charge against a saved Stripe customer from the chat.

## What it does

- Charges a `cus_*` Stripe customer for a given amount and currency.
- Returns the charge id, status, and `receipt_url`.
- Returns a receipt card matching Stripe's UI tokens.

## Install

```bash
mcp-apps install stripe-charge --host both
```

## Auth

Uses a Stripe **restricted key** with the `charges:write` permission. **Do not paste your `sk_live_*` key into the host.** See [authsome.md](authsome.md) for the safe credential-injection recipe.

## Source

Stripe ships an official MCP at [mcp.stripe.com](https://docs.stripe.com/mcp). This entry wraps the `charges.create` tool.

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
