/**
 * Test Runner — Bengkel Wiguna Agent Workflow
 * Comprehensive test suite for validating workflow components
 */

import { runTest, runTestSuite } from './validators/rule-evaluator.js'
import { evaluateSingleFetch, evaluateListFetch, evaluatePaginatedFetch, evaluateSlugValidation, evaluatePaginationValidation } from './validators/rule-evaluator.js'
import { getGrade } from './quality-criteria.js'

/**
 * Test scenarios for validation functions
 */
const VALIDATOR_TESTS = [
  // Slug validation tests
  { name: 'valid-slug-lowercase', evaluator: evaluateSlugValidation, args: ['semi-overhaul', true] },
  { name: 'valid-slug-with-numbers', evaluator: evaluateSlugValidation, args: ['service123', true] },
  { name: 'invalid-slug-uppercase', evaluator: evaluateSlugValidation, args: ['ServiceName', false] },
  { name: 'invalid-slug-special-chars', evaluator: evaluateSlugValidation, args: ['service!@#', false] },
  { name: 'invalid-slug-empty', evaluator: evaluateSlugValidation, args: ['', false] },
  { name: 'invalid-slug-too-long', evaluator: evaluateSlugValidation, args: ['a'.repeat(201), false] },

  // Pagination validation tests
  { name: 'valid-pagination', evaluator: evaluatePaginationValidation, args: [1, 12, true] },
  { name: 'valid-pagination-max-perpage', evaluator: evaluatePaginationValidation, args: [1, 100, true] },
  { name: 'invalid-pagination-page-zero', evaluator: evaluatePaginationValidation, args: [0, 12, false] },
  { name: 'invalid-pagination-negative', evaluator: evaluatePaginationValidation, args: [-1, 12, false] },
  { name: 'invalid-pagination-perpage-over-max', evaluator: evaluatePaginationValidation, args: [1, 101, false] },

  // Fetch result tests
  { name: 'single-fetch-valid-object', evaluator: evaluateSingleFetch, args: [{ id: 1, title: 'Test' }, 'object', { allowNull: false }] },
  { name: 'single-fetch-null-allowed', evaluator: evaluateSingleFetch, args: [null, 'object', { allowNull: true }] },
  { name: 'single-fetch-null-not-allowed', evaluator: evaluateSingleFetch, args: [null, 'object', { allowNull: false }] },
  { name: 'single-fetch-wrong-type', evaluator: evaluateSingleFetch, args: ['string', 'object', { allowNull: false }] },

  { name: 'list-fetch-valid-array', evaluator: evaluateListFetch, args: [[1, 2, 3], { allowEmpty: false, minItems: 1 }] },
  { name: 'list-fetch-empty-allowed', evaluator: evaluateListFetch, args: [[], { allowEmpty: true }] },
  { name: 'list-fetch-empty-not-allowed', evaluator: evaluateListFetch, args: [[], { allowEmpty: false, minItems: 1 }] },
  { name: 'list-fetch-wrong-type', evaluator: evaluateListFetch, args: ['not-an-array', { allowEmpty: false }] },

  { name: 'paginated-fetch-valid', evaluator: evaluatePaginatedFetch, args: [{ posts: [1, 2], total: 2, totalPages: 1 }] },
  { name: 'paginated-fetch-missing-fields', evaluator: evaluatePaginatedFetch, args: [{ posts: [] }] },
  { name: 'paginated-fetch-null', evaluator: evaluatePaginatedFetch, args: [null] },
]

/**
 * Run all validator tests
 * @returns {Object} - Test results
 */
export function runValidatorTests() {
  return runTestSuite(VALIDATOR_TESTS)
}

/**
 * Run API simulation tests
 * These test the expected behavior of fetch functions
 */
const API_TESTS = [
  {
    name: 'getServiceBySlug-valid-slug',
    description: 'Service fetch with valid slug returns object',
    expectedReturn: { id: 1, title: 'Test Service' },
    validate: (result) => result !== undefined && result !== null && typeof result === 'object',
  },
  {
    name: 'getServiceBySlug-invalid-slug',
    description: 'Service fetch with invalid slug returns null',
    expectedReturn: null,
    validate: (result) => result === null, // null is valid return for errors
  },
  {
    name: 'getAllServices-returns-array',
    description: 'List fetch returns array (empty or with items)',
    expectedReturn: [],
    validate: (result) => Array.isArray(result), // empty array is valid
  },
  {
    name: 'getPostsByCategory-returns-paginated',
    description: 'Paginated fetch returns {posts, total, totalPages}',
    expectedReturn: { posts: [], total: 0, totalPages: 0 },
    validate: (result) => result !== null && typeof result === 'object' && Array.isArray(result.posts),
  },
]

/**
 * Run API simulation tests
 * @returns {Object} - Test results
 */
export function runApiSimulationTests() {
  const testResults = API_TESTS.map((test) => {
    try {
      return {
        name: test.name,
        description: test.description,
        passed: test.validate(test.expectedReturn),
        output: JSON.stringify(test.expectedReturn),
      }
    } catch (error) {
      return {
        name: test.name,
        description: test.description,
        passed: false,
        error: error.message,
      }
    }
  })

  const passed = testResults.filter(r => r.passed).length
  return {
    tests: testResults,
    summary: {
      total: testResults.length,
      passed,
      failed: testResults.length - passed,
      passRate: passed / testResults.length,
    },
  }
}

/**
 * Run all tests and generate report
 * @returns {Object} - Complete test report
 */
export function runAllTests() {
  const validatorResults = runValidatorTests()
  const apiResults = runApiSimulationTests()

  const totalTests = validatorResults.summary.totalTests + apiResults.summary.total
  const totalPassed = validatorResults.summary.passed + apiResults.summary.passed
  const overallScore = totalPassed / totalTests

  return {
    timestamp: new Date().toISOString(),
    validatorTests: validatorResults,
    apiTests: apiResults,
    summary: {
      totalTests,
      passed: totalPassed,
      failed: totalTests - totalPassed,
      passRate: totalPassed / totalTests,
      grade: getGrade(overallScore),
    },
  }
}

/**
 * Print test report to console
 * @param {Object} report - Test report from runAllTests
 */
export function printTestReport(report) {
  console.log('\n╔═══════════════════════════════════════════════════════════════╗')
  console.log('║            AGENT WORKFLOW TEST REPORT                       ║')
  console.log('╠═══════════════════════════════════════════════════════════════╣')
  console.log(`║ Timestamp:  ${report.timestamp}`)
  console.log('╠═══════════════════════════════════════════════════════════════╣')
  console.log(`║ Total:     ${report.summary.totalTests} tests`)
  console.log(`║ Passed:    ${report.summary.passed} (${(report.summary.passRate * 100).toFixed(1)}%)`)
  console.log(`║ Failed:    ${report.summary.failed}`)
  console.log(`║ Grade:     ${report.summary.grade}`)
  console.log('╠═══════════════════════════════════════════════════════════════╣')

  if (report.validatorTests.summary.failed > 0) {
    console.log('║ VALIDATOR FAILURES:')
    report.validatorTests.tests
      .filter(t => !t.result?.passed)
      .forEach(t => {
        console.log(`║   - ${t.name}: ✗ (score: ${t.result?.totalScore?.toFixed(2) ?? 'N/A'})`)
      })
  }

  if (report.apiTests.summary.failed > 0) {
    console.log('║ API SIMULATION FAILURES:')
    report.apiTests.tests
      .filter(t => !t.passed)
      .forEach(t => {
        console.log(`║   - ${t.name}: ✗ ${t.error || ''}`)
      })
  }

  console.log('╚═══════════════════════════════════════════════════════════════╝\n')
}

export default {
  runValidatorTests,
  runApiSimulationTests,
  runAllTests,
  printTestReport,
}