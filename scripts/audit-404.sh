#!/bin/bash
# 404 Audit Script - Analyze Google Search Console 404s
# Usage: ./scripts/audit-404.sh

echo "🔍 404 Audit Instructions"
echo "========================"
echo ""
echo "1. Export 404 URLs from Google Search Console:"
echo "   - Go to https://search.google.com/search-console"
echo "   - Select your property"
echo "   - Go to Pages → Why pages aren't indexed"
echo "   - Filter by 'Not found (404)'"
echo "   - Click 'Export'"
echo ""
echo "2. Common 404 patterns to check:"
echo "   - Old WordPress date-based URLs: /2023/01/15/post-name"
echo "   - Old category URLs: /category/post-name"
echo "   - Old tag URLs: /tag/post-name"
echo "   - Case sensitivity issues: /Post-Name vs /post-name"
echo "   - Special characters: /post-name-v2"
echo ""
echo "3. Create a CSV report with:"
echo "   - Column A: 404 URL
   - Column B: Likely correct URL
   - Column C: Action (redirect/fix/delete)
echo ""
echo "4. Submit to redirect handler after Phase 2 is deployed"
