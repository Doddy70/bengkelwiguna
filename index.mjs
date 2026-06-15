/**
 * AI Gateway Test Script — Bengkel Wiguna
 * Tests the AI Gateway connection with streaming response
 */

import { streamText } from 'ai'

// Or use a different model provider
// import { openrouter } from '@ai-sdk/openrouter'

const result = streamText({
  model: 'openai/gpt-4o',
  system: 'You are a helpful assistant for Bengkel Wiguna, a professional car service workshop in Depok, Indonesia. Answer in Indonesian when appropriate.',
  prompt: 'Halo! Apa layanan terbaik yang ditawarkan Bengkel Wiguna?',
})

for await (const chunk of result.textStream) {
  process.stdout.write(chunk)
}

console.log('\n\n--- Streaming complete ---')
