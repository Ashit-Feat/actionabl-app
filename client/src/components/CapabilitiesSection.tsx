/* Actionabl Capabilities Section — Pastel Gradient Cards with Blob Icons
   Each capability has its own pastel color identity, blob icon, diagonal texture */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitMerge, Bot, Brain, LayoutDashboard, Settings2, BarChart3 } from "lucide-react";

const CAP_COLORS = [
  { bg: "linear-gradient(145deg, rgba(247,253,255,1) 0%, rgba(233,248,252,0.96) 58%, rgba(214,245,250,0.9) 100%)", iconBg: "rgba(49,228,250,0.12)", iconColor: "#1aaecb", tagBg: "rgba(49,228,250,0.10)", tagColor: "#1a92ad", borderColor: "rgba(49,228,250,0.14)" },
  { bg: "linear-gradient(145deg, rgba(249,255,251,1) 0%, rgba(234,251,242,0.96) 58%, rgba(214,247,231,0.9) 100%)", iconBg: "rgba(21,159,149,0.12)", iconColor: "#159f95", tagBg: "rgba(21,159,149,0.10)", tagColor: "#147f78", borderColor: "rgba(21,159,149,0.14)" },
  { bg: "linear-gradient(145deg, rgba(252,248,255,1) 0%, rgba(244,235,255,0.96) 58%, rgba(237,223,255,0.9) 100%)", iconBg: "rgba(164,97,255,0.12)", iconColor: "#9a54f6", tagBg: "rgba(164,97,255,0.10)", tagColor: "#884ad8", borderColor: "rgba(164,97,255,0.14)" },
  { bg: "linear-gradient(145deg, rgba(255,251,246,1) 0%, rgba(255,241,225,0.96) 58%, rgba(255,232,206,0.9) 100%)", iconBg: "rgba(255,120,84,0.12)", iconColor: "#ef7648", tagBg: "rgba(255,120,84,0.10)", tagColor: "#d86445", borderColor: "rgba(255,120,84,0.14)" },
  { bg: "linear-gradient(145deg, rgba(248,251,255,1) 0%, rgba(236,244,255,0.96) 58%, rgba(220,234,255,0.9) 100%)", iconBg: "rgba(72,119,255,0.12)", iconColor: "#4877ff", tagBg: "rgba(72,119,255,0.10)", tagColor: "#4168d8", borderColor: "rgba(72,119,255,0.14)" },
  { bg: "linear-gradient(145deg, rgba(255,248,250,1) 0%, rgba(255,237,241,0.96) 58%, rgba(255,223,230,0.9) 100%)", iconBg: "rgba(253,38,125,0.12)", iconColor: "#ef4a82", tagBg: "rgba(253,38,125,0.10)", tagColor: "#d83f72", borderColor: "rgba(253,38,125,0.14)" },
];

const capabilities = [
  { icon: GitMerge,       title: "Business Orchestration",        description: "Coordinate people, systems, automations, and AI across end-to-end workflows with full visibility, control, and built-in exception handling.", tag: "Core" },
  { icon: Bot,            title: "Automation Workers",             description: "Execute specific tasks using built-in and integrated capabilities such as AI agents, RPA, OCR, APIs, and scripts within a controlled, orchestrated workflow.", tag: "Execution" },
  { icon: Brain,          title: "AI Augmentation",                description: "Embed AI into business processes for classification, extraction, summarization, and decision support within defined boundaries, validations, and control points.", tag: "Intelligence" },
  { icon: LayoutDashboard,title: "No-Code Apps & UI Designer",     description: "Build forms, workspaces, and user interfaces with visual tools that enable business and technical teams to design and run workflows collaboratively.", tag: "Builder" },
  { icon: Settings2,      title: "Business Rules & Decisioning",   description: "Externalize policies, rules, and decision logic through business-friendly, form-based configuration so processes can adapt quickly without code changes.", tag: "Configuration" },
  { icon: BarChart3,      title: "Process Analytics",              description: "Monitor, analyze, and optimize processes with real-time insights, reporting, and field-level visibility across workflows.", tag: "Insights" },
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

function BlobIcon({ color, Icon, iconColor }: { color: string; Icon: React.ElementType; iconColor: string }) {
  return (
    <div className="relative w-16 h-16 mb-5 flex items-center justify-center flex-shrink-0">
      <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
        <path d="M38 6 C54 4, 74 16, 74 36 C74 56, 58 74, 40 74 C22 74, 6 58, 6 40 C6 22, 22 8, 38 6Z" fill={color} />
      </svg>
      <Icon size={22} style={{ color: iconColor, position: 'relative', zIndex: 1 }} />
    </div>
  );
}

export default function CapabilitiesSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="capabilities"
      className="py-24 lg:py-36"
      style={{ background: "linear-gradient(180deg, rgba(240,253,250,0.5) 0%, white 100%)" }}
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-16 lg:mb-20">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-[3px] h-5 rounded-full" style={{ background: '#4f63d7' }} />
              <span className="label-mono" style={{ color: '#4f63d7' }}>Core Capabilities</span>
              <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(79,99,215,0.18)' }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-2xl"
              style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
            >
              A complete set of capabilities to design, optimize, and automate end-to-end business processes.
            </motion.h2>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            const c = CAP_COLORS[i];
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative rounded-2xl p-7 overflow-hidden cursor-default"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.borderColor}`,
                  boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                }}
                whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15,23,42,0.08)' }}
              >
                {/* Diagonal texture */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.1 }}>
                  <defs>
                    <pattern id={`cap-diag-${i}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(15,23,42,0.14)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#cap-diag-${i})`}/>
                </svg>

                {/* Blob icon */}
                <BlobIcon color={c.iconBg} Icon={Icon} iconColor={c.iconColor} />

                {/* Tag */}
                <span
                  className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-3"
                  style={{ background: c.tagBg, color: c.tagColor, fontFamily: "'DM Sans', sans-serif" }}
                >
                  {cap.tag}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 tracking-tight leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
                >
                  {cap.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#555555' }}
                >
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
