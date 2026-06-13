import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Chip, StatusDot, StackChip } from "@/components/ui/Chip";
import { Callout } from "@/components/ui/Callout";
import { ArchitectureDiagram } from "@/components/case-study/ArchitectureDiagram";
import { CaseStudyTOC, type TOCItem } from "@/components/case-study/CaseStudyTOC";
import { caseStudies, caseStudyBySlug, caseStudySlugs } from "@/lib/case-studies";

export function generateStaticParams() {
  return caseStudySlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.title,
    description: study.metaDescription,
    openGraph: {
      title: `${study.title} — Olayele Awujoola`,
      description: study.metaDescription,
      type: "article",
    },
    alternates: { canonical: `/projects/${study.slug}` },
  };
}

const TOC: TOCItem[] = [
  { id: "tldr", label: "TL;DR" },
  { id: "context", label: "Context" },
  { id: "problem", label: "The problem" },
  { id: "approach", label: "Approach" },
  { id: "architecture", label: "Architecture" },
  { id: "decisions", label: "Key decisions" },
  { id: "challenges", label: "Challenges" },
  { id: "results", label: "Results" },
  { id: "lessons", label: "Lessons" },
  { id: "future", label: "What's next" },
];

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === study.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: study.title,
    description: study.metaDescription,
    author: { "@type": "Person", name: "Olayele Awujoola" },
    about: study.tagline,
  };

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero band ─────────────────────────────────────────────── */}
      <section className="border-b border-border bg-bg-subtle pt-28 pb-12">
        <div className="container-content">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All projects
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Chip label={study.category.toUpperCase()} category={study.category} />
            <StatusDot status={study.status} />
          </div>

          <h1 className="mt-4 max-w-4xl text-text-primary">{study.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-text-secondary">
            {study.tagline}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-text-muted">
                Role
              </dt>
              <dd className="mt-1 text-sm text-text-primary">{study.role}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-text-muted">
                Timeline
              </dt>
              <dd className="mt-1 text-sm text-text-primary">{study.timeline}</dd>
            </div>
            <div className="min-w-0">
              <dt className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-text-muted">
                Stack
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {study.stack.map((tech) => (
                  <StackChip key={tech} label={tech} />
                ))}
              </dd>
            </div>
          </dl>

          {study.image && (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border border-border bg-bg-elevated">
              <Image
                src={study.image}
                alt={`${study.title} — project visual`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1200px) 100vw, 1152px"
              />
            </div>
          )}
        </div>
      </section>

      {/* ── Body + TOC rail ───────────────────────────────────────── */}
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_220px]">
          {/* Article */}
          <article className="min-w-0 max-w-2xl">
            {/* TL;DR */}
            <section id="tldr" className="scroll-mt-24">
              <div className="rounded-xl border border-accent/30 bg-accent-subtle p-6">
                <h2 className="font-mono text-sm uppercase tracking-[0.08em] text-accent">
                  TL;DR
                </h2>
                <dl className="mt-4 flex flex-col gap-4">
                  {[
                    ["Problem", study.tldr.problem],
                    ["What I built", study.tldr.built],
                    ["Result", study.tldr.result],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[7rem_1fr] gap-3 sm:gap-4">
                      <dt className="font-mono text-xs font-semibold uppercase text-text-muted">
                        {k}
                      </dt>
                      <dd className="text-sm leading-relaxed text-text-secondary">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Headline metric callouts */}
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {study.heroMetrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-lg border border-border bg-bg-elevated p-4"
                  >
                    <div className="mono font-mono text-2xl font-bold text-text-primary">
                      {m.value}
                    </div>
                    <div className="mt-1 text-xs leading-tight text-text-muted">{m.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Context */}
            <Block id="context" heading="Business context">
              {study.context.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </Block>

            {/* Problem */}
            <Block id="problem" heading="The problem">
              <p>{study.problem.intro}</p>
              <ul className="cs-list">
                {study.problem.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </Block>

            {/* Approach */}
            <Block id="approach" heading="Approach">
              <p>{study.approach.intro}</p>
              <div className="mt-6 flex flex-col gap-5">
                {study.approach.points.map((d) => (
                  <div key={d.title} className="border-l-2 border-accent/40 pl-4">
                    <h3 className="text-base font-semibold text-text-primary">{d.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{d.body}</p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Architecture */}
            <Block id="architecture" heading="Architecture">
              <ArchitectureDiagram
                steps={study.architecture.steps}
                caption={study.architecture.caption}
                category={study.category}
              />
              <div className="mt-8 overflow-hidden rounded-xl border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-bg-subtle">
                      <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted">
                        Component
                      </th>
                      <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted">
                        Role
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.architecture.components.map((c, i) => (
                      <tr key={c.name} className={i % 2 ? "bg-bg-subtle/40" : ""}>
                        <td className="border-t border-border px-4 py-3 font-medium text-text-primary">
                          {c.name}
                        </td>
                        <td className="border-t border-border px-4 py-3 text-text-secondary">
                          {c.role}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Block>

            {/* Decisions */}
            <Block id="decisions" heading="Key decisions">
              <div className="flex flex-col gap-5">
                {study.decisions.map((d, i) => (
                  <div key={d.title} className="rounded-lg border border-border bg-bg-elevated p-5">
                    <h3 className="flex items-baseline gap-2 text-base font-semibold text-text-primary">
                      <span className="mono font-mono text-sm text-accent">{String(i + 1).padStart(2, "0")}</span>
                      {d.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-text-secondary">{d.body}</p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Challenges */}
            <Block id="challenges" heading="Challenges">
              <div className="flex flex-col gap-5">
                {study.challenges.map((c) => (
                  <div key={c.title} className="border-l-2 border-warn/50 pl-4">
                    <h3 className="text-base font-semibold text-text-primary">{c.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{c.body}</p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Results */}
            <Block id="results" heading="Results">
              <p>{study.results.intro}</p>
              <div className="mt-6 overflow-hidden rounded-xl border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-bg-subtle">
                      <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted">
                        Metric
                      </th>
                      <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted">
                        Before
                      </th>
                      <th className="px-4 py-3 font-mono text-xs uppercase tracking-wide text-text-muted">
                        After
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {study.results.rows.map((r, i) => (
                      <tr key={r.metric} className={i % 2 ? "bg-bg-subtle/40" : ""}>
                        <td className="border-t border-border px-4 py-3 font-medium text-text-primary">
                          {r.metric}
                        </td>
                        <td className="border-t border-border px-4 py-3 text-text-muted">
                          {r.before}
                        </td>
                        <td className="mono border-t border-border px-4 py-3 font-mono text-text-primary">
                          {r.after}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {study.results.note && (
                <Callout variant="info" className="mt-6">
                  {study.results.note}
                </Callout>
              )}
            </Block>

            {/* Lessons */}
            <Block id="lessons" heading="Lessons">
              <ul className="cs-list">
                {study.lessons.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </Block>

            {/* Future */}
            <Block id="future" heading="What's next">
              <ul className="cs-list">
                {study.future.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </Block>

            {/* Footer CTA */}
            <div className="mt-14 rounded-2xl border border-border bg-bg-subtle p-8 text-center">
              <h2 className="text-text-primary">Want something like this?</h2>
              <p className="mx-auto mt-3 max-w-md text-text-secondary">
                If you have a problem that needs a working system, not a slide deck, let&apos;s talk.
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Link href="/contact">
                  <Button variant="primary" size="lg">Book a call</Button>
                </Link>
                {study.githubUrl && (
                  <Link href={study.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary" size="lg" className="gap-2">
                      <Github className="h-4 w-4" />
                      View code on GitHub
                    </Button>
                  </Link>
                )}
              </div>
              <Link
                href={`/projects/${next.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
              >
                Next: {next.title.split("—")[0].trim()}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </article>

          {/* TOC rail (desktop only) */}
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <CaseStudyTOC items={TOC} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}

/** Standard prose block. Always visible (no scroll-gating) for SEO + reliability. */
function Block({
  id,
  heading,
  children,
}: {
  id: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mt-14 scroll-mt-24">
      <h2 className="text-text-primary">{heading}</h2>
      <div className="cs-prose mt-4 flex flex-col gap-4 text-text-secondary">{children}</div>
    </section>
  );
}
