#!/usr/bin/env node
/**
 * SEO Audit Script
 * Run: node scripts/audit-seo.mjs
 *
 * Comprehensive SEO audit based on seo skill patterns
 * Checks: meta tags, structured data, sitemap, robots.txt, hreflang
 */

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  target: process.env.SITE_URL || 'http://localhost:3000',
  checks: {
    metaTags: true,
    structuredData: true,
    sitemap: true,
    robots: true,
    mobile: true,
    hreflang: true,
  },
}

// ============================================
// COLORS
// ============================================

const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
}

function status(text, type = 'info') {
  const icons = { pass: '✅', fail: '❌', warn: '⚠️', info: '•' }
  const color = type === 'pass' ? colors.green : type === 'fail' ? colors.red : type === 'warn' ? colors.yellow : colors.blue
  console.log(`${color}${icons[type] || icons.info} ${text}${colors.reset}`)
}

// ============================================
// SEO CHECKS
// ============================================

async function checkMetaTags(html) {
  console.log('\n📋 Meta Tags Analysis')
  console.log('─'.repeat(50))

  const checks = []

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  if (titleMatch) {
    const title = titleMatch[1].trim()
    const titleLength = title.length

    checks.push({
      name: 'Title tag',
      value: title.substring(0, 60),
      pass: titleLength <= 60,
      message: `${titleLength} chars ${titleLength <= 60 ? '(OK)' : '(too long, max 60)'}`,
    })

    if (titleLength > 60) {
      status(`Title too long: ${titleLength} chars (max 60)`, 'fail')
    }
  } else {
    checks.push({ name: 'Title tag', pass: false, message: 'Missing' })
    status('Title tag: Missing', 'fail')
  }

  // Meta description
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/i)
  if (descMatch) {
    const desc = descMatch[1].trim()
    const descLength = desc.length

    checks.push({
      name: 'Meta description',
      value: desc.substring(0, 80) + '...',
      pass: descLength >= 50 && descLength <= 160,
      message: `${descLength} chars`,
    })
  } else {
    checks.push({ name: 'Meta description', pass: false, message: 'Missing' })
    status('Meta description: Missing', 'fail')
  }

  // Viewport
  const viewportMatch = html.match(/<meta[^>]*name="viewport"[^>]*content="([^"]+)"/i)
  if (viewportMatch) {
    const content = viewportMatch[1]
    checks.push({
      name: 'Viewport meta',
      value: content,
      pass: content.includes('width=device-width'),
      message: content.includes('width=device-width') ? 'Mobile-friendly' : 'Check viewport',
    })
  }

  // Robots
  const robotsMatch = html.match(/<meta[^>]*name="robots"[^>]*content="([^"]+)"/i)
  if (robotsMatch) {
    const content = robotsMatch[1]
    checks.push({
      name: 'Robots meta',
      value: content,
      pass: content.includes('index'),
      message: content,
    })
  }

  return checks
}

async function checkStructuredData(html) {
  console.log('\n🔍 Structured Data (JSON-LD)')
  console.log('─'.repeat(50))

  const schemas = []
  const schemaMatches = html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)

  for (const match of schemaMatches) {
    try {
      const data = JSON.parse(match[1])
      schemas.push(data)
    } catch (e) {
      status('Invalid JSON-LD found', 'fail')
    }
  }

  if (schemas.length === 0) {
    status('No JSON-LD structured data found', 'warn')
    return []
  }

  // Check for common schemas
  const schemaTypes = schemas.map((s) => s['@type'])
  status(`Found ${schemas.length} JSON-LD schema(s): ${schemaTypes.join(', ')}`, 'pass')

  // Check specific schemas
  const hasOrganization = schemas.some((s) => s['@type'] === 'Organization' || s['@type']?.includes('Organization'))
  const hasLocalBusiness = schemas.some((s) => s['@type'] === 'LocalBusiness' || s['@type']?.includes('LocalBusiness'))
  const hasWebSite = schemas.some((s) => s['@type'] === 'WebSite')

  if (!hasOrganization && !hasLocalBusiness) {
    status('Missing Organization or LocalBusiness schema', 'warn')
  }

  if (!hasWebSite) {
    status('Missing WebSite schema (for search box)', 'warn')
  }

  return schemas
}

async function checkOpenGraph(html) {
  console.log('\n📱 Open Graph & Social')
  console.log('─'.repeat(50))

  const checks = []

  // OG tags
  const ogTags = [
    'og:title',
    'og:description',
    'og:image',
    'og:url',
    'og:type',
    'og:site_name',
  ]

  ogTags.forEach((tag) => {
    const regex = new RegExp(`<meta[^>]*property="${tag}"[^>]*content="([^"]+)"`, 'i')
    const match = html.match(regex)

    if (match) {
      checks.push({ name: tag, pass: true, value: match[1].substring(0, 50) })
    } else {
      checks.push({ name: tag, pass: false })
      status(`Missing ${tag}`, 'warn')
    }
  })

  // Twitter card
  const twitterMatch = html.match(/<meta[^>]*name="twitter:card"[^>]*content="([^"]+)"/i)
  if (twitterMatch) {
    status(`Twitter card: ${twitterMatch[1]}`, 'pass')
    checks.push({ name: 'twitter:card', pass: true, value: twitterMatch[1] })
  }

  return checks
}

async function checkSitemap() {
  console.log('\n🗺️ Sitemap & Robots.txt')
  console.log('─'.repeat(50))

  const checks = []

  // Check sitemap
  try {
    const sitemapRes = await fetch(`${CONFIG.target}/sitemap.xml`)
    if (sitemapRes.ok) {
      const sitemap = await sitemapRes.text()
      const urlCount = (sitemap.match(/<loc>/g) || []).length
      status(`Sitemap: Found (${urlCount} URLs)`, 'pass')
      checks.push({ name: 'Sitemap', pass: true, value: `${urlCount} URLs` })
    } else {
      status('Sitemap: Not found (HTTP ' + sitemapRes.status + ')', 'fail')
      checks.push({ name: 'Sitemap', pass: false })
    }
  } catch (e) {
    status('Sitemap: Error checking', 'warn')
  }

  // Check robots.txt
  try {
    const robotsRes = await fetch(`${CONFIG.target}/robots.txt`)
    if (robotsRes.ok) {
      const robots = await robotsRes.text()

      const hasSitemap = robots.includes('Sitemap:')
      const hasDisallow = robots.includes('Disallow:')

      status('robots.txt: Found', 'pass')
      checks.push({ name: 'robots.txt', pass: true })

      if (hasSitemap) {
        status('  - Sitemap reference: Found', 'pass')
      }

      // Check AI bots
      const aiBots = ['GPTBot', 'ClaudeBot', 'PerplexityBot']
      const aiBlocked = aiBots.filter((bot) => robots.includes(`User-agent: ${bot}`) && robots.includes('Disallow: /'))

      if (aiBlocked.length > 0) {
        status(`  - AI crawlers blocked: ${aiBlocked.join(', ')}`, 'warn')
      } else {
        status('  - AI crawlers: Allowed (good for AI search visibility)', 'pass')
      }
    } else {
      status('robots.txt: Not found', 'fail')
      checks.push({ name: 'robots.txt', pass: false })
    }
  } catch (e) {
    status('robots.txt: Error checking', 'warn')
  }

  return checks
}

async function checkMobile(html) {
  console.log('\n📱 Mobile SEO')
  console.log('─'.repeat(50))

  const checks = []

  // Viewport
  const viewportMatch = html.match(/<meta[^>]*name="viewport"[^>]*content="([^"]+)"/i)
  if (viewportMatch && viewportMatch[1].includes('width=device-width')) {
    status('Viewport: Mobile-friendly', 'pass')
    checks.push({ name: 'Viewport', pass: true })
  } else {
    status('Viewport: Not set or incorrect', 'fail')
    checks.push({ name: 'Viewport', pass: false })
  }

  // Touch targets (check for min 48px)
  const touchMatch = html.match(/min-height:\s*(\d+)px|min-width:\s*(\d+)px/g)
  const hasTouchTargets = touchMatch && touchMatch.some((m) => {
    const size = parseInt(m.match(/\d+/)?.[0] || '0')
    return size >= 48
  })

  if (hasTouchTargets) {
    status('Touch targets: Adequate sizing detected', 'pass')
  }

  // Font size check
  const fontMatch = html.match(/font-size:\s*(\d+)px/g)
  const smallFonts = fontMatch?.filter((m) => parseInt(m.match(/\d+/)?.[0] || '0') < 16)

  if (!smallFonts || smallFonts.length === 0) {
    status('Font sizes: Adequate for mobile', 'pass')
  } else {
    status(`Font sizes: ${smallFonts.length} small fonts detected`, 'warn')
  }

  return checks
}

async function checkCanonical(html) {
  console.log('\n🔗 Canonical & Hreflang')
  console.log('─'.repeat(50))

  const checks = []

  // Canonical
  const canonicalMatch = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/i)
  if (canonicalMatch) {
    status(`Canonical: ${canonicalMatch[1].substring(0, 60)}...`, 'pass')
    checks.push({ name: 'Canonical', pass: true, value: canonicalMatch[1] })
  } else {
    status('Canonical: Missing', 'warn')
    checks.push({ name: 'Canonical', pass: false })
  }

  // Hreflang
  const hreflangMatches = html.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"/gi)
  const hreflangs = Array.from(hreflangMatches)

  if (hreflangs.length > 0) {
    status(`Hreflang: ${hreflangs.length} language variant(s)`, 'pass')
    hreflangs.forEach((match) => {
      console.log(`    - ${match[1]}: ${match[2].substring(0, 50)}...`)
    })
    checks.push({ name: 'Hreflang', pass: true, value: `${hreflangs.length} variants` })
  } else {
    status('Hreflang: Not configured (only needed for multi-language)', 'info')
  }

  return checks
}

// ============================================
// LIGHTHOUSE SEO AUDIT
// ============================================

async function runLighthouseSEO() {
  console.log('\n🔍 Running Lighthouse SEO Audit...')

  try {
    const command = `npx lighthouse ${CONFIG.target} --only-categories=seo --output=json --quiet --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" 2>/dev/null`

    const { stdout } = await execAsync(command, { timeout: 120000 })
    const report = JSON.parse(stdout)

    const score = Math.round((report.categories?.seo?.score || 0) * 100)

    console.log('\n📊 Lighthouse SEO Score')
    console.log('─'.repeat(50))
    status(`SEO Score: ${score}/100`, score >= 90 ? 'pass' : score >= 50 ? 'warn' : 'fail')

    return { score, report: report.audits }
  } catch (error) {
    console.error('Lighthouse error:', error.message)
    return null
  }
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('\n🚀 SEO Audit')
  console.log('='.repeat(60))
  console.log(`Target: ${CONFIG.target}\n`)

  // Fetch the page HTML
  console.log('📥 Fetching page...')
  let html = ''

  try {
    const res = await fetch(CONFIG.target)
    html = await res.text()
    status(`Fetched ${html.length} bytes`, 'pass')
  } catch (error) {
    console.error('Failed to fetch page:', error.message)
    process.exit(1)
  }

  // Run all checks
  const metaChecks = await checkMetaTags(html)
  const schemaChecks = await checkStructuredData(html)
  const ogChecks = await checkOpenGraph(html)
  const sitemapChecks = await checkSitemap()
  const mobileChecks = await checkMobile(html)
  const canonicalChecks = await checkCanonical(html)

  // Run Lighthouse SEO audit
  const lighthouseResult = await runLighthouseSEO()

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('📋 SEO Audit Summary')
  console.log('='.repeat(60))

  const allChecks = [
    ...metaChecks,
    ...schemaChecks,
    ...ogChecks,
    ...sitemapChecks,
    ...mobileChecks,
    ...canonicalChecks,
  ]

  const passedCount = allChecks.filter((c) => c.pass).length
  const failedCount = allChecks.filter((c) => !c.pass).length

  console.log(`\nChecks: ${passedCount} passed, ${failedCount} failed, ${allChecks.length} total`)

  if (lighthouseResult) {
    console.log(`Lighthouse SEO Score: ${lighthouseResult.score}/100`)
  }

  // Recommendations
  console.log('\n📌 Recommendations:')

  if (failedCount > 0) {
    const failedItems = allChecks.filter((c) => !c.pass)
    failedItems.forEach((item) => {
      console.log(`  • Add/improve: ${item.name}`)
    })
  }

  console.log('\n' + '='.repeat(60))

  // Exit with appropriate code
  const allPassed = failedCount === 0 && (lighthouseResult?.score || 0) >= 90
  process.exit(allPassed ? 0 : 1)
}

main().catch((error) => {
  console.error('Audit error:', error)
  process.exit(1)
})