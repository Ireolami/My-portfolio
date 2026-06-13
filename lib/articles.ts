export type ArticleCategory = "research" | "ai" | "data" | "education" | "engineering";
export type ArticleType = "publication" | "essay" | "tutorial" | "opinion";

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  type: ArticleType;
  date: string; // ISO date string e.g. "2024-03-15"
  readingTime?: string; // e.g. "8 min read"
  externalUrl?: string; // if hosted outside this site
  tags?: string[];
  featured?: boolean;
  draft?: boolean;
}

export const articles: Article[] = [
  // ── PUBLISHED EXTERNAL ───────────────────────────────────────────────────
  {
    slug: "umyu-scientifica-publication",
    title: "Antibacterial Activity and In Silico Molecular Prediction of Snake Venoms (Bitis arietans and Naja nigricollis) Against Some Clinical Bacterial Isolates",
    excerpt:
      "Investigating the antibacterial activity of crude venoms from Puff adder and Spitting cobra against multidrug-resistant gram-positive and gram-negative bacterial strains — using antibacterial screening, scanning electron microscopy, and molecular docking. Puff adder venom showed stronger activity than tested antibiotics, with an MIC of 8 g/ml against Staphylococcus aureus ATCC.",
    category: "research",
    type: "publication",
    date: "2022-01-01",
    readingTime: "Peer-reviewed paper",
    externalUrl: "https://publications.umyu.edu.ng/scientifica/index.php/usci/article/view/469",
    tags: ["Biochemistry", "Microbiology", "Snake Venom", "Molecular Docking", "Antibacterial", "UMYU Scientifica"],
    featured: true,
  },

  // ── UPCOMING / DRAFTS ────────────────────────────────────────────────────
  {
    slug: "why-african-businesses-run-on-whatsapp",
    title: "Why African Businesses Run on WhatsApp — and What That Means for AI",
    excerpt:
      "Most SaaS products assume a web browser and a stable internet connection. African SMEs assume WhatsApp. Building for that reality changes everything about product design.",
    category: "ai",
    type: "essay",
    date: "2025-07-01",
    readingTime: "6 min read",
    tags: ["African Tech", "AI", "Product Design", "WhatsApp"],
    featured: true,
    draft: true,
  },
  {
    slug: "honest-data-analysis",
    title: "Honest Data Analysis: What I Learned from a 462,885-Row RCT",
    excerpt:
      "Running a causal inference analysis on nearly half a million rows teaches you one thing fast: the data will not cooperate with your assumptions. Here is how to stop fighting it.",
    category: "data",
    type: "essay",
    date: "2025-07-15",
    readingTime: "8 min read",
    tags: ["Data Science", "Causal Inference", "Research", "Python"],
    draft: true,
  },
  {
    slug: "building-for-low-bandwidth",
    title: "Engineering for Low Bandwidth: Lessons from Building in Lagos",
    excerpt:
      "When your users are on 2G and your competitor's app assumes fibre, you redesign the product or you lose. The constraints that make African markets hard make your engineering better.",
    category: "engineering",
    type: "essay",
    date: "2025-08-01",
    readingTime: "7 min read",
    tags: ["Engineering", "African Tech", "Performance"],
    draft: true,
  },
  {
    slug: "mother-tongue-education-data",
    title: "The Data Argument for Mother-Tongue Education in Nigeria",
    excerpt:
      "Children learn to read faster in their first language. The evidence is not ambiguous. Here is what the research says and why Nigerian education policy keeps ignoring it.",
    category: "education",
    type: "opinion",
    date: "2025-08-15",
    readingTime: "10 min read",
    tags: ["Education", "Nigeria", "Research", "Language"],
    draft: true,
  },
  {
    slug: "n8n-vs-custom-code",
    title: "n8n vs Custom Code: When to Use Each for AI Automation",
    excerpt:
      "n8n is not a toy and it is not a replacement for real engineering. After building 14-node production pipelines in both, here is the framework I use to decide.",
    category: "ai",
    type: "tutorial",
    date: "2025-09-01",
    readingTime: "9 min read",
    tags: ["n8n", "AI Automation", "Engineering", "Tutorial"],
    draft: true,
  },
];

export const publishedArticles = articles.filter((a) => !a.draft);
export const draftArticles = articles.filter((a) => a.draft);
export const featuredArticles = articles.filter((a) => a.featured);
export const allArticles = articles;
