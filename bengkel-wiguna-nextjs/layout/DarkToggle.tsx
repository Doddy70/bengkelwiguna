'use client';

import { useState, useEffect } from 'react';
import { Sun, Moon } from 'react-feather';

const DarkToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const isDark =
        savedTheme === 'dark' ||
        (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);

      setDarkMode(isDark);
      document.body.classList.toggle('dark', isDark); // 👈 now body
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (typeof window !== 'undefined') {
      document.body.classList.toggle('dark', newMode); // 👈 now body
      localStorage.setItem('theme', newMode ? 'dark' : 'light');
    }
  };

  return (
    <button
      id="dark-switch"
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="flex items-center gap-2 cursor-pointer bg-gray-100 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 text-gray-800 dark:text-gray-100 dark:bg-gray-800"
    >
      {/* Dark Mode */}
      <div className={`flex items-center gap-2 ${darkMode ? 'hidden' : 'flex'}`}>
        <Moon size={22} />
        <span>Dark</span>
      </div>

      {/* Light Mode */}
      <div className={`flex items-center gap-2 ${darkMode ? 'flex' : 'hidden'}`}>
        <Sun size={22} />
        <span>Light</span>
      </div>
    </button>
  );
};

export default DarkToggle;
