# Authsome recipe: Linear · Search

Linear's hosted MCP at `mcp.linear.app` works fine out of the box. Use this recipe when you want a single shared Linear identity for an agent fleet or when your workspace blocks per-user OAuth installs.

## Why bother

Per-user OAuth means every developer links their personal Linear account to the host. That works for individuals; it does not work when:

- you want every agent to act as a shared `agent@yourco.com` identity,
- compliance requires that the host never see a user's personal Linear token,
- you want server-side scope restrictions (e.g. read-only).

## The recipe

1. Create a Linear **OAuth application** at [linear.app/settings/api/applications](https://linear.app/settings/api/applications). Generate a personal API key for the shared `agent` user, **or** use the OAuth client with a refresh token flow.

2. Configure Authsome:

   ```bash
   authsome credentials set linear.search \
     --header "Authorization: lin_api_xxx" \
     --allow-host api.linear.app \
     --rate-limit "30/minute" \
     --read-only
   ```

3. Point this entry at the proxy:

   ```diff
   - "url": "https://mcp.linear.app/mcp",
   + "url": "https://linear.search.<your-authsome-host>/sse",
   - "transport": "sse"
   + "transport": "sse"
   ```

4. Install:

   ```bash
   mcp-apps install linear-search --host both
   ```

## What you gain

- One shared Linear identity to audit, not N personal ones.
- Read-only enforcement: even if a prompt asks for `createIssue`, the proxy rejects it.
- Per-team scope: extend the `--allow-teams` flag to restrict the agent to a single Linear team.

See [authsome.ai/docs/quickstart](https://authsome.ai/docs/quickstart).
