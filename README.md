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

## Skills

| Skill | Description | Example prompt |
| --- | --- | --- |
| `discovery-partner` | Grounds early product discovery, idea validation, problem exploration, and "what should we build next?" conversations in Deck themes, insights, segments, and customer evidence. | "What should we work on next for onboarding? Ground it in Deck feedback and include the strongest customer evidence." |
| `feedback-analyst` | Runs deeper customer feedback investigations across Deck data, including themes, insights, transcripts, segments, source types, churn reasons, adoption blockers, and satisfaction drivers. | "Deep dive into why enterprise customers are churning. Read source feedback and summarize themes, segments, quotes, and open questions." |
| `deck-weekly-feedback-digest` | Creates recurring or ad hoc PM and design digests summarizing recent feedback, changing themes, emerging pain points, opportunities, initiatives, and NPS movement. | "Create a weekly feedback digest for self-serve teams over the last 7 days, with emerging pain points, NPS movement, and recommended actions." |
| `deck-initiative-brief-generator` | Turns an initiative link, prompt, page, or evidence set into a concise initiative brief with customer problem, target segment, scope, success metrics, risks, and evidence appendix. | "Generate an initiative brief for improving CSV import reliability using Deck evidence, including scope, non-goals, success metrics, and risks." |
| `nps-breakdown` | Explains NPS results by calculating promoter, passive, and detractor breakdowns, segment-level scores, score drivers, related opportunities, representative feedback, and movement over time. | "Break down NPS for Enterprise accounts this quarter, including promoter, passive, and detractor counts, drivers, related opportunities, and representative feedback." |
| `prioritisation-advisor` | Helps product teams compare roadmap options using Deck evidence such as feedback volume, sentiment, segment concentration, feature requests, NPS impact, recency, and customer quotes. | "Compare billing flexibility, onboarding templates, and reporting exports for the next roadmap cycle. Rank them using Deck evidence and call out missing data." |
| `deck-roadmap-opportunity-review` | Interviews product teams about their context and uses Deck feedback to surface 3 to 7 roadmap opportunity candidates with evidence strength, affected segments, confidence, and next steps. | "Interview me about the growth team's activation goals, then surface 3 to 5 roadmap opportunities from Deck feedback for SMB users." |

## Contents

- `.claude-plugin/plugin.json` is the Claude Code plugin manifest.
- `.claude-plugin/marketplace.json` is the Claude marketplace entrypoint.
- `.codex-plugin/plugin.json` is the Codex plugin manifest.
- `.agents/plugins/marketplace.json` is the Codex marketplace entrypoint. It points Codex at this root Git repository with a Git-backed plugin source.
- `.mcp.json` contains the Deck MCP server configuration.
- `assets/` and `skills/` contain the shared plugin payload used by Claude Code and Codex.
