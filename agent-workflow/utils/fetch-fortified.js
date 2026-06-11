/**
 * Fortified Fetch — Bengkel Wiguna Agent Workflow
 * Combines all fortification layers: validation, retry, circuit breaker, logging
 */

import { withRetry, withRetryOrFallback, DEFAULT_RETRY_CONFIG } from './retry.js'
import { CircuitBreaker, circuitBreakerRegistry } from './circuit-breaker.js'
import { logError, logApiCall, logWarn } from './logger.js'
import { validateSlug, validateId, ValidationError } from './validator.js'

/**
 * Fortified fetch configuration
 */
export const FORTIFIED_FETCH_CONFIG = {
  timeout: 30000,           // 30 seconds
  maxRetries: 3,
  circuitBreakerThreshold: 5,
  circuitBreakerCooldown: 60, // seconds
  fallbackEnabled: true,
  logEnabled: true,
}

// Circuit breakers per endpoint type
const circuitBreakers = {
  bw_api: circuitBreakerRegistry.get('bw_api', {
    failureThreshold: 5,
    cooldown: 60,
    name: 'bw_api',
  }),
  wp_api: circuitBreakerRegistry.get('wp_api', {
    failureThreshold: 5,
    cooldown: 60,
    name: 'wp_api',
  }),
  abilities_api: circuitBreakerRegistry.get('abilities_api', {
    failureThreshold: 3,
    cooldown: 120,
    name: 'abilities_api',
  }),
}

/**
 * Check circuit breaker before request
 * @param {string} type - Endpoint type
 * @returns {Object} { allowed: boolean, status: Object }
 */
function checkCircuit(type) {
  const breaker = circuitBreakers[type]
  if (!breaker) return { allowed: true, status: null }

  const allowed = breaker.canRequest()
  return {
    allowed,
    status: breaker.getStatus(),
  }
}

/**
 * Record result in circuit breaker
 * @param {string} type - Endpoint type
 * @param {boolean} success - Whether request succeeded
 */
function recordResult(type, success) {
  const breaker = circuitBreakers[type]
  if (breaker) {
    if (success) {
      breaker.recordSuccess()
    } else {
      breaker.recordFailure()
    }
  }
}

/**
 * Fortified fetch with all fortification layers
 * @param {Object} options
 * @returns {Promise<Object|null>}
 */
export async function fortifiedFetch(options) {
  const {
    url,
    method = 'GET',
    options: fetchOptions = {},
    timeout = FORTIFIED_FETCH_CONFIG.timeout,
    retries = FORTIFIED_FETCH_CONFIG.maxRetries,
    endpointType = 'wp_api',
    label = 'fetch',
    fallback = null,
  } = options

  const startTime = Date.now()

  // Check circuit breaker
  const { allowed, status } = checkCircuit(endpointType)
  if (!allowed) {
    logWarn('workflow', 'circuit_breaker', `Circuit open for ${endpointType}. Skipping request.`, { status })
    return fallback
  }

  // Perform fetch with retry
  const fetchFn = async () => {
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), timeout)

    try {
      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      })

      clearTimeout(timeoutId)

      if (!response.ok) {
        // Create error with response data
        const error = new Error(`HTTP ${response.status}: ${response.statusText}`)
        error.status = response.status
        error.response = response
        throw error
      }

      return await response.json()
    } finally {
      clearTimeout(timeoutId)
    }
  }

  try {
    let result

    if (retries > 0) {
      if (fallback !== null) {
        result = await withRetryOrFallback(fetchFn, fallback, { maxRetries: retries })
      } else {
        result = await withRetry(fetchFn, { maxRetries: retries }, label)
      }
    } else {
      result = await fetchFn()
    }

    // Record success in circuit breaker
    recordResult(endpointType, true)

    // Log successful API call
    if (FORTIFIED_FETCH_CONFIG.logEnabled) {
      logApiCall('workflow', url, {
        method,
        status: 200,
        latency_ms: Date.now() - startTime,
      })
    }

    return result
  } catch (error) {
    // Record failure in circuit breaker
    recordResult(endpointType, false)

    // Log error
    if (FORTIFIED_FETCH_CONFIG.logEnabled) {
      logError('workflow', label, `Fetch failed: ${url}`, error, {
        status: error.status,
        latency_ms: Date.now() - startTime,
      })
    }

    // Return fallback if enabled
    if (fallback !== null && fallback !== undefined) {
      logWarn('workflow', label, `Returning fallback due to fetch failure`)
      return fallback
    }

    // Return null on error (standard error handling pattern)
    return null
  }
}

/**
 * Get circuit breaker status for all endpoints
 * @returns {Array}
 */
export function getCircuitBreakerStatus() {
  return circuitBreakerRegistry.getAllStatus()
}

/**
 * Reset all circuit breakers
 */
export function resetCircuitBreakers() {
  circuitBreakerRegistry.resetAll()
}

export default {
  fortifiedFetch,
  getCircuitBreakerStatus,
  resetCircuitBreakers,
  FORTIFIED_FETCH_CONFIG,
}