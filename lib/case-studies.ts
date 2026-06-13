import type { Category, Status } from "@/lib/projects";

export interface HeroMetric {
  value: string;
  label: string;
}

export interface ArchStep {
  label: string;
  sub: string;
}

export interface ComponentRow {
  name: string;
  role: string;
}

export interface NamedBlock {
  title: string;
  body: string;
}

export interface ResultRow {
  metric: string;
  before: string;
  after: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  /** One-line outcome shown under the title. */
  tagline: string;
  role: string;
  timeline: string;
  status: Status;
  category: Category;
  stack: string[];
  githubUrl?: string;
  image?: string;
  /** SEO description, 150ch, written as ad copy with a metric. */
  metaDescription: string;
  /** 3 headline callouts for the hero band. */
  heroMetrics: HeroMetric[];
  tldr: { problem: string; built: string; result: string };
  /** Business context paragraphs. */
  context: string[];
  /** The specific, quantified pain. */
  problem: { intro: string; points: string[] };
  /** Methodology / why this approach over alternatives. */
  approach: { intro: string; points: NamedBlock[] };
  /** Architecture diagram: ordered pipeline steps + caption + component table. */
  architecture: {
    caption: string;
    steps: ArchStep[];
    components: ComponentRow[];
  };
  /** 2-4 key implementation decisions. */
  decisions: NamedBlock[];
  /** Honest obstacles + how solved. */
  challenges: NamedBlock[];
  /** Results: a Before/After table when measured, plus a framing note. */
  results: { intro: string; rows: ResultRow[]; note?: string };
  /** What I'd do differently. */
  lessons: string[];
  /** Roadmap snapshot. */
  future: string[];
}

export const caseStudies: CaseStudy[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // KORVI
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "korvi",
    title: "KORVI — WhatsApp-Native AI Sales Platform",
    tagline:
      "An AI sales agent that captures, qualifies, and closes leads entirely inside WhatsApp — built for how African SMEs actually sell.",
    role: "Founder & technical architect (end-to-end)",
    timeline: "2025 to present · in active build",
    status: "in-build",
    category: "ai",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Redis", "WhatsApp Cloud API", "GPT-4o"],
    metaDescription:
      "How I architected KORVI, a WhatsApp-native AI sales agent for African SMEs: lead capture, qualification, and closing in one channel. 105-ticket build.",
    heroMetrics: [
      { value: "105", label: "ticket build backlog" },
      { value: "1", label: "channel: WhatsApp" },
      { value: "Full-stack", label: "CTO-level architecture" },
    ],
    tldr: {
      problem:
        "African SMEs sell on WhatsApp but lose most leads to slow, manual, after-hours follow-up.",
      built:
        "An AI agent that lives in WhatsApp: it greets, qualifies, answers product questions, and books or closes, with a human handoff when needed.",
      result:
        "Architecture, data model, and a 105-ticket delivery backlog are complete; the agent core is in active build toward a pilot. [PILOT METRICS PENDING]",
    },
    context: [
      "In Nigeria and across much of Africa, WhatsApp is not a marketing afterthought, it is the storefront. SMEs run their entire sales motion through it: catalog shares, price negotiation, order confirmation, and payment coordination all happen in chat.",
      "The constraint is human bandwidth. A founder or a one-person sales team cannot answer every message within the few minutes it takes a buyer to lose interest or message a competitor. KORVI exists to make a small business respond like a staffed one, around the clock, in the channel its customers already trust.",
    ],
    problem: {
      intro:
        "The pain is concrete and repeats across every SME I studied:",
      points: [
        "Leads arrive at all hours; replies come whenever the owner is free, often too late to convert.",
        "Qualification is inconsistent. The same buyer gets a different experience depending on who replies and how busy they are.",
        "Context is lost between messages. Buyers repeat themselves, and follow-up depends on someone remembering to follow up.",
        "Tools built for this market are thin: most are broadcast blasters or rigid button-menus, not agents that can actually hold a sales conversation.",
      ],
    },
    approach: {
      intro:
        "I treated KORVI as a product, not a chatbot. The design goal was an agent that behaves like a trained salesperson and degrades gracefully to a human, never a dead-end menu.",
      points: [
        {
          title: "WhatsApp-first, not WhatsApp-also",
          body: "Every decision starts from the channel. State, latency, and message formatting are designed for WhatsApp Cloud API constraints rather than ported from a web widget.",
        },
        {
          title: "Agent with guardrails over free-form LLM",
          body: "GPT-4o drives the conversation, but inside a controlled state machine: defined stages (greet, qualify, recommend, handle objection, close, handoff) so the model stays on-task and on-brand.",
        },
        {
          title: "Human-in-the-loop by design",
          body: "The agent knows what it does not know. Low-confidence or high-value moments escalate to the owner with full context, instead of guessing.",
        },
        {
          title: "Ship in vertical slices",
          body: "A 105-ticket backlog breaks the platform into shippable increments, so a pilot can run on a real catalog before every feature is built.",
        },
      ],
    },
    architecture: {
      caption:
        "Inbound WhatsApp messages flow through the Cloud API into a stateful agent loop. Conversation state lives in Redis for speed; durable records live in PostgreSQL. GPT-4o reasons over retrieved business context and returns a staged response.",
      steps: [
        { label: "Buyer", sub: "WhatsApp message" },
        { label: "Cloud API", sub: "webhook ingress" },
        { label: "Agent core", sub: "stage state machine" },
        { label: "GPT-4o", sub: "reasoning + reply" },
        { label: "Owner", sub: "handoff + dashboard" },
      ],
      components: [
        { name: "WhatsApp Cloud API", role: "Inbound/outbound message transport and delivery receipts." },
        { name: "Agent core (Node + TypeScript)", role: "Stage state machine that orchestrates each conversation turn." },
        { name: "Redis", role: "Low-latency conversation state and rate limiting." },
        { name: "PostgreSQL", role: "Durable store for contacts, conversations, products, and orders." },
        { name: "GPT-4o", role: "Natural-language understanding and staged reply generation." },
        { name: "Owner console", role: "Live takeover, escalations, and catalog management." },
      ],
    },
    decisions: [
      {
        title: "State machine around the model, not the model around the state",
        body: "Letting an LLM free-run a sales conversation drifts and over-promises. KORVI constrains the model to an explicit stage at every turn, which keeps replies accurate, on-brand, and auditable, and makes the agent testable.",
      },
      {
        title: "Redis for turn state, Postgres for truth",
        body: "Conversation turn-state is read and written on every inbound message, so it sits in Redis for latency. Anything that must survive (contacts, orders, history) is written to PostgreSQL. The split keeps response time low without risking durability.",
      },
      {
        title: "Escalation as a first-class path",
        body: "Rather than bolt on a fallback, handoff to the owner is a designed stage with full conversation context attached. The agent is allowed to not know, which is what makes it trustworthy to deploy on a real customer base.",
      },
    ],
    challenges: [
      {
        title: "Keeping an LLM honest about price and availability",
        body: "A sales agent that invents a discount is worse than no agent. Pricing and stock answers are grounded in business data and gated by the state machine, so the model phrases facts it is given rather than generating them.",
      },
      {
        title: "Designing for spotty connectivity",
        body: "Buyers and owners are on mobile data. Message handling is built to tolerate out-of-order delivery and retries so a dropped connection does not corrupt conversation state.",
      },
    ],
    results: {
      intro:
        "KORVI is pre-pilot, so I report what is true today rather than invented traction. The build artifacts are real and verifiable:",
      rows: [
        { metric: "System architecture", before: "Concept", after: "Complete (data model + agent loop)" },
        { metric: "Delivery plan", before: "None", after: "105-ticket backlog" },
        { metric: "Agent core", before: "None", after: "In active build" },
        { metric: "Pilot conversion / response-time gains", before: "—", after: "[PENDING — measured at pilot]" },
      ],
      note: "Conversion, response-time, and revenue figures will be published from the pilot. I do not put numbers on this page until they are measured.",
    },
    lessons: [
      "Scoping the agent into explicit stages early made it far easier to reason about, test, and explain to non-technical stakeholders.",
      "A backlog is a product artifact, not overhead: the 105 tickets are the difference between a demo and a deployable system.",
      "For this market, the hard problem is trust and reliability under poor connectivity, not raw model capability.",
    ],
    future: [
      "Run the first pilot on a live SME catalog and publish measured conversion and response-time results.",
      "Add Paystack-based payment confirmation inside the conversation.",
      "Expand the owner console with analytics on lead source and drop-off stage.",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // LSWC WATER ANALYTICS
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "lswc-water-analytics",
    title: "LSWC Smart Water Distribution Analytics",
    tagline:
      "An IoT-to-dashboard pipeline that gave Lagos State Water Corporation real-time visibility into distribution across monitored zones.",
    role: "Data engineer & analyst",
    timeline: "Production deployment",
    status: "production",
    category: "data",
    stack: ["Python", "MQTT", "PostgreSQL", "Power BI", "Docker"],
    githubUrl: undefined,
    image: "/images/lswc-map.jpg",
    metaDescription:
      "How I built a real-time IoT analytics pipeline for Lagos State Water Corporation: MQTT sensors to PostgreSQL to Power BI across 3 distribution zones.",
    heroMetrics: [
      { value: "3", label: "distribution zones monitored" },
      { value: "MQTT", label: "real-time IoT ingest" },
      { value: "Live", label: "Power BI dashboard" },
    ],
    tldr: {
      problem:
        "A state water utility was distributing water across zones with no real-time visibility into flow, pressure, or loss.",
      built:
        "An end-to-end pipeline: MQTT sensor ingest, a Python processing layer, PostgreSQL storage, and a live Power BI dashboard for operations.",
      result:
        "Operations gained a single real-time view across monitored zones, replacing manual, after-the-fact reporting.",
    },
    context: [
      "Lagos State Water Corporation distributes water to one of the largest urban populations in Africa. Distribution at that scale leaks value in two ways: physical losses in the network, and decision losses when operators cannot see what is happening until long after it happens.",
      "The brief was not a research dashboard, it was an operations tool: ingest live sensor data, make it trustworthy, and put it in front of the people who run the network in a form they can act on.",
    ],
    problem: {
      intro:
        "Without instrumentation, the utility was effectively flying blind:",
      points: [
        "No real-time signal on flow and pressure, so anomalies were noticed late or not at all.",
        "Reporting was manual and retrospective, which is too slow to intervene in a distribution problem.",
        "Sensor data, where it existed, was not landing anywhere queryable or shared.",
      ],
    },
    approach: {
      intro:
        "I designed a conventional, robust telemetry pipeline rather than anything exotic. For an operations system, reliability and clarity beat novelty.",
      points: [
        {
          title: "MQTT for the sensor edge",
          body: "MQTT is the standard for constrained, intermittently connected IoT devices. It keeps the edge lightweight and tolerates the unreliable links that field sensors live on.",
        },
        {
          title: "A Python processing layer in the middle",
          body: "Raw telemetry is noisy. A Python service validates, cleans, and normalizes readings before they are trusted, so the dashboard never shows garbage.",
        },
        {
          title: "PostgreSQL as the queryable store",
          body: "Cleaned readings land in PostgreSQL, giving a single durable, queryable source that both the dashboard and any future analysis read from.",
        },
        {
          title: "Power BI for the operators",
          body: "The audience is utility operations, not engineers. Power BI puts live zone metrics in a familiar, shareable interface with no new tooling to learn.",
        },
        {
          title: "Docker for reproducible deployment",
          body: "Containerizing the services made the pipeline reproducible and portable across the environments it had to run in.",
        },
      ],
    },
    architecture: {
      caption:
        "Field sensors publish telemetry over MQTT. A Python service subscribes, validates and cleans each reading, and writes to PostgreSQL. Power BI reads from PostgreSQL to render a live operational dashboard across the monitored zones.",
      steps: [
        { label: "Sensors", sub: "flow / pressure" },
        { label: "MQTT broker", sub: "telemetry transport" },
        { label: "Python service", sub: "validate + clean" },
        { label: "PostgreSQL", sub: "queryable store" },
        { label: "Power BI", sub: "live dashboard" },
      ],
      components: [
        { name: "Field sensors", role: "Capture flow and pressure at monitored points." },
        { name: "MQTT broker", role: "Transports telemetry from constrained edge devices." },
        { name: "Python ingest service", role: "Subscribes, validates, cleans, and normalizes readings." },
        { name: "PostgreSQL", role: "Durable, queryable store of clean time-series data." },
        { name: "Power BI", role: "Real-time operational dashboard across zones." },
        { name: "Docker", role: "Reproducible packaging and deployment of services." },
      ],
    },
    decisions: [
      {
        title: "Validate at ingest, not at the dashboard",
        body: "Pushing cleaning into the ingest layer means the database only ever holds trustworthy readings. Every downstream consumer inherits clean data for free, instead of each re-implementing the same filters.",
      },
      {
        title: "MQTT over polling HTTP",
        body: "Field devices on unreliable links cannot afford chatty request/response. MQTT's lightweight pub/sub model fits intermittent connectivity and keeps the edge simple.",
      },
      {
        title: "Meet operators where they are",
        body: "Choosing Power BI over a bespoke web dashboard was deliberate: adoption depends on the tool being familiar and shareable inside the utility, not on it being technically impressive.",
      },
    ],
    challenges: [
      {
        title: "Noisy and intermittent sensor data",
        body: "Field telemetry drops out and spikes. The ingest layer handles gaps and outliers so the operational view stays stable and believable rather than flickering on every bad reading.",
      },
      {
        title: "Bridging field hardware and business reporting",
        body: "The pipeline had to connect two worlds that rarely meet: constrained IoT hardware and a corporate BI tool. The Python and PostgreSQL layer in the middle is what makes that bridge reliable.",
      },
    ],
    results: {
      intro:
        "The system moved the utility from retrospective, manual reporting to a live operational view:",
      rows: [
        { metric: "Visibility into distribution", before: "Manual, retrospective", after: "Real-time, per zone" },
        { metric: "Zones instrumented", before: "0", after: "3 monitored" },
        { metric: "Data destination", before: "Scattered / none", after: "Single PostgreSQL store" },
        { metric: "Operator interface", before: "Spreadsheets / reports", after: "Live Power BI dashboard" },
      ],
      note: "Loss-reduction and efficiency figures belong to the utility; this page reports the system capability delivered, not numbers I cannot independently verify.",
    },
    lessons: [
      "For an operations tool, the unglamorous choices (clean-at-ingest, a familiar dashboard) drive adoption more than the architecture diagram does.",
      "A small, reliable pipeline that people actually use beats a sophisticated one they do not trust.",
      "Instrumenting even a few zones changes the conversation from guesswork to evidence.",
    ],
    future: [
      "Extend instrumentation to additional distribution zones.",
      "Add anomaly alerting on flow and pressure thresholds.",
      "Layer historical analysis for loss-pattern detection over time.",
    ],
  },

  // ──────────────────────────────────────────────────────────────────────────
  // ATS PIPELINE
  // ──────────────────────────────────────────────────────────────────────────
  {
    slug: "ats-pipeline",
    title: "AI-Powered ATS Pipeline",
    tagline:
      "A 14-node automation that reads, scores, and ranks every CV against a role, turning a 14-hour weekly screening chore into a hands-off shortlist.",
    role: "Automation engineer",
    timeline: "Production",
    status: "production",
    category: "auto",
    stack: ["n8n", "GPT-4o", "Gmail API", "Google Sheets", "Webhooks"],
    githubUrl: "https://github.com/Ireolami/Applicant-Tracking-Sys",
    image: "/images/ATS.png",
    metaDescription:
      "How I built a 14-node n8n + GPT-4o pipeline that scores and ranks job applicants automatically, replacing 14 hours a week of manual CV screening.",
    heroMetrics: [
      { value: "14", label: "node n8n workflow" },
      { value: "14 hrs/wk", label: "manual screening removed" },
      { value: "GPT-4o", label: "consistent scoring" },
    ],
    tldr: {
      problem:
        "Manual CV screening consumed 14+ hours a week and scored candidates inconsistently from one reviewer to the next.",
      built:
        "A 14-node n8n pipeline that ingests applications, scores each CV against role criteria with GPT-4o, and writes a ranked shortlist to Google Sheets.",
      result:
        "Removed the weekly screening chore and replaced subjective triage with a consistent, criteria-based ranking.",
    },
    context: [
      "Early-stage hiring drowns in the first pass. Every open role pulls in a pile of CVs, and someone has to read all of them just to find the few worth a conversation. That someone is usually the person who can least afford the time.",
      "The goal was not to replace human judgment in hiring, it was to automate the mechanical triage that happens before judgment is even useful: reading every CV, checking it against the role, and ordering the pile.",
    ],
    problem: {
      intro:
        "The manual process had three specific failures:",
      points: [
        "It cost 14+ hours per week, time taken directly from higher-value work.",
        "Scoring drifted: the same CV could rank differently depending on reviewer fatigue and mood.",
        "There was no durable, comparable record of why each candidate was ranked where they were.",
      ],
    },
    approach: {
      intro:
        "I built this as a no-database automation on purpose. The whole point was to remove work, not to stand up infrastructure someone then has to maintain.",
      points: [
        {
          title: "n8n as the orchestrator",
          body: "A visual 14-node workflow makes the pipeline legible and editable by non-engineers. Each node does one thing, so the logic is easy to audit and adjust per role.",
        },
        {
          title: "GPT-4o as the scorer, with a rubric",
          body: "Each CV is scored against explicit role criteria rather than a vague 'is this good'. The rubric is what makes the output consistent and defensible.",
        },
        {
          title: "Google Sheets as the interface",
          body: "Recruiters already live in spreadsheets. The ranked shortlist lands in Sheets, so there is no new tool to adopt and the output is instantly sortable and shareable.",
        },
        {
          title: "Webhook + Gmail ingestion",
          body: "Applications enter the pipeline automatically via webhook and the Gmail API, so the workflow runs on arrival with no manual kickoff.",
        },
      ],
    },
    architecture: {
      caption:
        "An application arrives by email or webhook and triggers the n8n workflow. The CV is parsed and passed to GPT-4o, which scores it against the role rubric. The ranked result is appended to a Google Sheet as a live shortlist.",
      steps: [
        { label: "Application", sub: "email / webhook" },
        { label: "n8n trigger", sub: "ingest + parse CV" },
        { label: "GPT-4o", sub: "score vs rubric" },
        { label: "Ranking", sub: "order candidates" },
        { label: "Google Sheets", sub: "live shortlist" },
      ],
      components: [
        { name: "Gmail API / Webhook", role: "Captures incoming applications and triggers the run." },
        { name: "n8n workflow (14 nodes)", role: "Orchestrates parsing, scoring, ranking, and output." },
        { name: "GPT-4o", role: "Scores each CV against explicit role criteria." },
        { name: "Google Sheets", role: "Ranked, shareable shortlist that recruiters work from." },
      ],
    },
    decisions: [
      {
        title: "A rubric, not vibes",
        body: "The model scores against named, role-specific criteria instead of an open-ended quality judgment. This is what converts an LLM from a novelty into a consistent screening tool, and it makes every score explainable.",
      },
      {
        title: "No database, by design",
        body: "Sheets is the store and the UI. For a single-team automation, adding a database would add maintenance burden for no user-facing benefit. Ruthless simplicity was the right call.",
      },
      {
        title: "Keep a human at the end",
        body: "The pipeline ranks; it does not hire. The output is a shortlist that a person reviews, which keeps accountability with the recruiter and the automation in its lane.",
      },
    ],
    challenges: [
      {
        title: "Getting consistent structure out of unstructured CVs",
        body: "CVs arrive in wildly different formats. The parsing and prompting steps had to normalize them enough that scoring compared like with like rather than rewarding nicely formatted documents.",
      },
      {
        title: "Tuning the rubric to match real hiring intent",
        body: "An automated score is only useful if it agrees with what the hiring team actually values. The rubric needed iteration against real decisions to be trusted.",
      },
    ],
    results: {
      intro:
        "The automation replaced the weekly screening chore with a consistent, hands-off ranking:",
      rows: [
        { metric: "Weekly screening time", before: "14+ hrs/week", after: "Effectively zero" },
        { metric: "Scoring consistency", before: "Reviewer-dependent", after: "Single rubric, every CV" },
        { metric: "Shortlist creation", before: "Manual", after: "Automatic on arrival" },
        { metric: "Audit trail", before: "None", after: "Scored record per candidate" },
      ],
      note: "The 14-hour figure is the screening load this workflow removed. Source is on GitHub.",
    },
    lessons: [
      "The leverage was in the rubric, not the model: a clear scoring spec did more for quality than any prompt tweak.",
      "Choosing tools the team already uses (Sheets) mattered more for adoption than the sophistication of the pipeline.",
      "Automating the mechanical first pass freed human attention for the part of hiring that actually needs a human.",
    ],
    future: [
      "Add per-role rubric templates so new openings configure in minutes.",
      "Surface scoring rationale alongside each rank for faster review.",
      "Add a feedback loop so recruiter overrides refine future scoring.",
    ],
  },
];

export const caseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find((c) => c.slug === slug);

export const caseStudySlugs = caseStudies.map((c) => c.slug);
