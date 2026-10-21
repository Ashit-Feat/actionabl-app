/* Actionabl About Page
   Standalone page for the About section with Navbar and CTA footer */

import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import { useMetaTags } from "@/hooks/useMetaTags";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { Link, useLocation } from "wouter";
import { BASE_URL } from "@/const";
import isoCert from "/assets/certificates/iso27001.png";
import socCert from "/assets/certificates/soc2.png";
import hipaaCert from "/assets/certificates/hipaa.png";
import heroBg from "/assets/hero/hero-bg.webp";

const HERO_BG = heroBg;

const CERT_ISO = isoCert;
const CERT_SOC = socCert;
const CERT_HIPAA = hipaaCert;

const CERTS = [
  {
    src: CERT_ISO,
    alt: "ISO 27001 Certified",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
  {
    src: CERT_SOC,
    alt: "AICPA SOC 2 Certified",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
  {
    src: CERT_HIPAA,
    alt: "HIPAA Compliant",
    filter: "grayscale(1) brightness(0.18) contrast(1.15)",
  },
];

export default function About() {
  const [location] = useLocation();

  useMetaTags({
    title: "About Us | The Team Behind | Actionabl",
    description:
      " the team and story behind Actionabl — a business orchestration platform built by enterprise operators, for enterprise operators.",
    ogImage: `${BASE_URL}/og-about.png`,
    ogUrl: `${BASE_URL}/about`,
    canonical: `${BASE_URL}/about`,
  });

  const handleAnchorNav = (href: string) => {
    if (location !== "/") {
      // If not on home page, navigate to home page with hash
      window.location.href = "/" + href;
    } else {
      // If on home page, scroll smoothly
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Page hero banner */}
      <div
        className="relative pt-32 pb-16 overflow-hidden"
        style={{
          background: "linear-gradient(180deg, rgba(244,247,255,0.86) 0%, rgba(255,255,255,1) 100%)",
        }}
      >
        {/* Diagonal line texture */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
          <defs>
            <pattern
              id="about-hero-diag"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="18"
                stroke="rgba(15,23,42,0.16)"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-hero-diag)" />
        </svg>

        {/* Pastel blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "5%",
              width: "420px",
              height: "420px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(79,99,215,0.16) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-40px",
              left: "10%",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(155,169,255,0.14) 0%, transparent 70%)",
              filter: "blur(35px)",
            }}
          />
        </div>

        <div className="container relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-5"
          >
            <div
              className="w-[3px] h-5 rounded-full"
              style={{ background: "#4f63d7" }}
            />
            <span
              className="label-mono"
              style={{ color: "#4f63d7", fontWeight: 500 }}
            >
              Company
            </span>
            <div
              className="h-px w-12"
              style={{ background: "rgba(79,99,215,0.18)" }}
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl"
            style={{ fontFamily: "'Syne', sans-serif", color: "#111111" }}
          >
            About Actionabl
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 text-lg max-w-xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#555555",
              fontWeight: 300,
            }}
          >
            Built by enterprise operators, for enterprise operators. Meet the
            team and story behind the platform.
          </motion.p>
        </div>
      </div>

      {/* Main About content */}
      <AboutSection />

      {/* CTA strip */}
      <div
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #12161c 0%, #171c24 52%, #1b2028 100%)",
        }}
      >
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ opacity: 0.12 }}
        >
          <defs>
            <pattern
              id="about-cta-diag"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(35)"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="18"
                stroke="rgba(255,255,255,0.38)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#about-cta-diag)" />
        </svg>
        <div className="container relative text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Ready to see Actionabl in action?
          </h2>
          <p
            className="text-white/80 mb-8 max-w-lg mx-auto"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Book a personalized demo and discover how Actionabl can transform
            your enterprise operations.
          </p>
          <a
            href="https://calendly.com/hiren-panchani"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-200"
            style={{
              background: "white",
              color: "#1b2028",
              fontFamily: "'DM Sans', sans-serif",
              boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
            }}
          >
            Book a Demo
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7h10M8 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer - FIXED with proper navigation */}
      <footer
        style={{
          background: "oklch(0.985 0.003 90)",
          borderTop: "1px solid oklch(0.91 0.008 260)",
        }}
      >
        {/* Certificates row */}
        <div style={{ borderBottom: "1px solid oklch(0.91 0.008 260)" }}>
          <div className="container py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p
                  className="text-xs mb-1"
                  style={{
                    color: "oklch(0.55 0.015 260)",
                    fontFamily: "'JetBrains Mono', monospace",
                    letterSpacing: "0.1em",
                  }}
                >
                  SECURITY &amp; COMPLIANCE
                </p>
                <p
                  className="text-sm"
                  style={{
                    color: "oklch(0.35 0.025 260)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Enterprise-grade security you can trust
                </p>
              </div>
              <div className="flex items-center gap-8 flex-wrap justify-center">
                {CERTS.map(cert => (
                  <img
                    key={cert.alt}
                    src={cert.src}
                    alt={cert.alt}
                    className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                    style={{ filter: cert.filter }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo + tagline */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <a className="flex items-center gap-2.5 group">
                <svg
                  className="h-8 w-auto"
                  viewBox="0 0 227.41 203.41"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="ft-g1"
                      x1=".2"
                      y1="95.68"
                      x2="225.61"
                      y2="117.72"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#fad720" />
                      <stop offset="1" stopColor="#f96" />
                    </linearGradient>
                    <linearGradient
                      id="ft-g2"
                      x1="24.86"
                      y1="195.55"
                      x2="244"
                      y2="92.44"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#31e4fa" />
                      <stop offset=".5" stopColor="#4877ff" />
                      <stop offset="1" stopColor="#d775ff" />
                    </linearGradient>
                    <linearGradient
                      id="ft-g3"
                      x1="30.73"
                      y1="194.3"
                      x2="126.69"
                      y2="13.71"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#7d69ed" />
                      <stop offset=".51" stopColor="#f983db" />
                      <stop offset="1" stopColor="#ffc1ab" />
                    </linearGradient>
                    <linearGradient
                      id="ft-g4"
                      x1="208.5"
                      y1="191.24"
                      x2="86.12"
                      y2="13.88"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop offset="0" stopColor="#ff7854" />
                      <stop offset="1" stopColor="#fd267d" />
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#ft-g1)"
                    d="M210.87,90.24H16.53c-9.13,0-16.53,7.4-16.53,16.53s7.4,16.53,16.53,16.53H210.87c9.13,0,16.53-7.4,16.53-16.53s-7.4-16.53-16.53-16.53Z"
                  />
                  <path
                    fill="url(#ft-g2)"
                    d="M225.75,99.55c-3.99-8.21-13.88-11.64-22.1-7.65L38.74,172c-8.21,3.99-11.64,13.88-7.65,22.1,2.86,5.89,8.75,9.31,14.88,9.31,2.42,0,4.89-.54,7.21-1.67L218.1,121.65c8.21-3.99,11.64-13.88,7.65-22.1Z"
                  />
                  <path
                    fill="url(#ft-g3)"
                    d="M120.02,1.18c-8.48-3.38-18.1,.75-21.48,9.23L30.61,180.75c-3.38,8.48,.75,18.1,9.23,21.48,2.01,.8,4.08,1.18,6.12,1.18,6.57,0,12.78-3.94,15.36-10.41L129.25,22.66c3.38-8.48-.75-18.1-9.23-21.48Z"
                  />
                  <path
                    fill="url(#ft-g4)"
                    d="M194.98,180.92L129.32,10.59c-3.28-8.52-12.86-12.76-21.38-9.48-8.52,3.28-12.77,12.85-9.48,21.38l65.66,170.33c2.53,6.56,8.79,10.59,15.43,10.59,1.98,0,3.99-.36,5.94-1.11,8.52-3.28,12.77-12.85,9.48-21.38Z"
                  />
                </svg>
                <span
                  className="font-bold tracking-tight text-sm text-[oklch(0.35_0.025_260)] transition-colors duration-200 group-hover:text-[oklch(0.18_0.03_260)]"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Actionabl
                </span>
              </a>
            </Link>

            {/* Nav links - FIXED: Now using proper navigation with handleAnchorNav */}
            <nav className="flex flex-wrap gap-6">
              {[
                { label: "Platform", href: "#platform", isPage: false },
                { label: "Capabilities", href: "#capabilities", isPage: false },
                { label: "Why Actionabl", href: "#why", isPage: false },
                { label: "Benefits", href: "#benefits", isPage: false },
                { label: "About", href: "/about", isPage: true },
              ].map(link => {
                if (link.isPage) {
                  return (
                    <Link key={link.label} href={link.href}>
                      <a
                        className="text-xs transition-colors duration-200"
                        style={{
                          color: "oklch(0.55 0.015 260)",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                        onMouseEnter={e =>
                          (e.currentTarget.style.color = "oklch(0.18 0.03 260)")
                        }
                        onMouseLeave={e =>
                          (e.currentTarget.style.color =
                            "oklch(0.55 0.015 260)")
                        }
                      >
                        {link.label}
                      </a>
                    </Link>
                  );
                } else {
                  return (
                    <button
                      key={link.label}
                      onClick={() => handleAnchorNav(link.href)}
                      className="text-xs transition-colors duration-200 cursor-pointer"
                      style={{
                        color: "oklch(0.55 0.015 260)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                      onMouseEnter={e =>
                        (e.currentTarget.style.color = "oklch(0.18 0.03 260)")
                      }
                      onMouseLeave={e =>
                        (e.currentTarget.style.color = "oklch(0.55 0.015 260)")
                      }
                    >
                      {link.label}
                    </button>
                  );
                }
              })}
            </nav>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {[
                {
                  href: "https://www.linkedin.com/company/actionabl",
                  label: "LinkedIn",
                  icon: <Linkedin size={13} />,
                },
                {
                  href: "https://x.com/ActionablAi",
                  label: "X / Twitter",
                  icon: <Twitter size={13} />,
                },
                {
                  href: "https://www.youtube.com/@Actionabl",
                  label: "YouTube",
                  icon: <Youtube size={13} />,
                },
              ].map(social => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "white",
                    border: "1px solid oklch(0.91 0.008 260)",
                    color: "oklch(0.55 0.015 260)",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.62 0.14 175)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.75 0.10 175 / 0.5)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "oklch(0.94 0.04 175 / 0.4)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "oklch(0.55 0.015 260)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "oklch(0.91 0.008 260)";
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "white";
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3"
            style={{ borderTop: "1px solid oklch(0.91 0.008 260)" }}
          >
            <p
              className="text-xs text-[oklch(0.65_0.015_260)]"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Copyright &copy; 2026 Actionabl | All Rights Reserved
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/terms-of-use"
                className="text-xs transition-colors duration-200 text-[oklch(0.65_0.015_260)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = "oklch(0.35 0.025 260)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = "oklch(0.65 0.015 260)")
                }
              >
                Terms of Use
              </Link>
              <span style={{ color: "oklch(0.80 0.005 260)" }}>|</span>
              <Link
                href="/privacy-policy"
                className="text-xs transition-colors duration-200 text-[oklch(0.65_0.015_260)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = "oklch(0.35 0.025 260)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = "oklch(0.65 0.015 260)")
                }
              >
                Privacy Policy
              </Link>
               <span style={{ color: "oklch(0.80 0.005 260)" }}>|</span>
               <Link href="/eula"
                              className="text-xs transition-colors duration-200 text-[oklch(0.65_0.015_260)]"
                              style={{ fontFamily: "'DM Sans', sans-serif" }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = "oklch(0.35 0.025 260)")}
                              onMouseLeave={(e) => (e.currentTarget.style.color = "oklch(0.65 0.015 260)")}>
                              EULA
                            </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
