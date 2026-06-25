/**
 * Middleware for Subdomain Redirects
 * Handles redirects from subdomains to main domain
 *
 * Redirects:
 * - backend.bengkelwiguna.com/* → bengkelwiguna.com/*
 * - promo.bengkelwiguna.com/* → bengkelwiguna.com/promosi/*
 * - v2.bengkelwiguna.com/* → bengkelwiguna.com/*
 * - api.bengkelwiguna.com/* → bengkelwiguna.com/
 */

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''

  // Normalize hostname (remove port if present)
  const host = hostname.split(':')[0].toLowerCase()

  // backend.bengkelwiguna.com → bengkelwiguna.com/{path}
  if (host === 'backend.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // promo.bengkelwiguna.com → bengkelwiguna.com/promosi/{path}
  if (host === 'promo.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.pathname = '/promosi' + url.pathname
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // v2.bengkelwiguna.com → bengkelwiguna.com/{path}
  if (host === 'v2.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // api.bengkelwiguna.com → bengkelwiguna.com/ (block API access from frontend)
  if (host === 'api.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.pathname = '/'
    url.search = ''
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // kyoto.bengkelwiguna.com → bengkelwiguna.com/layanan-spesialis/{path}
  if (host === 'kyoto.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.pathname = '/layanan-spesialis' + url.pathname
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // www.bengkelwiguna.com → bengkelwiguna.com/ (remove www)
  if (host === 'www.bengkelwiguna.com') {
    const url = request.nextUrl.clone()
    url.hostname = 'bengkelwiguna.com'
    url.protocol = 'https:'
    return NextResponse.redirect(url, 301)
  }

  // Continue with the request if no subdomain match
  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!_next/static|_next/image|favicon.ico|api/).*)',
  ],
}
