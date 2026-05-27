# Pre-launch checklist

Run this in order. Do not launch until every box is ticked.

## v1 gate

- [ ] 12 seed entries committed under `entries/`
- [ ] Each entry has `manifest.json`, `readme.md`, `preview.png`, `claude.png`, `chatgpt.png`, `install.sh`
- [ ] 6 entries (Stripe, Resend, Gmail, Slack, Linear, Supabase) ship `authsome.md`
- [ ] CI green on `main` (validate.yml passes)
- [ ] `mcp-apps` CLI installs into Claude on macOS / Linux / Windows (manually tested)
- [ ] `mcp-apps validate` exits non-zero on a deliberately-broken manifest

## Public assets

- [ ] Preview site live at https://mcp-apps.directory **or** https://agentrhq.github.io/mcp-apps
- [ ] Repo description set: `Curated MCP Apps that run in ChatGPT and Claude. Cross-host verified. By Authsome.`
- [ ] Repo topics: `mcp`, `mcp-apps`, `apps-sdk`, `chatgpt`, `claude`, `awesome-list`
- [ ] Awesome badge in root README
- [ ] License files present: MIT (cli/web), CC0 (entries/schema)

## Distribution

- [ ] `mcp-apps` published to npm under the `agentrhq` org (`npm publish --access public`)
- [ ] X thread drafted in `docs/launch/x-thread.md`, queued in Buffer or equivalent
- [ ] Show HN draft in `docs/launch/hn-show.md`, ready to post Tuesday 09:00 PT
- [ ] First 3 high-signal collaborators added as commit reviewers
- [ ] DM sent to: punkpeye (awesome-mcp-servers), digitarald (mcp-apps-playground), modelcontextprotocol maintainer team. Heads-up, not a request for promotion.

## Tested with humans

- [ ] README hook tested with 5 non-AI-bubble friends. They each understood the value in one read.
- [ ] One developer outside Authsome successfully installed an entry into both hosts using only the README.
- [ ] CONTRIBUTING.md walked through by someone who has not seen the project.

## Safety nets

- [ ] Re-verification workflow scheduled (`.github/workflows/reverify.yml` cron)
- [ ] Issue template for new entries and for re-verification both render correctly
- [ ] Code of Conduct in place
- [ ] Maintainers triage SLA written down internally: 5 business days

## Post-launch (first 72h)

- [ ] Monitor HN comments hourly for 12h, respond as the project account
- [ ] Pin a single "what's next" issue to the repo
- [ ] Public roadmap issue listing the next 10 candidate entries
- [ ] If a competitor launches a similar repo in the same window: read what they shipped, identify what we do that they do not (CLI + authsome + cross-host verified), lean into those gaps in follow-up posts

## Day 30 review

- [ ] Star count tracked against the 10K target
- [ ] PR throughput (entries merged per week)
- [ ] Re-verification queue depth
- [ ] Drop-off rate on the CLI install flow

If we hit 1K stars but PR throughput is zero, the moat is the directory, not the community. Pivot accordingly.
