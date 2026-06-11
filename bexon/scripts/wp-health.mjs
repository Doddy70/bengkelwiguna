#!/usr/bin/env node
/**
 * Quick WordPress Integration Health Check
 * Run: node scripts/wp-health.mjs
 *
 * A fast, single-command check for the WordPress integration status.
 * No dependencies - uses native fetch.
 */

const WP_API_BASE = process.env.WP_API_BASE || 'https://backend.bengkelwiguna.com/wp-json'

// Colors
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  reset: '\x1b[0m',
}

function status(message, type = 'info') {
  const icons = { ok: '✅', fail: '❌', warn: '⚠️', info: 'ℹ️' }
  const color = type === 'ok' ? colors.green : type === 'fail' ? colors.red : type === 'warn' ? colors.yellow : colors.blue
  console.log(`${color}${icons[type] || '•'} ${message}${colors.reset}`)
}

async function checkEndpoint(name, url, options = {}) {
  try {
    const response = await fetch(url, {
      timeout: 5000,
      ...options,
    })

    if (response.ok) {
      if (options.parse) {
        const data = await response.json()
        status(`${name}: ${options.parse(data)}`, 'ok')
        return { success: true, data, status: response.status }
      }
      status(`${name}: OK (${response.status})`, 'ok')
      return { success: true, status: response.status }
    }

    status(`${name}: HTTP ${response.status}`, 'fail')
    return { success: false, status: response.status }
  } catch (error) {
    status(`${name}: ${error.message}`, 'fail')
    return { success: false, error: error.message }
  }
}

async function main() {
  console.log('\n🔍 WordPress Integration Health Check')
  console.log('======================================')
  console.log(`Target: ${WP_API_BASE}\n`)

  const results = []

  // Core REST API
  console.log('📡 Core API')
  console.log('─'.repeat(40))

  results.push(await checkEndpoint('WordPress REST', `${WP_API_BASE}/wp/v2`))
  results.push(await checkEndpoint('Services CPT', `${WP_API_BASE}/wp/v2/services`, {
    parse: (d) => Array.isArray(d) ? `${d.length} services` : 'available'
  }))
  results.push(await checkEndpoint('Promosi CPT', `${WP_API_BASE}/wp/v2/promosi`, {
    parse: (d) => Array.isArray(d) ? `${d.length} promotions` : 'available'
  }))
  results.push(await checkEndpoint('Posts', `${WP_API_BASE}/wp/v2/posts?per_page=1`, {
    parse: (d) => Array.isArray(d) ? `${d.length} post(s) returned` : 'available'
  }))
  results.push(await checkEndpoint('Categories', `${WP_API_BASE}/wp/v2/categories`, {
    parse: (d) => Array.isArray(d) ? `${d.length} categories` : 'available'
  }))

  // SEO
  console.log('\n🔍 SEO Features')
  console.log('─'.repeat(40))

  const seoResponse = await fetch(`${WP_API_BASE}/wp/v2/posts?per_page=1&_embed`)
  if (seoResponse.ok) {
    const [post] = await seoResponse.json()
    const hasRankMath = Boolean(post.rank_math_title || post.rank_math_description)
    const hasYoast = Boolean(post.yoast_head_json)

    results.push({
      success: hasRankMath || hasYoast,
      name: 'SEO Plugin',
    })

    if (hasRankMath) {
      status('Rank Math Pro: Detected', 'ok')
    } else if (hasYoast) {
      status('Yoast SEO: Detected', 'ok')
    } else {
      status('SEO Plugin: Not detected', 'warn')
    }
  }

  // Abilities API
  console.log('\n🧠 Abilities API')
  console.log('─'.repeat(40))

  const abilitiesResponse = await fetch(`${WP_API_BASE}/wp-abilities/v1/`, { timeout: 3000 })
  if (abilitiesResponse.ok) {
    const abilities = await abilitiesResponse.json()
    status(`Abilities API: ${abilities.length} abilities registered`, 'ok')
    results.push({ success: true })

    if (abilities.length > 0) {
      console.log('\n  Registered abilities:')
      abilities.slice(0, 5).forEach((a) => {
        console.log(`    • ${a.id} (${a.category || 'uncategorized'})`)
      })
      if (abilities.length > 5) {
        console.log(`    ... and ${abilities.length - 5} more`)
      }
    }
  } else if (abilitiesResponse.status === 404) {
    status('Abilities API: Not installed (WP 6.9+ required)', 'warn')
    status('  Run wp-abilities-api skill to get installation guide', 'info')
    results.push({ success: true }) // Not a failure, just not installed
  } else {
    status(`Abilities API: Error ${abilitiesResponse.status}`, 'fail')
    results.push({ success: false })
  }

  // Summary
  console.log('\n======================================')
  console.log('📊 Summary')
  console.log('======================================')

  const passed = results.filter((r) => r.success).length
  const failed = results.filter((r) => !r.success).length

  if (failed === 0) {
    console.log(`\n${colors.green}✅ All checks passed (${passed}/${results.length})${colors.reset}\n`)
  } else {
    console.log(`\n${colors.red}❌ ${failed} check(s) failed${colors.reset}\n`)
  }
}

main().catch((error) => {
  console.error('Health check failed:', error.message)
  process.exit(1)
})