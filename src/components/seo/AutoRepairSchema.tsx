import Script from 'next/script';

export default function AutoRepairSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Bengkel Wiguna",
    "image": "https://bengkelwiguna.com/images/logo/logo-panjang-bengkelwiguna-cropped.png",
    "@id": "https://bengkelwiguna.com",
    "url": "https://bengkelwiguna.com",
    "telephone": "+6281234567890", // Ganti dengan nomor aktual
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Raya Bogor", // Ganti dengan alamat aktual
      "addressLocality": "Depok",
      "addressRegion": "Jawa Barat",
      "postalCode": "16411", // Ganti dengan kodepos aktual
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -6.402460,
      "longitude": 106.840610
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "08:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/bengkelwiguna",
      "https://www.facebook.com/bengkelwiguna"
    ],
    "priceRange": "$$"
  };

  return (
    <Script
      id="schema-autorepair"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      strategy="beforeInteractive" // Ensure it loads quickly for SEO
    />
  );
}
