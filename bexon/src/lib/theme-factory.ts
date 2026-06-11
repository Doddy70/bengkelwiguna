/**
 * Theme Factory - Bengkel Wiguna Theme System
 * Based on theme-factory skill patterns
 *
 * Provides 10 pre-built themes plus custom theme creation
 * for slides, docs, landing pages, and other artifacts
 */

import { BRAND_COLORS, BRAND_TYPOGRAPHY, TAILWIND_CONFIG } from './brand'

// ============================================
// PRE-BUILT THEMES
// ============================================

export const THEMES = {
  // Theme 1: Ocean Depths
  oceanDepths: {
    name: 'Ocean Depths',
    description: 'Professional and calming maritime theme',
    colors: {
      primary: '#0077B6',
      secondary: '#023E8A',
      accent: '#00B4D8',
      background: '#CAF0F8',
      surface: '#FFFFFF',
      text: '#03045E',
      textSecondary: '#0077B6',
    },
    fonts: {
      heading: 'Playfair Display',
      body: 'Source Sans Pro',
    },
  },

  // Theme 2: Sunset Boulevard
  sunsetBoulevard: {
    name: 'Sunset Boulevard',
    description: 'Warm and vibrant sunset colors',
    colors: {
      primary: '#E85D04',
      secondary: '#DC2F02',
      accent: '#FFBA08',
      background: '#FFF3E0',
      surface: '#FFFFFF',
      text: '#370617',
      textSecondary: '#9D0208',
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Open Sans',
    },
  },

  // Theme 3: Forest Canopy
  forestCanopy: {
    name: 'Forest Canopy',
    description: 'Natural and grounded earth tones',
    colors: {
      primary: '#2D6A4F',
      secondary: '#1B4332',
      accent: '#95D5B2',
      background: '#F5FDEB',
      surface: '#FFFFFF',
      text: '#1B4332',
      textSecondary: '#40916C',
    },
    fonts: {
      heading: 'Merriweather',
      body: 'Source Sans Pro',
    },
  },

  // Theme 4: Modern Minimalist (Bengkel Wiguna Brand)
  modernMinimalist: {
    name: 'Modern Minimalist',
    description: 'Clean and contemporary grayscale (Bengkel Wiguna)',
    colors: {
      primary: '#1a1a2e',
      secondary: '#16213e',
      accent: '#e94560',
      background: '#fafafa',
      surface: '#ffffff',
      text: '#1a1a2e',
      textSecondary: '#424242',
      gold: '#f4a261',
      teal: '#2a9d8f',
    },
    fonts: {
      heading: 'Poppins',
      body: 'Inter',
    },
  },

  // Theme 5: Golden Hour
  goldenHour: {
    name: 'Golden Hour',
    description: 'Rich and warm autumnal palette',
    colors: {
      primary: '#D4A373',
      secondary: '#BC6C25',
      accent: '#FEFAE0',
      background: '#FAEDCD',
      surface: '#FFFFFF',
      text: '#283618',
      textSecondary: '#606C38',
    },
    fonts: {
      heading: 'Lora',
      body: 'Nunito',
    },
  },

  // Theme 6: Arctic Frost
  arcticFrost: {
    name: 'Arctic Frost',
    description: 'Cool and crisp winter-inspired theme',
    colors: {
      primary: '#A2D2FF',
      secondary: '#457B9D',
      accent: '#BDE0FE',
      background: '#F0F8FF',
      surface: '#FFFFFF',
      text: '#1D3557',
      textSecondary: '#457B9D',
    },
    fonts: {
      heading: 'Raleway',
      body: 'Lato',
    },
  },

  // Theme 7: Desert Rose
  desertRose: {
    name: 'Desert Rose',
    description: 'Soft and sophisticated dusty tones',
    colors: {
      primary: '#C9ADA7',
      secondary: '#9A8C98',
      accent: '#F2E9E4',
      background: '#FDF8F6',
      surface: '#FFFFFF',
      text: '#4A4E69',
      textSecondary: '#9A8C98',
    },
    fonts: {
      heading: 'Cormorant Garamond',
      body: 'Work Sans',
    },
  },

  // Theme 8: Tech Innovation
  techInnovation: {
    name: 'Tech Innovation',
    description: 'Bold and modern tech aesthetic',
    colors: {
      primary: '#6366F1',
      secondary: '#4338CA',
      accent: '#06B6D4',
      background: '#0F172A',
      surface: '#1E293B',
      text: '#F8FAFC',
      textSecondary: '#94A3B8',
    },
    fonts: {
      heading: 'Space Grotesk',
      body: 'IBM Plex Sans',
    },
  },

  // Theme 9: Botanical Garden
  botanicalGarden: {
    name: 'Botanical Garden',
    description: 'Fresh and organic garden colors',
    colors: {
      primary: '#55A630',
      secondary: '#2D6A4F',
      accent: '#AACC00',
      background: '#F0FFF4',
      surface: '#FFFFFF',
      text: '#2D6A4F',
      textSecondary: '#55A630',
    },
    fonts: {
      heading: 'Fraunces',
      body: 'Mulish',
    },
  },

  // Theme 10: Midnight Galaxy
  midnightGalaxy: {
    name: 'Midnight Galaxy',
    description: 'Dramatic and cosmic deep tones',
    colors: {
      primary: '#7C3AED',
      secondary: '#4C1D95',
      accent: '#F472B6',
      background: '#0C0A09',
      surface: '#1C1917',
      text: '#FAFAF9',
      textSecondary: '#A8A29E',
    },
    fonts: {
      heading: 'Outfit',
      body: 'Inter',
    },
  },
} as const

// ============================================
// THEME TYPES
// ============================================

export type ThemeName = keyof typeof THEMES

export interface Theme {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    surface: string
    text: string
    textSecondary: string
    [key: string]: string
  }
  fonts: {
    heading: string
    body: string
  }
}

export interface ThemeConfig {
  theme: ThemeName | Theme
  mode?: 'light' | 'dark' | 'auto'
}

// ============================================
// THEME SELECTOR
// ============================================

export function getTheme(name: ThemeName): Theme {
  return THEMES[name]
}

export function getAllThemes(): { name: ThemeName; theme: Theme }[] {
  return Object.entries(THEMES).map(([name, theme]) => ({
    name: name as ThemeName,
    theme: theme as Theme,
  }))
}

export function getThemeNames(): string[] {
  return Object.keys(THEMES)
}

// ============================================
// THEME CSS GENERATOR
// ============================================

export function generateThemeCSS(theme: Theme | ThemeName, mode: 'light' | 'dark' = 'light'): string {
  const resolvedTheme = typeof theme === 'string' ? THEMES[theme] : theme

  return `
/* Theme: ${resolvedTheme.name} */
:root {
  /* Colors */
  --theme-primary: ${resolvedTheme.colors.primary};
  --theme-secondary: ${resolvedTheme.colors.secondary};
  --theme-accent: ${resolvedTheme.colors.accent};
  --theme-background: ${resolvedTheme.colors.background};
  --theme-surface: ${resolvedTheme.colors.surface};
  --theme-text: ${resolvedTheme.colors.text};
  --theme-text-secondary: ${resolvedTheme.colors.textSecondary};

  /* Fonts */
  --theme-font-heading: '${resolvedTheme.fonts.heading}', sans-serif;
  --theme-font-body: '${resolvedTheme.fonts.body}', sans-serif;
}

.theme-dark {
  --theme-background: ${mode === 'dark' ? '#0F172A' : resolvedTheme.colors.background};
  --theme-surface: ${mode === 'dark' ? '#1E293B' : resolvedTheme.colors.surface};
  --theme-text: ${mode === 'dark' ? '#F8FAFC' : resolvedTheme.colors.text};
}

/* Theme applied styles */
.theme-${typeof theme === 'string' ? theme : 'custom'} {
  background-color: var(--theme-background);
  color: var(--theme-text);
  font-family: var(--theme-font-body);
}

.theme-${typeof theme === 'string' ? theme : 'custom'} h1,
.theme-${typeof theme === 'string' ? theme : 'custom'} h2,
.theme-${typeof theme === 'string' ? theme : 'custom'} h3,
.theme-${typeof theme === 'string' ? theme : 'custom'} h4,
.theme-${typeof theme === 'string' ? theme : 'custom'} h5,
.theme-${typeof theme === 'string' ? theme : 'custom'} h6 {
  font-family: var(--theme-font-heading);
  color: var(--theme-primary);
}

.theme-${typeof theme === 'string' ? theme : 'custom'} .btn-primary {
  background-color: var(--theme-accent);
  color: var(--theme-surface);
}
`
}

// ============================================
// REACT CONTEXT FOR THEMING
// ============================================

export interface ThemeContextValue {
  theme: Theme
  setTheme: (theme: ThemeName | Theme) => void
  toggleMode: () => void
  mode: 'light' | 'dark'
}

// ============================================
// TAILWIND THEME GENERATOR
// ============================================

export function generateTailwindTheme(theme: ThemeName | Theme) {
  const resolvedTheme = typeof theme === 'string' ? THEMES[theme] : theme

  return {
    theme: {
      extend: {
        colors: {
          primary: resolvedTheme.colors.primary,
          secondary: resolvedTheme.colors.secondary,
          accent: resolvedTheme.colors.accent,
          background: resolvedTheme.colors.background,
          surface: resolvedTheme.colors.surface,
          'text-primary': resolvedTheme.colors.text,
          'text-secondary': resolvedTheme.colors.textSecondary,
        },
        fontFamily: {
          heading: [resolvedTheme.fonts.heading],
          body: [resolvedTheme.fonts.body],
        },
      },
    },
  }
}

// ============================================
// CUSTOM THEME CREATOR
// ============================================

export function createCustomTheme(config: {
  name: string
  description: string
  primary: string
  secondary: string
  accent: string
  background: string
  surface?: string
  text: string
  textSecondary?: string
  headingFont?: string
  bodyFont?: string
}): Theme {
  return {
    name: config.name,
    description: config.description,
    colors: {
      primary: config.primary,
      secondary: config.secondary,
      accent: config.accent,
      background: config.background,
      surface: config.surface || '#ffffff',
      text: config.text,
      textSecondary: config.textSecondary || config.text,
    },
    fonts: {
      heading: config.headingFont || 'Poppins',
      body: config.bodyFont || 'Inter',
    },
  }
}

// ============================================
// GOOGLE FONTS IMPORTER
// ============================================

export function getGoogleFontsImport(theme: ThemeName | Theme): string {
  const resolvedTheme = typeof theme === 'string' ? THEMES[theme] : theme
  const fonts = [
    resolvedTheme.fonts.heading.replace(/ /g, '+'),
    resolvedTheme.fonts.body.replace(/ /g, '+'),
  ]

  return `https://fonts.googleapis.com/css2?family=${fonts.join('&family=')}:wght@400;500;600;700&display=swap`
}

// ============================================
// THEME PREVIEW
// ============================================

export interface ThemePreview {
  name: string
  description: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
  }
  fonts: {
    heading: string
    body: string
  }
  sample: {
    heading: string
    body: string
    button: string
  }
}

export function getThemePreview(themeName: ThemeName): ThemePreview {
  const theme = THEMES[themeName]

  return {
    name: theme.name,
    description: theme.description,
    colors: {
      primary: theme.colors.primary,
      secondary: theme.colors.secondary,
      accent: theme.colors.accent,
      background: theme.colors.background,
    },
    fonts: {
      heading: theme.fonts.heading,
      body: theme.fonts.body,
    },
    sample: {
      heading: 'Sample Heading',
      body: 'This is sample body text showing how content will appear.',
      button: 'Click Here',
    },
  }
}

// ============================================
// BENGKEL WIGUNA SPECIFIC THEMES
// ============================================

export const BENGKEL_THEMES = {
  // Default automotive theme
  automotive: createCustomTheme({
    name: 'Bengkel Wiguna Automotive',
    description: 'Professional automotive service theme',
    primary: '#16213e',
    secondary: '#1a1a2e',
    accent: '#e94560',
    background: '#fafafa',
    surface: '#ffffff',
    text: '#1a1a2e',
    textSecondary: '#424242',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
  }),

  // Premium service theme
  premium: createCustomTheme({
    name: 'Premium Service',
    description: 'High-end automotive service theme',
    primary: '#0f3460',
    secondary: '#16213e',
    accent: '#f4a261',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#1a1a2e',
    textSecondary: '#757575',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
  }),

  // Dark mode theme
  dark: createCustomTheme({
    name: 'Bengkel Wiguna Dark',
    description: 'Dark theme for automotive services',
    primary: '#e94560',
    secondary: '#ff6b6b',
    accent: '#f4a261',
    background: '#0f0f23',
    surface: '#1a1a2e',
    text: '#fafafa',
    textSecondary: '#b0aea5',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
  }),

  // Service booking theme
  booking: createCustomTheme({
    name: 'Service Booking',
    description: 'Theme optimized for service booking forms',
    primary: '#2a9d8f',
    secondary: '#1a1a2e',
    accent: '#e94560',
    background: '#ffffff',
    surface: '#f5f5f5',
    text: '#1a1a2e',
    textSecondary: '#424242',
    headingFont: 'Poppins',
    bodyFont: 'Inter',
  }),
} as const

// ============================================
// EXPORTS
// ============================================

export {
  THEMES,
  getTheme,
  getAllThemes,
  getThemeNames,
  generateThemeCSS,
  generateTailwindTheme,
  createCustomTheme,
  getGoogleFontsImport,
  getThemePreview,
  BENGKEL_THEMES,
}