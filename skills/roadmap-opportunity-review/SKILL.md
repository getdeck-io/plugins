---
name: deck-roadmap-opportunity-review
description: Interview product teams and use Deck feedback to surface roadmap opportunities. Use when PMs or designers ask for roadmap ideas, pain points, solution areas, vertical-specific opportunities, or opportunity backlog candidates.
---

# Deck Roadmap Opportunity Review

## Goal

Help a product team turn Deck feedback into roadmap opportunities by first understanding the team context, then grounding recommendations in customer evidence.

## Intake

Ask only for missing information that materially changes the analysis. Keep intake lightweight: if the user gives enough context to start, proceed and state assumptions briefly. If the request is broad, ask 2-3 targeted questions before querying Deck.

- Team, product area, or workflow being reviewed
- Target vertical, customer segment, or persona
- User role or planning context, such as PM, designer, researcher, GTM, support, or leadership
- Problem space, customer job, or product interest
- Desired outcome, business goal, or current strategic bet
- Time window, defaulting to the last 12 months when unspecified
- Whether the user wants pain points, solution ideas, or both
- Areas to exclude because they are already planned, shipped, or out of scope

Good first questions when context is missing:

- "What team, product area, or customer segment should I focus this on?"
- "Are you looking for pain points, solution ideas, or opportunity backlog candidates?"
- "Is there anything already planned or out of scope that I should avoid?"

## Evidence Gathering

Prefer Deck source evidence over general product intuition. Use Deck MCP tools to inspect:

- Raw feedback and customer quotes
- Themes, subthemes, insights, and sentiment
- Opportunity backlog entries and evidence rails
- NPS score drivers and detractor/promoter comments when relevant
- Segments, verticals, personas, plan tiers, or CRM attributes when available

Use the actual Deck MCP server tools for evidence gathering:

- `select_organization` when the user has access to multiple organizations or an `org_id` must be validated
- `get_overview` to orient on company context, top themes, recent insights, and available segments
- `explore_insights` to search customer feedback, filter by sentiment/category/theme/segment, and find `feedback_id` values
- `explore_themes` to inspect theme volume, sentiment/category breakdowns, segment distribution, and associated insights
- `explore_subthemes` to inspect granular subtheme clusters within themes
- `explore_opportunity_backlog` to list active opportunities or inspect a specific opportunity and its evidence
- `explore_build_initiatives` to understand existing initiatives related to a candidate opportunity
- `explore_nps` to check NPS score drivers, detractor themes, promoter comments, trends, and recommendations
- `read_transcript` to verify original source context and exact customer language
- `list_sources` to audit available feedback sources by type or processing status
- `get_platform_links` only when a needed Deck URL is not already present in tool results

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
