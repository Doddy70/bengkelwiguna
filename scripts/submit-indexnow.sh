#!/bin/bash
# IndexNow Bulk Submit - Submit all blog URLs for instant indexing
# Usage: ./scripts/submit-indexnow.sh [--dry-run]

BASE_URL="https://bengkelwiguna.com"
API_URL="${BASE_URL}/api/indexnow"
SITEMAP_URL="${BASE_URL}/sitemap.xml"
DRY_RUN=false

[[ "$1" == "--dry-run" ]] && DRY_RUN=true && echo "DRY RUN MODE"

echo "IndexNow Bulk Submit Script"
echo "==============================="

# Check key
INDEXNOW_KEY="${INDEXNOW_KEY:-}"
[ -z "$INDEXNOW_KEY" ] && echo "WARNING: INDEXNOW_KEY not set"

# Fetch URLs
TEMP_FILE="/tmp/indexnow_urls_$$.txt"
curl -s "$SITEMAP_URL" | grep -oP '(?<=<loc>)[^<]+' | grep '/blog/' > "$TEMP_FILE"

URL_COUNT=$(wc -l < "$TEMP_FILE" 2>/dev/null || echo "0")
echo "Found $URL_COUNT blog URLs"

if [ "$URL_COUNT" -eq 0 ]; then
  echo "No URLs found"
  exit 1
fi

echo "Sample URLs:"
head -3 "$TEMP_FILE"
echo "..."
echo ""

if [ "$DRY_RUN" = true ]; then
  echo "Dry run complete. $URL_COUNT URLs ready."
  rm -f "$TEMP_FILE"
  exit 0
fi

# Submit
SUBMITTED=0
BATCH_SIZE=100

for ((i=0; i<$URL_COUNT; i+=$BATCH_SIZE)); do
  BATCH=$(sed -n "$((i+1)),$((i+BATCH_SIZE))p" "$TEMP_FILE")
  JSON=$(echo "$BATCH" | jq -R -s '{urls: split("\n") | map(select(length > 0))}')

  echo -n "Batch $((i/BATCH_SIZE + 1))... "
  RESPONSE=$(curl -s -X POST "$API_URL" -H "Content-Type: application/json" -d "$JSON" --max-time 30)

  if echo "$RESPONSE" | grep -q 'success\|submitted'; then
    echo "OK"
    SUBMITTED=$((SUBMITTED + $(echo "$BATCH" | wc -l)))
  else
    echo "FAIL"
  fi

  sleep 1
done

echo ""
echo "Done! Submitted: $SUBMITTED URLs"
rm -f "$TEMP_FILE"
