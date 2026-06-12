import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  sub?: string;
  align?: "left" | "center";
  className?: string;
  id?: string;
}

export function SectionHeading({
  eyebrow,
  heading,
  sub,
  align = "left",
  className,
  id,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent font-medium">
          {eyebrow}
        </span>
      )}
      <h2 id={id} className="text-text-primary font-display">{heading}</h2>
      {sub && (
        <p className="text-text-secondary text-lg leading-relaxed max-w-2xl">{sub}</p>
      )}
    </div>
  );
}
