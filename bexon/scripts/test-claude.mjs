/**
 * Claude Integration Test Script
 * Run: node scripts/test-claude.mjs
 */

import { createClaudeClient, createCostTracker, CLAUDE_CONFIG } from '../src/lib/claude.js'

async function testClaude() {
  console.log('🧪 Testing Claude Sonnet 4 Integration\n')
  console.log('Config:', JSON.stringify(CLAUDE_CONFIG, null, 2))
  console.log()

  const apiKey = process.env.ANTHROPIC_API_KEY

  if (!apiKey) {
    console.log('❌ ANTHROPIC_API_KEY not found in environment')
    console.log('\nAdd it to .env.local:')
    console.log('  ANTHROPIC_API_KEY=sk-ant-...')
    process.exit(1)
  }

  const client = createClaudeClient(apiKey)
  const tracker = createCostTracker()

  console.log('✓ Client initialized\n')

  // Test 1: Simple completion
  console.log('Test 1: Simple completion...')
  try {
    const response = await client.complete(
      'Explain in one sentence what Bengkel Wiguna does.'
    )
    console.log('✓ Response:', response)
  } catch (error) {
    console.log('❌ Failed:', error.message)
  }

  // Test 2: Completion with thinking
  console.log('\nTest 2: Completion with thinking...')
  try {
    const { thinking, text } = await client.completeWithThinking(
      'What are the most important SEO factors for a local automotive repair shop website?'
    )
    console.log('✓ Thinking (truncated):', thinking?.substring(0, 100) + '...')
    console.log('✓ Response:', text?.substring(0, 100) + '...')
  } catch (error) {
    console.log('❌ Failed:', error.message)
  }

  // Test 3: Structured output
  console.log('\nTest 3: Structured output...')
  try {
    const schema = {
      type: 'object',
      properties: {
        service_name: { type: 'string' },
        description: { type: 'string' },
        estimated_duration: { type: 'string' },
      },
      required: ['service_name', 'description'],
    }

    const response = await client.completeStructured(
      'List one automotive service with its description and estimated time.',
      schema,
      { maxTokens: 300 }
    )
    console.log('✓ Parsed response:', JSON.stringify(response, null, 2))
  } catch (error) {
    console.log('❌ Failed:', error.message)
  }

  // Test 4: Cost tracking
  console.log('\nTest 4: Cost tracking...')
  console.log('✓ Stats:', JSON.stringify(tracker.getStats(), null, 2))

  // Test 5: Context management
  console.log('\nTest 5: Context management...')
  const { ContextManager } = await import('../src/lib/claude.js')
  const cm = new ContextManager()

  const longContent = 'Lorem ipsum '.repeat(1000)
  const fitted = cm.fitContext(longContent)
  console.log(`✓ Original: ${longContent.length} chars`)
  console.log(`✓ Fitted: ${fitted.length} chars`)

  console.log('\n============================')
  console.log('All tests completed!')
}

testClaude().catch(console.error)
