import { NextRequest, NextResponse } from 'next/server';

// In-memory store for demo (use Redis/DB in production)
const logs: Array<{
  url: string;
  referer: string | null;
  userAgent: string;
  timestamp: string;
}> = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { url, referer } = body;

    if (!url) {
      return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
    }

    const entry = {
      url,
      referer: referer || null,
      userAgent: request.headers.get('user-agent') || 'unknown',
      timestamp: new Date().toISOString()
    };

    // Store log
    logs.push(entry);

    // Keep only last 1000 entries
    if (logs.length > 1000) {
      logs.shift();
    }

    // Log to console for monitoring
    console.log(`[404 LOG] ${url} from ${referer || 'direct'}`);

    return NextResponse.json({
      success: true,
      logged: entry.timestamp
    });
  } catch (error) {
    console.error('[Log 404 API] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  // Return recent 404s for monitoring dashboard
  const recent = logs.slice(-50).reverse();

  return NextResponse.json({
    total: logs.length,
    recent,
    summary: {
      today: logs.filter(l => l.timestamp.startsWith(new Date().toISOString().split('T')[0])).length
    }
  });
}
