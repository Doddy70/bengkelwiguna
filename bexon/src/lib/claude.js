/**
 * Claude Sonnet 4 API Integration for Bengkel Wiguna
 * Migrated from Gemini 3.5 Flash
 */

import Anthropic from '@anthropic-ai/sdk'

// ============================================
// CONFIGURATION
// ============================================

const CLAUDE_CONFIG = {
  model: 'claude-sonnet-4-6-20250514',
  maxTokens: 4096,
  thinkingBudget: 1024, // For complex tasks
  temperature: 0.7,
  // Context budget - optimized for 200K window
  contextBudget: {
    maxTokens: 150000, // ~75% of 200K to leave room for response
    summaryThreshold: 100000, // Summarize when context exceeds this
    criticalInfoPositions: ['start', 'end'], // Attention gradient
  },
}

// ============================================
// CONTEXT MANAGEMENT
// ============================================

/**
 * Claude-optimized context manager
 * Implements attention gradient (critical info at start + end)
 */
class ContextManager {
  constructor(options = {}) {
    this.maxTokens = options.maxTokens || CLAUDE_CONFIG.contextBudget.maxTokens
    this.summaryThreshold = options.summaryThreshold || CLAUDE_CONFIG.contextBudget.summaryThreshold
  }

  /**
   * Truncate or summarize context to fit budget
   */
  fitContext(content, systemPrompt = '') {
    const systemTokens = this.estimateTokens(systemPrompt)
    const availableTokens = this.maxTokens - systemTokens - CLAUDE_CONFIG.maxTokens

    const contentTokens = this.estimateTokens(content)

    if (contentTokens <= availableTokens) {
      return content
    }

    // Truncate with attention gradient
    return this.truncateWithGradient(content, availableTokens)
  }

  /**
   * Truncate preserving start and end (attention gradient)
   */
  truncateWithGradient(content, maxTokens) {
    const parts = content.split('\n\n')
    const start = parts.slice(0, Math.ceil(parts.length / 3)).join('\n\n')
    const end = parts.slice(-Math.floor(parts.length / 3)).join('\n\n')

    const startTokens = this.estimateTokens(start)
    const endTokens = this.estimateTokens(end)

    if (startTokens + endTokens <= maxTokens) {
      return `${start}\n\n[... intermediate content truncated ...]\n\n${end}`
    }

    // If still too large, prioritize start
    return this.truncateText(content, maxTokens)
  }

  /**
   * Simple token estimation (rough: ~4 chars per token)
   */
  estimateTokens(text) {
    return Math.ceil(text.length / 4)
  }

  /**
   * Truncate text to exact token budget
   */
  truncateText(text, maxTokens) {
    const maxChars = maxTokens * 4
    if (text.length <= maxChars) return text

    const truncated = text.substring(0, maxChars)
    const lastNewline = truncated.lastIndexOf('\n')

    if (lastNewline > maxChars * 0.8) {
      return truncated.substring(0, lastNewline)
    }

    return truncated + '...'
  }
}

// ============================================
// CLAUDE CLIENT
// ============================================

class ClaudeClient {
  constructor(apiKey) {
    this.client = new Anthropic({ apiKey })
    this.contextManager = new ContextManager()
  }

  /**
   * Standard completion
   */
  async complete(prompt, options = {}) {
    const {
      system = '',
      maxTokens = CLAUDE_CONFIG.maxTokens,
      temperature = CLAUDE_CONFIG.temperature,
    } = options

    const systemContent = system ? this.contextManager.fitContext(system) : ''
    const userContent = this.contextManager.fitContext(prompt, systemContent)

    const response = await this.client.messages.create({
      model: CLAUDE_CONFIG.model,
      max_tokens: maxTokens,
      temperature,
      system: systemContent,
      messages: [{ role: 'user', content: userContent }],
    })

    return response.content[0].text
  }

  /**
   * Completion with extended thinking for complex tasks
   */
  async completeWithThinking(prompt, options = {}) {
    const {
      system = '',
      maxTokens = CLAUDE_CONFIG.maxTokens,
      thinkingBudget = CLAUDE_CONFIG.thinkingBudget,
      temperature = CLAUDE_CONFIG.temperature,
    } = options

    const systemContent = system ? this.contextManager.fitContext(system) : ''
    const userContent = this.contextManager.fitContext(prompt, systemContent)

    const response = await this.client.messages.create({
      model: CLAUDE_CONFIG.model,
      max_tokens: maxTokens,
      thinking: { type: 'enabled', budget_tokens: thinkingBudget },
      temperature,
      system: systemContent,
      messages: [{ role: 'user', content: userContent }],
    })

    // Extract thinking and response
    const thinking = response.content.find(c => c.type === 'thinking')?.thinking
    const text = response.content.find(c => c.type === 'text')?.text

    return { thinking, text }
  }

  /**
   * Structured output with JSON schema
   */
  async completeStructured(prompt, schema, options = {}) {
    const systemPrompt = options.system || ''
    const enhancedSystem = `${systemPrompt}

Respond ONLY with valid JSON matching this schema:
${JSON.stringify(schema, null, 2)}`

    const response = await this.complete(prompt, {
      ...options,
      system: enhancedSystem,
    })

    try {
      return JSON.parse(response)
    } catch {
      console.error('Failed to parse JSON response:', response)
      return null
    }
  }
}

// ============================================
// COST TRACKING
// ============================================

class CostTracker {
  constructor() {
    this.totalInputTokens = 0
    this.totalOutputTokens = 0
    this.requestCount = 0
    this.startTime = Date.now()
  }

  track(response) {
    this.totalInputTokens += response.usage.input_tokens
    this.totalOutputTokens += response.usage.output_tokens
    this.requestCount++
  }

  getStats() {
    const duration = (Date.now() - this.startTime) / 1000 / 60 // minutes

    return {
      requests: this.requestCount,
      inputTokens: this.totalInputTokens,
      outputTokens: this.totalOutputTokens,
      totalTokens: this.totalInputTokens + this.totalOutputTokens,
      estimatedCost: this.estimateCost(),
      duration: `${duration.toFixed(1)} minutes`,
      avgTokensPerRequest: this.requestCount
        ? Math.round((this.totalInputTokens + this.totalOutputTokens) / this.requestCount)
        : 0,
    }
  }

  estimateCost() {
    // Claude Sonnet 4 pricing (approximate)
    const inputCost = (this.totalInputTokens / 1_000_000) * 3 // $3 per 1M input
    const outputCost = (this.totalOutputTokens / 1_000_000) * 15 // $15 per 1M output
    return `$${(inputCost + outputCost).toFixed(4)}`
  }

  reset() {
    this.totalInputTokens = 0
    this.totalOutputTokens = 0
    this.requestCount = 0
    this.startTime = Date.now()
  }
}

// ============================================
// EXPORTS
// ============================================

export {
  ClaudeClient,
  ContextManager,
  CostTracker,
  CLAUDE_CONFIG,
}

// Factory function for dependency injection
export function createClaudeClient(apiKey) {
  return new ClaudeClient(apiKey)
}

export function createCostTracker() {
  return new CostTracker()
}

// Global singleton instance for the app
export const costTracker = new CostTracker()
