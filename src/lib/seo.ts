/**
 * Schema.org JSON-LD Utilities — Bengkel Wiguna Next.js
 * Generates structured data for LocalBusiness, Services, Articles, and more.
 * Compliant with Google's rich results guidelines.
 */

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "AutoRepairShop"],
    "@id": "https://bengkelwiguna.com/#localbusiness",
    "name": "Bengkel Wiguna",
    "image": "https://bengkelwiguna.com/logo-panjang-bengkelwiguna.png",
    "url": "https://bengkelwiguna.com",
    "telephone": "+6287817773888",
    "priceRange": "$$",
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
    "sameAs": [
      "https://www.instagram.com/bengkelwiguna/",
      "https://www.facebook.com/bengkelwiguna"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6287817773888",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID",
      "contactOption": ["WhatsApp", "TollFree"],
      "url": "https://wa.me/6287817773888"
    }
  };
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bengkelwiguna.com/#website",
    "url": "https://bengkelwiguna.com",
    "name": "Bengkel Wiguna",
    "publisher": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://bengkelwiguna.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };
}

export function generateServiceSchema(service: any) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Auto Repair Service",
    "provider": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "name": service.title?.rendered || service.title || "Layanan Bengkel Wiguna",
    "description": service.excerpt?.rendered || service.excerpt || "",
    "image": service.featured_img || null,
    "url": `https://bengkelwiguna.com/services/${service.slug}`
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
      "name": "Bengkel Wiguna",
      "url": "https://bengkelwiguna.com"
    },
    "publisher": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://bengkelwiguna.com/blog/${post.slug}`
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
        "text": faq.a
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
    "worstRating": "1"
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
 * Organization Schema (standalone)
 * For about/contact pages or when needed separately
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bengkelwiguna.com/#organization",
    "name": "Bengkel Wiguna",
    "url": "https://bengkelwiguna.com",
    "logo": "https://bengkelwiguna.com/logo-panjang-bengkelwiguna.png",
    "description": "Bengkel One Stop Service terpercaya di Depok sejak 2010. Perawatan mobil profesional dengan teknisi berpengalaman.",
    "telephone": "+6287817773888",
    "email": "info@bengkelwiguna.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Margonda No.268, Kemiri Muka, Kecamatan Beji",
      "addressLocality": "Kota Depok",
      "addressRegion": "Jawa Barat",
      "postalCode": "16423",
      "addressCountry": "ID"
    },
    "sameAs": [
      "https://www.instagram.com/bengkelwiguna/",
      "https://www.facebook.com/bengkelwiguna",
      "https://www.tiktok.com/@bengkelwiguna"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+6287817773888",
      "contactType": "customer service",
      "availableLanguage": ["Indonesian", "English"],
      "areaServed": "ID",
      "contactOption": "WhatsApp",
      "url": "https://wa.me/6287817773888"
    }
  };
}