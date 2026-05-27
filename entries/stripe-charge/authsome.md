# Authsome recipe: Stripe · Charge customer

This recipe shows how to inject a Stripe restricted key into the manifest **without** pasting it into the host's connector settings. The manifest works without Authsome; this is purely a hardening step for production use.

## Why bother

`sk_live_*` keys grant full account access. Pasting one into ChatGPT or Claude means the key lives in:

- the host's connector store (a third-party SaaS),
- the host's request logs,
- any backups the host takes of either.

A leaked Stripe key is a same-day compliance incident. Authsome proxies the request and substitutes the key only inside your own infrastructure.

## The recipe

1. Create a Stripe **restricted key** at [dashboard.stripe.com/apikeys](https://dashboard.stripe.com/apikeys/create) with the single permission `Charges · Write`. Restrict by IP if your Authsome proxy has a static egress.
2. Store the key in Authsome:

   ```bash
   authsome credentials set stripe.charges \
     --header "Authorization: Bearer rk_live_xxx" \
     --allow-host api.stripe.com \
     --rate-limit "100/minute"
   ```

3. Point this entry's `server.url` at your Authsome proxy instead of `mcp.stripe.com`:

   ```diff
   - "url": "https://mcp.stripe.com/v1",
   + "url": "https://stripe.charges.<your-authsome-host>/v1",
   ```

4. Install:

   ```bash
   mcp-apps install stripe-charge --host both
   ```

The host now sends requests with no `Authorization` header at all. Authsome injects the restricted key at the proxy boundary, logs the call, and enforces the rate limit. The host never sees the key.

## What you give up

- Stripe MCP's first-party tools you do not pass through the proxy will not be reachable.
- Latency: one extra hop (typically 20-40 ms).

## What you gain

- Key rotation without re-pasting into the host.
- Per-tool audit log of which agent called which charge.
- Hard cap on charges per minute, enforced outside the LLM.
- Compliance: the key never crosses the model provider's boundary.

See [authsome.dev/docs/quickstart](https://authsome.dev/docs/quickstart) for the proxy setup.
