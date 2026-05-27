# New entry: `<vendor>-<slug>`

## Summary

What the entry connects to, in one sentence.

## Verification checklist

- [ ] `manifest.json` passes `node cli/bin/mcp-apps.js validate`.
- [ ] `server.url` resolves (HTTP 200/301/302, or 401 if the endpoint requires auth).
- [ ] Frontmatter `verified_date` is within 7 days of this PR.
- [ ] If the server hits a third-party API, an `authsome.md` recipe is included.
- [ ] No em-dashes in `readme.md`.
- [ ] No fictional widget HTML or fabricated URLs.

## Hosts where you ran this

- [ ] ChatGPT, version: `...`
- [ ] Claude, version: `...`
- [ ] Other client, version: `...`

## Notes for reviewers

Anything weird the reviewer should know. Rate limits, sandbox quirks, scopes that require admin approval, etc.
