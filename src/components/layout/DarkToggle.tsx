'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const DarkToggle = () => {
  // Default to light mode (false)
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only enable dark mode if explicitly saved as 'dark'
      const savedTheme = localStorage.getItem('theme');
      const isDark = savedTheme === 'dark';

      setDarkMode(isDark);
      document.body.classList.toggle('dark', isDark);
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark', newMode);
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  };

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
