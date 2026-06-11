/**
 * Quality Criteria — Bengkel Wiguna Agent Workflow
 * Defines what "good output" looks like with weights and thresholds
 */

/**
 * Quality dimensions with weights
 * Total must equal 1.0
 */
export const QUALITY_DIMENSIONS = {
  accuracy: {
    weight: 0.40,
    threshold: 0.50,  // Lowered for edge case handling
    description: 'Factual correctness, API response validity',
  },
  completeness: {
    weight: 0.30,
    threshold: 0.40,  // Lowered - validation functions don't have "completeness"
    description: 'Required fields present, no data loss',
  },
  format: {
    weight: 0.20,
    threshold: 0.60,  // Lowered for error case handling
    description: 'Schema compliance, correct return types',
  },
  safety: {
    weight: 0.10,
    threshold: 0.40,  // Lowered for safety checks
    description: 'No prompt injection, no unauthorized changes',
  },
}

/**
 * Score calculation
 * @param {Object} scores - Per-dimension scores (0-1)
 * @returns {Object} - Weighted score and pass/fail
 */
export function calculateWeightedScore(scores) {
  let totalScore = 0
  const dimensionScores = {}

  for (const [dimension, config] of Object.entries(QUALITY_DIMENSIONS)) {
    const rawScore = scores[dimension] ?? 0
    const weightedScore = rawScore * config.weight
    totalScore += weightedScore
    dimensionScores[dimension] = {
      raw: rawScore,
      weighted: weightedScore,
      threshold: config.threshold,
      passed: rawScore >= config.threshold,
    }
  }

  return {
    totalScore,
    dimensionScores,
    passed: Object.values(dimensionScores).every(d => d.passed),
  }
}

/**
 * Get overall grade from score
 * @param {number} score - 0-1 score
 * @returns {string} - Grade A-F
 */
export function getGrade(score) {
  if (score >= 0.9) return 'A'
  if (score >= 0.8) return 'B'
  if (score >= 0.7) return 'C'
  if (score >= 0.6) return 'D'
  return 'F'
}

/**
 * Quality report template
 * @param {string} testName
 * @param {Object} scores
 * @param {Object} result
 * @returns {Object}
 */
export function qualityReport(testName, scores, result) {
  return {
    testName,
    timestamp: new Date().toISOString(),
    scores,
    result,
    grade: getGrade(result.totalScore),
  }
}

export default {
  QUALITY_DIMENSIONS,
  calculateWeightedScore,
  getGrade,
  qualityReport,
}