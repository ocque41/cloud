# ExecPlan Standard

## When to Create an ExecPlan
- Work that spans multiple steps, routes, or integrations; expected effort >30–60 minutes.
- Changes that reshape UX journeys, reflow marketing narratives, or alter AI agent/API wiring.
- Any modernization/pilot effort (inventory → design → validation → implementation) or migration with parity checks.

## Where Plans Live
- Place the plan at the repo root or nearest feature folder (e.g., `pilot_execplan.md`).
- Link related artifacts (overview, design, validation, OpenAPI, tests) directly inside the plan.

## How to Use
- Keep sections concise and update progress/decision log as you work.
- Prefer phase-based plans; convert surprises into decisions or risks quickly.
- Reflect niche/thesis context (who/why/how/what/cost) so UX and automation stay aligned.

## ExecPlan Template
```
# <execplan title>

## Context and Goals
- Scope and business/story question (who, why, how, what, cost).
- Success definition and what is out of scope.

## Outcomes (Definition of Done)
- [ ] Outcome 1
- [ ] Outcome 2

## Constraints and Guardrails
- UX-first marketing/product experience; keep flows simple and narrative-aligned.
- AI agents via external APIs/tools; favor configuration + contracts over custom backends.
- Note cost/latency, compliance, and brand tone constraints.

## Plan of Work (Phases)
- Phase 1: Inventory/overview (current routes, components, data, diagram).
- Phase 2: Design/spec (target structure, contracts, OpenAPI if applicable).
- Phase 3: Validation (parity strategy, test scaffolding).
- Phase 4: Implementation and comparison (build, run, reconcile differences).

## Concrete Steps
- [ ] Step 1
- [ ] Step 2
- [ ] Step 3

## Progress
- [ ] Inventory drafted
- [ ] Design drafted
- [ ] Validation drafted
- [ ] Implementation in progress
- [ ] Parity checked

## Risks and Assumptions
- Risk 1 / mitigation
- Assumption 1 / validation plan

## Decision Log
- YYYY-MM-DD — Decision and rationale

## Links
- Overview: <link>
- Design: <link>
- Validation: <link>
- Spec: <link>
- Tests: <link>
- PRs: <link>
```
