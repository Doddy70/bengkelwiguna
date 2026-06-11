/**
 * Circuit Breaker — Bengkel Wiguna Agent Workflow
 * Prevents cascading failures by stopping calls to failing services
 */

/**
 * Circuit breaker states
 */
export const CircuitState = {
  CLOSED: 'CLOSED',     // Normal operation
  OPEN: 'OPEN',         // Failing, reject calls
  HALF_OPEN: 'HALF_OPEN', // Testing if service recovered
}

/**
 * Circuit Breaker class
 * Tracks failures and opens circuit when threshold is reached
 */
export class CircuitBreaker {
  /**
   * @param {Object} config
   * @param {number} config.failureThreshold - Consecutive failures before opening (default: 5)
   * @param {number} config.successThreshold - Successes needed to close from half-open (default: 2)
   * @param {number} config.cooldown - Seconds before trying again (default: 60)
   * @param {string} config.name - Circuit name for logging
   */
  constructor(config = {}) {
    this.failureThreshold = config.failureThreshold || 5
    this.successThreshold = config.successThreshold || 2
    this.cooldown = (config.cooldown || 60) * 1000 // Convert to ms
    this.name = config.name || 'default'

    this.failures = 0
    this.successes = 0
    this.state = CircuitState.CLOSED
    this.lastFailureTime = null
    this.lastStateChange = Date.now()
  }

  /**
   * Check if request is allowed
   * @returns {boolean}
   */
  canRequest() {
    if (this.state === CircuitState.CLOSED) {
      return true
    }

    if (this.state === CircuitState.OPEN) {
      // Check if cooldown has passed
      if (Date.now() - this.lastFailureTime >= this.cooldown) {
        this.state = CircuitState.HALF_OPEN
        this.lastStateChange = Date.now()
        return true
      }
      return false
    }

    if (this.state === CircuitState.HALF_OPEN) {
      return true
    }

    return false
  }

  /**
   * Record a successful call
   */
  recordSuccess() {
    if (this.state === CircuitState.HALF_OPEN) {
      this.successes++
      if (this.successes >= this.successThreshold) {
        this.state = CircuitState.CLOSED
        this.failures = 0
        this.successes = 0
        this.lastStateChange = Date.now()
      }
    } else {
      // Reset failures on success in CLOSED state
      this.failures = 0
    }
  }

  /**
   * Record a failed call
   */
  recordFailure() {
    this.lastFailureTime = Date.now()

    if (this.state === CircuitState.HALF_OPEN) {
      // Immediately open on failure in half-open
      this.state = CircuitState.OPEN
      this.lastStateChange = Date.now()
      this.successes = 0
    } else {
      this.failures++
      if (this.failures >= this.failureThreshold) {
        this.state = CircuitState.OPEN
        this.lastStateChange = Date.now()
      }
    }
  }

  /**
   * Get current status
   * @returns {Object}
   */
  getStatus() {
    return {
      name: this.name,
      state: this.state,
      failures: this.failures,
      successes: this.successes,
      lastFailureTime: this.lastFailureTime,
      cooldownRemaining: this.state === CircuitState.OPEN
        ? Math.max(0, this.cooldown - (Date.now() - this.lastFailureTime))
        : 0,
    }
  }

  /**
   * Force reset the circuit
   */
  reset() {
    this.state = CircuitState.CLOSED
    this.failures = 0
    this.successes = 0
    this.lastFailureTime = null
    this.lastStateChange = Date.now()
  }
}

/**
 * Circuit breaker registry for multiple endpoints
 */
class CircuitBreakerRegistry {
  static breakers = {}

  static get(name, config = {}) {
    if (!this.breakers[name]) {
      this.breakers[name] = new CircuitBreaker({ ...config, name })
    }
    return this.breakers[name]
  }

  static resetAll() {
    Object.values(this.breakers).forEach(b => b.reset())
  }

  static getAllStatus() {
    return Object.entries(this.breakers).map(([name, breaker]) => ({
      name,
      ...breaker.getStatus(),
    }))
  }
}

export const circuitBreakerRegistry = CircuitBreakerRegistry

export default CircuitBreaker