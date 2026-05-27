# Show HN draft

## Title (max 80 chars)

`Show HN: A gallery of 12 MCP Apps that run unchanged in ChatGPT and Claude`

(75 chars. No marketing words.)

## Body

We built mcp-apps.directory because every MCP App example we found was either ChatGPT-only or Claude-only. The new MCP Apps spec (April 2026 Apps SDK, May 2026 Claude support) lets a single manifest render in both hosts, but nobody had cross-host verified examples.

The repo has:

- 12 hand-authored manifests for Linear, Notion, Figma, Stripe, GitHub, Slack, Gmail, Cal.com, PostHog, Vercel, Resend, Supabase.
- A JSON Schema (2020-12) for the manifest, with a CI workflow that runs on every PR.
- An `mcp-apps` CLI: `npm install -g mcp-apps && mcp-apps install linear-search --host both` writes the manifest into both Claude Desktop and ChatGPT's connector config.
- Six of the twelve include an `authsome.md` with a working recipe for keeping third-party credentials out of the host's connector store.

Every entry has a `verified_date` and screenshots in both hosts. Entries older than 90 days auto-open a re-verification issue.

Pain points we hit:

- ChatGPT and Claude differ on the OAuth callback domain, but the manifest is otherwise identical.
- `_meta.ui.domain` must be unique across the directory; we lint for it.
- Widget HTML must stay small. Anything over ~500 KB gets rejected by ChatGPT.

Repo: https://github.com/agentrhq/mcp-apps.directory
Preview gallery: https://mcp-apps.directory

Curated by us at Authsome. The authsome.md recipes are optional; the manifests work without them. We are looking for contributors to add their own working manifests via PR. The bar is cross-host verified screenshots and a passing CI run.

## Comment-ready answers

**"Why not just contribute to openai/openai-apps-sdk-examples?"**
OpenAI's repo is curated by OpenAI and tests against ChatGPT only. We test in both hosts and accept community PRs.

**"What's the moat?"**
Cross-host verification + the CLI. The schema is our second-order moat: if the spec changes, our schema and CI catch breakage before merge.

**"Is this a thin wrapper over awesome-mcp-servers?"**
That repo curates servers; we curate apps. Different layer.

**"Why does Authsome appear in the footer?"**
We built and maintain the repo. Authsome is our auth-injection product. The six `authsome.md` files are optional; they exist because the community asked.
