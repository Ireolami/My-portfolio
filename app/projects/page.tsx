import type { Metadata } from "next";
import { ProjectsClient } from "./ProjectsClient";
import { allProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Data pipelines, AI agents, automation workflows, and full-stack products — 8 projects across AI, data science, automation, and product engineering.",
};

export default function ProjectsPage() {
  return (
    <main id="main" className="pt-16">
      <ProjectsClient projects={allProjects} />
    </main>
  );
}
