/**
 * Retry with Backoff — Bengkel Wiguna Agent Workflow
 * Handles transient failures with exponential backoff
 */

/**
 * Default retry configuration
 */
export const DEFAULT_RETRY_CONFIG = {
  maxRetries: 3,
  initialDelay: 1000,        // 1 second
  backoffMultiplier: 2,
  maxDelay: 30000,           // 30 seconds max
  retryableStatuses: [429, 500, 502, 503, 504],
  nonRetryableStatuses: [400, 401, 403, 404],
  retryableErrors: ['ECONNRESET', 'ETIMEDOUT', 'ENOTFOUND', 'ENETUNREACH', 'TIMEOUT'],
}

/**
 * Sleep utility with abort support
 * @param {number} ms - Milliseconds to sleep
 * @param {AbortSignal} signal - Abort signal
 * @returns {Promise<void>}
 */
async function sleep(ms, signal = null) {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(resolve, ms)
    if (signal) {
      signal.addEventListener('abort', () => {
        clearTimeout(timeoutId)
        reject(new Error('Aborted'))
      })
    }
  })
}

/**
 * Calculate delay with exponential backoff and jitter
 * @param {number} attempt - Current attempt number (1-based)
 * @param {Object} config - Retry configuration
 * @returns {number} Delay in milliseconds
 */
function calculateDelay(attempt, config) {
  const baseDelay = config.initialDelay * Math.pow(config.backoffMultiplier, attempt - 1)
  // Add jitter (±20%) to prevent thundering herd
  const jitter = baseDelay * 0.2 * (Math.random() * 2 - 1)
  return Math.min(baseDelay + jitter, config.maxDelay)
}

/**
 * Check if error is retryable
 * @param {Error} error - Error object
 * @param {number} status - HTTP status code
 * @param {Object} config - Retry configuration
 * @returns {boolean}
 */
function isRetryable(error, status, config) {
  // Check status code
  if (status) {
    if (config.nonRetryableStatuses.includes(status)) return false
    if (config.retryableStatuses.includes(status)) return true
  }

  // Check error code for network errors
  if (error?.code && config.retryableErrors.includes(error.code)) {
    return true
  }

  // Retry on timeout
  if (error?.message?.includes('timeout') || error?.name === 'TimeoutError') {
    return true
  }

  return false
}

/**
 * Retry wrapper with exponential backoff
 * @param {Function} fn - Async function to retry
 * @param {Object} config - Retry configuration
 * @param {string} label - Label for logging
 * @returns {Promise<any>}
 */
export async function withRetry(fn, config = {}, label = 'operation') {
  const retryConfig = { ...DEFAULT_RETRY_CONFIG, ...config }
  let lastError = null

  for (let attempt = 1; attempt <= retryConfig.maxRetries + 1; attempt++) {
    try {
      const result = await fn()
      return result
    } catch (error) {
      lastError = error
      const status = error?.response?.status || error?.status

      // Check if we should retry
      if (attempt <= retryConfig.maxRetries && isRetryable(error, status, retryConfig)) {
        const delay = calculateDelay(attempt, retryConfig)
        console.log(`[Retry] ${label} attempt ${attempt}/${retryConfig.maxRetries + 1} failed (${status || error.code || error.message}). Retrying in ${Math.round(delay)}ms...`)
        await sleep(delay)
      } else {
        // No more retries or not retryable
        break
      }
    }
  }

  // All retries exhausted
  throw lastError
}

/**
 * Retry wrapper that returns fallback on failure
 * @param {Function} fn - Async function to retry
 * @param {*} fallback - Fallback value
 * @param {Object} config - Retry configuration
 * @returns {Promise<*>}
 */
export async function withRetryOrFallback(fn, fallback, config = {}) {
  try {
    return await withRetry(fn, config, 'fallback_operation')
  } catch (error) {
    console.error(`[Fallback] All retries exhausted. Returning fallback.`, error.message)
    return fallback
  }
}

export default {
  withRetry,
  withRetryOrFallback,
  DEFAULT_RETRY_CONFIG,
}