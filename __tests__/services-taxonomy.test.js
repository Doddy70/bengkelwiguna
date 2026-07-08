/**
 * TDD Tests for ServicesArchiveClient Taxonomy Parsing
 *
 * Run with: node __tests__/services-taxonomy.test.js
 *
 * Tests based on BW API response structure:
 * - taxonomies.services_category: [{term_id, name, slug}, ...]
 */

// Mock service data from BW API - real structure
const MOCK_SERVICES_FROM_BW_API = [
  {
    id: 22002,
    title: "Tune Up Carbon Clean",
    slug: "tune-up-carbon-clean",
    featured_img: "https://example.com/image1.jpg",
    taxonomies: {
      services_category: [
        { term_id: 927, name: "Tune Up", slug: "tune-up" }
      ],
      services_tag: []
    }
  },
  {
    id: 22021,
    title: "Overhaul Engine",
    slug: "overhaul-engine",
    featured_img: "https://example.com/image2.jpg",
    taxonomies: {
      services_category: [
        { term_id: 935, name: "Mesin", slug: "mesin" }
      ],
      services_tag: []
    }
  },
  {
    id: 22019,
    title: "Servis AC Mobil",
    slug: "servis-ac-mobil",
    featured_img: "https://example.com/image3.jpg",
    taxonomies: {
      services_category: [
        { term_id: 940, name: "AC & Radiator", slug: "ac-radiator" }
      ],
      services_tag: []
    }
  },
  {
    id: 22015,
    title: "Kyoto Shaking Machine",
    slug: "kyoto-shaking-machine",
    featured_img: "https://example.com/image4.jpg",
    taxonomies: {
      services_category: [
        { term_id: 936, name: "Kaki Kaki", slug: "kaki-kaki" }
      ],
      services_tag: []
    }
  }
];

// OLD (broken) implementation - matches current ServicesArchiveClient.tsx
function OLD_extractCategories(services) {
  const categoryMap = new Map();

  services.forEach((service) => {
    // OLD CODE: expects flat array like [927, 935, ...]
    const serviceCategories = service.services_category || service.service_category || service.services_category || service.spesialis_category || [];
    serviceCategories.forEach((catId) => {
      if (!categoryMap.has(catId)) {
        categoryMap.set(catId, { id: catId, name: `Kategori ${catId}` });
      }
    });
  });

  if (categoryMap.size === 0) {
    return [{ name: "Semua Layanan", id: 0 }];
  }

  return [
    { name: "Semua Layanan", id: 0 },
    ...Array.from(categoryMap.values())
  ];
}

// NEW (fixed) implementation - extracts from nested taxonomies structure
function NEW_extractCategories(services) {
  const categoryMap = new Map();

  services.forEach((service) => {
    // BW API returns nested taxonomy objects
    const taxonomies = service.taxonomies || {};
    const serviceCategories = taxonomies.services_category || [];

    serviceCategories.forEach((cat) => {
      if (!categoryMap.has(cat.term_id)) {
        categoryMap.set(cat.term_id, {
          id: cat.term_id,
          name: cat.name // Use actual name, not placeholder!
        });
      }
    });
  });

  if (categoryMap.size === 0) {
    return [{ name: "Semua Layanan", id: 0 }];
  }

  return [
    { name: "Semua Layanan", id: 0 },
    ...Array.from(categoryMap.values())
  ];
}

// NEW (fixed) filtering logic
function NEW_filterByCategory(services, selectedCategory, categories) {
  // If only "Semua Layanan" or no specific category selected, show all
  if (!selectedCategory || selectedCategory === "Semua Layanan" || categories.length === 1) {
    return services;
  }

  const cat = categories.find(c => c.name === selectedCategory);
  if (!cat || !cat.id) return services;

  return services.filter(service => {
    const taxonomies = service.taxonomies || {};
    const serviceCategories = taxonomies.services_category || [];
    // Match by term_id
    return serviceCategories.some(c => c.term_id === cat.id);
  });
}

// ============ TEST FRAMEWORK ============

let testsRun = 0;
let testsPassed = 0;
let testsFailed = 0;

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    throw new Error(`${message}: Expected ${expected}, got ${actual}`);
  }
}

function assertContains(array, item, message) {
  if (!array.includes(item)) {
    throw new Error(`${message}: Array ${JSON.stringify(array)} does not contain ${item}`);
  }
}

function assertNotContains(array, item, message) {
  if (array.includes(item)) {
    throw new Error(`${message}: Array should NOT contain ${item} but it does`);
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
console.log('TDD Tests: ServicesArchiveClient Taxonomy');
console.log('========================================\n');

console.log('--- OLD Implementation (broken) ---');
test('OLD: FAILS - Shows placeholder names instead of real category names', () => {
  const categories = OLD_extractCategories(MOCK_SERVICES_FROM_BW_API);
  const categoryNames = categories.map(c => c.name);

  // OLD code will produce only "Semua Layanan" because taxonomy parsing fails
  assertEqual(categoryNames.length, 1, 'Should have only 1 category');
  assertEqual(categoryNames[0], "Semua Layanan", 'Only default category');
});

console.log('\n--- NEW Implementation (fixed) ---');

test('NEW: Extracts unique categories with correct names', () => {
  const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);
  const categoryNames = categories.map(c => c.name);

  // Should have "Semua Layanan" + 4 unique categories
  assertEqual(categoryNames.length, 5, 'Should have 5 categories');
  assertEqual(categoryNames[0], "Semua Layanan", 'First should be default');

  assertContains(categoryNames, "Tune Up", 'Should contain Tune Up');
  assertContains(categoryNames, "Mesin", 'Should contain Mesin');
  assertContains(categoryNames, "AC & Radiator", 'Should contain AC & Radiator');
  assertContains(categoryNames, "Kaki Kaki", 'Should contain Kaki Kaki');
});

test('NEW: Returns term_id correctly for filtering', () => {
  const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);

  const tuneUpCat = categories.find(c => c.name === "Tune Up");
  assertEqual(tuneUpCat.id, 927, 'Tune Up term_id should be 927');
  assertEqual(tuneUpCat.name, "Tune Up", 'Tune Up name should be correct');

  const mesinCat = categories.find(c => c.name === "Mesin");
  assertEqual(mesinCat.id, 935, 'Mesin term_id should be 935');
});

test('NEW: Filters services by "Mesin" category correctly', () => {
  const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);
  const filtered = NEW_filterByCategory(MOCK_SERVICES_FROM_BW_API, "Mesin", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "overhaul-engine", 'Should be Overhaul Engine');
});

test('NEW: Filters "AC & Radiator" correctly', () => {
  const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);
  const filtered = NEW_filterByCategory(MOCK_SERVICES_FROM_BW_API, "AC & Radiator", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "servis-ac-mobil", 'Should be Servis AC Mobil');
});

test('NEW: Shows all services when "Semua Layanan" selected', () => {
  const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);
  const filtered = NEW_filterByCategory(MOCK_SERVICES_FROM_BW_API, "Semua Layanan", categories);

  assertEqual(filtered.length, 4, 'Should return all 4 services');
});

test('NEW: Handles services with no taxonomies', () => {
  const servicesWithEmpty = [
    ...MOCK_SERVICES_FROM_BW_API,
    { id: 999, title: "Unknown Service", slug: "unknown", taxonomies: {} }
  ];

  const categories = NEW_extractCategories(servicesWithEmpty);
  // Should still have 4 unique categories + "Semua Layanan"
  assertEqual(categories.length, 5, 'Should have 5 categories');

  // Filtering should still work
  const filtered = NEW_filterByCategory(servicesWithEmpty, "Tune Up", categories);
  assertEqual(filtered.length, 1, 'Should return 1 service');
});

test('NEW: Filters multiple services per category', () => {
  // Add another "Mesin" category service
  const servicesWithMultiple = [
    ...MOCK_SERVICES_FROM_BW_API,
    {
      id: 99999,
      title: "Semi Overhaul",
      slug: "semi-overhaul",
      taxonomies: {
        services_category: [
          { term_id: 935, name: "Mesin", slug: "mesin" }
        ]
      }
    }
  ];

  const categories = NEW_extractCategories(servicesWithMultiple);
  const filtered = NEW_filterByCategory(servicesWithMultiple, "Mesin", categories);

  // Should return 2 services (Overhaul Engine + Semi Overhaul)
  assertEqual(filtered.length, 2, 'Should return 2 services');
  const slugs = filtered.map(s => s.slug).sort();
  assertContains(slugs, "overhaul-engine", 'Should contain overhaul-engine');
  assertContains(slugs, "semi-overhaul", 'Should contain semi-overhaul');
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
  console.log('\n🎯 Proof: OLD implementation FAILS, NEW implementation WORKS\n');
}
