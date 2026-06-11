/**
 * Resilience Utility: withRetry
 * Standardized retries with exponential backoff for asynchronous operations.
 * 
 * Pattern: extract-patterns.md -> Resilience (Fortify) Wrapper
 */

async function withRetry(fn, opts = {}) {
  const {
    maxRetries = 3,
    initialDelay = 1000,
    backoffMultiplier = 2,
    timeoutMs = 30000,
    retryableErrors = [] // If empty, all errors are retried
  } = opts;

  let lastError;
  let delay = initialDelay;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      // Create a promise that rejects after timeoutMs
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Operation timed out')), timeoutMs);
      });

      // Race the actual function against the timeout
      return await Promise.race([fn(), timeoutPromise]);
    } catch (err) {
      lastError = err;

      // Check if error is retryable
      const isRetryable = retryableErrors.length === 0 || 
                          retryableErrors.some(e => err.message.includes(e) || err.code === e);

      if (!isRetryable || attempt === maxRetries) {
        throw lastError;
      }

      console.warn(`[withRetry] Attempt ${attempt} failed: ${err.message}. Retrying in ${delay}ms...`);
      
      await new Promise(resolve => setTimeout(resolve, delay));
      delay *= backoffMultiplier;
    }
  }
}

module.exports = { withRetry };
