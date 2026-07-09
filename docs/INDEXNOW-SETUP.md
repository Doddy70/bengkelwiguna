# IndexNow Setup Guide

## What is IndexNow?

IndexNow is a protocol for instantly notifying search engines when content is updated.

**Benefits:**
- Instant indexing (hours vs weeks)
- Improved SEO visibility
- Better crawl efficiency

## Supported Engines

| Engine | Status |
|--------|--------|
| Bing | Supported |
| Yandex | Supported |
| Google | Increasingly supported |

## Setup Steps

### 1. Generate IndexNow Key

Visit https://www.indexnow.org/ and generate a key.

### 2. Add to .env.local

```bash
INDEXNOW_KEY=your-key-here
```

### 3. Create Key File

```bash
mkdir -p public/.well-known
echo "your-key-here" > public/.well-known/indexnow
```

## Usage

### Submit URLs via API

```bash
curl -X POST https://bengkelwiguna.com/api/indexnow \
  -H "Content-Type: application/json" \
  -d '{"urls": ["https://bengkelwiguna.com/blog/new-post"]}'
```

### Bulk Submit All Blog URLs

```bash
# Dry run
./scripts/submit-indexnow.sh --dry-run

# Submit all
./scripts/submit-indexnow.sh
```

## WordPress Auto-Ping

Enable in WordPress: Settings > Writing > Update Services

```
http://rpc.pingomatic.com
http://blogsearch.google.com/ping/RPC2
http://rpc.technorati.com/rpc/ping
```

## Links

- https://www.indexnow.org/
- Bing Webmaster Tools
- Google Search Console
