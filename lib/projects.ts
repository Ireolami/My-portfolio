export type Category = "ai" | "data" | "auto" | "dev" | "research";
export type Status = "production" | "in-build" | "case-study" | "research";

export interface MetricChip {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  shortTitle: string;
  problem: string;
  solution: string;
  category: Category;
  status: Status;
  metrics: MetricChip[];
  stack: string[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string; // path relative to /public, e.g. "/images/ATS.png"
  featured?: boolean;
  caseStudy?: boolean; // has a full /projects/[slug] page
}

export const projects: Project[] = [
  // ── FEATURED (homepage) ──────────────────────────────────────────────────
  {
    slug: "korvi",
    title: "KORVI — WhatsApp-Native AI Sales Platform",
    shortTitle: "KORVI",
    problem: "African SMEs lose 60%+ of leads to slow WhatsApp follow-up.",
    solution:
      "End-to-end AI sales agent: lead capture, qualification, and closing — all in WhatsApp.",
    category: "ai",
    status: "in-build",
    metrics: [
      { value: "105", label: "ticket backlog" },
      { value: "WhatsApp", label: "native" },
      { value: "Full-stack", label: "CTO architecture" },
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "WhatsApp API", "GPT-4o", "Redis"],
    featured: true,
    caseStudy: true,
  },
  {
    slug: "lswc-water-analytics",
    title: "LSWC Smart Water Distribution Analytics",
    shortTitle: "LSWC Water Analytics",
    problem: "Lagos State Water Corp. had no visibility into distribution losses.",
    solution: "IoT/MQTT pipeline with real-time Power BI dashboard for 3 distribution zones.",
    category: "data",
    status: "production",
    metrics: [
      { value: "3", label: "zones monitored" },
      { value: "MQTT", label: "IoT pipeline" },
      { value: "Real-time", label: "dashboard" },
    ],
    stack: ["Python", "MQTT", "PostgreSQL", "Power BI", "Docker"],
    image: "/images/lswc-map.jpg",
    featured: true,
    caseStudy: true,
  },
  {
    slug: "ats-pipeline",
    title: "AI-Powered ATS Pipeline",
    shortTitle: "ATS Pipeline",
    problem: "Manual CV screening took 14+ hrs/week with inconsistent scoring.",
    solution:
      "14-node n8n automation: GPT-4o scores each CV against role criteria, writes ranked shortlist to Google Sheets.",
    category: "auto",
    status: "production",
    metrics: [
      { value: "14-node", label: "n8n workflow" },
      { value: "14 hrs/wk", label: "saved" },
      { value: "GPT-4o", label: "scoring" },
    ],
    stack: ["n8n", "GPT-4o", "Gmail API", "Google Sheets", "Webhooks"],
    githubUrl: "https://github.com/Ireolami/Applicant-Tracking-Sys",
    image: "/images/ATS.png",
    featured: true,
    caseStudy: true,
  },

  // ── FROM GITHUB ──────────────────────────────────────────────────────────
  {
    slug: "one-acre-fund-rct",
    title: "One Acre Fund RCT — SMS Nudge Causal Analysis",
    shortTitle: "One Acre Fund RCT",
    problem:
      "No rigorous evidence on whether SMS nudges increase smallholder farmer qualification rates.",
    solution:
      "Full causal inference analysis of a 7-arm RCT: ITT estimation, chi-square tests, logistic regression, and subgroup heterogeneity across 462,885 farmers.",
    category: "research",
    status: "research",
    metrics: [
      { value: "462,885", label: "farmers" },
      { value: "7", label: "treatment arms" },
      { value: "AUC ~0.85", label: "ML benchmark" },
    ],
    stack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Jupyter", "SciPy"],
    githubUrl: "https://github.com/Ireolami/Casual-Inference-Experimental-Analysis-",
    image: "/images/Casual.png",
    caseStudy: false,
  },
  {
    slug: "social-media-monitor",
    title: "Automated Social Media Intelligence Monitor",
    shortTitle: "Social Media Monitor",
    problem:
      "Businesses can't track customer sentiment across social platforms at scale without a team.",
    solution:
      "n8n pipeline that scrapes, processes, and classifies social comments into structured insights — alerts triggered on critical feedback.",
    category: "auto",
    status: "production",
    metrics: [
      { value: "Multi-platform", label: "monitoring" },
      { value: "Real-time", label: "alerts" },
      { value: "Automated", label: "sentiment tagging" },
    ],
    stack: ["n8n", "Python", "Webhooks", "Airtable", "Web Scraping"],
    githubUrl:
      "https://github.com/Ireolami/Automated-Social-Media-Monitoring-and-Client-s-Feedback-App",
    caseStudy: false,
  },
  {
    slug: "rag-chatbot",
    title: "RAG Pipeline — Document-Grounded Chatbot",
    shortTitle: "RAG Chatbot",
    problem:
      "Generic LLMs hallucinate when answering questions about proprietary or domain-specific documents.",
    solution:
      "Retrieval-Augmented Generation pipeline: documents chunked, embedded, and retrieved at query time — LLM answers only from verified source chunks.",
    category: "ai",
    status: "production",
    metrics: [
      { value: "RAG", label: "architecture" },
      { value: "n8n", label: "orchestration" },
      { value: "Grounded", label: "responses" },
    ],
    stack: ["n8n", "LLM", "Vector Store", "Embeddings", "Webhooks"],
    githubUrl: "https://github.com/Ireolami/Retrieval-Augmented-Generator-RAG-",
    image: "/images/RAG.png",
    caseStudy: false,
  },
  {
    slug: "hr-attrition-analysis",
    title: "HR Employee Attrition Analysis",
    shortTitle: "HR Attrition Analysis",
    problem:
      "HR teams lack data-driven signals on which employees are at risk of leaving before it happens.",
    solution:
      "End-to-end Python analytics: synthetic dataset generation, demographic visualisation, attrition prediction model, and automated report build.",
    category: "data",
    status: "case-study",
    metrics: [
      { value: "Predictive", label: "attrition model" },
      { value: "Python", label: "end-to-end" },
      { value: "Demographic", label: "segmentation" },
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter"],
    githubUrl: "https://github.com/Ireolami/hr-analysis",
    caseStudy: false,
  },
  {
    slug: "data-engineering-scraping-sql",
    title: "Data Engineering — Web Scraping, SQL & Multi-Market Analysis",
    shortTitle: "Data Engineering & SQL",
    problem:
      "Raw market data across e-commerce, finance, and real estate is scattered and unstructured — impossible to query or compare.",
    solution:
      "End-to-end data pipeline: Selenium and BeautifulSoup scraping across 6 markets (Jiji, Flipkart, Tesla, Melbourne housing, Nigerian poverty), cleaned and loaded into SQL with stored procedures, joins, and triggers for analysis.",
    category: "data",
    status: "case-study",
    metrics: [
      { value: "6+", label: "datasets" },
      { value: "Selenium", label: "scraping" },
      { value: "SQL + Python", label: "pipeline" },
    ],
    stack: ["Python", "Selenium", "BeautifulSoup", "Pandas", "PostgreSQL", "SQL", "Jupyter"],
    githubUrl: "https://github.com/Ireolami/Data-Analysis-Scrapping-and-DB-Management",
    caseStudy: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;
