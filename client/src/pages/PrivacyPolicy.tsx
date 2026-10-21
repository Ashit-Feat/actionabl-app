/* PrivacyPolicy.tsx
   Design: Architectural Minimalism — off-white background, clean legal document layout
   Fonts: Syne (headings), DM Sans (body) */

import Navbar from "@/components/Navbar";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Link, useLocation } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { BASE_URL } from "@/const";
import Certs from "@/components/Certs";

export default function PrivacyPolicy() {
  const [location] = useLocation();

  useMetaTags({
    title: "Privacy Policy | Actionabl",
    description:
      "Actionabl prioritizes visitor privacy. Our Privacy Policy explains what information we collect, how it is recorded, and how we use it to protect and improve your experience.",
    ogImage: `${BASE_URL}/assets/og_img/privacy-policy-og.jpg`,
    ogUrl: `${BASE_URL}/privacy-policy`,
    canonical: `${BASE_URL}/privacy-policy`,
  });

  const handleAnchorNav = (href: string) => {
    if (location !== "/") {
      window.location.href = "/" + href;
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "white" }}>
      <Navbar />

      <main className="container py-24 lg:py-32">
        {/* Breadcrumb */}
        <nav
          className="flex items-center gap-2 mb-10 text-[0.82rem]"
          style={{
            color: "oklch(0.55 0.015 260)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <Link
            href="/"
            className="hover:underline cursor-pointer"
            style={{ color: "oklch(0.52 0.22 264)" }}
          >
            Home
          </Link>
          <span>›</span>
          <span>Privacy Policy</span>
        </nav>

        {/* Header */}
        <div
          className="mb-12 pb-8"
          style={{ borderBottom: "1px solid oklch(0.88 0.005 260)" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-[3px] h-5 rounded-full"
              style={{ background: "#4f63d7" }}
            />
            <div
              className="text-[10px] tracking-[0.14em] uppercase"
              style={{
                color: "#4f63d7",
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              Legal
            </div>
            <div
              className="h-px w-12"
              style={{ background: "rgba(79,99,215,0.18)" }}
            />
          </div>
          <h1
            className="text-[2.8rem] lg:text-[3.4rem] font-bold leading-[1.1] tracking-tight"
            style={{
              color: "oklch(0.13 0.025 260)",
              fontFamily: "'Syne', sans-serif",
            }}
          >
            Privacy Policy
          </h1>
          <p
            className="mt-4 text-[0.9rem]"
            style={{
              color: "oklch(0.55 0.015 260)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Last updated: January 1, 2026
          </p>
        </div>

        {/* Content */}
        <div
          className="max-w-3xl space-y-8 text-[1rem] leading-relaxed"
          style={{
            color: "oklch(0.32 0.015 260)",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          <p>
            This page is dedicated to informing our website visitors about our
            policies concerning the collection, use, and disclosure of Personal
            Information for those who choose to use the website.
          </p>

          <p>
            Protecting the privacy of our visitors is one of our top priorities.
            This Privacy Policy outlines the types of information collected and
            recorded by Actionabl, as well as how we utilize that information.
          </p>

          <p>
            By opting to use our service, you consent to the collection and use
            of information in accordance with this policy. Any Personal
            Information we collect will be used solely for providing and
            enhancing our services. We commit to not using or sharing your
            information with third parties, except as explicitly outlined in
            this Privacy Policy.
          </p>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Information Collection and Usage
            </h2>
            <p>
              To provide you with a better experience while using our website
              services, we may require you to share certain personally
              identifiable information, such as your Full Name, Email, Phone
              Number, and Company. The information collected will be utilized to
              contact or identify you, contingent upon your approval provided
              online.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Cookies
            </h2>
            <p>
              At Actionabl, we use cookies to enhance your browsing experience.
              These cookies store information such as visitors' preferences and
              the specific pages accessed on our website.
            </p>
            <p className="mt-4">
              You have full control over the use of cookies, with the option to
              accept or refuse them and to be notified when a cookie is sent to
              your device. However, please note that if you choose to disable
              cookies, some features of our service may not function properly.
            </p>
            <p className="mt-4">
              We prioritize your privacy and strive to make our services as
              user-friendly as possible while ensuring optimal performance.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Data Security
            </h2>
            <p>
              We are committed to ensuring that your information is secure. In
              order to prevent unauthorized access or disclosure, we have put in
              place suitable physical, electronic, and managerial procedures to
              safeguard and secure the information we collect online. Actionabl
              maintains ISO 27001 certification, SOC 2 compliance, and HIPAA
              compliance to ensure the highest standards of data security.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Third-Party Disclosure
            </h2>
            <p>
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties. This does not include
              trusted third parties who assist us in operating our website,
              conducting our business, or serving you, so long as those parties
              agree to keep this information confidential.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Your Rights
            </h2>
            <p>
              You have the right to request access to the personal information
              we hold about you, to request correction of inaccurate data, and
              to request deletion of your personal information, subject to
              applicable legal requirements. To exercise these rights, please
              contact us using the details below.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </p>
          </div>

          <div>
            <h2
              className="text-[1.4rem] font-bold mb-3"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:info@actionabl.ai"
                style={{ color: "oklch(0.52 0.22 264)" }}
                className="underline"
              >
                info@actionabl.ai
              </a>
              .
            </p>
          </div>
        </div>

        {/* Footer nav */}
        <div
          className="mt-16 pt-8 flex items-center justify-between"
          style={{ borderTop: "1px solid oklch(0.88 0.005 260)" }}
        >
          <Link
            href="/"
            className="text-[0.88rem] cursor-pointer hover:underline"
            style={{
              color: "oklch(0.52 0.22 264)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            ← Back to Home
          </Link>
          <Link
            href="/eula"
            className="text-[0.88rem] cursor-pointer hover:underline"
            style={{
              color: "oklch(0.52 0.22 264)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            EULA →
          </Link>
        </div>
      </main>

      {/* CTA Strip */}
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
              id="pp-cta-diag"
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
          <rect width="100%" height="100%" fill="url(#pp-cta-diag)" />
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

      {/* Footer */}
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
              <Certs />
            </div>
          </div>
        </div>

        {/* Main footer links */}
        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            {/* Logo — ✅ no nested <a> */}
            <Link href="/" className="flex items-center gap-2.5 group">
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
            </Link>

            {/* Nav links */}
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
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-xs transition-colors duration-200"
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
              <Link
                href="/eula"
                className="text-xs transition-colors duration-200 text-[oklch(0.65_0.015_260)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
                onMouseEnter={e =>
                  (e.currentTarget.style.color = "oklch(0.35 0.025 260)")
                }
                onMouseLeave={e =>
                  (e.currentTarget.style.color = "oklch(0.65 0.015 260)")
                }
              >
                EULA
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
