"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Chip, StatusDot, StackChip } from "@/components/ui/Chip";
import type { Project, Category } from "@/lib/projects";

type ProjectCardProps = Omit<Project, "shortTitle" | "demoUrl"> & {
  visualBg?: string;
  image?: string;
};

const categoryAccent: Record<Category, string> = {
  ai: "var(--cat-ai)",
  data: "var(--cat-data)",
  auto: "var(--cat-auto)",
  dev: "var(--cat-dev)",
  research: "var(--cat-research)",
};

export function ProjectCard({
  title,
  problem,
  solution,
  category,
  status,
  metrics,
  stack,
  slug,
  githubUrl,
  featured = false,
  visualBg,
  image,
  caseStudy = false,
}: ProjectCardProps) {
  const accent = categoryAccent[category];

  return (
    <m.article
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className={cn(
        "group relative flex flex-col rounded-xl border border-border bg-bg-elevated overflow-hidden card-shadow",
        "hover:border-accent/30 transition-colors duration-200",
        featured && "md:flex-row"
      )}
    >
      {/* Border glow sweep on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), ${accent}10, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Visual placeholder */}
      <div
        className={cn(
          "relative flex-shrink-0 overflow-hidden",
          featured ? "h-64 md:h-auto md:w-96" : "h-48"
        )}
        style={{
          background:
            visualBg ??
            `linear-gradient(135deg, ${accent}18 0%, var(--bg-subtle) 60%, ${accent}08 100%)`,
        }}
      >
        {/* Grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(${accent}40 1px, transparent 1px), linear-gradient(90deg, ${accent}40 1px, transparent 1px)`,
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />

        {/* Category color stripe */}
        <div
          className="absolute bottom-0 left-0 right-0 h-0.5"
          style={{ backgroundColor: accent }}
          aria-hidden="true"
        />

        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono text-text-muted opacity-40">[visual pending]</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2">
          <Chip label={category.toUpperCase()} category={category} />
          <StatusDot status={status} />
        </div>

        {/* Title */}
        <div>
          <h3 className="text-text-primary font-display group-hover:text-accent transition-colors duration-150">
            {title}
          </h3>
        </div>

        {/* Problem / solution */}
        <div className="flex flex-col gap-1.5 text-sm text-text-secondary">
          <p>
            <span className="text-text-muted font-mono text-xs mr-2">Problem</span>
            {problem}
          </p>
          <p>
            <span className="text-text-muted font-mono text-xs mr-2">Built</span>
            {solution}
          </p>
        </div>

        {/* Metric chips */}
        <div className="flex flex-wrap gap-2">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="rounded-md border border-border bg-bg-subtle px-2.5 py-1"
            >
              <span className="text-xs font-mono font-bold text-text-primary">{m.value}</span>
              <span className="ml-1 text-xs text-text-muted">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Stack */}
        <div className="flex flex-wrap gap-1.5">
          {stack.map((tech) => (
            <StackChip key={tech} label={tech} />
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-3 pt-1 mt-auto">
          {caseStudy ? (
            <Link
              href={`/projects/${slug}`}
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-150",
                "text-text-secondary hover:text-accent",
                "group/link"
              )}
            >
              Read case study
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
            </Link>
          ) : githubUrl ? (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-medium transition-all duration-150",
                "text-text-secondary hover:text-accent",
                "group/link"
              )}
            >
              <Github className="h-4 w-4" />
              View on GitHub
              <ArrowRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover/link:translate-x-1" />
            </Link>
          ) : (
            <span className="text-sm text-text-muted">Case study coming soon</span>
          )}

          {caseStudy && githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on GitHub`}
              className="ml-auto text-text-muted hover:text-text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>
    </m.article>
  );
}
