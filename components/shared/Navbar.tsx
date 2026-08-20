"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react";

const LIGRA_BLUE = "#048099";

const menuItems = [
  { label: "Technology", href: "/growing-media/proven-performance" },
  { label: "Products", href: "/growing-media" },
  { label: "Applications", href: "/growing-media/solutions" },
  { label: "Resources", href: "/growing-media/proven-performance" },
  { label: "About LiGrA", href: "/" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const searchWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (
          searchWrapperRef.current &&
          !searchWrapperRef.current.contains(event.target as Node)
        ) {
          setIsSearchOpen(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "pt-4 px-4" : "pt-0 px-0"
      }`}
    >
      {/* Outer wrapper: background, full width atau pill */}
      <div
        className={`mx-auto overflow-hidden transition-[max-width,background-color,box-shadow] duration-300 ${
          isScrolled
            ? "max-w-[1200px] rounded-full shadow-xl bg-white/50 backdrop-blur-lg"
            : "max-w-full rounded-none shadow-none bg-transparent"
        }`}
      >
        {/* Inner wrapper: content dibatasi 1400px, selalu */}
        <div
          className={`max-w-[1400px] mx-auto flex items-center justify-between gap-6 transition-all duration-300 ${
            isScrolled ? "pl-5 pr-2 py-2" : "px-6 py-3"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/images/logo/logo.svg"
              alt="LiGrA - Lightweight Green Aggregates"
              width={150}
              height={44}
              priority
              className={`w-auto transition-all duration-300 ${
                isScrolled ? "h-11" : "h-16"
              }`}
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="relative text-sm font-light text-black-700 transition-colors duration-200 group/link"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = LIGRA_BLUE)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item.label}
                  <span
                    className="absolute left-0 -bottom-1 h-0.5 w-0 transition-all duration-200 group-hover/link:w-full"
                    style={{ backgroundColor: LIGRA_BLUE }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3 flex-shrink-0">
            {/* Search */}
            <div ref={searchWrapperRef} className="flex items-center">
              <div
                className={`relative flex items-center overflow-hidden transition-all duration-300 ease-in-out ${
                  isSearchOpen ? "w-40 opacity-100" : "w-0 opacity-0"
                }`}
              >
                <Search
                  size={16}
                  strokeWidth={1.75}
                  className="absolute left-3.5 text-gray-400 pointer-events-none"
                />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  className="w-full h-9 pl-10 pr-3 text-sm bg-gray-100 rounded-full outline-none border border-transparent focus:border-gray-300 transition-colors duration-200"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsSearchOpen(false);
                  }}
                />
              </div>

              {!isSearchOpen && (
                <button
                  onClick={toggleSearch}
                  aria-label="Search"
                  className="w-9 h-9 flex-shrink-0 flex items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  <Search size={18} strokeWidth={1.75} />
                </button>
              )}
            </div>

            <Link
              href="/growing-media"
              className="inline-flex items-center text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:brightness-110 hover:-translate-y-0.5"
              style={{ backgroundColor: LIGRA_BLUE }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden max-w-[1400px] mx-auto px-4 overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[420px] opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-xl p-4">
          <ul className="flex flex-col gap-1">
            {menuItems.map((item, i) => (
              <li
                key={item.label}
                className="transition-all duration-300"
                style={{
                  transitionDelay: isMobileMenuOpen ? `${i * 50}ms` : "0ms",
                }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2.5 px-2 text-sm font-light text-gray-700 rounded-lg transition-all duration-200 hover:bg-gray-50"
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = LIGRA_BLUE)
                  }
                  onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/growing-media"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-3 flex items-center justify-center text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:brightness-110"
            style={{ backgroundColor: LIGRA_BLUE }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
