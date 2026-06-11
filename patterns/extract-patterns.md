# Extracted Reusable Patterns

This document contains reusable patterns distilled from recent workflows in this repository (onboard-agent scaffolding, skill install, fortify audit, tooling). Use these as templates for future agent workflows.

## Pattern: Agent Onboard Prompt Template
**Problem**: Quickly scaffold a minimal agent with system prompt, tools, and golden test.
**When to use**: When introducing a new agent to a repo or bootstrapping automation.
**When NOT to use**: For large, bespoke agents that require extensive design sessions.

**Template**:
```text
System Prompt — [agent-name] v[semver]

<role>
one-sentence role description
</role>

<constraints>
short list (guardrails)
</constraints>

<instructions>
step-by-step logic
</instructions>

<output_schema>
JSON schema or structured format
</output_schema>

<files_to_create>
prompts/, tools/, tests/, .maestro/context.md additions
</files_to_create>
```
**Variants**:
- Lightweight: only system prompt + one tool
- Full: add golden test and minimal `tools/hello.js` example

**Pitfalls**:
- Overlong system prompts (violates Context Management guidance)
- Missing explicit output schema → brittle tests

**Examples**:
- `onboard-agent` system prompt at `prompts/onboard-agent/v1/system.md`.

---

## Pattern: Tool Wrapper Pipeline (Tool Chain)
**Problem**: Provide simple, testable CLI tools that agents can call and validate.
**When to use**: For any repo needing repeatable, automatable checks or helpers.

**Template**:
```bash
#!/usr/bin/env node
// Minimal tool example
const args = process.argv.slice(2)
try {
  // validate input
  // perform action
  console.log(JSON.stringify({status:'ok', result}))
} catch (err) {
  console.error(JSON.stringify({status:'error', message: err.message}))
  process.exit(2)
}
```
**Variants**:
- Synchronous quick checks (`tools/hello.js` style)
- Network-enabled tools with timeouts and retries

**Pitfalls**:
- Printing raw stack traces (use structured error output)
- Exiting with 0 on error (use non-zero codes)

**Examples**:
- `tools/hello.js` — simple `status: ok` JSON output.

---

## Pattern: Resilience (Fortify) Wrapper
**Problem**: Standardize retries, timeouts, and fallbacks for external calls.
**When to use**: Any external network or model API call.

**Template (JS helper)**:
```js
async function withRetry(fn, opts={}) {
  // opts: maxRetries, initialDelay, backoff, timeoutMs, retryableErrors
}
```
**Customization points**:
- `maxRetries` (default 3)
- `initialDelay` (default 1000ms)
- `backoffMultiplier` (default 2)
- `timeoutMs` per environment

**Pitfalls**:
- Retrying on 4xx auth errors (do not retry non-retryable codes)
- No circuit breaker on sustained failures

**Examples**:
- See `fortify-audit.md` recommendations and checklist.

---

## Pattern: Golden-Test Evaluation
**Problem**: Automate correctness checks for agent scaffolding and deterministic outputs.
**When to use**: When a workflow must produce a specific structured artifact.

**Template**:
- Place golden JSON under `tests/golden/` with `expected` object
- Add a small node script that reads file and asserts shape

**Pitfalls**:
- Overly strict golden that breaks on innocuous changes (use stable keys)

**Examples**:
- `tests/golden/onboard_agent_golden.json` + validation script used in repo.

---

## Pattern: Maestro Context Pattern
**Problem**: Centralize workflow constraints, priorities, and guardrails.
**When to use**: Any repo with agent workflows and guardrails.

**Template (partial `.maestro.md`)**:
- Models & Providers
- Workflow Architecture
- Quality & Evaluation (build validation, golden routes)
- Constraints & Guardrails (Zero Initiative Rule)
- Priorities (Safety > Quality > Speed > Cost)

**Pitfalls**:
- Missing guardrails causing agent drift

**Examples**:
- This repo's `.maestro.md` defines build validation and Zero Initiative Rule.

---

## Pattern: Agent Coordination (Onboarding → Fortify → Evaluate)
**Problem**: Reliable multi-step workflows that bootstrap an agent, harden it, and evaluate it.
**When to use**: When introducing new skills that will operate in production-like contexts.

**Template**:
1. Onboard: scaffold prompts/tools/tests
2. Fortify: run Context Gathering Protocol, add retries/timeouts/fallbacks
3. Evaluate: run golden tests and runtime checks

**Pitfalls**:
- Skipping fortify step (leads to brittle agents)
- Missing evaluation (no regression checks)

**Examples**:
- This repository followed: install `frontend-design` → scaffold `onboard-agent` → create `fortify-audit.md` → golden test pass.

---

## Testing Reusability (applied example)
Apply the Agent Onboard Prompt Template to scaffold a `health-check-agent`:
- Problem: create a tiny agent that runs `npm ci && npm run build && curl -fsS http://localhost:3000/`
- Use the system prompt template, create `tools/check-build.js`, and a golden test asserting a 200 response structure.

---

## Next Steps
- Run `/calibrate` to align these patterns with repository conventions.
- Add a small `utils/with-retry.js` implementing the Resilience pattern (I can scaffold this if you want).

Generated: 2026-06-01
