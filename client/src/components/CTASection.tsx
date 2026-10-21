/* Actionabl CTA + Footer — Clean Light Aesthetic
   Full-width gradient CTA with centered content
   Footer with certificates, correct social links, copyright, and legal links
   Contact Us popup modal with 6-field form */

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Linkedin,
  Twitter,
  Youtube,
  X,
  CheckCircle2,
} from "lucide-react";
import { Link, useLocation } from "wouter";
import heroBg from "/assets/hero/hero-bg.webp";
import Certs from "./Certs";

const HERO_BG = heroBg;

const BOOK_DEMO_URL = "https://calendly.com/hiren-panchani";

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Contact Us Modal ── */
type FormState = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  designation: string;
  country: string;
  message: string;
  consent: boolean;
};

function ContactModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    country: "",
    message: "",
    consent: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to send message");
      }

      setSubmitted(true);
    } catch (err) {
      console.error(err);
      alert(
        err instanceof Error
          ? err.message
          : "Failed to send message. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const inputStyle = {
    background: "white",
    border: "1px solid oklch(0.88 0.008 260)",
    color: "oklch(0.18 0.03 260)",
    fontFamily: "'DM Sans', sans-serif",
  };

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        style={{
          background: "oklch(0 0 0 / 0.50)",
          backdropFilter: "blur(8px)",
        }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 24 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg rounded-2xl overflow-hidden"
          style={{
            background: "white",
            border: "1px solid oklch(0.91 0.008 260)",
            boxShadow:
              "0 32px 80px oklch(0.18 0.03 260 / 0.20), 0 8px 24px oklch(0.18 0.03 260 / 0.10)",
          }}
          onClick={e => e.stopPropagation()}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-7 py-5"
            style={{ borderBottom: "1px solid oklch(0.91 0.008 260)" }}
          >
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-[3px] h-4 rounded-full"
                  style={{ background: "#4f63d7" }}
                />
                <span
                  className="text-[10px] tracking-[0.14em] uppercase"
                  style={{
                    color: "#4f63d7",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  Contact
                </span>
                <div
                  className="h-px w-10"
                  style={{ background: "rgba(79,99,215,0.18)" }}
                />
              </div>
              <h2
                className="text-lg font-bold text-[oklch(0.18_0.03_260)]"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                Contact Us
              </h2>
              <p
                className="text-xs mt-0.5 text-[oklch(0.55_0.015_260)]"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Our team will get back to you within 24 hours.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
              style={{
                background: "oklch(0.96 0.005 90)",
                border: "1px solid oklch(0.91 0.008 260)",
                color: "oklch(0.55 0.015 260)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(0.18 0.03 260)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(0.80 0.008 260)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "oklch(0.55 0.015 260)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "oklch(0.91 0.008 260)";
              }}
            >
              <X size={14} />
            </button>
          </div>

          {/* Body */}
          <div className="px-7 py-6 max-h-[70vh] overflow-y-auto">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.94 0.04 175 / 0.5)",
                    border: "1px solid oklch(0.75 0.10 175 / 0.4)",
                  }}
                >
                  <CheckCircle2
                    size={28}
                    style={{ color: "oklch(0.62 0.14 175)" }}
                  />
                </div>
                <h3
                  className="text-lg font-bold text-[oklch(0.18_0.03_260)] text-center"
                  style={{ fontFamily: "'Syne', sans-serif" }}
                >
                  Message Sent!
                </h3>
                <p
                  className="text-sm text-center text-[oklch(0.55_0.015_260)]"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  Thank you for reaching out. Our team will contact you within
                  24 hours.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 px-6 py-2.5 rounded-md text-sm font-medium text-white transition-all duration-200"
                  style={{
                    background: "oklch(0.62 0.14 175)",
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Row 1: Full Name + Email */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Full Name <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Email <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Phone Number <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Company <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Enter your company"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                </div>

                {/* Row 3: Designation + Country */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Designation <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="designation"
                      required
                      value={form.designation}
                      onChange={handleChange}
                      placeholder="Enter your designation"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      Country <span style={{ color: "#4f63d7" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="country"
                      required
                      value={form.country}
                      onChange={handleChange}
                      placeholder="Enter your country"
                      className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200"
                      style={inputStyle}
                      onFocus={e =>
                        (e.currentTarget.style.borderColor =
                          "rgba(79,99,215,0.65)")
                      }
                      onBlur={e =>
                        (e.currentTarget.style.borderColor =
                          "oklch(0.88 0.008 260)")
                      }
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label
                    className="block text-xs mb-1.5 font-medium text-[oklch(0.45_0.015_260)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg text-sm outline-none transition-all duration-200 resize-none"
                    style={inputStyle}
                    onFocus={e =>
                      (e.currentTarget.style.borderColor =
                        "rgba(79,99,215,0.65)")
                    }
                    onBlur={e =>
                      (e.currentTarget.style.borderColor =
                        "oklch(0.88 0.008 260)")
                    }
                  />
                </div>

                {/* Consent */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={form.consent}
                    onChange={handleChange}
                    className="mt-0.5 w-4 h-4 rounded"
                    style={{ accentColor: "#4f63d7" }}
                  />
                  <label
                    htmlFor="consent"
                    className="text-xs leading-relaxed cursor-pointer text-[oklch(0.55_0.015_260)]"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    I consent to the collection and use of my personal data as
                    outlined in the{" "}
                    <Link
                      href="/privacy-policy"
                      className="underline"
                      style={{ color: "#4f63d7" }}
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                {/* Submit */}
                <div className="flex gap-3 pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 text-white"
                    style={{
                      background: submitting ? "#6a7be4" : "#4f63d7",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {submitting ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeOpacity="0.3"
                          />
                          <path
                            d="M12 2a10 10 0 0 1 10 10"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Submit"
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
                    style={{
                      background: "oklch(0.96 0.005 90)",
                      border: "1px solid oklch(0.91 0.008 260)",
                      color: "oklch(0.45 0.015 260)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                    onMouseEnter={e =>
                      (e.currentTarget.style.color = "oklch(0.18 0.03 260)")
                    }
                    onMouseLeave={e =>
                      (e.currentTarget.style.color = "oklch(0.45 0.015 260)")
                    }
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Main CTA Section ── */
export default function CTASection() {
  const { ref, visible } = useReveal();
  const [contactOpen, setContactOpen] = useState(false);
  const [location] = useLocation();

  const handleAnchorNav = (href: string) => {
    // For the footer links, we need to handle navigation correctly
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
    <>
      {/* Contact Modal */}
      {contactOpen && <ContactModal onClose={() => setContactOpen(false)} />}

      {/* CTA Section */}
      <section
        id="contact"
        className="py-28 lg:py-40 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #12161c 0%, #171c24 52%, #1b2028 100%)",
        }}
      >
        {/* Background image — very subtle */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.03,
            mixBlendMode: "screen",
          }}
        />

        {/* Radial light overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(ellipse 70% 60% at 50% 46%, rgba(87, 162, 255, 0.08) 0%, rgba(255,255,255,0.02) 28%, transparent 72%)`,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container relative z-10" ref={ref}>
          <div className="max-w-2xl mx-auto text-center">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center gap-3 mb-8"
            >
              <div
                className="h-px w-12"
                style={{ background: "oklch(1 0 0 / 0.25)" }}
              />
              <span
                className="text-[10px] tracking-[0.14em] uppercase"
                style={{
                  color: "oklch(1 0 0 / 0.75)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Get Started
              </span>
              <div
                className="h-px w-12"
                style={{ background: "oklch(1 0 0 / 0.25)" }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Ready to orchestrate your enterprise?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-lg leading-relaxed mb-10"
              style={{
                color: "oklch(1 0 0 / 0.80)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 300,
              }}
            >
              See how Actionabl brings control, resilience, and intelligence to
              your business processes. Book a personalized demo with our team.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href={BOOK_DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-semibold transition-all duration-200 hover:-translate-y-0.5 group"
                style={{
                  background: "white",
                  color: "#1b2028",
                  fontFamily: "'DM Sans', sans-serif",
                  boxShadow: "0 4px 20px oklch(0 0 0 / 0.15)",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "oklch(0.97 0.02 264)";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 8px 32px oklch(0 0 0 / 0.20)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "white";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                    "0 4px 20px oklch(0 0 0 / 0.15)";
                }}
              >
                Book a Demo
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform duration-200"
                />
              </a>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-md font-medium transition-all duration-200"
                style={{
                  border: "1.5px solid oklch(1 0 0 / 0.35)",
                  color: "oklch(1 0 0 / 0.90)",
                  background: "oklch(1 0 0 / 0.08)",
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "oklch(1 0 0 / 0.55)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(1 0 0 / 0.15)";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "oklch(1 0 0 / 0.35)";
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "oklch(1 0 0 / 0.08)";
                }}
              >
                Contact Us
              </button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={visible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex items-center justify-center gap-6 flex-wrap"
            >
              {[
                "No lock-in",
                "Open architecture",
                "Human oversight by design",
                "Enterprise-grade resilience",
              ].map(signal => (
                <div key={signal} className="flex items-center gap-1.5">
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ background: "oklch(1 0 0 / 0.60)" }}
                  />
                  <span
                    className="text-xs"
                    style={{
                      color: "oklch(1 0 0 / 0.70)",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {signal}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
            {/* Logo + tagline */}
            <Link href="/">
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

            {/* Nav links - FIXED: Now using proper navigation */}
            <nav className="flex flex-wrap gap-6">
              {[
                { label: "Platform", href: "#platform" },
                { label: "Capabilities", href: "#capabilities" },
                { label: "Why Actionabl", href: "#why" },
                { label: "Benefits", href: "#benefits" },
                { label: "About", href: "/about" },
              ].map(link => {
                // Check if it's a page link (starts with '/') or an anchor link (starts with '#')
                const isPageLink = link.href.startsWith("/");

                if (isPageLink) {
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
    </>
  );
}
