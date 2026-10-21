/* Actionabl Benefits Section — Pastel Gradient Cards with Blob Icons
   Bento grid: featured large card + 4 smaller cards, all with pastel identities */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Gauge, Globe, TrendingUp, DollarSign } from "lucide-react";

const BENEFIT_COLORS = [
  // Featured
  { bg: "linear-gradient(145deg, #18b3a1 0%, #47cdb6 60%, #8be3cc 100%)", iconBg: "rgba(255,255,255,0.16)", iconColor: "#ffffff", tagBg: "rgba(255,255,255,0.18)", tagColor: "#ffffff", textColor: "#ffffff", descColor: "rgba(255,255,255,0.84)", featured: true, borderColor: "rgba(24,179,161,0.18)" },
  // Regular
  { bg: "linear-gradient(145deg, rgba(248,251,255,1) 0%, rgba(236,244,255,0.96) 58%, rgba(220,234,255,0.9) 100%)", iconBg: "rgba(72,119,255,0.12)", iconColor: "#4877ff", tagBg: "rgba(72,119,255,0.10)", tagColor: "#4168d8", featured: false, borderColor: "rgba(72,119,255,0.14)" },
  { bg: "linear-gradient(145deg, rgba(252,248,255,1) 0%, rgba(244,235,255,0.96) 58%, rgba(237,223,255,0.9) 100%)", iconBg: "rgba(164,97,255,0.12)", iconColor: "#9a54f6", tagBg: "rgba(164,97,255,0.10)", tagColor: "#884ad8", featured: false, borderColor: "rgba(164,97,255,0.14)" },
  { bg: "linear-gradient(145deg, rgba(255,251,246,1) 0%, rgba(255,241,225,0.96) 58%, rgba(255,232,206,0.9) 100%)", iconBg: "rgba(255,120,84,0.12)", iconColor: "#ef7648", tagBg: "rgba(255,120,84,0.10)", tagColor: "#d86445", featured: false, borderColor: "rgba(255,120,84,0.14)" },
  { bg: "linear-gradient(145deg, rgba(255,248,250,1) 0%, rgba(255,237,241,0.96) 58%, rgba(255,223,230,0.9) 100%)", iconBg: "rgba(253,38,125,0.12)", iconColor: "#ef4a82", tagBg: "rgba(253,38,125,0.10)", tagColor: "#d83f72", featured: false, borderColor: "rgba(253,38,125,0.14)" },
];

const benefits = [
  { icon: ShieldCheck, title: "Risk Management & Resilience",    description: "Reduce operational risk and build trust with built-in audit trails, validation checkpoints, exception handling, and recovery mechanisms that help maintain business continuity.", metric: "Reduced Risk", tags: ["Audit Trail", "Validation", "Recovery"] },
  { icon: Gauge,       title: "Enhanced Agility",                description: "Adapt quickly to changing business needs with configurable rules and decision points, modular process design, and the ability to introduce new technologies without redesigning workflows.", metric: "Faster Adaptation", tags: [] },
  { icon: Globe,       title: "Open Architecture",               description: "Integrate third-party tools, internal systems, and evolving AI capabilities through a vendor-agnostic architecture that reduces lock-in and supports long-term flexibility.", metric: "No Lock-in", tags: [] },
  { icon: TrendingUp,  title: "Improved Efficiency",             description: "Increase throughput and reduce manual effort by coordinating work across people, systems, and automations within a single orchestration layer.", metric: "Higher Throughput", tags: [] },
  { icon: DollarSign,  title: "Lower Total Cost of Ownership",   description: "Reduce implementation effort, maintenance overhead, and reliance on multiple point solutions through modular design and unified orchestration.", metric: "Lower TCO", tags: [] },
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

function BlobIcon({ color, Icon, iconColor, size = 22 }: { color: string; Icon: React.ElementType; iconColor: string; size?: number }) {
  return (
    <div className="relative flex items-center justify-center flex-shrink-0" style={{ width: size * 2.8, height: size * 2.8 }}>
      <svg viewBox="0 0 80 80" className="absolute inset-0 w-full h-full">
        <path d="M38 6 C54 4, 74 16, 74 36 C74 56, 58 74, 40 74 C22 74, 6 58, 6 40 C6 22, 22 8, 38 6Z" fill={color} />
      </svg>
      <Icon size={size} style={{ color: iconColor, position: 'relative', zIndex: 1 }} />
    </div>
  );
}

export default function BenefitsSection() {
  const { ref, visible } = useReveal();

  return (
    <section
      id="benefits"
      className="py-24 lg:py-36"
      style={{ background: "linear-gradient(180deg, rgba(240,253,250,0.4) 0%, white 100%)" }}
    >
      <div className="container" ref={ref}>
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14 lg:mb-16">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="w-[3px] h-5 rounded-full" style={{ background: '#4f63d7' }} />
              <span className="label-mono" style={{ color: '#4f63d7' }}>Key Benefits</span>
              <div className="h-px flex-1 max-w-12" style={{ background: 'rgba(79,99,215,0.18)' }} />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight max-w-2xl"
              style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
            >
              Deliver measurable outcomes across risk, agility, efficiency, and cost.
            </motion.h2>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Featured large card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:row-span-2 rounded-2xl p-8 flex flex-col justify-between relative overflow-hidden"
            style={{
              background: BENEFIT_COLORS[0].bg,
              border: `1px solid ${BENEFIT_COLORS[0].borderColor}`,
              boxShadow: "0 12px 30px rgba(24,179,161,0.14)",
            }}
            whileHover={{ y: -4, boxShadow: '0 16px 36px rgba(24,179,161,0.18)' }}
          >
            {/* Diagonal texture */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.08 }}>
              <defs>
                <pattern id="feat-diag" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                  <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(255,255,255,0.42)" strokeWidth="0.8"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#feat-diag)"/>
            </svg>

            <div>
              <div className="flex items-start justify-between mb-8">
                <BlobIcon color={BENEFIT_COLORS[0].iconBg} Icon={ShieldCheck} iconColor={BENEFIT_COLORS[0].iconColor} size={22} />
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ color: BENEFIT_COLORS[0].tagColor, background: BENEFIT_COLORS[0].tagBg, fontFamily: "'DM Sans', sans-serif", border: '1px solid rgba(255,255,255,0.24)' }}
                >
                  Reduced Risk
                </span>
              </div>
              <h3
                className="text-2xl font-bold mb-4 tracking-tight leading-tight"
                style={{ fontFamily: "'Syne', sans-serif", color: BENEFIT_COLORS[0].textColor }}
              >
                Risk Management &amp; Resilience
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: BENEFIT_COLORS[0].descColor, fontFamily: "'DM Sans', sans-serif" }}
              >
                Reduce operational risk and build trust with built-in audit trails, validation checkpoints, exception handling, and recovery mechanisms that help maintain business continuity.
              </p>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.22)" }}>
              <div className="flex flex-wrap items-center gap-2">
                {["Audit Trail", "Validation", "Recovery"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-md"
                    style={{ color: "rgba(255,255,255,0.78)", border: "1px solid rgba(255,255,255,0.22)", fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Regular pastel cards */}
          {benefits.slice(1).map((benefit, i) => {
            const Icon = benefit.icon;
            const c = BENEFIT_COLORS[i + 1];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
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
                    <pattern id={`ben-diag-${i}`} width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(35)">
                      <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(15,23,42,0.14)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#ben-diag-${i})`}/>
                </svg>

                <div className="flex items-start justify-between mb-5">
                  <BlobIcon color={c.iconBg} Icon={Icon} iconColor={c.iconColor} size={18} />
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full"
                    style={{ background: c.tagBg, color: c.tagColor, fontFamily: "'DM Sans', sans-serif" }}
                  >
                    {benefit.metric}
                  </span>
                </div>
                <h3
                  className="text-base font-bold mb-2.5 tracking-tight leading-tight"
                  style={{ fontFamily: "'Syne', sans-serif", color: '#111111' }}
                >
                  {benefit.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: "'DM Sans', sans-serif", color: '#555555' }}
                >
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
