# WordPress Integration - Enhanced with AI Skills

This directory contains the enhanced WordPress integration for Bengkel Wiguna, utilizing both `wp-rest-api` and `wp-abilities-api` skills from the WordPress Agent Skills repository.

## Files Overview

| File | Description | Skill Reference |
|------|-------------|-----------------|
| `wp-client.ts` | Type-safe WordPress REST API client | wp-rest-api |
| `wp-abilities.ts` | WordPress Abilities API integration | wp-abilities-api |
| `wp-integration-examples.ts` | Complete usage examples | Both skills |

## Quick Start

### 1. Direct REST API Usage

```typescript
import { createWPAPIClient, extractSEOMetadata } from './wp-client'

const client = createWPAPIClient()

// Fetch services
const services = await client.fetchAll('/services')

// Fetch single post with SEO
const post = await client.fetch('/posts?slug=hello-world&_embed')
const seo = extractSEOMetadata(post)
```

### 2. Abilities API Usage

```typescript
import {
  fetchAbilities,
  checkAbility,
  executeAbility,
  BENGKEL_ABILITIES
} from './wp-abilities'

// Check if AI features are available
const hasAI = await checkAbility(BENGKEL_ABILITIES.CONTENT_SUGGESTIONS)

// Execute an ability
const suggestions = await executeAbility(
  BENGKEL_ABILITIES.CONTENT_SUGGESTIONS,
  { topic: 'perawatan mobil', count: 5 }
)
```

### 3. Combined Pattern (Recommended)

```typescript
import { getHomePageData, getBlogPostWithAI } from './wp-integration-examples'

// Fetch homepage with all data in parallel
const homeData = await getHomePageData()

// Get blog post with AI enhancement
const post = await getBlogPostWithAI('tips-perawatan-mesin')
```

## Features

### wp-client.ts

- ✅ Type-safe API calls (TypeScript interfaces for all entities)
- ✅ Automatic retry with exponential backoff
- ✅ Response caching with TTL
- ✅ Pagination handling (up to 100 per_page)
- ✅ Rate limit detection and recovery
- ✅ SEO metadata extraction (Rank Math Pro, Yoast)
- ✅ Parallel fetching for multiple endpoints

### wp-abilities.ts

- ✅ Ability registration helpers (PHP template included)
- ✅ REST endpoint registration patterns
- ✅ Client-side ability consumption
- ✅ Permission checking
- ✅ Error code vocabulary for standardization
- ✅ Bengkel-specific ability constants

### wp-integration-examples.ts

- ✅ Services fetching (direct + abilities)
- ✅ Blog posts with AI suggestions
- ✅ Homepage data (parallel fetch)
- ✅ Booking management via abilities
- ✅ SEO verification
- ✅ Error recovery with fallback

## WordPress Setup Required

### 1. Install Abilities Plugin (if WP < 6.9)

The Abilities API requires WordPress 6.9+. For earlier versions, install the Abilities API plugin.

### 2. Add PHP Plugin for Abilities Registration

Copy the template from `wp-abilities.ts` → `WP_ABILITIES_PLUGIN_TEMPLATE` to a new plugin file in WordPress:

```php
// wp-content/plugins/bengkel-abilities/bengkel-abilities.php
// Paste the content from WP_ABILITIES_PLUGIN_TEMPLATE
```

### 3. Enable REST API for Custom Post Types

Ensure your custom post types (services, promosi) have:

```php
'show_in_rest' => true,
'rest_base'    => 'services',
```

## API Endpoints

### Direct REST

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/wp/v2/posts` | GET | Blog posts |
| `/wp/v2/services` | GET | Services CPT |
| `/wp/v2/promosi` | GET | Promotions CPT |
| `/wp/v2/categories` | GET | Categories |
| `/wp/v2/media` | GET | Media library |

### Abilities API

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/wp-abilities/v1/` | GET | List all abilities |
| `/wp-abilities/v1/bengkel/services` | GET | Services via abilities |
| `/wp-abilities/v1/bengkel/content-suggestions` | POST | AI content suggestions |

## Error Handling

```typescript
import { WPAPIError, WPRateLimitError, WPNotFoundError } from './wp-client'

try {
  const data = await client.fetch('/posts/99999')
} catch (error) {
  if (error instanceof WPNotFoundError) {
    // Handle 404
  } else if (error instanceof WPRateLimitError) {
    // Handle rate limit with retry-after
    await sleep(error.retryAfter * 1000)
  } else if (error instanceof WPAPIError) {
    // Handle general API error
  }
}
```

## Performance Tips

1. **Use parallel fetch** for multiple endpoints:
   ```typescript
   const [services, posts, categories] = await Promise.all([
     client.fetchAll('/services'),
     client.fetchAll('/posts'),
     client.fetchAll('/categories'),
   ])
   ```

2. **Cache SEO metadata** instead of re-parsing:
   ```typescript
   client.setCache('/posts/123', postData, 24 * 60 * 60 * 1000) // 24h
   ```

3. **Use `_fields`** to limit response size:
   ```typescript
   const titles = await client.fetch('/posts?_fields[]=title&_fields[]=slug')
   ```

4. **Prefer abilities for AI features** - they handle authentication and permission checks

## Verification

Test the integration:

```bash
# Test REST API
curl https://backend.bengkelwiguna.com/wp-json/wp/v2/services

# Test Abilities API
curl https://backend.bengkelwiguna.com/wp-json/wp-abilities/v1/
```

## References

- [wp-rest-api skill](https://github.com/WordPress/agent-skills#wp-rest-api)
- [wp-abilities-api skill](https://github.com/WordPress/agent-skills#wp-abilities-api)
- [WordPress REST API Handbook](https://developer.wordpress.org/rest-api/)
- [Abilities API Documentation](https://developer.wordpress.org/rest-api/extending-the-rest-api/abilities/)