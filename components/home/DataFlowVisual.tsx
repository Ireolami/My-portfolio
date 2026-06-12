"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "framer-motion";

const nodes = [
  { id: "n1", cx: 200, cy: 60, r: 6, label: "IoT" },
  { id: "n2", cx: 340, cy: 110, r: 10, label: "Pipeline" },
  { id: "n3", cx: 100, cy: 160, r: 8, label: "SQL" },
  { id: "n4", cx: 260, cy: 200, r: 7, label: "ML" },
  { id: "n5", cx: 420, cy: 220, r: 12, label: "AI Agent", primary: true },
  { id: "n6", cx: 150, cy: 280, r: 6, label: "n8n" },
  { id: "n7", cx: 320, cy: 310, r: 9, label: "API" },
  { id: "n8", cx: 460, cy: 350, r: 7, label: "WhatsApp" },
  { id: "n9", cx: 80, cy: 360, r: 6, label: "Dashboard" },
  { id: "n10", cx: 220, cy: 390, r: 8, label: "GPT-4o" },
];

const edges = [
  ["n1", "n2"], ["n1", "n3"], ["n2", "n4"], ["n2", "n5"],
  ["n3", "n4"], ["n3", "n6"], ["n4", "n5"], ["n4", "n7"],
  ["n5", "n7"], ["n5", "n8"], ["n6", "n9"], ["n6", "n10"],
  ["n7", "n8"], ["n7", "n10"], ["n9", "n10"],
];

function getNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function DataFlowVisual() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px] mx-auto opacity-90" aria-hidden="true">
      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          <radialGradient id="bg-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.06" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background radial glow */}
        <ellipse cx="260" cy="220" rx="220" ry="180" fill="url(#bg-glow)" />

        {/* Edges */}
        {edges.map(([a, b]) => {
          const from = getNode(a);
          const to = getNode(b);
          return (
            <line
              key={`${a}-${b}`}
              x1={from.cx}
              y1={from.cy}
              x2={to.cx}
              y2={to.cy}
              stroke="var(--border)"
              strokeWidth="1"
              opacity="0.6"
            />
          );
        })}

        {/* Animated edge pulses */}
        {!prefersReducedMotion &&
          edges.slice(0, 6).map(([a, b], i) => {
            const from = getNode(a);
            const to = getNode(b);
            return (
              <m.circle
                key={`pulse-${a}-${b}`}
                r="2.5"
                fill="var(--accent)"
                opacity="0.8"
                initial={{ cx: from.cx, cy: from.cy }}
                animate={{ cx: [from.cx, to.cx], cy: [from.cy, to.cy] }}
                transition={{
                  duration: 2,
                  delay: i * 0.4,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            );
          })}

        {/* Nodes */}
        {nodes.map((node) => (
          <g key={node.id}>
            {/* Outer pulse ring on primary node */}
            {node.primary && !prefersReducedMotion && (
              <m.circle
                cx={node.cx}
                cy={node.cy}
                r={node.r + 8}
                stroke="var(--accent)"
                strokeWidth="1"
                fill="none"
                initial={{ opacity: 0.6, scale: 1 }}
                animate={{ opacity: 0, scale: 1.5 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
              />
            )}

            {/* Node fill */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r={node.r}
              fill={node.primary ? "var(--accent)" : "var(--bg-elevated)"}
              stroke={node.primary ? "var(--accent-hover)" : "var(--border)"}
              strokeWidth={node.primary ? "2" : "1"}
              filter={node.primary ? "url(#glow)" : undefined}
            />

            {/* Label */}
            <text
              x={node.cx}
              y={node.cy + node.r + 12}
              textAnchor="middle"
              fontSize="9"
              fill="var(--text-muted)"
              fontFamily="var(--font-mono)"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>

      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
    </div>
  );
}
