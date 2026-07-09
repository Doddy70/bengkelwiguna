import { NextRequest, NextResponse } from 'next/server';

const SEARCH_ENGINES: Record<string, string> = {
  bing: 'https://www.bing.com/indexnow',
  yandex: 'https://yandex.com/indexnow',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { urls, engines = ['bing', 'yandex'] } = body as {
      urls: string[];
      engines?: string[];
    };

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return NextResponse.json({ error: 'urls must be a non-empty array' }, { status: 400 });
    }

    const INDEXNOW_KEY = process.env.INDEXNOW_KEY || '';
    if (!INDEXNOW_KEY) {
      return NextResponse.json({
        warning: 'INDEXNOW_KEY not configured',
        message: 'Set INDEXNOW_KEY in .env.local',
        urlsSubmitted: urls.length,
        setupUrl: 'https://www.indexnow.org/getting-started'
      });
    }

    const results: Record<string, { success?: boolean; status?: number; error?: string }> = {};
    const host = new URL(urls[0]).hostname;

    for (const engine of engines) {
      const endpoint = SEARCH_ENGINES[engine];
      if (!endpoint) {
        results[engine] = { error: 'Unknown engine' };
        continue;
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ host, key: INDEXNOW_KEY, urlList: urls })
        });
        results[engine] = { success: response.ok, status: response.status };
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed';
        results[engine] = { error: errorMessage };
      }
    }

    return NextResponse.json({ submitted: urls.length, results, timestamp: new Date().toISOString() });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  const key = process.env.INDEXNOW_KEY || '';
  return NextResponse.json({
    status: key ? 'configured' : 'not_configured',
    key: key ? '***' + key.slice(-4) : null,
    supportedEngines: Object.keys(SEARCH_ENGINES),
    setupUrl: 'https://www.indexnow.org/getting-started'
  });
}
