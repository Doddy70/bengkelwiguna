/**
 * Agent Workflow Utilities — Bengkel Wiguna
 * Fortification layer exports
 */

export { default as logger, logDebug, logInfo, logWarn, logError, logApiCall, logDecision } from './logger.js'
export { default as CircuitBreaker, circuitBreakerRegistry, CircuitState } from './circuit-breaker.js'
export { default as retry, withRetry, withRetryOrFallback, DEFAULT_RETRY_CONFIG } from './retry.js'
export { default as validator, ValidationError, isValidSlug, isValidId, validateSlug, validateId, validatePagination, validateSearchQuery } from './validator.js'
export { default as fetchFortified, fortifiedFetch, getCircuitBreakerStatus, resetCircuitBreakers, FORTIFIED_FETCH_CONFIG } from './fetch-fortified.js'
export { default as costControls, COST_CONFIG, canMakeRequest, recordRequest, getCostStatus, resetCostTracker, withCostGuard } from './cost-controls.js'

/**
 * Quick reference for using fortification utilities:
 *
 * ```javascript
 * import { logInfo, logError, withRetry, CircuitBreaker, validateSlug } from './utils/index.js'
 *
 * // Logging
 * logInfo('workflow', 'step', 'Message', { extra: 'data' })
 * logError('workflow', 'step', 'Message', error)
 *
 * // Retry with fallback
 * const data = await withRetryOrFallback(
 *   () => fetchData(),
 *   fallbackValue,
 *   { maxRetries: 3 }
 * )
 *
 * // Circuit breaker
 * const breaker = new CircuitBreaker({ failureThreshold: 5, cooldown: 60 })
 * if (breaker.canRequest()) {
 *   try {
 *     const result = await doSomething()
 *     breaker.recordSuccess()
 *   } catch (e) {
 *     breaker.recordFailure()
 *   }
 * }
 *
 * // Input validation
 * const result = validateSlug(slugInput)
 * if (!result.isValid) {
 *   throw new ValidationError(result.firstError.message, result.firstError.field)
 * }
 * ```
 */

export default {
  logger: require('./logger.js'),
  CircuitBreaker: require('./circuit-breaker.js'),
  retry: require('./retry.js'),
  validator: require('./validator.js'),
  fetchFortified: require('./fetch-fortified.js'),
}