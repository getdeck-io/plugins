# Deck Plugins

These plugins are valuable only if you have a [Deck](https://getdeck.io) account with product signal in Deck.

Deck plugins for Claude Code, Codex, and Grok Build. They put Deck — the AI PM that Autonomously Improves your Product — in your coding agent, so it can run the loop from customer signal to prioritized action: discovery, ranking, initiative and Project briefs, and NPS.

For the complete documentation, please go to [Deck plugin docs](https://docs.getdeck.io/docs/integrations/deck-plugin).

To install the skills in Claude Chat, find the skills on [Deck AI skills](https://getdeck.io/resources/ai-skills).

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

Install the plugin from this repository with Codex's plugin commands. First add this GitHub repo as a Codex marketplace source:

```bash
codex plugin marketplace add getdeck-io/plugins --ref main
```

You can use the full Git URL instead if you prefer:

```bash
codex plugin marketplace add https://github.com/getdeck-io/plugins.git --ref main
```

Then install the `deck` plugin from the `deck-plugins` marketplace snapshot:

```bash
codex plugin add deck@deck-plugins
```

If Codex already has an older snapshot of this repository, refresh it before installing:

```bash
codex plugin marketplace upgrade deck-plugins
```

If the old source still points somewhere else, remove and re-add this repository:

```bash
codex plugin marketplace remove deck-plugins
codex plugin marketplace add getdeck-io/plugins --ref main
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

## Grok Build

The plugin is the repo root. Grok reads `.grok-plugin/marketplace.json` and `.grok-plugin/plugin.json`.

### Local test (use this before the official marketplace listing)

From a clone of this repository, with [Grok Build](https://x.ai/build) installed and `grok login` completed:

```bash
grok plugin validate .
grok plugin install . --trust
```

Or install through the local marketplace index, which is the same path Grok uses when browsing a catalog:

```bash
grok plugin marketplace add .
grok plugin install deck --trust
```

Confirm the plugin loaded, then enable it if it is still off (Grok leaves plugins disabled until you turn them on):

```bash
grok plugin list
grok plugin enable deck
grok plugin details deck
grok inspect
```

You can also press `Space` on `deck` in the `/plugins` tab. On first Deck tool use, Grok opens browser OAuth for `https://mcp.getdeck.io/mcp`. You can start that flow from `/mcps` by selecting the `deck` server and pressing `i`. Confirm the server:

```bash
grok mcp list
```

If you need to add the server manually:

```bash
grok mcp add --transport http deck https://mcp.getdeck.io/mcp
```

In Deck, an org admin must enable MCP access from **Settings -> MCP** before tools can read feedback. Users do not need API keys.

Try a prompt that should hit Deck, for example:

```text
What's the highest-leverage problem in Deck right now, and what should we act on?
```

Checklist:

- `grok plugin validate .` succeeds
- `deck` appears in `grok plugin list` as installed, enabled, and trusted
- `grok plugin details deck` lists the skills and the `deck` MCP server
- Browser OAuth completes against Deck (`/mcps`, then `i` on the `deck` server)
- A discovery, feedback, or NPS prompt returns Deck evidence rather than a missing-tool error

### GitHub install

You can also add this repository as a marketplace source without waiting for the official xAI catalog:

```bash
grok plugin marketplace add getdeck-io/plugins
grok plugin install deck --trust
```

## Skills

| Skill | Description | Example prompt |
| --- | --- | --- |
| `discovery-partner` | Finds the highest-leverage problem to work on, using Deck themes, insights, segments, and customer evidence. | "What should we work on next for onboarding? Ground it in Deck evidence and recommend the next action." |
| `feedback-analyst` | Investigates a problem in depth before the AI PM acts — themes, transcripts, segments, churn reasons, adoption blockers, and satisfaction drivers. | "Deep dive into why enterprise customers are churning. Read source evidence and summarize themes, segments, quotes, and what we should do next." |
| `initiative-brief-generator` | Turns the chosen problem into an initiative the team can run, with customer problem, target segment, scope, success metrics, risks, and evidence appendix. | "Generate an initiative brief for improving CSV import reliability using Deck evidence, including scope, non-goals, success metrics, and risks." |
| `project-brief-generator` | Turns the chosen problem into delivery-ready Project scope, with execution notes, success metrics, risks, and evidence appendix. | "Generate a Project brief for the Linear-linked onboarding cleanup work using Deck evidence, including scope, non-goals, execution notes, and risks." |
| `nps-breakdown` | Checks whether the product is improving, and what to fix first — promoter/passive/detractor breakdowns, drivers, related opportunities, and movement over time. | "Break down NPS for Enterprise accounts this quarter, including promoter, passive, and detractor counts, drivers, and what to improve first." |
| `prioritisation-advisor` | Ranks what to act on next and says why, using volume, sentiment, segment concentration, feature requests, NPS impact, recency, and quotes. | "Compare billing flexibility, onboarding templates, and reporting exports for the next roadmap cycle. Rank them using Deck evidence and recommend the next action." |

## Contents

- `.claude-plugin/plugin.json` is the Claude Code plugin manifest.
- `.claude-plugin/marketplace.json` is the Claude marketplace entrypoint.
- `.codex-plugin/plugin.json` is the Codex plugin manifest.
- `.grok-plugin/plugin.json` is the Grok Build plugin manifest.
- `.grok-plugin/marketplace.json` is the Grok marketplace entrypoint used for local and GitHub installs.
- `.mcp.json` contains the Deck MCP server configuration.
- `assets/` and `skills/` contain the shared plugin payload.
