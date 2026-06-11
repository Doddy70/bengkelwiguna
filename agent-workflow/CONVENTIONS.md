# Agent Workflow Conventions — Bengkel Wiguna Project

## Prompt Format
```
[Context] → [Task] → [Output Schema]
```
- Section delimiter: `---` (triple-dash)
- Section order: `Context` → `Instructions` → `Output Format`
- Critical info at start AND end of prompt (attention gradient)

## Tool Conventions
- **Naming:** `verb_noun` (e.g., `getServiceBySlug`)
- **Description template:**
  ```
  {What it does} → {When to use} → {Returns} → {Errors}
  ```
- **Error format:** `{ code, message, details }`

## Logging
- Format: JSON structured
- Required fields: `{ workflow_id, step, timestamp, level, message }`
- Log path: `agent-workflow/logs/`

## File Structure
```
agent-workflow/
├── prompts/           # System prompts, versioned (v1.md, v2.md)
├── config/            # Environment-specific (local.yaml, staging.yaml)
├── tests/             # Golden test sets and evaluation suites
└── logs/              # Runtime logs (gitignored)
```

## Agent Types (CLEAN TOOL BOUNDARIES)

### 1. Frontend Agent
- **Scope:** Next.js App Router (`bexon/` atau `bengkel-wiguna-nextjs/`)
- **Reads:** `.maestro.md` + relevant session logs
- **Tools (EXCLUSIVE):** `read`, `write`, `edit`, `bash` (npm scripts only)
- **NO OVERLAP:** Tidak akses plugin files

### 2. Backend Agent
- **Scope:** WordPress plugin (`bw-headless-cms/`)
- **Reads:** `.maestro.md` + session logs
- **Tools (EXCLUSIVE):** `read`, `write`, `edit`, `bash` (WP/shell only)
- **NO OVERLAP:** Tidak akses frontend files

### 3. Orchestrator Agent
- **Scope:** Supervises workflow, delegates to specialized agents
- **Reads:** `.maestro.md` + `decisions.jsonl` ONLY (no direct file access)
- **Tools (EXCLUSIVE):**
  - `spawn_agent(agent_type)` — delegate to Frontend/Backend
  - `aggregate_results(results)` — combine agent outputs
  - `log_decision(decision, reason)` — audit trail
  - `check_quality(output)` — validate against golden tests
- **NO DIRECT FILE ACCESS:** Delegate instead of doing

### Tool Boundary Rules
| Agent | Can Access | Cannot Access |
|-------|-----------|----------------|
| Frontend | bexon/, templates, Next.js | bw-headless-cms/, plugin files |
| Backend | bw-headless-cms/, WP files | bexon/, frontend code |
| Orchestrator | NOTHING directly | Delegate everything |

## Output Standards

| Return Type | On Success | On Error |
|-------------|-------------|----------|
| Single item | `Object` | `null` |
| List | `Array` | `[]` |
| Paginated | `{ posts: [], total, totalPages }` | `{ posts: [], total: 0, totalPages: 0 }` |
| Helper utils | typed value | safe default (`''`, `null`) |

## Quality Gates
1. `npm run build` — zero errors
2. All CPT endpoints return valid JSON
3. Golden URL routes respond 200
4. No unauthorized URL slug changes
5. `dynamicParams` never set (conflicts with cache)