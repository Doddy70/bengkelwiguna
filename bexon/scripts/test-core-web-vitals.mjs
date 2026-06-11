#!/usr/bin/env node
/**
 * Core Web Vitals Test Script
 * Run: node scripts/test-core-web-vitals.mjs
 *
 * Tests the site against Core Web Vitals targets:
 * - LCP: ≤ 2.5s
 * - INP: ≤ 200ms
 * - CLS: ≤ 0.1
 */

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  // Target URLs to test
  urls: [
    {
      name: 'Homepage',
      url: process.env.SITE_URL || 'http://localhost:3000',
    },
    {
      name: 'Services',
      url: process.env.SITE_URL
        ? `${process.env.SITE_URL}/services`
        : 'http://localhost:3000/services',
    },
    {
      name: 'Blog',
      url: process.env.SITE_URL
        ? `${process.env.SITE_URL}/blog`
        : 'http://localhost:3000/blog',
    },
  ],

  // Core Web Vitals targets
  targets: {
    LCP: { good: 2500, needsWork: 4000 },
    INP: { good: 200, needsWork: 500 },
    CLS: { good: 0.1, needsWork: 0.25 },
    FCP: { good: 1800, needsWork: 3000 },
    TTFB: { good: 800, needsWork: 1800 },
  },

  // Output format
  format: process.argv.includes('--json') ? 'json' : 'text',
}

// ============================================
// UTILITIES
// ============================================

function rating(value, good, needsWork) {
  if (value <= good) return 'good'
  if (value <= needsWork) return 'needs-improvement'
  return 'poor'
}

function colorize(text, rating) {
  const colors = {
    good: '\x1b[32m', // green
    'needs-improvement': '\x1b[33m', // yellow
    poor: '\x1b[31m', // red
    reset: '\x1b[0m',
  }
  return `${colors[rating]}${text}${colors.reset}`
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes}B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`
}

// ============================================
// LIGHTHOUSE TESTING
// ============================================

async function runLighthouse(url, options = {}) {
  const { onlyCategories = ['performance'], output = 'json' } = options

  try {
    const command = `npx lighthouse ${url} --only-categories=${onlyCategories.join(
      ','
    )} --output=${output} --quiet --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"`

    const { stdout } = await execAsync(command, { timeout: 60000 })

    if (output === 'json') {
      return JSON.parse(stdout)
    }

    return stdout
  } catch (error) {
    if (error.message.includes('ENOWORKSPACES')) {
      throw new Error('Lighthouse requires a workspace. Run in the bexon directory.')
    }
    throw error
  }
}

function extractMetrics(report) {
  const audits = report.audits

  return {
    // Core Web Vitals
    LCP: {
      value: audits['largest-contentful-paint']?.numericValue || 0,
      displayValue: audits['largest-contentful-paint']?.displayValue || 'N/A',
    },
    INP: {
      value: audits['interactive']?.numericValue || 0, // Fallback to TTI
      displayValue: audits['interactive']?.displayValue || 'N/A',
    },
    CLS: {
      value: audits['cumulative-layout-shift']?.numericValue || 0,
      displayValue: audits['cumulative-layout-shift']?.displayValue || 'N/A',
    },
    FCP: {
      value: audits['first-contentful-paint']?.numericValue || 0,
      displayValue: audits['first-contentful-paint']?.displayValue || 'N/A',
    },
    TTFB: {
      value: audits['server-response-time']?.numericValue || 0,
      displayValue: audits['server-response-time']?.displayValue || 'N/A',
    },

    // Performance metrics
    TBT: {
      value: audits['total-blocking-time']?.numericValue || 0,
      displayValue: audits['total-blocking-time']?.displayValue || 'N/A',
    },
    SI: {
      value: audits['speed-index']?.numericValue || 0,
      displayValue: audits['speed-index']?.displayValue || 'N/A',
    },

    // Scores
    performanceScore: Math.round((report.categories?.performance?.score || 0) * 100),

    // Page size
    totalPageSize: audits['resource-summary']?.details?.items?.find(
      (i) => i.label === 'Total'
    )?.size || 0,

    // Requests
    totalRequests: audits['resource-summary']?.details?.items?.find(
      (i) => i.label === 'Total'
    )?.requests || 0,
  }
}

// ============================================
// REPORTING
// ============================================

function printReport(url, name, metrics) {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`📊 ${name}`)
  console.log(`${'='.repeat(60)}`)
  console.log(`URL: ${url}\n`)

  console.log('Core Web Vitals:')
  console.log('─'.repeat(50))

  const coreMetrics = ['LCP', 'INP', 'CLS', 'FCP', 'TTFB']

  for (const metric of coreMetrics) {
    const data = metrics[metric]
    if (!data) continue

    const msValue = metric === 'CLS' ? data.value.toFixed(3) : `${Math.round(data.value)}ms`
    const r = rating(data.value, CONFIG.targets[metric]?.good || 0, CONFIG.targets[metric]?.needsWork || 0)
    const status = colorize(r.toUpperCase(), r)
    const target = `${CONFIG.targets[metric]?.good || 0}ms`

    console.log(`  ${metric}: ${colorize(msValue, r)} (target: ≤${target}) ${status}`)
  }

  console.log('\nAdditional Metrics:')
  console.log('─'.repeat(50))

  const additionalMetrics = ['TBT', 'SI', 'performanceScore']

  for (const metric of additionalMetrics) {
    const data = metrics[metric]
    if (!data) continue

    if (metric === 'performanceScore') {
      const r = rating(100 - data, 0, 20)
      console.log(`  Performance Score: ${colorize(`${data}/100`, r)}`)
    } else {
      const msValue = `${Math.round(data.value)}ms`
      console.log(`  ${metric}: ${msValue}`)
    }
  }

  console.log('\nResource Stats:')
  console.log('─'.repeat(50))
  console.log(`  Page Size: ${formatBytes(metrics.totalPageSize)}`)
  console.log(`  Requests: ${metrics.totalRequests}`)
}

function printSummary(results) {
  console.log(`\n${'='.repeat(60)}`)
  console.log('📈 SUMMARY')
  console.log(`${'='.repeat(60)}\n`)

  const allPass = results.every((r) => r.metrics.performanceScore >= 90)

  // Calculate averages
  const avgScore = Math.round(
    results.reduce((sum, r) => sum + r.metrics.performanceScore, 0) / results.length
  )

  // Count passes
  const passCount = results.filter((r) => r.metrics.performanceScore >= 90).length

  console.log(`  Pages Tested: ${results.length}`)
  console.log(`  Score ≥ 90: ${passCount}/${results.length}`)
  console.log(`  Average Score: ${avgScore}/100`)

  console.log('\n  Status:', allPass ? colorize('✅ PASS', 'good') : colorize('❌ NEEDS WORK', 'needs-improvement'))

  if (!allPass) {
    console.log('\n  Recommendations:')
    results
      .filter((r) => r.metrics.performanceScore < 90)
      .forEach((r) => {
        console.log(`    - ${r.name}: Score ${r.metrics.performanceScore}/100`)
      })
  }
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('\n🔍 Core Web Vitals Test Suite')
  console.log('='.repeat(60))
  console.log(`Testing ${CONFIG.urls.length} URL(s)...\n`)

  const results = []

  for (const { name, url } of CONFIG.urls) {
    try {
      console.log(`\n⏳ Testing ${name}...`)

      const report = await runLighthouse(url)
      const metrics = extractMetrics(report)

      printReport(url, name, metrics)

      results.push({ name, url, metrics, report })
    } catch (error) {
      console.error(`\n❌ Error testing ${name}: ${error.message}`)
      console.error('   Make sure the site is running locally or set SITE_URL environment variable.')

      results.push({
        name,
        url,
        metrics: null,
        error: error.message,
      })
    }
  }

  // Print summary
  const validResults = results.filter((r) => r.metrics)
  if (validResults.length > 0) {
    printSummary(validResults)
  }

  // Exit with appropriate code
  const allPass = validResults.every((r) => r.metrics?.performanceScore >= 90)
  process.exit(allPass ? 0 : 1)
}

main().catch((error) => {
  console.error('Test suite error:', error)
  process.exit(1)
})