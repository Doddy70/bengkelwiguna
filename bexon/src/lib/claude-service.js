/**
 * Claude AI Service - Bengkel Wiguna
 * Provides AI-powered features using Claude Sonnet 4
 */

import { createClaudeClient, createCostTracker, CLAUDE_CONFIG } from './claude'
import { claudeServicePrompts } from './claude-prompts'

// Initialize clients
let claudeClient = null
let costTracker = null

function getClient() {
  if (!claudeClient && process.env.ANTHROPIC_API_KEY) {
    claudeClient = createClaudeClient(process.env.ANTHROPIC_API_KEY)
    costTracker = createCostTracker()
  }
  return claudeClient
}

/**
 * Check if Claude service is available
 */
export function isClaudeAvailable() {
  return getClient() !== null
}

/**
 * Get service status and cost stats
 */
export function getServiceStatus() {
  return {
    available: isClaudeAvailable(),
    config: {
      model: CLAUDE_CONFIG.model,
      maxTokens: CLAUDE_CONFIG.maxTokens,
    },
    costs: costTracker?.getStats() || null,
  }
}

/**
 * Generate SEO meta description for content
 */
export async function generateSeoDescription(content, options = {}) {
  const client = getClient()
  if (!client) {
    throw new Error('Claude service not configured')
  }

  const { maxLength = 160, targetKeywords = [] } = options

  const prompt = claudeServicePrompts.seoDescription({
    content,
    maxLength,
    targetKeywords,
  })

  const response = await client.complete(prompt, {
    maxTokens: 200,
    temperature: 0.5,
  })

  return response.trim()
}

/**
 * Generate structured data (JSON-LD) for services
 */
export async function generateServiceSchema(service) {
  const client = getClient()
  if (!client) {
    throw new Error('Claude service not configured')
  }

  const prompt = claudeServicePrompts.serviceSchema(service)

  const schema = await client.completeStructured(
    prompt,
    {
      type: 'object',
      properties: {
        '@context': { type: 'string' },
        '@type': { type: 'string' },
        name: { type: 'string' },
        description: { type: 'string' },
        provider: {
          type: 'object',
          properties: {
            '@type': { type: 'string' },
            name: { type: 'string' },
            telephone: { type: 'string' },
            address: { type: 'string' },
          },
        },
        areaServed: { type: 'string' },
        priceRange: { type: 'string' },
      },
      required: ['@context', '@type', 'name', 'description'],
    },
    { maxTokens: 500 }
  )

  return schema
}

/**
 * Generate blog content suggestions
 */
export async function generateContentSuggestions(topic, count = 5) {
  const client = getClient()
  if (!client) {
    throw new Error('Claude service not configured')
  }

  const prompt = claudeServicePrompts.contentSuggestions(topic, count)

  const suggestions = await client.completeStructured(
    prompt,
    {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          metaDescription: { type: 'string' },
          targetKeyword: { type: 'string' },
          category: { type: 'string' },
        },
        required: ['title', 'targetKeyword'],
      },
    },
    { maxTokens: 800 }
  )

  return suggestions || []
}

/**
 * Translate content to Indonesian with automotive context
 */
export async function translateToIndonesian(englishContent) {
  const client = getClient()
  if (!client) {
    throw new Error('Claude service not configured')
  }

  const prompt = claudeServicePrompts.translateIndonesian(englishContent)

  return client.complete(prompt, {
    maxTokens: 2000,
    temperature: 0.3,
  })
}

/**
 * Optimize existing content for SEO
 */
export async function optimizeForSeo(content, focusKeyword) {
  const client = getClient()
  if (!client) {
    throw new Error('Claude service not configured')
  }

  const prompt = claudeServicePrompts.seoOptimizer(content, focusKeyword)

  const optimization = await client.completeStructured(
    prompt,
    {
      type: 'object',
      properties: {
        improvedTitle: { type: 'string' },
        metaDescription: { type: 'string' },
        headingSuggestions: {
          type: 'array',
          items: { type: 'string' },
        },
        keywordDensity: {
          type: 'object',
          properties: {
            current: { type: 'number' },
            recommended: { type: 'number' },
          },
        },
        internalLinkSuggestions: {
          type: 'array',
          items: { type: 'string' },
        },
        contentImprovements: {
          type: 'array',
          items: { type: 'string' },
        },
      },
    },
    { maxTokens: 1000 }
  )

  return optimization
}
