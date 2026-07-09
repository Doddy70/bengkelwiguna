import { NextRequest, NextResponse } from 'next/server';
import { getAllPostsFlat } from '@/lib/wordpress';

// Cache slugs for fast lookup
let cachedSlugs: Map<string, string> | null = null;
let cacheTime = 0;
const CACHE_DURATION = 3600000; // 1 hour

async function getSlugMap(): Promise<Map<string, string>> {
  const now = Date.now();
  if (cachedSlugs && now - cacheTime < CACHE_DURATION) {
    return cachedSlugs;
  }

  try {
    const posts = await getAllPostsFlat();
    cachedSlugs = new Map();

    for (const post of posts) {
      if (post.slug) {
        // Map lowercase slug to actual slug
        cachedSlugs.set(post.slug.toLowerCase(), post.slug);
      }
    }
    cacheTime = now;
  } catch {
    cachedSlugs = new Map();
  }

  return cachedSlugs || new Map();
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');

  if (!slug) {
    return NextResponse.json({ error: 'Missing slug parameter' }, { status: 400 });
  }

  try {
    const slugMap = await getSlugMap();

    // Try exact match first
    let targetSlug = slug;

    // Try lowercase match
    if (!slugMap.has(slug.toLowerCase())) {
      // Try to find similar slug
      const normalizedSlug = slug.toLowerCase().replace(/[^a-z0-9-]/g, '-');

      for (const [normalized, actual] of slugMap.entries()) {
        if (normalized.includes(normalizedSlug) || normalizedSlug.includes(normalized)) {
          targetSlug = actual;
          break;
        }
      }
    } else {
      targetSlug = slugMap.get(slug.toLowerCase()) || slug;
    }

    // Check if we found a match
    if (slugMap.has(slug.toLowerCase()) || slugMap.has(targetSlug.toLowerCase())) {
      return NextResponse.json({
        found: true,
        redirect: `/blog/${targetSlug}`,
        originalSlug: slug,
        normalizedSlug: targetSlug,
        status: 'REDIRECT_FOUND'
      });
    }

    // Post not found
    return NextResponse.json({
      found: false,
      slug,
      redirect: '/blog',
      status: 'NOT_FOUND',
      suggestion: 'Create 410 Gone response or redirect to blog archive'
    }, { status: 404 });

  } catch (error) {
    console.error('[Blog Redirect API] Error:', error);
    return NextResponse.json(
      { error: 'Internal server error', status: 'ERROR' },
      { status: 500 }
    );
  }
}

// POST: Batch check multiple slugs
export async function POST(request: NextRequest) {
  try {
    const { slugs } = await request.json();

    if (!Array.isArray(slugs)) {
      return NextResponse.json({ error: 'slugs must be an array' }, { status: 400 });
    }

    const slugMap = await getSlugMap();
    const results = slugs.map((slug: string) => ({
      original: slug,
      found: slugMap.has(slug.toLowerCase()),
      redirect: slugMap.has(slug.toLowerCase())
        ? `/blog/${slugMap.get(slug.toLowerCase())}`
        : null
    }));

    return NextResponse.json({ results, total: results.length });
  } catch (error) {
    console.error('[Blog Redirect API] POST Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
