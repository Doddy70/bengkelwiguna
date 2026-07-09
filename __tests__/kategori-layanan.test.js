/**
 * TDD Tests: kategori_layanan Taxonomy Implementation
 *
 * Run with: node __tests__/kategori-layanan.test.js
 *
 * This test suite validates the ACF-based taxonomy approach
 * for Services CPT, replacing the BW Headless plugin taxonomy.
 *
 * EXPECTED STRUCTURE:
 * - Taxonomy: 'kategori_layanan' (slug)
 * - WP REST API: /wp-json/wp/v2/kategori_layanan
 * - Services filter: /wp-json/wp/v2/services?kategori_layanan=ID
 */

// ============ TEST DATA ============

// Mock WP REST API response for taxonomy terms
const MOCK_TAXONOMY_TERMS = [
  { id: 88, name: "Servis Kaki-Kaki", slug: "servis-kaki-kaki", count: 14 },
  { id: 234, name: "Servis AC Mobil", slug: "servis-ac-mobil", count: 12 },
  { id: 115, name: "Ganti Ban", slug: "ganti-ban", count: 5 },
  { id: 924, name: "Semi Overhaul", slug: "semi-overhaul", count: 4 },
  { id: 925, name: "Paket Service", slug: "paket-service", count: 3 },
  { id: 912, name: "Servis Berkala", slug: "servis-berkala", count: 3 },
  { id: 959, name: "Overhaul", slug: "overhaul", count: 1 },
  { id: 106, name: "Balancing", slug: "balancing", count: 1 },
  { id: 721, name: "Flushing Radiator", slug: "flushing-radiator", count: 1 },
  { id: 913, name: "Ganti Oli Mesin", slug: "ganti-oli-mesin", count: 1 },
  { id: 917, name: "Ganti Oli Transmisi", slug: "ganti-oli-transmisi", count: 1 },
];

// Mock services with _embed format from WP REST API
const MOCK_SERVICES_WITH_EMBED = [
  {
    id: 22002,
    title: { rendered: "Tune Up Carbon Clean" },
    slug: "tune-up-carbon-clean",
    _embedded: {
      "wp:term": [
        [
          { id: 927, name: "Tune Up", slug: "tune-up", taxonomy: "kategori_layanan" }
        ]
      ]
    }
  },
  {
    id: 22022,
    title: { rendered: "Overhaul Transmisi" },
    slug: "overhaul-transmisi",
    _embedded: {
      "wp:term": [
        [
          { id: 960, name: "Servis Transmisi", slug: "servis-transmisi", taxonomy: "kategori_layanan" }
        ]
      ]
    }
  },
  {
    id: 22021,
    title: { rendered: "Overhaul Engine" },
    slug: "overhaul-engine",
    _embedded: {
      "wp:term": [
        [
          { id: 959, name: "Overhaul", slug: "overhaul", taxonomy: "kategori_layanan" }
        ]
      ]
    }
  },
  {
    id: 22019,
    title: { rendered: "Servis AC Mobil" },
    slug: "servis-ac-mobil",
    _embedded: {
      "wp:term": [
        [
          { id: 234, name: "Servis AC Mobil", slug: "servis-ac-mobil", taxonomy: "kategori_layanan" }
        ]
      ]
    }
  },
  {
    id: 22017,
    title: { rendered: "Reset AC Mobil" },
    slug: "reset-ac-mobil",
    _embedded: {
      "wp:term": [
        [
          { id: 234, name: "Servis AC Mobil", slug: "servis-ac-mobil", taxonomy: "kategori_layanan" }
        ]
      ]
    }
  }
];

// ============ IMPLEMENTATION (to be implemented) ============

/**
 * Extract categories from WP REST API _embed format
 * Supports both 'kategori_layanan' and 'category' taxonomies
 */
function extractKategoriLayanan(services) {
  const categoryMap = new Map();

  services.forEach((service) => {
    // Extract from _embedded.wp:term
    const terms = service._embedded?.["wp:term"]?.[0] || [];

    terms.forEach((term) => {
      // Accept both 'kategori_layanan' and 'category' taxonomies
      if (term.taxonomy === 'kategori_layanan' || term.taxonomy === 'category') {
        if (!categoryMap.has(term.id)) {
          categoryMap.set(term.id, {
            id: term.id,
            name: term.name,
            slug: term.slug
          });
        }
      }
    });
  });

  if (categoryMap.size === 0) {
    return [{ name: "Semua Layanan", id: 0, slug: "all" }];
  }

  return [
    { name: "Semua Layanan", id: 0, slug: "all" },
    ...Array.from(categoryMap.values())
  ];
}

/**
 * Filter services by selected category
 */
function filterByKategoriLayanan(services, selectedCategory, categories) {
  // "Semua Layanan" means show all
  if (selectedCategory === "Semua Layanan" || selectedCategory === 0) {
    return services;
  }

  // Find category by name
  const cat = categories.find(c => c.name === selectedCategory);
  if (!cat || !cat.id) return services;

  return services.filter((service) => {
    const terms = service._embedded?.["wp:term"]?.[0] || [];
    return terms.some(term =>
      (term.taxonomy === 'kategori_layanan' || term.taxonomy === 'category')
      && term.id === cat.id
    );
  });
}

/**
 * Build WP API URL with taxonomy filter
 */
function buildTaxonomyFilterUrl(baseUrl, taxonomySlug, termId) {
  if (!termId || termId === 0) {
    return `${baseUrl}?per_page=99&_embed`;
  }
  return `${baseUrl}?${taxonomySlug}=${termId}&per_page=99&_embed`;
}

/**
 * Get taxonomy terms from WP API response headers
 * or direct term extraction
 */
function getTaxonomyFromResponse(services) {
  const taxonomyMap = new Map();

  services.forEach((service) => {
    const terms = service._embedded?.["wp:term"]?.[0] || [];
    terms.forEach((term) => {
      if (!taxonomyMap.has(term.slug)) {
        taxonomyMap.set(term.slug, term);
      }
    });
  });

  return Array.from(taxonomyMap.values());
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
    throw new Error(`${message}: Expected true, got ${condition}`);
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
console.log('TDD Tests: kategori_layanan Taxonomy');
console.log('========================================\n');

// Test Group 1: Category Extraction
console.log('\n📦 Category Extraction Tests\n');

test('Extracts "Semua Layanan" as default category', () => {
  const emptyServices = [];
  const categories = extractKategoriLayanan(emptyServices);
  assertEqual(categories.length, 1, 'Should have 1 default category');
  assertEqual(categories[0].name, "Semua Layanan", 'Should be default category');
  assertEqual(categories[0].id, 0, 'Default ID should be 0');
});

test('Extracts unique categories from services', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const names = categories.map(c => c.name);

  assertTrue(categories.length > 1, 'Should have more than default');
  assertContains(names, "Semua Layanan", 'Should have default');
  assertContains(names, "Tune Up", 'Should have Tune Up');
  assertContains(names, "Overhaul", 'Should have Overhaul');
  assertContains(names, "Servis AC Mobil", 'Should have Servis AC Mobil');
  assertContains(names, "Servis Transmisi", 'Should have Servis Transmisi');
});

test('Extracts category with correct ID', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);

  const servisAc = categories.find(c => c.name === "Servis AC Mobil");
  assertTrue(!!servisAc, 'Should find Servis AC Mobil');
  assertEqual(servisAc.id, 234, 'Servis AC Mobil ID should be 234');
  assertEqual(servisAc.slug, "servis-ac-mobil", 'Slug should match');
});

test('Removes duplicate categories (Servis AC Mobil appears twice)', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const servisAcCount = categories.filter(c => c.name === "Servis AC Mobil").length;
  assertEqual(servisAcCount, 1, 'Should only have 1 Servis AC Mobil');
});

// Test Group 2: Filtering
console.log('\n🔍 Filtering Tests\n');

test('Filters by "Servis AC Mobil" - returns 2 services', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const filtered = filterByKategoriLayanan(MOCK_SERVICES_WITH_EMBED, "Servis AC Mobil", categories);

  assertEqual(filtered.length, 2, 'Should return 2 services');
  const slugs = filtered.map(s => s.slug);
  assertContains(slugs, "servis-ac-mobil", 'Should contain Servis AC Mobil');
  assertContains(slugs, "reset-ac-mobil", 'Should contain Reset AC Mobil');
});

test('Filters by "Overhaul" - returns 1 service', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const filtered = filterByKategoriLayanan(MOCK_SERVICES_WITH_EMBED, "Overhaul", categories);

  assertEqual(filtered.length, 1, 'Should return 1 service');
  assertEqual(filtered[0].slug, "overhaul-engine", 'Should be Overhaul Engine');
});

test('"Semua Layanan" shows all services', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const filtered = filterByKategoriLayanan(MOCK_SERVICES_WITH_EMBED, "Semua Layanan", categories);

  assertEqual(filtered.length, 5, 'Should return all 5 services');
});

test('Invalid category returns all services', () => {
  const categories = extractKategoriLayanan(MOCK_SERVICES_WITH_EMBED);
  const filtered = filterByKategoriLayanan(MOCK_SERVICES_WITH_EMBED, "Non-Existent Category", categories);

  assertEqual(filtered.length, 5, 'Should return all services for unknown category');
});

// Test Group 3: URL Building
console.log('\n🔗 URL Building Tests\n');

test('Builds URL without filter for all services', () => {
  const url = buildTaxonomyFilterUrl('https://api.example.com/services', 'kategori_layanan', 0);
  assertEqual(url, 'https://api.example.com/services?per_page=99&_embed', 'Should have no filter');
});

test('Builds URL with taxonomy filter', () => {
  const url = buildTaxonomyFilterUrl('https://api.example.com/services', 'kategori_layanan', 234);
  assertEqual(url, 'https://api.example.com/services?kategori_layanan=234&per_page=99&_embed', 'Should have filter');
});

test('Builds URL with category ID 0', () => {
  const url = buildTaxonomyFilterUrl('https://api.example.com/services', 'kategori_layanan', 0);
  assertEqual(url, 'https://api.example.com/services?per_page=99&_embed', 'Should not include 0 filter');
});

// Test Group 4: Taxonomy Extraction
console.log('\n📋 Taxonomy Extraction Tests\n');

test('Extracts unique taxonomy terms', () => {
  const terms = getTaxonomyFromResponse(MOCK_SERVICES_WITH_EMBED);
  assertEqual(terms.length, 4, 'Should have 4 unique categories');
});

test('Taxonomy terms have required fields', () => {
  const terms = getTaxonomyFromResponse(MOCK_SERVICES_WITH_EMBED);
  const term = terms[0];

  assertTrue(term.hasOwnProperty('id'), 'Should have id');
  assertTrue(term.hasOwnProperty('name'), 'Should have name');
  assertTrue(term.hasOwnProperty('slug'), 'Should have slug');
  assertTrue(term.hasOwnProperty('taxonomy'), 'Should have taxonomy');
});

// Test Group 5: Edge Cases
console.log('\n⚠️ Edge Case Tests\n');

test('Handles service without _embedded', () => {
  const servicesWithoutEmbed = [
    { id: 1, title: { rendered: "Test" }, slug: "test" }
  ];
  const categories = extractKategoriLayanan(servicesWithoutEmbed);

  assertEqual(categories.length, 1, 'Should return default category');
  assertEqual(categories[0].name, "Semua Layanan", 'Should be default');
});

test('Handles empty services array', () => {
  const categories = extractKategoriLayanan([]);
  assertEqual(categories.length, 1, 'Should return default');
});

test('Handles service with empty wp:term', () => {
  const servicesWithEmptyTerms = [
    { id: 1, title: { rendered: "Test" }, slug: "test", _embedded: { "wp:term": [[]] } }
  ];
  const categories = extractKategoriLayanan(servicesWithEmptyTerms);

  assertEqual(categories.length, 1, 'Should return default only');
});

// ============ SUMMARY ============

console.log('\n========================================');
console.log(`SUMMARY: ${testsPassed}/${testsRun} tests passed`);
if (testsFailed > 0) {
  console.log(`❌ ${testsFailed} tests failed`);
}
console.log('========================================\n');

if (testsFailed > 0) {
  console.log('❌ SOME TESTS FAILED - Implementation needed');
  process.exit(1);
} else {
  console.log('✅ ALL TESTS PASSED - Implementation complete!\n');
  console.log('📝 Next Steps:');
  console.log('   1. Create taxonomy registration code');
  console.log('   2. Create ACF field group');
  console.log('   3. Update frontend component');
  console.log('   4. Deploy and verify\n');
}
