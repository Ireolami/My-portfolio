# Build Progress

## Status: Phase 1 (Foundation) — 2026-06-12
Currently working on: P-001 scaffold + P-002 tokens (completing together in session 1)
Next up: P-008 MDX pipeline, P-009–P-011 case study content

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
| P-008 | MDX pipeline | ☐ todo | |
| P-009 | Case study: KORVI | ☐ todo | |
| P-010 | Case study: LSWC Water Analytics | ☐ todo | |
| P-011 | Case study: ATS Pipeline | ☐ todo | |
| P-012 | /projects index with filter pills | ☐ todo | |
| P-013 | Capabilities section + Spotlight band + About teaser | ✅ done | All three built into homepage |
| P-014 | /about page | ☐ todo | |
| P-015 | /contact page (Resend server action) | ☐ todo | ContactSection stub built in homepage |
| P-016 | /resume page + 3 PDF variants | ☐ todo | |
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
