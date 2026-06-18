/**
 * Schema.org JSON-LD Utilities — Bengkel Wiguna Next.js
 * Generates structured data for LocalBusiness, Services, Articles, and more.
 * Compliant with Google's rich results guidelines.
 * Enhanced with sameAs links for AI/Knowledge Graph recognition.
 */

// Phone Strategy:
// - 6287817773888: Customer Service (existing customers)
// - 6281717773888: Funneling (new customer acquisition)
const PHONE_CS = "+6287817773888"; // Customer Service
const PHONE_WA = "+6281717773888"; // WhatsApp Funneling
const WA_URL = "https://wa.me/6281717773888";

// Brand colors for reference
const BRAND = {
  BLUE: "#224297",
  GOLD: "#ffd900",
  NAME: "Bengkel Wiguna",
  TAGLINE: "Berkomitmen pada kejujuran dan pelayanan maksimal. No Drama, No Tipu-Tipu"
};

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepairShop"],
    "@id": "https://bengkelwiguna.com/#localbusiness",
    "name": BRAND.NAME,
    "alternateName": ["Wiguna Workshop", "Bengkel Wiguna Depok"],
    "description": `Bengkel Wiguna adalah bengkel one stop service terpercaya untuk kota Depok yang telah berdiri sejak tahun 1990. ${BRAND.TAGLINE}. Kami memberikan solusi perawatan mobil profesional dengan teknisi berpengalaman.`,
    "image": "https://bengkelwiguna.com/logo-panjang-bengkelwiguna.png",
    "url": "https://bengkelwiguna.com",
    "telephone": PHONE_CS,
    "priceRange": "$$",
    "slogan": BRAND.TAGLINE,
    "foundingDate": "1990",
    "foundingLocation": "Depok, Jawa Barat, Indonesia",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji",
      "addressLocality": "Kota Depok",
      "addressRegion": "Jawa Barat",
      "postalCode": "16423",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.402460,
      "longitude": 106.840610
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "15:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Depok"
      },
      {
        "@type": "State",
        "name": "Jawa Barat"
      },
      {
        "@type": "Country",
        "name": "Indonesia"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Layanan Servis Mobil",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Servis Ringan"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Perbaikan Mesin"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spooring & Balancing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Service AC Mobil"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Detailing"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Body Repair"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/bengkelwiguna/",
      "https://www.facebook.com/bengkelwiguna",
      "https://www.tiktok.com/@bengkelwiguna",
      "https://www.youtube.com/@bengkelwiguna",
      "https://wa.me/6281717773888",
      // Wikidata will be added after entry is created
      // "https://www.wikidata.org/wiki/QXXXXXXX"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": PHONE_CS,
        "contactType": "customer service",
        "availableLanguage": ["Indonesian", "English"],
        "areaServed": "ID",
        "contactOption": "TollFree",
        "description": "Customer Service untuk pelanggan existing"
      },
      {
        "@type": "ContactPoint",
        "telephone": PHONE_WA,
        "contactType": "sales",
        "contactOption": "WhatsApp",
        "availableLanguage": ["Indonesian"],
        "areaServed": "ID",
        "url": WA_URL,
        "description": "WhatsApp untuk reservasi dan konsultasi pelanggan baru"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5"
    }
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bengkelwiguna.com/#organization",
    "name": BRAND.NAME,
    "alternateName": ["Wiguna Workshop", "Bengkel Wiguna Depok"],
    "description": `Bengkel Wiguna adalah bengkel one stop service terpercaya di Kota Depok yang berdiri sejak 1990. Kami mengedepankan kejujuran dan pelayanan maksimal kepada customer.`,
    "url": "https://bengkelwiguna.com",
    "logo": "https://bengkelwiguna.com/logo-panjang-bengkelwiguna.png",
    "image": "https://bengkelwiguna.com/images/about/bbbb.jpg",
    "telephone": PHONE_CS,
    "email": "info@bengkelwiguna.com",
    "foundingDate": "1990",
    "foundingLocation": "Depok, Jawa Barat, Indonesia",
    "slogan": BRAND.TAGLINE,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji",
      "addressLocality": "Kota Depok",
      "addressRegion": "Jawa Barat",
      "postalCode": "16423",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.402460,
      "longitude": 106.840610
    },
    "sameAs": [
      "https://www.instagram.com/bengkelwiguna/",
      "https://www.facebook.com/bengkelwiguna",
      "https://www.tiktok.com/@bengkelwiguna",
      "https://www.youtube.com/@bengkelwiguna",
      WA_URL
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_CS,
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID",
      "contactOption": "WhatsApp",
      "url": WA_URL
    },
    "knowsAbout": [
      "Car Maintenance",
      "Auto Repair",
      "Vehicle Diagnostics",
      "Car Service",
      "Automotive Repair"
    ],
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "license",
        "name": "Izin Bengkel Resmi"
      }
    ]
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bengkelwiguna.com/#website",
    "url": "https://bengkelwiguna.com",
    "name": `${BRAND.NAME} - Bengkel Mobil One Stop Service Terpercaya di Depok`,
    "description": `Berdiri sejak 1990, Bengkel Wiguna melayani dengan kejujuran dan pelayanan maksimal. Solusi perawatan mobil terpercaya di kota Depok.`,
    "publisher": {
      "@id": "https://bengkelwiguna.com/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bengkelwiguna.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "id-ID",
    "isPartOf": {
      "@id": "https://bengkelwiguna.com/#organization"
    }
  };
}

export function generateServiceSchema(service: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Auto Repair Service",
    "name": service.title?.rendered || service.title || "Layanan Bengkel Wiguna",
    "description": service.excerpt?.rendered || service.excerpt || "",
    "image": service.featured_img || null,
    "url": `https://bengkelwiguna.com/services/${service.slug}`,
    "provider": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "areaServed": {
      "@type": "City",
      "name": "Depok"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.title?.rendered || service.title
    }
  };
}

export function generateArticleSchema(post: any) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title?.rendered || post.title,
    "description": post.excerpt?.rendered || post.excerpt || "",
    "image": post._embedded?.['wp:featuredmedia']?.[0]?.source_url || null,
    "datePublished": post.date,
    "dateModified": post.modified || post.date,
    "author": {
      "@type": "Organization",
      "name": BRAND.NAME,
      "url": "https://bengkelwiguna.com"
    },
    "publisher": {
      "@id": "https://bengkelwiguna.com/#organization"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bengkelwiguna.com/blog/${post.slug}`
    },
    "about": {
      "@type": "Thing",
      "name": "Car Maintenance",
      "description": "Tips and guides for car maintenance and repair"
    }
  };
}

export function generateFAQSchema(faqs: Array<{ q: string, a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
        "answeredBy": {
          "@type": "Organization",
          "name": BRAND.NAME
        }
      }
    }))
  };
}

/**
 * BreadcrumbList Schema
 * For pages with breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string, url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Review/AggregateRating Schema
 * For Google Reviews section on homepage
 */
export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "LocalBusiness",
      "name": BRAND.NAME,
      "image": "https://bengkelwiguna.com/logo-panjang-bengkelwiguna.png",
      "telephone": PHONE_CS,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Jl. Margonda No.268",
        "addressLocality": "Depok",
        "addressRegion": "Jawa Barat",
        "addressCountry": "ID"
      }
    }
  };
}

/**
 * SpecialOffer Schema
 * For promotional/discount pages
 */
export function generateSpecialOfferSchema(promo: any) {
  const hasDiscount = promo.harga_asli && promo.harga_promo;

  return {
    "@context": "https://schema.org",
    "@type": "SpecialOffer",
    "name": promo.title?.rendered || promo.title,
    "description": promo.excerpt?.rendered || promo.excerpt || "",
    "image": promo.featured_img || null,
    "url": `https://bengkelwiguna.com/promosi/${promo.slug}`,
    "price": promo.harga_promo?.replace(/[^0-9]/g, '') || "0",
    "priceCurrency": "IDR",
    "availability": "https://schema.org/InStock",
    "validFrom": promo.date || undefined,
    "validThrough": promo.tanggal_selesai ? `${promo.tanggal_selesai}T23:59:59+07:00` : undefined,
    "seller": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "hasDiscountPercentage": hasDiscount
      ? Math.round((1 - parseFloat(promo.harga_promo.replace(/[^0-9.]/g, '')) / parseFloat(promo.harga_asli.replace(/[^0-9.]/g, ''))) * 100)
      : undefined,
    "discountCurrency": "IDR"
  };
}

/**
 * About Page Schema
 * For /tentang-wiguna page
 */
export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@id": "https://bengkelwiguna.com/#organization"
    },
    "description": `Berdiri sejak 1990, Bengkel Wiguna adalah bengkel one stop service terpercaya yang telah menjadi bagian dari perjalanan masyarakat kota Depok. Kami menjunjung tinggi kejujuran dan pelayanan maksimal.`,
    "about": {
      "@type": "Organization",
      "name": BRAND.NAME,
      "description": "Bengkel One Stop Service terpercaya di Depok",
      "foundingDate": "1990",
      "foundingLocation": "Depok, Jawa Barat",
      "telephone": PHONE_CS,
      "areaServed": {
        "@type": "City",
        "name": "Depok"
      }
    }
  };
}

/**
 * Contact Page Schema
 * For /lokasi page
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "description": "Hubungi Bengkel Wiguna untuk reservasi servis atau konsultasi gratis",
    "url": "https://bengkelwiguna.com/lokasi",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": PHONE_CS,
      "contactType": "customer service",
      "availableLanguage": ["Indonesian"],
      "areaServed": "ID",
      "contactOption": "WhatsApp",
      "url": WA_URL
    }
  };
}
