/* Actionabl Platform / Solution Section — Clean Light Aesthetic
   Design philosophy:
   - Background: white / very light gray
   - Accent: oklch(0.62 0.14 175) — electric indigo
   - Part 1: left text + right architecture.layers diagram (sticky)
   - Part 2: right text + left bounded-scope diagram (mirrors Part 1)
   - Part 3: Core Principle strip
*/

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SOLUTION_COLORS = {
  orchestration: {
    strong: "oklch(0.69 0.12 175)",
    strongBorder: "oklch(0.58 0.11 175)",
    soft: "oklch(0.95 0.035 175 / 0.5)",
    softSolid: "oklch(0.95 0.035 175)",
    softBorder: "oklch(0.79 0.09 175 / 0.5)",
    text: "oklch(0.54 0.11 175)",
    glow: "0 0 10px oklch(0.69 0.12 175 / 0.45)",
  },
  agents: {
    accent: "#ff7854",
    text: "#d9485f",
    soft: "rgba(255, 239, 235, 0.95)",
    softSolid: "rgba(255, 244, 241, 1)",
    softBorder: "rgba(255, 120, 84, 0.34)",
    glow: "0 0 10px rgba(255, 120, 84, 0.45)",
  },
  systems: {
    accent: "#4877ff",
    text: "#4f63d7",
    soft: "rgba(239, 244, 255, 0.96)",
    softSolid: "rgba(245, 248, 255, 1)",
    softBorder: "rgba(72, 119, 255, 0.28)",
    glow: "0 0 10px rgba(72, 119, 255, 0.35)",
  },
} as const;

const ARCH_STATUS_COLORS = [
  SOLUTION_COLORS.agents.accent,
  SOLUTION_COLORS.agents.accent,
  SOLUTION_COLORS.systems.accent,
  SOLUTION_COLORS.systems.accent,
] as const;

/* ─── Shared reveal hook ───────────────────────────────────────────────────── */
function useReveal(threshold = 0.04) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ─── Small SVG icons ──────────────────────────────────────────────────────── */
const AgentsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="2.5" stroke={SOLUTION_COLORS.agents.accent} strokeWidth="1.2"/>
    <path d="M7.5 1v2M7.5 12v2M1 7.5h2M12 7.5h2M3 3l1.4 1.4M10.6 10.6l1.4 1.4M3 12l1.4-1.4M10.6 4.4l1.4-1.4" stroke={SOLUTION_COLORS.agents.accent} strokeWidth="1" strokeLinecap="round"/>
  </svg>
);
const OrchIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <circle cx="7.5" cy="7.5" r="3" stroke="white" strokeWidth="1.3"/>
    <circle cx="7.5" cy="7.5" r="1.2" fill="white"/>
    <path d="M7.5 1v2M7.5 12v2M1 7.5h2M12 7.5h2" stroke="white" strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);
const SystemsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <rect x="1.5" y="2.5" width="12" height="3" rx="1" stroke={SOLUTION_COLORS.systems.accent} strokeWidth="1.1"/>
    <rect x="1.5" y="7" width="12" height="3" rx="1" stroke={SOLUTION_COLORS.systems.accent} strokeWidth="1.1"/>
    <circle cx="11.5" cy="4" r="0.8" fill={SOLUTION_COLORS.systems.accent}/>
    <circle cx="11.5" cy="8.5" r="0.8" fill={SOLUTION_COLORS.systems.accent}/>
    <path d="M1.5 12h12" stroke={SOLUTION_COLORS.systems.accent} strokeWidth="1.1" strokeLinecap="round"/>
  </svg>
);

/* ─── Architecture Diagram (Part 1) ───────────────────────────────────────── */
function ArchitectureDiagram() {
  const [step, setStep] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setStep(s => (s + 1) % 4), 1800);
    return () => clearInterval(t);
  }, []);

  const topActive = step === 0 || step === 1;
  const topDown = step === 0;
  const bottomActive = step === 2 || step === 3;
  const bottomDown = step === 2;
  const statusLabels = ["Orchestration → AI Agents", "AI Agents → Orchestration", "Orchestration → Systems", "Systems → Orchestration"];

  return (
    <div className="rounded-2xl overflow-hidden" style={{
      border: "1px solid oklch(0.88 0.008 260)",
      boxShadow: "0 8px 40px oklch(0.18 0.03 260 / 0.08), 0 2px 8px oklch(0.18 0.03 260 / 0.04)",
      background: "white",
    }}>
      {/* Chrome */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{
        background: "oklch(0.97 0.003 260)",
        borderBottom: "1px solid oklch(0.91 0.008 260)",
      }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="label-mono text-[10px]" style={{ color: "oklch(0.55 0.01 260)", letterSpacing: "0.12em" }}>architecture.layers</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.62 0.14 175)" }} />
          <span className="label-mono text-[10px]" style={{ color: "oklch(0.62 0.14 175)" }}>LIVE</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-5 space-y-0" style={{ background: "oklch(0.985 0.006 175 / 0.5)" }}>
        {/* Layer 1 */}
        <motion.div
          animate={topActive
            ? { boxShadow: `0 0 0 1.5px ${SOLUTION_COLORS.agents.softBorder}, 0 4px 20px rgba(255, 120, 84, 0.12)` }
            : { boxShadow: "0 0 0 0px transparent" }
          }
          transition={{ duration: 0.4 }}
          className="rounded-xl p-4"
          style={{
            background: topActive ? SOLUTION_COLORS.agents.soft : "white",
            border: `1px solid ${topActive ? SOLUTION_COLORS.agents.softBorder : "oklch(0.91 0.008 260)"}`,
            transition: "background 0.4s, border-color 0.4s",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{
              background: topActive ? SOLUTION_COLORS.agents.softSolid : "oklch(0.96 0.005 90)",
              border: `1px solid ${topActive ? SOLUTION_COLORS.agents.softBorder : "oklch(0.91 0.008 260)"}`,
            }}><AgentsIcon /></div>
            <span className="text-[13px] font-semibold" style={{ color: topActive ? SOLUTION_COLORS.agents.text : "oklch(0.35 0.03 260)", fontFamily: "'Syne', sans-serif" }}>AI Agents &amp; Automation</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["AI Agent", "RPA Bot", "OCR", "API Call", "Script"].map(c => (
              <span key={c} className="text-[10px] px-2 py-0.5 rounded-md" style={{
                color: topActive ? SOLUTION_COLORS.agents.text : "oklch(0.55 0.015 260)",
                border: `1px solid ${topActive ? SOLUTION_COLORS.agents.softBorder : "oklch(0.88 0.008 260)"}`,
                background: topActive ? "rgba(255, 245, 242, 0.9)" : "oklch(0.97 0.002 90)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{c}</span>
            ))}
          </div>
        </motion.div>

        {/* Connector top */}
        <div className="relative flex items-center justify-center h-10">
          <div className="absolute" style={{ left: "50%", top: 0, bottom: 0, width: "1px", transform: "translateX(-50%)", background: "oklch(0.88 0.008 260)" }} />
          {topActive && (
            <motion.div
              key={`top-${step}`}
              className="absolute rounded-full z-10"
              style={{ width: 8, height: 8, left: "50%", transform: "translateX(-50%)", background: SOLUTION_COLORS.agents.accent, boxShadow: SOLUTION_COLORS.agents.glow }}
              initial={{ top: topDown ? "0%" : "100%" }}
              animate={{ top: topDown ? "100%" : "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
          <div className="flex flex-col items-center gap-0.5 z-10 relative">
            <svg width="7" height="4" viewBox="0 0 7 4" fill="none"><path d="M0 4L3.5 0 7 4" fill="oklch(0.75 0.008 260)" /></svg>
            <svg width="7" height="4" viewBox="0 0 7 4" fill="none"><path d="M0 0L3.5 4 7 0" fill="oklch(0.75 0.008 260)" /></svg>
          </div>
        </div>

        {/* Layer 2 — Orchestration */}
        <div className="rounded-xl p-4" style={{
          background: SOLUTION_COLORS.orchestration.strong,
          border: `1px solid ${SOLUTION_COLORS.orchestration.strongBorder}`,
          boxShadow: "0 4px 24px oklch(0.69 0.12 175 / 0.18), 0 1px 4px oklch(0.69 0.12 175 / 0.10)",
        }}>
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{
              background: SOLUTION_COLORS.orchestration.strongBorder,
              border: `1px solid ${SOLUTION_COLORS.orchestration.softBorder}`,
            }}><OrchIcon /></div>
            <span className="text-[13px] font-bold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>Orchestration Layer</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["Route", "Validate", "Audit", "Control", "Intervene"].map(c => (
              <span key={c} className="text-[10px] px-2 py-0.5 rounded-md" style={{
                color: "white",
                border: "1px solid oklch(1 0 0 / 0.3)",
                background: "oklch(1 0 0 / 0.12)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{c}</span>
            ))}
          </div>
        </div>

        {/* Connector bottom */}
        <div className="relative flex items-center justify-center h-10">
          <div className="absolute" style={{ left: "50%", top: 0, bottom: 0, width: "1px", transform: "translateX(-50%)", background: "oklch(0.88 0.008 260)" }} />
          {bottomActive && (
            <motion.div
              key={`bot-${step}`}
              className="absolute rounded-full z-10"
              style={{ width: 8, height: 8, left: "50%", transform: "translateX(-50%)", background: SOLUTION_COLORS.systems.accent, boxShadow: SOLUTION_COLORS.systems.glow }}
              initial={{ top: bottomDown ? "0%" : "100%" }}
              animate={{ top: bottomDown ? "100%" : "0%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          )}
          <div className="flex flex-col items-center gap-0.5 z-10 relative">
            <svg width="7" height="4" viewBox="0 0 7 4" fill="none"><path d="M0 4L3.5 0 7 4" fill="oklch(0.75 0.008 260)" /></svg>
            <svg width="7" height="4" viewBox="0 0 7 4" fill="none"><path d="M0 0L3.5 4 7 0" fill="oklch(0.75 0.008 260)" /></svg>
          </div>
        </div>

        {/* Layer 3 */}
        <motion.div
          animate={bottomActive
            ? { boxShadow: `0 0 0 1.5px ${SOLUTION_COLORS.systems.softBorder}, 0 4px 16px rgba(72, 119, 255, 0.08)` }
            : { boxShadow: "0 0 0 0px transparent" }
          }
          transition={{ duration: 0.4 }}
          className="rounded-xl p-4"
          style={{
            background: bottomActive ? SOLUTION_COLORS.systems.soft : "white",
            border: `1px solid ${bottomActive ? SOLUTION_COLORS.systems.softBorder : "oklch(0.91 0.008 260)"}`,
            transition: "background 0.4s, border-color 0.4s",
          }}
        >
          <div className="flex items-center gap-2.5 mb-3">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{
              background: bottomActive ? SOLUTION_COLORS.systems.softSolid : "oklch(0.96 0.005 90)",
              border: `1px solid ${bottomActive ? SOLUTION_COLORS.systems.softBorder : "oklch(0.91 0.008 260)"}`,
            }}><SystemsIcon /></div>
            <span className="text-[13px] font-semibold" style={{ color: bottomActive ? SOLUTION_COLORS.systems.text : "oklch(0.45 0.015 260)", fontFamily: "'Syne', sans-serif" }}>Business Systems &amp; Data</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {["CRM", "ERP", "Database", "Data Lake", "Services"].map(c => (
              <span key={c} className="text-[10px] px-2 py-0.5 rounded-md" style={{
                color: bottomActive ? SOLUTION_COLORS.systems.text : "oklch(0.55 0.015 260)",
                border: `1px solid ${bottomActive ? SOLUTION_COLORS.systems.softBorder : "oklch(0.88 0.008 260)"}`,
                background: bottomActive ? "rgba(245, 248, 255, 0.92)" : "oklch(0.97 0.002 90)",
                fontFamily: "'JetBrains Mono', monospace",
              }}>{c}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex items-center justify-between" style={{
        background: "oklch(0.97 0.003 260)",
        borderTop: "1px solid oklch(0.91 0.008 260)",
      }}>
        <div className="flex items-center gap-2">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 4.5l2.5 2.5L8 1.5" stroke="oklch(0.62 0.14 175)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[11px]" style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'DM Sans', sans-serif" }}>All layers coordinated</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={step}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="label-mono text-[9px]"
            style={{ color: ARCH_STATUS_COLORS[step] }}
          >
            {statusLabels[step]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Bounded Scope Diagram (Part 2) ──────────────────────────────────────── */
function BoundedScopeDiagram() {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [
    { id: 0, label: "Orchestration Layer", sub: "Governs workflow, decisions, data flow", color: SOLUTION_COLORS.orchestration.strong, border: SOLUTION_COLORS.orchestration.softBorder, bg: SOLUTION_COLORS.orchestration.soft, textColor: SOLUTION_COLORS.orchestration.text, subColor: "oklch(0.56 0.03 175)", dotBg: SOLUTION_COLORS.orchestration.softSolid, stepColor: SOLUTION_COLORS.orchestration.text, glow: "0 0 0 1.5px oklch(0.79 0.09 175 / 0.45), 0 4px 16px oklch(0.69 0.12 175 / 0.10)" },
    { id: 1, label: "AI Agent / Automation", sub: "Executes bounded, defined task", color: SOLUTION_COLORS.agents.accent, border: SOLUTION_COLORS.agents.softBorder, bg: SOLUTION_COLORS.agents.soft, textColor: SOLUTION_COLORS.agents.text, subColor: "oklch(0.55 0.015 260)", dotBg: SOLUTION_COLORS.agents.softSolid, stepColor: SOLUTION_COLORS.agents.accent, glow: "0 0 0 1.5px rgba(255, 120, 84, 0.22), 0 4px 16px rgba(255, 120, 84, 0.08)" },
    { id: 2, label: "Output Validation", sub: "Orchestration checks result before proceeding", color: "#b167ff", border: "rgba(177, 103, 255, 0.24)", bg: "rgba(248, 242, 255, 0.96)", textColor: "#8a54d6", subColor: "oklch(0.55 0.015 260)", dotBg: "rgba(248, 242, 255, 1)", stepColor: "#b167ff", glow: "0 0 0 1.5px rgba(177, 103, 255, 0.2), 0 4px 16px rgba(177, 103, 255, 0.08)" },
    { id: 3, label: "Next Step", sub: "Process continues — deterministic, compliant", color: SOLUTION_COLORS.systems.accent, border: SOLUTION_COLORS.systems.softBorder, bg: SOLUTION_COLORS.systems.soft, textColor: SOLUTION_COLORS.systems.text, subColor: "oklch(0.55 0.015 260)", dotBg: SOLUTION_COLORS.systems.softSolid, stepColor: SOLUTION_COLORS.systems.accent, glow: "0 0 0 1.5px rgba(72, 119, 255, 0.18), 0 4px 16px rgba(72, 119, 255, 0.06)" },
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 2000);
    return () => clearInterval(t);
  }, []);

  const statusLabels = [
    "Orchestration dispatches task",
    "AI Agent executing within scope",
    "Validating output…",
    "Process advancing — controlled",
  ];
  const statusColors = [
    SOLUTION_COLORS.orchestration.text,
    SOLUTION_COLORS.agents.accent,
    "#b167ff",
    SOLUTION_COLORS.systems.accent,
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={{
      border: "1px solid oklch(0.88 0.008 260)",
      boxShadow: "0 8px 40px oklch(0.18 0.03 260 / 0.08), 0 2px 8px oklch(0.18 0.03 260 / 0.04)",
      background: "white",
    }}>
      {/* Chrome */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{
        background: "oklch(0.97 0.003 260)",
        borderBottom: "1px solid oklch(0.91 0.008 260)",
      }}>
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff5f57" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#febc2e" }} />
          <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
        </div>
        <span className="label-mono text-[10px]" style={{ color: "oklch(0.55 0.01 260)", letterSpacing: "0.12em" }}>bounded.execution</span>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "oklch(0.62 0.14 175)" }} />
          <span className="label-mono text-[10px]" style={{ color: "oklch(0.62 0.14 175)" }}>LIVE</span>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 py-5" style={{ background: "oklch(0.985 0.006 175 / 0.5)" }}>
        <div className="space-y-0">
          {steps.map((step, i) => {
            const isActive = activeStep === i;
            const isPast = activeStep > i;
            return (
              <div key={step.id}>
                {/* Step card */}
                <motion.div
                  animate={isActive ? { boxShadow: step.glow } : { boxShadow: "0 0 0 0px transparent" }}
                  transition={{ duration: 0.4 }}
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{
                    background: isActive ? step.bg : "white",
                    border: `1px solid ${isActive ? step.border : "oklch(0.91 0.008 260)"}`,
                    transition: "background 0.4s, border-color 0.4s",
                    opacity: isPast ? 0.5 : 1,
                  }}
                >
                  {/* Status dot */}
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: isActive ? step.dotBg : "oklch(0.96 0.005 90)",
                      border: `1.5px solid ${isActive ? step.border : "oklch(0.88 0.008 260)"}`,
                    }}
                  >
                    {isPast ? (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1.5 5l2.5 2.5 4.5-4.5" stroke={step.color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : isActive ? (
                      <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: step.color }} />
                    ) : (
                      <div className="w-2 h-2 rounded-full" style={{ background: "oklch(0.80 0.008 260)" }} />
                    )}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-[13px] font-semibold leading-snug"
                      style={{
                        color: isActive ? step.textColor : "oklch(0.45 0.015 260)",
                        fontFamily: "'Syne', sans-serif",
                      }}
                    >
                      {step.label}
                    </div>
                    <div
                      className="text-[11px] mt-0.5 leading-snug"
                      style={{
                        color: isActive ? step.subColor : "oklch(0.65 0.01 260)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {step.sub}
                    </div>
                  </div>

                  {/* Step number */}
                  <span
                    className="label-mono text-[9px] flex-shrink-0"
                    style={{ color: isActive ? step.stepColor : "oklch(0.70 0.01 260)" }}
                  >
                    0{i + 1}
                  </span>
                </motion.div>

                {/* Connector between steps */}
                {i < steps.length - 1 && (
                  <div className="relative flex items-center justify-center h-7">
                    <div className="absolute" style={{ left: "50%", top: 0, bottom: 0, width: "1px", transform: "translateX(-50%)", background: "oklch(0.88 0.008 260)" }} />
                    {activeStep === i && (
                      <motion.div
                        key={`conn-${i}-${activeStep}`}
                        className="absolute rounded-full z-10"
                        style={{ width: 6, height: 6, left: "50%", transform: "translateX(-50%)", background: step.color, boxShadow: `0 0 8px ${step.color}` }}
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{ duration: 1.8, ease: "easeInOut" }}
                      />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-5 py-3 flex items-center justify-between" style={{
        background: "oklch(0.97 0.003 260)",
        borderTop: "1px solid oklch(0.91 0.008 260)",
      }}>
        <div className="flex items-center gap-2">
          <svg width="9" height="9" viewBox="0 0 9 9" fill="none"><path d="M1 4.5l2.5 2.5L8 1.5" stroke="oklch(0.62 0.14 175)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="text-[11px]" style={{ color: "oklch(0.55 0.01 260)", fontFamily: "'DM Sans', sans-serif" }}>Deterministic. Bounded. Validated.</span>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeStep}
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.25 }}
            className="label-mono text-[9px]"
            style={{ color: statusColors[activeStep] }}
          >
            {statusLabels[activeStep]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ─── Checklist items ──────────────────────────────────────────────────────── */
const orchestrationDoes = [
  "Defines process flow — who does what, when, and under what conditions",
  "Routes data across systems, tasks, and participants",
  "Embeds AI and automation within controlled, bounded steps",
  "Validates outputs before progressing to the next stage",
  "Detects exceptions and dynamically creates intervention points",
  "Enables human oversight where judgment, validation, or approvals are required",
  "Future-proofs workflows through modular orchestration",
];

/* ─── Main Section ─────────────────────────────────────────────────────────── */
export default function PlatformSection() {
  const { ref: r1, visible: v1 } = useReveal();
  const { ref: r2, visible: v2 } = useReveal();
  const { ref: r3, visible: v3 } = useReveal();

  return (
    <section id="platform" style={{ background: "white" }}>

      {/* ══════════════════════════════════════════════════════════════
          PART 1 — Solution intro + Architecture diagram (left text, right diagram)
      ══════════════════════════════════════════════════════════════ */}
      <div className="py-28 lg:py-40" style={{ borderBottom: "1px solid oklch(0.93 0.005 260)" }}>
        <div className="container" ref={r1}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">

            {/* Left: Text */}
            <div>
              <motion.div initial={{ opacity: 0, y: 10 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="flex items-center gap-3 mb-10">
                <div className="w-[3px] h-5 rounded-full" style={{ background: "#159f95" }} />
                <span className="label-mono text-[10px]" style={{ color: "#159f95", letterSpacing: "0.14em" }}>The Solution</span>
                <div className="h-px flex-1 max-w-12" style={{ background: "rgba(21,159,149,0.18)" }} />
              </motion.div>

              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }} className="text-[2.4rem] lg:text-[2.8rem] font-bold text-[oklch(0.12_0.03_260)] leading-[1.12] tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                A Business Orchestration Layer for Controlled, End-to-End Operations
              </motion.h2>

              <motion.p initial={{ opacity: 0, y: 14 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.16 }} className="text-[15px] leading-[1.75] mb-10" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                Actionabl brings structure, control, and coordination to business processes through a unified orchestration layer. It manages how work flows across people, systems, automations, and AI — ensuring every step is controlled, observable, and reliable.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={v1 ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.22 }} className="label-mono text-[10px] mb-5" style={{ color: "#159f95", letterSpacing: "0.12em" }}>
                What the Orchestration Layer Does
              </motion.div>

              <div className="space-y-3">
                {orchestrationDoes.map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={v1 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.42, delay: 0.28 + i * 0.05 }} className="flex items-start gap-3">
                    <div className="mt-[4px] w-[13px] h-[13px] rounded-[3px] flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.94 0.04 175)", border: "1px solid oklch(0.75 0.10 175 / 0.5)" }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1 3.5l1.8 1.8 3-3" stroke="oklch(0.62 0.14 175)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-[13.5px] leading-[1.65]" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right: Architecture diagram */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={v1 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }} className="lg:sticky lg:top-24">
              <ArchitectureDiagram />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 2 — AI & Automation Within Controlled Workflows
          (mirrors Part 1: diagram on LEFT, text on RIGHT)
      ══════════════════════════════════════════════════════════════ */}
      <div className="py-28 lg:py-40" style={{ borderBottom: "1px solid oklch(0.93 0.005 260)", background: "oklch(0.985 0.006 175 / 0.3)" }} ref={r2}>
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">

            {/* Left: Bounded scope diagram */}
            <motion.div initial={{ opacity: 0, y: 16 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay: 0.12 }} className="lg:sticky lg:top-24 order-2 lg:order-1">
              <BoundedScopeDiagram />
            </motion.div>

            {/* Right: Text */}
            <div className="order-1 lg:order-2">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.45 }} className="flex items-center gap-3 mb-10">
                <div className="w-[3px] h-5 rounded-full" style={{ background: "#159f95" }} />
                <span className="label-mono text-[10px]" style={{ color: "#159f95", letterSpacing: "0.14em" }}>Bounded Execution</span>
                <div className="h-px flex-1 max-w-12" style={{ background: "rgba(21,159,149,0.18)" }} />
              </motion.div>

              <motion.h2 initial={{ opacity: 0, y: 24 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.65, delay: 0.08 }} className="text-[2.4rem] lg:text-[2.8rem] font-bold text-[oklch(0.12_0.03_260)] leading-[1.12] tracking-tight mb-6" style={{ fontFamily: "'Syne', sans-serif" }}>
                AI &amp; Automation Within Controlled Workflows
              </motion.h2>

              <motion.div initial={{ opacity: 0, y: 14 }} animate={v2 ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.16 }} className="space-y-4 mb-10">
                <p className="text-[15px] leading-[1.75]" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                  AI agents and automation tools execute specific tasks within the process. They do not control the workflow.
                </p>
                <p className="text-[15px] leading-[1.75]" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                  AI operates probabilistically — outcomes can vary and errors can propagate across steps. Business processes, however, require deterministic control, consistency, and auditability.
                </p>
                <p className="text-[15px] leading-[1.75]" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif", fontWeight: 400 }}>
                  This ensures processes remain predictable, controlled, and compliant while still benefiting from AI-driven and automation capabilities.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={v2 ? { opacity: 1 } : {}} transition={{ duration: 0.4, delay: 0.22 }} className="label-mono text-[10px] mb-5" style={{ color: "#159f95", letterSpacing: "0.12em" }}>
                Actionabl separates these concerns
              </motion.div>

              <div className="space-y-3">
                {[
                  "The orchestration layer governs the workflow, decisions, and data flow",
                  "AI agents and automation tools execute clearly defined tasks within bounded scope",
                  "Outputs are validated before moving forward in the process",
                ].map((item, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: 10 }} animate={v2 ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.42, delay: 0.28 + i * 0.06 }} className="flex items-start gap-3">
                    <div className="mt-[4px] w-[13px] h-[13px] rounded-[3px] flex items-center justify-center flex-shrink-0" style={{ background: "oklch(0.94 0.04 175)", border: "1px solid oklch(0.75 0.10 175 / 0.5)" }}>
                      <svg width="7" height="7" viewBox="0 0 7 7" fill="none"><path d="M1 3.5l1.8 1.8 3-3" stroke="oklch(0.62 0.14 175)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span className="text-[13.5px] leading-[1.65]" style={{ color: "oklch(0.45 0.015 260)", fontFamily: "'DM Sans', sans-serif" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════════
          PART 3 — Core Principle strip
      ══════════════════════════════════════════════════════════════ */}
      <div className="py-16 lg:py-20" ref={r3}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={v3 ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #12161c 0%, #171c24 52%, #1b2028 100%)",
              boxShadow: "0 12px 28px rgba(18, 22, 28, 0.12), 0 2px 8px rgba(18, 22, 28, 0.08)",
            }}
          >
            <div className="grid lg:grid-cols-[1fr_1px_1fr]">
              <div className="px-10 py-10">
                <div className="label-mono text-[10px] mb-4" style={{ color: "rgba(255,255,255,0.7)", letterSpacing: "0.12em" }}>Core Principle</div>
                <h3 className="text-[1.65rem] lg:text-[1.9rem] font-bold text-white leading-[1.2] tracking-tight" style={{ fontFamily: "'Syne', sans-serif" }}>
                  Business processes remain deterministic.{" "}
                  <span style={{ color: "rgba(218, 224, 235, 0.88)" }}>AI and automation remain bounded.</span>
                </h3>
              </div>
              <div style={{ background: "rgba(255,255,255,0.10)" }} />
              <div className="px-10 py-10 flex items-center">
                <p className="text-[14px] leading-[1.75]" style={{ color: "rgba(255,255,255,0.84)", fontFamily: "'DM Sans', sans-serif" }}>
                  Actionabl bridges deterministic business processes with probabilistic AI and automation tools. The orchestration layer governs the workflow. AI agents and automation tools execute within clearly defined, bounded scope. Every output is validated before moving forward.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
