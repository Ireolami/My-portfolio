import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "About",
  description:
    "Olayele Gbenga Awujoola — Data Analyst and AI Automation Engineer based in Lagos, Nigeria. Founder of HMC Tech, builder of KORVI, researcher, teacher.",
};

const timeline = [
  {
    year: "2024–present",
    role: "Founder & CTO",
    org: "HMC Tech",
    desc: "Architecting KORVI, a WhatsApp-native AI sales platform. Leading product, engineering, and GTM for African SME markets.",
    icon: Briefcase,
  },
  {
    year: "2023–present",
    role: "Data Science Instructor",
    org: "SQI College of ICT",
    desc: "Designed and delivered a hands-on data skills curriculum. 150+ students trained in Python, SQL, and data visualisation.",
    icon: BookOpen,
  },
  {
    year: "2023",
    role: "Data Analyst",
    org: "E-Know Consult",
    desc: "Built analytics pipelines and automated reporting workflows that reduced manual effort across client engagements.",
    icon: Briefcase,
  },
  {
    year: "2022–present",
    role: "B.Sc. Computer Science",
    org: "Federal University Oye-Ekiti (FUOYE)",
    desc: "In-progress undergraduate degree, focusing on data systems and applied machine learning.",
    icon: GraduationCap,
  },
  {
    year: "2019",
    role: "HND Biochemistry",
    org: "Rufus Giwa Polytechnic",
    desc: "Foundation in analytical thinking, experimental design, and scientific method — now applied to data engineering.",
    icon: GraduationCap,
  },
];

const skills = [
  {
    area: "Data & Analytics",
    items: ["Python", "SQL", "Pandas", "Scikit-learn", "Power BI", "Matplotlib", "Tableau"],
  },
  {
    area: "AI & Automation",
    items: ["GPT-4o", "LangChain", "n8n", "RAG pipelines", "Prompt engineering", "WhatsApp API"],
  },
  {
    area: "Engineering",
    items: ["TypeScript", "Node.js", "PostgreSQL", "Docker", "MQTT", "REST APIs", "Git"],
  },
  {
    area: "Research",
    items: ["Causal inference", "RCT analysis", "Chi-square tests", "Logistic regression", "GEE"],
  },
];

export default function AboutPage() {
  return (
    <main id="main" className="pt-16">
      {/* Hero */}
      <section className="section bg-bg" aria-labelledby="about-hero-heading">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-start">
            {/* Photo column */}
            <Reveal>
              <div className="relative mx-auto max-w-sm lg:mx-0 lg:sticky lg:top-24">
                <div className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden shadow-2xl">
                  <Image
                    src="/images/profile.jpg"
                    alt="Olayele Gbenga Awujoola — Data Analyst and AI Automation Engineer, Lagos Nigeria"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 90vw, 400px"
                    priority
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                    style={{
                      background: "linear-gradient(to top, rgba(10,10,11,0.7), transparent)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Location badge */}
                <div className="absolute -bottom-4 left-4 flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-3 py-2 shadow-xl backdrop-blur-sm">
                  <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span className="text-sm font-medium text-text-primary">Lagos, Nigeria</span>
                </div>

                {/* Accent glow */}
                <div
                  className="absolute -z-10 -bottom-6 -left-6 h-48 w-48 rounded-full opacity-15 blur-2xl"
                  style={{ background: "var(--accent)" }}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Text column */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                  About me
                </span>
              </Reveal>

              <Reveal delay={0.05}>
                <h1 id="about-hero-heading" className="text-text-primary">
                  Olayele Gbenga Awujoola
                </h1>
              </Reveal>

              <Reveal delay={0.08}>
                <p className="text-lg text-text-secondary font-medium">
                  Data Analyst · AI Automation Engineer · Founder, HMC Tech
                </p>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
                  <p>
                    I started in biochemistry — pipettes and reaction kinetics — then followed the
                    data all the way into software. Today I build AI systems and data pipelines that
                    solve real problems for real businesses, starting with Africa.
                  </p>
                  <p>
                    At HMC Tech I lead the architecture of KORVI, a WhatsApp-native AI sales
                    platform designed for the SME markets that power African economies. Every design
                    decision accounts for low bandwidth, feature-phone users, and the reality that
                    most African business runs through WhatsApp, not web portals.
                  </p>
                  <p>
                    I have analysed data at scale — 462,885 farmers in a 7-arm RCT — and at the
                    ground level, building IoT pipelines for Lagos State Water Corporation to track
                    distribution losses across three zones. Both extremes demand the same discipline:
                    clean data, honest analysis, and conclusions you can actually defend.
                  </p>
                  <p>
                    I teach at SQI College of ICT because the biggest bottleneck in African tech is
                    not funding — it is skilled engineers. 150+ students have gone through my data
                    skills courses. I write about mother-tongue education, African tech, and the
                    craft of building reliable systems.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/projects"
                    className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
                  >
                    See my work
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                  >
                    Get in touch
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section bg-bg-subtle" aria-labelledby="skills-heading">
        <div className="container-content">
          <Reveal>
            <SectionHeading
              id="skills-heading"
              eyebrow="Skills"
              heading="What I work with"
              sub="Tools I reach for daily across data, AI, and engineering."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, i) => (
              <Reveal key={group.area} delay={i * 0.05}>
                <div className="rounded-xl border border-border bg-bg-elevated p-6 flex flex-col gap-4">
                  <h3 className="text-sm font-mono font-semibold text-accent uppercase tracking-wide">
                    {group.area}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-sm text-text-secondary">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section bg-bg" aria-labelledby="timeline-heading">
        <div className="container-content">
          <Reveal>
            <SectionHeading
              id="timeline-heading"
              eyebrow="Experience"
              heading="How I got here"
              sub="From biochemistry lab to AI systems — the path was not straight, but every stop taught me something."
            />
          </Reveal>

          <ol className="mt-12 relative border-l border-border" aria-label="Career timeline">
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.role + item.org} delay={i * 0.06}>
                  <li className="mb-10 ml-6">
                    <span
                      className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-bg-elevated"
                      aria-hidden="true"
                    >
                      <Icon className="h-3 w-3 text-accent" />
                    </span>
                    <time className="mb-1 text-xs font-mono text-text-muted">{item.year}</time>
                    <h3 className="text-base font-semibold text-text-primary">
                      {item.role}{" "}
                      <span className="text-text-secondary font-normal">· {item.org}</span>
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section bg-bg-subtle" aria-labelledby="philosophy-heading">
        <div className="container-content max-w-3xl">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
              Philosophy
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 id="philosophy-heading" className="mt-3 text-text-primary">
              How I think about the work
            </h2>
          </Reveal>

          <div className="mt-8 flex flex-col gap-6 text-text-secondary leading-relaxed">
            {[
              {
                heading: "Start with the problem, not the tool.",
                body: "Every engagement starts with 'what decision does this data need to enable?' The model, the pipeline, the dashboard come after. A technically elegant solution to the wrong question ships nothing.",
              },
              {
                heading: "Build for the constraint.",
                body: "African markets run on intermittent power, 2G data, and feature-phone WhatsApp. If a system assumes stable infrastructure, it fails at the worst time. I design for the worst connection, not the median.",
              },
              {
                heading: "Honest numbers, always.",
                body: "I have seen dashboards built to confirm conclusions the client already held. I do not build those. If the data says the intervention did not work, I say so and help figure out why.",
              },
            ].map((block, i) => (
              <Reveal key={block.heading} delay={i * 0.06}>
                <div className="rounded-xl border border-border bg-bg-elevated p-6">
                  <h3 className="text-base font-semibold text-text-primary mb-2">
                    {block.heading}
                  </h3>
                  <p className="text-sm leading-relaxed">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-bg" aria-labelledby="about-cta-heading">
        <div className="container-content text-center max-w-2xl mx-auto">
          <Reveal>
            <h2 id="about-cta-heading" className="text-text-primary">
              Let&apos;s work together.
            </h2>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Open to Data / AI roles, consulting projects, and collaborations that solve real
              problems. Remote-friendly globally.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                Get in touch
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
              >
                View projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
