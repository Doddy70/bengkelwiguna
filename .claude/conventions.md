# Coding Conventions — Bengkel Wiguna Project

> **VERSION:** 1.0.0  
> **LAST UPDATED:** 2026-06-12  
> **APPLICABLE TO:** All agents working on this project

---

## 🎯 PURPOSE

Dokumen ini menetapkan coding standards yang harus diikuti oleh semua agent. Tujuannya:
1. Konsistensi kode di seluruh project
2. Memudahkan agent lain membaca dan melanjutkan pekerjaan
3. Mencegah regresi dan kerusakan

---

## 1. Git Commit Convention (Wajib Gunakan)

Gunakan [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Commit Types:

| Type | Penggunaan | Example |
|------|------------|---------|
| `feat:` | Fitur baru | `feat: add service listing page` |
| `fix:` | Bug fix | `fix: resolve image loading issue` |
| `perf:` | Performa optimization ⬅️ **GUNAKAN INI** | `perf: inline critical CSS` |
| `docs:` | Dokumentasi | `docs: update README` |
| `refactor:` | Refactoring kode | `refactor: extract API utilities` |
| `test:` | Testing | `test: add lighthouse CI` |
| `chore:` | Maintenance tasks | `chore: update dependencies` |

### Examples:

```bash
# ✅ Good commits
git commit -m "perf: inline critical CSS for above-the-fold"
git commit -m "perf: convert hero image to WebP, reduce LCP by 500ms"
git commit -m "docs: add performance audit findings"
git commit -m "perf: implement lazy loading for below-fold images"
git commit -m "fix: resolve CLS issue on mobile navigation"

# ❌ Bad commits (jangan gunakan)
git commit -m "update"                    # Too vague
git commit -m "fixes"                     # Too vague
git commit -m "work in progress"          # WIP not allowed
git commit -m "asdf"                       # Meaningless
```

### Commit Message Body (untuk perubahan besar):

```bash
git commit -m "perf: inline critical CSS for above-the-fold

BREAKING CHANGE: none
Related-to: #LCP-optimization
Related-to: #core-web-vitals
Metrics: FCP improvement ~300ms
Blocked-by: none
Unblocks: perf/minify-assets"
```

---

## 2. Branch Naming Convention

```
<type>/<short-description>

Examples:
perf/inline-critical-css
perf/convert-hero-webp
perf/lazy-loading
perf/browser-caching
perf/lighthouse-ci
fix/cls-regression
docs/update-readme
feat/new-service-page
```

### Branch Types:

| Prefix | Usage |
|--------|-------|
| `perf/` | Performance optimization tasks |
| `fix/` | Bug fixes |
| `feat/` | New features |
| `docs/` | Documentation updates |
| `refactor/` | Code refactoring |
| `test/` | Testing improvements |

---

## 3. File Naming

| File Type | Naming Convention | Example |
|-----------|------------------|---------|
| Critical CSS | `critical.min.css` | `bexon/src/styles/critical.min.css` |
| Optimized Image | `<name>.webp` | `hero.webp`, `hero-mobile.webp` |
| Documentation | `kebab-case.md` | `performance-audit.md` |
| State File | `state.json` | `.claude/state.json` |
| Config | `kebab-case.config.js` | `lighthouse.config.js` |
| Utility | `camelCase.ts` | `wpFetch.ts`, `bwFetch.ts` |
| Component | `PascalCase.tsx` | `ServiceCard.tsx`, `HeroSection.tsx` |

---

## 4. Code Quality Gates

Wajib lulus sebelum push:

```bash
# 1. Type check
npm run type-check

# 2. Lint check
npm run lint

# 3. Unit tests
npm run test

# 4. Build validation
npm run build --turbopack

# 5. Lighthouse audit (threshold)
npm run lighthouse -- --perf-score=0.70

# 6. Check for console errors
# Buka browser, check console, tidak ada Error (Warning boleh)

# 7. Verify CLS tetap 0
# Buka browser, reload, tidak ada layout shift
```

---

## 5. Code Review Checklist

Sebelum merge PR, pastikan:

- [ ] Lighthouse performance score ≥ 70 (minimal) / ≥ 85 (target)
- [ ] LCP ≤ 5.5s (minimal) / ≤ 2.5s (target)
- [ ] CLS = 0 (tidak boleh ada regresi)
- [ ] Tidak ada console error
- [ ] Commit message mengikuti conventional commits
- [ ] Branch di-naming dengan benar
- [ ] Dokumentasi di-update
- [ ] `state.json` di-update dengan task terbaru
- [ ] `tasks.md` di-update (task selesai di-centang)
- [ ] Tidak ada brand color changes tanpa izin
- [ ] Tidak ada URL slug changes

---

## 6. Import Order (Next.js/React)

Standar import order:

```typescript
// 1. React / Next.js core
import React from 'react';
import type { Metadata } from 'next';

// 2. External libraries
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';

// 3. Internal modules (absolute imports)
import { wpFetch, bwFetch } from '@/lib/api';
import { formatDate } from '@/lib/utils';

// 4. Components
import { ServiceCard } from '@/components/ServiceCard';
import { Header } from '@/components/Header';

// 5. Types
import type { Service } from '@/types';

// 6. Styles
import './ServicePage.css';
```

---

## 7. API Fetch Patterns

### Allowed:
```typescript
// ✅ Gunakan utility terstandarisasi
import { wpFetch } from '@/lib/api';
import { bwFetch } from '@/lib/api';

// Contoh penggunaan
const services = await bwFetch('/services-full');
const service = await bwFetch('/services/my-service-slug');
```

### Not Allowed:
```typescript
// ❌ Jangan gunakan fetch langsung di komponen
const response = await fetch('https://backend.bengkelwiguna.com/bw/v1/services');
```

---

## 8. Performance Best Practices

### Images
```typescript
// ✅ Good: Responsive images dengan srcset
<img 
  src="/images/hero-desktop.webp"
  srcset="/images/hero-mobile.webp 400w, /images/hero-tablet.webp 800w, /images/hero-desktop.webp 1200w"
  sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Bengkel Wiguna"
  width="1200"
  height="600"
  loading="lazy"
  decoding="async"
/>

// ✅ Good: Preload LCP image
<link rel="preload" as="image" href="/images/hero.webp" fetchpriority="high"/>
```

### Fonts
```typescript
// ✅ Good: Font display swap
@font-face {
  font-family: 'Poppins';
  src: url('/fonts/poppins-latin.woff2') format('woff2');
  font-display: swap;
}
```

### JavaScript
```typescript
// ✅ Good: Defer non-critical scripts
<script src="analytics.js" defer></script>
<script src="chat-widget.js" async></script>

// ✅ Good: Code splitting
const ServiceDetail = () => import('./ServiceDetail');
```

---

## 9. Brand Guidelines

### Colors (DON'T CHANGE)
| Name | Hex | Usage |
|------|-----|-------|
| Brand Blue | `#224297` | Primary brand color |
| Brand Gold | `#ffd900` | Accent/highlight color |

### Classes
```css
.bg-brand-blue { background-color: #224297; }
.text-brand-blue { color: #224297; }
.text-brand-gold { color: #ffd900; }
.bg-brand-gold { background-color: #ffd900; }
.brand-rounded { border-radius: 12px; }
```

### Shapes
- Main components: 12px border radius (class: `brand-rounded`)

---

## 10. URL Permanence

> [!IMPORTANT]
> **Zero URL Changes:** Jangan ubah URL slug yang sudah ada tanpa izin eksplisit.

### Known URL Routes:
| Route | Page |
|-------|------|
| `/` | Homepage |
| `/services/` | Services listing |
| `/services/[slug]/` | Service detail |
| `/blog/` | Blog listing |
| `/blog/[slug]/` | Blog post |
| `/lokasi/` | Location page |
| `/layanan-spesialis/[slug]/` | Specialist service |

---

## 11. SEO Preservation

- Canonical links wajib dipertahankan
- next-sitemap.xml wajib di-update
- Google Site Verification wajib dijaga
- JSON-LD schemas wajib dipertahankan

---

## 12. Documentation Requirements

Setiap perubahan besar harus di-dokumentasi:

### Untuk Performance Changes:
```markdown
## Performance Impact
- **Metric:** [LCP/FCP/CLS/etc]
- **Before:** [value]
- **After:** [value]
- **Improvement:** [% or ms]
- **Tested on:** [device/browser]
```

### Untuk New Features:
```markdown
## Feature: [Name]
- **Purpose:** [Why this feature exists]
- **Implementation:** [How it works]
- **Dependencies:** [Any dependencies]
- **Tested:** [How it was tested]
```

---

## 13. Error Handling

```typescript
// ✅ Good: Proper error handling
try {
  const data = await bwFetch('/services');
  if (!data) {
    throw new Error('No data returned');
  }
  return data;
} catch (error) {
  console.error('Failed to fetch services:', error);
  // Fallback to cached data or error boundary
  return null;
}

// ❌ Bad: Swallowing errors
try {
  const data = await bwFetch('/services');
  return data;
} catch (error) {
  // Silent failure
}
```

---

## 14. Testing Requirements

| Change Type | Minimum Testing |
|-------------|-----------------|
| UI Component | Visual check + CLS verification |
| API Change | Functional test + error handling |
| Performance | Lighthouse audit before/after |
| Security | Security review |

---

## 15. Constraints Summary

| Constraint | Rule |
|------------|------|
| Brand Colors | Don't change without permission |
| URL Slugs | Don't change without permission |
| SEO Elements | Don't remove or modify |
| Feature Branches | Always use feature branches |
| Direct Push | Never push to main/master |
| WIP Commits | Never commit WIP code |
| Testing | Always test before commit |

---

**Generated by:** Claude Opus 4.8  
**Date:** 2026-06-12
