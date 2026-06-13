"use client";

import { Download, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import { m } from "framer-motion";

const resumes = [
  {
    role: "Data Analyst",
    file: "/resumes/data-analyst.pdf",
    filename: "Olayele-Awujoola-Data-Analyst.pdf",
    color: "#3b82f6",
    colorSubtle: "rgba(59,130,246,0.1)",
    description: "SQL, Python, Power BI & Tableau, statistical modelling, business intelligence reporting.",
    tags: ["SQL", "Python", "Power BI", "Statistics"],
  },
  {
    role: "Data Engineer",
    file: "/resumes/data-engineer.pdf",
    filename: "Olayele-Awujoola-Data-Engineer.pdf",
    color: "#10b981",
    colorSubtle: "rgba(16,185,129,0.1)",
    description: "ETL/ELT pipelines, IoT/MQTT data infrastructure, cloud data warehousing, real-time streaming.",
    tags: ["ETL", "MQTT", "Cloud", "Pipelines"],
  },
  {
    role: "AI & Automation Engineer",
    file: "/resumes/ai-automation-engineer.pdf",
    filename: "Olayele-Awujoola-AI-Automation-Engineer.pdf",
    color: "#8b5cf6",
    colorSubtle: "rgba(139,92,246,0.1)",
    description: "LLM agents, n8n workflow automation, WhatsApp AI, RAG pipelines, GPT-4o integrations.",
    tags: ["LLMs", "n8n", "Agents", "RAG"],
  },
  {
    role: "Data & Automation Analyst",
    file: "/resumes/data-automation-analyst.pdf",
    filename: "Olayele-Awujoola-Data-Automation-Analyst.pdf",
    color: "#14b8a6",
    colorSubtle: "rgba(20,184,166,0.1)",
    description: "Hybrid analytical + automation focus — data insights paired with workflow automation and process optimisation.",
    tags: ["Analytics", "Automation", "Process", "Insights"],
  },
  {
    role: "GTM & B2B Automation",
    file: "/resumes/gtm-b2b-automation.pdf",
    filename: "Olayele-Awujoola-GTM-B2B-Automation.pdf",
    color: "#f97316",
    colorSubtle: "rgba(249,115,22,0.1)",
    description: "Go-to-market automation, CRM orchestration, lead scoring pipelines, sales workflow engineering.",
    tags: ["GTM", "CRM", "Lead Scoring", "Sales Ops"],
  },
];

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Record<string, string> }) => void;
  }
}

function trackDownload(role: string) {
  if (typeof window !== "undefined" && window.plausible) {
    window.plausible("resume_download", { props: { role } });
  }
}

export default function ResumePage() {
  return (
    <main id="main" className="min-h-screen pt-24 pb-24">
      <div className="container-content">
        {/* Page header */}
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <FileText className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent uppercase tracking-widest">Resume</span>
          </div>
          <h1 className="mb-4">Download My CV</h1>
          <p className="text-text-secondary text-lg leading-relaxed">
            Five role-specific versions — each tailored to a different lens, not the same document renamed. Pick the one that matches your opening.
          </p>
        </m.div>

        {/* Resume cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {resumes.map((resume, i) => (
            <m.div
              key={resume.role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className={`relative bg-bg-elevated border border-border rounded-xl overflow-hidden card-shadow group flex flex-col ${
                i === 3 ? "lg:col-start-1" : ""
              } ${i === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}`}
            >
              {/* Color stripe */}
              <div
                className="h-1 w-full flex-shrink-0"
                style={{ backgroundColor: resume.color }}
              />

              <div className="flex flex-col flex-1 p-6 gap-5">
                {/* Role icon + title */}
                <div>
                  <div
                    className="inline-flex items-center justify-center h-10 w-10 rounded-lg mb-3 transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: resume.colorSubtle }}
                  >
                    <FileText className="h-5 w-5" style={{ color: resume.color }} />
                  </div>
                  <h2 className="text-lg font-semibold text-text-primary leading-snug">
                    {resume.role}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {resume.description}
                </p>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-1.5">
                  {resume.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block text-xs font-medium px-2.5 py-1 rounded-full border"
                      style={{
                        color: resume.color,
                        borderColor: resume.colorSubtle,
                        backgroundColor: resume.colorSubtle,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Download button */}
                <a
                  href={resume.file}
                  download={resume.filename}
                  onClick={() => trackDownload(resume.role)}
                  className="mt-1 inline-flex items-center justify-center gap-2 h-10 px-4 rounded-lg text-sm font-semibold transition-all duration-150 active:scale-95 focus-visible:outline-accent focus-visible:outline-2 focus-visible:outline-offset-2"
                  style={{
                    backgroundColor: resume.color,
                    color: "#ffffff",
                    boxShadow: `0 2px 12px ${resume.colorSubtle}`,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "brightness(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.filter = "";
                  }}
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </a>
              </div>
            </m.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 rounded-xl border border-border bg-bg-subtle"
        >
          <div className="flex-1">
            <p className="font-semibold text-text-primary mb-0.5">Prefer to talk first?</p>
            <p className="text-sm text-text-secondary">Book a 20-min intro call — no prep needed.</p>
          </div>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 nav-btn-primary flex-shrink-0"
          >
            Book a Call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </m.div>
      </div>
    </main>
  );
}
