/* Actionabl Differentiators Section — Pastel Gradient Cards with Blob Icons
   "What Makes Us Different" — 2x2 grid with large pastel cards */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Network, RefreshCw, Puzzle, Users } from "lucide-react";

const DIFF_COLORS = [
  { bg: "linear-gradient(145deg, rgba(245,253,255,1) 0%, rgba(222,247,252,0.96) 58%, rgba(195,243,237,0.9) 100%)", iconBg: "rgba(49,228,250,0.14)", iconColor: "#1fbfda", tagBg: "rgba(49,228,250,0.12)", tagColor: "#1b95b4", borderColor: "rgba(49,228,250,0.16)" },
  { bg: "linear-gradient(145deg, rgba(248,255,251,1) 0%, rgba(223,251,240,0.96) 58%, rgba(198,245,226,0.9) 100%)", iconBg: "rgba(21,159,149,0.14)", iconColor: "#159f95", tagBg: "rgba(21,159,149,0.12)", tagColor: "#137e78", borderColor: "rgba(21,159,149,0.16)" },
  { bg: "linear-gradient(145deg, rgba(255,250,245,1) 0%, rgba(255,236,214,0.96) 58%, rgba(255,225,186,0.9) 100%)", iconBg: "rgba(255,120,84,0.14)", iconColor: "#ff7854", tagBg: "rgba(255,120,84,0.12)", tagColor: "#d86445", borderColor: "rgba(255,120,84,0.16)" },
  { bg: "linear-gradient(145deg, rgba(252,247,255,1) 0%, rgba(241,228,255,0.96) 58%, rgba(232,213,255,0.9) 100%)", iconBg: "rgba(215,117,255,0.14)", iconColor: "#a461ff", tagBg: "rgba(164,97,255,0.12)", tagColor: "#8b4fe0", borderColor: "rgba(164,97,255,0.16)" },
];

const differentiators = [
  { icon: Network,   title: "End-to-End Orchestration", description: "Actionabl orchestrates full journeys involving customers, vendors, business users, AI, automations, and systems. AI agents and automation tools execute specific tasks within a defined scope, while the orchestration layer coordinates and remains in control of the workflow.", tag: "Full Journey Control" },
  { icon: RefreshCw, title: "Built for Resilience",      description: "Real-world processes do not follow perfect paths. Actionabl is designed to handle exceptions, failures, and variability through dynamic intervention points, validation steps, and recovery mechanisms. Failures are contained and managed without breaking the overall process.", tag: "Exception Handling" },
  { icon: Puzzle,    title: "Open and Modular",          description: "Every component in Actionabl is designed to be replaceable. AI models, automation tools, and integrations can be swapped or upgraded without redesigning the entire workflow. This enables a best-of-breed approach and avoids long-term lock-in.", tag: "Vendor Agnostic" },
  { icon: Users,     title: "Human Oversight by Design", description: "Automation is not left unchecked. Actionabl embeds human-in-the-loop capabilities where judgment, validation, approvals, or exception handling are required. Users have full visibility and control to intervene, guide, and optimize processes in real time.", tag: "Human-in-the-Loop" },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return { ref, visible };
}

function BlobIcon({ color, Icon, iconColor }: { color: string; Icon: React.ElementType; iconColor: string }) {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
        <path d="M42 5 C60 5, 75 20, 75 38 C75 58, 60 75, 40 75 C20 75, 5 60, 5 40 C5 20, 24 5, 42 5Z" fill={color} />
      </svg>
      <Icon size={24} style={{ color: iconColor, position: 'relative', zIndex: 1 }} />
    </div>
  );
}

export default function DifferentiatorsSection() {
  const { ref, visible } = useReveal();

  return (
    <section id="why" className="py-24 lg:py-36" style={{ background: 'linear-gradient(180deg, white 0%, rgba(240,253,250,0.4) 100%)' }}>
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 items-end mb-16 lg:mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-[3px] h-5 rounded-full" style={{ background: '#4f63d7' }} />
              <span className="label-mono" style={{ color: '#4f63d7' }}>Why Actionabl</span>
              <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(79,99,215,0.18)' }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
            >
              What Makes Us Different
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed lg:pl-8"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#555555', borderLeft: '1px solid rgba(0,0,0,0.10)' }}
          >
            Actionabl is not another automation tool or AI platform. It is a business orchestration layer designed to run complex operations with control, resilience, and flexibility.
          </motion.p>
        </div>

        {/* 2×2 pastel gradient cards */}
        <div className="grid md:grid-cols-2 gap-5">
          {differentiators.map((item, i) => {
            const Icon = item.icon;
            const c = DIFF_COLORS[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.09 }}
                className="relative rounded-2xl p-8 overflow-hidden cursor-default"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.borderColor}`,
                  boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                }}
                whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15,23,42,0.08)' }}
              >
                {/* Diagonal texture */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }}>
                  <defs>
                    <pattern id={`diff-diag-${i}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(15,23,42,0.14)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#diff-diag-${i})`}/>
                </svg>

                {/* Header row: blob icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <BlobIcon color={c.iconBg} Icon={Icon} iconColor={c.iconColor} />
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full mt-1"
                    style={{ background: c.tagBg, color: c.tagColor, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className="text-xl font-bold mb-3 tracking-tight leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#555555' }}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
