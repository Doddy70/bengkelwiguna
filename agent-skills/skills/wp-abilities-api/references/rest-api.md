# REST API — `wp-abilities/v1`

The Abilities API exposes two REST namespaces. Both live under the WordPress
REST API and require no additional route registration — they are handled by
`class-wp-abilities-rest-controller.php` in WordPress core.

## Base URL

```
/wp-json/wp-abilities/v1/
```

Requires WordPress 6.9+. Authentication is inherited from the WP REST API
auth model — the same rules that apply to any REST endpoint apply here.

---

## Endpoint inventory

### `GET /wp-abilities/v1/abilities`

Returns every registered ability across all sources (core + plugins).
Optionally filterable by category.

**Arguments (query params)**

| Parameter | Type | Default | Description |
|---|---|---|---|
| `category` | string | — | Slug of an ability category. When provided, only abilities in that category are returned. |
| `context` | string | `view` | Request context. `view` — no auth required (public). `edit` — requires `edit_others_posts` or equivalent. |

**Response shape (200 OK)**

```json
{
  "abilities": [
    {
      "id": "wp-core/get-post",
      "label": "Get Post",
      "description": "Fetch a single post by ID, including all standard fields, meta, and computed properties.",
      "category": "wp-core/content",
      "meta": {
        "readonly": true,
        "destructive": false,
        "idempotent": true,
        "show_in_rest": true,
        "mcp": { "type": "tool", "public": true }
      },
      "input_schema": {
        "type": "object",
        "properties": {
          "post_id": {
            "type": "integer",
            "description": "ID of the post to retrieve."
          }
        },
        "required": ["post_id"]
      }
    }
  ],
  "meta": {
    "total": 12,
    "version": "1.0"
  }
}
```

**Error responses**

| HTTP | Code | Meaning |
|---|---|---|
| `400` | `rest_invalid_params` | Unknown query parameter. |
| `401` | — | Not authenticated for `context=edit`. |

---

### `GET /wp-abilities/v1/abilities/{id}`

Returns a single ability by its namespaced ID.

**Path parameters**

| Parameter | Type | Description |
|---|---|---|
| `id` | string | The ability's registered ID (e.g. `wp-core/get-post`). |

**Response shape (200 OK)**

```json
{
  "id": "wp-core/get-post",
  "label": "Get Post",
  "description": "Fetch a single post...",
  "category": "wp-core/content",
  "meta": {
    "readonly": true,
    "destructive": false,
    "idempotent": true,
    "show_in_resst": true,
    "mcp": { "type": "tool", "public": true }
  },
  "input_schema": { ... }
}
```

**Error responses**

| HTTP | Code | Meaning |
|---|---|---|
| `404` | `ability_not_found` | No ability registered with this ID. |

---

### `GET /wp-abilities/v1/categories`

Returns every registered ability category.

**Response shape (200 OK)**

```json
{
  "categories": [
    {
      "id": "wp-core/content",
      "label": "Content",
      "description": "Core content lifecycle abilities."
    },
    {
      "id": "wp-core/users",
      "label": "Users",
      "description": "User management abilities."
    }
  ]
}
```

---

### `GET /wp-abilities/v1/categories/{id}`

Returns a single category with its abilities.

**Path parameters**

| Parameter | Type | Description |
|---|---|---|
| `id` | string | Category slug (e.g. `wp-core/content`). |

**Response shape (200 OK)**

```json
{
  "id": "wp-core/content",
  "label": "Content",
  "description": "Core content lifecycle abilities.",
  "abilities": [ ... ]   // array of ability objects, same shape as /abilities
}
```

---

## Auth model

All `wp-abilities/v1` routes inherit the standard WP REST auth stack:

| Context | Auth required |
|---|---|
| `GET` — public endpoints (`context=view` or omitted) | None (public) |
| `GET` — `context=edit` | Authenticated user with `edit_others_posts` or equivalent capability |
| `POST` / `PUT` / `DELETE` | Authenticated user with appropriate capability |

The `permission_callback` on each route is handled by
`wp-abilities/v1/endpoints/class-wp-abilities-rest-controller.php` in core.
Individual plugins that register abilities do not re-register these routes —
registration is automatic via `wp_register_ability()` and
`wp_register_ability_category()`.

---

## Debug checklist

Use this when an ability or category is missing from REST responses.

### Step 1 — Confirm route registration

```bash
# List all registered routes under wp-abilities namespace
curl -s https://your-site.com/wp-json/wp/v2 | \
  jq '.routes | to_entries[] | select(.key | startswith("/wp-abilities"))'
```

Or in WP-CLI:

```bash
wp eval 'print_r( rest_get_server()->get_routes() );' | grep wp-abilities
```

### Step 2 — Confirm the ability has `show_in_rest`

An ability without `meta.show_in_rest: true` is registered in PHP but invisible
to REST. Check in the plugin source:

```php
// WRONG — missing show_in_rest
wp_register_ability( 'my-plugin/read-item', array(
    'label'       => 'Read Item',
    'execute'     => 'My_Plugin_Abilities::execute_read_item',
    'category'    => 'my-plugin/general',
) );

// CORRECT — show_in_rest enables REST visibility
wp_register_ability( 'my-plugin/read-item', array(
    'label'       => 'Read Item',
    'meta'        => array( 'show_in_rest' => true ),
    'execute'     => 'My_Plugin_Abilities::execute_read_item',
    'category'    => 'my-plugin/general',
) );
```

### Step 3 — Verify the ability is in the REST response

```bash
# Get all abilities
curl -s https://your-site.com/wp-json/wp-abilities/v1/abilities | \
  jq '.abilities[] | select(.id == "my-plugin/read-item")'

# Get all categories
curl -s https://your-site.com/wp-json/wp-abilities/v1/categories | \
  jq '.categories[]'
```

If the ability is absent from both, either:
- Registration hook not firing (wrong init priority or file not loaded), or
- `meta.show_in_rest` is `false` or missing.

### Step 4 — Confirm registration timing

Abilities must be registered at or before the `rest_api_init` hook:

```php
// Correct: register at init with rest_api_init fallback
add_action( 'init', 'my_plugin_register_abilities', 20 );
add_action( 'rest_api_init', 'my_plugin_register_abilities', 5 );

// Abilities registered after rest_api_init won't appear in the
// core controller's discovered routes during this page load.
```

### Step 5 — Cache bust (stale cache hiding new registrations)

```bash
# Flush WP object cache and check again
wp cache flush
curl -s https://your-site.com/wp-json/wp-abilities/v1/abilities | jq '.meta.total'
```

---

## Working example — enumerate abilities via WP-CLI

```bash
# List all abilities (public context)
wp eval '
$response = rest_do_request( "/wp-abilities/v1/abilities" );
print_r( $response->data );
'

# Filter by category
wp eval '
$request = new WP_REST_Request( "GET", "/wp-abilities/v1/abilities" );
$request->set_param( "category", "wp-core/content" );
$response = rest_do_request( $request );
print_r( $response->data );
'

# Get a single ability
wp eval '
$request = new WP_REST_Request( "GET", "/wp-abilities/v1/abilities/wp-core/get-post" );
$response = rest_do_request( $request );
print_r( $response->data );
'
```

---

## Error code reference

| Code | HTTP | Meaning |
|---|---|---|
| `rest_invalid_params` | 400 | Unrecognized query parameter or wrong type. |
| `rest_missing_callback` | 500 | Ability registered without an `execute` callback. |
| `rest_invalid_schema` | 500 | `input_schema` or `output_schema` failed JSON Schema validation at registration time. |
| `ability_not_found` | 404 | No ability registered under the given ID. |
| `category_not_found` | 404 | No category registered under the given slug. |

---

## Cross-links

- **Registration** — see `../wp-abilities-api/references/php-registration.md`
  for how `meta.show_in_rest` and `meta.mcp.*` are set on the PHP side.
- **Input schema gotchas** — see
  `../wp-abilities-api/references/input-schema-gotchas.md` for the four runtime
  issues that affect what clients send and what the endpoint returns
  (default injection, pagination key drift, `empty()` on string IDs, direct
  vs indirect invocation).
- **Error vocabulary** — see
  `../wp-abilities-api/references/error-code-vocabulary.md` for the full error
  code taxonomy and the upstream bubbling pattern.