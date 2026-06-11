/**
 * Continuous Monitor — Bengkel Wiguna Agent Workflow
 * Tracks quality scores over time and alerts on trends
 */

/**
 * Monitor configuration
 */
export const MONITOR_CONFIG = {
  sampleRate: 0.05, // 5% of outputs
  alertThreshold: 0.1, // Alert if score drops 10%
  windowSize: 100, // Rolling window of last N samples
  checkInterval: 60000, // Check every minute (in production)
}

/**
 * Quality score record
 */
export function scoreRecord(testName, score, metadata = {}) {
  return {
    testName,
    score,
    timestamp: new Date().toISOString(),
    ...metadata,
  }
}

/**
 * Rolling statistics
 */
class RollingStats {
  constructor(windowSize = 100) {
    this.windowSize = windowSize
    this.scores = []
  }

  add(score) {
    this.scores.push(score)
    if (this.scores.length > this.windowSize) {
      this.scores.shift()
    }
  }

  mean() {
    if (this.scores.length === 0) return 0
    return this.scores.reduce((a, b) => a + b, 0) / this.scores.length
  }

  min() {
    if (this.scores.length === 0) return 0
    return Math.min(...this.scores)
  }

  max() {
    if (this.scores.length === 0) return 0
    return Math.max(...this.scores)
  }

  trend() {
    if (this.scores.length < 10) return 'insufficient_data'
    const recent = this.scores.slice(-10)
    const older = this.scores.slice(-20, -10)
    if (older.length === 0) return 'insufficient_data'

    const recentMean = recent.reduce((a, b) => a + b, 0) / recent.length
    const olderMean = older.reduce((a, b) => a + b, 0) / older.length

    if (recentMean - olderMean > 0.05) return 'improving'
    if (olderMean - recentMean > 0.05) return 'declining'
    return 'stable'
  }
}

/**
 * Quality monitor class
 */
export class QualityMonitor {
  constructor(config = {}) {
    this.config = { ...MONITOR_CONFIG, ...config }
    this.stats = new Map() // testName -> RollingStats
    this.alerts = []
  }

  /**
   * Record a quality score
   * @param {string} testName
   * @param {number} score - 0-1
   * @param {Object} metadata
   */
  record(testName, score, metadata = {}) {
    if (!this.stats.has(testName)) {
      this.stats.set(testName, new RollingStats(this.config.windowSize))
    }

    const stats = this.stats.get(testName)
    stats.add(score)

    // Check for alert conditions
    const trend = stats.trend()
    if (trend === 'declining') {
      this.alerts.push({
        type: 'quality_decline',
        testName,
        currentScore: score,
        meanScore: stats.mean(),
        trend,
        timestamp: new Date().toISOString(),
      })
    }

    return {
      testName,
      score,
      stats: {
        mean: stats.mean(),
        min: stats.min(),
        max: stats.max(),
        trend: stats.trend(),
      },
    }
  }

  /**
   * Get status for all monitored tests
   * @returns {Array}
   */
  getStatus() {
    return Array.from(this.stats.entries()).map(([testName, stats]) => ({
      testName,
      mean: stats.mean(),
      min: stats.min(),
      max: stats.max(),
      trend: stats.trend(),
      samples: stats.scores.length,
    }))
  }

  /**
   * Get recent alerts
   * @param {number} limit - Max alerts to return
   * @returns {Array}
   */
  getAlerts(limit = 10) {
    return this.alerts.slice(-limit)
  }

  /**
   * Clear alerts
   */
  clearAlerts() {
    this.alerts = []
  }

  /**
   * Export monitoring data
   * @returns {Object}
   */
  export() {
    return {
      timestamp: new Date().toISOString(),
      status: this.getStatus(),
      alerts: this.getAlerts(),
      config: this.config,
    }
  }
}

/**
 * Default monitor instance
 */
export const defaultMonitor = new QualityMonitor()

/**
 * Quick record helper
 * @param {string} testName
 * @param {number} score
 */
export function recordScore(testName, score) {
  return defaultMonitor.record(testName, score)
}

/**
 * Get monitor status
 */
export function getMonitorStatus() {
  return defaultMonitor.getStatus()
}

export default {
  QualityMonitor,
  RollingStats,
  recordScore,
  getMonitorStatus,
  MONITOR_CONFIG,
}