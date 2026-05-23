---
name: deck-initiative-brief-generator
description: Generate Deck initiative briefs from an initiative page, link, prompt, or evidence set. Use when users want an initiative outline, evidence summary, customer problem, scope, success metrics, or launch narrative for initiatives.
---

# Deck Initiative Brief Generator

## Goal

Create a concise initiative brief that combines an actionable outline with the customer evidence behind it.

## Intake

Collect only the fields needed to generate a useful brief:

- Initiative name, link, ID, or draft text
- Product area, segment, persona, or vertical
- Desired business or product outcome
- Evidence sources to include or exclude
- Intended brief shape, such as PRD, roadmap one-pager, exec summary, or launch brief

If the user is already on or referencing an initiative page, infer the initiative context from that link or ID before asking for more.

## Deck Source Anchors

When operating inside the Deck app repo, prefer these source areas:

- `apps/web/app/(app)/[slug]/(app)/build/initiatives/[id]/page.tsx`
- `apps/web/app/(app)/[slug]/(app)/build/initiatives/[id]/_components/GenerateInitiativeModal.tsx`
- `apps/deck-agents/src/lib/initiatives/generate-initiative.ts`
- `apps/deck-agents/src/lib/initiatives/dossier-discovery.ts`
- `apps/deck-agents/src/lib/initiatives/prompts.ts`
- `apps/deck-agents/src/lib/initiatives/schema.ts`
- `packages/agent-chat/src/tools/mutate-initiative-build-tool.ts`
- `packages/agent-chat/src/tools/mutate-opportunity-build-tool.ts`

Use Deck feedback, themes, insights, subthemes, opportunities, and NPS evidence when available. Do not rely only on the initiative title.

## Workflow

1. Resolve the initiative context.
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
