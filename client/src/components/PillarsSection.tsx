/* Actionabl Pillars Section — Pastel Gradient Cards with Blob Icons
   Six pillars in a 3-column grid, each with its own pastel color identity
   Blob icon backgrounds like lens.xyz samples */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, GitBranch, Shield, Zap, Lock, Sliders } from "lucide-react";

// Per-pillar pastel color identities, tuned closer to the logo palette
const PILLAR_COLORS = [
  { bg: "linear-gradient(145deg, rgba(255,250,245,1) 0%, rgba(255,236,214,0.96) 58%, rgba(255,225,186,0.9) 100%)", iconBg: "rgba(255,120,84,0.14)", iconColor: "#ff7854", borderColor: "rgba(255,120,84,0.16)" },
  { bg: "linear-gradient(145deg, rgba(248,255,251,1) 0%, rgba(223,251,240,0.96) 58%, rgba(198,245,226,0.9) 100%)", iconBg: "rgba(21,159,149,0.14)", iconColor: "#159f95", borderColor: "rgba(21,159,149,0.16)" },
  { bg: "linear-gradient(145deg, rgba(247,250,255,1) 0%, rgba(228,239,255,0.96) 58%, rgba(208,224,255,0.9) 100%)", iconBg: "rgba(72,119,255,0.14)", iconColor: "#4877ff", borderColor: "rgba(72,119,255,0.16)" },
  { bg: "linear-gradient(145deg, rgba(252,247,255,1) 0%, rgba(241,228,255,0.96) 58%, rgba(232,213,255,0.9) 100%)", iconBg: "rgba(215,117,255,0.14)", iconColor: "#a461ff", borderColor: "rgba(164,97,255,0.16)" },
  { bg: "linear-gradient(145deg, rgba(255,247,249,1) 0%, rgba(255,228,235,0.96) 58%, rgba(255,208,221,0.9) 100%)", iconBg: "rgba(253,38,125,0.14)", iconColor: "#fd267d", borderColor: "rgba(253,38,125,0.16)" },
  { bg: "linear-gradient(145deg, rgba(245,253,255,1) 0%, rgba(222,247,252,0.96) 58%, rgba(195,243,237,0.9) 100%)", iconBg: "rgba(49,228,250,0.14)", iconColor: "#1fbfda", borderColor: "rgba(49,228,250,0.16)" },
];

const pillars = [
  { icon: Eye,       title: "Visibility",   description: "Full visibility into end-to-end processes, giving teams the insight to monitor work, identify bottlenecks, intervene when needed, and make informed decisions.", number: "01" },
  { icon: GitBranch, title: "Traceability", description: "Detailed records of actions, data, and decisions across the process, ensuring accountability, auditability, and compliance readiness.", number: "02" },
  { icon: Shield,    title: "Resilience",   description: "Built-in dynamic intervention points and recovery paths that keep processes moving when automations fail or behave unexpectedly.", number: "03" },
  { icon: Zap,       title: "Agility",      description: "Externalized, form-based, business-friendly rules, policies, and task routing that allow teams to adapt quickly to changing needs without reconfiguring the process.", number: "04" },
  { icon: Lock,      title: "Safety",       description: "Dynamic checkpoints and control gates that help manage risk, validate outcomes, and prevent issues from propagating downstream.", number: "05" },
  { icon: Sliders,   title: "Control",      description: "Clear oversight across the entire process, with the ability to pause, intervene, reroute, or optimize work at any step.", number: "06" },
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

// Blob SVG path for icon background
function BlobIcon({ color, Icon, iconColor }: { color: string; Icon: React.ElementType; iconColor: string }) {
  return (
    <div className="relative w-16 h-16 mb-5 flex items-center justify-center flex-shrink-0">
      {/* Blob background */}
      <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full" style={{ opacity: 0.85 }}>
        <path
          d="M40 8 C55 8, 72 18, 72 35 C72 52, 62 70, 45 72 C28 74, 10 62, 8 45 C6 28, 18 8, 40 8Z"
          fill={color}
        />
      </svg>
      <Icon size={22} style={{ color: iconColor, position: 'relative', zIndex: 1 }} />
    </div>
  );
}

export default function PillarsSection() {
  const { ref, visible } = useReveal();

  return (
    <section className="py-24 lg:py-36" style={{ background: 'white' }}>
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
              <span className="label-mono" style={{ color: '#4f63d7' }}>Autonomous Enterprise</span>
              <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(79,99,215,0.18)' }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
            >
              Key Pillars of the Autonomous Enterprise
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base leading-relaxed lg:pl-8"
            style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, color: '#555555', borderLeft: '1px solid rgba(0,0,0,0.10)' }}
          >
            An autonomous enterprise is not just about automating tasks. It is about creating observable, resilient, safe, agile, and controlled business operations across people, systems, AI, and automations.
          </motion.p>
        </div>

        {/* Pillars grid — pastel gradient cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            const c = PILLAR_COLORS[i];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative rounded-2xl p-7 overflow-hidden group cursor-default"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.borderColor}`,
                  boxShadow: '0 8px 24px rgba(15,23,42,0.05)',
                  transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                }}
                whileHover={{ y: -4, boxShadow: '0 14px 32px rgba(15,23,42,0.08)' }}
              >
                {/* Diagonal line texture overlay */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.12 }}>
                  <defs>
                    <pattern id={`diag-${i}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(15,23,42,0.14)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#diag-${i})`}/>
                </svg>

                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 text-5xl font-bold select-none pointer-events-none"
                  style={{ fontFamily: "'Syne', sans-serif", color: 'rgba(15,23,42,0.07)' }}
                >
                  {pillar.number}
                </span>

                {/* Blob icon */}
                <BlobIcon color={c.iconBg} Icon={Icon} iconColor={c.iconColor} />

                {/* Title */}
                <h3
                  className="text-lg font-bold mb-2 tracking-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
                >
                  {pillar.title}
                </h3>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#555555' }}
                >
                  {pillar.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
