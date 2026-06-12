import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { StackChip } from "@/components/ui/Chip";
import { Database, Brain, Zap, Code2 } from "lucide-react";

const capabilities = [
  {
    icon: Database,
    category: "data" as const,
    title: "Data Engineering & Analytics",
    tagline: "Pipelines and dashboards leadership actually uses.",
    tools: ["Python", "SQL", "PostgreSQL", "Power BI", "DAX", "ETL", "dbt"],
    color: "var(--cat-data)",
  },
  {
    icon: Brain,
    category: "ai" as const,
    title: "Machine Learning & AI",
    tagline: "Models with AUC ~0.85 and honest evaluation.",
    tools: ["XGBoost", "Random Forest", "Causal Inference", "LLMs", "GPT-4o", "RAG", "Scikit-learn"],
    color: "var(--cat-ai)",
  },
  {
    icon: Zap,
    category: "auto" as const,
    title: "AI Automation",
    tagline: "Workflows that remove whole job functions of busywork.",
    tools: ["n8n", "Make", "OpenAI API", "WhatsApp API", "Zapier", "Clay", "Webhooks"],
    color: "var(--cat-auto)",
  },
  {
    icon: Code2,
    category: "dev" as const,
    title: "Product Engineering",
    tagline: "From architecture doc to deployed product.",
    tools: ["TypeScript", "Node.js", "React", "Next.js", "REST APIs", "Docker"],
    color: "var(--cat-dev)",
  },
];

export function Capabilities() {
  return (
    <section className="section bg-bg" aria-labelledby="capabilities-heading">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            heading="What I build and how"
            sub="Four capability areas, each grounded in real deployed systems — not just tutorials."
            id="capabilities-heading"
          />
        </Reveal>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <RevealItem key={cap.title}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 h-full hover:border-[color:var(--border)]/80 transition-colors">
                  {/* Icon */}
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${cap.color}18` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: cap.color }} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-base font-semibold text-text-primary leading-snug">
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-sm text-text-muted leading-relaxed">{cap.tagline}</p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {cap.tools.map((tool) => (
                      <StackChip key={tool} label={tool} />
                    ))}
                  </div>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
