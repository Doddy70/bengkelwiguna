/**
 * Cost Controls — Bengkel Wiguna Agent Workflow
 * Prevents runaway costs with token budgets, rate limits, and spend ceilings
 */

/**
 * Cost ceiling configuration
 */
export const COST_CONFIG = {
  // Token limits
  maxTokensPerRequest: 4000,
  maxTokensPerMinute: 60000,

  // Request limits
  maxRequestsPerMinute: 30,
  maxRequestsPerSession: 500,

  // Spend limits (in USD)
  maxCostPerSession: 5.00,
  maxCostPerDay: 100.00,

  // Circuit breaker for API failures
  circuitBreakerThreshold: 3,
  circuitBreakerCooldown: 60, // seconds
}

/**
 * Cost tracking state
 */
class CostTracker {
  constructor() {
    this.reset()
  }

  reset() {
    this.requestCount = 0
    this.tokenCount = 0
    this.totalCost = 0
    this.startTime = Date.now()
    this.dailyReset = this.getDailyReset()
  }

  getDailyReset() {
    const now = new Date()
    const tomorrow = new Date(now)
    tomorrow.setDate(tomorrow.getDate() + 1)
    tomorrow.setHours(0, 0, 0, 0)
    return tomorrow.getTime()
  }

  canMakeRequest(estimatedTokens = 0) {
    // Check daily reset
    if (Date.now() >= this.dailyReset) {
      this.reset()
    }

    // Check session request limit
    if (this.requestCount >= COST_CONFIG.maxRequestsPerSession) {
      return { allowed: false, reason: 'session_limit_reached', limit: COST_CONFIG.maxRequestsPerSession }
    }

    // Check rate limit (requests per minute)
    const minuteAgo = Date.now() - 60000
    const recentRequests = this.minuteRequests?.filter(t => t > minuteAgo).length || 0
    if (recentRequests >= COST_CONFIG.maxRequestsPerMinute) {
      return { allowed: false, reason: 'rate_limit_exceeded', cooldown: 60 }
    }

    // Check token budget
    if (this.tokenCount + estimatedTokens > COST_CONFIG.maxTokensPerMinute) {
      return { allowed: false, reason: 'token_budget_exceeded', limit: COST_CONFIG.maxTokensPerMinute }
    }

    return { allowed: true }
  }

  canSpend(additionalCost = 0) {
    if (this.totalCost + additionalCost > COST_CONFIG.maxCostPerSession) {
      return { allowed: false, reason: 'session_budget_exceeded', limit: COST_CONFIG.maxCostPerSession }
    }

    if (this.totalCost + additionalCost > COST_CONFIG.maxCostPerDay) {
      return { allowed: false, reason: 'daily_budget_exceeded', limit: COST_CONFIG.maxCostPerDay }
    }

    return { allowed: true }
  }

  recordRequest(tokens = 0, cost = 0) {
    this.requestCount++
    this.tokenCount += tokens
    this.totalCost += cost

    if (!this.minuteRequests) this.minuteRequests = []
    this.minuteRequests.push(Date.now())

    // Cleanup old requests
    const minuteAgo = Date.now() - 60000
    this.minuteRequests = this.minuteRequests.filter(t => t > minuteAgo)
  }

  getStatus() {
    return {
      requests: {
        count: this.requestCount,
        limit: COST_CONFIG.maxRequestsPerSession,
        perMinute: this.minuteRequests?.length || 0,
        perMinuteLimit: COST_CONFIG.maxRequestsPerMinute,
      },
      tokens: {
        count: this.tokenCount,
        limit: COST_CONFIG.maxTokensPerMinute,
      },
      spend: {
        total: this.totalCost,
        sessionLimit: COST_CONFIG.maxCostPerSession,
        dailyLimit: COST_CONFIG.maxCostPerDay,
      },
      sessionDuration: Math.round((Date.now() - this.startTime) / 1000),
    }
  }
}

/**
 * Global cost tracker instance
 */
export const costTracker = new CostTracker()

/**
 * Check if request is allowed
 * @param {Object} options
 * @param {number} options.tokens - Estimated tokens for this request
 * @param {number} options.cost - Estimated cost in USD
 * @returns {Object} { allowed: boolean, reason?: string }
 */
export function canMakeRequest(options = {}) {
  const { tokens = 0, cost = 0 } = options

  const requestCheck = costTracker.canMakeRequest(tokens)
  if (!requestCheck.allowed) return requestCheck

  const spendCheck = costTracker.canSpend(cost)
  if (!spendCheck.allowed) return spendCheck

  return { allowed: true }
}

/**
 * Record a completed request
 * @param {Object} options
 * @param {number} options.tokens - Actual tokens used
 * @param {number} options.cost - Actual cost in USD
 */
export function recordRequest(options = {}) {
  const { tokens = 0, cost = 0 } = options
  costTracker.recordRequest(tokens, cost)
}

/**
 * Get current cost status
 */
export function getCostStatus() {
  return costTracker.getStatus()
}

/**
 * Reset cost tracker
 */
export function resetCostTracker() {
  costTracker.reset()
}

/**
 * Cost guard wrapper
 * @param {Function} fn - Async function to wrap
 * @param {Object} options - Cost estimation
 * @returns {Promise<any>}
 */
export async function withCostGuard(fn, options = {}) {
  const { estimatedTokens = 0, estimatedCost = 0 } = options

  const check = canMakeRequest({ tokens: estimatedTokens, cost: estimatedCost })
  if (!check.allowed) {
    throw new Error(`Cost guard blocked: ${check.reason}. ${check.limit ? `Limit: ${check.limit}` : ''}`)
  }

  try {
    const result = await fn()
    recordRequest({ tokens: estimatedTokens, cost: estimatedCost })
    return result
  } catch (error) {
    // Still record the attempt (failed requests still cost)
    recordRequest({ tokens: estimatedTokens * 0.1, cost: estimatedCost * 0.1 })
    throw error
  }
}

export default {
  COST_CONFIG,
  costTracker,
  canMakeRequest,
  recordRequest,
  getCostStatus,
  resetCostTracker,
  withCostGuard,
}