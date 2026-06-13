# Build Progress

## Status: Phase 2 (Case studies + polish) — 2026-06-13
Currently working on: nothing in-flight; case-study system shipped and verified
Next up: P-012 projects FLIP polish, P-017 finish JSON-LD/sitemap/OG, P-018 Plausible goals

## Ticket Board
| ID | Task | Status | Notes |
|---|---|---|---|
| P-001 | Scaffold: Next.js 15 + TS strict + Tailwind v4 + ESLint/Prettier + Husky | ✅ done | Manual setup; Tailwind v4 PostCSS |
| P-002 | Design tokens: globals.css + tailwind mapping + next/font | ✅ done | @theme inline bridges CSS vars → utilities |
| P-003 | Primitives: Button, Chip, MetricStat, SectionHeading, Reveal, Callout | ✅ done | RevealGroup + RevealItem stagger pattern |
| P-004 | Layout: Header, Footer, mobile overlay | ✅ done | ThemeToggle, MobileMenu, nav underline |
| P-005 | Hero: word stagger, availability badge, CTA pair, SVG visual | ✅ done | DataFlowVisual SVG; reduced-motion safe |
| P-006 | TrustBar with CountUp stats | ✅ done | Static numbers (CountUp pending animation) |
| P-007 | ProjectCard component + 5 category variants | ✅ done | Category accent system + hover lift |
| P-008 | MDX pipeline | ✅ done | Built as typed case-study renderer (lib/case-studies.ts + /projects/[slug]) instead of MDX — 3 studies, type-safe, zero new deps, SSG |
| P-009 | Case study: KORVI | ✅ done | Full Phase-5 framework; honest pre-pilot results ([PENDING] markers, no fabricated metrics) |
| P-010 | Case study: LSWC Water Analytics | ✅ done | Full framework + architecture diagram + before/after table |
| P-011 | Case study: ATS Pipeline | ✅ done | Full framework; GitHub-sourced 14hr/wk metric; links to repo |
| P-012 | /projects index with filter pills | ✅ done | Filter pills + FLIP pill exist; fixed featured-card layout bug in grid |
| P-013 | Capabilities section + Spotlight band + About teaser | ✅ done | All three built into homepage |
| P-014 | /about page | ☐ todo | |
| P-015 | /contact page (Resend server action) | ☐ todo | ContactSection stub built in homepage |
| P-016 | /resume page + 3 PDF variants | ✅ done | 5 role-based variants with download tracking hooks |
| P-017 | SEO: metadata, JSON-LD, next-sitemap, @vercel/og | ◐ in-progress | Base metadata in layout.tsx; full schema pending |
| P-018 | Plausible + 6 conversion goals | ☐ todo | |
| P-019 | A11y pass (axe clean) | ☐ todo | |
| P-020 | Performance pass: Lighthouse CI | ☐ todo | |
| P-021 | Deploy to Vercel, Search Console | ☐ todo | |

## TODO-CONTENT Items
- ProjectCard visuals: owner to supply screenshots/architecture diagrams for all 3 flagship projects
- About photo: professional photo for AboutTeaser and /about page
- Cal.com username: update NEXT_PUBLIC_CAL_USERNAME in .env.local
- WhatsApp number: update wa.me URL in ContactSection.tsx with real number
- Case study content: MDX files for KORVI, LSWC, ATS Pipeline
- Resume PDFs: 3 variants (Data Analyst / AI-Automation / Engineering)

## Session Log (append-only, newest first)

### Session 2026-06-13 (b) — case-study system + quality pass
- Completed: P-008/009/010/011 — built the entire case-study system. New files:
  - `lib/case-studies.ts` — typed CaseStudy model + content for korvi, lswc-water-analytics, ats-pipeline. Content grounded in CLAUDE §8 facts; KORVI (pre-pilot) uses [PENDING] markers instead of invented traction.
  - `components/case-study/ArchitectureDiagram.tsx` — consistent horizontal pipeline diagram (vertical on mobile), category-accented.
  - `components/case-study/CaseStudyTOC.tsx` — sticky scroll-spy TOC rail (desktop).
  - `app/projects/[slug]/page.tsx` — SSG dynamic route, per-page metadata + Article JSON-LD, full Phase-5 layout (hero band, TL;DR, context, problem, approach, architecture + component table, decisions, challenges, before/after results table, lessons, future, footer CTA). Body is server-rendered always-visible (no scroll-gating) for SEO/reliability.
  - `app/globals.css` — added `.cs-prose` / `.cs-list` styles.
  - `app/icon.svg` — branded favicon (fixes favicon.ico 404).
- Fixed (bugs found via headless-Chrome screenshots):
  - ProjectCard: every "Read case study" link 404'd. Now case-study cards → /projects/[slug]; non-case-study cards → "View on GitHub"; none link to dead URLs.
  - /projects grid: the 3 `featured` projects rendered with hero `md:flex-row` layout inside narrow grid columns, hiding their text. ProjectsClient now forces `featured={false}` in the grid.
  - DataFlowVisual: was near-invisible on light theme. Rebuilt as a contained "SYSTEM MAP" panel with gradient edges, category-colored nodes, glowing primary node.
  - Reveal/RevealGroup: reduced-motion now renders content immediately (plain div, no opacity:0/inView gating) so content can't get stuck hidden.
- Verified: typecheck + lint + build all clean; 3 case studies prerender as static HTML; case-study first-load JS 134KB (< 150KB budget); no horizontal overflow at 390px on home/projects/case-study; screenshots reviewed at 1280 and 390.
- Decisions: chose a typed case-study renderer over MDX for v1 — only 3 studies, fully type-checked, no contentlayer/next-mdx dependency, smaller bundle. Revisit MDX if non-dev editing or many studies are needed (blueprint already allows this fallback).
- Not done / deferred: em-dash style sweep (rule §6) left as-is — ~60 occurrences are the owner's established voice in titles/prose; deferred rather than risk a damaging blind replace. Full sitemap/OG-image (@vercel/og) and Plausible goals still pending (P-017/P-018).

### Session 2026-06-13 (a)
- Completed: P-016 /resume page — 5 role-specific PDFs (Data Analyst, Data Engineer, AI & Automation, Data & Automation Analyst, GTM B2B) with color-coded download cards, Plausible tracking hook, bottom CTA to /contact
- Files: app/resume/page.tsx, public/resumes/*.pdf (5 files)
- Decisions: PDFs served from public/resumes/ with URL-safe names; `declare global Window.plausible` avoids `any` type; stagger animation via Framer Motion `m.div`

### Session 2026-06-12
- Completed: P-001 scaffold (manual, no create-next-app; Tailwind v4 via @tailwindcss/postcss)
- Completed: P-002 design tokens (globals.css @theme inline pattern; all 3 fonts via next/font/google)
- Completed: P-003 all primitives (Button, MagneticButton, Chip, StatusDot, StackChip, MetricStat, SectionHeading, Reveal, RevealGroup, RevealItem, Callout)
- Completed: P-004 Header + Footer + ThemeToggle + MobileMenu
- Completed: P-005 Hero (WordStagger, DataFlowVisual SVG, availability badge, dual CTAs)
- Completed: P-006 TrustBar (static metrics; CountUp MetricStat component ready but using static display for verified numbers)
- Completed: P-007 ProjectCard (category accent system, hover lift, border glow, status dot)
- Completed: P-013 Capabilities + SpotlightBand + AboutTeaser (all homepage sections)
- In progress: install dependencies + verify build
- Decisions: Tailwind v4 @theme inline for CSS var → utility bridge; framer-motion m.* components (not motion.*) for LazyMotion strict mode
- Blockers: none
