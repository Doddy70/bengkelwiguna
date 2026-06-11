/** @type {import('tailwindcss').Config} */

/**
 * Bengkel Wiguna Tailwind Configuration
 * Based on brand-guidelines skill + brand.ts tokens
 */

const { BRAND_COLORS, BRAND_TYPOGRAPHY, TAILWIND_CONFIG } = require('../src/lib/brand.ts')

module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    extend: {
      // Colors from brand.ts
      colors: {
        primary: {
          DEFAULT: BRAND_COLORS.primary.main,
          dark: BRAND_COLORS.primary.dark,
          light: BRAND_COLORS.primary.light,
        },
        accent: {
          orange: BRAND_COLORS.accent.orange,
          'orange-light': BRAND_COLORS.accent.orangeLight,
          gold: BRAND_COLORS.accent.gold,
          teal: BRAND_COLORS.accent.teal,
        },
        neutral: BRAND_COLORS.neutral,
        semantic: BRAND_COLORS.semantic,
        text: BRAND_COLORS.text,
      },

      // Font families
      fontFamily: {
        heading: ['Poppins', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },

      // Typography
      fontSize: {
        xs: BRAND_TYPOGRAPHY.sizes.xs,
        sm: BRAND_TYPOGRAPHY.sizes.sm,
        base: BRAND_TYPOGRAPHY.sizes.base,
        lg: BRAND_TYPOGRAPHY.sizes.lg,
        xl: BRAND_TYPOGRAPHY.sizes.xl,
        '2xl': BRAND_TYPOGRAPHY.sizes['2xl'],
        '3xl': BRAND_TYPOGRAPHY.sizes['3xl'],
        '4xl': BRAND_TYPOGRAPHY.sizes['4xl'],
        '5xl': BRAND_TYPOGRAPHY.sizes['5xl'],
      },

      // Spacing
      spacing: {
        xs: '0.25rem',
        sm: '0.5rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        '2xl': '3rem',
        '3xl': '4rem',
      },

      // Border radius
      borderRadius: {
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        full: '9999px',
      },

      // Shadows
      shadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 4px 6px rgba(0, 0, 0, 0.1)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.15)',
      },

      // Animation
      transitionDuration: {
        DEFAULT: '200ms',
      },

      // Container
      container: {
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },

  plugins: [
    // Add custom plugins here
    require('@tailwindcss/forms'), // Form styling
    require('@tailwindcss/typography'), // Prose styling
  ],

  // Important for avoiding conflicts
  important: true,
}