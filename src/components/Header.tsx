"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-white/80 dark:bg-[#111111]/80 backdrop-blur-md shadow-sm border border-black/5 dark:border-white/5 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-5xl transition-colors duration-300">
        <div className="text-xl font-bold tracking-tight text-black dark:text-white">
          Penny.
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-500 dark:text-gray-400">
          <Link href="#home" className="hover:text-black dark:hover:text-white transition-colors">home</Link>
          <Link href="#features" className="hover:text-black dark:hover:text-white transition-colors">features</Link>
          <Link href="#how-it-works" className="hover:text-black dark:hover:text-white transition-colors">how it works</Link>
          <Link href="#pricing" className="hover:text-black dark:hover:text-white transition-colors">pricing</Link>
          <Link href="#about" className="hover:text-black dark:hover:text-white transition-colors">about</Link>
        </nav>
        
        <div className="flex items-center space-x-3">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors rounded-full"
              aria-label="Toggle Dark Mode"
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          )}

          <button className="bg-black text-white dark:bg-white dark:text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors">
            join waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
