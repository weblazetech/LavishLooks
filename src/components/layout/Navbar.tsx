"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Calendar, Sparkles, Phone } from "lucide-react";
import { SALON_INFO } from "@/data/salonInfo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const triggerButtonRef = React.useRef<HTMLButtonElement>(null);
  const drawerRef = React.useRef<HTMLDivElement>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const prevOpenRef = React.useRef(mobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [mobileMenuOpen]);

  // Focus transfer on open and focus restoration on close
  useEffect(() => {
    if (mobileMenuOpen && !prevOpenRef.current) {
      // Just opened: Transfer focus to close button inside drawer
      const timer = setTimeout(() => {
        if (closeButtonRef.current) {
          closeButtonRef.current.focus();
        } else if (drawerRef.current) {
          const firstFocusable = drawerRef.current.querySelector<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          firstFocusable?.focus();
        }
      }, 50);
      return () => clearTimeout(timer);
    } else if (!mobileMenuOpen && prevOpenRef.current) {
      // Just closed: Restore focus to trigger button
      const timer = setTimeout(() => {
        triggerButtonRef.current?.focus();
      }, 50);
      return () => clearTimeout(timer);
    }
    prevOpenRef.current = mobileMenuOpen;
  }, [mobileMenuOpen]);

  // Focus Trapping and Escape Key handling
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMobileMenuOpen(false);
        return;
      }

      if (e.key === "Tab" && drawerRef.current) {
        const focusableElements = drawerRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (focusableElements.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          // Backward tab: from first wrap to last
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Forward tab: from last wrap to first
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Bridal", href: "/bridal" },
    { name: "Gallery", href: "/gallery" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "var(--header-height)",
          display: "flex",
          alignItems: "center",
          transition: "all 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
          backgroundColor: isScrolled ? "rgba(4, 18, 18, 0.88)" : "transparent",
          backdropFilter: isScrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(197, 168, 112, 0.22)"
            : "1px solid rgba(197, 168, 112, 0.08)",
          boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.35)" : "none",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Brand Wordmark */}
          <Link
            href="/"
            className="brand-wordmark"
            aria-label="Karthikeya Lavish Looks Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="wordmark-karthikeya">{SALON_INFO.wordmarkTracker}</span>
            <span className="wordmark-lavish-looks">{SALON_INFO.wordmarkBrand}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "2.25rem",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.88rem",
                    fontWeight: isActive ? 600 : 400,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: isActive ? "var(--gold-400)" : "var(--ivory-100)",
                    position: "relative",
                    padding: "0.4rem 0",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--gold-300)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "var(--ivory-100)";
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        backgroundColor: "var(--gold-400)",
                        borderRadius: "1px",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA (Desktop) */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "1.25rem",
            }}
            className="desktop-cta"
          >
            <a
              href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                color: "var(--ivory-50)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.03em",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-300)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--ivory-50)")}
            >
              <Phone size={14} style={{ color: "var(--gold-400)" }} />
              <span>{SALON_INFO.social.phoneFormatted}</span>
            </a>

            <Link
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.68rem 1.4rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--gold-400)",
                background: "linear-gradient(135deg, rgba(216, 189, 136, 0.15) 0%, rgba(197, 168, 112, 0.28) 100%)",
                color: "var(--gold-200)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.82rem",
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.3s ease",
                boxShadow: "0 2px 14px rgba(197, 168, 112, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-1px)";
                e.currentTarget.style.background = "var(--gold-gradient)";
                e.currentTarget.style.color = "var(--teal-950)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(197, 168, 112, 0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.background = "linear-gradient(135deg, rgba(216, 189, 136, 0.15) 0%, rgba(197, 168, 112, 0.28) 100%)";
                e.currentTarget.style.color = "var(--gold-200)";
                e.currentTarget.style.boxShadow = "0 2px 14px rgba(197, 168, 112, 0.15)";
              }}
            >
              <Calendar size={15} />
              <span>Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            ref={triggerButtonRef}
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--gold-border)",
              color: "var(--gold-300)",
              background: "rgba(13, 49, 49, 0.6)",
              transition: "all 0.2s ease",
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-Out Navigation */}
      <div
        ref={drawerRef}
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        inert={!mobileMenuOpen}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          height: "100dvh",
          maxHeight: "100dvh",
          zIndex: 999,
          backgroundColor: "rgba(4, 18, 18, 0.98)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          transform: mobileMenuOpen ? "translateX(0)" : "translateX(100%)",
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? "visible" : "hidden",
          pointerEvents: mobileMenuOpen ? "auto" : "none",
          transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease, visibility 0.35s",
        }}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Sticky Drawer Header with Brand & Accessible Close Button */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1.2rem 1.5rem",
            borderBottom: "1px solid rgba(197, 168, 112, 0.18)",
            position: "sticky",
            top: 0,
            backgroundColor: "rgba(4, 18, 18, 0.96)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            zIndex: 10,
            flexShrink: 0,
          }}
        >
          <Link
            href="/"
            className="brand-wordmark"
            aria-label="Karthikeya Lavish Looks Home"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="wordmark-karthikeya" style={{ fontSize: "0.68rem" }}>{SALON_INFO.wordmarkTracker}</span>
            <span className="wordmark-lavish-looks" style={{ fontSize: "1.25rem" }}>{SALON_INFO.wordmarkBrand}</span>
          </Link>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--gold-border)",
              color: "var(--gold-300)",
              background: "rgba(13, 49, 49, 0.7)",
              cursor: "pointer",
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Scrollable Content (Ensures 375×667 viewports can easily reach all buttons) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            flexGrow: 1,
            padding: "1.25rem 1.5rem 2.5rem",
            minHeight: "min-content",
            gap: "1.75rem",
          }}
        >
          <nav
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            <div style={{ marginBottom: "0.35rem" }}>
              <span className="editorial-tag" style={{ fontSize: "0.68rem", padding: "0.25rem 0.65rem" }}>
                <Sparkles size={11} /> Warangal&apos;s Premier Unisex Salon
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.35rem, 4.5vw, 1.85rem)",
                    color: isActive ? "var(--gold-400)" : "var(--ivory-50)",
                    borderBottom: "1px solid rgba(197, 168, 112, 0.12)",
                    paddingBottom: "0.45rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    transition: "color 0.2s ease",
                  }}
                >
                  <span>{link.name}</span>
                  {isActive && <span style={{ fontSize: "0.9rem", color: "var(--gold-400)" }}>✦</span>}
                </Link>
              );
            })}
          </nav>

          {/* Action CTAs (Book Appointment & Call) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", marginTop: "auto" }}>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.65rem",
                padding: "0.85rem 1rem",
                borderRadius: "var(--radius-full)",
                background: "var(--gold-gradient)",
                color: "var(--teal-950)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                boxShadow: "0 6px 20px rgba(197, 168, 112, 0.3)",
              }}
            >
              <Calendar size={17} />
              <span>Book An Appointment</span>
            </Link>

            <a
              href={`tel:${SALON_INFO.social.phone.replace(/\s+/g, "")}`}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.55rem",
                padding: "0.8rem 1rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid var(--gold-border)",
                background: "rgba(13, 49, 49, 0.7)",
                color: "var(--ivory-50)",
                fontFamily: "var(--font-sans)",
                fontSize: "0.88rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              <Phone size={15} style={{ color: "var(--gold-400)" }} />
              <span>Call: {SALON_INFO.social.phoneFormatted}</span>
            </a>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.78rem",
                color: "var(--text-muted-dark)",
                fontFamily: "var(--font-sans)",
                marginTop: "0.2rem",
              }}
            >
              <span>{SALON_INFO.address.city}, {SALON_INFO.address.state} • {SALON_INFO.social.instagramHandle}</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-cta {
            display: flex !important;
          }
          .mobile-menu-trigger {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
