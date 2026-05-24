---
name: nps-breakdown
description: Analyze Deck NPS results. Use when users ask for NPS score, promoter/passive/detractor breakdowns, segment-specific NPS, score drivers, linked opportunities, feedback evidence, or NPS changes over time.
---

# NPS Breakdown

## Goal

Explain what is driving NPS, not just what the score is.

## Intake

Ask only for missing NPS scope that materially changes the analysis. Keep intake lightweight: if the user gives enough context to start, proceed and state assumptions briefly. If the request is broad, ask 2-3 targeted questions before querying Deck.

- Team, audience, or decision the NPS breakdown should support
- Time period or comparison window
- Segment, vertical, persona, plan, region, or account cohort
- Product area, journey stage, or customer topic to investigate in the NPS drivers
- Whether to include raw responses, score drivers, opportunities, or all of them
- Whether the user wants an exec summary, product investigation, or detailed evidence table

If no time window is provided, default to the latest available NPS period and state that assumption.

Good first questions when context is missing:

- "What segment, cohort, or product area should I focus the NPS breakdown on?"
- "Are you trying to understand detractors, promoters, movement over time, or recommendations?"
- "Who is the audience: exec review, product planning, design research, or customer follow-up?"

## Deck MCP Tools

Use the actual Deck MCP server tools for NPS analysis:

- `select_organization` when organization context is ambiguous or an `org_id` must be validated
- `get_overview` to understand organization context, recent activity, and available segments
- `explore_nps` with no filters for the current score, respondent breakdown, top themes, narrative, and Deck links
- `explore_nps` with `respondent_type: "PROMOTER"`, `"PASSIVE"`, or `"DETRACTOR"` to inspect group-specific drivers and quotes
- `explore_nps` with `focus: "trends"` for score movement over time
- `explore_nps` with `focus: "recommendations"` for prioritized improvement guidance
- `explore_nps` with `response_id` to inspect a single NPS response
- `explore_themes` and `explore_subthemes` to drill into linked themes and subthemes
- `explore_insights` to inspect feedback linked to NPS themes or responses
- `read_transcript` to verify original source context when a response links to source feedback
- `get_platform_links` only when a needed Deck URL is not already present in tool results

## Analysis

Calculate and explain:

- NPS score, using promoters minus detractors
- Promoter, passive, and detractor counts and percentages
- Sample size and date range
- Segment-specific NPS where segment data exists
- Top positive drivers from promoters
- Top negative drivers from detractors
- Relevant themes, subthemes, opportunities, and evidence
- Changes over time when a comparison window is available

Use standard NPS buckets:

- Promoters: 9 to 10
- Passives: 7 to 8
- Detractors: 0 to 6

## Output

Use this structure:

```text
NPS summary:
Date range:
Sample size:
Promoter/passive/detractor breakdown:
Segment breakdown:
Top promoter drivers:
Top detractor drivers:
Related opportunities:
Representative feedback:
Caveats:
Recommended next step:
```

For segment tables, include score, response count, and the strongest driver for each segment.

## Guardrails

- Do not compare segment NPS when sample sizes are too small without a caveat.
- Do not infer causality from NPS movement alone.
- Include the denominator for every percentage or score.
- Quote or cite feedback evidence when available.
