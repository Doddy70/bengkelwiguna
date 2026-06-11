/**
 * Input Validator — Bengkel Wiguna Agent Workflow
 * Validates inputs before processing
 */

/**
 * Validation error class
 */
export class ValidationError extends Error {
  constructor(message, field, code = 'INVALID_INPUT') {
    super(message)
    this.name = 'ValidationError'
    this.field = field
    this.code = code
  }
}

/**
 * Validation result object
 */
export function validationResult(isValid, errors = []) {
  return {
    isValid,
    errors,
    get firstError() {
      return this.errors[0] || null
    },
    get hasErrors() {
      return this.errors.length > 0
    },
  }
}

/**
 * Check if string is valid slug
 * @param {string} slug
 * @returns {boolean}
 */
export function isValidSlug(slug) {
  if (!slug || typeof slug !== 'string') return false
  // Slug pattern: lowercase letters, numbers, hyphens
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) && slug.length <= 200
}

/**
 * Check if value is valid ID (number or numeric string)
 * @param {*} id
 * @returns {boolean}
 */
export function isValidId(id) {
  if (typeof id === 'number') return id > 0 && Number.isInteger(id)
  if (typeof id === 'string') return /^\d+$/.test(id) && parseInt(id, 10) > 0
  return false
}

/**
 * Check if URL is valid
 * @param {string} url
 * @returns {boolean}
 */
export function isValidUrl(url) {
  if (!url || typeof url !== 'string') return false
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Sanitize slug - lowercase, remove invalid chars, limit length
 * @param {string} slug
 * @returns {string}
 */
export function sanitizeSlug(slug) {
  if (!slug || typeof slug !== 'string') return ''
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 200)
}

/**
 * Validate pagination params
 * @param {number} page
 * @param {number} perPage
 * @returns {Object}
 */
export function validatePagination(page = 1, perPage = 12) {
  const errors = []

  if (typeof page !== 'number' || page < 1 || !Number.isInteger(page)) {
    errors.push(new ValidationError('Page must be a positive integer', 'page', 'INVALID_PAGE'))
  }

  if (typeof perPage !== 'number' || perPage < 1 || perPage > 100 || !Number.isInteger(perPage)) {
    errors.push(new ValidationError('PerPage must be between 1 and 100', 'perPage', 'INVALID_PER_PAGE'))
  }

  return validationResult(errors.length === 0, errors)
}

/**
 * Validate slug param
 * @param {string} slug
 * @returns {Object}
 */
export function validateSlug(slug) {
  const errors = []

  if (!slug) {
    errors.push(new ValidationError('Slug is required', 'slug', 'MISSING_SLUG'))
  } else if (!isValidSlug(slug)) {
    errors.push(new ValidationError('Slug contains invalid characters or is too long', 'slug', 'INVALID_SLUG'))
  }

  return validationResult(errors.length === 0, errors)
}

/**
 * Validate ID param
 * @param {*} id
 * @returns {Object}
 */
export function validateId(id) {
  const errors = []

  if (id === undefined || id === null || id === '') {
    errors.push(new ValidationError('ID is required', 'id', 'MISSING_ID'))
  } else if (!isValidId(id)) {
    errors.push(new ValidationError('ID must be a positive integer', 'id', 'INVALID_ID'))
  }

  return validationResult(errors.length === 0, errors)
}

/**
 * Validate search query
 * @param {string} query
 * @returns {Object}
 */
export function validateSearchQuery(query) {
  const errors = []

  if (!query || typeof query !== 'string') {
    errors.push(new ValidationError('Query is required', 'query', 'MISSING_QUERY'))
  } else if (query.length < 2) {
    errors.push(new ValidationError('Query must be at least 2 characters', 'query', 'QUERY_TOO_SHORT'))
  } else if (query.length > 200) {
    errors.push(new ValidationError('Query must be less than 200 characters', 'query', 'QUERY_TOO_LONG'))
  }

  return validationResult(errors.length === 0, errors)
}

/**
 * Validate array input
 * @param {*} arr
 * @param {number} maxLength
 * @returns {Object}
 */
export function validateArray(arr, maxLength = 100) {
  const errors = []

  if (!Array.isArray(arr)) {
    errors.push(new ValidationError('Input must be an array', 'array', 'NOT_ARRAY'))
  } else if (arr.length > maxLength) {
    errors.push(new ValidationError(`Array exceeds maximum length of ${maxLength}`, 'array', 'ARRAY_TOO_LARGE'))
  }

  return validationResult(errors.length === 0, errors)
}

export default {
  ValidationError,
  validationResult,
  isValidSlug,
  isValidId,
  isValidUrl,
  sanitizeSlug,
  validatePagination,
  validateSlug,
  validateId,
  validateSearchQuery,
  validateArray,
}