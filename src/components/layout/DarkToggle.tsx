'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const DarkToggle = () => {
  // Default to light mode (false)
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Load saved theme on mount and apply immediately to prevent flash
  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      // Check saved theme or system preference
      const savedTheme = localStorage.getItem('theme');
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);

      setDarkMode(isDark);

      // Apply dark class immediately to prevent flash
      if (isDark) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (typeof window !== 'undefined') {
      if (newMode) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  };

  // Prevent hydration mismatch - render placeholder until mounted
  if (!mounted) {
    return (
      <div className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-full px-4 py-2 text-sm font-medium text-gray-800">
        <Sun size={22} aria-hidden="true" />
        <span>Terang</span>
      </div>
    );
  }

  return (
    <button
      id="dark-switch"
      aria-label={darkMode ? "Aktifkan mode terang" : "Aktifkan mode gelap"}
      aria-pressed={darkMode}
      onClick={toggleDarkMode}
      className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 text-gray-800 dark:text-gray-100 dark:bg-gray-800"
    >
      {/* Light Mode Button (active when light) */}
      <div className={`flex items-center gap-2 ${!darkMode ? 'flex' : 'hidden'}`}>
        <Sun size={22} aria-hidden="true" />
        <span>Terang</span>
      </div>

      {/* Dark Mode Button (active when dark) */}
      <div className={`flex items-center gap-2 ${darkMode ? 'flex' : 'hidden'}`}>
        <Moon size={22} aria-hidden="true" />
        <span>Gelap</span>
      </div>
    </button>
  );
};

export default DarkToggle;
