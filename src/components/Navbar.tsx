"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
  badge?: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Innovation", href: "/innovation" },
  { name: "Data", href: "/data" },
  { name: "Progress", href: "/progress" },
  { name: "Creator", href: "/creator" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF9F5]/90 backdrop-blur-md border-b border-[#E6E4DC]/80 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.03)]"
          : "bg-[#FAF9F5] border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="group flex items-center gap-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] rounded-md py-1"
          >
            <div className="w-8 h-8 rounded-full border border-[#141413] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <span className="font-serif text-sm font-semibold text-[#141413]">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight text-[#141413] font-medium transition-colors group-hover:text-[#C85A32]">
                SOCRATIVE
              </span>
              <span className="text-[10px] tracking-widest text-[#787774] uppercase font-mono hidden sm:inline-block">
                Research Project
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32] ${
                    isActive
                      ? "text-[#141413] font-semibold"
                      : "text-[#66645E] hover:text-[#141413] hover:bg-[#F0EEE6]"
                  }`}
                >
                  <span className="relative z-10">{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 bg-[#EAE7DE] rounded-full z-0"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA / Context tag */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/innovation"
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-[#141413] bg-[#FAF9F5] border border-[#D1CFCE] hover:border-[#141413] px-3.5 py-1.5 rounded-full transition-all duration-200 hover:bg-[#141413] hover:text-[#FAF9F5]"
            >
              <span>Explore Method</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2.5 rounded-md text-[#141413] hover:bg-[#EAE7DE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C85A32]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden border-b border-[#E6E4DC] bg-[#FAF9F5] overflow-hidden"
          >
            <div className="px-6 pt-3 pb-8 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-[#EAE7DE] text-[#141413] font-semibold"
                        : "text-[#4D4C48] hover:bg-[#F4F2EB] hover:text-[#141413]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                    )}
                  </Link>
                );
              })}

              <div className="pt-4 mt-4 border-t border-[#E6E4DC]">
                <Link
                  href="/innovation"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium text-[#FAF9F5] bg-[#141413] rounded-lg hover:bg-[#2C2B29] transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>The Socratic Innovation</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
