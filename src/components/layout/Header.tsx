"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Instagram } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { SALON_DATA } from "@/data/salonData";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Bridal", href: "/bridal" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 border-b border-black/[0.06] dark:border-white/[0.05] ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg shadow-black/5 dark:shadow-black/20 py-3.5"
          : "bg-background/85 backdrop-blur-md py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="group flex flex-col items-start focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-sm"
          aria-label="Karthikeya Lavish Looks Home"
        >
          <span className="text-[11px] sm:text-xs tracking-widest uppercase font-sans font-semibold text-gold-400 group-hover:text-gold-500 dark:group-hover:text-gold-300 transition-colors">
            {SALON_DATA.wordmarkTop}
          </span>
          <span className="font-serif text-xl sm:text-2xl font-medium tracking-wide text-ivory group-hover:text-gold-500 dark:group-hover:text-gold-200 transition-colors -mt-1">
            {SALON_DATA.wordmarkBottom}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wider uppercase transition-all duration-200 relative py-1.5 ${
                  isActive
                    ? "text-gold-500 dark:text-gold-400 font-semibold"
                    : "text-ivory/75 hover:text-gold-500 dark:hover:text-gold-300"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-4/5 h-[1.5px] bg-gradient-to-r from-gold-400/80 via-gold-300 to-gold-400/80 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>


        {/* Desktop CTA Buttons & Social */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SALON_DATA.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="w-10 h-10 rounded-full border border-surface-border hover:border-gold-400/50 flex items-center justify-center text-ivory/70 hover:text-gold-400 hover:bg-gold-400/10 transition-all duration-200"
          >
            <Instagram className="w-4 h-4" />
          </a>

          {/* Theme Toggle (Desktop) */}
          <ThemeToggle className="w-10 h-10" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-semibold bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-background dark:text-background font-sans shadow-md hover:shadow-gold-400/20 transition-all duration-200 active:scale-95 ml-1"
          >
            <Calendar className="w-3.5 h-3.5 text-background dark:text-background" />
            Book an Appointment
          </Link>
        </div>

        {/* Mobile Actions: Theme Toggle + Book + Hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle className="w-9 h-9" />

          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-3 py-2 rounded-full text-[11px] uppercase tracking-wider font-semibold bg-gold-400 text-background"
          >
            Book
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg flex items-center justify-center text-ivory hover:text-gold-400 hover:bg-surface-card border border-surface-border/80 transition-colors focus:outline-none focus:ring-2 focus:ring-gold-400"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] z-50 bg-background/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 border-t border-surface-border animate-fadeIn">
          <div className="flex flex-col gap-4 pt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase tracking-widest text-gold-400/90 font-semibold">
                Menu Navigation
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-ivory/60 font-medium">Theme:</span>
                <ThemeToggle showLabel className="px-3 py-1.5" />
              </div>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-serif tracking-wide py-2.5 px-3 rounded-xl transition-all ${
                    isActive
                      ? "text-gold-400 bg-gold-400/10 font-medium pl-4"
                      : "text-ivory hover:text-gold-300 hover:pl-4"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-surface-border flex flex-col gap-3">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 rounded-xl text-center text-sm font-semibold uppercase tracking-widest bg-gradient-to-r from-gold-400 to-gold-500 text-background shadow-lg shadow-gold-400/10 active:scale-98 transition-transform"
            >
              Book an Appointment
            </Link>

            <a
              href={SALON_DATA.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl text-center text-xs font-semibold uppercase tracking-wider border border-surface-border text-ivory/80 flex items-center justify-center gap-2 hover:bg-surface-card"
            >
              <Instagram className="w-4 h-4 text-gold-400" />
              Follow {SALON_DATA.instagram.handle}
            </a>

            <p className="text-center text-[11px] text-ivory/50 mt-2">
              {SALON_DATA.address.city}, Telangana • Unisex Luxury Salon
            </p>
          </div>
        </div>
      )}
    </header>
  );
}

