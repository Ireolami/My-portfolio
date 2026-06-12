import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "KORVI — WhatsApp-Native AI Sales Platform",
    problem: "African SMEs lose 60%+ of leads to slow WhatsApp follow-up.",
    solution: "End-to-end AI sales agent: lead capture, qualification, and closing — all in WhatsApp.",
    category: "ai" as const,
    status: "in-build" as const,
    metrics: [
      { value: "105", label: "ticket backlog" },
      { value: "WhatsApp", label: "native" },
      { value: "Full-stack", label: "CTO architecture" },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "WhatsApp API", "GPT-4o", "Redis"],
    slug: "korvi",
    featured: true,
  },
  {
    title: "LSWC Smart Water Distribution Analytics",
    problem: "Lagos State Water Corp. had no visibility into distribution losses.",
    solution: "IoT/MQTT pipeline with real-time dashboard for 3 distribution zones.",
    category: "data" as const,
    status: "production" as const,
    metrics: [
      { value: "3", label: "zones monitored" },
      { value: "MQTT", label: "IoT pipeline" },
      { value: "Real-time", label: "dashboard" },
    ],
    stack: ["Python", "MQTT", "PostgreSQL", "Power BI", "Docker"],
    slug: "lswc-water-analytics",
  },
  {
    title: "AI-Powered ATS Pipeline",
    problem: "Manual CV screening took 14+ hrs/week with inconsistent scoring.",
    solution: "14-node n8n automation with GPT-4o scoring, Notion tracking, and auto-shortlisting.",
    category: "auto" as const,
    status: "production" as const,
    metrics: [
      { value: "14-node", label: "pipeline" },
      { value: "14 hrs/wk", label: "saved" },
      { value: "GPT-4o", label: "scoring" },
    ],
    stack: ["n8n", "GPT-4o", "Notion API", "Gmail API", "JavaScript"],
    slug: "ats-pipeline",
  },
];

export function FeaturedProjects() {
  return (
    <section
      className="section bg-bg"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="container-content">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <SectionHeading
              eyebrow="Featured Work"
              heading="Three systems that shipped"
              sub="Each one started with a real problem, not a tutorial."
              id="projects-heading"
            />
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors flex-shrink-0 group"
            >
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        {/* Featured (full-width) + two below */}
        <div className="flex flex-col gap-6">
          {/* Full-width featured card */}
          <Reveal delay={0.05}>
            <ProjectCard {...projects[0]} featured />
          </Reveal>

          {/* Two-column below */}
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
            {projects.slice(1).map((project) => (
              <RevealItem key={project.slug}>
                <ProjectCard {...project} />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
