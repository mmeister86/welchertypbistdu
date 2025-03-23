"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [testsDropdownOpen, setTestsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Adding delay to dropdown actions
  const openTestsDropdownWithDelay = () => {
    setTimeout(() => {
      setTestsDropdownOpen(true);
    }, 150);
  };

  const closeTestsDropdownWithDelay = () => {
    setTimeout(() => {
      setTestsDropdownOpen(false);
    }, 150);
  };

  // Check if mouse has left the entire navigation
  const handleMouseLeaveNav = () => {
    closeTestsDropdownWithDelay();
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setTestsDropdownOpen(false);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  // Test data for the mega menu
  const testCards = [
    {
      title: "Star Wars Test",
      image: "/images/landscape/star-wars-landscape.jpeg",
      href: "/tests/star-wars",
    },
    {
      title: "Game of Thrones Test",
      image: "/images/landscape/got-landscape.jpeg",
      href: "/tests/game-of-thrones",
    },
    {
      title: "Marvel Test",
      image: "/images/landscape/marvel-landscape.jpeg",
      href: "/tests/marvel",
    },
    {
      title: "DC Test",
      image: "/images/landscape/dceu-landscape.jpeg",
      href: "/tests/dc-universe",
    },
    {
      title: "Spongebob Test",
      image: "/images/landscape/spongebob-landscape.jpeg",
      href: "/tests/spongebob",
    },
    {
      title: "Pokémon Test",
      image: "/images/landscape/pokemon-landscape.jpeg",
      href: "/tests/pokemon",
    },
  ];

  // Animation variants for the mega menu
  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
      transition: {
        duration: 0.1,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        duration: 0.1,
      },
    },
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
          <div
            className="hidden md:flex md:items-center md:space-x-8"
            ref={navRef}
            onMouseLeave={handleMouseLeaveNav}
          >
            <Link
              href="/"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors duration-150`}
              onMouseEnter={closeTestsDropdownWithDelay}
            >
              Home
            </Link>

            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/about")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors duration-150`}
              onMouseEnter={closeTestsDropdownWithDelay}
            >
              Über uns
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium ${
                isActive("/kontakt")
                  ? "text-purple-600"
                  : "text-gray-700 hover:text-purple-600"
              } transition-colors duration-150`}
              onMouseEnter={closeTestsDropdownWithDelay}
            >
              Kontakt
            </Link>

            <div className="relative group" ref={dropdownRef}>
              <div
                className={`px-3 py-2 text-sm font-medium flex items-center ${
                  pathname.startsWith("/tests")
                    ? "text-purple-600"
                    : "text-gray-700 hover:text-purple-600"
                } transition-colors duration-150 cursor-pointer`}
                onMouseEnter={openTestsDropdownWithDelay}
              >
                Alle Tests <ChevronDown size={16} className="ml-1" />
              </div>

              <AnimatePresence>
                {testsDropdownOpen && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={menuVariants}
                    className="absolute right-0 mt-2 w-[900px] p-6 pt-10 bg-white rounded-md shadow-lg z-10 overflow-hidden"
                    onMouseEnter={openTestsDropdownWithDelay}
                    onMouseLeave={closeTestsDropdownWithDelay}
                  >
                    <div className="grid grid-cols-3 gap-4">
                      {testCards.map((test, index) => (
                        <Link
                          key={index}
                          href={test.href}
                          className="group block overflow-hidden rounded-lg transition-all duration-150 hover:shadow-md hover:scale-105"
                          onClick={closeMenu}
                        >
                          <div className="relative h-32 w-full overflow-hidden">
                            <Image
                              src={test.image}
                              alt={test.title}
                              fill
                              className="object-cover transition-transform duration-150"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                            <h3 className="absolute bottom-2 left-2 text-white font-medium z-10">
                              {test.title}
                            </h3>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-3 pt-3 border-t border-gray-100 text-right">
                      <Link
                        href="/tests"
                        className="text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors duration-150"
                        onClick={closeMenu}
                      >
                        Alle Tests anzeigen →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-colors duration-150"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                } transition-colors duration-150`}
                onClick={closeMenu}
              >
                Home
              </Link>

              <button
                className={`flex justify-between items-center w-full px-3 py-2 rounded-md text-base font-medium ${
                  pathname.startsWith("/tests")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                } transition-colors duration-150`}
                onClick={toggleMenu}
              >
                Tests
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-150 ${
                    testsDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {testsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="pl-4 space-y-3 py-2 overflow-hidden"
                  >
                    {testCards.map((test, index) => (
                      <Link
                        key={index}
                        href={test.href}
                        className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors duration-150"
                        onClick={closeMenu}
                      >
                        <div className="relative h-10 w-16 mr-3 rounded overflow-hidden">
                          <Image
                            src={test.image}
                            alt={test.title}
                            fill
                            className="object-cover transition-transform duration-150"
                          />
                        </div>
                        {test.title}
                      </Link>
                    ))}
                    <Link
                      href="/tests"
                      className="block px-3 py-2 rounded-md text-base font-medium text-purple-600 hover:bg-purple-50 transition-colors duration-150"
                      onClick={closeMenu}
                    >
                      Alle Tests anzeigen
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive("/about")
                    ? "text-purple-600 bg-purple-50"
                    : "text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                } transition-colors duration-150`}
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
                } transition-colors duration-150`}
                onClick={closeMenu}
              >
                Kontakt
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
