import { WP_API_BASE } from '@/lib/constants'
import { withCostTracking } from '@/middleware/cost-tracking'
import { z } from 'zod'

const QuerySchema = z.object({
  messages: z.array(
    z.object({
      role: z.enum(['user', 'assistant', 'system']),
      content: z.string().min(1, 'Message content cannot be empty'),
    })
  ).min(1, 'At least one message is required'),
})

const handler = async (request) => {
  try {
    const body = await request.json()
    const result = QuerySchema.safeParse(body)

    if (!result.success) {
      return Response.json({ error: 'Invalid request', details: result.error.errors }, { status: 400 })
    }

    const { messages } = result.data

    // Endpoint baru di backend WordPress yang telah kita buat untuk AI Chat
    // Endpoint: /wp-json/wp-abilities/v1/bengkel/ai-chat
    const aiEndpoint = `${WP_API_BASE.replace('/wp/v2', '')}/wp-abilities/v1/bengkel/ai-chat`

    // Kita meneruskan pesan ke backend WP
    const res = await fetch(aiEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    if (!res.ok) {
      const errorText = await res.text()
      console.error('WP AI Endpoint Error:', errorText)
      throw new Error(`WordPress API returned ${res.status}`)
    }

    const data = await res.json()

    return Response.json({
      reply: data.reply || 'Maaf, saya tidak dapat memberikan jawaban untuk pertanyaan tersebut.',
      data: data.data || null,
    })
  } catch (error) {
    console.error('AI Query Proxy Error:', error)
    return Response.json(
      {
        reply: `⚠️ Terjadi error: ${error.message || 'Unknown error'}\n\nSilakan coba lagi atau hubungi admin.`,
        data: null,
      },
      { status: 500 }
    )
  }
}

export const POST = withCostTracking(handler)