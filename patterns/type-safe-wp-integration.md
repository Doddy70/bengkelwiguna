# Pattern: Type-Safe Headless WordPress Integration

**Problem**: Headless WordPress integrations often suffer from fragmented fetch logic, inconsistent error handling between standard and custom endpoints, and a lack of type safety that leads to runtime errors.

**When to use**: When building a Next.js (or similar) frontend that consumes data from multiple WordPress REST API namespaces (e.g., `/wp/v2` and `/bw/v1`).

**When NOT to use**: For simple projects with only a single API endpoint and minimal data transformation needs.

## Template

### 1. Centralized Type Definition (`src/types/wordpress.ts`)
Standardize the WordPress post structure and extend it for Custom Post Types.

```typescript
export interface WPPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  // ... common fields
  rank_math_title?: string; // SEO extension
}

export interface CustomPost extends WPPost {
  custom_meta_field: string;
}
```

### 2. Consolidated API Fetcher (`src/lib/wordpress.ts`)
Use a single core fetcher that handles base URLs, timeouts, and revalidation.

```typescript
async function apiFetch<T>(
  endpoint: string, 
  base: 'wp' | 'bw' = 'wp', 
  revalidate: number = 3600
): Promise<T | null> {
  const baseUrl = base === 'wp' ? WP_API_BASE : BW_API_BASE;
  try {
    const response = await fetch(`${baseUrl}${endpoint}`, { next: { revalidate } });
    if (!response.ok) return null;
    return await response.json();
  } catch {
    return null;
  }
}
```

## Pitfalls
- **Over-abstraction**: Trying to handle every single fetch variation in one function can make it brittle. Keep it focused on the "base URL + revalidate" pattern.
- **Absolute Paths**: In the `bexon` migration, absolute CSS paths broke carousels. **Always use relative or npm imports.**

## Examples
- `getAllServices()`: Uses `bw` base with `REVALIDATE_LIST`.
- `getPostBySlug(slug)`: Uses `wp` base with `REVALIDATE_SINGLE`.
