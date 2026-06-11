# Feedback Loop Setup — Bengkel Wiguna Agent Workflow
**Generated:** 2026-06-07 | **Status:** ITERATED

---

## Iteration Checklist Completion

- [x] Quality criteria defined with weights and thresholds
- [x] Evaluator selected and configured (Rule-based)
- [x] Correction loop has max attempts limit (3)
- [x] Feedback is injected into retries (not identical retry)
- [x] Golden test set exists with ≥ 10 cases (21 tests)
- [x] Regression detection configured for changes
- [ ] Production monitoring in place (monitor.js ready)

---

## Components Created

### 1. Quality Criteria (`quality-criteria.js`)
| Dimension | Weight | Threshold |
|-----------|--------|-----------|
| Accuracy | 0.40 | ≥ 0.80 |
| Completeness | 0.30 | ≥ 0.70 |
| Format | 0.20 | ≥ 0.90 |
| Safety | 0.10 | ≥ 0.60 |

### 2. Rule-Based Evaluator (`validators/rule-evaluator.js`)
Fast, free, reliable validation:
- `evaluateSingleFetch()` — Object|null validation
- `evaluateListFetch()` — Array validation
- `evaluatePaginatedFetch()` — {posts, total, totalPages} validation
- `evaluateSlugValidation()` — Slug format check
- `evaluatePaginationValidation()` — Page/perPage validation

### 3. Self-Correction Loop (`self-correction.js`)
```
generate(input) → evaluate(output) → score
  if score ≥ threshold → return output
  if score < threshold AND attempts < max →
    enrich input with evaluator feedback
    generate again (with feedback)
  if attempts ≥ max → fallback or escalate
```

### 4. Regression Detection (`regression.js`)
- 5% threshold for significant change
- Per-dimension delta tracking
- Baseline comparison for all tests

### 5. Continuous Monitor (`monitor.js`)
- Rolling statistics (mean, min, max, trend)
- Alert on quality decline
- 5% sample rate for production

---

## Usage Examples

### Running Tests
```javascript
import { runAllTests, printTestReport } from './tests/index.js'

const report = runAllTests()
printTestReport(report)
```

### Self-Correction
```javascript
import { withSelfCorrection } from './tests/self-correction.js'

const result = await withSelfCorrection(
  async (input) => generateSomething(input),
  (output) => evaluateOutput(output),
  { threshold: 0.7, maxAttempts: 3 }
)
```

### Regression Detection
```javascript
import { detectRegression } from './tests/regression.js'

const result = detectRegression(baseline, current)
if (!result.accepted) {
  console.error('REGRESSION:', result.changeType, result.delta)
}
```

### Quality Monitoring
```javascript
import { recordScore, getMonitorStatus } from './tests/monitor.js'

// After each operation
recordScore('getServiceBySlug', 1.0)

// Check status
const status = getMonitorStatus()
status.forEach(s => {
  if (s.trend === 'declining') {
    console.warn(`Quality declining for ${s.testName}`)
  }
})
```

---

## Test Suite Summary

| Category | Count | Pass Rate Target |
|----------|-------|------------------|
| Validator Tests | 21 | 100% |
| API Simulation Tests | 4 | 100% |
| **Total** | **25** | **≥ 95%** |

---

## Files Created

```
agent-workflow/tests/
├── index.js                    # Unified exports
├── golden-tests.md             # Updated with automation info
├── quality-criteria.js         # Quality dimensions & scoring
├── self-correction.js          # Correction loop implementation
├── regression.js               # Regression detection
├── test-runner.js             # Test execution & reporting
├── monitor.js                  # Continuous monitoring
└── validators/
    └── rule-evaluator.js       # Rule-based evaluator functions
```

---

## Regression Testing Workflow

1. **Before changes:**
   ```bash
   node tests/test-runner.js > baseline.json
   ```

2. **Make changes** (prompt updates, model changes, etc.)

3. **After changes:**
   ```bash
   node tests/test-runner.js > current.json
   ```

4. **Compare:**
   ```javascript
   import { detectRegression } from './regression.js'
   const result = detectRegression(baseline, current)
   if (result.changeType === 'regression') {
     console.error('BLOCK DEPLOYMENT')
   }
   ```

---

## Recommended Next Step

Run `/evaluate` to validate the feedback loop with real scenarios, then `/refine` for final polish.

The feedback loop is now complete. Run `node agent-workflow/tests/test-runner.js` to execute the test suite.