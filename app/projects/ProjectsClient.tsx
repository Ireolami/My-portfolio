"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { type Project, type Category } from "@/lib/projects";
import { ProjectCard } from "@/components/home/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

type Filter = "all" | Category;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "ai", label: "AI & Agents" },
  { value: "data", label: "Data Science" },
  { value: "auto", label: "Automation" },
  { value: "dev", label: "Product / Dev" },
  { value: "research", label: "Research" },
];

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

export function ProjectsClient({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Page header */}
      <section className="section bg-bg pb-0">
        <div className="container-content">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
              Work
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-3 text-text-primary">
              Projects &amp; case studies
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Data pipelines, AI agents, automation workflows, and full-stack products.
              Every project here started with a real problem.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter pills */}
      <div className="sticky top-16 z-20 border-b border-border bg-bg/80 backdrop-blur-xl">
        <div className="container-content">
          <div
            className="flex items-center gap-2 overflow-x-auto py-4 scrollbar-none"
            role="tablist"
            aria-label="Filter projects by category"
          >
            {filters.map((f) => (
              <button
                key={f.value}
                role="tab"
                aria-selected={active === f.value}
                onClick={() => setActive(f.value)}
                className={cn(
                  "relative flex-shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150",
                  "focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2",
                  active === f.value
                    ? "text-white"
                    : "text-text-secondary hover:text-text-primary hover:bg-bg-subtle"
                )}
              >
                {active === f.value && (
                  <m.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 500, damping: 35 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project grid */}
      <section className="section bg-bg" aria-live="polite" aria-label="Filtered projects">
        <div className="container-content">
          <AnimatePresence mode="wait">
            <m.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
            >
              {filtered.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-center">
                  <p className="text-text-muted text-lg">No projects in this category yet.</p>
                  <button
                    onClick={() => setActive("all")}
                    className="mt-4 text-sm text-accent hover:text-accent-hover underline underline-offset-2"
                  >
                    View all projects
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((project, i) => (
                    <m.div
                      key={project.slug}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.25, delay: i * 0.05, ease: EASE_OUT }}
                    >
                      <ProjectCard {...project} />
                    </m.div>
                  ))}
                </div>
              )}
            </m.div>
          </AnimatePresence>

          {/* Count */}
          <p className="mt-8 text-sm text-text-muted">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            {active !== "all" && (
              <> in <span className="text-text-secondary">{filters.find(f => f.value === active)?.label}</span></>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
