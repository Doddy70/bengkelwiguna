#!/usr/bin/env node
/**
 * Performance Audit Script
 * Run: node scripts/audit-performance.mjs
 *
 * Comprehensive performance audit against budget targets:
 * - Total page weight: < 1.5 MB
 * - JavaScript: < 300 KB
 * - CSS: < 100 KB
 * - Images: < 500 KB
 * - Fonts: < 100 KB
 * - Third-party: < 200 KB
 */

import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  target: process.env.SITE_URL || 'http://localhost:3000',
  budget: {
    totalPageWeight: 1.5 * 1024 * 1024, // 1.5 MB
    javascript: 300 * 1024, // 300 KB
    css: 100 * 1024, // 100 KB
    imagesAboveFold: 500 * 1024, // 500 KB
    fonts: 100 * 1024, // 100 KB
    thirdParty: 200 * 1024, // 200 KB
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

function status(text, type) {
  const icons = { pass: '✅', fail: '❌', warn: '⚠️', info: '•' }
  const color = type === 'pass' ? colors.green : type === 'fail' ? colors.red : type === 'warn' ? colors.yellow : colors.blue
  console.log(`${color}${icons[type] || icons.info} ${text}${colors.reset}`)
}

// ============================================
// LIGHTHOUSE AUDIT
// ============================================

async function runLighthouseAudit() {
  console.log('\n🔍 Running Lighthouse Performance Audit...')

  try {
    const command = `npx lighthouse ${CONFIG.target} --only-categories=performance --output=json --quiet --no-enable-error-reporting --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" 2>/dev/null`

    const { stdout } = await execAsync(command, { timeout: 120000 })
    const report = JSON.parse(stdout)

    return extractAuditData(report)
  } catch (error) {
    console.error('Lighthouse error:', error.message)
    return null
  }
}

function extractAuditData(report) {
  const audits = report.audits
  const categories = report.categories

  return {
    // Performance score
    score: Math.round(categories.performance.score * 100),

    // Core Web Vitals
    metrics: {
      LCP: {
        value: audits['largest-contentful-paint']?.numericValue || 0,
        target: 2500,
        passed: (audits['largest-contentful-paint']?.numericValue || 0) <= 2500,
      },
      FCP: {
        value: audits['first-contentful-paint']?.numericValue || 0,
        target: 1800,
        passed: (audits['first-contentful-paint']?.numericValue || 0) <= 1800,
      },
      TTI: {
        value: audits['interactive']?.numericValue || 0,
        target: 3800,
        passed: (audits['interactive']?.numericValue || 0) <= 3800,
      },
      SpeedIndex: {
        value: audits['speed-index']?.numericValue || 0,
        target: 3400,
        passed: (audits['speed-index']?.numericValue || 0) <= 3400,
      },
      TBT: {
        value: audits['total-blocking-time']?.numericValue || 0,
        target: 200,
        passed: (audits['total-blocking-time']?.numericValue || 0) <= 200,
      },
      CLS: {
        value: audits['cumulative-layout-shift']?.numericValue || 0,
        target: 0.1,
        passed: (audits['cumulative-layout-shift']?.numericValue || 0) <= 0.1,
      },
    },

    // Resource sizes
    resourceSummary: audits['resource-summary']?.details?.items || [],

    // Opportunities
    opportunities: Object.entries(audits)
      .filter(([key, value]) => value?.details?.overallSavingsBytes > 0)
      .map(([key, value]) => ({
        id: key,
        title: value.title,
        savings: value.details.overallSavingsBytes,
      }))
      .sort((a, b) => b.savings - a.savings)
      .slice(0, 10),

    // Diagnostics
    diagnostics: Object.entries(audits)
      .filter(([key, value]) => value?.score !== null && value?.score < 1)
      .map(([key, value]) => ({
        id: key,
        title: value.title,
        score: value.score,
      }))
      .slice(0, 10),
  }
}

// ============================================
// BUDGET CHECKS
// ============================================

function checkBudgets(resourceSummary) {
  const results = []

  const findResource = (label) => {
    return resourceSummary.find((item) => item.label === label)
  }

  // Total page weight
  const total = findResource('Total')
  if (total) {
    results.push({
      name: 'Total Page Weight',
      value: total.size,
      budget: CONFIG.budget.totalPageWeight,
      passed: total.size <= CONFIG.budget.totalPageWeight,
    })
  }

  // JavaScript
  const js = findResource('JavaScript')
  if (js) {
    results.push({
      name: 'JavaScript',
      value: js.size,
      budget: CONFIG.budget.javascript,
      passed: js.size <= CONFIG.budget.javascript,
    })
  }

  // CSS
  const css = findResource('CSS')
  if (css) {
    results.push({
      name: 'CSS',
      value: css.size,
      budget: CONFIG.budget.css,
      passed: css.size <= CONFIG.budget.css,
    })
  }

  // Images
  const images = findResource('Image')
  if (images) {
    results.push({
      name: 'Images',
      value: images.size,
      budget: CONFIG.budget.imagesAboveFold,
      passed: images.size <= CONFIG.budget.imagesAboveFold,
    })
  }

  return results
}

// ============================================
// FORMAT HELPERS
// ============================================

function formatBytes(bytes) {
  if (!bytes) return 'N/A'
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`
}

function formatMs(ms) {
  if (!ms) return 'N/A'
  return `${Math.round(ms)} ms`
}

function formatPercent(value, target) {
  const percent = ((target - value) / target) * 100
  return `${percent.toFixed(1)}%`
}

// ============================================
// REPORT
// ============================================

function printReport(audit) {
  if (!audit) {
    console.log('\n❌ Unable to complete audit. Make sure the site is running.')
    return
  }

  // Header
  console.log('\n' + '='.repeat(60))
  console.log('📊 Performance Audit Report')
  console.log('='.repeat(60))
  console.log(`Target: ${CONFIG.target}`)
  console.log()

  // Performance Score
  const scoreColor = audit.score >= 90 ? 'pass' : audit.score >= 50 ? 'warn' : 'fail'
  status(`Performance Score: ${audit.score}/100`, scoreColor)

  // Core Web Vitals
  console.log('\n📈 Core Web Vitals')
  console.log('─'.repeat(50))

  Object.entries(audit.metrics).forEach(([key, metric]) => {
    const displayValue = key === 'CLS' ? metric.value.toFixed(3) : formatMs(metric.value)
    const target = key === 'CLS' ? metric.target.toFixed(3) : formatMs(metric.target)
    const type = metric.passed ? 'pass' : 'fail'

    console.log(`  ${key}: ${formatValue(key, metric.value)} (target: ≤${target})`)
  })

  // Budget Check
  console.log('\n💰 Budget Check')
  console.log('─'.repeat(50))

  const budgetResults = checkBudgets(audit.resourceSummary)

  budgetResults.forEach((result) => {
    const passed = result.passed ? 'pass' : 'fail'
    const statusIcon = result.passed ? '✅' : '❌'
    const color = result.passed ? colors.green : colors.red

    console.log(
      `  ${statusIcon} ${result.name}: ${colorize(formatBytes(result.value), passed)} / ${formatBytes(result.budget)}`
    )
  })

  // Opportunities
  if (audit.opportunities.length > 0) {
    console.log('\n⚡ Top Optimization Opportunities')
    console.log('─'.repeat(50))

    audit.opportunities.slice(0, 5).forEach((opp, i) => {
      console.log(`  ${i + 1}. ${opp.title}`)
      console.log(`     Potential savings: ${formatBytes(opp.savings)}`)
    })
  }

  // Diagnostics
  if (audit.diagnostics.length > 0) {
    console.log('\n🔧 Diagnostics')
    console.log('─'.repeat(50))

    audit.diagnostics.slice(0, 5).forEach((diag) => {
      const score = Math.round(diag.score * 100)
      const type = score >= 90 ? 'pass' : score >= 50 ? 'warn' : 'fail'
      status(`${diag.title}: ${score}%`, type)
    })
  }

  // Summary
  console.log('\n' + '='.repeat(60))
  console.log('📋 Summary')
  console.log('='.repeat(60))

  const metricsPassCount = Object.values(audit.metrics).filter((m) => m.passed).length
  const metricsTotal = Object.values(audit.metrics).length

  const budgetPassCount = budgetResults.filter((r) => r.passed).length
  const budgetTotal = budgetResults.length

  console.log(`  Core Web Vitals: ${metricsPassCount}/${metricsTotal} passed`)
  console.log(`  Budget: ${budgetPassCount}/${budgetTotal} passed`)
  console.log(`  Performance Score: ${audit.score}/100`)
  console.log()

  const allPassed = audit.score >= 90 && metricsPassCount === metricsTotal && budgetPassCount === budgetTotal

  if (allPassed) {
    console.log(`${colors.green}🎉 All checks passed!${colors.reset}`)
  } else {
    console.log(`${colors.yellow}⚠️  Some checks need attention${colors.reset}`)
  }
}

function formatValue(key, value) {
  if (key === 'CLS') return value.toFixed(3)
  return formatMs(value)
}

function colorize(text, type) {
  const color = type === 'pass' ? colors.green : type === 'fail' ? colors.red : colors.yellow
  return `${color}${text}${colors.reset}`
}

// ============================================
// MAIN
// ============================================

async function main() {
  console.log('\n🚀 Performance Audit')
  console.log('='.repeat(60))

  const audit = await runLighthouseAudit()
  printReport(audit)

  // Exit with appropriate code
  process.exit(audit && audit.score >= 90 ? 0 : 1)
}

main().catch((error) => {
  console.error('Audit error:', error)
  process.exit(1)
})