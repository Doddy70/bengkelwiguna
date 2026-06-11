/**
 * Homepage Settings API Route
 * Headless CMS integration for Bengkel Wiguna
 * GET: Fetch settings from WordPress
 * POST: Save settings to WordPress + trigger ISR revalidation
 */

import { NextResponse } from 'next/server';
import { SITE_URL, BW_API_BASE } from '@/lib/constants';

const BW_SETTINGS_ENDPOINT = `${BW_API_BASE}/homepage-settings`;
const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET || '';

export async function GET() {
  try {
    if (process.env.NODE_ENV === 'development') {
        console.log('[API] Fetching homepage settings from:', BW_SETTINGS_ENDPOINT);
    }

    const response = await fetch(BW_SETTINGS_ENDPOINT, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      if (process.env.NODE_ENV === 'development') {
          console.error('[API] WP API Error:', response.status, response.statusText);
      }
      return NextResponse.json(
        { error: 'Failed to fetch settings from WordPress', status: response.status },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
        console.error('[API] Error:', error.message);
    }
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    // Validasi dasar
    if (!body || Object.keys(body).length === 0) {
      return NextResponse.json(
        { error: 'Data tidak boleh kosong' },
        { status: 400 }
      );
    }

    // Forward ke WordPress
    const response = await fetch(BW_SETTINGS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorData = await response.json();
      return NextResponse.json(
        { error: errorData.message || 'Failed to save settings' },
        { status: response.status }
      );
    }

    const data = await response.json();

    // ── ISR REVALIDATION ──
    if (REVALIDATE_SECRET) {
      // Call our own /api/revalidate endpoint (non-blocking)
      fetch(`${SITE_URL}/api/revalidate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          secret: REVALIDATE_SECRET,
          paths: ['/', '/services/', '/promosi/'],
          tags: ['services', 'promosi'],
        }),
      }).catch(err => {
          if (process.env.NODE_ENV === 'development') {
              console.error('[homepage-settings] revalidate trigger failed:', err.message);
          }
      });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
        console.error('Homepage settings POST error:', error);
    }
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}