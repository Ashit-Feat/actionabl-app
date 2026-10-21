/* Actionabl Problem Section — Architectural Minimalism
   Two-column layout: text left, fragmentation diagram right
   Scroll-triggered reveal animations */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import problemVisual from "/assets/hero/problem-visual.webp";

const PROBLEM_IMAGE = problemVisual;

const problems = [
  { label: "RPA automates isolated tasks" },
  { label: "AI tools operate without proper human oversight and control" },
  { label: "AI frameworks create technical debt when solutions cannot adapt to newer models" },
  { label: "Automation solutions limit business ownership and reduce operational control" },
  { label: "Systems and data remain disconnected" },
  { label: "Observability, governance, resilience, and auditability are limited" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

export default function ProblemSection() {
  const { ref, visible } = useReveal();
  const accentRose = "#fd267d";
  const accentPeach = "#ffc1ab";
  const accentOrange = "#ff7854";

  return (
    <section id="problem" className="py-24 lg:py-36" style={{ background: 'linear-gradient(180deg, white 0%, oklch(0.985 0.003 264 / 0.4) 100%)' }}>
      <div className="container" ref={ref}>
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-3 mb-16"
      >
          <div className="w-[3px] h-5 rounded-full" style={{ background: accentRose }} />
          <span className="label-mono" style={{ color: accentRose }}>The Problem</span>
          <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(253,38,125,0.18)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold text-[oklch(0.18_0.03_260)] leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              The Problem with Today's Automation
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-[oklch(0.45_0.015_260)] leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}
            >
              Most organizations have invested in automation tools, AI frameworks and models, and digital systems. But these efforts often evolve independently, creating fragmented and fragile workflows.
            </motion.p>

            {/* Problem list */}
            <div className="space-y-3 mb-8">
              {problems.map((problem, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  animate={visible ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.07 }}
                  className="flex items-start gap-3 group"
                >
                  <div
                    className="mt-1.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-200"
                    style={{ border: `1.5px solid ${accentRose}` }}
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "linear-gradient(135deg, #ff7854 0%, #fd267d 100%)" }}
                    />
                  </div>
                  <span
                    className="text-sm text-[oklch(0.45_0.015_260)] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {problem.label}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-sm text-[oklch(0.45_0.015_260)] leading-relaxed border-l-2 pl-4 italic"
              style={{ borderColor: accentRose, fontFamily: "'DM Sans', sans-serif" }}
            >
              As complexity grows, it becomes increasingly difficult for business users to manage fragmented processes effectively and maintain control. It also creates challenges for technical teams, who must continuously rework processes as technologies evolve.
            </motion.blockquote>
          </div>

          {/* Right: Visual */}
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative rounded-2xl overflow-hidden border border-[oklch(0.91_0.008_260)] shadow-xl shadow-[oklch(0.18_0.03_260)/0.05]"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,1) 0%, rgba(255,241,237,0.92) 30%, rgba(255,249,245,0.96) 58%, rgba(255,236,243,0.92) 100%)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: `
                    radial-gradient(circle at 18% 82%, rgba(255, 120, 84, 0.12) 0%, rgba(255, 120, 84, 0) 32%),
                    radial-gradient(circle at 84% 20%, rgba(253, 38, 125, 0.10) 0%, rgba(253, 38, 125, 0) 36%),
                    radial-gradient(circle at 56% 12%, rgba(249, 131, 219, 0.08) 0%, rgba(249, 131, 219, 0) 28%)
                  `,
                }}
              />
              <img
                src={PROBLEM_IMAGE}
                alt="Fragmented automation systems"
                className="relative z-10 w-full h-auto"
                style={{ opacity: 0.94, mixBlendMode: "multiply" }}
              />
            </motion.div>

            {/* AI risk callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-xl border border-[oklch(0.91_0.008_260)] bg-white p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-lg border border-[oklch(0.91_0.008_260)] flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(180deg, rgba(255,245,247,1) 0%, rgba(255,239,243,0.9) 100%)" }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M7 2L13 12H1L7 2Z" stroke={accentRose} strokeWidth="1.2" strokeLinejoin="round"/>
                    <path d="M7 5.5v3M7 10v.5" stroke={accentRose} strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h4
                    className="text-sm font-bold text-[oklch(0.18_0.03_260)] mb-1"
                    style={{ fontFamily: "'Syne', sans-serif" }}
                  >
                    AI Adds Intelligence — But Not Control
                  </h4>
                  <p
                    className="text-xs text-[oklch(0.55_0.015_260)] leading-relaxed"
                    style={{ fontFamily: "'DM Sans', sans-serif" }}
                  >
                    AI agents operate probabilistically. Outcomes can vary, errors can propagate, and behavior is difficult to predict and govern. Relying on AI alone to run business workflows introduces risk, inconsistency, and compliance challenges.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* What's missing callout */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="rounded-xl p-5"
              style={{
                background: "linear-gradient(135deg, #ff9f84 0%, #ff6b8f 68%, #f3a0dc 100%)",
                boxShadow: "0 10px 28px rgba(253, 38, 125, 0.12)",
              }}
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-1 h-full min-h-[2rem] rounded-full flex-shrink-0" style={{ background: 'oklch(1 0 0 / 0.52)' }} />
                <p
                  className="text-sm text-white leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif" }}
                >
                  What's missing is a layer that brings{" "}
                  <span className="font-semibold" style={{ color: 'oklch(1 0 0 / 0.90)' }}>control, coordination, and reliability</span>{" "}
                  to these processes.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
