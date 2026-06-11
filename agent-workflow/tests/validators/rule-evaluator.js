/**
 * Rule-Based Evaluator — Bengkel Wiguna Agent Workflow
 * Fast, free, reliable validation for API responses and function outputs
 */

import { QUALITY_DIMENSIONS, calculateWeightedScore, qualityReport } from '../quality-criteria.js'
import { isValidSlug, isValidId, validatePagination } from '../../utils/validator.js'

/**
 * Evaluate a single-item fetch result
 * @param {*} result - Function result
 * @param {string} type - Expected type ('object', 'array', 'null')
 * @param {Object} options - Evaluation options
 * @returns {Object} - Quality scores
 */
export function evaluateSingleFetch(result, type = 'object', options = {}) {
  const { allowNull = true } = options

  const isCorrectType = result !== null ? typeof result === type : true

  return {
    accuracy: result === null && allowNull ? 1.0 : (result !== null ? 1.0 : 0.5),
    completeness: 0.8,  // Validation functions always complete
    format: isCorrectType ? 1.0 : 0.0,
    safety: 1.0, // No safety concerns for null returns
  }
}

/**
 * Evaluate a list fetch result
 * @param {*} result - Function result
 * @param {Object} options - Evaluation options
 * @returns {Object} - Quality scores
 */
export function evaluateListFetch(result, options = {}) {
  const { allowEmpty = true, minItems = 0 } = options

  const isValidArray = Array.isArray(result)
  const hasEnoughItems = isValidArray && result.length >= minItems

  return {
    accuracy: isValidArray ? 1.0 : 0.0,
    completeness: 0.8,  // Validation functions always complete
    format: isValidArray ? 1.0 : 0.0,
    safety: 1.0,
  }
}

/**
 * Evaluate a paginated fetch result
 * @param {*} result - Function result
 * @returns {Object} - Quality scores
 */
export function evaluatePaginatedFetch(result) {
  const hasCorrectStructure =
    result !== null &&
    typeof result === 'object' &&
    Array.isArray(result.posts) &&
    typeof result.total === 'number' &&
    typeof result.totalPages === 'number'

  return {
    accuracy: hasCorrectStructure ? 1.0 : 0.0,
    completeness: 0.8,  // Validation functions always complete
    format: hasCorrectStructure ? 1.0 : 0.0,
    safety: 1.0,
  }
}

/**
 * Evaluate a slug validation
 * @param {string} slug - Input slug
 * @param {boolean} shouldPass - Expected validation result
 * @returns {Object} - Quality scores
 */
export function evaluateSlugValidation(slug, shouldPass) {
  const result = isValidSlug(slug)
  const correct = result === shouldPass

  return {
    accuracy: correct ? 1.0 : 0.0,
    completeness: 1.0,  // Validation is always complete
    format: 1.0,
    safety: correct ? 1.0 : 0.5, // Partial safety if wrong but not dangerous
  }
}

/**
 * Evaluate a pagination validation
 * @param {number} page
 * @param {number} perPage
 * @param {boolean} shouldPass - Expected validation result
 * @returns {Object} - Quality scores
 */
export function evaluatePaginationValidation(page, perPage, shouldPass) {
  const result = validatePagination(page, perPage)
  const correct = result.isValid === shouldPass

  return {
    accuracy: correct ? 1.0 : 0.0,
    completeness: 1.0,  // Validation is always complete
    format: 1.0,
    safety: 1.0,
  }
}

/**
 * Evaluate API response structure
 * @param {*} data - API response data
 * @param {Array} requiredFields - Fields that must be present
 * @returns {Object} - Quality scores
 */
export function evaluateApiResponse(data, requiredFields = []) {
  const hasData = data !== null && data !== undefined
  const isObject = hasData && typeof data === 'object'

  // Check required fields
  let fieldCoverage = 1.0
  if (isObject && requiredFields.length > 0) {
    const presentFields = requiredFields.filter(f => {
      const keys = f.split('.')
      let value = data
      for (const key of keys) {
        value = value?.[key]
        if (value === undefined) break
      }
      return value !== undefined
    })
    fieldCoverage = presentFields.length / requiredFields.length
  }

  return {
    accuracy: hasData ? 1.0 : 0.5,
    completeness: fieldCoverage,
    format: isObject ? 1.0 : 0.0,
    safety: 1.0,
  }
}

/**
 * Run a complete test with scoring
 * @param {string} testName - Test name
 * @param {Function} evaluator - Evaluator function to run
 * @param {Array} args - Arguments for evaluator
 * @returns {Object} - Complete quality report
 */
export function runTest(testName, evaluator, args) {
  const scores = evaluator(...args)
  const result = calculateWeightedScore(scores)
  return qualityReport(testName, scores, result)
}

/**
 * Run multiple tests and aggregate results
 * @param {Array} tests - Array of {name, evaluator, args}
 * @returns {Object} - Aggregated results
 */
export function runTestSuite(tests) {
  const results = tests.map(t => runTest(t.name, t.evaluator, t.args))
  const totalScore = results.reduce((sum, r) => sum + r.result.totalScore, 0) / results.length
  const passedCount = results.filter(r => r.result.passed).length

  return {
    tests: results,
    summary: {
      totalTests: results.length,
      passed: passedCount,
      failed: results.length - passedCount,
      averageScore: totalScore,
    },
  }
}

export default {
  evaluateSingleFetch,
  evaluateListFetch,
  evaluatePaginatedFetch,
  evaluateSlugValidation,
  evaluatePaginationValidation,
  evaluateApiResponse,
  runTest,
  runTestSuite,
}