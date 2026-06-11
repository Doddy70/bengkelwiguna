/**
 * Theme Provider - React Context for Theme Switching
 * Based on theme-factory skill patterns
 *
 * Usage:
 * <ThemeProvider defaultTheme="modernMinimalist">
 *   <App />
 * </ThemeProvider>
 */

'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import {
  THEMES,
  BENGKEL_THEMES,
  type Theme,
  type ThemeName,
  getTheme,
  generateThemeCSS,
  getGoogleFontsImport,
} from './theme-factory'

// ============================================
// TYPES
// ============================================

interface ThemeContextValue {
  theme: Theme
  themeName: ThemeName
  mode: 'light' | 'dark'
  setTheme: (theme: ThemeName) => void
  setMode: (mode: 'light' | 'dark') => void
  toggleMode: () => void
}

interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: ThemeName
  defaultMode?: 'light' | 'dark'
  persistPreference?: boolean
}

// ============================================
// CONTEXT
// ============================================

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'bengkel-theme-preference'
const MODE_KEY = 'bengkel-theme-mode'

// ============================================
// PROVIDER COMPONENT
// ============================================

export function ThemeProvider({
  children,
  defaultTheme = 'modernMinimalist',
  defaultMode = 'light',
  persistPreference = true,
}: ThemeProviderProps) {
  const [themeName, setThemeName] = useState<ThemeName>(defaultTheme)
  const [mode, setModeState] = useState<'light' | 'dark'>(defaultMode)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load preferences from storage
  useEffect(() => {
    if (!persistPreference) {
      setIsHydrated(true)
      return
    }

    const savedTheme = localStorage.getItem(STORAGE_KEY) as ThemeName | null
    const savedMode = localStorage.getItem(MODE_KEY) as 'light' | 'dark' | null

    if (savedTheme && THEMES[savedTheme]) {
      setThemeName(savedTheme)
    }

    if (savedMode) {
      setModeState(savedMode)
    }

    setIsHydrated(true)
  }, [persistPreference])

  // Persist theme preference
  const setTheme = useCallback(
    (newTheme: ThemeName) => {
      setThemeName(newTheme)
      if (persistPreference) {
        localStorage.setItem(STORAGE_KEY, newTheme)
      }
    },
    [persistPreference]
  )

  // Persist mode preference
  const setMode = useCallback(
    (newMode: 'light' | 'dark') => {
      setModeState(newMode)
      if (persistPreference) {
        localStorage.setItem(MODE_KEY, newMode)
      }
    },
    [persistPreference]
  )

  // Toggle light/dark mode
  const toggleMode = useCallback(() => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }, [mode, setMode])

  const theme = getTheme(themeName)

  const value: ThemeContextValue = {
    theme,
    themeName,
    mode,
    setTheme,
    setMode,
    toggleMode,
  }

  // Inject theme CSS and Google Fonts
  useEffect(() => {
    if (!isHydrated) return

    // Load Google Fonts
    const fontLink = document.createElement('link')
    fontLink.href = getGoogleFontsImport(themeName)
    fontLink.rel = 'stylesheet'
    document.head.appendChild(fontLink)

    // Create style element for theme
    const styleId = 'bengkel-theme-styles'
    let styleEl = document.getElementById(styleId)

    if (!styleEl) {
      styleEl = document.createElement('style')
      styleEl.id = styleId
      document.head.appendChild(styleEl)
    }

    styleEl.textContent = generateThemeCSS(themeName, mode)

    // Add theme class to body
    document.body.classList.add(`theme-${themeName}`)
    document.body.setAttribute('data-theme', themeName)
    document.body.setAttribute('data-mode', mode)

    // Cleanup
    return () => {
      document.body.classList.remove(`theme-${themeName}`)
      fontLink.remove()
    }
  }, [themeName, mode, isHydrated])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

// ============================================
// HOOK
// ============================================

export function useTheme() {
  const context = useContext(ThemeContext)

  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

// ============================================
// THEME SELECTOR COMPONENT
// ============================================

export interface ThemeSelectorProps {
  onThemeChange?: (theme: ThemeName) => void
  showModeToggle?: boolean
}

export function ThemeSelector({ onThemeChange, showModeToggle = true }: ThemeSelectorProps) {
  const { themeName, mode, setTheme, toggleMode } = useTheme()

  const handleThemeChange = (newTheme: ThemeName) => {
    setTheme(newTheme)
    onThemeChange?.(newTheme)
  }

  return (
    <div className="theme-selector">
      {/* Theme buttons */}
      <div className="theme-buttons">
        {(Object.keys(THEMES) as ThemeName[]).map((name) => (
          <button
            key={name}
            onClick={() => handleThemeChange(name)}
            className={`theme-btn ${themeName === name ? 'active' : ''}`}
            title={THEMES[name].description}
          >
            <span
              className="theme-preview"
              style={{
                backgroundColor: THEMES[name].colors.background,
              }}
            >
              <span
                style={{
                  backgroundColor: THEMES[name].colors.primary,
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  backgroundColor: THEMES[name].colors.accent,
                  width: '12px',
                  height: '12px',
                  borderRadius: '2px',
                  display: 'inline-block',
                }}
              />
            </span>
            <span className="theme-label">{THEMES[name].name}</span>
          </button>
        ))}
      </div>

      {/* Mode toggle */}
      {showModeToggle && (
        <div className="mode-toggle">
          <button
            onClick={toggleMode}
            className="mode-btn"
            title={`Switch to ${mode === 'light' ? 'dark' : 'light'} mode`}
          >
            {mode === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      )}
    </div>
  )
}

// ============================================
// BENGKEL WIGUNA THEME PRESETS
// ============================================

export function useBengkelThemes() {
  const { setTheme } = useTheme()

  return {
    // Preset themes for quick switching
    presets: {
      automotive: () => setTheme('modernMinimalist'),
      premium: () => setTheme('modernMinimalist'),
      dark: () => setTheme('midnightGalaxy'),
    },

    // Available themes
    themes: {
      automotive: BENGKEL_THEMES.automotive,
      premium: BENGKEL_THEMES.premium,
      dark: BENGKEL_THEMES.dark,
      booking: BENGKEL_THEMES.booking,
    },
  }
}

// ============================================
// WITH THEME HOC
// ============================================

export function withTheme<P extends object>(
  WrappedComponent: React.ComponentType<P>,
  defaultTheme: ThemeName = 'modernMinimalist'
) {
  return function ThemedComponent(props: P) {
    return (
      <ThemeProvider defaultTheme={defaultTheme}>
        <WrappedComponent {...props} />
      </ThemeProvider>
    )
  }
}

// ============================================
// EXPORTS
// ============================================

export {
  THEMES,
  BENGKEL_THEMES,
  getTheme,
  getAllThemes,
  getThemeNames,
  generateThemeCSS,
  getGoogleFontsImport,
  getThemePreview,
  createCustomTheme,
} from './theme-factory'