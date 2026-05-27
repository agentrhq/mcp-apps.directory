# Show HN draft

Skip this if you don't want the HN attention. The repo is a curated list; it does not have a product story strong enough to bait HN votes. If you post it and it dies on page 4, that's the realistic outcome.

If you do post:

## Title (under 80 chars)

`Show HN: An MCP servers + Apps SDK directory for ChatGPT and Claude`

(67 chars. No marketing words. No "introducing". No emojis.)

## Body

I wanted to know what MCP servers and Apps existed for a project I'm building and couldn't find a list that split apps with widget UIs from tool-only servers, or that labelled which hosts each one actually works in. So I made one.

The repo:

- 144 entries across 14 categories, each linked to its upstream source.
- Apps-SDK-widget entries (the rare ones with in-chat UI) separated from MCP servers (the common tool-only kind).
- Per-entry chips for license and auth model.
- 58 entries marked as officially vendor-shipped, 6 as self-hosted only.
- A small CLI that takes 12 starter manifests and writes them to Claude Desktop's connector config or exports them for ChatGPT.
- 6 worked recipes (`authsome.md`) for keeping the third-party API key out of the host's connector store using a credential proxy pattern.

It sits one layer up from [punkpeye/awesome-mcp-servers](https://github.com/punkpeye/awesome-mcp-servers) (88K stars, exhaustive on servers). I link to it. I do not duplicate it.

Repo: [github.com/agentrhq/mcp-apps.directory](https://github.com/agentrhq/mcp-apps.directory)

I maintain it because I needed it. Contributions follow the standard awesome-list PR template. Direct competitors of mine (Infisical, Bitwarden) are not in scope here, but they will be in a separate repo I'm building on agent credential vaulting.

## Comment-ready answers

**"Why not just contribute to punkpeye/awesome-mcp-servers?"**
Different shape. Punkpeye is comprehensive on servers. This list adds the Apps SDK widget cut, the host-aware labels, the auth chip, and the starter manifests, none of which fit the source list's structure.

**"What's `mcp-apps install` actually do?"**
Fetches the manifest from the repo, validates it against a JSON Schema, and writes it to `~/Library/Application Support/Claude/claude_desktop_config.json` (or the equivalent on Linux/Windows). For ChatGPT it exports a connector JSON you paste into Settings.

**"Why the Authsome footer?"**
I built and maintain the repo. Authsome is my product. The `authsome.md` files demonstrate the credential proxy pattern; the rest of the repo works without Authsome.

**Honest expectation:** if this lands on the front page, great. If it doesn't, the repo still does its job for anyone who searches the topic later.
