/**
 * AI Gateway Test Script — Bengkel Wiguna
 * Tests the AI Gateway connection with streaming response
 *
 * Setup Options:
 * 1. AI Gateway (Vercel): Requires credit card on Vercel account
 * 2. Direct API Key: Set OPENAI_API_KEY or ANTHROPIC_API_KEY in .env.local
 */

// Option 1: AI Gateway (requires Vercel credit card)
// import { streamText } from 'ai'

// Option 2: Direct OpenAI API
import { streamText, createOpenAI } from 'ai'

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const result = streamText({
  model: openai('gpt-4o'),
  system: 'Kamu adalah asisten yang helpful untuk Bengkel Wiguna, bengkel mobil profesional di Depok, Indonesia. Selalu jawab dalam Bahasa Indonesia.',
  prompt: 'Halo! Apa layanan terbaik yang ditawarkan Bengkel Wiguna?',
})

for await (const chunk of result.textStream) {
  process.stdout.write(chunk)
}

console.log('\n\n--- Streaming complete ---')
