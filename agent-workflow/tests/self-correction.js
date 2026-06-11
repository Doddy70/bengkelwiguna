/**
 * Self-Correction Loop — Bengkel Wiguna Agent Workflow
 * Implements the correction loop: generate → evaluate → score → retry with feedback
 */

/**
 * Max attempts for correction loop
 */
export const MAX_CORRECTION_ATTEMPTS = 3

/**
 * Correction result object
 */
export function correctionResult(output, score, attempts, corrected = false) {
  return {
    output,
    score,
    attempts,
    corrected,
    success: score >= 0.7, // Threshold for acceptable quality
  }
}

/**
 * Generate correction feedback
 * @param {Object} result - Quality report result
 * @returns {string} - Feedback string for retry
 */
export function generateFeedback(result) {
  const failedDimensions = Object.entries(result.dimensionScores)
    .filter(([, d]) => !d.passed)
    .map(([dim, d]) => `${dim} (score: ${d.raw.toFixed(2)}, threshold: ${d.threshold})`)

  if (failedDimensions.length === 0) {
    return 'Output quality acceptable.'
  }

  return `Quality issues detected in: ${failedDimensions.join('; ')}. Please correct and regenerate.`
}

/**
 * Self-correction wrapper
 * @param {Function} generator - Async function that generates output
 * @param {Function} evaluator - Function that evaluates output and returns quality scores
 * @param {Object} options - Correction loop options
 * @returns {Promise<Object>} - Final result with correction history
 */
export async function withSelfCorrection(generator, evaluator, options = {}) {
  const {
    maxAttempts = MAX_CORRECTION_ATTEMPTS,
    threshold = 0.7,
    onAttempt = null, // Callback for each attempt
  } = options

  let lastOutput = null
  let lastScore = null
  let attempts = 0
  let feedback = ''

  while (attempts < maxAttempts) {
    attempts++

    // Generate with feedback (if not first attempt)
    const input = feedback ? { feedback, attempt: attempts } : {}
    const output = await generator(input)

    // Evaluate
    const scores = evaluator(output)
    const result = {
      totalScore: Object.entries(scores).reduce((sum, [dim, score]) => {
        const weight = {
          accuracy: 0.4,
          completeness: 0.3,
          format: 0.2,
          safety: 0.1,
        }[dim] || 0.25
        return sum + score * weight
      }, 0),
      dimensionScores: scores,
      passed: Object.values(scores).every((s, i) => s >= [0.8, 0.7, 0.9, 0.6][i]),
    }

    lastOutput = output
    lastScore = result.totalScore

    // Callback
    if (onAttempt) {
      onAttempt({ attempt: attempts, output, score: result.totalScore, passed: result.passed })
    }

    // Check if acceptable
    if (result.totalScore >= threshold) {
      return correctionResult(output, result.totalScore, attempts, attempts > 1)
    }

    // Generate feedback for next attempt
    feedback = generateFeedback(result)
  }

  // Max attempts reached, return best effort
  return correctionResult(lastOutput, lastScore, attempts, attempts > 1)
}

/**
 * Simple correction loop for function outputs
 * @param {Function} fn - Async function to correct
 * @param {Function} validator - Validation function (returns {isValid, errors})
 * @param {Object} options - Options
 * @returns {Promise<Object>} - Result with validation
 */
export async function correctFunctionOutput(fn, validator, options = {}) {
  const { maxAttempts = 3 } = options

  let attempts = 0
  let lastError = null

  while (attempts < maxAttempts) {
    attempts++

    try {
      const output = await fn()
      const validation = validator(output)

      if (validation.isValid) {
        return {
          success: true,
          output,
          attempts,
          corrected: attempts > 1,
        }
      }

      lastError = validation.errors
    } catch (error) {
      lastError = error
    }
  }

  return {
    success: false,
    output: null,
    attempts,
    corrected: false,
    error: lastError,
  }
}

export default {
  MAX_CORRECTION_ATTEMPTS,
  withSelfCorrection,
  generateFeedback,
  correctFunctionOutput,
  correctionResult,
}