/**
 * Cost Tracking Middleware
 * Monitors Claude API usage and enforces budget limits
 */

import { costTracker } from '../lib/claude'

const BUDGET_WARNING_THRESHOLD = 0.8 // Warn at 80% of budget
const BUDGET_HARD_LIMIT = 1.0 // Block at 100% of budget

/**
 * Check if request is within budget
 */
export function checkBudget() {
  if (!costTracker) {
    return { allowed: true, stats: null, budget: 50 }
  }

  const stats = costTracker.getStats()
  const budget = parseFloat(process.env.CLAUDE_MONTHLY_BUDGET_USD || '50')

  const cost = parseFloat(stats.estimatedCost.replace('$', ''))
  const usagePercent = cost / budget

  if (usagePercent >= BUDGET_HARD_LIMIT) {
    return {
      allowed: false,
      reason: 'Monthly budget exceeded',
      stats,
      budget,
    }
  }

  if (usagePercent >= BUDGET_WARNING_THRESHOLD) {
    console.warn(`⚠️  Claude budget warning: ${(usagePercent * 100).toFixed(1)}% used (${stats.estimatedCost} of $${budget})`)
  }

  return {
    allowed: true,
    stats,
    budget,
    usagePercent,
  }
}

import { NextResponse } from 'next/server'

/**
 * Middleware for App Router API routes
 */
export function withCostTracking(handler) {
  return async (req, context) => {
    const budgetCheck = checkBudget()

    if (!budgetCheck.allowed) {
      return NextResponse.json({
        error: 'Claude service temporarily unavailable',
        reason: budgetCheck.reason,
        message: 'Monthly API budget has been exceeded',
      }, {
        status: 429,
        headers: { 'X-Claude-Available': 'false' }
      })
    }

    // Execute handler and track cost
    const startTime = Date.now()
    const response = await handler(req, context)
    const duration = Date.now() - startTime

    // Log usage
    console.log(`[Claude] Request completed in ${duration}ms`)

    if (response instanceof Response) {
      response.headers.set('X-Claude-Available', 'true')
    }

    return response
  }
}

export default withCostTracking
