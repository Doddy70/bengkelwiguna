# Theme Factory - Bengkel Wiguna

Theme system based on `theme-factory` skill patterns, providing 10 pre-built themes plus custom theme creation.

## Quick Start

### 1. Wrap Your App

```tsx
// app/layout.tsx
import { ThemeProvider } from '@/lib/ThemeProvider'

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <ThemeProvider defaultTheme="modernMinimalist">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 2. Use Theme in Components

```tsx
import { useTheme } from '@/lib/ThemeProvider'

export function Header() {
  const { theme, themeName, mode, toggleMode } = useTheme()

  return (
    <header style={{ backgroundColor: theme.colors.primary }}>
      <h1 style={{ color: theme.colors.text }}>{theme.name}</h1>
      <button onClick={toggleMode}>{mode === 'light' ? '🌙' : '☀️'}</button>
    </header>
  )
}
```

## Available Themes

| Theme | Description | Best For |
|-------|-------------|----------|
| **modernMinimalist** | Clean and contemporary (Bengkel Wiguna brand) | Default, landing pages |
| **oceanDepths** | Professional and calming | Professional services |
| **sunsetBoulevard** | Warm and vibrant | Marketing, promotions |
| **forestCanopy** | Natural and grounded | Organic, eco-friendly |
| **goldenHour** | Rich and warm autumnal | Premium services |
| **arcticFrost** | Cool and crisp winter | Corporate, clean |
| **desertRose** | Soft and sophisticated | Elegant, premium |
| **techInnovation** | Bold and modern tech | Tech, automotive |
| **botanicalGarden** | Fresh and organic | Wellness, nature |
| **midnightGalaxy** | Dramatic and cosmic | Dark mode, premium |

## Files Overview

| File | Purpose |
|------|---------|
| `src/lib/theme-factory.ts` | Theme definitions, utilities |
| `src/lib/ThemeProvider.tsx` | React context for theme switching |
| `src/lib/brand.ts` | Bengkel Wiguna brand tokens |

## Theme Usage Examples

### Basic Usage

```tsx
import { useTheme } from '@/lib/ThemeProvider'

function ServiceCard({ service }) {
  const { theme } = useTheme()

  return (
    <div
      style={{
        backgroundColor: theme.colors.surface,
        borderColor: theme.colors.accent,
      }}
      className="card"
    >
      <h3 style={{ color: theme.colors.primary }}>{service.title}</h3>
      <p style={{ color: theme.colors.textSecondary }}>{service.description}</p>
    </div>
  )
}
```

### Theme Selector

```tsx
import { ThemeSelector } from '@/lib/ThemeProvider'

function ThemeSettings() {
  return (
    <div>
      <h2>Choose Theme</h2>
      <ThemeSelector showModeToggle />
    </div>
  )
}
```

### Tailwind with Themes

```tsx
import { generateTailwindTheme } from '@/lib/theme-factory'

// Use in components with Tailwind classes
<div className="bg-background text-text-primary font-heading">
  <h1 className="text-primary">{title}</h1>
  <button className="bg-accent text-surface">CTA</button>
</div>
```

### Custom Theme

```tsx
import { createCustomTheme } from '@/lib/theme-factory'

const customTheme = createCustomTheme({
  name: 'My Custom Theme',
  description: 'Custom automotive theme',
  primary: '#1a1a2e',
  secondary: '#16213e',
  accent: '#e94560',
  background: '#ffffff',
  text: '#000000',
  headingFont: 'Poppins',
  bodyFont: 'Inter',
})
```

## Google Fonts

Each theme includes specific Google Fonts:

| Theme | Heading Font | Body Font |
|-------|--------------|----------|
| modernMinimalist | Poppins | Inter |
| oceanDepths | Playfair Display | Source Sans Pro |
| sunsetBoulevard | Montserrat | Open Sans |
| forestCanopy | Merriweather | Source Sans Pro |
| goldenHour | Lora | Nunito |
| arcticFrost | Raleway | Lato |
| desertRose | Cormorant Garamond | Work Sans |
| techInnovation | Space Grotesk | IBM Plex Sans |
| botanicalGarden | Fraunces | Mulish |
| midnightGalaxy | Outfit | Inter |

## CSS Variables

Each theme generates CSS variables:

```css
:root {
  --theme-primary: #16213e;
  --theme-secondary: #1a1a2e;
  --theme-accent: #e94560;
  --theme-background: #fafafa;
  --theme-surface: #ffffff;
  --theme-text: #1a1a2e;
  --theme-text-secondary: #424242;
  --theme-font-heading: 'Poppins', sans-serif;
  --theme-font-body: 'Inter', sans-serif;
}
```

## TypeScript Support

```tsx
import { THEMES, type ThemeName, type Theme } from '@/lib/theme-factory'

const themeName: ThemeName = 'modernMinimalist'
const theme: Theme = THEMES[themeName]
```

## Next.js Integration

### App Router

```tsx
// app/providers.tsx
'use client'
import { ThemeProvider } from '@/lib/ThemeProvider'

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider defaultTheme="modernMinimalist" />
}

// app/layout.tsx
import { Providers } from './providers'

export default function Layout({ children }) {
  return (
    <html lang="id">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
```

### Pages Router

```tsx
// pages/_app.tsx
import { ThemeProvider } from '@/lib/ThemeProvider'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme="modernMinimalist">
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
```

## Dark Mode

Themes support light/dark mode:

```tsx
const { mode, toggleMode } = useTheme()

// Mode affects:
// - Background colors
// - Surface colors
// - Text contrast
// - Shadow intensity
```

## Brand Integration

Combined with `brand.ts`:

```tsx
import { BRAND_COLORS } from '@/lib/brand'
import { useTheme } from '@/lib/ThemeProvider'

function Component() {
  const { theme } = useTheme()

  // Mix brand colors with theme
  const bgColor = theme.colors.primary || BRAND_COLORS.primary.main
}
```

## References

- [theme-factory skill](../theme-factory/SKILL.md)
- [brand-guidelines skill](../brand-guidelines/SKILL.md)
- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)