import { cn } from "@/lib/utils";

type Category = "ai" | "data" | "auto" | "dev" | "research" | "default";
type Status = "production" | "in-build" | "case-study" | "research";

interface ChipProps {
  label: string;
  category?: Category;
  className?: string;
}

interface StatusDotProps {
  status: Status;
  className?: string;
}

const categoryStyles: Record<Category, string> = {
  ai: "bg-[color:var(--accent-subtle)] text-[color:var(--cat-ai)] border border-[color:var(--cat-ai)]/20",
  data: "bg-[color:rgba(59,130,246,0.1)] text-[color:var(--cat-data)] border border-[color:var(--cat-data)]/20",
  auto: "bg-[color:rgba(16,185,129,0.1)] text-[color:var(--cat-auto)] border border-[color:var(--cat-auto)]/20",
  dev: "bg-[color:rgba(249,115,22,0.1)] text-[color:var(--cat-dev)] border border-[color:var(--cat-dev)]/20",
  research:
    "bg-[color:rgba(20,184,166,0.1)] text-[color:var(--cat-research)] border border-[color:var(--cat-research)]/20",
  default:
    "bg-bg-subtle text-text-secondary border border-border",
};

const statusConfig: Record<Status, { label: string; color: string }> = {
  production: { label: "Production", color: "var(--success)" },
  "in-build": { label: "In Build", color: "var(--warn)" },
  "case-study": { label: "Case Study", color: "var(--accent)" },
  research: { label: "Research", color: "var(--cat-research)" },
};

export function Chip({ label, category = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium mono font-mono",
        categoryStyles[category],
        className
      )}
    >
      {label}
    </span>
  );
}

export function StatusDot({ status, className }: StatusDotProps) {
  const config = statusConfig[status];
  return (
    <span className={cn("inline-flex items-center gap-1.5 text-xs font-medium", className)}>
      <span
        className="inline-block h-1.5 w-1.5 rounded-full animate-pulse"
        style={{ backgroundColor: config.color }}
      />
      <span style={{ color: config.color }}>{config.label}</span>
    </span>
  );
}

export function StackChip({ label, className }: { label: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-mono",
        "bg-bg-subtle text-text-muted border border-border",
        "hover:text-text-secondary hover:border-accent/40 transition-colors duration-150",
        className
      )}
    >
      {label}
    </span>
  );
}
