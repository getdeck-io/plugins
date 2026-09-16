---
name: competitive-analyst
description: Use when the user asks about competitors, competitive landscape, rival products, win/loss vs another vendor, competitor reviews or quotes, competitor insights, competitor subthemes, opportunity teasers, promoting a competitor finding to the backlog, assigning competitor insights, competitor check-ins, or whether to research a competing product.
---

# Competitive Analyst

## Goal

Turn public competitor-customer signal into a ranked next action — what to steal, what to defend, and what to promote onto the backlog. Ground every claim in `explore_competitors` results. Never speculate when the graph is available.

## Intake

Ask at most 2-3 questions if needed. If the user named a competitor or teaser, start.

- Which rivals to inspect, or the full tracked landscape
- Landscape vs one competitor vs insights vs teasers vs promote vs research vs check-ins
- Whether to also check first-party feedback ("do our customers also say this?")

Good first questions when context is missing:

- "Which competitors should I focus on, or do you want the full landscape?"
- "Are you after strengths/weaknesses, specific insights, teasers to ship, research status, or a promote/assign?"
- "Should I also check whether our own customers say the same thing?"

## Deck MCP Tools

Competitors is a separate graph from first-party Insights. Use the actual Deck MCP server tools:

- `select_organization` when organization context is ambiguous or an `org_id` must be validated
- `get_overview` once if this session has no org context
- `explore_competitors` for every competitor read. First matching mode wins:
  1. `insight_id` — one competitor synthesis insight (name, quote, sentiment). These UUIDs are **not** first-party Insights.
  2. `view: "insights"` — cursor pages, default 50, max 100. Optional filters: `competitor_id`, `subtheme_id`, `opportunity_id` (teaser id). When `view` is `"insights"`, those ids are **list filters**, not competitor, teaser, or subtheme detail.
  3. `subtheme_id` — subtheme rail (quotes, insights, competitor mix)
  4. `opportunity_id` — opportunity teaser with paginated insights (cursor)
  5. `competitor_id` — one competitor (sources, sentiment split, top +/- patterns)
  6. `job_id` — poll a research job
  7. `checkin_run_id` — one check-in run
  8. `view`: `"overview"` | `"teasers"` | `"checkins"` | `"latest_checkin"`
  9. no params — competitor collection
- `explore_insights` / `explore_themes` only as a **separate** first-party graph, and only when the user asks whether our customers also say this. Never pass competitor insight ids to `explore_insights`.
- `mutate_competitors` only when the user explicitly asks to write
- `explore_opportunity_backlog` after a successful promote, on the returned opportunity id

Quotes on competitor or subtheme detail may be Reddit or LinkedIn threads. Each quote can include `source`, `source_type`, `source_url`, `parent_text`, `thread_role`. There is no `source_type` query param — filter those fields on the payload.

`deck_url` values from MCP include `/{orgSlug}/`. If the slug is missing the URL may be omitted — do not invent `https://app.getdeck.io/...` without a slug.

If the tool returns `feature_unavailable`, stop. Tell the user Competitors is off for the org (Settings). The flag is org-sticky, not plan-gated. Do not fall back to first-party insights as if they were competitor insights.

### Writes (`mutate_competitors`)

Call only with explicit user intent. Actions:

- `start_research`: merge `{ name, website }[]` (1-25) and rerun. Optional `reviews_per_source` 10-100 (in-app default 30). Spends credits. Fail-closed if a job is already running. After enqueue, poll with `explore_competitors` `job_id` sparingly — do not busy-loop.
- `add_competitor`: same merge and rerun for one `{ name, website }` pair. Spends credits.
- `promote_to_opportunity`: one write, two shapes:
  - rail: `source_type` `"subtheme"` | `"opportunity_teaser"` + `source_id` + `title` + required boolean `include_first_party_feedback`
  - cherry-pick: `source_type: "insights"` + `insight_ids` (1-100 competitor synthesis insight UUIDs) + `title` + `include_first_party_feedback`
  - Same rail or same sorted insight set is idempotent. Growing a set is `assign_competitor_insights`, not a second promote. Success `deck_url` is `/{orgSlug}/build/opportunity-backlog/{opportunity_id}`.
  - `include_first_party_feedback: true` matching is create-only. Assign does not rematch.
- `assign_competitor_insights`: `opportunity_id` + `insight_ids[]` (1-100). Append-only onto any backlog opportunity. Duplicates no-op. Does not re-run first-party matching. Unknown, other-org, or first-party insight ids fail the whole request.
- `set_checkins`: admin only. `{ enabled, cadence }` with cadence `"weekly"` | `"monthly"` | `"quarterly"` (monthly default when enabling). Members get `ROLE_NOT_ALLOWED`. Check-ins spend credits on a schedule.

This tool cannot enable or disable `competitors_enabled`, delete competitors, edit teasers, unassign competitor-insight evidence, or mix competitor insight ids into `explore_insights`.

If `add_competitor` or `start_research` is refused, mention the tracked-competitor cap: Free/Dip 3, Starter 5, Business/Enterprise unlimited.

## Workflow

1. `select_organization` if org is ambiguous. `get_overview` once if this session has no org context.
2. `explore_competitors` with no params. If `feature_unavailable`, stop. If the collection is empty, say so and suggest `start_research` only with the credit warning — do not scrape the public web as a substitute. If the graph is thin, say so.
3. Branch on the user's question:
   - Landscape / "how do we compare": `view: "overview"`, then 1-2 `competitor_id` details.
   - Weakness/strength / "what are they bad at": `subtheme_id` after overview or collection.
   - Insights: `view: "insights"` (page with cursor; filters if they named a competitor, rail, or teaser). `insight_id` for one row. Never `explore_insights` with these ids.
   - Teasers / "what should we ship from this": `view: "teasers"`, then `opportunity_id`.
   - Research status: `job_id`.
   - What's new since last scrape: `view: "latest_checkin"` or `view: "checkins"`.
4. Optional first-party cross-check **only** when the user asks "do our customers also say this?" — `explore_insights` / `explore_themes` as a separate graph. Label the two graphs clearly.
5. Recommend one next action. If they explicitly want a write: `mutate_competitors` (promote a rail or insight ids; assign onto an existing opportunity; `start_research` / `add_competitor` with a credit warning; `set_checkins` only if they are an admin and asked). After promote, offer `explore_opportunity_backlog` on the returned id.
6. Include `deck_url` values from tool results. Do not fabricate URLs.

## Output

Use this structure:

```text
Competitors status:
Tracked competitors:
Landscape / sentiment:
Strengths (their customers love):
Weaknesses (their customers hate — our openings):
Top teasers:
Competitor insights (if requested):
First-party overlap (only if queried):
Caveats:
Recommended next step:
Deck links:
```

`Recommended next step` should name a concrete Deck action: inspect a rail, promote a teaser/subtheme/insight set, assign insights onto an existing opportunity, start or add research (credits), or enable check-ins (admin).

## Guardrails

- Never invent quotes; only quote tool payloads.
- Never treat competitor synthesis insights as first-party Insights.
- Never pass competitor insight ids to `explore_insights`.
- `view: "insights"` + `competitor_id` is a filtered list, not competitor detail.
- Writes need explicit user intent. Research spends credits. Check-ins are admin-only and spend credits on a schedule.
- If research is already running, do not start another job.
- Thin graph: say so. Empty collection → suggest `start_research` only with the credit warning; do not scrape the public web as a substitute.
- Frame as competitor **customers'** feedback, not a private dossier on the other company.

## Example

**User:** "What should we steal from Rival's onboarding, and should we put it on the backlog?"

**You should:** `select_organization` if needed → `explore_competitors` (collection) → `view: "overview"` → find the onboarding subtheme → `view: "insights"` filtered to that rail → `view: "teasers"` → recommend promote, asking explicitly about `include_first_party_feedback` → only then `mutate_competitors`.
