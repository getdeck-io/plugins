---
name: project-brief-generator
description: Use when users want a Deck Project brief from a Project page, link, prompt, external Jira or Linear reference, or evidence set, including Project outline, customer problem, evidence summary, execution scope, success metrics, risks, handoff note, or launch narrative for Build Projects.
---

# Deck Project Brief Generator

## Goal

Create a concise Project brief that connects execution scope to the customer evidence behind it.

## Intake

Collect only the fields needed to generate a useful brief. Keep intake lightweight: if the user gives enough context to start, proceed and state assumptions briefly. If the request is broad, ask 2-3 targeted questions before querying Deck.

- Project name, link, ID, external Jira/Linear reference, or draft text
- Parent initiative, linked opportunity, team, product area, or owner
- Target segment, persona, vertical, plan, or account cohort
- Customer problem or product job the Project should address
- Current status, target date, start date, or delivery constraint
- Evidence sources to include or exclude
- Intended brief shape, such as PRD, execution one-pager, engineering handoff, roadmap update, or launch brief

If the user is already on or referencing a Project page, infer the Project context from that link or ID before asking for more.

Good first questions when context is missing:

- "What Project, external issue, product area, or customer segment should this brief focus on?"
- "What decision should the brief support: shaping scope, aligning delivery, justifying priority, or preparing handoff?"
- "Should I include all relevant evidence, or focus on a specific customer group, initiative, or linked opportunity?"

## Deck MCP Tools

Use the actual Deck MCP server tools to resolve the Project, related Build context, and supporting evidence:

- `select_organization` when organization context is ambiguous or an `org_id` must be validated
- `list_projects` to list or search Build Projects by title, status, owner, initiative, segment, or Jira/Linear metadata
- `explore_build_projects` to fetch full Project detail by `project_id`
- `list_initiatives` to find parent or related initiatives by title, status, owner, segment, or associated Project
- `explore_build_initiatives` to fetch full parent initiative detail by `initiative_id`
- `explore_opportunity_backlog` to inspect related opportunities, linked Projects, and their evidence
- `get_overview` to understand company context, top themes, recent insights, and available segments
- `explore_insights` to find supporting and opposing customer evidence
- `explore_themes` to understand parent themes, sentiment/category breakdowns, and segment distribution
- `explore_subthemes` to add granular customer problem clusters
- `explore_nps` to include NPS drivers, detractor/promoter context, and recommendations when relevant
- `read_transcript` to verify original customer language and context behind key insights
- `list_sources` to cite source mix and identify source material
- `get_platform_links` only when a needed Deck URL is not already present in tool results
- `mutate_project_build` only when the user explicitly asks to create, update, archive, move, link external artifacts, assign evidence, or generate an evidence story for a Build Project

Use Deck feedback, themes, insights, subthemes, opportunities, NPS, Project sections, external artifacts, and parent initiative context when available. Do not rely only on the Project title.

## Workflow

1. Resolve the Project, parent initiative, and linked opportunity context.
2. Gather supporting evidence and opposing evidence.
3. Identify the customer problem, target segment, and execution constraint.
4. Draft the Project outline and handoff-ready scope.
5. Attach evidence as an appendix or evidence section.
6. Call out open questions, dependency risks, and evidence gaps instead of hiding uncertainty.

## Output

Use this structure unless the user requests a specific format:

```text
Project:
Summary:
Customer problem:
Target segment:
Parent initiative or opportunity:
Evidence:
Proposed scope:
Non-goals:
Execution notes:
Success metrics:
Risks and open questions:
Recommended next step:
Evidence appendix:
```

For evidence, include source names, links, IDs, or quote snippets when available. Keep the main brief readable and put detailed evidence in the appendix.

## Guardrails

- Do not fabricate evidence, customer language, dates, owners, Jira/Linear state, or delivery commitments.
- Keep the brief tied to Deck data and the actual Project record, not generic project-management advice.
- Preserve uncertainty when evidence is thin, external artifact metadata is incomplete, or segment fit is unclear.
- Keep generated content ready to paste into a Project editor, PRD, engineering handoff, or stakeholder update.
