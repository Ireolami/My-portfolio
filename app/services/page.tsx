import type { Metadata } from "next";
import Link from "next/link";
import {
  BarChart3,
  Bot,
  Workflow,
  Database,
  FlaskConical,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Data analytics, AI automation, custom AI agents, data engineering, and research services by Olayele Gbenga Awujoola — Lagos, Nigeria.",
};

const services = [
  {
    icon: BarChart3,
    color: "var(--cat-data)",
    title: "Data Analytics & Business Intelligence",
    pitch:
      "Turn scattered data into decisions your team can actually act on — dashboards, reports, and KPIs that answer the right questions.",
    deliverables: [
      "End-to-end analytics pipeline (collect → clean → model → visualise)",
      "Power BI / Tableau dashboards with live data connections",
      "SQL query optimisation and data warehouse design",
      "Monthly KPI reporting frameworks",
      "Ad-hoc analysis and executive-ready decks",
    ],
    cta: "Start a data project",
  },
  {
    icon: Workflow,
    color: "var(--cat-auto)",
    title: "AI Automation & Workflow Engineering",
    pitch:
      "Replace repetitive manual work with intelligent n8n workflows — from email triage to document processing to multi-step business logic.",
    deliverables: [
      "n8n workflow design, build, and deployment",
      "GPT-4o integration for classification, summarisation, and generation",
      "Automated reporting and alert pipelines",
      "CRM, Google Workspace, and Airtable integrations",
      "Webhook orchestration across third-party APIs",
    ],
    cta: "Automate a process",
  },
  {
    icon: Bot,
    color: "var(--cat-ai)",
    title: "AI Agent Development",
    pitch:
      "Custom conversational agents that live inside the tools your customers already use — WhatsApp, Slack, or web chat — powered by your own data.",
    deliverables: [
      "WhatsApp-native sales and support agents",
      "RAG chatbots grounded in your documents or knowledge base",
      "Lead qualification and nurture agents",
      "Escalation logic and human-handoff flows",
      "Agent analytics and conversation quality review",
    ],
    cta: "Build an agent",
  },
  {
    icon: Database,
    color: "var(--cat-dev)",
    title: "Data Engineering & Pipelines",
    pitch:
      "Reliable data infrastructure — ETL pipelines, scrapers, and database schemas that power your analytics and product features.",
    deliverables: [
      "Web scraping pipelines (Selenium, BeautifulSoup)",
      "ETL / ELT design with PostgreSQL and cloud targets",
      "IoT / MQTT data ingestion and storage",
      "Data quality validation and monitoring",
      "API data integration and scheduled sync jobs",
    ],
    cta: "Build a pipeline",
  },
  {
    icon: FlaskConical,
    color: "var(--cat-research)",
    title: "Research & Statistical Analysis",
    pitch:
      "Rigorous quantitative analysis for academic, NGO, and impact-focused teams — from RCT evaluation to predictive modelling.",
    deliverables: [
      "Causal inference and ITT / ATT estimation",
      "Randomised control trial (RCT) analysis",
      "Predictive modelling with scikit-learn (AUC, F1, calibration)",
      "Survey and experimental data cleaning",
      "Peer-review-ready analysis scripts and reproducible notebooks",
    ],
    cta: "Discuss a study",
  },
  {
    icon: GraduationCap,
    color: "var(--cat-auto)",
    title: "Data Training & Consulting",
    pitch:
      "Upskill your team or get expert eyes on your data strategy — workshops, code reviews, and advisory engagements.",
    deliverables: [
      "Python and SQL workshops for non-engineering teams",
      "Data strategy and tooling audits",
      "Portfolio review and mentoring for junior analysts",
      "Code review and architecture consultation",
      "One-on-one coaching sessions",
    ],
    cta: "Book a session",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery call",
    desc: "30 minutes. You explain the problem; I ask the questions that expose what data you actually have and what outcome you need.",
  },
  {
    step: "02",
    title: "Scoped proposal",
    desc: "A plain-English document: what gets built, what is out of scope, timeline, and how success will be measured.",
  },
  {
    step: "03",
    title: "Build in sprints",
    desc: "Work delivered in checkpoints, not one big reveal at the end. You see progress, give feedback, and we adjust early.",
  },
  {
    step: "04",
    title: "Handover & documentation",
    desc: "You receive everything: code, data dictionaries, runbooks. Nothing locked to me. Your team can maintain it day one.",
  },
];

export default function ServicesPage() {
  return (
    <main id="main" className="pt-16">
      {/* Hero */}
      <section className="section bg-bg" aria-labelledby="services-heading">
        <div className="container-content max-w-3xl">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
              Services
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="services-heading" className="mt-3 text-text-primary">
              What I can build for you.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              I work with businesses, NGOs, and startups that need data and AI systems that actually
              run in production — not demos. Every engagement starts with a problem, not a
              technology.
            </p>
          </Reveal>
          <Reveal delay={0.14}>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Discuss your project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Service cards */}
      <section className="section bg-bg-subtle" aria-labelledby="service-list-heading">
        <div className="container-content">
          <h2 id="service-list-heading" className="sr-only">
            Service offerings
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Reveal key={svc.title} delay={i * 0.05}>
                  <article className="group flex flex-col rounded-xl border border-border bg-bg-elevated p-6 gap-5 hover:border-accent/30 transition-colors duration-200 h-full">
                    {/* Icon */}
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-lg shrink-0"
                      style={{ background: `color-mix(in srgb, ${svc.color} 15%, transparent)` }}
                    >
                      <Icon className="h-5 w-5" style={{ color: svc.color }} aria-hidden="true" />
                    </div>

                    {/* Title + pitch */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors duration-150">
                        {svc.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">{svc.pitch}</p>
                    </div>

                    {/* Deliverables */}
                    <ul className="flex flex-col gap-2 flex-1">
                      {svc.deliverables.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle2
                            className="mt-0.5 h-3.5 w-3.5 shrink-0"
                            style={{ color: svc.color }}
                            aria-hidden="true"
                          />
                          <span className="text-xs text-text-muted leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link
                      href={`/contact?service=${encodeURIComponent(svc.title)}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors group/link mt-auto pt-2"
                    >
                      {svc.cta}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="section bg-bg" aria-labelledby="process-heading">
        <div className="container-content">
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                Process
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 id="process-heading" className="mt-3 text-text-primary">
                How every engagement works.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-text-secondary leading-relaxed">
                No surprises, no scope creep. A repeatable process so you know exactly where we
                are at every stage.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="flex flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6">
                  <span
                    className="text-3xl font-mono font-bold leading-none"
                    style={{ color: "var(--accent-subtle)" }}
                    aria-hidden="true"
                  >
                    <span style={{ color: "var(--accent)" }}>{step.step}</span>
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary">{step.title}</h3>
                  <p className="text-xs text-text-muted leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trust signals */}
      <section className="section bg-bg-subtle" aria-labelledby="trust-heading">
        <div className="container-content">
          <Reveal>
            <h2 id="trust-heading" className="sr-only">
              Why clients work with me
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                stat: "462,885",
                label: "farmers in largest dataset analysed",
                note: "One Acre Fund 7-arm RCT",
              },
              {
                stat: "150+",
                label: "students trained in data skills",
                note: "SQI College of ICT",
              },
              {
                stat: "14-node",
                label: "production AI pipeline in operation",
                note: "ATS automation system",
              },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-bg-elevated p-6 text-center">
                  <p className="text-3xl font-mono font-bold text-accent">{item.stat}</p>
                  <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
                  <p className="mt-1 text-xs text-text-muted">{item.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="section bg-bg" aria-labelledby="services-cta-heading">
        <div className="container-content">
          <Reveal>
            <div
              className="relative rounded-2xl overflow-hidden border border-border p-10 text-center"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-subtle) 0%, var(--bg-elevated) 60%)",
              }}
            >
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
                aria-hidden="true"
              />
              <div className="relative">
                <h2 id="services-cta-heading" className="text-text-primary">
                  Not sure which service fits?
                </h2>
                <p className="mt-4 text-text-secondary leading-relaxed max-w-xl mx-auto">
                  Describe your problem and I will tell you what makes sense. No obligation. Most
                  projects become clear in one conversation.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    Send an inquiry
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  >
                    See past work
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
