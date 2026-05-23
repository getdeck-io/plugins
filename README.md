# Deck Plugins

Deck plugins for Claude Code and Codex. These plugins help product teams use Deck customer feedback for discovery, feedback analysis, prioritisation, roadmap opportunity review, initiative briefs, weekly feedback digests, and NPS breakdowns.

## Claude Code

Add the marketplace:

```bash
claude plugin marketplace add getdeck-io/plugins
```

Install the Deck plugin:

```bash
claude plugin install deck@deck-plugins
```

The plugin bundles Deck's hosted MCP server. After installing, start Claude Code and run:

```bash
/mcp
```

Authenticate with your Deck account when prompted. To confirm the server from the shell, run:

```bash
claude mcp list
```

If you need to add the server manually, run:

```bash
claude mcp add --transport http deck https://mcp.getdeck.io/mcp
```

## Codex

Add the marketplace:

```bash
codex plugin marketplace add getdeck-io/plugins
```

Install the Deck plugin:

```bash
codex plugin add deck@deck-plugins
```

The plugin includes the Deck MCP server configuration:

```text
https://mcp.getdeck.io/mcp
```

Confirm the server is installed:

```bash
codex mcp list
```

Authenticate through the browser OAuth flow:

```bash
codex mcp login deck
```

If you need to add the server manually, run:

```bash
codex mcp add deck --url https://mcp.getdeck.io/mcp
```

In Deck, an org admin must enable MCP access from **Settings -> MCP** before tools can read feedback. Deck MCP uses browser OAuth; users do not need API keys.

## Contents

- `.claude-plugin/plugin.json` is the Claude Code plugin manifest.
- `.claude-plugin/marketplace.json` is the Claude marketplace entrypoint.
- `.codex-plugin/plugin.json` is the root standalone Codex plugin manifest.
- `.agents/plugins/marketplace.json` is the Codex marketplace entrypoint.
- `plugins/deck/.codex-plugin/plugin.json` is the Codex plugin manifest.
- `plugins/deck/.mcp.json` contains the Deck MCP server configuration for Codex.
- `assets/` and `skills/` contain the root plugin payload used by Claude Code.
- `plugins/deck/assets/` and `plugins/deck/skills/` contain the Codex plugin payload.
