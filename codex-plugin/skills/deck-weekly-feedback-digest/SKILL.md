---
name: deck-weekly-feedback-digest
description: Create Deck weekly feedback digests from feedback, themes, insights, opportunities, initiatives, and NPS. Use when PMs or designers want a recurring or ad hoc summary scoped by segment, vertical, product area, theme, pain point, or time window.
---

# Deck Weekly Feedback Digest

## Goal

Create a useful PM/design digest that summarizes what customers are saying, what changed, and what the team should look at next.

## Intake

Ask the user for:

- Segment, vertical, persona, or product area to focus on
- Specific theme, pain point, opportunity, or initiative to include
- Digest period, defaulting to the last 7 days for new activity
- Historical comparison window, defaulting to the last 12 months
- Whether the digest should optimize for exec summary, product planning, design discovery, or support follow-up

If the user says "everything," still ask whether they want a segment or focus area. Deck feedback is more useful when scoped.

## Evidence Gathering

Pull together the main Deck evidence surfaces:

- Raw feedback and quotes
- Themes and subthemes
- Insights and sentiment
- Opportunity backlog entries
- Initiatives and their evidence
- NPS score, drivers, and segment movement
- Newly created or changed records in the digest period

When operating inside the Deck app repo, useful source anchors include:

- `packages/agent-chat/src/tools/search-feedback-tool.ts`
- `packages/agent-chat/src/tools/query-themes-tool.ts`
- `packages/agent-chat/src/tools/query-subthemes-tool.ts`
- `packages/agent-chat/src/tools/query-insights-tool.ts`
- `packages/agent-chat/src/tools/query-segments-tool.ts`
- `packages/agent-chat/src/tools/query-nps-tool.ts`
- `apps/web/app/(app)/[slug]/(app)/visualize/themes/page.tsx`
- `apps/web/app/(app)/[slug]/(app)/build/opportunity-backlog/page.tsx`
- `apps/web/app/(app)/[slug]/(app)/build/initiatives/page.tsx`

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
