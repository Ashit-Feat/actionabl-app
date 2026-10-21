/* EcosystemSection.tsx
   Design: Architectural Minimalism — off-white background, clean partner logo strip
   Fonts: Syne (headings), DM Sans (body), JetBrains Mono (labels)
   Shows the Actionabl Ecosystem: partner/client logos in a clean marquee-style row */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import hdfcLogo from "/assets/ecosystem/hdfc.png";
import kotakLogo from "/assets/ecosystem/kotak.jpg";
import luluLogo from "/assets/ecosystem/lulu.png";
import featsystemsLogo from "/assets/ecosystem/featsystems.svg";
import deloitteLogo from "/assets/ecosystem/deloitte.png";

const partners = [
  {
    name: "HDFC",
    logo: hdfcLogo,
    dark: false,
  },
  {
    name: "Kotak Group",
    logo: kotakLogo,
    dark: false,
  },
  {
    name: "LuLu Financial Holdings",
    logo: luluLogo,
    dark: false,
    scale: "1.45",
  },
];

export default function EcosystemSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28"
      style={{ background: "white" }}
    >
      {/* Top border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "oklch(0.88 0.005 260)" }}
      />

      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2.5 mb-4"
            >
              <div
                className="w-[3px] h-5 rounded-full"
                style={{ background: "#4f63d7" }}
              />
              <span
                className="text-[10px] tracking-[0.14em] uppercase"
                style={{
                  color: "#4f63d7",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                Actionabl Ecosystem
              </span>
              <div className="h-px flex-1 max-w-12" style={{ background: "rgba(79,99,215,0.18)" }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="text-[2.2rem] lg:text-[2.6rem] font-bold leading-[1.12] tracking-tight"
              style={{
                color: "oklch(0.13 0.025 260)",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Trusted by leading enterprises & global partners
            </motion.h2>
          </div>
        </div>

        {/* Partner logos grid */}
      <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.65, delay: 0.28 }}
  className="rounded-2xl overflow-hidden"
  style={{
    border: "1px solid oklch(0.88 0.005 260)",
    background: "oklch(1 0 0)",
  }}
>
  <div
    className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 divide-x divide-y"
    style={{ borderColor: "oklch(0.92 0.004 260)" }}
  >
    {partners.slice(0, 3).map((partner, i) => (
      <motion.div
        key={partner.name}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.35 + i * 0.08 }}
        className="flex items-center justify-center p-8 lg:p-10 group transition-all duration-300"
        style={{
          borderColor: "oklch(0.92 0.004 260)",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.background =
            "rgba(0,176,155,0.06)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.background = "";
        }}
      >
        <img
          src={partner.logo}
          alt={partner.name}
          className="h-10 w-auto max-w-[130px] object-contain transition-all duration-300 group-hover:scale-105"
          style={{
            filter: "grayscale(100%)",
            opacity: 0.65,
            transform: partner.scale
              ? `scale(${partner.scale})`
              : undefined,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "grayscale(0%)";
            (e.currentTarget as HTMLImageElement).style.opacity = "1";
            (e.currentTarget as HTMLImageElement).style.transform =
              partner.scale
                ? `scale(calc(${partner.scale} * 1.05))`
                : "";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLImageElement).style.filter =
              "grayscale(100%)";
            (e.currentTarget as HTMLImageElement).style.opacity = "0.65";
            (e.currentTarget as HTMLImageElement).style.transform =
              partner.scale ? `scale(${partner.scale})` : "";
          }}
        />
      </motion.div>
    ))}
  </div>
</motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-3 mt-10"
        >
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "oklch(0.88 0.005 260)" }}
          />
          <span
            className="text-[0.78rem] tracking-[0.1em] uppercase"
            style={{
              color: "oklch(0.58 0.015 260)",
              fontFamily: "'JetBrains Mono', monospace",
            }}
          >
            Enterprise-grade deployments across global markets
          </span>
          <div
            className="h-px flex-1 max-w-[120px]"
            style={{ background: "oklch(0.88 0.005 260)" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
