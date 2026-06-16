/**
 * AI Gateway Test Script — Bengkel Wiguna
 * Tests the AI Gateway connection with streaming response
 *
 * ⚠️ AI Gateway requires credit card on Vercel:
 * Visit: https://vercel.com/d?to=%2F%5Bteam%5D%2F%7E%2Fai%3Fmodal%3Dadd-credit-card
 */

import { streamText } from 'ai'

const result = streamText({
  model: 'openai/gpt-4o',
  system: 'Kamu adalah asisten yang helpful untuk Bengkel Wiguna, bengkel mobil profesional di Depok, Indonesia. Selalu jawab dalam Bahasa Indonesia.',
  prompt: 'Halo! Apa layanan terbaik yang ditawarkan Bengkel Wiguna?',
})

for await (const chunk of result.textStream) {
  process.stdout.write(chunk)
}

console.log('\n\n--- Streaming complete ---')
