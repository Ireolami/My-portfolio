import { Reveal } from "@/components/ui/Reveal";

const metrics = [
  { value: "462,885", label: "farmers in RCT analysis", color: "var(--cat-research)" },
  { value: "14-node", label: "AI automation pipeline", color: "var(--cat-auto)" },
  { value: "150+", label: "students taught", color: "var(--cat-data)" },
  { value: "AUC 0.85", label: "ML benchmark, peer-reviewed", color: "var(--cat-ai)" },
];

const orgs = ["HMC Tech", "Lagos State Water Corp.", "One Acre Fund", "SQI College", "FUOYE", "E-Know Consult"];

export function TrustBar() {
  return (
    <section className="border-y border-border bg-bg-subtle" aria-label="Key metrics">
      <div className="container-content py-14">
        <Reveal>
          <p className="text-xs font-mono uppercase tracking-[0.1em] text-text-muted mb-10 text-center">
            Production systems &middot; Published research &middot; Real users
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.05 * (i + 1)}>
              <div className="flex flex-col gap-1.5">
                <span
                  className="font-mono text-3xl font-bold tabular-nums"
                  style={{ color: m.color }}
                >
                  {m.value}
                </span>
                <span className="text-sm text-text-muted leading-tight">{m.label}</span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Org strip */}
        <Reveal delay={0.3}>
          <div className="mt-10 pt-8 border-t border-border flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {orgs.map((org) => (
              <span
                key={org}
                className="text-xs font-mono uppercase tracking-widest text-text-muted opacity-60"
              >
                {org}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
