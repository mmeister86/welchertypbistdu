"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [testsDropdownOpen, setTestsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTestsDropdown = () => {
    setTestsDropdownOpen(!testsDropdownOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTestsDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex-shrink-0 flex items-center"
              onClick={closeMenu}
            >
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                WelcherTypBistDu
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors`}
            >
              Home
            </Link>

            <div className="relative">
              <button
                className={`px-3 py-2 text-sm font-medium flex items-center ${
                  pathname.startsWith("/tests")
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                } transition-colors`}
                onClick={toggleTestsDropdown}
              >
                Tests <ChevronDown size={16} className="ml-1" />
              </button>

              {testsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    href="/tests/star-wars"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    onClick={closeMenu}
                  >
                    Star Wars Test
                  </Link>
                  <Link
                    href="/tests/color"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    onClick={closeMenu}
                  >
                    Farben Test
                  </Link>
                  <Link
                    href="/tests/personality"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    onClick={closeMenu}
                  >
                    Persönlichkeitstest
                  </Link>
                  <Link
                    href="/tests"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                    onClick={closeMenu}
                  >
                    Alle Tests
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors`}
            >
              Über uns
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/contact")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors`}
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Menü öffnen</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>

            <button
              className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                pathname.startsWith("/tests")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
              onClick={toggleTestsDropdown}
            >
              Tests
              <ChevronDown
                size={16}
                className={`transition-transform ${
                  testsDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {testsDropdownOpen && (
              <div className="pl-4 space-y-1">
                <Link
                  href="/tests/star-wars"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  onClick={closeMenu}
                >
                  Star Wars Test
                </Link>
                <Link
                  href="/tests/color"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  onClick={closeMenu}
                >
                  Farben Test
                </Link>
                <Link
                  href="/tests/personality"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  onClick={closeMenu}
                >
                  Persönlichkeitstest
                </Link>
                <Link
                  href="/tests"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  onClick={closeMenu}
                >
                  Alle Tests
                </Link>
              </div>
            )}

            <Link
              href="/about"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/about")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
              onClick={closeMenu}
            >
              Über uns
            </Link>

            <Link
              href="/contact"
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive("/contact")
                  ? "text-purple-600 bg-purple-50"
                  : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
              }`}
              onClick={closeMenu}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
