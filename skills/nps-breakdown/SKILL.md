---
name: nps-breakdown
description: Analyze Deck NPS results. Use when users ask for NPS score, promoter/passive/detractor breakdowns, segment-specific NPS, score drivers, linked opportunities, feedback evidence, or NPS changes over time.
---

# NPS Breakdown

## Goal

Explain what is driving NPS, not just what the score is.

## Intake

Ask for missing analysis scope:

- Time period or comparison window
- Segment, vertical, persona, plan, region, or account cohort
- Whether to include raw responses, score drivers, opportunities, or all of them
- Whether the user wants an exec summary, product investigation, or detailed evidence table

If no time window is provided, default to the latest available NPS period and state that assumption.

## Deck Source Anchors

When operating inside the Deck app repo, useful source areas include:

- `apps/web/app/(app)/[slug]/(app)/visualize/nps-score/page.tsx`
- `apps/web/app/(app)/[slug]/(app)/visualize/nps-score/_components/NPSSummaryContent/NPSScoreDisplay.tsx`
- `apps/web/app/(app)/[slug]/(app)/visualize/nps-score/_components/NPSSegmentBreakdown.tsx`
- `apps/web/lib/actions/nps/actions.ts`
- `apps/web/lib/actions/nps/synthesis-actions.ts`
- `packages/agent-chat/src/tools/query-nps-tool.ts`
- `packages/agent-chat/src/tools/query-nps-responses-tool.ts`
- `apps/deck-worker/workflows/nps-synthesis/`

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
