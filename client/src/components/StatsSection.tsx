/* Actionabl Stats/Proof Section — Architectural Minimalism
   Key differentiating stats and trust signals
   Light background with strong typographic numbers */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "End-to-End",
    label: "Process Orchestration",
    description: "Coordinate full journeys across people, systems, AI, and automations in a single layer.",
    accent: "#1fbfda",
  },
  {
    value: "Zero Lock-in",
    label: "Open Architecture",
    description: "Swap AI models, automation tools, and integrations without redesigning workflows.",
    accent: "#ff7854",
  },
  {
    value: "Built-in",
    label: "Human Oversight",
    description: "Embed human-in-the-loop at every step where judgment, approvals, or validation are needed.",
    accent: "#a461ff",
  },
  {
    value: "Dynamic",
    label: "Exception Handling",
    description: "Detect failures, create intervention points, and recover without breaking the overall process.",
    accent: "#159f95",
  },
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

export default function StatsSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-16 border-y border-[oklch(0.91_0.008_260)]" style={{ background: 'oklch(0.985 0.003 264 / 0.3)' }}>
      <div className="container" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[oklch(0.91_0.008_260)]">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="lg:px-8 first:pl-0 last:pr-0"
            >
              <div
                className="text-2xl font-bold mb-1 tracking-tight"
                style={{color:'#111111', fontFamily: "'Syne', sans-serif"}}
              >
                {stat.value}
              </div>
              <div
                className="text-sm font-semibold mb-2"
                style={{ color: stat.accent, fontFamily: "'Syne', sans-serif" }}
              >
                {stat.label}
              </div>
              <p
                className="text-xs text-[oklch(0.55_0.015_260)] leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
