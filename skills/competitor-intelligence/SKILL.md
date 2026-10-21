---
name: competitor-intelligence
description: Analyze competitors with Deck Competitors. Use when users ask what competitors do well or badly, how customers talk about rival products, which competitor weaknesses are opportunities, what changed in the latest competitor check-in, or when they want to start competitor research, add a competitor, promote a competitor finding to the Opportunity Backlog, or schedule check-ins.
---

# Competitor Intelligence

## Goal

Turn Deck's competitor research into product decisions: where rivals win, where they fail, and which gaps are worth building for. Every number and quote comes from Deck. Summarize Deck's facts instead of computing your own.

## Intake

Keep intake lightweight. If the user gives enough context to start, proceed and state assumptions briefly. Ask only for missing scope that changes the answer:

- Which competitors matter, or the whole landscape
- Product area, journey stage, or customer topic to focus on
- The decision this supports: roadmap bet, positioning, sales battlecard, or periodic monitoring
- Whether the user wants a landscape summary, a single-competitor profile, opportunities, or check-in changes

Good first questions when context is missing:

- "Do you want the full competitor landscape, or a deep dive on one competitor?"
- "Is this for roadmap planning, positioning, or a sales battlecard?"

## Deck MCP Tools

Read tools (safe to call anytime):

- `select_organization` when organization context is ambiguous or `explore_competitors` returns `ORG_SELECTION_REQUIRED`
- `explore_competitors` with no params for the competitor collection and research status. Call it first: it tells you whether research exists, is running, or has never run
- `explore_competitors` with `view: "overview"` for landscape tiles, sentiment, and ranked strengths (+) and weaknesses (−)
- `explore_competitors` with `competitor_id` for one competitor: sources, sentiment split, top positive and negative patterns
- `explore_competitors` with `view: "teasers"` for competitor opportunity teasers, then `opportunity_id` for one teaser with its insights (10 per page, use `cursor`)
- `explore_competitors` with `subtheme_id` for one competitor subtheme rail: quotes, insights, and competitor mix
- `explore_competitors` with `view: "insights"` to list competitor synthesis insights; combine with `competitor_id` or `subtheme_id` as filters, page with `cursor` and `limit`
- `explore_competitors` with `insight_id` for one competitor insight. These ids are not first-party Insights; do not pass them to `explore_insights`
- `explore_competitors` with `view: "latest_checkin"` for the newest periodic check-in, `view: "checkins"` to list runs, and `checkin_run_id` for one run's snapshot diffs
- `explore_competitors` with `job_id` to poll a research job
- `explore_opportunity_backlog`, `explore_themes`, and `explore_insights` to compare competitor findings with the org's own customer feedback
- `get_platform_links` only when a needed Deck URL is not already present (each competitor payload includes a `deck_url`)

Write tool (only on explicit user request):

- `mutate_competitors` with `action: "start_research"` to research a set of `competitors` (`{ name, website }`) and rerun the report
- `mutate_competitors` with `action: "add_competitor"` with `name` and `website` to add one competitor and rerun the report
- `mutate_competitors` with `action: "promote_to_opportunity"` to put a finding on the Opportunity Backlog. Pass `source_type` (`subtheme`, `opportunity_teaser`, or `insights`), `title`, and `include_first_party_feedback`; use `source_id` for rails or `insight_ids` (1–100) for insights
- `mutate_competitors` with `action: "assign_competitor_insights"` with `opportunity_id` and `insight_ids` to attach competitor evidence to an existing backlog opportunity
- `mutate_competitors` with `action: "set_checkins"` with `enabled` and `cadence` (`weekly`, `monthly`, `quarterly`) to schedule periodic check-ins. Admins only

## Workflow

1. Call `explore_competitors` with no params to learn the state.
   - Feature not enabled (`feature_unavailable`): relay Deck's guidance and stop.
   - No research yet: offer to start research (see Write Rules).
   - Research running: say so, and poll with `job_id` only if the user wants to wait.
2. For landscape questions, use `view: "overview"`, then drill into the competitors or subthemes that matter.
3. For "what can we win on?", use `view: "teasers"`, open the strongest teasers with `opportunity_id`, and cross-check `explore_opportunity_backlog` so you do not suggest work that already exists.
4. For "what changed?", use `view: "latest_checkin"`. If `snapshot.changed` is false, say nothing changed since the last run.
5. Read quotes before you cite them. Quotes can come from Reddit or LinkedIn threads: check `source_type`, `thread_role`, and `parent_text` so you do not present a reply out of context.

## Write Rules

Writes cost credits, scrape public sources, or change the backlog. Before any `mutate_competitors` call:

- Confirm the exact action, competitors (names and websites), and opportunity title with the user.
- For `start_research` and `add_competitor`: say that research uses the org's credits, scrapes public web sources (Reddit, LinkedIn, review sites, app stores), reruns the full report, and that Deck emails the user when it finishes. On the first run, ask for the user's own company website and pass it as `company_domain` (always when they signed up with a personal email), with `company_name` when known.
- For `set_checkins`: confirm the cadence. Disabling cancels scheduled check-ins.
- For `promote_to_opportunity`: ask whether to include first-party feedback matching.

Handle errors plainly:

- `CONFLICT`: research is already running. Offer to poll the job.
- `PLAN_UPGRADE_REQUIRED`: relay Deck's message and say they can upgrade their plan in Deck. The Free plan includes one competitor report covering the first 2 competitors at reduced depth (`depth_reduced: true`), and no check-ins.
- `ROLE_NOT_ALLOWED`: check-ins need an org admin.

## Output

For a landscape or competitor question, use this structure:

```text
Competitive summary:
Competitors covered:
Where competitors win:
Where competitors fall short:
Opportunities for us:
Overlap with our customer feedback:
Representative quotes (with source):
Caveats:
Recommended next step:
Deck link:
```

For a single competitor, lead with sentiment split, top strengths, top weaknesses, and sources. For a check-in, lead with what changed since the previous run.

## Guardrails

- Do not invent competitor facts, pricing, or features that Deck did not return.
- Cite the source and source type for every quote, and say when evidence comes from few sources.
- Keep competitor evidence separate from first-party customer feedback; label which is which.
- Never call `mutate_competitors` without an explicit user request and confirmation.
- Include the `deck_url` so the user can open the finding in Deck.
