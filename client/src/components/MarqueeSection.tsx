/* Actionabl Marquee Section — Architectural Minimalism
   Horizontal ticker showing key product attributes
   Thin dark strip between hero and problem sections */

const items = [
  "Business Orchestration",
  "AI Agents",
  "Human-in-the-Loop",
  "End-to-End Control",
  "Process Resilience",
  "Autonomous Enterprise",
  "Open Architecture",
  "Deterministic Workflows",
  "Exception Handling",
  "Audit Trails",
  "No-Code Configuration",
  "Modular Design",
];

export default function MarqueeSection() {
  const doubled = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[oklch(0.91_0.008_260)] py-3.5" style={{ background: 'oklch(0.985 0.003 264 / 0.3)' }}>
      <div className="ticker-track flex items-center whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center">
            <span
              className="label-mono text-[oklch(0.55_0.015_260)] text-xs px-5"
            >
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[oklch(0.52_0.22_264)] opacity-50 flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
