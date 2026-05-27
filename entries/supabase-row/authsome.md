# Authsome recipe: Supabase · Read row

A Supabase **service role key** has full database access including bypassing Row-Level Security. Pasting one into the host's connector store is a hard no for production. This recipe shows the right way.

## Why bother

The service role key:

- ignores RLS,
- can read every row in every table,
- can drop tables if used via the SQL API.

If it leaks via the host's logs or connector store, the blast radius is your entire database. Authsome lets the model use Supabase **without ever seeing the key**, and constrains what tables and columns are readable.

## The recipe

1. Generate a service role key at `https://app.supabase.com/project/<id>/settings/api`. Keep it on a machine you control.

2. Configure Authsome with **table and column allow-lists**:

   ```bash
   authsome credentials set supabase.row \
     --header "apikey: $SUPABASE_SERVICE_ROLE_KEY" \
     --allow-host '*.supabase.co' \
     --rate-limit "120/minute" \
     --allow-tables "public.users,public.orders" \
     --allow-columns "users:id,email,created_at; orders:id,user_id,total,status" \
     --read-only
   ```

3. Point this entry at the proxy:

   ```diff
   - "url": "https://mcp.supabase.com/mcp",
   + "url": "https://supabase.row.<your-authsome-host>/mcp",
   ```

4. Install:

   ```bash
   mcp-apps install supabase-row --host both
   ```

## What you gain

- The service role key never crosses the host boundary.
- Even if a prompt asks for `password_hash` or rows from a forbidden table, the proxy returns a 403.
- Audit log of every query by agent and tool.
- One key rotation rotates every agent at once.

## What you give up

- The agent cannot read arbitrary tables (which is the entire point).

See [authsome.ai/docs/quickstart](https://authsome.ai/docs/quickstart).
