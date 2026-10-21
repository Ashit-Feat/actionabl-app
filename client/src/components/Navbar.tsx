/* Actionabl Navbar — Clean Light Aesthetic
   Supports both anchor scroll links and page navigation
   About links to /about page; other links scroll on home page */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Platform",       href: "#platform",      page: false },
  { label: "Capabilities",   href: "#capabilities",  page: false },
  { label: "Why Actionabl",  href: "#why",            page: false },
  { label: "Benefits",       href: "#benefits",       page: false },
  { label: "About",          href: "/about",          page: true  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash scrolling after page navigation
  useEffect(() => {
    // If we're on the home page and there's a hash in the URL, scroll to it
    if (location === "/" && window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  const handleAnchorNav = (href: string) => {
    setMobileOpen(false);
    if (location !== "/") {
      // Navigate home then scroll
      window.location.href = "/" + href;
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleContactNav = () => {
    setMobileOpen(false);
    window.open("https://calendly.com/hiren-panchani", "_blank");
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
        style={{
          background: scrolled ? "oklch(1 0 0 / 0.95)" : "oklch(1 0 0 / 0.85)",
          backdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid oklch(0.91 0.008 260)"
            : "1px solid oklch(0.94 0.005 260 / 0.6)",
          boxShadow: scrolled ? "0 1px 20px oklch(0.18 0.03 260 / 0.06)" : "none",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <a className="flex items-center gap-2 group">
                <svg className="h-9 w-auto" viewBox="0 0 227.41 203.41" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="nav-g1" x1=".2" y1="95.68" x2="225.61" y2="117.72" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#fad720"/>
                      <stop offset="1" stopColor="#f96"/>
                    </linearGradient>
                    <linearGradient id="nav-g2" x1="24.86" y1="195.55" x2="244" y2="92.44" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#31e4fa"/>
                      <stop offset=".5" stopColor="#4877ff"/>
                      <stop offset="1" stopColor="#d775ff"/>
                    </linearGradient>
                    <linearGradient id="nav-g3" x1="30.73" y1="194.3" x2="126.69" y2="13.71" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#7d69ed"/>
                      <stop offset=".51" stopColor="#f983db"/>
                      <stop offset="1" stopColor="#ffc1ab"/>
                    </linearGradient>
                    <linearGradient id="nav-g4" x1="208.5" y1="191.24" x2="86.12" y2="13.88" gradientUnits="userSpaceOnUse">
                      <stop offset="0" stopColor="#ff7854"/>
                      <stop offset="1" stopColor="#fd267d"/>
                    </linearGradient>
                  </defs>
                  <path fill="url(#nav-g1)" d="M210.87,90.24H16.53c-9.13,0-16.53,7.4-16.53,16.53s7.4,16.53,16.53,16.53H210.87c9.13,0,16.53-7.4,16.53-16.53s-7.4-16.53-16.53-16.53Z"/>
                  <path fill="url(#nav-g2)" d="M225.75,99.55c-3.99-8.21-13.88-11.64-22.1-7.65L38.74,172c-8.21,3.99-11.64,13.88-7.65,22.1,2.86,5.89,8.75,9.31,14.88,9.31,2.42,0,4.89-.54,7.21-1.67L218.1,121.65c8.21-3.99,11.64-13.88,7.65-22.1Z"/>
                  <path fill="url(#nav-g3)" d="M120.02,1.18c-8.48-3.38-18.1,.75-21.48,9.23L30.61,180.75c-3.38,8.48,.75,18.1,9.23,21.48,2.01,.8,4.08,1.18,6.12,1.18,6.57,0,12.78-3.94,15.36-10.41L129.25,22.66c3.38-8.48-.75-18.1-9.23-21.48Z"/>
                  <path fill="url(#nav-g4)" d="M194.98,180.92L129.32,10.59c-3.28-8.52-12.86-12.76-21.38-9.48-8.52,3.28-12.77,12.85-9.48,21.38l65.66,170.33c2.53,6.56,8.79,10.59,15.43,10.59,1.98,0,3.99-.36,5.94-1.11,8.52-3.28,12.77-12.85,9.48-21.38Z"/>
                </svg>
                <span
                  className="font-bold tracking-tight text-[0.95rem] transition-colors duration-300"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
                >
                  Actionabl
                </span>
              </a>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) =>
                link.page ? (
                  <Link key={link.label} href={link.href}>
                    <a
                      className="px-3.5 py-2 rounded-md text-sm transition-all duration-150"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 500,
                        color: location === link.href ? '#4f63d7' : 'oklch(0.45 0.015 260)',
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = '#111111';
                        (e.currentTarget as HTMLAnchorElement).style.background = 'oklch(0.96 0.005 90)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = location === link.href ? '#4f63d7' : 'oklch(0.45 0.015 260)';
                        (e.currentTarget as HTMLAnchorElement).style.background = '';
                      }}
                    >
                      {link.label}
                    </a>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleAnchorNav(link.href)}
                    className="px-3.5 py-2 rounded-md text-sm text-[oklch(0.45_0.015_260)] hover:text-[oklch(0.18_0.03_260)] hover:bg-[oklch(0.96_0.005_90)] transition-all duration-150"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                  </button>
                )
              )}
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={handleContactNav}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, #12161c 0%, #1b2028 100%)",
                  color: "white",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 8px 18px rgba(18, 22, 28, 0.16)",
                }}
              >
                Book a Demo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-md text-[oklch(0.45_0.015_260)] hover:text-[oklch(0.18_0.03_260)] hover:bg-[oklch(0.96_0.005_90)] transition-colors duration-200"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 backdrop-blur-xl"
            style={{
              background: "oklch(1 0 0 / 0.97)",
              borderBottom: "1px solid oklch(0.91 0.008 260)",
              boxShadow: "0 8px 30px oklch(0.18 0.03 260 / 0.08)",
            }}
          >
            <div className="container py-4 space-y-1">
              {navLinks.map((link) =>
                link.page ? (
                  <Link key={link.label} href={link.href}>
                    <a
                      onClick={() => setMobileOpen(false)}
                      className="block w-full text-left px-4 py-3 rounded-md text-sm hover:bg-[oklch(0.96_0.005_90)] transition-all duration-150"
                      style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, color: '#555555' }}
                    >
                      {link.label}
                    </a>
                  </Link>
                ) : (
                  <button
                    key={link.label}
                    onClick={() => handleAnchorNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-md text-sm text-[oklch(0.45_0.015_260)] hover:text-[oklch(0.18_0.03_260)] hover:bg-[oklch(0.96_0.005_90)] transition-all duration-150"
                    style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500 }}
                  >
                    {link.label}
                  </button>
                )
              )}
              <div className="pt-3 pb-1" style={{ borderTop: "1px solid oklch(0.91 0.008 260)" }}>
                <button
                  onClick={handleContactNav}
                  className="w-full px-4 py-3 rounded-full text-sm font-semibold"
                  style={{
                    background: "linear-gradient(135deg, #12161c 0%, #1b2028 100%)",
                    color: "white",
                    fontFamily: "'DM Sans', sans-serif",
                    boxShadow: "0 8px 18px rgba(18, 22, 28, 0.14)",
                  }}
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
