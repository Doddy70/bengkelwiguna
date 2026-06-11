/**
 * Web Vitals API Endpoint
 * Receives and logs Core Web Vitals data
 */

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log('[WebVitals API]', JSON.stringify(data, null, 2));
    }

    // In production, you would:
    // 1. Store in a database (e.g., PostgreSQL, MongoDB)
    // 2. Send to an analytics service (e.g., Vercel Analytics, Google Analytics)
    // 3. Send to a monitoring service (e.g., Datadog, Sentry)

    // Example: Store in a log file (development only)
    if (process.env.NODE_ENV === 'development') {
      // Could write to a log file here
      // fs.appendFileSync('vitals.log', JSON.stringify(data) + '\n');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[WebVitals API] Error:', error);
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
}