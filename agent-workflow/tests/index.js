/**
 * Test Suite Index — Bengkel Wiguna Agent Workflow
 * Unified exports for all testing components
 */

export { QUALITY_DIMENSIONS, calculateWeightedScore, getGrade, qualityReport } from './quality-criteria.js'
export { runTest, runTestSuite, evaluateSingleFetch, evaluateListFetch, evaluatePaginatedFetch, evaluateSlugValidation, evaluatePaginationValidation, evaluateApiResponse } from './validators/rule-evaluator.js'
export { withSelfCorrection, generateFeedback, correctFunctionOutput, MAX_CORRECTION_ATTEMPTS } from './self-correction.js'
export { detectRegression, runRegressionSuite, REGRESSION_THRESHOLD, IMPROVEMENT_THRESHOLD } from './regression.js'
export { runAllTests, runValidatorTests, runApiSimulationTests, printTestReport } from './test-runner.js'

/**
 * Quick test runner
 * Run all tests and return summary
 */
export async function quickTest() {
  const { runAllTests, printTestReport } = await import('./test-runner.js')
  const report = runAllTests()
  printTestReport(report)
  return report
}

/**
 * Run regression test
 * Compare current results against baseline
 */
export async function regressionTest(baseline) {
  const { runAllTests } = await import('./test-runner.js')
  const { runRegressionSuite } = await import('./regression.js')

  const current = runAllTests()
  const results = runRegressionSuite(baseline, current.tests)

  return {
    baseline,
    current,
    regression: results,
  }
}

export default {
  quickTest,
  regressionTest,
}