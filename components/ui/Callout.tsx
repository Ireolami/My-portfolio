import { cn } from "@/lib/utils";
import { Info, CheckCircle, AlertTriangle } from "lucide-react";

type CalloutVariant = "info" | "success" | "warn";

interface CalloutProps {
  variant?: CalloutVariant;
  children: React.ReactNode;
  className?: string;
}

const config: Record<CalloutVariant, { icon: typeof Info; styles: string }> = {
  info: {
    icon: Info,
    styles: "border-accent/30 bg-accent-subtle text-text-secondary",
  },
  success: {
    icon: CheckCircle,
    styles: "border-success/30 bg-[color:rgba(34,197,94,0.08)] text-text-secondary",
  },
  warn: {
    icon: AlertTriangle,
    styles: "border-warn/30 bg-[color:rgba(234,179,8,0.08)] text-text-secondary",
  },
};

export function Callout({ variant = "info", children, className }: CalloutProps) {
  const { icon: Icon, styles } = config[variant];

  return (
    <div
      className={cn(
        "flex gap-3 rounded-lg border p-4 text-sm leading-relaxed",
        styles,
        className
      )}
    >
      <Icon className="mt-0.5 h-4 w-4 flex-shrink-0 opacity-70" />
      <div>{children}</div>
    </div>
  );
}
