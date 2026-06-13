# Awesome MCP Apps & Servers

> A curated index of MCP Apps, MCP servers, frameworks, and SDKs for ChatGPT and Claude.

[![Awesome](https://awesome.re/badge.svg)](https://github.com/sindresorhus/awesome) [![License: CC0 + MIT](https://img.shields.io/badge/license-CC0%20%2B%20MIT-blue.svg)](LICENSE) [![Manifest 1.0](https://img.shields.io/badge/manifest-1.0-83CA16.svg)](schema/manifest.schema.json)

What this list covers, and what it does not:

- **MCP Apps** are tools with an in-chat widget UI, rendered by [ChatGPT (Apps SDK)](https://developers.openai.com/apps-sdk/) or [Claude (MCP Apps)](https://modelcontextprotocol.io/docs/extensions/apps).
- **MCP servers** are tool-only endpoints with no widget UI. Most third-party integrations today fall here.
- Both surfaces use the same Model Context Protocol underneath. Many entries below ship one or the other (or both).

This list is the *Apps and widgets* layer on top of [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers). It is intentionally smaller and host-aware. We link to upstream sources of truth, we do not re-host manifests.

## Contents

- [Legend](#legend)
- [Apps SDK widgets (cross-host)](#apps-sdk-widgets-cross-host)
- [ChatGPT pilot partner apps](#chatgpt-pilot-partner-apps)
- [Claude widget partner apps](#claude-widget-partner-apps)
- [Open-source widget examples](#open-source-widget-examples)
- [MCP servers (tool-only)](#mcp-servers-tool-only)
  - [Communication](#communication)
  - [Google Workspace](#google-workspace)
  - [Project and issue tracking](#project-and-issue-tracking)
  - [CRM and sales](#crm-and-sales)
  - [Knowledge and notes](#knowledge-and-notes)
  - [Dev tools and infrastructure](#dev-tools-and-infrastructure)
  - [Observability and monitoring](#observability-and-monitoring)
  - [Billing and finance](#billing-and-finance)
  - [E-commerce](#e-commerce)
  - [Data and analytics](#data-and-analytics)
  - [AI and ML](#ai-and-ml)
  - [Scheduling](#scheduling)
  - [Email send](#email-send)
  - [Search](#search)
  - [Web scraping and browser automation](#web-scraping-and-browser-automation)
  - [Travel](#travel)
  - [Identity and auth](#identity-and-auth)
  - [Workflow and multi-platform](#workflow-and-multi-platform)
  - [Specialty](#specialty)
- [Frameworks for building Apps](#frameworks-for-building-apps)
- [Official SDKs](#official-sdks)
- [Inspectors and devtools](#inspectors-and-devtools)
- [Registries and related lists](#registries-and-related-lists)
- [Starter manifests](#starter-manifests)
- [Contributing](#contributing)
- [License](#license)

## Legend

- 🎖️ Officially shipped by the vendor.
- 🏠 Self-hosted only. No vendor-hosted endpoint.
- ⚠ Experimental or unmaintained.
- Trailing backtick chips show the license and the auth or hosting model.
- Star counts shown as `★ N.Nk` for open-source items above ~500 stars.

## Apps SDK widgets (cross-host)

These render an in-chat widget in **both** ChatGPT and Claude.

- 🎖️ [Figma](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Dev-Mode-MCP-Server) - Comment on files, search nodes, sync design tokens. Confirmed Apps SDK pilot partner with parallel Claude support. `oauth2` `mcp.figma.com/mcp`
- 🎖️ [Canva](https://www.canva.com/help/connecting-to-chatgpt/) - Generate and edit designs from chat. Cross-host since Anthropic's January announcement. `oauth2`

## ChatGPT pilot partner apps

ChatGPT-only widget UIs from the [Apps SDK launch partners](https://openai.com/index/introducing-apps-in-chatgpt/).

- 🎖️ [Booking.com](https://openai.com/index/introducing-apps-in-chatgpt/) - Search and book stays inside ChatGPT. `chatgpt`
- 🎖️ [Coursera](https://openai.com/index/introducing-apps-in-chatgpt/) - Discover and start courses without leaving chat. `chatgpt`
- 🎖️ [Expedia](https://openai.com/index/introducing-apps-in-chatgpt/) - Flights and hotels in a widget. `chatgpt`
- 🎖️ [Spotify](https://openai.com/index/introducing-apps-in-chatgpt/) - Search music and queue tracks. `chatgpt`
- 🎖️ [Zillow](https://openai.com/index/introducing-apps-in-chatgpt/) - Real estate listings with map and details. `chatgpt`

## Claude widget partner apps

Claude-only widget UIs from [Anthropic's January 2026 launch](https://techcrunch.com/2026/01/26/anthropic-launches-interactive-claude-apps-including-slack-and-other-workplace-tools/).

- 🎖️ [Asana](https://asana.com/) - Project timelines and task updates with interactive UI. `claude`
- 🎖️ [Box](https://www.box.com/) - File management with rendered previews. `claude`
- 🎖️ [Hex](https://hex.tech/) - Inline data visualization. `claude`
- 🎖️ [Amplitude](https://amplitude.com/) - Analytics dashboards in chat. `claude`
- 🎖️ [monday.com](https://monday.com/) - Board updates with live UI. `claude`
- 🎖️ [Clay](https://www.clay.com/) - Company research cards. `claude`
- 🎖️ [Slack (widget)](https://slack.com/) - Drafts with live message preview in Claude. `claude`

## Open-source widget examples

Copyable widget code we have verified resolves on GitHub.

- 🎖️ [openai/openai-apps-sdk-examples](https://github.com/openai/openai-apps-sdk-examples) - Five official references: Pizzaz, Solar System, Kitchen Sink, Shopping Cart, Authenticated. ★ 2.2k `mit` `typescript`
- 🎖️ [openai/apps-sdk-ui](https://github.com/openai/apps-sdk-ui) - The UI component library used by the Apps SDK examples. ★ 903 `mit`
- 🎖️ [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps) - Spec plus reference examples: threejs, map, pdf, system-monitor, sheet-music. ★ 2.3k `mit` `cross-host`
- [excalidraw/excalidraw-mcp](https://github.com/excalidraw/excalidraw-mcp) - Fast, streamable Excalidraw MCP App. ★ 4.6k `mit`
- [CopilotKit/generative-ui](https://github.com/CopilotKit/generative-ui) - Generative UI examples for AG-UI, A2UI, and MCP Apps. ★ 719 `mit`
- [microsoft/mcp-interactiveUI-samples](https://github.com/microsoft/mcp-interactiveUI-samples) - Microsoft's lightweight pattern-focused UI samples. ★ 58 `mit`
- [digitarald/mcp-apps-playground](https://github.com/digitarald/mcp-apps-playground) - Playground experiments. ★ 68 `mit`
- [zhensherlock/sp500-mcp-server](https://github.com/zhensherlock/sp500-mcp-server) - S&P 500 server with embedded MCP App UI resources. ★ 101 `mit`
- [VikashLoomba/copilot-mcp](https://github.com/VikashLoomba/copilot-mcp) - VS Code extension to find and install MCP Apps. ★ 491 `mit`
- 🎖️ [vercel-labs/chatgpt-apps-sdk-nextjs-starter](https://github.com/vercel-labs/chatgpt-apps-sdk-nextjs-starter) - Vercel's official Next.js starter for ChatGPT Apps. ★ 255 `mit`

## MCP servers (tool-only)

No widget UI. Tools exposed over MCP for when the agent needs to *do* something rather than display something.

### Communication

- 🎖️ [Slack](https://docs.slack.dev/ai/slack-mcp-server/) - Post, search, and react to messages. `mcp.slack.com/mcp` `oauth2`
- 🎖️ [Gmail](https://developers.google.com/workspace/gmail/api/guides/configure-mcp-server) - Compose drafts, search, manage labels. `gmailmcp.googleapis.com/mcp/v1` `oauth2`
- [lharries/whatsapp-mcp](https://github.com/lharries/whatsapp-mcp) - Self-hosted WhatsApp server. ★ 5.7k `mit` `🏠`
- [Vexa-ai/vexa](https://github.com/Vexa-ai/vexa) - Meeting transcription for Google Meet, Microsoft Teams, Zoom. Auto-join bots plus MCP server. ★ 2.1k `mit`
- 🎖️ [Twilio Labs MCP](https://github.com/twilio-labs/mcp) - Twilio's API as MCP tools plus an OpenAPI-to-MCP generator. ★ 105 `mit`
- 🎖️ [Mailgun MCP](https://github.com/mailgun/mailgun-mcp-server) - Mailgun API server. ★ 57

### Google Workspace

- [taylorwilsdon/google_workspace_mcp](https://github.com/taylorwilsdon/google_workspace_mcp) - Gmail, Calendar, Docs, Sheets, Slides, Chat, Forms, Tasks, Drive in one server. ★ 2.5k `mit`
- [nspady/google-calendar-mcp](https://github.com/nspady/google-calendar-mcp) - Google Calendar event management. ★ 1.1k `mit`
- [ridafkih/keeper.sh](https://github.com/ridafkih/keeper.sh) - Universal calendar MCP, aggregates Google, Outlook, iCloud, CalDAV, ICS. ★ 1.1k `mit`
- [xing5/mcp-google-sheets](https://github.com/xing5/mcp-google-sheets) - Google Sheets create and modify. ★ 874 `mit`

### Project and issue tracking

- 🎖️ [Linear](https://linear.app/docs/mcp) - Search and manage issues and projects. `mcp.linear.app/mcp` `oauth2`
- 🎖️ [Notion](https://www.notion.com/help/notion-mcp) - Read and write pages and databases. `mcp.notion.com/mcp` `oauth2`
- 🎖️ [makenotion/notion-mcp-server](https://github.com/makenotion/notion-mcp-server) - The open-source server behind the hosted Notion MCP. ★ 4.4k `mit`
- 🎖️ [Atlassian (Jira + Confluence)](https://github.com/atlassian/atlassian-mcp-server) - Tickets, pages, search. ★ 729 `oauth2` `hosted`

### CRM and sales

- [smn2gnt/MCP-Salesforce](https://github.com/smn2gnt/MCP-Salesforce) - Salesforce connector via MCP. ★ 179 `mit`
- [tsmztech/mcp-server-salesforce](https://github.com/tsmztech/mcp-server-salesforce) - Alternate Salesforce server with broader operations. ★ 156 `mit`
- [baryhuang/mcp-hubspot](https://github.com/baryhuang/mcp-hubspot) - HubSpot CRM with vector caching to work around API limits. ★ 124 `mit`

### Knowledge and notes

- [MarkusPfundstein/mcp-obsidian](https://github.com/MarkusPfundstein/mcp-obsidian) - Read and write Obsidian vaults via the REST API plugin. ★ 3.8k `mit`
- [StevenStavrakis/obsidian-mcp](https://github.com/StevenStavrakis/obsidian-mcp) - Simple Obsidian MCP server. ★ 712 `mit`
- [cyanheads/obsidian-mcp-server](https://github.com/cyanheads/obsidian-mcp-server) - Surgical edits, tags, and frontmatter for Obsidian. ★ 562 `mit`

### Dev tools and infrastructure

- 🎖️ [GitHub](https://github.com/github/github-mcp-server) - Issues, PRs, code search, releases. `api.githubcopilot.com/mcp/` ★ 30k `mit`
- 🎖️ [Vercel](https://vercel.com/docs/agent-resources/vercel-mcp) - Deployments and project ops. `mcp.vercel.com` `oauth2`
- 🎖️ [Cloudflare](https://github.com/cloudflare/mcp) - Cloudflare API access from agents. ★ 481 `oauth2`
- 🎖️ [Cloudflare Workers MCP](https://github.com/cloudflare/workers-mcp) - Talk to a Cloudflare Worker from Claude Desktop. ★ 637 `mit`
- 🎖️ [Cloudflare Playwright MCP](https://github.com/cloudflare/playwright-mcp) - Playwright server backed by Cloudflare Browser Rendering. ★ 245 `mit`
- 🎖️ [AWS Labs MCP](https://github.com/awslabs/mcp) - Open-source MCP servers for AWS. ★ 9.1k `apache-2.0` `🏠`
- 🎖️ [Google MCP](https://github.com/google/mcp) - Google's official MCP collection. ★ 4.1k
- 🎖️ [Sentry](https://github.com/getsentry/sentry-mcp) - Issue management via LLM. ★ 706 `mit`
- 🎖️ [XcodeBuildMCP](https://github.com/getsentry/XcodeBuildMCP) - Tools for iOS and macOS projects. ★ 5.8k `mit`
- 🎖️ [Microsoft Playwright MCP](https://github.com/microsoft/playwright-mcp) - Browser automation. ★ 33k `apache-2.0`

### Observability and monitoring

- 🎖️ [Grafana MCP](https://github.com/grafana/mcp-grafana) - Dashboards, alerts, datasources. ★ 3.0k `apache-2.0`
- 🎖️ [Grafana Loki MCP](https://github.com/grafana/loki-mcp) - Log query and analysis. ★ 145 `apache-2.0`
- 🎖️ [Grafana k6 MCP](https://github.com/grafana/mcp-k6) - Load testing from agents. ★ 39 `apache-2.0`
- 🎖️ [Datadog Labs MCP](https://github.com/datadog-labs/mcp-server) - Official Datadog server. ★ 39
- [winor30/mcp-server-datadog](https://github.com/winor30/mcp-server-datadog) - Community Datadog with broader API coverage. ★ 142 `mit`
- 🎖️ [PagerDuty MCP](https://github.com/PagerDuty/pagerduty-mcp-server) - Incidents, schedules, escalations. ★ 69 `apache-2.0`

### Billing and finance

- 🎖️ [Stripe](https://docs.stripe.com/mcp) - Payments, billing, customer ops. `mcp.stripe.com` `api-key`
- [financial-datasets/mcp-server](https://github.com/financial-datasets/mcp-server) - Stock market API for agents. ★ 2.2k `mit`

### E-commerce

- [GeLi2001/shopify-mcp](https://github.com/GeLi2001/shopify-mcp) - Shopify Admin API for Claude and Cursor. ★ 210 `mit`

### Data and analytics

- 🎖️ [Supabase](https://supabase.com/docs/guides/getting-started/mcp) - Database, tables, config. `mcp.supabase.com/mcp` `api-key`
- 🎖️ [PostHog](https://posthog.com/docs/model-context-protocol) - HogQL queries, flags, errors. `mcp.posthog.com/mcp` `api-key`
- 🎖️ [Google MCP Toolbox for Databases](https://github.com/googleapis/mcp-toolbox) - Postgres, BigQuery, Spanner, Mongo, Redis, more. ★ 15k `apache-2.0`
- 🎖️ [Google Analytics MCP](https://github.com/googleanalytics/google-analytics-mcp) - GA4 traffic, conversions, comparisons. ★ 2.2k `apache-2.0`
- 🎖️ [Snowflake Labs MCP](https://github.com/Snowflake-Labs/mcp) - Cortex AI, object management, SQL, semantic views. ★ 288
- [isaacwasserman/mcp-snowflake-server](https://github.com/isaacwasserman/mcp-snowflake-server) - Community Snowflake server with broader coverage. ★ 183 `mit`
- [ergut/mcp-bigquery-server](https://github.com/ergut/mcp-bigquery-server) - Read-only BigQuery for LLMs. ★ 140 `mit`
- 🎖️ [Xquik](https://docs.xquik.com/mcp/overview) - X data, monitoring, and workflow automation. `xquik.com/mcp` `api-key`
- [haris-musa/excel-mcp-server](https://github.com/haris-musa/excel-mcp-server) - Excel file manipulation. ★ 3.9k `mit` `🏠`
- [antvis/mcp-server-chart](https://github.com/antvis/mcp-server-chart) - 25+ chart types via AntV. ★ 4.1k `mit`

### AI and ML

- 🎖️ [ElevenLabs MCP](https://github.com/elevenlabs/elevenlabs-mcp) - Voice generation, conversational AI. ★ 1.4k `mit`
- 🎖️ [Hugging Face MCP](https://github.com/huggingface/hf-mcp-server) - Search models, datasets, spaces. ★ 241 `mit`
- [awkoy/replicate-flux-mcp](https://github.com/awkoy/replicate-flux-mcp) - Image and SVG generation via Replicate Flux. ★ 105 `mit`

### Scheduling

- 🎖️ [Cal.com](https://cal.com/docs/mcp-server) - Bookings, event types, availability. `mcp.cal.com/mcp` `api-key`

### Email send

- 🎖️ [Resend](https://github.com/resend/resend-mcp) - Transactional email. Self-hosted only, run with `npx resend-mcp`. `🏠`

### Search

- 🎖️ [Brave Search MCP](https://github.com/brave/brave-search-mcp-server) - Official Brave search server. ★ 1.1k
- [openags/paper-search-mcp](https://github.com/openags/paper-search-mcp) - Academic search across arXiv, PubMed, bioRxiv. ★ 1.6k

### Web scraping and browser automation

- 🎖️ [Firecrawl](https://github.com/firecrawl/firecrawl-mcp-server) - Scraping plus search for LLM clients. ★ 6.4k `mit`
- [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) - The underlying scraping engine, used by the MCP server. ★ 125k `agpl-3.0`
- [hangwin/mcp-chrome](https://github.com/hangwin/mcp-chrome) - Chrome extension exposing the browser over MCP. Automation, content analysis, semantic search. ★ 11.7k

### Travel

- [punitarani/fli](https://github.com/punitarani/fli) - Google Flights MCP, CLI and Python library. ★ 2.7k `mit`

### Identity and auth

- [casdoor/casdoor](https://github.com/casdoor/casdoor) - Open-source IAM and MCP/agent auth gateway. OAuth, OIDC, SAML, SSO, MFA, WebAuthn. ★ 13.7k `apache-2.0`

### Workflow and multi-platform

- [activepieces/activepieces](https://github.com/activepieces/activepieces) - 400+ MCP servers wrapped in an n8n-style workflow platform. ★ 22.4k `mit`
- [srbhptl39/MCP-SuperAssistant](https://github.com/srbhptl39/MCP-SuperAssistant) - Bring MCP to ChatGPT, Gemini, Perplexity, Grok, DeepSeek, OpenRouter, more. ★ 2.5k `mit`
- [disler/just-prompt](https://github.com/disler/just-prompt) - One MCP server proxying OpenAI, Anthropic, Gemini, Groq, DeepSeek, Ollama. ★ 731

### Specialty

- [LaurieWired/GhidraMCP](https://github.com/LaurieWired/GhidraMCP) - Reverse engineering via Ghidra. ★ 9.0k `apache-2.0`
- ⚠ [0x4m4/hexstrike-ai](https://github.com/0x4m4/hexstrike-ai) - 150+ cybersecurity tools for **authorized** pentesting only. ★ 9.0k `mit`

## Frameworks for building Apps

- [PrefectHQ/fastmcp](https://github.com/PrefectHQ/fastmcp) - The fast, Pythonic way to build MCP servers and clients. ★ 25.3k `mit` `python`
- [mcp-use/mcp-use](https://github.com/mcp-use/mcp-use) - Fullstack MCP framework for ChatGPT and Claude Apps. ★ 10k `mit` `typescript`
- [MCP-UI-Org/mcp-ui](https://github.com/MCP-UI-Org/mcp-ui) - UI SDK that influenced the MCP Apps spec. ★ 4.9k `apache-2.0` `typescript`
- [alpic-ai/skybridge](https://github.com/alpic-ai/skybridge) - TypeScript framework for MCP Apps and ChatGPT Apps. ★ 1.4k `mit`
- 🎖️ [modelcontextprotocol/ext-apps](https://github.com/modelcontextprotocol/ext-apps) - The official MCP Apps SDK. ★ 2.3k `mit`
- [Sunpeak-AI/sunpeak](https://github.com/Sunpeak-AI/sunpeak) - Testing framework plus Apps framework for ChatGPT Apps, Claude Connectors, and more. ★ 186 `mit`

## Official SDKs

Every SDK is published by the modelcontextprotocol GitHub org, usually with a language steward.

- [Python SDK](https://github.com/modelcontextprotocol/python-sdk) - The reference SDK. ★ 23k `mit`
- [TypeScript SDK](https://github.com/modelcontextprotocol/typescript-sdk) ★ 12.5k `mit`
- [Go SDK](https://github.com/modelcontextprotocol/go-sdk) - With Google. ★ 4.6k `mit`
- [C# SDK](https://github.com/modelcontextprotocol/csharp-sdk) - With Microsoft. ★ 4.3k `mit`
- [Rust SDK](https://github.com/modelcontextprotocol/rust-sdk) ★ 3.5k `mit`
- [Java SDK](https://github.com/modelcontextprotocol/java-sdk) - With Spring AI. ★ 3.4k `apache-2.0`
- [PHP SDK](https://github.com/modelcontextprotocol/php-sdk) - With The PHP Foundation. ★ 1.5k `mit`
- [Swift SDK](https://github.com/modelcontextprotocol/swift-sdk) ★ 1.4k `mit`
- [Kotlin SDK](https://github.com/modelcontextprotocol/kotlin-sdk) - With JetBrains. ★ 1.4k `apache-2.0`
- [Ruby SDK](https://github.com/modelcontextprotocol/ruby-sdk) ★ 835 `mit`

## Inspectors and devtools

- 🎖️ [modelcontextprotocol/inspector](https://github.com/modelcontextprotocol/inspector) - Visual testing tool for MCP servers. ★ 9.9k `mit`
- [MCPJam/inspector](https://github.com/MCPJam/inspector) - Debugger for MCP servers and ChatGPT apps. ★ 2.0k `mit`
- 🎖️ [modelcontextprotocol/registry](https://github.com/modelcontextprotocol/registry) - Community-driven MCP server registry. ★ 6.9k `mit`
- [IBM/mcp-context-forge](https://github.com/IBM/mcp-context-forge) - AI gateway, registry, and proxy for MCP plus REST APIs. ★ 3.8k `apache-2.0`
- 🎖️ [modelcontextprotocol/mcpb](https://github.com/modelcontextprotocol/mcpb) - One-click local MCP server installation in desktop apps. ★ 1.9k `mit`
- [GLips/Figma-Context-MCP](https://github.com/GLips/Figma-Context-MCP) - Community Figma context server for design-aware coding agents. ★ 14.9k `mit`

## Registries and related lists

### From the same maintainer

- [agentrhq/awesome-agents-md](https://github.com/agentrhq/awesome-agents-md) - Battle-tested AGENTS.md per stack. Verified against Codex, Cursor, Jules, Aider.
- [agentrhq/awesome-llms-txt](https://github.com/agentrhq/awesome-llms-txt) - Scored leaderboard of llms.txt quality. 1,023 sites graded against a public rubric.

### Elsewhere on GitHub

- [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) - The canonical list of MCP servers. ★ 88k
- [appcypher/awesome-mcp-servers](https://github.com/appcypher/awesome-mcp-servers) - Alternate curation. ★ 5.6k
- [wong2/awesome-mcp-servers](https://github.com/wong2/awesome-mcp-servers) - Earlier curation, still actively maintained. ★ 4.1k
- [yzfly/Awesome-MCP-ZH](https://github.com/yzfly/Awesome-MCP-ZH) - Chinese-language MCP resource list. ★ 7.2k
- [jaw9c/awesome-remote-mcp-servers](https://github.com/jaw9c/awesome-remote-mcp-servers) - Remote, hosted-only MCP servers. ★ 1.1k
- [bh-rat/awesome-mcp-enterprise](https://github.com/bh-rat/awesome-mcp-enterprise) - Enterprise-focused MCP tools and platforms. ★ 110

## Starter manifests

Twelve starter MCP server install configs live under [`entries/`](entries/). Each one is a thin JSON file with the canonical `server.url`, the auth model, and the tool input/output schemas. No fictional widget HTML, no screenshots; just enough to install with one command:

```bash
npm install -g mcp-apps
mcp-apps install linear-search --host both
```

Six entries (Stripe, Resend, Gmail, Slack, Linear, Supabase) also ship an `authsome.md` recipe showing how to keep the third-party API key out of the host's connector store. See [`entries/`](entries/) for the per-vendor configs. Manifest format: [schema/manifest.schema.json](schema/manifest.schema.json).

## Contributing

One PR per entry. See [`contributing.md`](contributing.md) for the format, lint rules, and review SLA. Hard rules:

- Every link must resolve. Broken links block merge.
- No fabricated URLs. If the vendor hasn't shipped an endpoint, mark `🏠` and link to the self-hosted server repo.
- Be precise about which host(s) you have personally tested in.
- No em-dashes in user-facing copy.

The list is intentionally smaller than the underlying ecosystem. We only include entries that have a verified upstream source and an active maintainer signal within the last 90 days.

## License

[CC0](LICENSE) for the list and the schema. [MIT](LICENSE) for the CLI and the web preview.

---

Curated by [Authsome](https://authsome.ai) · agent identity for third-party APIs.
