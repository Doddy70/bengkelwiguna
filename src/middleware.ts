import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getAllPostsFlat } from '@/lib/wordpress';

// Cache slugs for performance
let cachedSlugs: Set<string> | null = null;
let cacheTime = 0;
const CACHE_DURATION = 3600000; // 1 hour

async function getCachedSlugs(): Promise<Set<string>> {
  const now = Date.now();
  if (cachedSlugs && now - cacheTime < CACHE_DURATION) {
    return cachedSlugs;
  }

  try {
    const posts = await getAllPostsFlat();
    cachedSlugs = new Set(posts.map(p => p.slug?.toLowerCase()).filter((s): s is string => Boolean(s)));
    cacheTime = now;
  } catch {
    cachedSlugs = new Set();
  }

  return cachedSlugs || new Set();
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Skip static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/images') ||
    pathname.startsWith('/fonts') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }

  // Skip if already a blog post URL
  if (pathname.startsWith('/blog/')) {
    return NextResponse.next();
  }

  // Pattern 1: Date-based URLs → /blog/slug
  // /2023/01/15/post-name → /blog/post-name
  const datePattern = /^\/(\d{4})\/(\d{2})\/(\d{2})\/(.+)$/;
  const dateMatch = pathname.match(datePattern);

  if (dateMatch) {
    const slug = dateMatch[4];
    return NextResponse.redirect(
      new URL(`/blog/${slug}`, request.url),
      301 // Permanent redirect
    );
  }

  // Pattern 2: Direct old slug → /blog/slug
  // Check if this looks like a post slug (alphanumeric with hyphens)
  const slugPattern = /^[a-zA-Z0-9-]+$/;
  if (slugPattern.test(pathname.slice(1)) && pathname !== '/') {
    const slugs = await getCachedSlugs();
    const normalizedPath = pathname.slice(1).toLowerCase();

    if (slugs.has(normalizedPath)) {
      return NextResponse.redirect(
        new URL(`/blog/${pathname.slice(1)}`, request.url),
        301
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|images|fonts).*)',
  ],
};
