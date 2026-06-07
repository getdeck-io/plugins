---
name: initiative-brief-generator
description: Generate Deck initiative briefs from an initiative page, link, prompt, or evidence set. Use when users want an initiative outline, evidence summary, customer problem, scope, success metrics, or launch narrative for initiatives.
---

# Deck Initiative Brief Generator

## Goal

Create a concise initiative brief that combines an actionable outline with the customer evidence behind it.

## Intake

Collect only the fields needed to generate a useful brief. Keep intake lightweight: if the user gives enough context to start, proceed and state assumptions briefly. If the request is broad, ask 2-3 targeted questions before querying Deck.

- Initiative name, link, ID, or draft text
- Team, product area, or owner the brief is for
- Product area, segment, persona, or vertical
- Problem space, customer job, or product interest behind the initiative
- Desired business or product outcome
- Evidence sources to include or exclude
- Intended brief shape, such as PRD, roadmap one-pager, exec summary, or launch brief

If the user is already on or referencing an initiative page, infer the initiative context from that link or ID before asking for more.

Good first questions when context is missing:

- "What initiative, product area, or customer segment should this brief focus on?"
- "What decision should the brief support: shaping scope, justifying priority, aligning stakeholders, or preparing launch?"
- "Should I include all relevant evidence, or focus on a specific customer group or pain point?"

## Deck MCP Tools

Use the actual Deck MCP server tools to resolve the initiative, related Projects, and supporting evidence:

- `select_organization` when organization context is ambiguous or an `org_id` must be validated
- `list_initiatives` to list or search initiatives by title, status, owner, segment, or associated Project
- `explore_build_initiatives` to fetch full initiative detail by `initiative_id`
- `list_projects` to list or search Build Projects by title, status, owner, initiative, segment, or Jira/Linear metadata
- `explore_build_projects` to fetch full Project detail by `project_id`
- `explore_opportunity_backlog` to inspect related opportunities, linked Projects, and their evidence
- `get_overview` to understand company context, top themes, recent insights, and available segments
- `explore_insights` to find supporting and opposing customer evidence
- `explore_themes` to understand parent themes, sentiment/category breakdowns, and segment distribution
- `explore_subthemes` to add granular customer problem clusters
- `explore_nps` to include NPS drivers, detractor/promoter context, and recommendations when relevant
- `read_transcript` to verify original customer language and context behind key insights
- `list_sources` to cite source mix and identify source material
- `get_platform_links` only when a needed Deck URL is not already present in tool results
- `mutate_initiative_build` only when the user explicitly asks to create or update the initiative in Build
- `mutate_opportunity_build` only when the user explicitly asks to mutate an opportunity or create an initiative from one
- `mutate_project_build` only when the user explicitly asks to create, update, archive, move, link external artifacts, assign evidence, or generate an evidence story for a Build Project

Use Deck feedback, themes, insights, subthemes, opportunities, and NPS evidence when available. Do not rely only on the initiative title.

## Workflow

1. Resolve the initiative and related Project context.
2. Gather supporting evidence and opposing evidence.
3. Identify the user problem and the customer segment affected.
4. Draft the initiative outline.
5. Attach evidence as an appendix or evidence section.
6. Call out open questions instead of hiding uncertainty.

## Output

Use this structure unless the user requests a specific format:

```text
Initiative:
Summary:
Customer problem:
Target segment:
Evidence:
Proposed scope:
Non-goals:
Success metrics:
Risks and open questions:
Recommended next step:
Evidence appendix:
```

For evidence, include source names, links, IDs, or quote snippets when available. Keep the main brief readable and put detailed evidence in the appendix.

## Guardrails

- Do not fabricate evidence or customer language.
- Keep the brief tied to Deck data, not generic PM best practices.
- Preserve uncertainty when evidence is thin or segment fit is unclear.
- Keep generated content ready to paste into an initiative editor.
