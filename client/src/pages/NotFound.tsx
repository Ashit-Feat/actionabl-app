/* Actionabl 404 Page — Architectural Minimalism
   Design: White background, indigo accent, Syne/DM Sans typography */

import { useLocation } from "wouter";
import Navbar from "@/components/Navbar";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.92 0.04 264 / 0.15) 0%, transparent 60%),
            linear-gradient(180deg, oklch(0.99 0.002 90) 0%, white 100%)
          `,
        }}
      />

      <main className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        {/* 404 number */}
        <div
          className="text-[8rem] lg:text-[12rem] font-bold leading-none tracking-tight mb-4 select-none"
          style={{
            fontFamily: "'Syne', sans-serif",
            background: "linear-gradient(135deg, oklch(0.52 0.22 264) 0%, oklch(0.40 0.26 280) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            opacity: 0.15,
          }}
        >
          404
        </div>

        {/* Content card */}
        <div
          className="relative -mt-16 lg:-mt-24 max-w-md w-full rounded-2xl p-10"
          style={{
            background: "white",
            border: "1px solid oklch(0.91 0.008 260)",
            boxShadow: "0 4px 32px oklch(0.52 0.22 264 / 0.08)",
          }}
        >
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full"
            style={{
              background: "oklch(0.94 0.04 264 / 0.6)",
              border: "1px solid oklch(0.85 0.08 264 / 0.4)",
            }}
          >
            <span
              className="text-[10px] tracking-[0.12em] uppercase"
              style={{ color: "oklch(0.52 0.22 264)", fontFamily: "'JetBrains Mono', monospace" }}
            >
              Page Not Found
            </span>
          </div>

          <h1
            className="text-3xl font-bold mb-4 tracking-tight"
            style={{ color: "oklch(0.12 0.03 260)", fontFamily: "'Syne', sans-serif" }}
          >
            Oops, this page doesn't exist
          </h1>

          <p
            className="text-sm leading-relaxed mb-8"
            style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif" }}
          >
            Sorry, the page you are looking for doesn't exist. It may have been moved or deleted.
          </p>

          <button
            onClick={() => setLocation("/")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "linear-gradient(135deg, oklch(0.52 0.22 264) 0%, oklch(0.40 0.26 280) 100%)",
              boxShadow: "0 4px 16px oklch(0.52 0.22 264 / 0.25)",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M6 1L1 7l5 6M1 7h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Home
          </button>
        </div>
      </main>
    </div>
  );
}
