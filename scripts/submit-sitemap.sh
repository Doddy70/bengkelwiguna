#!/bin/bash
# Sitemap Submission Script - Bengkel Wiguna
# Usage: ./scripts/submit-sitemap.sh

SITE_URL="https://bengkelwiguna.com"
SITEMAP_URL="${SITE_URL}/sitemap.xml"

echo "📋 Sitemap Submission Script"
echo "============================="
echo ""
echo "🔍 Verifying sitemap is accessible..."
curl -s -I "${SITEMAP_URL}" | head -3
echo ""

echo "1️⃣  Submit via Google Search Console (Manual):"
echo "   - Go to https://search.google.com/search-console"
echo "   - Select your property: ${SITE_URL}"
echo "   - Go to Sitemaps in left sidebar"
echo "   - Enter 'sitemap.xml' in 'Add a sitemap'"
echo "   - Click Submit"
echo ""

echo "2️⃣  Alternative: Use Google PageSpeed API"
echo "   curl -X POST \\"
echo "     'https://www.google.com/pagead/datastudio/Configurator/getStatus'"
echo "     -d 'url=${SITEMAP_URL}'"
echo ""

echo "3️⃣  Verify sitemap content:"
curl -s "${SITEMAP_URL}" | head -20
echo ""
echo "..."
echo ""

echo "✅ Script complete!"
echo ""
echo "📊 Next steps:"
echo "   1. Submit sitemap in Google Search Console"
echo "   2. Run: ./scripts/audit-404.sh"
echo "   3. Monitor Google Search Console for indexing status"
