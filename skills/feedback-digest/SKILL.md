---
name: deck-weekly-feedback-digest
description: Create Deck weekly feedback digests from feedback, themes, insights, opportunities, initiatives, and NPS. Use when PMs or designers want a recurring or ad hoc summary scoped by segment, vertical, product area, theme, pain point, or time window.
---

# Deck Weekly Feedback Digest

## Goal

Create a useful PM/design digest that summarizes what customers are saying, what changed, and what the team should look at next.

## Intake

Ask only for missing context that materially changes the digest. Keep intake lightweight: if the user gives a clear scope, proceed and state assumptions briefly. If the request is broad, ask 2-3 targeted questions before querying Deck.

- Team, audience, or function the digest is for, such as PM, design, research, support, GTM, or leadership
- Segment, vertical, persona, or product area to focus on
- Specific theme, pain point, opportunity, or initiative to include
- Digest period, defaulting to the last 7 days for new activity
- Historical comparison window, defaulting to the last 12 months
- Whether the digest should optimize for exec summary, product planning, design discovery, or support follow-up

If the user says "everything," still ask whether they want a segment, product area, or audience lens. Deck feedback is more useful when scoped.

Good first questions when context is missing:

- "Who is this digest for, and what team or customer segment should it focus on?"
- "Should I optimize for an executive summary, product planning, design discovery, or support follow-up?"
- "Do you want just this week's changes, or a comparison against a longer baseline?"

## Evidence Gathering

Pull together the main Deck evidence surfaces:

- Raw feedback and quotes
- Themes and subthemes
- Insights and sentiment
- Opportunity backlog entries
- Initiatives and their evidence
- NPS score, drivers, and segment movement
- Newly created or changed records in the digest period

Use the actual Deck MCP server tools for evidence gathering:

- `select_organization` when organization context is ambiguous or an `org_id` must be validated
- `get_overview` for organization context, top themes, recent activity, and available segments
- `explore_insights` with `since`, `query`, `theme_id`, `segment_id`, `category`, and `sentiment` filters for digest-period changes and evidence
- `explore_themes` for theme volume, sentiment/category breakdowns, and segment distribution
- `explore_subthemes` for detailed clusters inside themes
- `explore_opportunity_backlog` for active opportunity backlog entries and evidence
- `explore_build_initiatives` for initiatives linked to the digest scope
- `explore_nps` for NPS summary, respondent groups, trends, and recommendations
- `read_transcript` for original customer language behind representative insights
- `list_sources` to understand source mix and recent feedback sources
- `get_platform_links` only when a needed Deck URL is not already present in tool results

## Analysis

Rank items by practical importance, not just volume:

- Recency
- Frequency and segment concentration
- Severity or revenue risk
- Evidence quality and source diversity
- Relationship to existing initiatives or opportunities
- Change from the historical baseline

## Output

Use this structure:

```text
Digest scope:
Date range:
Executive summary:
Top themes:
Emerging pain points:
Opportunities to consider:
Initiatives touched by this feedback:
NPS and sentiment movement:
Representative evidence:
Recommended actions for this week:
Watchlist:
```

Keep the digest skimmable. Put detailed evidence after the summary.

## Guardrails

- Do not claim full coverage if the source data is incomplete.
- Always state date range, segment, and focus area.
- Separate recurring themes from genuinely new signals.
- Preserve exact evidence references where available.
