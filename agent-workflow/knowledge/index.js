/**
 * Knowledge Retrieval — Bengkel Wiguna Agent Workflow
 * Grounded knowledge with source attribution
 */

import { CPT_KNOWLEDGE, FAQ_KNOWLEDGE, SEO_KNOWLEDGE, ROUTING_KNOWLEDGE, ERROR_HANDLING_KNOWLEDGE, QUALITY_GATES } from './domains/cpt-knowledge.js'
import { API_PATTERNS, FAQ_RESPONSE_SCHEMA, SEO_RESPONSE_SCHEMA, MENU_RESPONSE_SCHEMA, CACHE_CONFIG } from './api/api-schemas.js'
import { NAMING_CONVENTIONS, RETURN_STANDARDS, IMPORT_ORDER } from './code-patterns/code-patterns.js'

/**
 * Knowledge source with attribution
 */
export function knowledgeSource(name, content, metadata = {}) {
  return {
    content,
    source: {
      name,
      file: metadata.file || 'unknown',
      lastUpdated: metadata.lastUpdated || new Date().toISOString(),
      version: metadata.version || '1.0',
    },
    relevance: metadata.relevance || 1.0,
  }
}

/**
 * Retrieve CPT knowledge
 * @param {string} cptName - CPT name (services, promosi, paket_service, layanan_spesialis)
 * @returns {Object|null}
 */
export function getCptKnowledge(cptName) {
  const cpt = CPT_KNOWLEDGE[cptName]
  if (!cpt) return null

  return knowledgeSource(`CPT: ${cptName}`, cpt, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve FAQ knowledge
 * @returns {Object}
 */
export function getFaqKnowledge() {
  return knowledgeSource('FAQ Fields', FAQ_KNOWLEDGE, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve SEO knowledge
 * @returns {Object}
 */
export function getSeoKnowledge() {
  return knowledgeSource('SEO Configuration', SEO_KNOWLEDGE, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve routing knowledge
 * @returns {Object}
 */
export function getRoutingKnowledge() {
  return knowledgeSource('Frontend Routes', ROUTING_KNOWLEDGE, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve error handling knowledge
 * @returns {Object}
 */
export function getErrorHandlingKnowledge() {
  return knowledgeSource('Error Handling Patterns', ERROR_HANDLING_KNOWLEDGE, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve quality gates
 * @returns {Object}
 */
export function getQualityGates() {
  return knowledgeSource('Quality Gates', QUALITY_GATES, {
    file: 'agent-workflow/knowledge/domains/cpt-knowledge.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve API patterns
 * @param {string} patternName - Pattern name (wpFetch, bwFetch, fetchAll)
 * @returns {Object|null}
 */
export function getApiPattern(patternName) {
  const pattern = API_PATTERNS[patternName]
  if (!pattern) return null

  return knowledgeSource(`API Pattern: ${patternName}`, pattern, {
    file: 'agent-workflow/knowledge/api/api-schemas.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve FAQ response schema
 * @returns {Object}
 */
export function getFaqResponseSchema() {
  return knowledgeSource('FAQ Response Schema', FAQ_RESPONSE_SCHEMA, {
    file: 'agent-workflow/knowledge/api/api-schemas.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve SEO response schema
 * @returns {Object}
 */
export function getSeoResponseSchema() {
  return knowledgeSource('SEO Response Schema', SEO_RESPONSE_SCHEMA, {
    file: 'agent-workflow/knowledge/api/api-schemas.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve menu response schema
 * @returns {Object}
 */
export function getMenuResponseSchema() {
  return knowledgeSource('Menu Response Schema', MENU_RESPONSE_SCHEMA, {
    file: 'agent-workflow/knowledge/api/api-schemas.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve cache configuration
 * @returns {Object}
 */
export function getCacheConfig() {
  return knowledgeSource('Cache Configuration', CACHE_CONFIG, {
    file: 'agent-workflow/knowledge/api/api-schemas.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve naming conventions
 * @returns {Object}
 */
export function getNamingConventions() {
  return knowledgeSource('Naming Conventions', NAMING_CONVENTIONS, {
    file: 'agent-workflow/knowledge/code-patterns/code-patterns.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve return standards
 * @returns {Object}
 */
export function getReturnStandards() {
  return knowledgeSource('Return Standards', RETURN_STANDARDS, {
    file: 'agent-workflow/knowledge/code-patterns/code-patterns.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Retrieve import order
 * @returns {string}
 */
export function getImportOrder() {
  return knowledgeSource('Import Order Convention', IMPORT_ORDER, {
    file: 'agent-workflow/knowledge/code-patterns/code-patterns.js',
    lastUpdated: '2026-06-07',
  })
}

/**
 * Hybrid retrieval - semantic + keyword
 * @param {string} query - Query string
 * @returns {Array} - Relevant knowledge sources
 */
export function retrieveKnowledge(query) {
  const results = []
  const queryLower = query.toLowerCase()

  // CPT knowledge
  if (queryLower.includes('cpt') || queryLower.includes('post type') || queryLower.includes('services') || queryLower.includes('promosi')) {
    for (const cptName of ['services', 'promosi', 'paket_service', 'layanan_spesialis']) {
      const knowledge = getCptKnowledge(cptName)
      if (knowledge) results.push(knowledge)
    }
  }

  // FAQ knowledge
  if (queryLower.includes('faq')) {
    results.push(getFaqKnowledge())
  }

  // SEO knowledge
  if (queryLower.includes('seo') || queryLower.includes('rank math') || queryLower.includes('meta')) {
    results.push(getSeoKnowledge())
    results.push(getSeoResponseSchema())
  }

  // Routing knowledge
  if (queryLower.includes('route') || queryLower.includes('url') || queryLower.includes('slug')) {
    results.push(getRoutingKnowledge())
  }

  // Error handling
  if (queryLower.includes('error') || queryLower.includes('null') || queryLower.includes('return')) {
    results.push(getErrorHandlingKnowledge())
    results.push(getReturnStandards())
  }

  // API patterns
  if (queryLower.includes('api') || queryLower.includes('fetch') || queryLower.includes('endpoint')) {
    for (const pattern of ['wpFetch', 'bwFetch', 'fetchAll']) {
      const p = getApiPattern(pattern)
      if (p) results.push(p)
    }
    results.push(getCacheConfig())
  }

  // Naming conventions
  if (queryLower.includes('naming') || queryLower.includes('function name') || queryLower.includes('convention')) {
    results.push(getNamingConventions())
  }

  // Menu knowledge
  if (queryLower.includes('menu') || queryLower.includes('navigation')) {
    results.push(getMenuResponseSchema())
  }

  // Quality gates
  if (queryLower.includes('quality') || queryLower.includes('build') || queryLower.includes('test')) {
    results.push(getQualityGates())
  }

  return results
}

/**
 * Format knowledge for prompt injection
 * @param {Array} knowledgeSources - Array of knowledge sources
 * @returns {string} - Formatted string for prompt
 */
export function formatForPrompt(knowledgeSources) {
  return knowledgeSources
    .map(k => `[Source: ${k.source.name} (${k.source.file}, ${k.source.lastUpdated})]\n${k.content}`)
    .join('\n\n---\n\n')
}

export default {
  knowledgeSource,
  getCptKnowledge,
  getFaqKnowledge,
  getSeoKnowledge,
  getRoutingKnowledge,
  getErrorHandlingKnowledge,
  getQualityGates,
  getApiPattern,
  getFaqResponseSchema,
  getSeoResponseSchema,
  getMenuResponseSchema,
  getCacheConfig,
  getNamingConventions,
  getReturnStandards,
  getImportOrder,
  retrieveKnowledge,
  formatForPrompt,
}