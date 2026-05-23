---
name: deck-roadmap-opportunity-review
description: Interview product teams and use Deck feedback to surface roadmap opportunities. Use when PMs or designers ask for roadmap ideas, pain points, solution areas, vertical-specific opportunities, or opportunity backlog candidates.
---

# Deck Roadmap Opportunity Review

## Goal

Help a product team turn Deck feedback into roadmap opportunities by first understanding the team context, then grounding recommendations in customer evidence.

## Intake

Ask only for missing information that changes the analysis:

- Team, product area, or workflow being reviewed
- Target vertical, customer segment, or persona
- Desired outcome, business goal, or current strategic bet
- Time window, defaulting to the last 12 months when unspecified
- Whether the user wants pain points, solution ideas, or both
- Areas to exclude because they are already planned, shipped, or out of scope

If the user gives enough context to start, proceed and state any assumptions briefly.

## Evidence Gathering

Prefer Deck source evidence over general product intuition. Use available Deck tools, exports, or repo-integrated query surfaces to inspect:

- Raw feedback and customer quotes
- Themes, subthemes, insights, and sentiment
- Opportunity backlog entries and evidence rails
- NPS score drivers and detractor/promoter comments when relevant
- Segments, verticals, personas, plan tiers, or CRM attributes when available

When operating inside the Deck app repo, useful source anchors include:

- `packages/agent-chat/src/tools/search-feedback-tool.ts`
- `packages/agent-chat/src/tools/query-themes-tool.ts`
- `packages/agent-chat/src/tools/query-subthemes-tool.ts`
- `packages/agent-chat/src/tools/query-insights-tool.ts`
- `packages/agent-chat/src/tools/query-segments-tool.ts`
- `packages/agent-chat/src/tools/query-nps-tool.ts`
- `apps/web/app/(app)/[slug]/(app)/build/opportunity-backlog/page.tsx`
- `apps/web/lib/actions/opportunity-backlog/actions.ts`

If no Deck data access is available, ask the user for an export, screenshots, or pasted evidence before making ranked recommendations.

## Analysis

Cluster evidence into candidate opportunities. For each cluster, identify:

- The customer job, pain, or desired outcome
- The affected segment and whether the pain is broad or concentrated
- Evidence strength, including count, recency, severity, and source diversity
- Whether the opportunity is a problem discovery item or a solution bet
- Known related opportunities or initiatives
- Important counterevidence, ambiguity, or missing data

Do not treat one vivid quote as a roadmap priority unless it is clearly high-severity or backed by additional evidence.

## Output

Return 3 to 7 roadmap opportunities. Use this structure:

```text
1. Opportunity title
   Customer/problem:
   Segment:
   Evidence:
   Why now:
   Confidence:
   Suggested next step:
```

Finish with a short section for "Not enough evidence yet" when promising ideas need more discovery.

## Guardrails

- Do not invent customer quotes, counts, segments, or impact.
- Separate pain points from proposed solutions.
- Label assumptions and confidence clearly.
- Keep recommendations tied to what a PM or designer can actually do next.
