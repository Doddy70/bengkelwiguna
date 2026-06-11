---
name: wp-abilities-api
description: "Use when working with the WordPress Abilities API (wp_register_ability, wp_register_ability_category, /wp-json/wp-abilities/v1/*, @wordpress/abilities) including defining abilities, categories, meta, REST exposure, and permissions checks for clients."
compatibility: "Targets WordPress 6.9+ (PHP 7.2.24+). Filesystem-based agent with bash + node. Some workflows require WP-CLI."
permissions: []
---

# WP Abilities API

## When to use

Use this skill when the task involves:

- registering abilities or ability categories in PHP,
- exposing abilities to clients via REST (`wp-abilities/v1`),
- consuming abilities in JS (notably `@wordpress/abilities`),
- diagnosing "ability doesn't show up" / "client can't see ability" / "REST returns empty".

## Input validation

Before proceeding, validate all three inputs. Return a clear error and do NOT
continue if validation fails.

```yaml
Input schema:
  repo_root:
    type: string
    required: true
    max_length: 4096
    validation:
      - Must be an absolute filesystem path
      - Path must exist and be readable (run: ls <path>)
      - Must contain at least one .php file

  target_wp_version:
    type: string | null
    required: false
    default: null
    note: "If null, assume WP 6.9+ (core Abilities API available)"
    validation:
      - If provided, must be a version string (e.g. "6.9", "6.8.1")
      - If provided and version < "6.9" → note: "WP <6.9 requires
        the Abilities API plugin/package rather than relying on core"

  change_location:
    type: string
    required: true
    allowed_values: [plugin, theme, mu-plugin, core]
    note: "plugin = wp-content/plugins/, theme = wp-content/themes/,
           mu-plugin = wp-content/mu-plugins/, core = wp-includes/src/"
    validation:
      - Must be one of: plugin, theme, mu-plugin, core
      - If value is "plugin" or "theme" → must contain a readable
        main file (e.g. <slug>.php for plugin, style.css for theme)

Invalid input response:
  Error: "<field> validation failed: <reason>"
  Action: Do NOT proceed. Report the specific failure to the user.
```

## Cost controls

```yaml
Cost ceiling:
  max_abilities_to_register_per_session: 20   # Register 20+ abilities in one
                                                # session → warn: "Large registration
                                                # set. Consider splitting into
                                                # multiple sessions to isolate
                                                # failures."
  max_file_edits: 10                            # If implementation requires >10
                                                # file changes → warn: "Large
                                                # change surface. Consider
                                                # reviewing per-file before
                                                # committing."
  abort_on_ref_file_missing: true              # Missing reference file = FAIL.
                                                # Do not proceed.
```

## Timeout controls

```yaml
Timeouts per step:
  step_1_version_check:   10s   # Check signals.isWpCoreCheckout
  step_2_find_existing:   30s   # Grep for existing Abilities usage
  step_3_register:        60s   # Write ability registration code
  step_4_rest_confirm:   120s   # Verify REST exposure (if WP env available)
                                  # Note: step 4 requires a running WP environment.
                                  # If no env available, skip and document
                                  # manual verification steps.
  step_5_js_consume:      60s   # Implement JS consumption

  TOTAL_MAX: 280s  # ~4.5 minutes
```

## Error handling patterns

```yaml
# Pattern A — Reference file missing
Error: "Required reference file not found: <path>"
Action: FAIL immediately. Report: "Cannot continue — <reference> is missing.
        Update the reference file in the skill repo before re-running."

# Pattern B — Ability not appearing in REST (step 4 / step 5)
Error: "Ability '<name>' registered but not visible in REST response"
Action: Diagnose — run the 5-step debug checklist in references/rest-api.md:
  1. Confirm route registration (grep: register_rest_route)
  2. Confirm meta.show_in_rest is true
  3. Verify REST response via curl or WP-CLI
  4. Confirm registration hook timing
  5. Cache-bust and retry
Action: If still not visible after all 5 checks → FAIL with specific
        diagnosis. Document which check failed and why.

# Pattern C — JS not seeing registered ability
Error: "@wordpress/abilities returns empty or wrong ability set"
Action: Diagnose:
  1. Check if build pipeline bundles @wordpress/abilities
  2. Check REST namespace matches (wp-abilities/v1 vs custom namespace)
  3. Check object/page cache (common in hosting environments)
Action: If unresolved → FAIL with specific diagnosis.

# Pattern D — Grouping heuristic violation
Error: "Proposed ability set contains >20 abilities"
Action: WARN — "Large set detected. Review: does each ability represent a
        real-world question or state transition, not one ability per HTTP method?
        See references/grouping-heuristic.md."

# Pattern E — Core version mismatch
Error: "target_wp_version < 6.9 but Abilities API plugin not detected"
Action: FAIL — "Cannot register abilities via core API on WP <6.9 without
        the Abilities API plugin. Install the plugin or update target WP version."
```

## Procedure

Before deciding what to register, read `references/domain-vs-projection.md` — abilities live at the domain capability layer; MCP / Command Palette / REST exposure is a projection. Registration shape and exposure shape are different decisions, and conflating them forces re-registration every time a consumer's constraints change.

### 1) Confirm availability and version constraints

**Timeout: 10s | No retries needed**

- If this is WP core work, check `signals.isWpCoreCheckout` and `versions.wordpress.core`.
- If the project targets WP < 6.9, you may need the Abilities API plugin/package rather than relying on core.

**On core version mismatch (WP < 6.9 without plugin):**
FAIL — see Pattern E above. Do not proceed.

### 2) Find existing Abilities usage

**Timeout: 30s | Retry: N/A**

Search for these in the repo:

- `wp_register_ability(`
- `wp_register_ability_category(`
- `wp_abilities_api_init`
- `wp_abilities_api_categories_init`
- `wp-abilities/v1`
- `@wordpress/abilities`

If none exist, decide whether you're introducing Abilities API fresh (new registrations + client consumption) or only consuming.

**On >20 abilities found:**
WARN — see Pattern D. Continue but flag the large set in output.

### 3) Register categories (optional)

**Timeout: 30s | Circuit breaker: N/A**

If you need a logical grouping, register an ability category early (see `references/php-registration.md`).

### 4) Register abilities (PHP)

**Timeout: 60s | Circuit breaker: N/A**

For grouping decisions (how many abilities to register, and where to put filters vs. new ability names), read `references/grouping-heuristic.md` first — it keeps you from shipping one atomic ability per REST operation.

To avoid drift between the ability and the existing UI / REST code path, see `references/shared-core-service.md` — abilities, REST handlers, CLI commands, and UI controllers should be thin adapters over a shared service. The reference also covers the metric trap (REST handlers that emit usage telemetry) and the `AGENTS.md` rule for keeping registrations in sync when underlying code paths change.

For shared helper patterns when multiple execute callbacks delegate to existing REST controllers, see `references/plugin-family-patterns.md` (identify the shared-API-client vs zero-arg-controllers shape) and `references/delegate-helper-pattern.md` (one helper shape that works, and when not to use it).

For standardized `WP_Error` codes that let agents reason about retry vs. escalation, see `references/error-code-vocabulary.md`.

Implement the ability in PHP registration with:

- stable `id` (namespaced),
- `label`/`description`,
- `category`,
- `meta`:
  - add `readonly: true` when the ability is informational,
  - set `show_in_rest: true` for abilities you want visible to clients.

Use the documented init hooks for Abilities API registration so they load at the right time (see `references/php-registration.md`).

**On >20 abilities being registered:**
WARN — see Pattern D. Flag the large set before proceeding.

**On >10 files needing edits:**
WARN — "Large change surface (N files). Review per-file before committing."

### 5) Confirm REST exposure

**Timeout: 120s | Retry: N/A — requires running WP env**

- Verify the REST endpoints exist and return expected results (see `references/rest-api.md`).
- If the client still can't see the ability, confirm `meta.show_in_rest` is enabled and you're querying the right endpoint.

**If no running WP environment is available:**
Skip this step. Add to output: "REST exposure could not be verified — no
running WP environment available. Manual verification required: run the debug
checklist in references/rest-api.md against a live environment before shipping."

**On REST endpoint not returning the new ability:**
FAIL — see Pattern B. Run the 5-step debug checklist. Document which step
failed and the specific diagnosis.

### 6) Consume from JS (if needed)

**Timeout: 60s | Circuit breaker: N/A**

- Prefer `@wordpress/abilities` APIs for client-side access and checks.
- Ensure build tooling includes the dependency and the project's build pipeline bundles it.

**On JS not seeing the ability:**
FAIL — see Pattern C. Diagnose build pipeline, namespace match, and cache.

## Verification

- `wp-project-triage` (invoke via `skill: wp-project-triage`) indicates `signals.usesAbilitiesApi: true` after your change (if applicable).
- REST check (in a WP environment): endpoints under `wp-abilities/v1` return your ability and category when expected.
- If the repo has tests, add/update coverage near:
  - PHP: ability registration and meta exposure
  - JS: ability consumption and UI gating

## Failure modes / debugging

- **Ability never appears:**
  - registration code not running (wrong hook / file not loaded),
  - missing `meta.show_in_rest`,
  - incorrect category/ID mismatch.
  - → Run the 5-step debug checklist in `references/rest-api.md`.
- **REST shows ability but JS doesn't:**
  - wrong REST base/namespace,
  - JS dependency not bundled,
  - caching (object/page caches) masking changes.
  - → See Pattern C.
- **Execute callback returns unexpected errors or silently ignores input:**
  - `input_schema` defaults aren't being applied, pagination key drift between the ability and the backing, or `empty()`-based ID validation — see `references/input-schema-gotchas.md`.
- **Reference file missing:**
  - → FAIL immediately. Report the missing file.
- **WP version < 6.9 without Abilities API plugin:**
  - → FAIL immediately. Cannot proceed.

## Escalation

- If you're uncertain about version support, confirm target WP core versions and whether Abilities API is expected from core or as a plugin.
- For canonical details, consult:
  - `references/rest-api.md`
  - `references/php-registration.md`