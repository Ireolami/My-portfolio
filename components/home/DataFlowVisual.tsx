"use client";

import { m, useReducedMotion } from "framer-motion";

type Node = {
  id: string;
  cx: number;
  cy: number;
  r: number;
  label: string;
  color: string;
  primary?: boolean;
};

// Nodes laid out as a left-to-right data → AI → delivery pipeline.
const nodes: Node[] = [
  { id: "iot", cx: 70, cy: 90, r: 7, label: "IoT", color: "var(--cat-data)" },
  { id: "sql", cx: 70, cy: 230, r: 7, label: "SQL", color: "var(--cat-data)" },
  { id: "etl", cx: 70, cy: 360, r: 7, label: "ETL", color: "var(--cat-data)" },
  { id: "pipeline", cx: 220, cy: 160, r: 10, label: "Pipeline", color: "var(--accent)" },
  { id: "ml", cx: 220, cy: 300, r: 9, label: "ML", color: "var(--cat-research)" },
  { id: "agent", cx: 370, cy: 230, r: 15, label: "AI Agent", color: "var(--accent)", primary: true },
  { id: "n8n", cx: 470, cy: 90, r: 8, label: "n8n", color: "var(--cat-auto)" },
  { id: "whatsapp", cx: 470, cy: 360, r: 8, label: "WhatsApp", color: "var(--cat-ai)" },
];

const edges: [string, string][] = [
  ["iot", "pipeline"],
  ["sql", "pipeline"],
  ["sql", "ml"],
  ["etl", "ml"],
  ["pipeline", "agent"],
  ["ml", "agent"],
  ["agent", "n8n"],
  ["agent", "whatsapp"],
];

const byId = (id: string) => nodes.find((n) => n.id === id)!;

export function DataFlowVisual() {
  const reduce = useReducedMotion();

  return (
    <div className="relative w-full max-w-[500px]" aria-hidden="true">
      {/* Contained panel so the visual reads as deliberate, not empty space */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-bg-elevated/70 p-3 backdrop-blur-sm card-shadow">
        {/* Panel header */}
        <div className="mb-1 flex items-center justify-between px-2 pt-1">
          <span className="font-mono text-[0.625rem] uppercase tracking-[0.12em] text-text-muted">
            system map
          </span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cat-data" />
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-cat-auto" />
          </span>
        </div>

        {/* Grid mesh */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text-primary) 1px, transparent 1px), linear-gradient(90deg, var(--text-primary) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <svg viewBox="0 0 540 450" fill="none" className="relative w-full">
          <defs>
            <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="var(--cat-data)" stopOpacity="0.55" />
              <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.55" />
            </linearGradient>
            <filter id="node-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Edges */}
          {edges.map(([a, b]) => {
            const from = byId(a);
            const to = byId(b);
            return (
              <line
                key={`${a}-${b}`}
                x1={from.cx}
                y1={from.cy}
                x2={to.cx}
                y2={to.cy}
                stroke="url(#edge-grad)"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Traveling pulses along edges into the agent */}
          {!reduce &&
            edges.map(([a, b], i) => {
              const from = byId(a);
              const to = byId(b);
              return (
                <m.circle
                  key={`pulse-${a}-${b}`}
                  r="3"
                  fill="var(--accent)"
                  initial={{ cx: from.cx, cy: from.cy, opacity: 0 }}
                  animate={{
                    cx: [from.cx, to.cx],
                    cy: [from.cy, to.cy],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    delay: i * 0.35,
                    repeat: Infinity,
                    repeatDelay: 2.2,
                    ease: "easeInOut",
                  }}
                />
              );
            })}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id}>
              {node.primary && !reduce && (
                <m.circle
                  cx={node.cx}
                  cy={node.cy}
                  r={node.r}
                  fill="none"
                  stroke={node.color}
                  strokeWidth="1.5"
                  initial={{ opacity: 0.5, scale: 1 }}
                  animate={{ opacity: 0, scale: 2 }}
                  transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
                  style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}
                />
              )}
              <circle
                cx={node.cx}
                cy={node.cy}
                r={node.r}
                fill={node.color}
                fillOpacity={node.primary ? 1 : 0.18}
                stroke={node.color}
                strokeWidth={node.primary ? 2 : 1.5}
                filter={node.primary ? "url(#node-glow)" : undefined}
              />
              <text
                x={node.cx}
                y={node.cy + node.r + 14}
                textAnchor="middle"
                fontSize="11"
                fontWeight="500"
                fill="var(--text-secondary)"
                fontFamily="var(--font-mono)"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  );
}
