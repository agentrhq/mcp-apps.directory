# Authsome recipe: Slack · Quick post

Use this when your workspace has SSO / enterprise restrictions that prevent the host from completing Slack's OAuth flow, or when you want a single shared bot identity across an org-wide agent fleet.

## Why bother

Slack OAuth in the host means every user gets their own bot install, which:

- multiplies install requests for workspace admins,
- gives each user a separate token (lots of secrets to rotate),
- pings the workspace owner every time a new agent links.

A single shared bot, fronted by Authsome, is friendlier for ops and easier to audit.

## The recipe

1. Create a Slack app at [api.slack.com/apps](https://api.slack.com/apps). Add `chat:write` and `channels:read` bot scopes. Install it once into your workspace and copy the **Bot User OAuth Token** (`xoxb-...`).
2. Configure Authsome:

   ```bash
   authsome credentials set slack.quick-post \
     --header "Authorization: Bearer xoxb-xxx" \
     --allow-host slack.com \
     --rate-limit "60/minute" \
     --allow-channels "C0123456,C0654321"
   ```

3. Point this entry at the proxy:

   ```diff
   - "url": "https://mcp.slack.com/mcp",
   + "url": "https://slack.quick-post.<your-authsome-host>/v1",
   ```

4. Install:

   ```bash
   mcp-apps install slack-quick-post --host both
   ```

## What you gain

- One bot token, one rotation cycle.
- Channel allow-list enforced outside the model.
- The agent cannot DM users or post in unlisted channels even if a prompt asks it to.

See [authsome.ai/docs/quickstart](https://authsome.ai/docs/quickstart).
