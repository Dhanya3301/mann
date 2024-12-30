"use client";

import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white shadow-sm">
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative"
        aria-label="Top"
      >
        <div className="w-full py-4 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center flex-shrink-0">
            <Link href="/">
              <span className="sr-only">YouTube Sentiment Analyzer</span>
              <svg
                className="h-10 w-auto text-indigo-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-14c-2.21 0-4 1.79-4 4 0 1.1.45 2.1 1.17 2.83L6.71 14.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.46-1.46C10.9 15.55 11.9 16 13 16c2.21 0 4-1.79 4-4 0-1.1-.45-2.1-1.17-2.83l1.46-1.46c.39-.39.39-1.02 0-1.41-.39-.39-1.02-.39-1.41 0l-1.46 1.46C13.1 6.45 12.1 6 11 6z" />
              </svg>
            </Link>
          </div>
          <div className="hidden lg:flex justify-center flex-grow">
            <div className="space-x-8">
              <Link
                href="#features"
                className="text-xl font-medium text-gray-500 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="#technical"
                className="text-xl font-medium text-gray-500 hover:text-gray-900"
              >
                Technical
              </Link>
              <Link
                href="#about"
                className="text-xl font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0 ml-10 space-x-4">
            <Link
              target="_blank"
              href="https://colab.research.google.com/drive/1YFX5Tpm5u4ZTgKVSbvdar2Yk6MOuq0Ay?authuser=2"
              className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
            >
              Open Project
            </Link>
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          {isMobileMenuOpen && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href="#features"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Features
                </Link>
                <Link
                  href="#technical"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  Technical
                </Link>
                <Link
                  href="#about"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
