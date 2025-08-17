import { useEffect, useState } from 'react';
import { SITE_TITLE } from '../consts';

export default function HeaderUI() {
  const [isDark, setIsDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const dark = theme === 'dark';
    setIsDark(dark);
    document.documentElement.classList.toggle('dark', dark);
  }, []);

  const toggleDarkMode = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    document.documentElement.classList.toggle('dark', newDark);
    localStorage.setItem('theme', newDark ? 'dark' : 'light');
  };

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <a href="/" className="text-xl font-bold tracking-tight text-blue-600 dark:text-blue-400 hover:underline">
            Travel Vibes
          </a>
        </div>

        <div className="hidden md:flex space-x-6">
          <a href="/" className="nav-link">Home</a>
          <a href="/blog" className="nav-link">Blog</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
        </div>

        <div className="flex items-center space-x-4">
          <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          </button>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-700 dark:text-gray-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2"
              viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <a href="/" className="nav-link block">Home</a>
          <a href="/blog" className="nav-link block">Blog</a>
          <a href="/about" className="nav-link block">About</a>
          <a href="/contact" className="nav-link block">Contact</a>
        </div>
      )}
    </header>
  );
}
