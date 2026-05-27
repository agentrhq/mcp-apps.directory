# Pre-launch checklist

For a tier-3 curated list, not a product launch. Realistic ceiling: 200-1500 stars. Plan accordingly.

## Repo is publishable

- [x] Repo is live at [github.com/agentrhq/mcp-apps.directory](https://github.com/agentrhq/mcp-apps.directory)
- [x] Repo description set
- [x] Repo topics set: `mcp`, `mcp-apps`, `apps-sdk`, `chatgpt`, `claude`, `awesome-list`, `model-context-protocol`, `authsome`
- [x] Awesome badge in root README
- [x] License files present: MIT for `cli/` and `web/`, CC0 for `entries/` and `schema/`
- [x] No fabricated URLs in the gallery
- [x] No fictional widget HTML in the starter manifests
- [x] No placeholder screenshots labelled as evidence

## CI is honest

- [x] `validate.yml` enforces only what we can actually verify: schema, frontmatter, em-dash lint, lowercase filenames, manifest+readme presence
- [x] No CI gate on screenshots or unverifiable claims

## CLI works

- [ ] `npm install -g mcp-apps` succeeds against a fresh node 20 environment
- [ ] `mcp-apps install linear-search --host claude` writes to the right config path on macOS, Linux, Windows
- [ ] `mcp-apps validate` exits non-zero on a deliberately broken manifest

## Promotion (optional)

- [ ] One tweet from the maintainer account, picking one of the options in [`tweet.md`](tweet.md)
- [ ] Show HN attempt (skip if you don't want the noise; see [`hn-show.md`](hn-show.md))
- [ ] Link from authsome.ai in a non-prominent place

## Do not do

- Do not pretend this is a product launch.
- Do not draft a 10-tweet thread; the repo does not have 10 tweets of substance.
- Do not target 10K stars in 30 days; the original brief's target was wishful.
- Do not post to subreddits without a real reason. The MCP community is small and tired of hype.
- Do not paid-promote.

## After launch

- Triage PRs within 5 business days.
- Re-verify entries quarterly (the scheduled `reverify.yml` workflow flags stale ones).
- If an entry's vendor product changes or shuts down, remove the entry in a normal PR.
