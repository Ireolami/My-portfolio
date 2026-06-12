import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

export function SpotlightBand() {
  return (
    <section
      className="relative overflow-hidden border-y border-border bg-bg-subtle"
      aria-labelledby="spotlight-heading"
    >
      {/* Accent gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, var(--accent-subtle) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container-content relative py-20">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          {/* Text */}
          <div className="flex flex-col gap-5">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                Deep dive
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="spotlight-heading" className="text-text-primary">
                462,885-farmer RCT analysis across 7 treatment arms.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-text-secondary leading-relaxed">
                Causal inference analysis of a large-scale randomized controlled trial for One Acre
                Fund, covering 462,885 smallholder farmers across 7 treatment arms. End-to-end:
                data pipeline, propensity matching, effect-size estimation, and policy
                recommendations.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-sm text-text-muted italic">
                &ldquo;This is the rigor I bring to every analysis.&rdquo;
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <Link href="/research">
                <Button variant="primary" size="md" className="gap-2 w-fit">
                  Read the analysis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </Reveal>
          </div>

          {/* Methodology thumbnail */}
          <Reveal delay={0.1}>
            <div className="relative rounded-xl border border-border bg-bg-elevated p-6 font-mono text-xs text-text-muted overflow-hidden">
              {/* Fake methodology diagram */}
              <div className="flex flex-col gap-3">
                <div className="text-accent font-bold text-sm mb-2">Study Design</div>
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-cat-data" />
                  <span>Control group — N=66,124</span>
                </div>
                {["Arm 1: Seeds only", "Arm 2: Seeds + Training", "Arm 3: Credit + Seeds", "Arm 4: Full bundle", "Arm 5: Remote support", "Arm 6: Community agent"].map(
                  (arm, i) => (
                    <div key={arm} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-cat-auto" />
                      <span>{arm}</span>
                      <span className="ml-auto text-text-muted">
                        N~{(55000 + i * 3000).toLocaleString()}
                      </span>
                    </div>
                  )
                )}
                <div className="mt-3 pt-3 border-t border-border">
                  <span className="text-success">AUC 0.85 · p &lt; 0.001 · 7-arm ANCOVA</span>
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-16 w-16 opacity-10">
                <div
                  className="h-full w-full"
                  style={{
                    background:
                      "conic-gradient(from 0deg, var(--cat-data), var(--accent), var(--cat-data))",
                    borderRadius: "0 12px 0 100%",
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
