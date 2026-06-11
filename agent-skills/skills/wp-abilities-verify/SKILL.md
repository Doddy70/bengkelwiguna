---
name: wp-abilities-verify
description: "Verify a WordPress plugin's Abilities API registrations: enumerate abilities, check that callback behavior matches each annotation's claim (the adversarial readonly-but-writes detection), validate permissions and schemas, and validate audit documents produced by wp-abilities-audit."
compatibility: "Targets WordPress 6.9+ plugins (PHP 7.2.24+). Requires a runnable environment (wp-env, docker-based dev stack, or equivalent) for runtime mode; static mode runs entirely from the plugin checkout with no env. Filesystem-based agent with bash + node."
permissions: []
---

# WP Abilities Verify

Verify a WordPress plugin's Abilities API registrations. The
centerpiece is the **adversarial annotation correctness check**: a
`readonly: true` ability that actually writes (via `$wpdb->update`,
`update_option`, a non-GET delegate, etc.) is a security and UX
disaster because agents plan actions on the basis of the annotations
they introspect. This skill catches those lies by reading the callback
body and comparing what it does against what the annotation claims.

The skill also validates audit docs produced by `wp-abilities-audit`,
checks permission gates and schema hygiene, and optionally executes
each ability against a live environment.

## When to use

- After abilities have been registered in a plugin but before a PR
  lands.
- As a health-check on an already-shipped plugin (catch regressions
  where a refactor turned a readonly ability into a writing one).
- To validate an audit document before handing it to an implementer.

## Two modes

- **Static mode** — runs from the plugin checkout. No env. Enumerates
  via source inspection, runs the adversarial correctness check, runs
  schema and permission lints, and validates audit docs.
- **Runtime mode** — requires a running env. Does everything static
  does PLUS: `wp_get_abilities()` for authoritative enumeration,
  executes each ability with curated inputs, confirms permission
  roundtrip against real users, and runs a twin-invocation heuristic
  on `idempotent: true` abilities to flag candidates for review
  (return-value equality is a signal, not a verdict — core defines
  idempotent as "no additional effect on the environment").

Both modes produce the same structured report format.

A static-mode PASS means "no obvious-shape violations," not "verified
write-free." For high-stakes plugins, run runtime mode before landing
— it catches bootstrap-order, permission-roundtrip, and idempotency
issues that static can't. See `references/annotation-correctness.md`
for the static blind spots.

## Input validation

Before proceeding, validate all inputs. Return a clear error and do NOT
continue if any validation fails.

```yaml
Input schema:
  plugin_checkout_path:
    type: string
    required: true
    max_length: 4096
    validation:
      - Must be an absolute filesystem path
      - Path must exist and be readable

  mode:
    type: string
    required: true
    allowed_values: [static, runtime]
    default: static
    validation:
      - Must be one of: static, runtime
      - If omitted, default to static

  env_up_command:
    type: string
    required: false   # Only required when mode == runtime
    max_length: 1024
    validation:
      - If mode == runtime and env_up_command is empty → FAIL
        "Runtime mode requires env_up_command. Abort."

  audit_doc_path:
    type: string | null
    required: false   # Optional
    max_length: 4096
    validation:
      - If provided and not null, file must exist and be readable
      - If provided path does not exist → FAIL with clear error

  report_output_path:
    type: string
    required: true
    max_length: 4096
    validation:
      - Must be an absolute filesystem path
      - Parent directory must exist and be writable

Invalid input response:
  Error: "<field> validation failed: <reason>"
  Action: Do NOT proceed. Report the specific failure to the user.
```

## Cost controls

```yaml
Cost ceiling:
  max_abilities_to_verify: 100       # If static enumeration finds >100 abilities,
                                     # warn: "large ability set — verify may be slow.
                                     # Consider splitting by category or namespace."
  max_report_size_kb: 256           # If report exceeds 256KB, warn in header.
  max_env_up_attempts: 3             # Runtime only — fail after 3 attempts.
  max_env_start_duration: 300s       # Runtime only — env must be up within 5 minutes.

  static_mode_circuit_breaker:
    trigger: "Any step FAIL in static mode"
    action: "Stop immediately, write report with FAIL status"

  runtime_mode_circuit_breaker:
    trigger: "3 consecutive env-up failures OR 3 consecutive wp-cli failures"
    state: CLOSED → OPEN after threshold
    cooldown: 60s
    action_on_open:
      Error: "Circuit OPEN: env unreachable after 3 attempts"
      Response: "Runtime verification cannot proceed. Switch to static mode
                 (omit env_up_command) or fix the environment. Report status
                 as FAIL with reason: 'env_unreachable'."
```

## Timeout controls

```yaml
Timeouts per step:
  step_1_audit_validate:   30s   # Audit doc validation (if provided)
  step_2_enumerate:       60s   # Static enumeration (rg --multiline --pcre2)
  step_3_env_up:          300s  # Runtime only: env bring-up (max_env_start_duration)
  step_3_runtime_enum:    60s   # Runtime only: wp_get_abilities() over wp-cli
  step_4_annotation:      120s  # Adversarial annotation correctness check
  step_5_permission:      60s   # Permission roundtrip
  step_6_schema_lints:    60s   # Schema linting
  step_7_error_vocab:     30s   # Error code vocabulary cross-check

  TOTAL_STATIC:   360s  # ~6 minutes
  TOTAL_RUNTIME:  660s  # ~11 minutes (includes env-up)

Timeout response:
  Error: "Step N (<step_name>) timed out after <elapsed>s"
  Action: Report step status as FAIL. Write report with FAIL status and
          the specific timeout. Do not proceed to subsequent steps.
```

## Retry with backoff

Applies only to runtime mode's env-up step:

```yaml
Retry strategy:
  max_retries: 3
  initial_delay: 10s
  backoff_multiplier: 2
  max_delay: 60s
  retryable_errors:
    - "Docker daemon not running"
    - "Connection refused (port blocked)"
    - "Timeout waiting for container to be healthy"
    - "wp-env start: process exited with code 1"
  non_retryable_errors:
    - "Docker not installed"           → FAIL immediately, do not retry
    - "Permission denied (docker)"     → FAIL immediately, do not retry
    - "Plugin has no AGENTS.md"        → FAIL immediately, do not retry
    - "Invalid env_up_command format"  → FAIL immediately, do not retry

Retry example:
  Attempt 1: env-up → "Connection refused" → wait 10s → retry
  Attempt 2: env-up → "Connection refused" → wait 20s → retry
  Attempt 3: env-up → "Connection refused" → wait 40s → retry
  Attempt 4: FAIL — "Circuit OPEN: env unreachable after 3 retries (90s elapsed)"
```

## Error handling patterns

```yaml
# Pattern A — Audit doc path not found (step 1)
Error: "Audit doc not found at <path>"
Action: If audit_doc_path was provided → FAIL with "Audit doc not found."
       If audit_doc_path was not provided → skip step 1, continue to step 2.

# Pattern B — No abilities found (step 2)
Error: "Zero wp_register_ability() calls found in <plugin_path>"
Action: Return "No abilities registered. Nothing to verify." with status PASS
       and note: "empty inventory — plugin has no Abilities API registrations."

# Pattern C — Static vs runtime inventory mismatch (step 3, runtime only)
Error: "Runtime enumeration (N) < static enumeration (M)"
Action: WARN in report. Add note: "Registration hook not firing on this
        environment. Check init priority, activation state, autoloader order."

# Pattern D — Env-up failure (step 3, runtime only)
Error: "<retryable_error>" after max_retries exceeded
Action: Trip circuit breaker → FAIL with status "env_unreachable".
       Never silently fall back to static mode without noting in report.

# Pattern E — Annotation correctness false positive
Error: "Ability '<name>' annotated readonly but writes via <pattern>"
Action: Check for `// verify-ignore: readonly -- <reason>` in callback body.
       If present → suppress result, log in report as SUPPRESSED (legitimate).
       If absent → FAIL. Record in report with the specific write pattern found.

# Pattern F — Permission shape E detected (literal true)
Error: "Permission callback on <ability> uses '__return_true' or literal true"
Action: FAIL. Never copy `__return_true` into an ability registration.
       Document in report: "Shape E (literal true) found — capability gate
       is missing. Ability must not be registered with a permissive callback."
```

## Procedure

### 1. (If audit provided) Validate the audit doc

**Timeout: 30s | Retry: N/A (static validation)**

Read `references/audit-schema-validation.md`. Validate the audit
against the canonical schema owned by `wp-abilities-audit`. Surface
missing required fields, multiple `reference_ability: true`, and
`backing: null` entries that aren't paired with a `surfaced_gaps`
entry. `backing: null` alone is WARN (intentional gap output), not
FAIL.

**On missing audit doc (user provided path but file not found):**
FAIL — "Audit doc not found at <path>."

**On audit doc found but fails schema validation:**
Continue — record validation failures in report as WARN. Do not abort
on schema mismatch. Point at `references/audit-schema-validation.md`.

### 2. Enumerate abilities statically

**Timeout: 60s | Retry: N/A**

Read `references/static-enumeration.md`. Find each
`wp_register_ability(` call, extract the name, the annotation block,
and the execute-callback location. Use a multi-line tool (`rg
--multiline --pcre2`) — the canonical formatting splits the call
across lines. Record each ability's source-file + line + annotations +
callback byte range.

**On zero abilities found:**
Return PASS with note: "No abilities registered. Nothing to verify."
— do NOT return FAIL (empty inventory is a valid state).

**On >100 abilities found:**
Add to report: "Large ability set (N). Verification may be slow. Consider
splitting by category or namespace." — continue regardless.

### 3. (Runtime only) Enumerate via REST + wp-cli

**Timeout: 300s env-up + 60s enumeration | Retry: 3 with backoff**

Read `references/runtime-harness.md`. Bring the env up using the
command from `AGENTS.md`, then enumerate via `wp_get_abilities()` over
wp-cli and cross-check against the static inventory.

**Env-up retry sequence:**
1. Attempt env-up with 10s initial delay
2. On failure → wait 20s → retry
3. On failure → wait 40s → retry
4. On third failure → circuit OPEN → FAIL with "env_unreachable"

**Non-retryable env failures (fail immediately, no retry):**
- "Docker not found" → "Docker is not installed. Install Docker or switch to static mode."
- "Permission denied" on docker socket → "Docker permission denied. Fix docker group membership or switch to static mode."
- `AGENTS.md` not found → "Plugin has no AGENTS.md. Cannot determine env-up command. Use static mode."

**On successful env-up:**
Proceed to runtime enumeration. Cross-check against static inventory.

**On runtime count < static count:**
WARN — add note about registration hook not firing.

### 4. Annotation correctness (the adversarial core)

**Timeout: 120s | Retry: N/A**

Read `references/annotation-correctness.md`. Read each callback body
and verify it matches the annotation claim:

- `readonly: true` → callback must not write to the database, the
  options table, post / user / term / comment data, the filesystem,
  cron, or via non-GET HTTP / REST delegates.
- `destructive: false` → callback must not delete, refund, void,
  cancel, or trash.
- `idempotent: true` → repeated calls with the same input have no
  additional effect on the environment (per the `idempotent`
  annotation's docblock in `class-wp-ability.php`). Static catches
  counter writes and per-call cron schedules; runtime adds a
  twin-invocation heuristic for visible state changes.

The reference lists common write patterns as a starting set, not a
checklist — plugin vocabularies vary, and the agent extends with verbs
specific to the plugin under verification.

False positives get suppressed via an inline `// verify-ignore:
<annotation> -- <reason>` comment in the callback body. If suppression
comment exists → record as SUPPRESSED (legitimate) in the report.
If no suppression comment exists → FAIL.

**On FAIL:**
Record in report: ability name, annotation claim, actual behavior found,
file + line of the violating code. Top-line status becomes FAIL.

### 5. Permission roundtrip

**Timeout: 60s | Retry: N/A**

Read `references/permission-roundtrip.md`. Static: classify each
`permission_callback` against the six shapes (preferred Shape A
`current_user_can(...)`; FAIL on Shape B-bad `WP_REST_Request`
patterns or Shape E literal `true`). Runtime: anon and subscriber
denied; admin allowed (unless deliberately public). When an audit was
provided, cross-check the registered cap against the audit's declared
gate.

**Shape E detection → FAIL:**
Document in report with: "Shape E (literal true or `__return_true`)
found at <file>:<line>. Permission gate is missing. Never promote this
into an ability registration."

### 6. Schema lints

**Timeout: 60s | Retry: N/A**

Read `references/schema-lints.md`. Six small principles applied to
each ability's `input_schema`: object schemas declare
`additionalProperties`; required fields have descriptions; enums
non-empty; no `$ref`; defaults are statically constant (including
`(object) array()`); reference abilities have no required inputs.

Cross-reference `../wp-abilities-api/references/input-schema-gotchas.md`
for the four runtime gotchas (defaults not injected on the
property-level path, pagination key drift, `empty()` on string IDs,
direct vs indirect invocation strictness).

**On lint FAIL:**
Record specific lint rule violated and the ability name. Continue checking
all abilities. Summarize at end.

### 7. Error-code vocabulary

**Timeout: 30s | Retry: N/A**

Cross-reference `../wp-abilities-api/references/error-code-vocabulary.md`.
Inspect each callback's `WP_Error` returns; non-vocabulary codes →
WARN (not FAIL). Record in report as WARN with the unknown code.

## Verification report

The run produces a structured markdown report at the user-specified
path:

```yaml
Report schema:
  header:
    last_updated: "YYYY-MM-DD HH:MM"
    plugin: "<plugin-slug>"
    mode: "static | runtime"
    status: "PASS | WARN | FAIL"
  audit_doc_validation:   # null if no audit doc provided
    result: "PASS | WARN | FAIL"
    failures: []         # list of specific validation failures
  static_inventory:
    count: <integer>
    abilities: []         # name, file, line, annotations
  runtime_inventory:     # null in static mode
    count: <integer>
    match_with_static: "exact | partial | none"
    warnings: []
  annotation_correctness:
    results:
      - ability: "<name>"
        claim: "<annotation>"
        result: "OK | FAIL | SUPPRESSED"
        evidence: "<file>:<line> — <what was found>"
        violation_pattern: "<if FAIL, the write pattern found>"
  permission_gates:
    results:
      - ability: "<name>"
        shape: "A | B | C | D | E"
        result: "OK | FAIL"
        note: "<reason if FAIL>"
  schema_lints:
    results:
      - ability: "<name>"
        rule: "<lint rule name>"
        result: "OK | FAIL"
  error_code_vocabulary:
    results:
      - ability: "<name>"
        code: "<WP_Error code>"
        result: "OK | WARN"
        note: "non-vocabulary code"  # if WARN
  circuit_breaker_events: []  # empty if no circuits tripped

Status computation:
  - Any FAIL in annotation_correctness or permission_gates → overall FAIL
  - FAIL in schema_lints → FAIL
  - No FAILs, any WARN → overall WARN
  - All OK → overall PASS
```

**On report exceeds 256KB:**
Add warning at top of report: "NOTE: Report exceeds 256KB. Large
reports may strain downstream context windows. Consider splitting
verification by category."

## Failure modes / debugging

- **Env not reachable (runtime)** — after 3 retries with backoff, trip
  circuit. Report: FAIL with reason `env_unreachable`. Do NOT silently
  fall back to static.
- **No abilities in source** — return "No abilities registered. Nothing
  to verify." with status PASS and note.
- **Audit schema mismatch** — point at `references/audit-schema-validation.md`;
  don't auto-fix the audit. Record as WARN.
- **False positive on readonly-writes** — check for `// verify-ignore: readonly -- <reason>`
  in callback body. If present → SUPPRESSED. If absent → FAIL.
- **Runtime enumeration smaller than static** — registration hook isn't
  firing. WARN in report with init-priority guidance.
- **Step timeout** — report step as FAIL, write report with FAIL status.
  Do not proceed.
- **Reference file missing** — FAIL immediately. Report missing file path.
  Do not attempt to continue.

## Escalation

- Recurring legitimate pattern that trips the adversarial check across
  multiple plugins → propose adding it to the suppression guidance in
  `annotation-correctness.md`. Don't broaden the candidate-pattern
  list speculatively.
- Audit-schema validator rejects a legitimate audit → the canonical
  schema in `../wp-abilities-audit/references/audit-schema.md` has
  evolved. Update `references/audit-schema-validation.md` to match.
- Circuit breaker trips → report to user with the specific failure
  and the cooldown status. Do not auto-retry.

## Out of scope

Token-budget measurement is a separate verification axis — an
annotation-clean, schema-clean, runtime-passing ability set can still
be unshippable if its `tools/list` form burns through an agent's
context budget. That axis is tracked separately. Do not aggregate
manual or external measurement into this skill's PASS / FAIL verdict.