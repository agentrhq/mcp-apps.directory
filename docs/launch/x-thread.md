# X thread draft (10 tweets)

Screenshots in tweets 1, 3, 5, 7, 9.

---

**1/10** [SCREENSHOT: preview grid of all 12 entries]

We shipped mcp-apps.directory. A gallery of 12 working MCP Apps that render unchanged in both ChatGPT and Claude.

Build once. Run in both. Auth included.

https://github.com/agentrhq/mcp-apps.directory

---

**2/10**

The MCP Apps spec landed in May 2026. One manifest, two hosts. Until now nobody had a curated gallery that proved the cross-host story.

We did the work for you. 12 manifests. Hand authored. Schema validated. Screenshotted in both hosts.

---

**3/10** [SCREENSHOT: Linear search app rendered side-by-side in ChatGPT and Claude]

Every entry ships with `chatgpt.png` and `claude.png` of the same app running. If you cannot verify it in both hosts, it does not merge.

The repo has a CI workflow that enforces this.

---

**4/10**

One install command.

```
npm install -g mcp-apps
mcp-apps install linear-search --host both
```

The CLI writes the manifest into Claude Desktop's config and exports a connector JSON for ChatGPT. Restart the host, you are done.

---

**5/10** [SCREENSHOT: stripe-charge widget rendering a receipt card]

Half the entries include a working `authsome.md`. It shows exactly how to inject third-party credentials without pasting them into the host's connector store.

Stripe, Slack, Gmail, Linear, Resend, Supabase. All covered.

---

**6/10**

We GitHub-searched the entire MCP space first. There is no curated MCP **Apps** directory above 100 stars today. punkpeye/awesome-mcp-servers covers servers; nobody covers the apps.

This is the slot. We are taking it.

---

**7/10** [SCREENSHOT: schema/manifest.schema.json snippet]

Every manifest validates against a 2020-12 JSON Schema we wrote from the OpenAI Apps SDK + modelcontextprotocol/ext-apps spec. CI rejects anything that does not pass.

Schema is CC0. Steal it.

---

**8/10**

Contributing is one PR per entry. Title format: `Add Vendor · Capability`. PR template has a verification checklist. If you have not run the app in both hosts within the last 7 days, it does not merge.

Maintainers spot-check before approval.

---

**9/10** [SCREENSHOT: the gallery table from the root README]

Categories: dev-tools, project-management, comms, billing, data, search, content, ops.

12 entries today. We want 50 by end of June. Open issues are tagged `help-wanted`.

---

**10/10**

mcp-apps.directory · github.com/agentrhq/mcp-apps.directory

Star, contribute, or just install and try one. Tag us with screenshots when you ship an entry.

Built by @authsome_dev. Agent identity for third-party APIs.
