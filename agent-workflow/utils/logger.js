/**
 * Structured Logger — Bengkel Wiguna Agent Workflow
 * Formats: JSON structured logs for audit trail
 */

const LOG_DIR = 'agent-workflow/logs'

/**
 * Log levels
 */
const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARN: 2,
  ERROR: 3,
}

/**
 * Get current timestamp in ISO format
 */
function getTimestamp() {
  return new Date().toISOString()
}

/**
 * Log entry structure
 */
function createLogEntry(level, workflow_id, step, message, details = {}) {
  return {
    timestamp: getTimestamp(),
    workflow_id: workflow_id || 'unknown',
    step: step || 'init',
    level: level,
    message: message,
    ...details,
  }
}

/**
 * Output log to console (structured JSON for production)
 */
function outputLog(entry) {
  // In production: structured JSON for log aggregation
  if (process.env.NODE_ENV === 'production') {
    console.log(JSON.stringify(entry))
  } else {
    // In development: human-readable format
    const color = {
      DEBUG: '\x1b[36m',   // cyan
      INFO: '\x1b[32m',   // green
      WARN: '\x1b[33m',   // yellow
      ERROR: '\x1b[31m',  // red
    }[entry.level] || ''
    const reset = '\x1b[0m'
    console.log(`${color}[${entry.timestamp}] [${entry.level.toUpperCase()}]${reset} [${entry.workflow_id}] ${entry.step}: ${entry.message}`)
    if (entry.error) {
      console.log(`  └─ Error: ${entry.error}`)
    }
    if (entry.details && Object.keys(entry.details).length > 0) {
      console.log(`  └─ Details: ${JSON.stringify(entry.details)}`)
    }
  }
}

/**
 * Log debug message
 * @param {string} workflow_id - Workflow identifier
 * @param {string} step - Current step
 * @param {string} message - Log message
 * @param {Object} details - Additional details
 */
export function logDebug(workflow_id, step, message, details = {}) {
  const entry = createLogEntry('DEBUG', workflow_id, step, message, details)
  outputLog(entry)
}

/**
 * Log info message
 * @param {string} workflow_id - Workflow identifier
 * @param {string} step - Current step
 * @param {string} message - Log message
 * @param {Object} details - Additional details
 */
export function logInfo(workflow_id, step, message, details = {}) {
  const entry = createLogEntry('INFO', workflow_id, step, message, details)
  outputLog(entry)
}

/**
 * Log warning message
 * @param {string} workflow_id - Workflow identifier
 * @param {string} step - Current step
 * @param {string} message - Log message
 * @param {Object} details - Additional details
 */
export function logWarn(workflow_id, step, message, details = {}) {
  const entry = createLogEntry('WARN', workflow_id, step, message, details)
  outputLog(entry)
}

/**
 * Log error message
 * @param {string} workflow_id - Workflow identifier
 * @param {string} step - Current step
 * @param {string} message - Log message
 * @param {Error|string} error - Error object or message
 * @param {Object} details - Additional details
 */
export function logError(workflow_id, step, message, error = null, details = {}) {
  const entry = createLogEntry('ERROR', workflow_id, step, message, {
    ...details,
    error: error instanceof Error ? error.message : error,
    stack: error instanceof Error ? error.stack : undefined,
  })
  outputLog(entry)
}

/**
 * Log API call
 * @param {string} workflow_id - Workflow identifier
 * @param {string} endpoint - API endpoint
 * @param {Object} stats - Call stats (latency, status, etc.)
 */
export function logApiCall(workflow_id, endpoint, stats = {}) {
  const entry = createLogEntry('INFO', workflow_id, 'api_call', `API Request: ${endpoint}`, {
    method: stats.method || 'GET',
    status: stats.status || 'unknown',
    latency_ms: stats.latency_ms || 0,
    retry_count: stats.retry_count || 0,
    cached: stats.cached || false,
  })
  outputLog(entry)
}

/**
 * Log agent decision
 * @param {string} workflow_id - Workflow identifier
 * @param {string} decision - What was decided
 * @param {string} reason - Why this decision was made
 * @param {Object} context - Decision context
 */
export function logDecision(workflow_id, decision, reason, context = {}) {
  const entry = createLogEntry('INFO', workflow_id, 'decision', decision, {
    reason,
    ...context,
  })
  outputLog(entry)
}

export default {
  logDebug,
  logInfo,
  logWarn,
  logError,
  logApiCall,
  logDecision,
}