# Cost Controls Audit — Bengkel Wiguna Agent Workflow
**Generated:** 2026-06-07 | **Status:** IMPLEMENTED

---

## Cost Configuration

| Setting | Value | Description |
|---------|-------|-------------|
| `maxTokensPerRequest` | 4,000 | Hard limit per request |
| `maxTokensPerMinute` | 60,000 | Rolling window |
| `maxRequestsPerMinute` | 30 | Rate limit |
| `maxRequestsPerSession` | 500 | Session limit |
| `maxCostPerSession` | $5.00 | Session ceiling |
| `maxCostPerDay` | $100.00 | Daily ceiling |

---

## Implementation

### CostTracker Class
```javascript
import { costTracker, canMakeRequest, recordRequest } from './utils/cost-controls.js'

// Before API call
const check = canMakeRequest({ tokens: 2000, cost: 0.05 })
if (!check.allowed) {
  console.error(`Blocked: ${check.reason}`)
  return fallback
}

// After API call
recordRequest({ tokens: actualTokens, cost: actualCost })

// Check status anytime
const status = getCostStatus()
```

### withCostGuard Wrapper
```javascript
import { withCostGuard } from './utils/cost-controls.js'

const result = await withCostGuard(
  () => someExpensiveOperation(),
  { estimatedTokens: 3000, estimatedCost: 0.10 }
)
```

---

## Circuit Breaker Integration

Cost controls work with circuit breaker:
- 3 consecutive API failures → circuit opens
- 60 second cooldown → automatic recovery check
- Fallback response when circuit is open

---

## Audit Checklist

- [x] Token budget per request
- [x] Token budget per minute
- [x] Rate limit (requests per minute)
- [x] Session request limit
- [x] Session spend ceiling
- [x] Daily spend ceiling
- [x] Automatic reset on daily boundary
- [x] Guard wrapper for expensive operations

---

## Usage in Agent Workflow

```javascript
// At start of each agent task
import { canMakeRequest, getCostStatus } from './agent-workflow/utils/index.js'

const status = getCostStatus()
console.log(`Session: ${status.spend.total.toFixed(2)}/${status.spend.sessionLimit} | Requests: ${status.requests.count}/${status.requests.limit}`)

// Before expensive operation
const check = canMakeRequest({ tokens: 5000 })
if (!check.allowed) {
  throw new Error('Budget exceeded - use fallback')
}
```

---

## Alert Thresholds

| Metric | Warning | Critical |
|--------|---------|----------|
| Session spend | $4.00 (80%) | $5.00 (100%) |
| Daily spend | $80.00 (80%) | $100.00 (100%) |
| Requests | 400 (80%) | 500 (100%) |

---

## Recommended Next Step

Integrate with `/iterate` test suite to monitor cost efficiency over time.