# Codex Agents Guide for Cumulus

## Purpose
- Give Codex a clear contract for planning and modernization work in this repo.
- Keep a UX-first frontend focus; backend power comes from configuring external AI agents/APIs and tools, not heavy bespoke code.

## Planning Contract
- Use an ExecPlan (see `.agent/PLANS.md`) when work is multi-step (>30–60 minutes), cross-cutting (routes, shared components, AI integrations), or uncertain.
- Skip an ExecPlan for quick, contained changes (e.g., copy tweak, single-component style fix) but still note impacts in PRs.
- Store plans at the repo root or nearest feature folder (e.g., `pilot_execplan.md` for a pilot), and link them from relevant PRs and docs.

## Repo Context Anchors
- Next.js/React marketing and product experience: prioritize clarity of user journey and narrative.
- AI agent backend: primarily orchestrated via external APIs/tools; prefer configuration, contracts, and docs over complex server code.
- Cumulus thesis: a niche-focused automation studio. Always answer who/why/how/what/cost for the target niche in copy, flows, and automation choices.

## Modernization Track (Codex Cookbook Adapted)
- Guardrails: keep `.agent/AGENTS.md` and `.agent/PLANS.md` current; align with engineering norms in `/AGENTS.md` and sprint notes in `/PLAN.md`.
- Pilot: pick one UX flow (page or journey) as a pilot; create `pilot_execplan.md` with scope, outcomes, acceptance.
- Inventory: draft `pilot_overview.md` (current routes/components/data flows, business story, simple text diagram).
- Design: draft `pilot_design.md` plus `modern/openapi/pilot.yaml` (contracts) tuned to API-facing pieces; keep frontend contracts tight when backend relies on external agents.
- Validation: draft `pilot_validation.md` and scaffold `modern/tests/pilot_parity_test.py`; define how legacy vs refactor parity is judged (rendered output, mocked API responses, flows).
- Implementation loops: build/refine, validate, and update the ExecPlan progress/decision log; keep sprint `PLAN.md` aligned when relevant.
- Factory: after the pilot, add `template_modernization_execplan.md` and `how_to_use_codex_for_cumulus_modernization.md` to reuse the pattern.

## Documentation Expectations
- Update the ExecPlan whenever scope, risks, or decisions change; keep links to overview/design/validation/spec/tests sections current.
- Capture manual configuration steps for AI agents (API keys placeholders, cost/latency assumptions, operational runbooks).
- When introducing a new niche or flow, record the niche rationale and value proposition in the plan and related docs so UX and automation stay aligned.
