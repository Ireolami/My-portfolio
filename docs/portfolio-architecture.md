# Portfolio Architecture & UX Blueprint
**Olayele "Ireola" Awujoola — Data, AI & Automation Engineer**
*Version 1.0 — Complete build specification. No further questions required.*

---

# PHASE 1 — STRATEGIC ANALYSIS

## 1.1 Personal Brand Analysis

Your raw profile reads as five job titles (Analyst, Scientist, Automation Engineer, Developer, Trader). Five titles dilute. The winning move is **one unifying thesis with five proof surfaces**:

> **Brand thesis: "I turn business problems into working systems — data pipelines, AI agents, and automations that ship and produce measurable outcomes."**

Why this works:
- Recruiters scan for *role fit* — the thesis maps cleanly onto Data Engineer, Analytics Engineer, AI/Automation Engineer postings.
- Founders and clients buy *outcomes*, not titles. "Working systems" + "measurable outcomes" is buyer language.
- It honestly reflects your strongest evidence: a production IoT water analytics system for a state utility, a 462k-farmer RCT analysis, a WhatsApp AI sales platform you architected end-to-end, and a portfolio of production n8n/Make automations.

**Positioning statement (use verbatim in hero and LinkedIn):**
"I build data and AI systems for real-world constraints — from IoT analytics for Lagos State Water Corporation to AI sales agents for African SMEs."

**Brand archetype:** The Builder-Analyst. Not "creative portfolio," not "corporate CV." The portfolio should *feel like a product* — because your claim is that you build products.

**De-emphasize:** Forex trading. It signals risk-taking and side-hustle energy to recruiters at Google/Stripe-tier companies. Keep the algorithmic-bot work, reframed as "quantitative systems / trading automation" inside a single project card, never in the hero or title.

## 1.2 Audience Analysis

| Audience | Time on site | What they scan for | Kill criteria | Primary CTA |
|---|---|---|---|---|
| Recruiter | 30–60 sec | Title match, stack keywords, years, location/remote, resume | Vague titles, no resume button, slow load | Download Resume |
| Hiring Manager | 3–5 min | Depth of one case study, code quality signals, GitHub | Tutorial-clone projects, no metrics | View Case Study → GitHub |
| Founder/CEO | 1–2 min | "Can this person ship?" — shipped products, speed | Pure-analyst vibes, no product evidence | Book a Call |
| Client (SME/consulting) | 2–3 min | "Has he solved MY problem?" — automation ROI proof | Jargon, no pricing/engagement clarity | WhatsApp / Book a Call |
| Investor (KORVI context) | 1 min | Founder credibility, traction signals | Job-seeker framing | About → KORVI page |
| Technical team | 5+ min | Architecture diagrams, real code, tradeoff reasoning | Buzzword soup | GitHub, Blog |

Key implication: **the homepage must let a recruiter exit satisfied in 45 seconds while letting a hiring manager go three layers deep.** This is a layered-disclosure architecture, not a long-scroll brochure.

## 1.3 What Recruiters Look For (priority order)
1. Role title match in the first viewport (hero must contain searchable keywords: Data Engineer, AI Automation, Python, SQL, Power BI).
2. One-click resume (PDF, ATS-clean, < 200KB).
3. Proof of seniority: metrics, scale numbers (462,885 farmers; 150+ students taught; 14-node production pipeline).
4. Recency: "Currently building KORVI" beats a stale portfolio.
5. Contact friction near zero: email visible, LinkedIn one click.

## 1.4 What Founders Look For
1. Shipping velocity — KORVI from architecture → backlog → frontend is the story. Show the timeline.
2. Full-stack ownership: architecture diagrams + working product screenshots.
3. Business literacy: competitive analysis, pricing thinking, GTM awareness — you have this; most engineers don't. Surface it.

## 1.5 What Clients Look For
1. "Before/after" framing: hours saved, errors eliminated, revenue recovered.
2. Familiar tools: WhatsApp, Paystack, n8n, Google Sheets — name them.
3. A clear engagement path: discovery call → scoped proposal → fixed deliverable.

## 1.6 Differentiation Analysis

Most data-analyst portfolios fail in identical ways: Titanic/Iris notebook projects, no production systems, no business outcomes, template designs. Your defensible differentiators:

1. **Production systems for real institutions** — Lagos State Water Corporation IoT pipeline. Almost no analyst portfolio has a state-utility deployment.
2. **Scale + rigor** — a 7-arm RCT causal analysis on 462,885 farmers. This is senior-DS-level methodology. Lead with it for DS roles.
3. **Founder evidence** — KORVI: full CTO-level architecture, 105-ticket backlog, brand, competitive moat analysis. This is the founder/investor magnet.
4. **African-market specificity** — WhatsApp-native, Paystack, USSD thinking, low-bandwidth design. Position as expertise, not limitation: "I build for the markets where the next billion users are."
5. **Published research** — peer-reviewed (UMYU Scientifica, ORCID) + bioinformatics interest. Rare credibility layer.

**Differentiation one-liner for the trust bar:** "Production systems. Published research. Real users."

---

# PHASE 2 — INFORMATION ARCHITECTURE

## 2.1 Sitemap

```
/                       Homepage (layered, single scroll + anchors)
/projects               Project index (filterable grid)
/projects/[slug]        Case study pages (6 flagship)
/about                  Story, philosophy, timeline, photo
/services               For clients: automation & AI consulting offers
/writing                Blog index
/writing/[slug]         Articles
/research               Publications + RCT analysis deep-dive
/resume                 HTML resume + PDF download (per-role variants)
/contact                Form + booking embed + WhatsApp link
/now                    "What I'm building now" (KORVI status) — optional v2
/uses                   Tools/stack page — optional v2
404                     Branded, with project links
```

Flat hierarchy, max depth 2. Every page reachable in ≤ 2 clicks.

## 2.2 Navigation Structure

**Desktop header (sticky, blur backdrop):**
`Logo/Name | Projects · Services · Writing · About | [Resume ↓] [Book a Call →]`

- Two CTAs in nav, visually distinct: Resume = secondary (recruiters), Book a Call = primary filled button (founders/clients).
- Active-section indicator on scroll (Linear-style underline that slides).

**Mobile:** hamburger → full-screen overlay, large type links, CTAs pinned at bottom of overlay.

**Footer nav:** full sitemap + socials + email + "Built with Next.js · Open source on GitHub" (credibility micro-signal).

## 2.3 User Journeys (diagram)

```
RECRUITER (45s)
Land → Hero (title match ✓) → Trust bar (logos/metrics) 
     → [Resume ↓] → ATS PDF → Email/LinkedIn → EXIT (converted)

HIRING MANAGER (4 min)
Land → Hero → scroll → Featured Project → /projects/water-analytics
     → Architecture diagram → Results → GitHub link → Code review
     → back → /contact → Email (converted)

FOUNDER (90s)
Land → Hero ("ship" language) → KORVI featured card → /projects/korvi
     → Timeline + screenshots → [Book a Call] → Calendly (converted)

CLIENT (2 min)
Land (often from LinkedIn post) → /services → ROI proof blocks
     → Pricing/engagement model → WhatsApp deep link (converted)

INVESTOR (60s)
LinkedIn → /about → founder narrative → KORVI case study → Email
```

## 2.4 Content Hierarchy (per-page weight)

```
HOMEPAGE          Hero 25% · Featured work 35% · Proof/social 15%
                  · Skills 10% · About teaser 5% · Writing 5% · Contact 5%
CASE STUDY        Problem 15% · Architecture 25% · Implementation 20%
                  · Results/metrics 25% · Lessons 15%
SERVICES          Pain points 30% · Offers 30% · Proof 25% · CTA 15%
```

Rule: **metrics appear above the fold on every page.**

## 2.5 Conversion Paths (diagram)

```
                    ┌────────────┐
   Google/LinkedIn →│  HOMEPAGE  │← Direct (resume link)
                    └─────┬──────┘
        ┌─────────────┬───┴────────┬──────────────┐
        ▼             ▼            ▼              ▼
   Resume PDF    Case Study    Services       Writing
        │             │            │              │
        ▼             ▼            ▼              ▼
   Email/LinkedIn  GitHub +    Book Call /   Newsletter
   outreach        Contact     WhatsApp      signup
        │             │            │              │
        ▼             ▼            ▼              ▼
   INTERVIEW      INTERVIEW    PAID WORK     AUDIENCE → later
                                              conversion
```

## 2.6 CTA Strategy

| Location | Primary CTA | Secondary | Rationale |
|---|---|---|---|
| Nav | Book a Call | Resume ↓ | Split recruiter/client paths immediately |
| Hero | View My Work (scroll) | Download Resume | Low-commitment first ask |
| End of each case study | Discuss a similar project → | View code on GitHub | Strike while impressed |
| Services | Book free 20-min audit | WhatsApp me | Local-market friction killer |
| Blog post end | Newsletter | Related project | Capture non-buyers |
| Footer | Email (mailto, visible address) | All socials | Last-chance catch-all |

CTA copy rules: verb-first, specific, never "Learn More." Use "See the architecture," "Read the case study," "Get the resume."

---

# PHASE 3 — HOMEPAGE ARCHITECTURE

Section order (single scroll): Hero → Trust Bar → Featured Projects (3) → Skills/Capabilities → Case Study Spotlight → About Teaser → Testimonials → Research & Writing → Open Source → Contact → Footer.
*(Experience lives on /about and /resume — recruiters get it via PDF; the homepage sells outcomes, not chronology.)*

### 3.1 Hero
- **Purpose:** 5-second comprehension + keyword match + dual-path routing.
- **Content:** Eyebrow: `Data · AI · Automation`. H1: **"I build data and AI systems that solve real business problems."** Sub: "Data analyst and AI automation engineer. Currently building KORVI — a WhatsApp-native AI sales platform for African SMEs. Previously: IoT analytics for Lagos State Water Corporation." Two CTAs + a slim availability badge: `● Open to Data/AI roles & select consulting`.
- **Layout:** Left-aligned text (60%), right side: abstract animated data-flow visual (not a photo — Linear/Vercel pattern). Mobile: text only, visual hidden.
- **Animation:** staggered word-by-word fade-up on H1 (300ms total), subtle looping particle/node graph on the right at < 5% CPU.
- **Conversion objective:** route to Resume or scroll. **Expected behavior:** recruiters click Resume; everyone else scrolls. **Why it exists:** 80% of visitors never pass the hero — it must convert alone.

### 3.2 Trust Bar
- **Purpose:** instant credibility before any claims.
- **Content:** 4 stat chips: `462,885 farmers — RCT analysis` · `State-utility IoT system in production` · `150+ students taught` · `Peer-reviewed researcher (ORCID)`. Optionally org wordmarks (LSWC, SQI, One Acre Fund context, FUOYE) in muted gray.
- **Layout:** single row, monochrome, small. **Animation:** count-up on scroll-into-view (once). **Why:** numbers outperform logos for unknown personal brands.

### 3.3 Featured Projects (3 cards)
- **Purpose:** the conversion core. KORVI (founder proof), Water Analytics (enterprise proof), AI ATS Pipeline (automation proof).
- **Layout:** large asymmetric cards — first card full-width, two below at 50/50 (Stripe pattern). Each: visual, problem one-liner, 3 metric chips, stack icons, "Read case study →".
- **Animation:** card lift + image parallax on hover; border-glow sweep (Raycast pattern).
- **Conversion objective:** click-through to case study ≥ 25%.

### 3.4 Skills / Capabilities
- **Purpose:** keyword coverage without a boring tag cloud.
- **Content:** 4 capability columns, each with outcomes not nouns:
  - **Data Engineering & Analytics** — Python, SQL, ETL, Power BI/DAX → "Pipelines and dashboards leadership actually uses."
  - **Machine Learning & AI** — XGBoost, RF, causal inference, LLM apps → "Models with AUC ~0.85 and honest evaluation."
  - **AI Automation** — n8n, Make, Clay, OpenAI APIs → "Workflows that remove whole job functions of busywork."
  - **Product Engineering** — Node/TypeScript, PostgreSQL, React → "From architecture doc to deployed product."
- **Layout:** 4-col grid → 2-col mobile. **Animation:** icon micro-draw on reveal. **Why:** hiring managers verify breadth here; recruiters harvest keywords.

### 3.5 Case Study Spotlight
- **Purpose:** depth signal for the skeptical hiring manager.
- **Content:** the One Acre Fund RCT — one horizontal band: methodology diagram thumbnail, 3-sentence narrative, "This is the rigor I bring to every analysis" line, CTA to /research.
- **Layout:** full-bleed contrasting background band (dark section in light mode). **Why:** it's your most senior-signaling artifact and deserves isolation.

### 3.6 About Teaser
- Photo (professional, warm), 3 sentences: Lagos-based, biochemistry → data science path, founder of HMC Tech, "I write about mother-tongue education and African tech." CTA: Full story →. **Why:** humanizes; founders hire people, not stacks.

### 3.7 Testimonials
- 3 quotes max (employer, student, client). Layout: simple cards, name/role/photo. If fewer than 3 strong quotes exist at launch, **ship without this section** — weak testimonials subtract. Animation: gentle auto-rotate, pause on hover.

### 3.8 Research & Writing (merged Blog + Research)
- 3 latest posts + publication card (UMYU Scientifica with DOI link). **Why merged:** thin separate sections look abandoned; one healthy section looks alive.

### 3.9 Open Source / GitHub
- Live GitHub contribution graph (github.com/Ireolami) + 2 pinned repos with star/fork chips. **Why:** technical teams check anyway; bringing it onsite controls the narrative.

### 3.10 Contact
- **Content:** "Let's build something" + 3 paths side-by-side: Email (visible address, copy button) · Book a 20-min call (embedded Cal.com) · WhatsApp (for African clients). Minimal form as fallback (name, email, message — 3 fields only).
- **Conversion objective:** zero-friction; every audience finds its native channel.

### 3.11 Footer
- Full nav, socials, email, location ("Lagos, Nigeria · Working globally, remote"), copyright, "View source" link. Dark regardless of theme. Easter egg: tiny Yoruba greeting on hover of the logo — memorable, on-brand with your linguistics interest.

---

# PHASE 4 — PROJECT SHOWCASE ARCHITECTURE

## 4.1 Index Page (/projects)
Filterable grid with category pills: `All · AI & Agents · Data Science · Automation · Product/Dev · Research`. Filter animates with FLIP layout transitions (cards reflow smoothly, never re-render blank). Sort default: impact, not date.

## 4.2 Universal Card Anatomy
```
┌─────────────────────────────────┐
│ [Visual: screenshot/diagram]     │ ← 16:9, lazy-loaded, parallax on hover
│ CATEGORY CHIP        STATUS ●    │ ← Production / Case Study / In Build
│ Title (H3)                       │
│ Problem → Solution (1 line each) │
│ [▲ 38% metric] [12 hrs/wk saved] │ ← max 3 metric chips
│ ⬡ Py ⬡ n8n ⬡ GPT-4o            │ ← stack icons, tooltip on hover
│ Read case study →     [GitHub ↗] │
└─────────────────────────────────┘
```
Hover: card translateY(-4px), shadow expand, image scale(1.03), arrow slides right 4px. 200ms ease-out. Focus-visible ring for keyboard users.

## 4.3 Category Templates

**AI Projects (KORVI, WhatsApp Sales Agent, RAG Chatbot)**
Emphasis: agent architecture + live demo. Card adds a "conversation snippet" visual (mock WhatsApp thread). Metrics: response accuracy, conversations handled, latency. CTA: "See it think →" (links to demo video/case study). Accent: violet.

**Data Science (RCT analysis, ML models, USDA nutrition analysis)**
Emphasis: methodology + chart. Card visual is an actual result chart (not stock art). Metrics: AUC, sample size, effect size. CTA: "Read the analysis →" + notebook link. Accent: blue.

**Automation (ATS pipeline, Social Media Monitor, Crypto Monitor, PTO system)**
Emphasis: before/after ROI. Card visual: simplified node-graph of the workflow. Metrics: hours saved/week, error rate eliminated, tasks automated. CTA: "See the workflow →". Accent: green.

**Developer/Product (KORVI frontend, Fuso Pay, PayMatch concepts)**
Emphasis: shipped UI. Card visual: browser-framed screenshot. Metrics: stack depth, tickets shipped, performance scores. CTA: "View the build →" + GitHub. Accent: orange.

**Research (UMYU publication, bioinformatics, GEE flood mapping)**
Emphasis: rigor + citation. Card visual: figure from the paper/map output. Metrics: citations, dataset scale. CTA: "Read the paper ↗" (DOI). Accent: teal.

Flagship six at launch: KORVI · LSWC Water Analytics · One Acre Fund RCT · AI ATS Pipeline · Social Media Intelligence Monitor · Lagos Flood Mapping (GEE/Sentinel-1).

---

# PHASE 5 — CASE STUDY FRAMEWORK

Template for /projects/[slug]. Target length: 1,200–2,000 words, 8–12 visuals. Sticky right-rail table of contents (desktop).

```
1. HERO BAND        Title · one-line outcome · role · timeline · stack chips
                    · hero visual (architecture or product shot)
2. TL;DR CARD       3 bullets: Problem / What I built / Result. For the
                    45-second reader. Includes metric callouts.
3. BUSINESS CONTEXT Who, market constraints, why it mattered. 2 paragraphs.
4. PROBLEM          Specific, quantified pain. "Manual reconciliation took
                    14 hrs/week and missed 8% of payments."
5. RESEARCH         User/stakeholder findings, competitive scan (KORVI:
                    Flowcart/Ojamaker analysis), constraints discovered.
6. DATA             Sources, volume, quality issues, collection pipeline.
7. METHODOLOGY      Why this approach over alternatives. Show the rejected
                    option — tradeoff reasoning is the senior signal.
8. ARCHITECTURE     Full system diagram (Mermaid/Excalidraw style, consistent
                    visual language across all case studies). Component table.
9. IMPLEMENTATION   3–5 key decisions with short code/config excerpts.
                    Collapsible deep-dive blocks for technical readers.
10. CHALLENGES      2–3 honest obstacles + how solved. Builds trust.
11. RESULTS         Metrics table: Before → After → Δ. Charts where possible.
12. LESSONS         What you'd do differently. Max 4 bullets.
13. FUTURE          Roadmap snapshot. Signals ongoing ownership.
14. FOOTER CTA      "Want something like this?" → Book a Call · Next project →
```

Visual standards: every diagram same style/palette; screenshots in consistent browser/phone frames; all images captioned; charts use the site's chart theme. Each case study gets unique OG image (title + key metric + diagram crop).

---

# PHASE 6 — VISUAL DESIGN SYSTEM

## 6.1 Color Palette

Direction: dark-first, restrained, single confident accent (Linear/Vercel school).

```
DARK (default)                      LIGHT
--bg            #0A0A0B             #FAFAF9
--bg-elevated   #111113             #FFFFFF
--bg-subtle     #18181B             #F4F4F3
--border        #27272A             #E7E5E4
--text-primary  #FAFAFA             #18181B
--text-secondary#A1A1AA             #52525B
--text-muted    #71717A             #A8A29E

--accent        #6E56CF (violet 600)   — primary actions, links, focus
--accent-hover  #7C66DC
--accent-subtle rgba(110,86,207,.12)   — chips, highlights

Category accents (chips/diagrams only, never large surfaces):
--ai #8B5CF6 · --data #3B82F6 · --auto #10B981 · --dev #F97316 · --research #14B8A6

Semantic: --success #22C55E · --warn #EAB308 · --error #EF4444
```
Rationale: violet differentiates from the blue every analyst portfolio uses, reads "AI-native" (Linear, Raycast), and passes contrast on both themes.

## 6.2 Typography
```
Display/Headings: "Instrument Sans" or "Inter Display" — geometric, modern
Body:             Inter (variable)
Mono:             JetBrains Mono — code, metrics, stack chips

Scale (1.25 ratio, fluid clamp):
H1 clamp(2.5rem, 5vw, 4rem)/1.1/-0.02em · H2 2.25rem · H3 1.5rem
Body 1rem/1.7 · Small .875rem · Micro .75rem uppercase tracking .08em
Metrics displayed in mono — “462,885” in JetBrains Mono is a signature detail.
```

## 6.3 Spacing & Grid
4px base unit. Scale: 4/8/12/16/24/32/48/64/96/128. Section padding: 128px desktop, 64px mobile. Grid: 12-col, max-width 1200px content / 1440px full-bleed, 24px gutters. Breakpoints: 640/768/1024/1280.

## 6.4 Icons
Lucide (consistent 1.5px stroke). Stack logos: Simple Icons, monochromed to text-secondary, colored on hover. Sizes: 16/20/24 only.

## 6.5 Component Library
Buttons (primary filled accent · secondary outline · ghost · icon; sizes sm/md/lg; states default/hover/active/focus-visible/disabled/loading-spinner). Cards (project, metric-stat, testimonial, post). Chips (category, stack, status-dot). Nav (header, mobile overlay, TOC rail). Forms (input, textarea, select — 1px border, accent focus ring, inline validation, never color-only errors). Code block (mono, copy button, line highlight). Table (case-study metrics). Callout (info/success/warn). Theme toggle (sun/moon morph animation).

## 6.6 Section, Form & Mode Standards
- Sections alternate bg/bg-subtle for rhythm; one full-bleed inverted band per page max (case-study spotlight).
- Dark mode is default (developer audience); light mode persisted via localStorage on the user's own deployed site, system-preference initial; no flash (theme script in <head>).
- Forms: labels always visible (no placeholder-as-label), 44px min touch targets.

## 6.7 Accessibility / WCAG 2.2 AA
- Contrast ≥ 4.5:1 body, 3:1 large text — palette above verified.
- Full keyboard navigation, visible focus rings, skip-to-content link.
- prefers-reduced-motion: all animations collapse to opacity-only.
- Semantic landmarks, single H1/page, alt text on all visuals, aria-labels on icon buttons, form errors announced via aria-live.
- Target: Lighthouse Accessibility 100.

---

# PHASE 7 — ANIMATION ARCHITECTURE

Philosophy: animation as *information*, never decoration. Budget: nothing over 400ms, nothing that blocks reading.

| Animation | Where | Spec |
|---|---|---|
| Page transition | route changes | 150ms fade + 8px rise; View Transitions API w/ fallback |
| Hero word stagger | H1 on load | 40ms/word, opacity+translateY(12px), once |
| Scroll reveals | every section | IntersectionObserver, opacity 0→1 + 16px rise, 300ms, stagger children 60ms, trigger at 20% visibility, once |
| Count-up stats | trust bar, metrics | 1.2s easeOut, starts on view, respects reduced-motion (instant) |
| Card hover | project cards | lift −4px, shadow, image scale 1.03, 200ms |
| Border glow sweep | featured card | CSS conic-gradient rotation on hover only (GPU cheap) |
| Magnetic CTA | primary buttons | 4–6px cursor attraction (desktop only) |
| Nav underline slide | header | layoutId-style shared element, 200ms |
| Theme toggle | header | 300ms cross-fade, icon morph |
| Skeleton loading | images, GitHub data | shimmer placeholder matching final dimensions (zero CLS) |
| TOC progress | case studies | scroll-linked progress bar + active heading highlight |
| Diagram draw-in | architecture diagrams | SVG stroke-dashoffset draw on first view, 800ms |
| Cursor | global | default cursor; NO custom cursor (hurts usability, dated) |

Performance rules: animate only transform/opacity; will-change applied on hover-in, removed on out; Framer Motion + LazyMotion (domAnimation) to keep bundle small; zero scroll-jacking; total JS animation cost < 30KB gz.

---

# PHASE 8 — TECHNICAL ARCHITECTURE

| Layer | Choice | Why |
|---|---|---|
| Framework | **Next.js 15 (App Router) + TypeScript** | SSG/ISR for SEO + speed; you already use TS (KORVI); industry-signal to employers |
| Styling | Tailwind CSS v4 + shadcn/ui primitives | Matches your KORVI workflow; design-token friendly |
| Animation | Framer Motion (LazyMotion) | Declarative, reduced-motion built in |
| Content/CMS | **MDX in repo (Contentlayer/next-mdx)** | Case studies are code-adjacent docs; git versioning; zero CMS cost/latency. (If non-dev editing ever needed → Sanity, v3) |
| Database | None for v1; form posts → Resend email + Telegram notify | A portfolio doesn't need a DB; ruthless simplicity |
| Hosting | **Vercel** (Hobby → Pro) | Edge CDN (fast from Lagos *and* SF), preview deploys, image CDN |
| Analytics | Plausible (or Vercel Analytics) | Privacy-friendly, no cookie banner, conversion goals |
| SEO tooling | next-sitemap, next-seo, @vercel/og for dynamic OG images | Automated metadata + per-page social cards |
| Images | next/image (AVIF/WebP), all visuals pre-compressed, diagrams as SVG | LCP < 2s on 3G — critical for Nigerian visitors too |
| Email/booking | Resend + Cal.com embed | Free tiers, professional |
| Security | HTTPS (default), CSP headers, form honeypot + rate limit, no exposed keys (server actions) | Standard hardening |
| CI/CD | GitHub Actions: lint, typecheck, build, Lighthouse CI (perf budget ≥ 95) → Vercel auto-deploy | Quality gate; the repo itself becomes a portfolio piece |
| Monitoring | Vercel Speed Insights + Sentry (free tier) | Catch regressions |

Performance budget: LCP < 2.0s, CLS < 0.05, INP < 200ms, total JS < 150KB gz, Lighthouse ≥ 95 all categories.

---

# PHASE 9 — SEO ARCHITECTURE

**Site structure:** flat URLs, kebab-case slugs containing keywords (`/projects/whatsapp-ai-sales-agent`), canonical tags, auto sitemap.xml + robots.txt, breadcrumbs on case studies.

**Metadata strategy:** per-page unique title ≤ 60ch pattern `{Page} — Olayele Awujoola | Data & AI Automation Engineer`; meta descriptions 150ch written as ad copy with a metric.

**Schema markup (JSON-LD):** `Person` (homepage — name, alumniOf, sameAs → LinkedIn/GitHub/ORCID), `WebSite`, `Article` + `BreadcrumbList` (posts/case studies), `ScholarlyArticle` (research page), `SoftwareApplication` (KORVI page), `FAQPage` (services).

**Keyword strategy:**
- Identity terms (win these first): "Olayele Awujoola", "Ireola data analyst".
- Role terms: "data analyst Lagos", "AI automation engineer Nigeria", "n8n automation expert", "Power BI consultant Lagos".
- Long-tail content terms (blog): "WhatsApp AI sales agent for SMEs", "n8n recruitment automation", "Sentinel-1 flood mapping Lagos", "causal inference RCT agriculture". Each flagship project targets one long-tail cluster.

**Blog SEO:** one pillar post per capability area, internal-linked to its matching case study (topic clusters). Publish cadence ≥ 2/month for index freshness.

**Project SEO:** case studies are the SEO assets — H2s phrased as questions people search, alt-texted diagrams, embedded metrics tables (featured-snippet bait).

**Open Graph:** dynamic OG images via @vercel/og — dark card, name, title, one headline metric, category accent stripe. Twitter summary_large_image.

**LinkedIn strategy:** every case study gets a native LinkedIn post version (carousel of the diagrams) linking back; "Featured" section on profile → 3 flagship case studies; consistent headline match between LinkedIn and hero H1.

**Indexing:** Search Console verification day one, submit sitemap, request indexing on each new case study, monitor identity-term ranking monthly.

---

# PHASE 10 — CONVERSION SYSTEM

| Path | Trigger | User motivation | CTA | Expected outcome |
|---|---|---|---|---|
| Recruiter contact | Hero/nav resume button | Fill open req fast | "Download Resume (PDF)" — opens role-variant picker: Data / AI-Automation / Engineering | ATS submission → screening call |
| Interview invite | Case study depth | Verify seniority | End-of-study "Email me about roles" mailto with prefilled subject | Direct HM outreach |
| Freelance inquiry | /services ROI blocks | Pain (manual work) | "Book a free 20-min automation audit" (Cal.com) | Discovery call → proposal |
| Consulting (local) | WhatsApp deep link with prefilled message | Channel familiarity | "Message me on WhatsApp" | Low-friction lead, esp. Nigerian SMEs |
| Partnership/investor | KORVI case study + /about founder story | Deal flow | "Email about KORVI" + deck-request link | Intro call |
| Newsletter | End of blog posts + exit-intent on /writing only | Free value | "Get one practical automation breakdown / month" | Audience → future conversions |

System mechanics: every CTA fires a Plausible goal; resume downloads tracked per variant (tells you which roles your traffic skews to); contact form auto-replies within seconds with Calendly link (speed = professionalism signal); monthly conversion review ritual documented in repo README.

---

# PHASE 11 — COMPETITIVE PATTERN ANALYSIS

| Source | Pattern to steal | Where applied |
|---|---|---|
| **Stripe** | Layered disclosure — simple claim, expandable depth; impeccable docs typography | Case-study collapsible deep-dives; type system |
| **Linear** | Dark-first restraint, single accent, fast micro-interactions, sliding nav indicator | Whole design language; nav underline |
| **Vercel** | Performance AS marketing; mono-font metrics; black/white confidence | Perf budget made public on /uses; metric styling |
| **Framer** | Scroll-reveal choreography that aids comprehension, never blocks it | Section reveal system |
| **Raycast** | Border-glow hover, keyboard-shortcut culture (⌘K) | Featured card hover; v2 command palette |
| **Notion** | Warm humanity inside structure; friendly empty states | About page voice; 404 page |

What none of them do (your edge): real African-market production stories, research rigor + founder narrative in one place. Patterns are borrowed; the substance is unborrowable.

---

# PHASE 12 — FINAL DELIVERABLES

## 12.1 Component Hierarchy
```
RootLayout (theme provider, fonts, analytics)
├─ Header (Nav, MobileOverlay, ThemeToggle, CTAButtons)
├─ Page
│  ├─ Hero (HeadlineStagger, AvailabilityBadge, HeroVisual)
│  ├─ TrustBar (StatChip ×4 w/ CountUp)
│  ├─ FeaturedProjects (ProjectCard ×3 → variants by category)
│  ├─ Capabilities (CapabilityColumn ×4)
│  ├─ SpotlightBand (CaseStudyTeaser)
│  ├─ AboutTeaser · Testimonials (TestimonialCard) · WritingGrid (PostCard)
│  ├─ OpenSource (GitHubGraph, RepoCard) · ContactSection (EmailCopy, CalEmbed, WhatsAppLink, MiniForm)
├─ Footer
Shared: Button, Chip, MetricStat, SectionHeading, Reveal, Callout, CodeBlock, MDXComponents, TOCRail, OGImage
```

## 12.2 Wireframe Structure (homepage, desktop)
```
[ nav ──────────────────────────── resume | book call ]
[ H1 + sub + CTAs            |  animated node visual   ]
[ stat · stat · stat · stat                            ]
[ ███████████ KORVI featured card ████████████         ]
[ █ water analytics █ ] [ █ ATS pipeline █ ]
[ cap | cap | cap | cap                                ]
[ ▓▓▓ inverted spotlight band: RCT ▓▓▓                 ]
[ photo | about teaser ]  [ testimonials ─ ─ ─ ]
[ post · post · post ]    [ github graph + repos ]
[ contact: email | calendar | whatsapp                 ]
[ footer ──────────────────────────────────────────────]
```

## 12.3 Development Roadmap

**MVP — Weeks 1–3 (ship this, nothing more)**
W1: repo, Next.js+Tailwind scaffold, design tokens, Header/Footer/Button/Card, Hero, TrustBar.
W2: 3 flagship case studies written + diagrammed (KORVI, Water Analytics, ATS Pipeline), projects index, MDX pipeline.
W3: About, Contact (Resend + Cal.com), resume PDFs (3 variants), SEO/OG/schema, Lighthouse ≥ 95, deploy, Search Console, LinkedIn announcement post.
*MVP excludes: blog, testimonials, services page, GitHub live data.*

**V2 — Weeks 4–8**
Remaining 3 case studies · /services page + WhatsApp funnel · /writing with 3 pillar posts · /research page (RCT deep-dive + publication) · GitHub live integration · testimonial collection campaign · newsletter (Resend audiences) · ⌘K command palette.

**V3 — Months 3–6**
/now page auto-fed from KORVI progress · interactive demos (embedded WhatsApp-agent playground, live dashboard samples) · case-study video walkthroughs · i18n consideration (Yoruba easter eggs → real content?) · Sanity CMS if posting cadence demands · speaking/teaching page · dark analytics dashboard made public (Vercel-style transparency).

## 12.4 Definition of Done (MVP)
☐ Recruiter can reach a role-matched PDF resume in ≤ 2 clicks
☐ All 3 case studies include architecture diagram + metrics table + CTA
☐ Lighthouse ≥ 95 ×4 categories, mobile · LCP < 2s on Fast 3G
☐ WCAG 2.2 AA pass (axe clean) · reduced-motion verified
☐ OG images render correctly in LinkedIn/X debuggers
☐ Plausible goals firing on all 6 conversion paths
☐ Site indexed for "Olayele Awujoola" within 2 weeks

— End of blueprint —
