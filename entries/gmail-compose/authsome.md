# Authsome recipe: Gmail · Compose draft

How to use the Gmail Compose app without uploading your Google OAuth client secret to the host.

## Why bother

Hosts that handle OAuth on your behalf either ask you to register a Google Cloud OAuth client (and paste the client secret), or rely on their own multi-tenant client (which means **your inbox is reachable by their support staff**). Authsome runs the OAuth flow inside your own boundary and injects the resulting access token at request time.

## The recipe

1. Create an OAuth 2.0 client in your Google Cloud project with the `gmail.compose` scope. Set the redirect URI to `https://oauth.<your-authsome-host>/callback`.
2. Configure Authsome:

   ```bash
   authsome oauth set gmail.compose \
     --provider google \
     --client-id "$GOOGLE_CLIENT_ID" \
     --client-secret "$GOOGLE_CLIENT_SECRET" \
     --scopes "https://www.googleapis.com/auth/gmail.compose" \
     --allow-host gmail.googleapis.com
   ```

3. Run the linking flow once:

   ```bash
   authsome oauth link gmail.compose
   ```

   This opens a browser, completes Google's consent screen, and stores the refresh token in Authsome's vault.

4. Point this entry's `server.url` at your proxy:

   ```diff
   - "url": "https://gmailmcp.googleapis.com/mcp/v1",
   + "url": "https://gmail.compose.<your-authsome-host>/v1",
   ```

5. Install:

   ```bash
   mcp-apps install gmail-compose --host both
   ```

The host now treats the proxy as a no-auth MCP server. Authsome refreshes the access token before every tool call and forwards the request with `Authorization: Bearer <token>`. Your client secret never leaves your infrastructure.

## What you gain

- Multi-tenant separation: your client secret is yours alone.
- Token refresh handled outside the host, so the host never holds a long-lived refresh token.
- Per-user vaulting: each Authsome user can link their own Gmail without sharing tokens.

See [authsome.ai/docs/quickstart](https://authsome.ai/docs/quickstart).
