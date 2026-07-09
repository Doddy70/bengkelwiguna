/**
 * TDD Tests: Services/Layanan Filter with REAL WordPress API Data
 *
 * Run with: node __tests__/services-filter-real.test.js
 *
 * Based on actual WP REST API response:
 * GET /wp-json/wp/v2/services?per_page=5&_embed
 *
 * REAL DATA STRUCTURE:
 * {
 *   id: 22002,
 *   _embedded: {
 *     "wp:term": [
 *       [{ id: 103, name: "Tune Up", taxonomy: "category" }],
 *       []  // tags
 *     ]
 *   }
 * }
 */

// ============ REAL API MOCK DATA ============

// Based on actual API response from backend.bengkelwiguna.com
const REAL_WP_API_RESPONSE = [
  {
    id: 22002,
    title: { rendered: "Tune Up Carbon Clean" },
    slug: "tune-up-carbon-clean",
    _embedded: {
      "wp:term": [
        [{ id: 103, name: "Tune Up", slug: "tune-up", taxonomy: "category" }],
        []
      ]
    }
  },
  {
    id: 22022,
    title: { rendered: "Overhaul Transmisi" },
    slug: "overhaul-transmisi",
    _embedded: {
      "wp:term": [
        [{ id: 916, name: "Servis Transmisi", slug: "servis-transmisi", taxonomy: "category" }],
        []
      ]
    }
  },
  {
    id: 22021,
    title: { rendered: "Overhaul Engine" },
    slug: "overhaul-engine",
    _embedded: {
      "wp:term": [
        [{ id: 959, name: "Overhaul", slug: "overhaul", taxonomy: "category" }],
        []
      ]
    }
  },
  {
    id: 22019,
    title: { rendered: "Servis AC Mobil" },
    slug: "servis-ac-mobil",
    _embedded: {
      "wp:term": [
        [{ id: 234, name: "Servis AC Mobil", slug: "servis-ac-mobil", taxonomy: "category" }],
        []
      ]
    }
  },
  {
    id: 22017,
    title: { rendered: "Reset AC Mobil" },
    slug: "reset-ac-mobil",
    _embedded: {
      "wp:term": [
        [{ id: 234, name: "Servis AC Mobil", slug: "servis-ac-mobil", taxonomy: "category" }],
        [{ id: 960, name: "Reset AC Mobil", slug: "reset-ac-mobil", taxonomy: "post_tag" }]
      ]
    }
  },
  {
    id: 22015,
    title: { rendered: "Spooring" },
    slug: "spoorin",
    _embedded: {
      "wp:term": [
        [{ id: 88, name: "Servis Kaki-Kaki", slug: "servis-kaki-kaki", taxonomy: "category" }],
        []
      ]
    }
  }
];

// ============ IMPLEMENTATION (TDD Functions) ============

/**
 * Extract categories from REAL WP REST API _embed format
 *
 * @param {Array} services - Array of service objects from WP REST API
 * @returns {Array} - Array of {id, name, slug} category objects
 */
function extractCategoriesFromRealAPI(services) {
  const categoryMap = new Map();

  services.forEach((service) => {
    // REAL: _embedded.wp:term[0] contains categories
    const terms = service._embedded?.["wp:term"]?.[0] || [];

    terms.forEach((term) => {
      // Only process 'category' taxonomy (ignore post_tag)
      if (term.taxonomy === 'category' && !categoryMap.has(term.id)) {
        categoryMap.set(term.id, {
          id: term.id,
          name: term.name,
          slug: term.slug
        });
      }
    });
  });

  // Return default if no categories found
  if (categoryMap.size === 0) {
    return [{ name: "Semua Layanan", id: 0, slug: "all" }];
  }

  return [
    { name: "Semua Layanan", id: 0, slug: "all" },
    ...Array.from(categoryMap.values())
  ];
}

/**
 * Filter services by selected category name
 *
 * @param {Array} services - Array of service objects
 * @param {string} selectedCategory - Category name to filter by
 * @param {Array} categories - Extracted categories array
 * @returns {Array} - Filtered services
 */
function filterServicesByCategory(services, selectedCategory, categories) {
  // "Semua Layanan" = show all
  if (selectedCategory === "Semua Layanan") {
    return services;
  }

  // Find category by name
  const cat = categories.find(c => c.name === selectedCategory);
  if (!cat || cat.id === 0) return services;

  // Filter services that have this category
  return services.filter((service) => {
    const terms = service._embedded?.["wp:term"]?.[0] || [];
    return terms.some(term =>
      term.taxonomy === 'category' && term.id === cat.id
    );
  });
}

/**
 * Build WP REST API URL with category filter
 *
 * @param {string} baseUrl - Base API URL
 * @param {number} categoryId - Category ID to filter (0 = all)
 * @returns {string} - Complete URL with query params
 */
function buildAPIUrl(baseUrl, categoryId) {
  const params = new URLSearchParams({
    per_page: '99',
    _embed: 'true'
  });

  if (categoryId && categoryId !== 0) {
    params.set('categories', categoryId.toString());
  }

  return `${baseUrl}?${params.toString()}`;
}

// ============ TEST FRAMEWORK ============

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function assertEqual(actual, expected, message) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    throw new Error(`${message}: Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function assertContains(array, item, message) {
  const found = array.some(i =>
    typeof item === 'object' ? JSON.stringify(i) === JSON.stringify(item) : i === item
  );
  if (!found) {
    throw new Error(`${message}: Array ${JSON.stringify(array)} does not contain ${JSON.stringify(item)}`);
  }
}

function assertTrue(condition, message) {
  if (!condition) {
    throw new Error(`${message}: Expected true, got false`);
  }
}

function test(name, fn) {
  testsRun++;
  try {
    fn();
    testsPassed++;
    console.log(`  ✅ ${name}`);
  } catch (error) {
    testsFailed++;
    console.log(`  ❌ ${name}`);
    console.log(`     Error: ${error.message}`);
  }
}

// ============ TESTS ============

console.log('\n========================================');
console.log('TDD Tests: Services Filter (Real API Data)');
console.log('========================================\n');

// Test Group 1: Category Extraction from Real API
console.log('\n📦 Category Extraction Tests (Real API)\n');

test('Extracts "Semua Layanan" as default when no services', () => {
  const categories = extractCategoriesFromRealAPI([]);
  assertEqual(categories.length, 1, 'Should have 1 default category');
  assertEqual(categories[0].name, "Semua Layanan", 'Should be default category');
});

test('Extracts unique categories from real API response', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const names = categories.map(c => c.name);

  assertTrue(categories.length > 1, 'Should have more than default');
  assertContains(names, "Semua Layanan", 'Should have default');
  assertContains(names, "Tune Up", 'Should have Tune Up');
  assertContains(names, "Servis Transmisi", 'Should have Servis Transmisi');
  assertContains(names, "Overhaul", 'Should have Overhaul');
  assertContains(names, "Servis AC Mobil", 'Should have Servis AC Mobil');
  assertContains(names, "Servis Kaki-Kaki", 'Should have Servis Kaki-Kaki');
});

test('Ignores post_tag taxonomy (Reset AC Mobil has tags)', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const tagTerms = categories.filter(c => c.slug === 'reset-ac-mobil');
  assertEqual(tagTerms.length, 0, 'Should not include post_tag as category');
});

test('Removes duplicate categories (Servis AC Mobil appears 2x)', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const servisAcCount = categories.filter(c => c.name === "Servis AC Mobil").length;
  assertEqual(servisAcCount, 1, 'Should only have 1 Servis AC Mobil');
});

// Test Group 2: Filtering with Real Data
console.log('\n🔍 Filtering Tests (Real API)\n');

test('Filters by "Servis AC Mobil" - returns 2 services', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const filtered = filterServicesByCategory(REAL_WP_API_RESPONSE, "Servis AC Mobil", categories);

  assertEqual(filtered.length, 2, 'Should return 2 services');
  const slugs = filtered.map(s => s.slug);
  assertContains(slugs, "servis-ac-mobil", 'Should contain Servis AC Mobil');
  assertContains(slugs, "reset-ac-mobil", 'Should contain Reset AC Mobil');
});

test('Filters by "Tune Up" - returns 1 service', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const filtered = filterServicesByCategory(REAL_WP_API_RESPONSE, "Tune Up", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "tune-up-carbon-clean", 'Should be Tune Up Carbon Clean');
});

test('Filters by "Servis Kaki-Kaki" - returns 1 service', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const filtered = filterServicesByCategory(REAL_WP_API_RESPONSE, "Servis Kaki-Kaki", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "spoorin", 'Should be Spooring');
});

test('"Semua Layanan" shows all 6 services', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const filtered = filterServicesByCategory(REAL_WP_API_RESPONSE, "Semua Layanan", categories);

  assertEqual(filtered.length, 6, 'Should return all 6 services');
});

test('Invalid category returns all services (graceful fallback)', () => {
  const categories = extractCategoriesFromRealAPI(REAL_WP_API_RESPONSE);
  const filtered = filterServicesByCategory(REAL_WP_API_RESPONSE, "Non-Existent", categories);

  // Graceful fallback: show all services when category not found
  assertEqual(filtered.length, 6, 'Should return all services as fallback');
});

// Test Group 3: URL Building
console.log('\n🔗 URL Building Tests\n');

test('Builds URL for all services (no category filter)', () => {
  const url = buildAPIUrl('https://backend.bengkelwiguna.com/wp-json/wp/v2/services', 0);
  assertTrue(url.includes('per_page=99'), 'Should include per_page');
  assertTrue(url.includes('_embed=true'), 'Should include _embed');
  assertTrue(!url.includes('categories='), 'Should not include categories param');
});

test('Builds URL with category filter', () => {
  const url = buildAPIUrl('https://backend.bengkelwiguna.com/wp-json/wp/v2/services', 234);
  assertTrue(url.includes('categories=234'), 'Should include categories param');
});

test('URL correctly encodes parameters', () => {
  const url = buildAPIUrl('https://backend.bengkelwiguna.com/wp-json/wp/v2/services', 103);
  assertEqual(url, 'https://backend.bengkelwiguna.com/wp-json/wp/v2/services?per_page=99&_embed=true&categories=103');
});

// Test Group 4: Edge Cases
console.log('\n⚠️ Edge Case Tests\n');

test('Handles service without _embedded', () => {
  const services = [{ id: 1, title: { rendered: "Test" } }];
  const categories = extractCategoriesFromRealAPI(services);
  assertEqual(categories.length, 1, 'Should return default');
});

test('Handles service with empty wp:term array', () => {
  const services = [{
    id: 1,
    title: { rendered: "Test" },
    _embedded: { "wp:term": [[]] }
  }];
  const categories = extractCategoriesFromRealAPI(services);
  assertEqual(categories.length, 1, 'Should return default');
});

test('Handles service with multiple categories', () => {
  const multiCatService = [{
    id: 999,
    title: { rendered: "Multi Category Service" },
    _embedded: {
      "wp:term": [
        [
          { id: 100, name: "Category A", taxonomy: "category" },
          { id: 200, name: "Category B", taxonomy: "category" }
        ]
      ]
    }
  }];
  const categories = extractCategoriesFromRealAPI(multiCatService);
  assertEqual(categories.length, 3, 'Should have default + 2 categories');
});

// ============ SUMMARY ============

console.log('\n========================================');
console.log(`SUMMARY: ${testsPassed}/${testsRun} tests passed`);
if (testsFailed > 0) {
  console.log(`❌ ${testsFailed} tests failed`);
}
console.log('========================================\n');

if (testsFailed > 0) {
  console.log('❌ SOME TESTS FAILED - Implementation incomplete');
  process.exit(1);
} else {
  console.log('✅ ALL TESTS PASSED!\n');
  console.log('📝 The filter functions work correctly with real WP API data.\n');
}
