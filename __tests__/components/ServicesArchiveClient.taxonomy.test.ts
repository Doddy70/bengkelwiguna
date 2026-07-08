/**
 * TDD Tests for ServicesArchiveClient Taxonomy Parsing
 *
 * Tests based on BW API response structure:
 * - taxonomies.services_category: [{term_id, name, slug}, ...]
 * - taxonomies.services_tag: [{term_id, name, slug}, ...]
 */

import { renderHook, act } from '@testing-library/react';
import { useState, useMemo } from 'react';

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
      services_tag: [
        { term_id: 951, name: "Tune Up Carbon Clean", slug: "tune-up-carbon-clean" }
      ]
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

// OLD (broken) implementation
function OLD_extractCategories(services: any[]) {
  const categoryMap = new Map<number, { id: number; name: string }>();

  services.forEach((service: any) => {
    const serviceCategories = service.services_category || [];
    serviceCategories.forEach((catId: number) => {
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
function NEW_extractCategories(services: any[]) {
  const categoryMap = new Map<number, { id: number; name: string }>();

  services.forEach((service: any) => {
    // BW API returns nested taxonomy objects
    const taxonomies = service.taxonomies || {};
    const serviceCategories = taxonomies.services_category || [];

    serviceCategories.forEach((cat: { term_id: number; name: string; slug: string }) => {
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
function NEW_filterByCategory(services: any[], selectedCategory: string, categories: any[]) {
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
    return serviceCategories.some((c: any) => c.term_id === cat.id);
  });
}

// ============ TESTS ============

describe('ServicesArchiveClient Taxonomy Parsing', () => {

  describe('OLD Implementation (broken)', () => {
    test('❌ FAILS: Should NOT show category names as placeholders', () => {
      const categories = OLD_extractCategories(MOCK_SERVICES_FROM_BW_API);

      // This will FAIL because OLD code expects flat IDs
      const categoryNames = categories.map(c => c.name);

      // OLD code will produce "Kategori 927" instead of "Tune Up"
      expect(categoryNames).not.toContain("Kategori 927"); // Should show real names
      expect(categoryNames).toContain("Tune Up"); // But OLD code doesn't
    });
  });

  describe('NEW Implementation (fixed)', () => {
    test('✅ Extracts unique categories with correct names', () => {
      const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);

      // Should have "Semua Layanan" + 4 unique categories
      expect(categories.length).toBe(5);
      expect(categories[0].name).toBe("Semua Layanan");

      // Should have actual category names, not placeholders
      const categoryNames = categories.map(c => c.name);
      expect(categoryNames).toContain("Tune Up");
      expect(categoryNames).toContain("Mesin");
      expect(categoryNames).toContain("AC & Radiator");
      expect(categoryNames).toContain("Kaki Kaki");

      // Should NOT have placeholder names
      expect(categoryNames).not.toContain("Kategori 927");
      expect(categoryNames).not.toContain("Kategori 935");
    });

    test('✅ Returns term_id correctly for filtering', () => {
      const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);

      // Find "Tune Up" category
      const tuneUpCat = categories.find(c => c.name === "Tune Up");
      expect(tuneUpCat?.id).toBe(927);
      expect(tuneUpCat?.name).toBe("Tune Up");
    });

    test('✅ Filters services by category correctly', () => {
      const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);

      // Filter by "Mesin" (id: 935)
      const filtered = NEW_filterByCategory(MOCK_SERVICES_FROM_BW_API, "Mesin", categories);

      expect(filtered.length).toBe(1);
      expect(filtered[0].slug).toBe("overhaul-engine");
    });

    test('✅ Shows all services when "Semua Layanan" selected', () => {
      const categories = NEW_extractCategories(MOCK_SERVICES_FROM_BW_API);
      const filtered = NEW_filterByCategory(MOCK_SERVICES_FROM_BW_API, "Semua Layanan", categories);

      expect(filtered.length).toBe(4);
    });

    test('✅ Handles services with no taxonomies', () => {
      const servicesWithEmpty = [
        ...MOCK_SERVICES_FROM_BW_API,
        { id: 999, title: "Unknown Service", slug: "unknown", taxonomies: {} }
      ];

      const categories = NEW_extractCategories(servicesWithEmpty);
      // Should still have 4 unique categories + "Semua Layanan"
      expect(categories.length).toBe(5);

      // Filtering should work
      const filtered = NEW_filterByCategory(servicesWithEmpty, "Tune Up", categories);
      expect(filtered.length).toBe(1);
    });
  });
});
