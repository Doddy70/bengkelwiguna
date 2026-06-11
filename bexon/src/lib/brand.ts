/**
 * Brand Guidelines for Bengkel Wiguna
 * Based on brand-guidelines skill patterns
 *
 * Applies Bengkel Wiguna's visual identity:
 * - Brand colors
 * - Typography
 * - Logo usage
 * - Spacing and layout
 */

import { systemFontStack } from './performance'

// ============================================
// BRAND COLORS
// ============================================

export const BRAND_COLORS = {
  // Primary colors
  primary: {
    dark: '#1a1a2e', // Dark navy - headers, text
    main: '#16213e', // Navy blue - primary buttons
    light: '#0f3460', // Lighter navy - hover states
  },

  // Accent colors
  accent: {
    orange: '#e94560', // Primary accent - CTAs, highlights
    orangeLight: '#ff6b6b', // Lighter orange - hover states
    gold: '#f4a261', // Secondary accent - icons, badges
    teal: '#2a9d8f', // Tertiary accent - success states
  },

  // Neutral colors
  neutral: {
    white: '#ffffff',
    offWhite: '#fafafa',
    lightGray: '#f5f5f5',
    midGray: '#e0e0e0',
    darkGray: '#757575',
    charcoal: '#424242',
    black: '#000000',
  },

  // Semantic colors
  semantic: {
    success: '#2a9d8f', // Teal
    warning: '#f4a261', // Gold/Orange
    error: '#e63946', // Red
    info: '#457b9d', // Blue
  },

  // Text colors
  text: {
    primary: '#1a1a2e',
    secondary: '#424242',
    tertiary: '#757575',
    inverse: '#ffffff',
    link: '#e94560',
    linkHover: '#d63651',
  },
} as const

// ============================================
// BRAND VARIABLES (CSS Custom Properties)
// ============================================

export const BRAND_CSS_VARIABLES = `
:root {
  /* Primary */
  --bw-primary-dark: ${BRAND_COLORS.primary.dark};
  --bw-primary-main: ${BRAND_COLORS.primary.main};
  --bw-primary-light: ${BRAND_COLORS.primary.light};

  /* Accent */
  --bw-accent-orange: ${BRAND_COLORS.accent.orange};
  --bw-accent-orange-light: ${BRAND_COLORS.accent.orangeLight};
  --bw-accent-gold: ${BRAND_COLORS.accent.gold};
  --bw-accent-teal: ${BRAND_COLORS.accent.teal};

  /* Neutral */
  --bw-neutral-white: ${BRAND_COLORS.neutral.white};
  --bw-neutral-off-white: ${BRAND_COLORS.neutral.offWhite};
  --bw-neutral-light-gray: ${BRAND_COLORS.neutral.lightGray};
  --bw-neutral-mid-gray: ${BRAND_COLORS.neutral.midGray};
  --bw-neutral-dark-gray: ${BRAND_COLORS.neutral.darkGray};
  --bw-neutral-charcoal: ${BRAND_COLORS.neutral.charcoal};

  /* Semantic */
  --bw-success: ${BRAND_COLORS.semantic.success};
  --bw-warning: ${BRAND_COLORS.semantic.warning};
  --bw-error: ${BRAND_COLORS.semantic.error};
  --bw-info: ${BRAND_COLORS.semantic.info};

  /* Spacing */
  --bw-spacing-xs: 0.25rem;
  --bw-spacing-sm: 0.5rem;
  --bw-spacing-md: 1rem;
  --bw-spacing-lg: 1.5rem;
  --bw-spacing-xl: 2rem;
  --bw-spacing-2xl: 3rem;
  --bw-spacing-3xl: 4rem;

  /* Border Radius */
  --bw-radius-sm: 4px;
  --bw-radius-md: 8px;
  --bw-radius-lg: 12px;
  --bw-radius-xl: 16px;
  --bw-radius-full: 9999px;

  /* Shadows */
  --bw-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --bw-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
  --bw-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  --bw-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15);
}
` as const

// ============================================
// TYPOGRAPHY
// ============================================

export const BRAND_TYPOGRAPHY = {
  // Font families
  fonts: {
    heading: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
  },

  // Font sizes
  sizes: {
    xs: '0.75rem', // 12px
    sm: '0.875rem', // 14px
    base: '1rem', // 16px
    lg: '1.125rem', // 18px
    xl: '1.25rem', // 20px
    '2xl': '1.5rem', // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem', // 48px
    '6xl': '3.75rem', // 60px
  },

  // Font weights
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line heights
  lineHeights: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },

  // Letter spacing
  letterSpacing: {
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
  },
} as const

// ============================================
// BRAND TOKENS
// ============================================

export const BRAND_TOKENS = {
  // Logo
  logo: {
    width: 180,
    height: 48,
    alt: 'Bengkel Wiguna - Bengkel Mobil Terpercaya di Depok',
  },

  // Favicon
  favicon: {
    size: 32,
    background: BRAND_COLORS.primary.dark,
    foreground: BRAND_COLORS.accent.orange,
  },

  // Button
  button: {
    padding: { sm: '0.5rem 1rem', md: '0.75rem 1.5rem', lg: '1rem 2rem' },
    borderRadius: '8px',
    fontWeight: 600,
    transition: 'all 0.2s ease',
  },

  // Card
  card: {
    padding: '1.5rem',
    borderRadius: '12px',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hoverShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },

  // Input
  input: {
    padding: '0.75rem 1rem',
    borderRadius: '8px',
    borderColor: BRAND_COLORS.neutral.midGray,
    focusBorderColor: BRAND_COLORS.accent.orange,
    focusShadow: `0 0 0 3px ${BRAND_COLORS.accent.orange}20`,
  },

  // Container
  container: {
    maxWidth: '1280px',
    padding: '1rem',
  },
} as const

// ============================================
// CSS GENERATORS
// ============================================

/**
 * Generate base CSS styles
 * @see brand-guidelines skill: Smart Font Application
 */
export function generateBaseStyles() {
  return `
/* Bengkel Wiguna Base Styles */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@400;500;600;700;800&display=swap');

${BRAND_CSS_VARIABLES}

/* Reset & Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: ${BRAND_TYPOGRAPHY.fonts.body};
  font-size: ${BRAND_TYPOGRAPHY.sizes.base};
  line-height: ${BRAND_TYPOGRAPHY.lineHeights.normal};
  color: ${BRAND_COLORS.text.primary};
  background-color: ${BRAND_COLORS.neutral.white};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-family: ${BRAND_TYPOGRAPHY.fonts.heading};
  font-weight: ${BRAND_TYPOGRAPHY.weights.bold};
  line-height: ${BRAND_TYPOGRAPHY.lineHeights.tight};
  color: ${BRAND_COLORS.text.primary};
}

h1 { font-size: ${BRAND_TYPOGRAPHY.sizes['5xl']}; }
h2 { font-size: ${BRAND_TYPOGRAPHY.sizes['4xl']}; }
h3 { font-size: ${BRAND_TYPOGRAPHY.sizes['3xl']}; }
h4 { font-size: ${BRAND_TYPOGRAPHY.sizes['2xl']}; }
h5 { font-size: ${BRAND_TYPOGRAPHY.sizes.xl}; }
h6 { font-size: ${BRAND_TYPOGRAPHY.sizes.lg}; }

/* Links */
a {
  color: ${BRAND_COLORS.text.link};
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  color: ${BRAND_COLORS.text.linkHover};
}

/* Buttons */
button, .btn {
  font-family: ${BRAND_TYPOGRAPHY.fonts.body};
  font-weight: ${BRAND_TOKENS.button.fontWeight};
  padding: var(--bw-spacing-sm) var(--bw-spacing-md);
  border: none;
  border-radius: ${BRAND_TOKENS.button.borderRadius};
  cursor: pointer;
  transition: var(--bw-spacing-transition);
}

.btn-primary {
  background-color: ${BRAND_COLORS.accent.orange};
  color: ${BRAND_COLORS.text.inverse};
}

.btn-primary:hover {
  background-color: ${BRAND_COLORS.accent.orangeLight};
}

.btn-secondary {
  background-color: ${BRAND_COLORS.primary.main};
  color: ${BRAND_COLORS.text.inverse};
}

/* Forms */
input, textarea, select {
  font-family: ${BRAND_TYPOGRAPHY.fonts.body};
  padding: var(--bw-spacing-sm) var(--bw-spacing-md);
  border: 1px solid ${BRAND_TOKENS.input.borderColor};
  border-radius: ${BRAND_TOKENS.input.borderRadius};
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: ${BRAND_TOKENS.input.focusBorderColor};
  box-shadow: ${BRAND_TOKENS.input.focusShadow};
}

/* Container */
.container {
  max-width: ${BRAND_TOKENS.container.maxWidth};
  margin: 0 auto;
  padding: 0 var(--bw-spacing-md);
}

/* Cards */
.card {
  padding: var(--bw-spacing-lg);
  border-radius: ${BRAND_TOKENS.card.borderRadius};
  background: ${BRAND_COLORS.neutral.white};
  box-shadow: ${BRAND_TOKENS.card.shadow};
  transition: box-shadow 0.2s ease;
}

.card:hover {
  box-shadow: ${BRAND_TOKENS.card.hoverShadow};
}
`
}

// ============================================
// TAILWIND CONFIG
// ============================================

/**
 * Tailwind CSS configuration with brand tokens
 */
export const TAILWIND_CONFIG = {
  theme: {
    extend: {
      colors: {
        bw: {
          primary: {
            dark: BRAND_COLORS.primary.dark,
            DEFAULT: BRAND_COLORS.primary.main,
            light: BRAND_COLORS.primary.light,
          },
          accent: {
            orange: BRAND_COLORS.accent.orange,
            'orange-light': BRAND_COLORS.accent.orangeLight,
            gold: BRAND_COLORS.accent.gold,
            teal: BRAND_COLORS.accent.teal,
          },
          neutral: {
            white: BRAND_COLORS.neutral.white,
            'off-white': BRAND_COLORS.neutral.offWhite,
            gray: {
              50: BRAND_COLORS.neutral.lightGray,
              100: BRAND_COLORS.neutral.midGray,
              200: BRAND_COLORS.neutral.darkGray,
              300: BRAND_COLORS.neutral.charcoal,
            },
          },
          semantic: {
            success: BRAND_COLORS.semantic.success,
            warning: BRAND_COLORS.semantic.warning,
            error: BRAND_COLORS.semantic.error,
            info: BRAND_COLORS.semantic.info,
          },
        },
      },
      fontFamily: {
        heading: [BRAND_TYPOGRAPHY.fonts.heading.split(',')[0].trim(), ...BRAND_TYPOGRAPHY.fonts.heading.split(',').slice(1)],
        body: [BRAND_TYPOGRAPHY.fonts.body.split(',')[0].trim(), ...BRAND_TYPOGRAPHY.fonts.body.split(',').slice(1)],
        mono: [BRAND_TYPOGRAPHY.fonts.mono.split(',')[0].trim(), ...BRAND_TYPOGRAPHY.fonts.mono.split(',').slice(1)],
      },
      borderRadius: {
        bw: {
          sm: BRAND_TOKENS.card.borderRadius,
          md: '12px',
          lg: '16px',
        },
      },
      boxShadow: {
        bw: {
          sm: BRAND_TOKENS.card.shadow,
          md: '0 4px 6px rgba(0, 0, 0, 0.1)',
          lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        },
      },
      spacing: {
        bw: {
          xs: '0.25rem',
          sm: '0.5rem',
          md: '1rem',
          lg: '1.5rem',
          xl: '2rem',
          '2xl': '3rem',
          '3xl': '4rem',
        },
      },
    },
  },
}

// ============================================
// REACT COMPONENT TOKENS
// ============================================

export const COMPONENT_TOKENS = {
  Button: {
    variants: {
      primary: {
        bg: BRAND_COLORS.accent.orange,
        bgHover: BRAND_COLORS.accent.orangeLight,
        text: BRAND_COLORS.text.inverse,
      },
      secondary: {
        bg: BRAND_COLORS.primary.main,
        bgHover: BRAND_COLORS.primary.light,
        text: BRAND_COLORS.text.inverse,
      },
      outline: {
        bg: 'transparent',
        bgHover: BRAND_COLORS.neutral.lightGray,
        text: BRAND_COLORS.primary.main,
        border: BRAND_COLORS.primary.main,
      },
      ghost: {
        bg: 'transparent',
        bgHover: BRAND_COLORS.neutral.lightGray,
        text: BRAND_COLORS.text.primary,
      },
    },
    sizes: {
      sm: { padding: '0.5rem 1rem', fontSize: BRAND_TYPOGRAPHY.sizes.sm },
      md: { padding: '0.75rem 1.5rem', fontSize: BRAND_TYPOGRAPHY.sizes.base },
      lg: { padding: '1rem 2rem', fontSize: BRAND_TYPOGRAPHY.sizes.lg },
    },
  },

  Card: {
    padding: '1.5rem',
    borderRadius: '12px',
    shadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    hoverShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
  },

  Input: {
    borderRadius: '8px',
    borderColor: BRAND_COLORS.neutral.midGray,
    focusBorderColor: BRAND_COLORS.accent.orange,
    focusShadow: `0 0 0 3px ${BRAND_COLORS.accent.orange}20`,
  },

  Badge: {
    borderRadius: 'full',
    padding: '0.25rem 0.75rem',
    fontSize: BRAND_TYPOGRAPHY.sizes.xs,
    fontWeight: 600,
  },
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Get contrasting text color for a background
 */
export function getContrastColor(hexColor: string): '#ffffff' | '#000000' {
  const hex = hexColor.replace('#', '')
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.5 ? '#000000' : '#ffffff'
}

/**
 * Generate inline styles object
 */
export function createBrandStyles(element: keyof typeof BRAND_TOKENS | 'default') {
  const styles = BRAND_TOKENS[element] || BRAND_TOKENS.default
  return styles
}

// ============================================
// EXPORTS
// ============================================

export {
  BRAND_COLORS,
  BRAND_CSS_VARIABLES,
  BRAND_TYPOGRAPHY,
  BRAND_TOKENS,
  COMPONENT_TOKENS,
  generateBaseStyles,
  TAILWIND_CONFIG,
  getContrastColor,
  createBrandStyles,
}