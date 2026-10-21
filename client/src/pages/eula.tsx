/* Eula.tsx
   Design: Architectural Minimalism — same as PrivacyPolicy.tsx
   Fonts: Syne (headings), DM Sans (body) */

import Navbar from "@/components/Navbar";
import { useMetaTags } from "@/hooks/useMetaTags";
import { Link, useLocation } from "wouter";
import { Linkedin, Twitter, Youtube } from "lucide-react";
import { BASE_URL } from "@/const";
import Certs from "@/components/Certs";

export default function Eula() {
  const [location] = useLocation();

  useMetaTags({
    title: "End User License Agreement (EULA) | Actionabl",
    description:
      "Read the End User License Agreement (EULA) for Actionabl software, outlining usage rights, restrictions, licensing terms, and legal conditions for users.",
    ogImage: `${BASE_URL}/assets/og_img/eula-og.jpg`,
    ogUrl: `${BASE_URL}/eula`,
    canonical: `${BASE_URL}/eula`,
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
          <span>EULA</span>
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
            End User License Agreement (EULA)
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
          {/* Intro */}
          <p>
            This End-User License Agreement (this "EULA") is a legal and binding
            agreement between Actionabl Infotech Pvt Ltd. ("Licensor") and END
            USER ("Licensee"), the author of Actionabl software including all
            HTML files, XML files, Java files, graphics files, animation files,
            data files, technology, development tools, scripts and programs,
            both in object code and source code (the "Software"), the
            deliverables provided pursuant to this EULA, which may include
            associated media, printed materials, and "online" or electronic
            documentation. By installing, copying, or otherwise using the
            Software, Licensee agrees to be bound by the terms and conditions
            set forth in this EULA. If Licensee does not agree to the terms and
            conditions set forth in this EULA, then Licensee may not download,
            install, or use the Software.
          </p>

          {/* 1. Grant of License */}
          <div>
            <h2
              className="text-[1.4rem] font-bold mb-4"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              1. Grant of License
            </h2>

            {/* A) Scope */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                A) Scope of License
              </h3>
              <p>
                Subject to the terms of this EULA, Licensor hereby grants to
                Licensee a limited, non-exclusive, non-transferable, and
                revocable license to install and use the Software solely for
                their personal, non-commercial use. This license does not
                entitle Licensee to any ownership or intellectual property
                rights in the software.
              </p>
            </div>

            {/* B) Installation and Use */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                B) Installation and Use
              </h3>
              <ul className="space-y-2 pl-1">
                <li className="flex gap-2">
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: "#4f63d7" }}
                  >
                    i)
                  </span>
                  <span>
                    Licensee shall NOT make back-up copies of the Software.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span
                    className="shrink-0 mt-0.5"
                    style={{ color: "#4f63d7" }}
                  >
                    ii)
                  </span>
                  <span>Licensee shall not allow any third party to:</span>
                </li>
              </ul>
              <ul className="mt-3 space-y-2 pl-8">
                {[
                  "Copy, modify, adapt, translate, reverse engineer, decompile, disassemble, or create derivative works based on the Software, except to the extent expressly permitted by applicable law;",
                  "Remove, alter, or obscure any copyright, trademark, or other proprietary notices on or within the Software;",
                  "Use the Software for any unlawful or unauthorized purpose;",
                  "Use the Software to infringe upon any intellectual property rights of the Company or any third party;",
                  "Distribute, sublicense, lease, rent, or otherwise make the Software available to any third party;",
                  "Use the Software in any manner that could damage, disable, overburden, or impair the Licensor's servers or networks.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "#4f63d7" }}
                    >
                      {String.fromCharCode(97 + i)})
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* C) Ownership */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                C) Ownership
              </h3>
              <p>
                The Software is licensed, not sold, to Licensee. The Licensor
                retains all right, title, and interest, including all
                intellectual property rights, in and to the Software. This
                Agreement does not transfer any ownership rights to Licensee.
              </p>
            </div>

            {/* D) Updates and Support */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                D) Updates and Support
              </h3>
              <p>
                The Licensor may provide updates, bug fixes, or other
                modifications to the Software, in its sole discretion. These
                updates may be provided automatically or require manual
                installation. The Licensor is under no obligation to provide any
                support or maintenance for the Software.
              </p>
            </div>

            {/* E) Disclaimer of Warranty */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                E) Disclaimer of Warranty
              </h3>
              <p
                className="uppercase text-[0.9rem] leading-relaxed"
                style={{ color: "oklch(0.40 0.015 260)" }}
              >
                THE SOFTWARE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND,
                EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE
                IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT. THE ENTIRE RISK ARISING OUT OF
                THE USE OR PERFORMANCE OF THE SOFTWARE REMAINS WITH LICENSEE.
              </p>
            </div>

            {/* F) Limitation of Liability */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                F) Limitation of Liability
              </h3>
              <p
                className="uppercase text-[0.9rem] leading-relaxed"
                style={{ color: "oklch(0.40 0.015 260)" }}
              >
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT
                SHALL THE LICENSOR OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT,
                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES ARISING
                OUT OF OR IN CONNECTION WITH THE SOFTWARE, WHETHER BASED ON
                CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, OR OTHERWISE, EVEN
                IF THE COMPANY OR ITS AFFILIATES HAVE BEEN ADVISED OF THE
                POSSIBILITY OF SUCH DAMAGES. THE LICENSOR'S TOTAL LIABILITY TO
                LICENSEE FOR ANY CLAIM ARISING OUT OF OR IN CONNECTION WITH THIS
                AGREEMENT SHALL NOT EXCEED THE AMOUNT PAID BY LICENSEE FOR THE
                SOFTWARE.
              </p>
            </div>

            {/* G) Termination */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                G) Termination
              </h3>
              <p>
                This Agreement is effective until terminated by either party.
                Licensee may terminate this Agreement by uninstalling and
                ceasing use of the Software. The Licensor may terminate this
                Agreement at any time without notice if Licensee fails to comply
                with any terms or conditions of this Agreement. Upon
                termination, Licensee must immediately stop using the Software
                and destroy all copies of the Software in Licensee's possession
                or control.
              </p>
            </div>

            {/* H) Governing Law */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                H) Governing Law and Dispute Resolution
              </h3>
              <p>
                The Agreement shall be governed by and construed in accordance
                with the laws of India. Any dispute, controversy, or claims
                arising out of or relating to this Agreement, or the breach,
                termination, or invalidity thereof, shall be submitted to the
                exclusive jurisdiction of the courts of Mumbai.
              </p>
            </div>

            {/* I) Miscellaneous */}
            <div className="mb-5">
              <h3
                className="text-[1.05rem] font-semibold mb-2"
                style={{
                  color: "oklch(0.20 0.025 260)",
                  fontFamily: "'Syne', sans-serif",
                }}
              >
                I) Miscellaneous
              </h3>
              <p className="mb-3">
                This agreement constitutes the entire agreement between Licensee
                and Licensor concerning the subject matter hereof and supersedes
                all prior or contemporaneous oral or written agreements and
                representations.
              </p>
              <ul className="space-y-2 pl-1">
                {[
                  "If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions of this Agreement shall continue in full force and effect.",
                  "The failure of the Licensor to enforce any right or provision of this Agreement shall not constitute a waiver of that right or provision.",
                  "This Agreement is not assignable or transferable by Licensee without Licensor's prior written consent. The Licensor may freely assign or transfer this Agreement without restriction.",
                  "The headings used in this Agreement are for convenience only and shall not affect the interpretation of this Agreement.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-2">
                    <span
                      className="shrink-0 mt-0.5"
                      style={{ color: "#4f63d7" }}
                    >
                      {String.fromCharCode(97 + i)})
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Closing statement */}
          <p
            className="pt-2 text-[0.95rem] italic"
            style={{
              color: "oklch(0.40 0.015 260)",
              borderTop: "1px solid oklch(0.88 0.005 260)",
              paddingTop: "1.5rem",
            }}
          >
            By installing, copying, or otherwise using the Software, you
            acknowledge that you have read this Agreement, understand it, and
            agree to be bound by its terms and conditions.
          </p>
        </div>
        <br />
        <div>
          <a
            href="/USERLICENSE_v1/USERLICENSE_v1.pdf"
            download
            className="flex items-center gap-1"
          >
            <b>Download –</b>
            <span className="text-sm font-medium text-blue-600 hover:text-blue-800 underline cursor-pointer">
              End User License Agreement (EULA)
            </span>
          </a>
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
            href="/terms-of-use"
            className="text-[0.88rem] cursor-pointer hover:underline"
            style={{
              color: "oklch(0.52 0.22 264)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Terms of Use →
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
              id="eula-cta-diag"
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
          <rect width="100%" height="100%" fill="url(#eula-cta-diag)" />
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

        <div className="container py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
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
