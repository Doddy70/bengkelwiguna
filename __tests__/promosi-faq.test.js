/**
 * TDD Tests for Promosi FAQ Field Access
 *
 * Run with: node __tests__/promosi-faq.test.js
 *
 * Tests based on BW API response structure:
 * - FAQ data is in: promo.meta.bw_promosi_faq (JSON string)
 * - NOT in: promo.faq (which is typed in interface but not returned by API)
 */

// Mock promo data from BW API - real structure
const MOCK_PROMO_FROM_BW_API = {
  ID: 21937,
  post_title: "Promo Detoks Mesin",
  post_status: "publish",
  post_type: "promosi",
  post_excerpt: "Promo detoks mesin untuk performa optimal...",
  featured_image: "https://example.com/promo-detoks.jpg",
  taxonomies: {
    promosi_category: [{ term_id: 100, name: "Regular", slug: "regular" }]
  },
  meta: {
    harga_asli: "Rp 350.000",
    harga_promo: "Rp 250.000",
    diskon_persen: "30",
    bw_promosi_faq: '[{"q":"Apa itu detoks mesin?","a":"Detoks mesin adalah..."},{"q":"Berapa lama?","a":"Sekitar 1-2 jam."}]',
    syarat_ketentuan: "Tidak berlaku untuk mobil dengan mesin rusak berat.",
    treatment_utama: "<ul><li>Cek kondisi mesin</li><li>Flush karbon</li></ul>"
  }
};

// OLD (broken) implementation - matches current promosi/[slug]/page.tsx
function OLD_parseFaq(promo) {
  // OLD CODE: accesses promo.faq directly
  // But BW API returns FAQ in promo.meta.bw_promosi_faq
  return promo.faq || null;
}

// NEW (fixed) implementation
function NEW_parseFaq(promo) {
  // BW API structure: promo.meta.bw_promosi_faq (JSON string)
  // Need to parse it from meta object
  const meta = promo.meta || {};

  // Try multiple field names for compatibility
  const faqField = meta.bw_promosi_faq || promo.faq || null;

  if (!faqField) return [];

  // Parse JSON string if needed
  if (typeof faqField === 'string') {
    try {
      return JSON.parse(faqField);
    } catch {
      return [];
    }
  }

  return faqField;
}

// NEW (fixed) implementation for syarat_ketentuan
function NEW_parseSyarat(promo) {
  const meta = promo.meta || {};
  return meta.syarat_ketentuan || promo.syarat_ketentuan || '';
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

function assertArrayLength(actual, expected, message) {
  if (actual.length !== expected) {
    throw new Error(`${message}: Expected ${expected} items, got ${actual.length}`);
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
console.log('TDD Tests: Promosi FAQ Field Access');
console.log('========================================\n');

console.log('--- OLD Implementation (broken) ---');
test('OLD: FAILS - Cannot access FAQ data', () => {
  const faq = OLD_parseFaq(MOCK_PROMO_FROM_BW_API);
  // OLD code will return null because promo.faq doesn't exist
  assertEqual(faq, null, 'FAQ should be null with OLD implementation');
});

console.log('\n--- NEW Implementation (fixed) ---');

test('NEW: Parses FAQ from meta.bw_promosi_faq', () => {
  const faq = NEW_parseFaq(MOCK_PROMO_FROM_BW_API);

  assertArrayLength(faq, 2, 'Should return 2 FAQ items');
  assertEqual(faq[0].q, "Apa itu detoks mesin?", 'First question should match');
  assertEqual(faq[0].a, "Detoks mesin adalah...", 'First answer should match');
});

test('NEW: Returns empty array when no FAQ', () => {
  const promoWithoutFaq = {
    ...MOCK_PROMO_FROM_BW_API,
    meta: {}
  };
  const faq = NEW_parseFaq(promoWithoutFaq);
  assertArrayLength(faq, 0, 'Should return empty array');
});

test('NEW: Handles promo.faq top-level field (for compatibility)', () => {
  const promoWithFaqTopLevel = {
    ...MOCK_PROMO_FROM_BW_API,
    meta: {},
    faq: [{ q: "Test Q", a: "Test A" }]
  };
  const faq = NEW_parseFaq(promoWithFaqTopLevel);
  assertArrayLength(faq, 1, 'Should return 1 FAQ item');
  assertEqual(faq[0].q, "Test Q", 'Question should match');
});

test('NEW: Priority - meta.bw_promosi_faq over promo.faq', () => {
  // When BOTH exist, meta.bw_promosi_faq should take priority
  const promoWithBoth = {
    ...MOCK_PROMO_FROM_BW_API,
    faq: [{ q: "Wrong Q", a: "Wrong A" }]
  };
  const faq = NEW_parseFaq(promoWithBoth);
  // Should use meta.bw_promosi_faq, not the top-level faq
  assertArrayLength(faq, 2, 'Should return 2 items from meta');
});

test('NEW: Parses syarat_ketentuan from meta', () => {
  const syarat = NEW_parseSyarat(MOCK_PROMO_FROM_BW_API);
  assertEqual(syarat, "Tidak berlaku untuk mobil dengan mesin rusak berat.", 'Should return syarat');
});

test('NEW: Returns empty string for missing syarat', () => {
  const promoWithoutSyarat = {
    ...MOCK_PROMO_FROM_BW_API,
    meta: {}
  };
  const syarat = NEW_parseSyarat(promoWithoutSyarat);
  assertEqual(syarat, '', 'Should return empty string');
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
