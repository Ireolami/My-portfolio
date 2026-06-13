import { Fragment } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import type { ArchStep } from "@/lib/case-studies";
import type { Category } from "@/lib/projects";

const categoryAccent: Record<Category, string> = {
  ai: "var(--cat-ai)",
  data: "var(--cat-data)",
  auto: "var(--cat-auto)",
  dev: "var(--cat-dev)",
  research: "var(--cat-research)",
};

export function ArchitectureDiagram({
  steps,
  caption,
  category,
}: {
  steps: ArchStep[];
  caption: string;
  category: Category;
}) {
  const accent = categoryAccent[category];

  return (
    <figure className="my-0">
      <div
        className="rounded-xl border border-border bg-bg-subtle p-6 sm:p-8"
        style={{ backgroundImage: `radial-gradient(120% 100% at 50% 0%, ${accent}0d 0%, transparent 60%)` }}
      >
        {/* Horizontal on md+, vertical stack on mobile */}
        <ol className="flex flex-col items-stretch gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
          {steps.map((step, i) => (
            <Fragment key={step.label}>
              <li className="flex flex-1 flex-col items-center text-center">
                <div
                  className="flex w-full flex-col items-center gap-1 rounded-lg border bg-bg-elevated px-3 py-3"
                  style={{ borderColor: `${accent}40` }}
                >
                  <span
                    className="font-mono text-[0.6875rem] font-bold uppercase tracking-wide"
                    style={{ color: accent }}
                  >
                    {step.label}
                  </span>
                  <span className="text-xs leading-tight text-text-muted">{step.sub}</span>
                </div>
              </li>
              {i < steps.length - 1 && (
                <li className="flex items-center justify-center px-1 text-text-muted" aria-hidden="true">
                  <ArrowRight className="hidden h-4 w-4 md:block" style={{ color: accent }} />
                  <ArrowDown className="h-4 w-4 md:hidden" style={{ color: accent }} />
                </li>
              )}
            </Fragment>
          ))}
        </ol>
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-text-muted">{caption}</figcaption>
    </figure>
  );
}
