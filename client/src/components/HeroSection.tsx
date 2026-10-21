/* Actionabl Hero Section — Lens.xyz-inspired Aesthetic
   Pure white background, soft pastel blobs (mint, peach, lavender),
   diagonal line texture overlay, dark near-black text
   Typography: Syne display, DM Sans body */

import { motion } from "framer-motion";
import OrchestrationFlow from "./OrchestrationFlow";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{ background: "#ffffff" }}>

      {/* ── Pastel color blob: mint/green top-right ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-15%",
          right: "-8%",
          width: "60%",
          height: "75%",
          background: "radial-gradient(ellipse at center, rgba(134, 239, 172, 0.55) 0%, rgba(167, 243, 208, 0.30) 40%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Pastel color blob: peach/orange bottom-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "-5%",
          left: "-10%",
          width: "55%",
          height: "65%",
          background: "radial-gradient(ellipse at center, rgba(253, 186, 116, 0.50) 0%, rgba(254, 215, 170, 0.28) 40%, transparent 70%)",
          filter: "blur(55px)",
        }}
      />

      {/* ── Pastel color blob: lavender/pink center-left ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "25%",
          left: "0%",
          width: "45%",
          height: "55%",
          background: "radial-gradient(ellipse at center, rgba(196, 181, 253, 0.38) 0%, rgba(221, 214, 254, 0.20) 45%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* ── Diagonal line texture (lens.xyz style) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 28px,
            rgba(0, 0, 0, 0.028) 28px,
            rgba(0, 0, 0, 0.028) 29px
          )`,
          opacity: 1,
        }}
      />

      {/* ── Very faint dot grid for depth ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 90% 90% at 50% 50%, black 20%, transparent 75%)",
          opacity: 0.5,
        }}
      />

      <div className="container relative z-10 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-center">

          {/* Left: Text content */}
          <div>
            {/* Label badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span
                className="label-mono px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(0, 0, 0, 0.04)",
                  border: "1px solid rgba(0, 0, 0, 0.10)",
                  color: "rgba(0, 0, 0, 0.55)",
                  fontSize: "10px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Business Orchestration Platform
              </span>
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "rgba(134, 239, 172, 0.9)", boxShadow: "0 0 6px rgba(134, 239, 172, 0.8)" }}
              />
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-6xl xl:text-[4.25rem] font-bold leading-[1.04] tracking-tight mb-6"
              style={{ color: "#111111", fontFamily: "'Syne', sans-serif" }}
            >
              Shaping the Future of{" "}
              <span style={{ color: "#111111" }}>
                Autonomous Enterprise
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-lg lg:text-xl leading-relaxed mb-10 max-w-lg"
              style={{ color: "rgba(0,0,0,0.50)", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}
            >
              Orchestrate end-to-end business processes across AI, automations, people, and systems with built-in control, resilience, and human oversight.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA — dark pill like lens.xyz */}
              <button
                onClick={() => {
  window.open("https://calendly.com/hiren-panchani", "_blank");
}}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02] group"
                style={{
                  background: "linear-gradient(135deg, #12161c 0%, #1b2028 100%)",
                  color: "#ffffff",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                  boxShadow: "0 8px 22px rgba(18, 22, 28, 0.18)",
                }}
              >
                Book a Demo
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" className="group-hover:translate-x-0.5 transition-transform duration-200">
                  <path d="M2.5 6.5h8M7 2.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Secondary CTA — ghost */}
              <button
                onClick={() => {
                  const el = document.querySelector("#platform");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all duration-200"
                style={{
                  border: "1.5px solid rgba(0,0,0,0.14)",
                  color: "rgba(0,0,0,0.65)",
                  background: "rgba(255,255,255,0.7)",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "15px",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.30)";
                  (e.currentTarget as HTMLButtonElement).style.color = "#111111";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(0,0,0,0.14)";
                  (e.currentTarget as HTMLButtonElement).style.color = "rgba(0,0,0,0.65)";
                }}
              >
                Explore Platform
              </button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-12 pt-8 flex items-center gap-8 flex-wrap"
              style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}
            >
              {[
                { value: "End-to-End", label: "Orchestration" },
                { value: "Human-in-Loop", label: "By Design" },
                { value: "Open", label: "Architecture" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span
                    className="text-sm font-bold"
                    style={{ color: "#111111", fontFamily: "'Syne', sans-serif" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="text-xs"
                    style={{ color: "rgba(0,0,0,0.45)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Orchestration flow diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <OrchestrationFlow />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full flex items-start justify-center pt-1.5"
          style={{ border: "1.5px solid rgba(0,0,0,0.15)" }}
        >
          <div className="w-1 h-2 rounded-full" style={{ background: "rgba(0,0,0,0.25)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
