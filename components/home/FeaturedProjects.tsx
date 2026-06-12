import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects } from "@/lib/projects";

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

        <div className="flex flex-col gap-6">
          {/* Full-width featured card */}
          <Reveal delay={0.05}>
            <ProjectCard {...featuredProjects[0]} featured />
          </Reveal>

          {/* Two-column below */}
          <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-2" stagger={0.08}>
            {featuredProjects.slice(1).map((project) => (
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
