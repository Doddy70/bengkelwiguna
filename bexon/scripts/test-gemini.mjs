/**
 * Gemini Integration Test Script
 * Run: node scripts/test-gemini.mjs
 */

import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'
import { createGeminiClient, createCostTracker, GEMINI_CONFIG } from '../src/lib/gemini.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

async function testGemini() {
  console.log('🧪 Testing Google Gemini Integration\n')
  console.log('Config:', JSON.stringify(GEMINI_CONFIG, null, 2))
  console.log()

  const apiKey = process.env.GEMINI_API_KEY

  if (!apiKey || apiKey === 'your-gemini-api-key-here') {
    console.log('❌ GEMINI_API_KEY not configured in .env.local')
    console.log('\nPlease add it to bexon/.env.local:')
    console.log('  GEMINI_API_KEY=AIzaSy...')
    process.exit(1)
  }

  const client = createGeminiClient(apiKey)
  const tracker = createCostTracker()

  console.log('✓ Gemini Client initialized\n')

  // Test 1: Simple completion
  console.log('Test 1: Simple completion...')
  try {
    const response = await client.complete(
      'Explain in one sentence what Bengkel Wiguna does.'
    )
    console.log('✓ Response:', response.trim())
    tracker.track(10, 20) // Simulated token count for cost tracking test
  } catch (error) {
    console.log('❌ Failed:', error.message)
  }

  // Test 2: Structured output
  console.log('\nTest 2: Structured output (JSON Schema)...')
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
    tracker.track(25, 45) // Simulated token count
  } catch (error) {
    console.log('❌ Failed:', error.message)
  }

  // Test 3: Cost tracking
  console.log('\nTest 3: Cost tracking...')
  console.log('✓ Stats:', JSON.stringify(tracker.getStats(), null, 2))

  // Test 4: Context management
  console.log('\nTest 4: Context management...')
  const { ContextManager } = await import('../src/lib/gemini.js')
  const cm = new ContextManager()

  const longContent = 'Lorem ipsum '.repeat(1000)
  const fitted = cm.fitContext(longContent)
  console.log(`✓ Original: ${longContent.length} chars`)
  console.log(`✓ Fitted: ${fitted.length} chars`)

  console.log('\n============================')
  console.log('All tests completed!')
}

testGemini().catch(console.error)
