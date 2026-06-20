# Layout Grid Specification — Services Page

## Grid System

### Current Implementation Issues

| Element | Current | Problem | Recommended |
|---------|---------|---------|-------------|
| Container | `max-w-screen-2xl` | Too wide, inconsistent | `max-w-7xl` |
| Gutter | `gap-4 lg:gap-6` | Unequal hero vs services | `gap-4 md:gap-6 lg:gap-8` |
| Padding | `px-4 sm:px-6 lg:px-8` | Good | Keep |
| Hero padding | `pt-8 lg:pt-40` | Gap between breadcrumb & H1 | `pt-12 lg:pt-32` |

### Responsive Grid Spec

```tsx
// Page Container
<section className="
  max-w-7xl mx-auto
  px-4 sm:px-6 lg:px-8
  py-12 lg:py-16
">
  {/* 12-column grid for desktop */}
  <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
```

### Hero Section Grid

```tsx
// Bento Grid: 1→3 columns
<div className="
  grid
  grid-cols-1
  md:grid-cols-3
  gap-4 lg:gap-6
">
  {/* Image 1: spans 1 column */}
  {/* Stat Card: spans 1 column */}
  {/* Image 2: spans 1 column */}
</div>
```

### Services Grid

```tsx
// Service Cards: 1→2→3 columns
<div className="
  grid
  grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-6 lg:gap-8
">
```

### Section Spacing

| Section | Padding Y | Margin Bottom |
|---------|----------|-------------|
| Hero → Services | `pb-16` | `mb-12 lg:mb-16` |
| Section Header → Cards | - | `mb-10` |

---

## Performance Checklist

- [ ] Hero images: `loading="lazy"` except first
- [ ] Image srcSet for responsive sizes
- [ ] Preload critical fonts
- [ ] Defer non-critical JS
- [ ] Optimize images (WebP format)
- [ ] Minimize CLS (aspect-ratio)

## SEO Checklist

- [ ] H1 unique per page
- [ ] Meta description
- [ ] Structured data (Service)
- [ ] Internal links
- [ ] Alt text on images
