Last updated: 2026-06-04 17:50

```yaml
audit_metadata:
  plugin_name: "Bengkel Wiguna Headless CMS API"
  auditor: "Antigravity Agent"
  target_wp_version: "6.9+"
  uses_abilities_api_plugin: false
  capability_gate: "edit_posts"

proposed_abilities:
  - name: "flush_bw_cache"
    intent: "Clear custom REST API transient caches (services & promotions) to force fresh data retrieval."
    backing:
      file: "bw-headless-cms.php"
      method: "POST"
      route: "/wp-json/wp-abilities/v1/abilities/flush_bw_cache/execute"
      controller_class: null
      permission_callback: "manage_options"
    permission: "manage_options"
    return_type: "boolean"
    effort: "S"
    annotations:
      readonly: false
      destructive: true
      idempotent: true
    notes: "Requires manage_options. Clears object cache keys and transients."
    risks: "May temporarily increase DB load while cache rebuilds."
    use_case_fit: "Admin workflow to force UI updates."
    side_effects: ["Deletes transients `bw_services_full_v3`, `bw_promosi_active_v3`"]
    seed_data_needs: []

  - name: "get_service_portfolio_data"
    intent: "Fetch optimized service portfolio data including next/prev slugs for navigation."
    backing:
      file: "bw-headless-cms.php"
      method: "POST"
      route: "/wp-json/wp-abilities/v1/abilities/get_service_portfolio_data/execute"
      controller_class: null
      permission_callback: "__return_true"
    permission: "__return_true"
    return_type: "object"
    effort: "S"
    annotations:
      readonly: true
      destructive: false
      idempotent: true
    notes: "Public read. Calculates next/prev based on post date."
    risks: "None"
    use_case_fit: "Frontend React portfolio navigation."
    side_effects: []
    seed_data_needs: ["At least two services with `harga` and `durasi` meta."]

  - name: "ai_create_cpt"
    intent: "Create a new Service or Promotion post with structured metadata."
    backing:
      file: "bw-headless-cms.php"
      method: "POST"
      route: "/wp-json/wp-abilities/v1/abilities/ai_create_cpt/execute"
      controller_class: null
      permission_callback: "publish_posts"
    permission: "publish_posts"
    return_type: "object"
    effort: "M"
    annotations:
      readonly: false
      destructive: false
      idempotent: false
    notes: "Requires publish_posts cap. Supported post_types: services, promosi."
    risks: "No idempotency key; retrying creates duplicates."
    use_case_fit: "AI Agent creating content."
    side_effects: ["Creates WP Post", "Creates Post Meta", "Flushes transisents"]
    seed_data_needs: []

  - name: "ai_generate_cpt_content"
    intent: "Generate Layanan or Promosi content using AI with domain context."
    backing:
      file: "bw-headless-cms.php"
      method: "POST"
      route: "/wp-json/wp-abilities/v1/abilities/ai_generate_cpt_content/execute"
      controller_class: null
      permission_callback: "publish_posts"
    permission: "publish_posts"
    return_type: "object"
    effort: "M"
    annotations:
      readonly: true
      destructive: false
      idempotent: true
    notes: "Uses WordPress AI SDK. Read-only projection."
    risks: "Depends on external LLM availability."
    use_case_fit: "AI Agent workflow previewing content before creation."
    side_effects: []
    seed_data_needs: []

excluded_from_mvp: []
surfaced_gaps: []
```

## Controller Inventory

| Controller / Route | Method | Route Registration | Callback | Permission Gate | Return Type |
|---|---|---|---|---|---|
| `bw/v1/homepage-settings` | GET | `bw-headless-cms.php` | Anonymous closure | `__return_true` | `object` |
| `bw/v1/homepage-settings` | POST | `bw-headless-cms.php` | Anonymous closure | `current_user_can('edit_posts')` | `object` |
| `bw/v1/homepage-settings/(?P<section>[a-z-]+)` | GET | `bw-headless-cms.php` | Anonymous closure | `__return_true` | `object` |
| `bw/v1/homepage-settings/(?P<section>[a-z-]+)` | PATCH | `bw-headless-cms.php` | Anonymous closure | `current_user_can('edit_posts')` | `object` |
| `bw/v1/site-info` | GET | `bw-headless-cms.php` | Anonymous closure | `__return_true` | `object` |
| `wp-abilities/v1/bengkel/ai-chat` | POST | `bw-headless-cms.php` | `bw_handle_ai_chat` | `__return_true` | `object` |
| `BW_REST_API_Controller` | GET | `class-bw-rest-controller.php` | `get_services` | `__return_true` | `array` |

## Notes and Surprises
- Current REST surface uses anonymous closures for some endpoints rather than `WP_REST_Controller` subclasses. This audit assumes the upcoming refactoring will port them to structured controllers.
- The `ai_create_cpt` ability does not currently enforce an idempotency key. Clients must take care to avoid duplicate content on retries.
