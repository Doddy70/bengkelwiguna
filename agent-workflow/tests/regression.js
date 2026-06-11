/**
 * Regression Detection — Bengkel Wiguna Agent Workflow
 * Compares new results against baseline to detect quality regressions
 */

/**
 * Regression threshold (5% = 0.05)
 */
export const REGRESSION_THRESHOLD = 0.05

/**
 * Improvement threshold (5% = 0.05)
 */
export const IMPROVEMENT_THRESHOLD = 0.05

/**
 * Regression result object
 * @param {string} changeType - 'regression', 'improvement', or 'stable'
 * @param {number} delta - Score difference (new - baseline)
 * @param {number} baseline - Baseline score
 * @param {number} current - Current score
 * @param {Array} dimensionDeltas - Per-dimension changes
 */
export function regressionResult(changeType, delta, baseline, current, dimensionDeltas = []) {
  return {
    changeType, // 'regression', 'improvement', 'stable'
    delta, // Score difference
    baseline,
    current,
    dimensionDeltas,
    accepted: changeType !== 'regression',
    timestamp: new Date().toISOString(),
  }
}

/**
 * Check if score change is significant
 * @param {number} delta - Score difference
 * @param {number} threshold - Threshold to consider significant
 * @returns {boolean}
 */
function isSignificant(delta, threshold) {
  return Math.abs(delta) >= threshold
}

/**
 * Detect regression between baseline and current scores
 * @param {Object} baseline - Baseline quality report
 * @param {Object} current - Current quality report
 * @param {Object} options - Detection options
 * @returns {Object} - Regression result
 */
export function detectRegression(baseline, current, options = {}) {
  const {
    regressionThreshold = REGRESSION_THRESHOLD,
    improvementThreshold = IMPROVEMENT_THRESHOLD,
  } = options

  const baselineScore = baseline.result?.totalScore ?? baseline.totalScore
  const currentScore = current.result?.totalScore ?? current.totalScore
  const delta = currentScore - baselineScore

  // Check per-dimension changes
  const dimensionDeltas = []
  const baselineDimensions = baseline.result?.dimensionScores ?? {}
  const currentDimensions = current.result?.dimensionScores ?? {}

  for (const dimension of Object.keys(baselineDimensions)) {
    const bScore = baselineDimensions[dimension]?.raw ?? 0
    const cScore = currentDimensions[dimension]?.raw ?? 0
    const dDim = cScore - bScore

    if (dDim !== 0) {
      dimensionDeltas.push({
        dimension,
        baseline: bScore,
        current: cScore,
        delta: dDim,
        significant: isSignificant(dDim, regressionThreshold),
      })
    }
  }

  // Determine change type
  let changeType
  if (delta <= -regressionThreshold) {
    changeType = 'regression'
  } else if (delta >= improvementThreshold) {
    changeType = 'improvement'
  } else {
    changeType = 'stable'
  }

  return regressionResult(changeType, delta, baselineScore, currentScore, dimensionDeltas)
}

/**
 * Run regression test suite
 * @param {Object} baseline - Baseline results
 * @param {Array} currentTests - Current test results
 * @param {Object} options - Detection options
 * @returns {Object} - Regression report
 */
export function runRegressionSuite(baseline, currentTests, options = {}) {
  const results = []

  for (const current of currentTests) {
    // Find matching baseline test
    const baselineTest = baseline.tests?.find(t => t.testName === current.testName)

    if (baselineTest) {
      const regression = detectRegression(baselineTest, current, options)
      results.push({
        testName: current.testName,
        baselineScore: baselineTest.result?.totalScore ?? baselineTest.totalScore,
        currentScore: current.result?.totalScore ?? current.totalScore,
        regression,
      })
    } else {
      // New test, no regression check
      results.push({
        testName: current.testName,
        baselineScore: null,
        currentScore: current.result?.totalScore ?? current.totalScore,
        regression: null,
        note: 'New test, no baseline',
      })
    }
  }

  const totalRegressions = results.filter(r => r.regression?.changeType === 'regression').length
  const totalImprovements = results.filter(r => r.regression?.changeType === 'improvement').length

  return {
    tests: results,
    summary: {
      totalTests: results.length,
      regressions: totalRegressions,
      improvements: totalImprovements,
      stable: results.length - totalRegressions - totalImprovements,
      overallRegression: totalRegressions > 0,
    },
  }
}

/**
 * Save baseline to file (for persistence)
 * @param {Object} baseline - Baseline results
 * @param {string} filePath - Path to save
 */
export async function saveBaseline(baseline, filePath) {
  const data = JSON.stringify({
    timestamp: new Date().toISOString(),
    baseline,
  }, null, 2)

  // In browser/Node context, this would write to file
  // For now, return the data for manual saving
  return data
}

/**
 * Load baseline from file
 * @param {string} filePath - Path to load
 * @returns {Object} - Baseline results
 */
export async function loadBaseline(filePath) {
  // In browser/Node context, this would read from file
  // For now, return null (placeholder)
  return null
}

export default {
  REGRESSION_THRESHOLD,
  IMPROVEMENT_THRESHOLD,
  detectRegression,
  runRegressionSuite,
  saveBaseline,
  loadBaseline,
}