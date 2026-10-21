/* Actionabl Orchestration Flow — Vibrant Per-Node Color System
   Each node has its own color identity. Active state fills the node
   with its signature color, edge glows in that color, particle
   travels in that color. Orchestration center stays dark/neutral
   as the authoritative hub. */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type NodeType = "start" | "orch" | "ai" | "human" | "system" | "auto" | "end";

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub: string;
  type: NodeType;
};

// ── Per-node color palette ──────────────────────────────────────────────────
// Each node has: fill (active bg), stroke (border), glow (shadow/ring), particle
const NODE_COLORS: Record<NodeType, {
  fill: string;
  light: string;
  stroke: string;
  glow: string;
  text: string;
  icon: string;
}> = {
  start:  { fill: "#f97316", light: "rgba(249,115,22,0.10)",  stroke: "#f97316", glow: "rgba(249,115,22,0.30)",  text: "#7c2d12", icon: "▶" },
  ai:     { fill: "#a78bfa", light: "rgba(167,139,250,0.12)", stroke: "#a78bfa", glow: "rgba(167,139,250,0.35)", text: "#4c1d95", icon: "✦" },
  system: { fill: "#38bdf8", light: "rgba(56,189,248,0.12)",  stroke: "#38bdf8", glow: "rgba(56,189,248,0.35)",  text: "#0c4a6e", icon: "⬡" },
  orch:   { fill: "#1a1a1a", light: "rgba(26,26,26,0.06)",    stroke: "#1a1a1a", glow: "rgba(0,0,0,0.20)",       text: "#ffffff", icon: "◎" },
  human:  { fill: "#f472b6", light: "rgba(244,114,182,0.12)", stroke: "#f472b6", glow: "rgba(244,114,182,0.35)", text: "#831843", icon: "◈" },
  auto:   { fill: "#34d399", light: "rgba(52,211,153,0.12)",  stroke: "#34d399", glow: "rgba(52,211,153,0.35)",  text: "#064e3b", icon: "⚡" },
  end:    { fill: "#fbbf24", light: "rgba(251,191,36,0.12)",  stroke: "#fbbf24", glow: "rgba(251,191,36,0.35)",  text: "#78350f", icon: "✓" },
};

// Map node id → type for color lookup
const ID_TO_TYPE: Record<string, NodeType> = {
  start: "start", ai: "ai", sys: "system" as NodeType,
  orch: "orch", human: "human", auto: "auto", end: "end",
};

const nodes: Node[] = [
  { id: "start",  x: 8,  y: 50, label: "Process Start", sub: "Trigger",             type: "start"  },
  { id: "ai",     x: 30, y: 15, label: "AI Agent",       sub: "Extract & Classify",  type: "ai"     },
  { id: "sys",    x: 30, y: 85, label: "System API",     sub: "Fetch Data",           type: "system" },
  { id: "orch",   x: 55, y: 50, label: "Orchestration",  sub: "Validate & Route",     type: "orch"   },
  { id: "human",  x: 80, y: 20, label: "Human Review",   sub: "Approve",              type: "human"  },
  { id: "auto",   x: 80, y: 80, label: "Automation",     sub: "Execute Task",         type: "auto"   },
  { id: "end",    x: 96, y: 50, label: "Complete",       sub: "Audit Trail",          type: "end"    },
];

const edges: [string, string][] = [
  ["start", "orch"], ["orch", "ai"],   ["ai",    "orch"],
  ["orch",  "sys"],  ["sys",  "orch"], ["orch",  "human"],
  ["human", "orch"], ["orch", "auto"], ["auto",  "orch"],
  ["orch",  "end"],
];

const sequence: [string, string][] = [
  ["start", "orch"], ["orch", "ai"],   ["ai",    "orch"],
  ["orch",  "sys"],  ["sys",  "orch"], ["orch",  "human"],
  ["human", "orch"], ["orch", "auto"], ["auto",  "orch"],
  ["orch",  "end"],
];

const STEP_MS = 1500;

function getColor(id: string): typeof NODE_COLORS[NodeType] {
  const type = nodes.find(n => n.id === id)?.type ?? "orch";
  return NODE_COLORS[type];
}

export default function OrchestrationFlow() {
  const [step, setStep] = useState(0);
  const [lit, setLit] = useState<Set<string>>(new Set(["start"]));

  useEffect(() => {
    const t = setInterval(() => {
      setStep(prev => {
        const next = (prev + 1) % sequence.length;
        const [, toId] = sequence[next];
        setLit(s => new Set([...s, toId]));
        return next;
      });
    }, STEP_MS);
    return () => clearInterval(t);
  }, []);

  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]));
  const [fromId, toId] = sequence[step];
  const fromNode = nodeMap[fromId];
  const toNode = nodeMap[toId];
  const activeId = toId;

  // The "active color" is the destination node's color
  const activeColor = getColor(toId);
  // Edge color: use the non-orch node's color
  const edgeColor = toId === "orch" ? getColor(fromId).stroke : getColor(toId).stroke;
  const edgeGlow = toId === "orch" ? getColor(fromId).glow : getColor(toId).glow;

  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        border: "1px solid rgba(0,0,0,0.07)",
        background: "#ffffff",
        boxShadow: "0 8px 40px rgba(0,0,0,0.08), 0 2px 8px rgba(0,0,0,0.04)",
      }}
    >
      {/* ── Window chrome ── */}
      <div
        className="flex items-center justify-between px-5 py-3.5"
        style={{ borderBottom: "1px solid rgba(0,0,0,0.07)", background: "rgba(248,248,248,0.9)" }}
      >
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span style={{ color: "rgba(0,0,0,0.30)", fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          orchestration.process
        </span>
        <div className="flex items-center gap-1.5">
          <motion.div
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: activeColor.stroke }}
            animate={{ background: [activeColor.stroke, activeColor.glow, activeColor.stroke] }}
            transition={{ duration: 1.2, repeat: Infinity }}
          />
          <span style={{ color: activeColor.stroke, fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", letterSpacing: "0.12em", textTransform: "uppercase", transition: "color 0.4s ease" }}>
            LIVE
          </span>
        </div>
      </div>

      {/* ── SVG diagram ── */}
      <div className="px-4 pt-4 pb-2 bg-white">
        <svg viewBox="0 4 100 92" className="w-full" style={{ height: "230px" }}>
          {/* Defs: gradient for active edge */}
          <defs>
            <linearGradient id={`eg-${step}`} x1={`${fromNode.x}%`} y1={`${fromNode.y}%`} x2={`${toNode.x}%`} y2={`${toNode.y}%`} gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor={getColor(fromId).stroke} stopOpacity="0.6" />
              <stop offset="100%" stopColor={getColor(toId).stroke} stopOpacity="0.9" />
            </linearGradient>
          </defs>

          {/* Static dashed edges */}
          {edges.map(([a, b]) => {
            const na = nodeMap[a];
            const nb = nodeMap[b];
            const isActive = (a === fromId && b === toId) || (a === toId && b === fromId && fromId !== "orch");
            return (
              <line
                key={`${a}-${b}`}
                x1={na.x} y1={na.y}
                x2={nb.x} y2={nb.y}
                stroke={isActive ? edgeColor : "rgba(0,0,0,0.10)"}
                strokeWidth={isActive ? "1.0" : "0.5"}
                strokeDasharray={isActive ? "3 1.5" : "2 2"}
                style={{ transition: "stroke 0.4s ease, stroke-width 0.3s ease" }}
              />
            );
          })}

          {/* Animated particle */}
          <motion.circle
            key={`particle-${step}`}
            r="1.5"
            fill={edgeColor}
            filter={`drop-shadow(0 0 2px ${edgeGlow})`}
            initial={{ cx: fromNode.x, cy: fromNode.y, opacity: 0 }}
            animate={{
              cx: [fromNode.x, toNode.x],
              cy: [fromNode.y, toNode.y],
              opacity: [0, 1, 1, 0],
            }}
            transition={{ duration: STEP_MS / 1000 - 0.15, ease: "easeInOut" }}
          />

          {/* Nodes */}
          {nodes.map(node => {
            const isActive = node.id === activeId;
            const isLit = lit.has(node.id);
            const isOrch = node.type === "orch";
            const c = NODE_COLORS[node.type];
            const r = isOrch ? 6.5 : 4.2;
            const labelUp = node.y < 50;

            const nodeFill = isActive ? c.fill : isLit ? c.light : "white";
            const nodeStroke = isActive ? c.stroke : isLit ? c.stroke : "rgba(0,0,0,0.18)";
            const strokeW = isOrch ? 1.5 : isActive ? 1.2 : 0.8;

            return (
              <g key={node.id}>
                {/* Outer glow ring on active */}
                {isActive && (
                  <>
                    <motion.circle
                      cx={node.x} cy={node.y} r={r + 4}
                      fill="none"
                      stroke={c.glow}
                      strokeWidth="2"
                      animate={{ r: [r + 4, r + 9, r + 4], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 1.0, repeat: Infinity }}
                    />
                    <motion.circle
                      cx={node.x} cy={node.y} r={r + 2}
                      fill="none"
                      stroke={c.stroke}
                      strokeWidth="0.5"
                      strokeOpacity="0.4"
                      animate={{ r: [r + 2, r + 5, r + 2], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 1.0, repeat: Infinity, delay: 0.2 }}
                    />
                  </>
                )}

                {/* Node circle */}
                <motion.circle
                  cx={node.x} cy={node.y} r={r}
                  fill={nodeFill}
                  stroke={nodeStroke}
                  strokeWidth={strokeW}
                  animate={{ fill: nodeFill, stroke: nodeStroke }}
                  transition={{ duration: 0.4 }}
                />

                {/* Orchestration inner dot */}
                {isOrch && (
                  <motion.circle
                    cx={node.x} cy={node.y} r="2.5"
                    fill={isActive ? "white" : "#1a1a1a"}
                    animate={{ fill: isActive ? "white" : "#1a1a1a" }}
                    transition={{ duration: 0.4 }}
                  />
                )}

                {/* Label */}
                <text
                  x={node.x}
                  y={node.y + (labelUp ? -(r + 4.5) : r + 6.5)}
                  textAnchor="middle"
                  fontSize={isOrch ? "3.8" : "3.2"}
                  fill={isActive ? (isOrch ? "#1a1a1a" : c.stroke) : "#444444"}
                  fontFamily="'Syne', sans-serif"
                  fontWeight={isOrch ? "700" : isActive ? "700" : "600"}
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {node.label}
                </text>
                <text
                  x={node.x}
                  y={node.y + (labelUp ? -(r + 0.8) : r + 10.2)}
                  textAnchor="middle"
                  fontSize="2.4"
                  fill={isActive ? (isOrch ? "rgba(0,0,0,0.45)" : c.glow.replace("0.35", "0.7")) : "rgba(0,0,0,0.28)"}
                  fontFamily="'JetBrains Mono', monospace"
                  style={{ transition: "fill 0.4s ease" }}
                >
                  {node.sub}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* ── Status bar ── */}
      <div
        className="px-5 py-3 flex items-center justify-between gap-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.07)", background: "rgba(248,248,248,0.9)" }}
      >
        <div className="flex items-center gap-2 min-w-0">
          <motion.div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: activeColor.stroke }}
            animate={{ background: activeColor.stroke }}
            transition={{ duration: 0.4 }}
          />
          <AnimatePresence mode="wait">
            <motion.span
              key={step}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 6 }}
              transition={{ duration: 0.22 }}
              className="text-xs truncate"
              style={{ color: "rgba(0,0,0,0.55)", fontFamily: "'DM Sans', sans-serif" }}
            >
              {fromId === "orch"
                ? `Orchestration → ${nodeMap[toId].label}`
                : `${nodeMap[fromId].label} → Orchestration`}
            </motion.span>
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          <motion.span
            key={`status-${step}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xs flex-shrink-0 tracking-widest uppercase font-semibold"
            style={{
              color: activeColor.stroke,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "9px",
              transition: "color 0.4s ease",
            }}
          >
            {step === sequence.length - 1 ? "COMPLETE" : "IN PROGRESS"}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
}
