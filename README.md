# Deck Plugins

Deck plugins for Claude Code and Codex. These plugins help product teams use Deck customer feedback for discovery, prioritisation, roadmap opportunity review, initiative briefs, launch monitoring, weekly feedback digests, and NPS breakdowns.

## Claude Code

Add the marketplace:

```bash
claude plugin marketplace add getdeck-io/plugins
```

Install the Deck plugin:

```bash
claude plugin install deck@deck-plugins
```

## Codex

Add the marketplace:

```bash
codex plugin marketplace add getdeck-io/plugins
```

Then install Deck from the Codex plugins interface.

## Contents

- `claude-code-plugin/` contains the Claude Code plugin manifest and skills.
- `codex-plugin/` contains the Codex plugin manifest, skill metadata, and skills.
- `.claude-plugin/marketplace.json` is the Claude marketplace entrypoint.
- `.agents/plugins/marketplace.json` is the Codex marketplace entrypoint.
