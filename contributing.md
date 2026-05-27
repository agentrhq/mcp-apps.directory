# Contributing

Two ways to contribute. Pick the one that fits.

## Path 1: Add a link entry to the list (most common)

This is how 90% of contributions should look. One PR adds one bullet to `readme.md`.

### Format

```markdown
- [Name](https://canonical-url) - One-sentence description ending with a period. `chip1` `chip2`
```

Rules:

- **Name** is the human-readable product or repo name (e.g. `Stripe`, `excalidraw/excalidraw-mcp`, `Python SDK`).
- **URL** must be the canonical upstream source: the vendor's MCP docs page, the GitHub repo, or the official launch announcement. No marketing redirects, no shortened URLs.
- **Description** is one sentence, present tense, ends with a period. Under 100 chars.
- **Chips** are 1-3 backtick-wrapped facts: license (`mit`, `apache-2.0`, `cc0`), auth (`oauth2`, `api-key`, `none`), or hosting flag (`🏠` self-hosted only, vendor hosted URL like `mcp.linear.app/mcp`).
- For open-source entries with 100+ stars, append `★ N.Nk` after the description, before the chips.
- Use 🎖️ at the front of the bullet if the entry is officially shipped by the vendor.

Example bullets that pass:

```markdown
- 🎖️ [Stripe](https://docs.stripe.com/mcp) - Payments, billing, customer ops. `mcp.stripe.com` `api-key`
- 🎖️ [GitHub](https://github.com/github/github-mcp-server) - Issues, PRs, code search. `api.githubcopilot.com/mcp/` ★ 30k `mit`
- [excalidraw/excalidraw-mcp](https://github.com/excalidraw/excalidraw-mcp) - Fast, streamable Excalidraw MCP App. ★ 4.6k `mit`
```

### Category placement

Pick the most specific section in `readme.md`. If your entry has a widget UI in ChatGPT or Claude, it belongs under the relevant **Apps SDK widgets** section. If it is tool-only, it belongs under **MCP servers** in the right sub-category. If you cannot decide, open a draft PR and ask in the description.

### Hard rules

- Every URL must resolve. CI checks this on every PR.
- No em-dashes in user-facing copy. Use periods, commas, or middle dots (`·`).
- Bullets use `-`, never `*` or `+`.
- HTTPS only. No URL shorteners.
- The vendor must have shipped something. Vaporware and "coming soon" pages do not qualify.

### PR template

Title: `Add <Name>`.

Body: one paragraph explaining what the entry is and why it belongs in this list. Confirm you have personally used it or read the docs end-to-end. If it's an Apps SDK widget, state which host(s) you saw it render in.

## Path 2: Contribute a starter manifest (advanced)

Only for the rare case where you want to publish a copyable manifest for the CLI to install. The starter manifests live under `entries/<vendor>-<slug>/` and follow this layout:

```text
entries/linear-search/
├── manifest.json    # required, must pass schema
├── readme.md        # required, with frontmatter
├── preview.png      # required, 1200x675
├── claude.png       # required, real screenshot
├── chatgpt.png      # required, real screenshot
├── install.sh       # required, generated
└── authsome.md      # optional, only if third-party auth is involved
```

Read [`schema/manifest.schema.json`](schema/manifest.schema.json) for the manifest format and validate with:

```bash
node cli/bin/mcp-apps.js validate entries/your-slug/manifest.json
```

Path 2 has a higher bar: cross-host screenshots, a passing validator, and a `verified_date` within 7 days of the PR. See the [PR template](.github/PULL_REQUEST_TEMPLATE.md) for the full checklist.

## Removal and re-verification

Entries older than 90 days get an auto-opened re-verification issue. If the original contributor cannot respond within 30 days, any contributor can submit a fresh PR bumping the entry's verification metadata or removing it if the upstream went away.

We do not gate on stars. We do gate on the upstream being alive and the URL resolving.

## Maintainer SLA

- Triage: 2 business days.
- First review: 5 business days.
- Merge or specific feedback: 10 business days.

If your PR is stuck past 10 days, ping the maintainer listed in the relevant section.

## Code of conduct

See [code_of_conduct.md](code_of_conduct.md). Be respectful; keep the gallery technical.
