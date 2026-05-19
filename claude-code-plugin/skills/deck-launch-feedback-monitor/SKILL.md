---
name: deck-launch-feedback-monitor
description: Monitor Deck feedback after an initiative ships. Use when PMs or designers provide an initiative name, link, or ship date and want to know whether customer feedback changed, new pain appeared, or the launch created follow-up opportunities.
---

# Deck Launch Feedback Monitor

## Goal

Help PMs and designers understand what changed in customer feedback after an initiative shipped.

## Intake

Ask for missing launch context:

- Initiative name, link, or ID
- Ship date, using an exact calendar date whenever possible
- Product area, feature keywords, and common customer phrasing
- Target segment, vertical, persona, or customer cohort
- Comparison window, defaulting to 30 days before and 30 days after the ship date
- Whether the user wants qualitative feedback, metrics, follow-up opportunities, or all of them

If the user gives a fuzzy ship date, clarify the exact date before comparing feedback windows.

## Evidence Gathering

Search for post-launch evidence using both explicit initiative terms and customer-language synonyms. Compare against the pre-launch baseline.

Use available Deck sources for:

- Raw feedback and quotes
- Themes, subthemes, insights, and sentiment
- Opportunity backlog entries and generated stories
- NPS responses and score drivers
- Initiative records and related evidence
- Segment-specific feedback when provided

When operating inside the Deck app repo, useful source anchors include:

- `apps/web/app/(app)/[slug]/(app)/build/initiatives/[id]/page.tsx`
- `apps/web/app/(app)/[slug]/(app)/build/opportunity-backlog/[id]/page.tsx`
- `packages/agent-chat/src/tools/search-feedback-tool.ts`
- `packages/agent-chat/src/tools/query-themes-tool.ts`
- `packages/agent-chat/src/tools/query-nps-responses-tool.ts`
- `packages/agent-chat/src/tools/query-nps-tool.ts`

## Analysis

Separate signal from noise:

- New positive feedback after launch
- New or continuing negative feedback after launch
- Pain points that disappeared, reduced, or shifted wording
- Segment-specific reactions
- Follow-up opportunities created by the launch
- Unrelated feedback that should not be attributed to the launch

Treat correlation as correlation. Do not claim the launch caused a feedback change unless the evidence explicitly supports it.

## Output

Use this structure:

```text
Launch:
Ship date:
Window analyzed:
Bottom line:
What improved:
What got worse or stayed painful:
New follow-up opportunities:
Segment notes:
Evidence:
Confidence:
Recommended next step:
```

Include counts, date ranges, and representative quotes when available.

## Guardrails

- Do not over-attribute feedback changes to the launch.
- Always include the comparison window.
- Label weak signals and missing data.
- Prefer customer wording over internal feature labels.
