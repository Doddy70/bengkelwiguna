#!/usr/bin/env node
/**
 * Claude Sonnet 4 Migration Script
 * Migrates Bengkel Wiguna codebase from Gemini to Claude
 *
 * Usage: node scripts/migrate-to-claude.mjs [--dry-run]
 *
 * This script:
 * 1. Updates API configuration
 * 2. Migrates any AI-specific code patterns
 * 3. Adds Claude SDK integration
 * 4. Updates environment variables
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')

// ============================================
// MIGRATION STEPS
// ============================================

const MIGRATION_STEPS = [
  {
    name: 'Update environment variables',
    check: () => fs.existsSync(path.join(ROOT, '.env.local.example.migrated')),
    run: updateEnvVariables,
    verify: () => fs.existsSync(path.join(ROOT, '.env.local.example.migrated')),
  },
  {
    name: 'Create Claude integration library',
    check: () => fs.existsSync(path.join(ROOT, 'src/lib/claude.js')),
    run: () => console.log('✓ Claude library already exists'),
    verify: () => true,
  },
  {
    name: 'Add Claude client to constants',
    check: () => {
      const constantsPath = path.join(ROOT, 'src/lib/constants.js')
      if (!fs.existsSync(constantsPath)) return false
      return fs.readFileSync(constantsPath, 'utf8').includes('CLAUDE_')
    },
    run: updateConstants,
    verify: () => {
      const constantsPath = path.join(ROOT, 'src/lib/constants.js')
      return fs.readFileSync(constantsPath, 'utf8').includes('CLAUDE_')
    },
  },
  {
    name: 'Create Claude service for AI features',
    check: () => fs.existsSync(path.join(ROOT, 'src/lib/claude-service.js')),
    run: createClaudeService,
    verify: () => fs.existsSync(path.join(ROOT, 'src/lib/claude-service.js')),
  },
  {
    name: 'Add cost tracking middleware',
    check: () => fs.existsSync(path.join(ROOT, 'src/middleware', 'cost-tracking.js')),
    run: createCostMiddleware,
    verify: () => fs.existsSync(path.join(ROOT, 'src/middleware', 'cost-tracking.js')),
  },
  {
    name: 'Create prompts library',
    check: () => fs.existsSync(path.join(ROOT, 'src/lib/claude-prompts.js')),
    run: createPromptsLibrary,
    verify: () => fs.existsSync(path.join(ROOT, 'src/lib/claude-prompts.js')),
  },
]

// ============================================
// MIGRATION STEP IMPLEMENTATIONS
// ============================================

function updateEnvVariables() {
  const envPath = path.join(ROOT, '.env.local.example')
  const newEnvPath = path.join(ROOT, '.env.local.example.migrated')

  let envContent = ''
  if (fs.existsSync(envPath)) {
    envContent = fs.readFileSync(envPath, 'utf8')
  }

  const claudeVars = `
# Claude API Configuration (Migrated from Gemini)
ANTHROPIC_API_KEY=your-anthropic-api-key-here

# Cost Controls
CLAUDE_MAX_TOKENS_PER_REQUEST=4096
CLAUDE_MONTHLY_BUDGET_USD=50
`

  fs.writeFileSync(newEnvPath, envContent + claudeVars)
  console.log('✓ Created .env.local.example.migrated with Claude variables')
}

function updateConstants() {
  const constantsPath = path.join(ROOT, 'src/lib/constants.js')
  let content = fs.readFileSync(constantsPath, 'utf8')

  const claudeConstants = `
// Claude API Configuration
export const CLAUDE_CONFIG = {
  model: 'claude-sonnet-4-6-20250514',
  maxTokens: parseInt(process.env.CLAUDE_MAX_TOKENS_PER_REQUEST || '4096'),
  thinkingBudget: 1024,
  monthlyBudget: parseFloat(process.env.CLAUDE_MONTHLY_BUDGET_USD || '50'),
}
`

  content = content + '\n' + claudeConstants
  fs.writeFileSync(constantsPath, content)
  console.log('✓ Updated constants.js with Claude configuration')
}

function createClaudeService() {
  const servicePath = path.join(ROOT, 'src/lib/claude-service.js')

  const serviceContent = `/**
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
`

  fs.writeFileSync(servicePath, serviceContent)
  console.log('✓ Created claude-service.js')
}

function createCostMiddleware() {
  const middlewarePath = path.join(ROOT, 'src/middleware')

  // Create middleware directory if it doesn't exist
  if (!fs.existsSync(middlewarePath)) {
    fs.mkdirSync(middlewarePath, { recursive: true })
  }

  const middlewareContent = `/**
 * Cost Tracking Middleware
 * Monitors Claude API usage and enforces budget limits
 */

import { costTracker } from '../lib/claude'

const BUDGET_WARNING_THRESHOLD = 0.8 // Warn at 80% of budget
const BUDGET_HARD_LIMIT = 1.0 // Block at 100% of budget

/**
 * Check if request is within budget
 */
export function checkBudget() {
  if (!costTracker) {
    return { allowed: true, stats: null, budget: 50 }
  }

  const stats = costTracker.getStats()
  const budget = parseFloat(process.env.CLAUDE_MONTHLY_BUDGET_USD || '50')

  const cost = parseFloat(stats.estimatedCost.replace('$', ''))
  const usagePercent = cost / budget

  if (usagePercent >= BUDGET_HARD_LIMIT) {
    return {
      allowed: false,
      reason: 'Monthly budget exceeded',
      stats,
      budget,
    }
  }

  if (usagePercent >= BUDGET_WARNING_THRESHOLD) {
    console.warn(\`⚠️  Claude budget warning: \${(usagePercent * 100).toFixed(1)}% used (\${stats.estimatedCost} of $\${budget})\`)
  }

  return {
    allowed: true,
    stats,
    budget,
    usagePercent,
  }
}

/**
 * Middleware for API routes
 */
export function withCostTracking(handler) {
  return async (req, res) => {
    const budgetCheck = checkBudget()

    // Add cost info to response headers
    res.setHeader('X-Claude-Available', budgetCheck.allowed)

    if (!budgetCheck.allowed) {
      return res.status(429).json({
        error: 'Claude service temporarily unavailable',
        reason: budgetCheck.reason,
        message: 'Monthly API budget has been exceeded',
      })
    }

    // Execute handler and track cost
    const startTime = Date.now()
    const response = await handler(req, res)
    const duration = Date.now() - startTime

    // Log usage
    console.log(\`[Claude] Request completed in \${duration}ms\`)

    return response
  }
}

export default withCostTracking
`

  fs.writeFileSync(path.join(middlewarePath, 'cost-tracking.js'), middlewareContent)
  console.log('✓ Created cost-tracking middleware')
}

function createPromptsLibrary() {
  const promptsPath = path.join(ROOT, 'src/lib/claude-prompts.js')

  const promptsContent = `/**
 * Claude Service Prompts - Bengkel Wiguna
 * Optimized prompts for automotive/ repair shop content
 */

export const claudeServicePrompts = {
  /**
   * Generate SEO meta description
   */
  seoDescription: ({ content, maxLength = 160, targetKeywords = [] }) => \`
Generate a SEO-optimized meta description for this content from Bengkel Wiguna (automotive repair shop).

Content summary: \${content.substring(0, 500)}

Requirements:
- Maximum \${maxLength} characters
- Include natural mention of: \${targetKeywords.join(', ') || 'automotive services, car repair'}
- Action-oriented language
- Local SEO focus (Depok, West Java, Indonesia)

Output only the meta description, nothing else.
\`.trim(),

  /**
   * Generate JSON-LD schema for services
   */
  serviceSchema: (service) => \`
Generate JSON-LD structured data for this automotive service from Bengkel Wiguna.

Service: \${service.title?.rendered || service.name}
Description: \${service.content?.rendered || service.description || ''}
Price: \${service.meta?.price_range || '$$$'}
Location: Depok, West Java, Indonesia

Output valid JSON-LD for a LocalBusiness/Service.
\`.trim(),

  /**
   * Generate content suggestions
   */
  contentSuggestions: (topic, count = 5) => \`
Suggest \${count} blog post topics for Bengkel Wiguna automotive repair shop blog.
Topic focus: \${topic}

For each suggestion, provide:
- Title (in Indonesian, SEO-optimized)
- Meta description (max 160 chars)
- Target keyword
- Suggested category

Output as JSON array.
\`.trim(),

  /**
   * Translate to Indonesian
   */
  translateIndonesian: (englishContent) => \`
Translate this content to Indonesian with automotive/ repair shop context.
Maintain technical accuracy for car parts, maintenance procedures, and service terminology.

Content to translate:
\${englishContent}

Technical terms that should use Indonesian equivalents where natural:
- "engine" → "mesin"
- "tire" → "ban"
- "brake" → "rem"
- "oil change" → "penggantian oli"
- "battery" → "aki"
- "alignment" → "spooring"
- "balancing" → "balancing"
- "AC/ air conditioning" → "AC/ pendingin"

Output only the translated content.
\`.trim(),

  /**
   * SEO optimization
   */
  seoOptimizer: (content, focusKeyword) => \`
Analyze and optimize this content for SEO focusing on: "\${focusKeyword}"

Content:
\${content.substring(0, 1000)}

Provide improvements for:
1. Title optimization
2. Meta description
3. Heading structure (H2, H3 suggestions)
4. Keyword density analysis
5. Internal link opportunities
6. Content quality improvements

Output as structured JSON.
\`.trim(),
}
`

  fs.writeFileSync(promptsPath, promptsContent)
  console.log('✓ Created claude-prompts.js')
}

// ============================================
// MIGRATION RUNNER
// ============================================

async function runMigration() {
  console.log('\n🚀 Claude Sonnet 4 Migration Script')
  console.log('==================================\n')

  let completed = 0
  let failed = 0

  for (let i = 0; i < MIGRATION_STEPS.length; i++) {
    const step = MIGRATION_STEPS[i]
    process.stdout.write(`[${i + 1}/${MIGRATION_STEPS.length}] ${step.name}... `)

    if (step.check()) {
      console.log('⏭️  Skipped (already completed)')
      completed++
      continue
    }

    try {
      await step.run()
      if (step.verify()) {
        console.log('✅')
        completed++
      } else {
        console.log('❌ Verification failed')
        failed++
      }
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
      failed++
    }
  }

  console.log(`\n==================================`)
  console.log(`Migration completed: ${completed} ✅, ${failed} ❌`)
  console.log(`\n📋 Next steps:`)

  if (failed === 0) {
    console.log(`
1. Add your API key to .env.local:
   ANTHROPIC_API_KEY=sk-ant-...

2. Install Claude SDK:
   npm install @anthropic-ai/sdk

3. Test the integration:
   node scripts/test-claude.mjs

4. Review generated files:
   - src/lib/claude.js (Core SDK wrapper)
   - src/lib/claude-service.js (Business logic)
   - src/lib/claude-prompts.js (Prompts library)
   - src/middleware/cost-tracking.js (Budget enforcement)

5. Review documentation:
   - MIGRATION_CLAUDE.md (Full migration guide)
`)
  }

  return { completed, failed }
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('\n🚀 Claude Sonnet 4 Migration')
  console.log('============================\n')

  const args = process.argv.slice(2)
  const dryRun = args.includes('--dry-run')

  if (dryRun) {
    console.log('🔍 Dry run mode - showing what would be done:\n')
    for (let i = 0; i < MIGRATION_STEPS.length; i++) {
      const step = MIGRATION_STEPS[i]
      const status = step.check() ? '⏭️ Already done' : '📝 Would run'
      console.log(`  [${i + 1}/${MIGRATION_STEPS.length}] ${status}: ${step.name}`)
    }
    return
  }

  await runMigration()
}

main().catch(console.error)

export { runMigration, MIGRATION_STEPS }