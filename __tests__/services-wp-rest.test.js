/**
 * TDD Tests for ServicesArchiveClient with WP REST API
 *
 * Run with: node __tests__/services-wp-rest.test.js
 *
 * Tests based on WP REST API response structure:
 * - services_category: [927, 928, ...] (flat array of IDs)
 * OR taxonomies: { services_category: [{term_id, name, slug}] }
 */

// Mock service data from WP REST API - standard format
// WP REST API returns: services_category: [{id, name, slug}]
const MOCK_WP_REST_SERVICES = [
  {
    id: 22002,
    title: "Tune Up Carbon Clean",
    slug: "tune-up-carbon-clean",
    featured_img: "https://example.com/image1.jpg",
    services_category: [{ id: 927, name: "Tune Up", slug: "tune-up" }], // WP REST API format
    taxonomies: {
      services_category: [
        { term_id: 927, name: "Tune Up", slug: "tune-up" }
      ]
    }
  },
  {
    id: 22021,
    title: "Overhaul Engine",
    slug: "overhaul-engine",
    featured_img: "https://example.com/image2.jpg",
    services_category: [{ id: 935, name: "Mesin", slug: "mesin" }], // WP REST API format
    taxonomies: {
      services_category: [
        { term_id: 935, name: "Mesin", slug: "mesin" }
      ]
    }
  },
  {
    id: 22019,
    title: "Servis AC Mobil",
    slug: "servis-ac-mobil",
    featured_img: "https://example.com/image3.jpg",
    services_category: [{ id: 940, name: "AC & Radiator", slug: "ac-radiator" }], // WP REST API format
    taxonomies: {
      services_category: [
        { term_id: 940, name: "AC & Radiator", slug: "ac-radiator" }
      ]
    }
  },
  {
    id: 22015,
    title: "Kyoto Shaking Machine",
    slug: "kyoto-shaking-machine",
    featured_img: "https://example.com/image4.jpg",
    services_category: [{ id: 936, name: "Kaki Kaki", slug: "kaki-kaki" }], // WP REST API format
    taxonomies: {
      services_category: [
        { term_id: 936, name: "Kaki Kaki", slug: "kaki-kaki" }
      ]
    }
  }
];

// NEW (fixed) extraction function - handles both flat and nested formats
function extractCategories(services) {
  const categoryMap = new Map();

  services.forEach((service) => {
    // Try flat services_category first (WP REST API format)
    const flatCategories = service.services_category || [];

    if (Array.isArray(flatCategories) && flatCategories.length > 0) {
      flatCategories.forEach((cat) => {
        const id = typeof cat === 'number' ? cat : (cat.term_id || cat.id);
        const name = typeof cat === 'string' ? cat : (cat.name || `Kategori ${id}`);
        if (id && !categoryMap.has(id)) {
          categoryMap.set(id, { id, name });
        }
      });
    }

    // Also check nested taxonomies format (BW API format)
    const taxonomies = service.taxonomies || {};
    const nestedCategories = taxonomies.services_category || [];
    if (Array.isArray(nestedCategories) && nestedCategories.length > 0) {
      nestedCategories.forEach((cat) => {
        const id = cat.term_id || cat.id;
        if (id && !categoryMap.has(id)) {
          categoryMap.set(id, {
            id,
            name: cat.name || `Kategori ${id}`
          });
        }
      });
    }
  });

  if (categoryMap.size === 0) {
    return [{ name: "Semua Layanan", id: 0 }];
  }

  return [
    { name: "Semua Layanan", id: 0 },
    ...Array.from(categoryMap.values())
  ];
}

function filterByCategory(services, selectedCategory, categories) {
  if (categories.length === 1 || selectedCategory === "Semua Layanan") {
    return services;
  }

  const cat = categories.find(c => c.name === selectedCategory);
  if (!cat || !cat.id) return services;

  return services.filter(s => {
    const flatCats = s.services_category || [];
    const nestedCats = (s.taxonomies || {}).services_category || [];

    // Check flat array
    if (Array.isArray(flatCats) && flatCats.length > 0) {
      const hasFlatMatch = flatCats.some(c => {
        const id = typeof c === 'number' ? c : (c.term_id || c.id);
        return id === cat.id;
      });
      if (hasFlatMatch) return true;
    }

    // Check nested object
    if (Array.isArray(nestedCats) && nestedCats.length > 0) {
      const hasNestedMatch = nestedCats.some(c => c.term_id === cat.id);
      if (hasNestedMatch) return true;
    }

    return false;
  });
}

// ============ TEST FRAMEWORK ============

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: Expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function assertContains(array, item, message) {
  if (!array.includes(item)) {
    throw new Error(`${message}: Array ${JSON.stringify(array)} does not contain ${item}`);
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
console.log('TDD Tests: WP REST API Services Filter');
console.log('========================================\n');

test('Extracts categories from flat services_category array', () => {
  const categories = extractCategories(MOCK_WP_REST_SERVICES);
  const names = categories.map(c => c.name);

  assertEqual(categories.length, 5, 'Should have 5 categories');
  assertContains(names, "Semua Layanan", 'Should have default');
  assertContains(names, "Tune Up", 'Should have Tune Up');
  assertContains(names, "Mesin", 'Should have Mesin');
  assertContains(names, "AC & Radiator", 'Should have AC & Radiator');
  assertContains(names, "Kaki Kaki", 'Should have Kaki Kaki');
});

test('Returns correct category IDs', () => {
  const categories = extractCategories(MOCK_WP_REST_SERVICES);

  const tuneUp = categories.find(c => c.name === "Tune Up");
  assertEqual(tuneUp.id, 927, 'Tune Up ID should be 927');

  const mesin = categories.find(c => c.name === "Mesin");
  assertEqual(mesin.id, 935, 'Mesin ID should be 935');
});

test('Filters "Mesin" correctly', () => {
  const categories = extractCategories(MOCK_WP_REST_SERVICES);
  const filtered = filterByCategory(MOCK_WP_REST_SERVICES, "Mesin", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "overhaul-engine", 'Should be Overhaul Engine');
});

test('Filters "AC & Radiator" correctly', () => {
  const categories = extractCategories(MOCK_WP_REST_SERVICES);
  const filtered = filterByCategory(MOCK_WP_REST_SERVICES, "AC & Radiator", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "servis-ac-mobil", 'Should be Servis AC Mobil');
});

test('Shows all services for "Semua Layanan"', () => {
  const categories = extractCategories(MOCK_WP_REST_SERVICES);
  const filtered = filterByCategory(MOCK_WP_REST_SERVICES, "Semua Layanan", categories);

  assertEqual(filtered.length, 4, 'Should return all 4 services');
});

test('Handles missing taxonomies gracefully', () => {
  const servicesWithMissing = [
    ...MOCK_WP_REST_SERVICES,
    { id: 999, title: "Unknown", slug: "unknown", services_category: [{ id: 0, name: "Lainnya", slug: "lainnya" }] }
  ];

  const categories = extractCategories(servicesWithMissing);
  assertEqual(categories.length, 5, 'Should still have 5 categories');
});

// ============ SUMMARY ============

console.log('\n========================================');
console.log(`SUMMARY: ${testsPassed}/${testsRun} tests passed`);
if (testsFailed > 0) {
  console.log(`❌ ${testsFailed} tests failed`);
}
console.log('========================================\n');

if (testsFailed > 0) {
  console.log('❌ SOME TESTS FAILED');
  process.exit(1);
} else {
  console.log('✅ ALL TESTS PASSED');
  console.log('\n🎯 WP REST API filter works correctly!\n');
}
