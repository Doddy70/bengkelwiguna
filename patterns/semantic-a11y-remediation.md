# Pattern: Semantic Accessibility Remediation

**Problem**: Inherited templates or fast-prototyped components often lack the necessary ARIA attributes and focus management for WCAG compliance, making them unusable for assistive technology.

**When to use**: When refactoring existing UI components (Accordions, Modals, Headers) to meet standard accessibility (a11y) benchmarks.

**When NOT to use**: For simple static text content that doesn't involve user interaction or dynamic state changes.

## Template

### 1. Dynamic State & ID Attribution
Ensure interactive elements have unique IDs and programmatically linked descriptions.

```typescript
// Accordion Example
<button
    id={`trigger-${id}`}
    aria-expanded={isOpen}
    aria-controls={`content-${id}`}
>
    {title}
</button>

<div 
    id={`content-${id}`}
    role="region"
    aria-labelledby={`trigger-${id}`}
    className={isOpen ? "block" : "hidden"}
>
    {content}
</div>
```

### 2. Localization & Hidden Labels
Use `visually-hidden` (or `sr-only`) classes to provide context that is missing from placeholders.

```html
<label htmlFor="search" className="sr-only">Cari di situs ini</label>
<input id="search" placeholder="Cari..." />
```

### 3. Focus Management
Handle keyboard events like `Escape` and ensure focus trap in modals (or rely on native `<dialog>`).

## Pitfalls
- **ID Collisions**: Using static strings for IDs in loops. **Always use indices or unique slugs.**
- **Redundant ARIA**: Over-using ARIA on native elements that already have built-in semantics (e.g., `role="button"` on a `<button>`).

## Examples
- **Header Remediation**: Added dynamic `aria-label` to mobile menu toggle based on open/closed state.
- **SearchBox**: Implemented ESC key to close and automatic input focus.
