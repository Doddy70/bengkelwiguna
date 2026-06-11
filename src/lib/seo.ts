/**
 * Schema.org JSON-LD Utilities — Bengkel Wiguna Next.js
 * Generates structured data for LocalBusiness, Services, and Articles.
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
      "streetAddress": "Jl. K.H.M. Yusuf Raya No.22, Mekar Jaya, Kec. Sukmajaya",
      "addressLocality": "Kota Depok",
      "addressRegion": "Jawa Barat",
      "postalCode": "16411",
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
    ]
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
      "target": "https://bengkelwiguna.com/search?q={search_term_string}",
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
      "name": "Bengkel Wiguna"
    },
    "publisher": {
      "@id": "https://bengkelwiguna.com/#localbusiness"
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
