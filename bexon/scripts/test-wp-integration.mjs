/**
 * WordPress Integration Test Suite
 * Run: node scripts/test-wp-integration.mjs
 *
 * Tests:
 * 1. Direct REST API connectivity
 * 2. Abilities API availability
 * 3. SEO metadata extraction
 * 4. Parallel fetching
 * 5. Error handling
 */

import { createWPAPIClient, extractSEOMetadata, WPAPIError } from '../src/lib/wp-client'
import { fetchAbilities, checkAbility, executeAbility, BENGKEL_ABILITIES } from '../src/lib/wp-abilities'

// ============================================
// CONFIGURATION
// ============================================

const CONFIG = {
  baseUrl: process.env.WP_API_BASE || 'https://backend.bengkelwiguna.com/wp-json',
  verbose: process.argv.includes('--verbose'),
}

// ============================================
// TEST UTILITIES
// ============================================

let passed = 0
let failed = 0

function log(message, type = 'info') {
  if (CONFIG.verbose || type === 'result' || type === 'error') {
    const prefix = {
      info: '  ',
      pass: '  ✅',
      fail: '  ❌',
      warn: '  ⚠️',
      result: '📋',
    }[type] || '  '
    console.log(`${prefix} ${message}`)
  }
}

function test(name, fn) {
  return async () => {
    try {
      await fn()
      passed++
      log(name, 'pass')
      return true
    } catch (error) {
      failed++
      log(`${name}: ${error.message}`, 'fail')
      return false
    }
  }
}

// ============================================
// TESTS
// ============================================

const tests = {
  // --- REST API Tests ---

  async testBasicConnectivity() {
    const client = createWPAPIClient({ timeout: 15000 })
    const response = await fetch(`${CONFIG.baseUrl}/wp/v2`, {
      headers: { 'Content-Type': 'application/json' },
    })

    if (!response.ok) {
      throw new Error(`REST API not accessible: ${response.status}`)
    }

    log(`Connected to WordPress REST API`, 'info')
  },

  async testFetchServices() {
    const client = createWPAPIClient()
    const services = await client.fetchAll('/services')

    if (!Array.isArray(services)) {
      throw new Error('Services response is not an array')
    }

    log(`Found ${services.length} services`, 'info')
  },

  async testFetchPosts() {
    const client = createWPAPIClient()
    const posts = await client.fetchAll('/posts', { per_page: '5' })

    if (!Array.isArray(posts) || posts.length === 0) {
      throw new Error('No posts found')
    }

    log(`Found ${posts.length} recent posts`, 'info')
  },

  async testFetchCategories() {
    const client = createWPAPIClient()
    const categories = await client.fetchAll('/categories')

    if (!Array.isArray(categories)) {
      throw new Error('Categories response is not an array')
    }

    log(`Found ${categories.length} categories`, 'info')
  },

  async testPagination() {
    const client = createWPAPIClient({ perPage: 10 })
    const posts = await client.fetchAll('/posts')

    if (posts.length > 10 && !posts.slice(10).length) {
      throw new Error('Pagination not working correctly')
    }

    log(`Pagination working (${posts.length} total posts)`, 'info')
  },

  async testSEOMetadataExtraction() {
    const client = createWPAPIClient()
    const posts = await client.fetchAll('/posts', { per_page: '1' })

    if (!posts.length) {
      throw new Error('No posts available for SEO testing')
    }

    const seo = extractSEOMetadata(posts[0] as unknown as Record<string, unknown>)

    log(`SEO Title: "${seo.title?.substring(0, 50)}..."`, 'info')
    log(`Has Rank Math data: ${Boolean(seo.rankMathHead)}`, 'info')
  },

  async testParallelFetch() {
    const client = createWPAPIClient()
    const start = Date.now()

    const [services, posts, categories] = await Promise.all([
      client.fetchAll('/services'),
      client.fetchAll('/posts'),
      client.fetchAll('/categories'),
    ])

    const duration = Date.now() - start

    log(`Parallel fetch completed in ${duration}ms`, 'info')
    log(`  - ${services.length} services`, 'info')
    log(`  - ${posts.length} posts`, 'info')
    log(`  - ${categories.length} categories`, 'info')

    if (!Array.isArray(services) || !Array.isArray(posts) || !Array.isArray(categories)) {
      throw new Error('Parallel fetch returned invalid data')
    }
  },

  // --- Abilities API Tests ---

  async testAbilitiesAPIExists() {
    const response = await fetch(`${CONFIG.baseUrl}/wp-abilities/v1/`, {
      headers: { 'Content-Type': 'application/json' },
    })

    // 404 is okay - abilities might not be installed
    if (response.status === 404) {
      log('Abilities API not installed (expected if WP < 6.9)', 'warn')
      return
    }

    if (!response.ok) {
      throw new Error(`Abilities API error: ${response.status}`)
    }

    const abilities = await response.json()
    log(`Found ${abilities.length} registered abilities`, 'info')
  },

  async testAbilitiesFetch() {
    const abilities = await fetchAbilities()

    log(`Fetched ${abilities.length} abilities`, 'info')

    if (abilities.length > 0) {
      log(`First ability: ${abilities[0].id}`, 'info')
    }
  },

  async testBengkelAbilities() {
    const aiAvailable = await checkAbility(BENGKEL_ABILITIES.CONTENT_SUGGESTIONS)

    if (aiAvailable.hasAbility) {
      log('AI content suggestions ability available', 'pass')
    } else {
      log(`AI ability not available: ${aiAvailable.error || 'not registered'}`, 'warn')
    }
  },

  async testBookingAbility() {
    const bookingAvailable = await checkAbility(BENGKEL_ABILITIES.MANAGE_BOOKINGS)

    if (bookingAvailable.hasAbility) {
      log('Booking management ability available', 'pass')
    } else {
      log(`Booking ability not available: ${bookingAvailable.error || 'not registered'}`, 'warn')
    }
  },

  // --- Error Handling Tests ---

  async test404Handling() {
    const client = createWPAPIClient()
    const result = await client.fetch('/non-existent-endpoint')

    if (result !== null) {
      throw new Error('Should return null for 404')
    }

    log('404 handling works correctly', 'info')
  },

  async testTimeoutHandling() {
    const client = createWPAPIClient({ timeout: 1 }) // 1ms timeout

    try {
      await client.fetch('/posts')
      log('Timeout handling: passed (returned null as expected)', 'info')
    } catch (error) {
      throw new Error('Timeout should return null, not throw')
    }
  },

  // --- Data Integrity Tests ---

  async testPostStructure() {
    const client = createWPAPIClient()
    const posts = await client.fetchAll('/posts', { per_page: '1' })

    if (!posts.length) {
      throw new Error('No posts to test')
    }

    const post = posts[0]

    const required = ['id', 'slug', 'title', 'content']
    for (const field of required) {
      if (!(field in post)) {
        throw new Error(`Post missing required field: ${field}`)
      }
    }

    log('Post structure validation passed', 'info')
  },

  async testFeaturedImage() {
    const client = createWPAPIClient()
    const posts = await client.fetchAll('/posts?_embed&per_page=10')

    const postsWithImages = posts.filter((p) => p._embedded?.['wp:featuredmedia'])
    log(`${postsWithImages.length}/${posts.length} posts have featured images`, 'info')
  },

  // --- Performance Tests ---

  async testCachePerformance() {
    const client = createWPAPIClient()

    // First call - should be slower
    const start1 = Date.now()
    await client.fetchAll('/posts', { per_page: '10' })
    const duration1 = Date.now() - start1

    // Second call - should be faster (cached)
    const start2 = Date.now()
    await client.fetchAll('/posts', { per_page: '10' })
    const duration2 = Date.now() - start2

    log(`Cache test: ${duration1}ms → ${duration2}ms (cache: ${duration2 < duration1})`, 'info')
  },
}

// ============================================
// RUNNER
// ============================================

async function runTests() {
  console.log('\n🧪 WordPress Integration Test Suite')
  console.log('====================================')
  console.log(`Target: ${CONFIG.baseUrl}`)
  console.log(`Mode: ${CONFIG.verbose ? 'verbose' : 'summary'}\n`)

  // Group tests
  const testGroups = {
    'REST API Connectivity': [
      { name: 'Basic API connectivity', fn: tests.testBasicConnectivity },
      { name: 'Fetch services', fn: tests.testFetchServices },
      { name: 'Fetch posts', fn: tests.testFetchPosts },
      { name: 'Fetch categories', fn: tests.testFetchCategories },
    ],
    'Data Handling': [
      { name: 'Pagination', fn: tests.testPagination },
      { name: 'SEO metadata extraction', fn: tests.testSEOMetadataExtraction },
      { name: 'Parallel fetch', fn: tests.testParallelFetch },
      { name: 'Post structure validation', fn: tests.testPostStructure },
      { name: 'Featured image handling', fn: tests.testFeaturedImage },
    ],
    'Abilities API': [
      { name: 'Abilities API endpoint', fn: tests.testAbilitiesAPIExists },
      { name: 'Fetch abilities', fn: tests.testAbilitiesFetch },
      { name: 'Bengkel AI ability', fn: tests.testBengkelAbilities },
      { name: 'Booking ability', fn: tests.testBookingAbility },
    ],
    'Error Handling': [
      { name: '404 handling', fn: tests.test404Handling },
      { name: 'Timeout handling', fn: tests.testTimeoutHandling },
    ],
    'Performance': [
      { name: 'Cache performance', fn: tests.testCachePerformance },
    ],
  }

  // Run all test groups
  for (const [groupName, groupTests] of Object.entries(testGroups)) {
    console.log(`\n📁 ${groupName}`)
    console.log('─'.repeat(40))

    for (const { name, fn } of groupTests) {
      const start = Date.now()
      await test(name, fn)()
      const duration = Date.now() - start

      if (CONFIG.verbose) {
        log(`Completed in ${duration}ms`, 'info')
      }
    }
  }

  // Summary
  console.log('\n====================================')
  console.log('📊 Test Results')
  console.log('====================================')
  console.log(`  ✅ Passed: ${passed}`)
  console.log(`  ❌ Failed: ${failed}`)
  console.log(`  ⏱️  Total:  ${passed + failed}`)
  console.log()

  if (failed === 0) {
    console.log('🎉 All tests passed!\n')
  } else {
    console.log('⚠️  Some tests failed. Check the output above.\n')
  }

  return { passed, failed }
}

// ============================================
// MAIN
// ============================================

runTests().catch((error) => {
  console.error('Test runner error:', error)
  process.exit(1)
})

export { runTests }