# Authsome recipe: Resend · Send email

How to send through Resend without exposing your `re_*` API key to the host.

## Why bother

A Resend key can send email from any domain you have verified. If it leaks, attackers can spoof your transactional sender for as long as the key is valid. Pasting it into ChatGPT or Claude's connector store means the key lives in a third-party SaaS you do not control.

## The recipe

1. Create a **domain-scoped** sending key at [resend.com/api-keys](https://resend.com/api-keys). Restrict it to the single sending domain you want the agent to use.
2. Store it in Authsome:

   ```bash
   authsome credentials set resend.send \
     --header "Authorization: Bearer re_xxx" \
     --allow-host api.resend.com \
     --rate-limit "20/minute" \
     --allow-from-domain "agentr.dev"
   ```

3. Point this entry at the proxy:

   ```diff
   - "url": "https://mcp.resend.com/v1",
   + "url": "https://resend.send.<your-authsome-host>/v1",
   ```

4. Install:

   ```bash
   mcp-apps install resend-send --host both
   ```

The model emits a tool call with no auth header; Authsome injects the key, validates the `from` address against the allow-list, and forwards to Resend.

## What you gain

- Sender domain is enforced outside the model, so prompt injection cannot exfiltrate to a personal domain.
- 20-message rate limit per minute prevents runaway loops.
- Audit log of every send by which agent, with the resulting message id.

See [authsome.dev/docs/quickstart](https://authsome.dev/docs/quickstart).
