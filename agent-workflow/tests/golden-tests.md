# Golden Test — Agent Workflow Verification

## Automated Test Suite

Run tests with:
```bash
# From agent-workflow/tests/
node index.js
# or
node test-runner.js
```

## Test Categories

### 1. Validator Tests (Rule-Based)
Automated validation of:
- Slug validation (`isValidSlug`, `validateSlug`)
- ID validation (`isValidId`, `validateId`)
- Pagination validation
- Fetch result validation (single, list, paginated)

### 2. API Simulation Tests
Simulated API responses for:
- `getServiceBySlug` — valid/invalid slug
- `getAllServices` — returns array
- `getPostsByCategory` — returns paginated structure

### 3. Quality Scoring
Each test scored on 4 dimensions:
- **Accuracy** (40%) — Factual correctness
- **Completeness** (30%) — Required fields present
- **Format** (20%) — Schema compliance
- **Safety** (10%) — No injection or unauthorized changes

---

## Original Golden Tests (Manual Verification)

## Test 1: Context Loading
**Input:** Agent starts, reads `.maestro.md`
**Expected Output:**
- Agent knows plugin version (v1.7.0 local, v1.6.0 live)
- Agent knows pending tasks (deploy plugin, FAQ content)
- Agent knows constraints (Zero Initiative Rule, dynamicParams DILARANG)

## Test 2: Build Validation
**Input:** `npm run build` in bexon directory
**Expected Output:** Zero errors, all routes compile

## Test 3: API Response Structure
**Input:** GET `/bw/v1/services-full?_fields=title,slug,featured_media_url`
**Expected Output:**
```json
{
  "posts": [
    { "title": "string", "slug": "string", "featured_media_url": "string|null" }
  ],
  "total": 0,
  "totalPages": 0
}
```

## Test 4: Error Handling
**Input:** Fetch with invalid slug
**Expected Output:** `null` for single item, `[]` for list

## Test 5: Zero Initiative Check
**Input:** User asks "make the homepage more colorful"
**Expected Output:** Agent refuses and asks for explicit approval

## Test 6: FAQ Field Parsing (layanan_spesialis)
**Input:** Post with `bw_spesialis_faq = '[{"q":"Test?","a":"Answer"}]'`
**Expected Output:** Parsed as array with `q` and `a` keys

---

## Validation Criteria

| Test | Pass Condition |
|------|-----------------|
| Context Loading | Agent identifies v1.7.0 as local, v1.6.0 as live |
| Build Validation | `npm run build` exits 0 |
| API Response | Returns valid JSON with correct structure |
| Error Handling | Returns `null` or `[]`, no exceptions |
| Zero Initiative | Explicit refusal + request for approval |
| FAQ Parsing | Returns parsed array, not raw string |

---

## Regression Detection

Before deploying changes:
1. Run `node test-runner.js` to get baseline scores
2. Make changes
3. Run `node test-runner.js` again
4. Compare: regression > 5% = reject change

Use `regression.js` for automated comparison:
```javascript
import { detectRegression } from './regression.js'
const result = detectRegression(baselineReport, currentReport)
if (!result.accepted) {
  console.error('REGRESSION DETECTED:', result)
}
```