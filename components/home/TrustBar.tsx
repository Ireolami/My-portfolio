import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-subtle" aria-label="Key metrics">
      <div className="container-content py-12">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.08em] text-text-muted mb-8 text-center">
            Production systems. Published research. Real users.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-text-primary tabular-nums">
                462,885
              </span>
              <span className="text-sm text-text-muted leading-tight">farmers in RCT analysis</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-text-primary tabular-nums">
                14-node
              </span>
              <span className="text-sm text-text-muted leading-tight">
                AI automation pipeline
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-text-primary tabular-nums">
                150+
              </span>
              <span className="text-sm text-text-muted leading-tight">students taught</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-3xl font-bold text-text-primary tabular-nums">
                AUC 0.85
              </span>
              <span className="text-sm text-text-muted leading-tight">
                ML benchmark, peer-reviewed
              </span>
            </div>
          </Reveal>
        </div>

        {/* Org strip */}
        <Reveal delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 opacity-40">
            {["HMC Tech", "Lagos State Water Corp.", "One Acre Fund", "SQI College", "FUOYE", "E-Know Consult"].map(
              (org) => (
                <span
                  key={org}
                  className="text-xs font-mono uppercase tracking-widest text-text-muted"
                >
                  {org}
                </span>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
