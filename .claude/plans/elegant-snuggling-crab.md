# Plan: Redesain InteractiveCarShowcase dengan Liquid Glass Effect

## Context

User ingin redesign `InteractiveCarShowcase` component dengan:
- **Liquid Glass effect** pada card widgets
- **Style & design UI** seperti reference image yang diberikan
- Background soft gradient gray-blue (#e0e1e6 → #f6f7f9)
- Frosted glass panels dengan backdrop-blur

## Design Reference Analysis

| Element | Style |
|---------|-------|
| Background | Soft gradient #e0e1e6 → #f6f7f9 |
| Cards | Glass morphism - semi-transparent white + backdrop-blur |
| Borders | Subtle white/gray borders |
| Corners | Large border-radius (rounded-3xl) |
| Shadows | Soft, subtle drop shadows |

## Implementation Plan

### File to Modify
- `src/components/heroui/interactive-car.tsx`

### Changes

#### 1. Background - Soft Gradient
```css
/* Change from solid gray to gradient */
background: linear-gradient(180deg, #e8e9ed 0%, #f4f5f7 50%, #eceef0 100%);
```

#### 2. AI Assistant Panel - Liquid Glass
```tsx
// More transparent, enhanced blur
className="w-full lg:w-[500px] h-[640px] flex-shrink-0
  bg-white/40 backdrop-blur-3xl
  border border-white/50
  rounded-[3rem]
  shadow-[0_40px_140px_-20px_rgba(34,66,151,0.15)]
  relative overflow-hidden"
```

#### 3. Tech Cards - Glass Effect
```tsx
// Add glass effect to bottom cards
className="bg-white/50 backdrop-blur-xl
  border border-white/60
  rounded-[2rem]
  hover:bg-white/70 hover:shadow-2xl"
```

#### 4. Hotspot Liquid Effect
```tsx
// Enhanced liquid/glowing effect
className="bg-white/60 backdrop-blur-md
  border border-white/40
  shadow-[0_0_30px_rgba(34,66,151,0.4)]"
```

#### 5. Chat Bubbles - Glass Effect
```tsx
// User message
className="bg-brand-blue/80 backdrop-blur-md text-white"

// AI message
className="bg-white/70 backdrop-blur-sm border border-white/30"
```

#### 6. Additional Liquid Glass Utilities
Add to globals.css:
```css
.liquid-glass {
  @apply bg-white/50 backdrop-blur-2xl border border-white/40;
  box-shadow: 0 40px 100px -20px rgba(34, 66, 151, 0.12);
}
```

## Verification

1. Run `npm run dev` - dev server sudah running di localhost:3000
2. Navigate ke homepage
3. Verify:
   - Background gradient visible
   - AI panel has frosted glass effect
   - Hotspots have liquid glow effect
   - Tech cards have glass effect on hover
   - All animations smooth

## Files
- `src/components/heroui/interactive-car.tsx` - main component to redesign
- `src/app/globals.css` - add liquid glass utility classes (optional)
