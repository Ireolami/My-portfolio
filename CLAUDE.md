# CLAUDE.md — Portfolio Website Build

> This file governs ALL Claude Code sessions on this project. Read it fully at the start of every session before writing any code. It is the single source of truth for how to work, what has been built, and what mistakes must never be repeated.

---

## 1. PROJECT IDENTITY

**Project:** Personal portfolio website for Olayele "Ireola" Awujoola — Data Analyst, AI Automation Engineer, founder of HMC Tech (Lagos, Nigeria).

**Source of truth for ALL design and content decisions:** `docs/portfolio-architecture.md` (the 12-phase blueprint). If this file and the blueprint ever conflict, the blueprint wins for design/content; this file wins for process.

**Brand thesis (never deviate):** "I build data and AI systems that solve real business problems." One thesis, five proof surfaces. Forex/trading work appears ONLY as a single project card, never in hero, title, or meta tags.

**Flagship projects (MVP ships exactly these 3 case studies):**
1. KORVI — WhatsApp-native AI sales platform
2. LSWC Smart Water Distribution Analytics — IoT/MQTT pipeline
3. AI-Powered ATS Pipeline — 14-node n8n + GPT-4o

V2 adds: One Acre Fund RCT analysis, Social Media Intelligence Monitor, Lagos Flood Mapping (Sentinel-1/GEE).

---

## 2. TECH STACK (LOCKED — do not substitute without explicit owner approval)

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js 15, App Router, TypeScript strict | SSG/ISR. No Pages Router. |
| Styling | Tailwind CSS v4 + shadcn/ui primitives | Tokens defined in section 4 below |
| Animation | Framer Motion via LazyMotion (domAnimation) | Transform/opacity only |
| Content | MDX in-repo (`content/projects/*.mdx`, `content/writing/*.mdx`) | No external CMS in v1 |
| Forms/Email | Resend (server action) + honeypot + rate limit | No client-side API keys EVER |
| Booking | Cal.com embed | |
| Hosting | Vercel | Preview deploy per PR |
| Analytics | Plausible | Goals: resume_download, book_call, whatsapp_click, email_copy, form_submit, newsletter |
| SEO | next-sitemap, JSON-LD components, @vercel/og | |
| Database | NONE in v1 | Do not add one. |

**Performance budget (hard gates, CI-enforced):** LCP < 2.0s, CLS < 0.05, INP < 200ms, JS < 150KB gz, Lighthouse ≥ 95 all four categories on mobile.

---

## 3. NON-NEGOTIABLE RULES

1. **Design tokens first.** No component is built until `globals.css` (CSS variables) and `tailwind.config` token mapping exist and are verified rendering. This rule exists because a previous project (KORVI frontend) broke from missing CSS token and font files — never repeat that failure pattern.
2. **Fonts are self-hosted via `next/font`** (Inter, Instrument Sans, JetBrains Mono). Verify fonts actually load in the browser before building typography-dependent components. Never reference a font that hasn't been installed.
3. **No hardcoded colors.** Every color references a CSS variable from the token set. If you type a hex value inside a component, you are doing it wrong.
4. **Accessibility is a feature, not a pass:** WCAG 2.2 AA. Visible focus rings, semantic landmarks, one H1 per page, alt text on every image, `prefers-reduced-motion` collapses all animation to opacity-only, labels always visible on forms.
5. **No fabricated content.** Never invent metrics, testimonials, logos, or project results. If real content is missing, insert `{/* TODO-CONTENT: owner to supply X */}` and log it in PROGRESS.md. Placeholder text must be visibly fake (e.g., "[METRIC PENDING]"), never plausible-looking fake numbers.
6. **No em dashes or filler phrases in user-facing copy.** Owner's standing style preference. Write tight, verb-first copy.
7. **Secrets:** all keys in `.env.local`, listed in `.env.example` with dummy values, accessed only in server code. `.env.local` is gitignored. Verify this before every commit touching env handling.
8. **Mobile-first.** Build and verify every component at 375px before desktop. Test at 375 / 768 / 1280.
9. **Small commits.** One logical change per commit. Conventional commits format (`feat:`, `fix:`, `docs:`, `chore:`). Never commit broken builds.
10. **Verify before claiming done.** "Done" means: builds clean (`npm run build`), typechecks, lints, renders correctly at all 3 breakpoints, and you have actually looked at it (screenshot or dev-server check), not assumed it.

---

## 4. DESIGN TOKENS (canonical — copy exactly, do not improvise)

```css
/* globals.css — :root = dark (default), [data-theme="light"] overrides */
:root {
  --bg: #0A0A0B; --bg-elevated: #111113; --bg-subtle: #18181B;
  --border: #27272A;
  --text-primary: #FAFAFA; --text-secondary: #A1A1AA; --text-muted: #71717A;
  --accent: #6E56CF; --accent-hover: #7C66DC; --accent-subtle: rgba(110,86,207,.12);
  --cat-ai: #8B5CF6; --cat-data: #3B82F6; --cat-auto: #10B981;
  --cat-dev: #F97316; --cat-research: #14B8A6;
  --success: #22C55E; --warn: #EAB308; --error: #EF4444;
}
[data-theme="light"] {
  --bg: #FAFAF9; --bg-elevated: #FFFFFF; --bg-subtle: #F4F4F3;
  --border: #E7E5E4;
  --text-primary: #18181B; --text-secondary: #52525B; --text-muted: #A8A29E;
}
```

Typography: H1 `clamp(2.5rem,5vw,4rem)`, line-height 1.1, tracking -0.02em. Body 1rem/1.7. All metrics/numbers render in JetBrains Mono. Spacing scale: 4/8/12/16/24/32/48/64/96/128px. Container: 1200px content max-width, 24px gutters. Theme: dark default, toggle persisted to localStorage, no-flash inline script in `<head>`.

---

## 5. PROGRESS TRACKING SYSTEM (MANDATORY)

Progress lives in two files you MUST maintain:

### 5.1 `PROGRESS.md` (project root)
Structure:

```md
# Build Progress

## Status: <phase> — <date of last session>
Currently working on: <ticket id + one line>
Next up: <ticket id>

## Ticket Board
| ID | Task | Status | Notes |
|---|---|---|---|
| P-001 | Repo scaffold + tooling | ☐ todo / ◐ in-progress / ✅ done / ⛔ blocked | |
...

## Session Log (append-only, newest first)
### Session YYYY-MM-DD
- Completed: ...
- In progress / handoff state: <exact file + what remains>
- Decisions made: ...
- TODO-CONTENT items added: ...
- Blockers: ...
```

### 5.2 Session protocol — EVERY session, no exceptions

**On session START:**
1. Read this CLAUDE.md fully.
2. Read PROGRESS.md — resume from "Currently working on", do not restart finished work.
3. Read MISTAKES.md (section 6) — load all lessons before coding.
4. Run `npm run build` to confirm the baseline is green before changing anything. If it is red, fixing it is the first task.

**During session:**
- Update ticket status the moment a ticket changes state, not at the end.
- Commit after each completed ticket.

**On session END (or when context is getting long):**
- Write the session log entry with EXACT handoff state ("Hero.tsx done except mobile breakpoint; stagger animation untested").
- Commit PROGRESS.md. An unsaved session log means the session did not happen.

If a session is interrupted, the next session must be able to resume from PROGRESS.md alone.

### 5.3 Ticket board (initial — MVP)

| ID | Task |
|---|---|
| P-001 | Scaffold: Next.js 15 + TS strict + Tailwind v4 + ESLint/Prettier + Husky |
| P-002 | Design tokens: globals.css + tailwind mapping + next/font setup. VERIFY in browser. |
| P-003 | Primitives: Button, Chip, MetricStat, SectionHeading, Reveal, Callout |
| P-004 | Layout: Header (sticky, nav underline, theme toggle, 2 CTAs), Footer, mobile overlay |
| P-005 | Hero (word stagger, availability badge, CTA pair) + right-side visual (static SVG first, animate later) |
| P-006 | TrustBar with CountUp stats |
| P-007 | ProjectCard component + 5 category variants |
| P-008 | MDX pipeline: contentlayer/next-mdx, case-study layout (TL;DR card, TOC rail, metrics table, code blocks) |
| P-009 | Case study content: KORVI |
| P-010 | Case study content: LSWC Water Analytics |
| P-011 | Case study content: ATS Pipeline |
| P-012 | /projects index with filter pills (FLIP transitions) |
| P-013 | Capabilities section + Spotlight band + About teaser |
| P-014 | /about page |
| P-015 | /contact: email copy button, Cal.com embed, WhatsApp deep link, mini form (Resend server action) |
| P-016 | /resume page + 3 PDF variants wiring + download tracking |
| P-017 | SEO: metadata, JSON-LD (Person, WebSite, Article, Breadcrumb), next-sitemap, @vercel/og dynamic images |
| P-018 | Plausible + all 6 conversion goals |
| P-019 | A11y pass (axe clean), reduced-motion verification, keyboard nav audit |
| P-020 | Performance pass: Lighthouse CI in GitHub Actions, budget gates |
| P-021 | Deploy to Vercel, Search Console, OG validation in LinkedIn/X debuggers |

Build strictly in order P-001 → P-021 unless PROGRESS.md records an approved reorder.

---

## 6. LEARNING FROM MISTAKES (MANDATORY)

Maintain `MISTAKES.md` in the project root. This is how the project gets smarter across sessions.

### 6.1 Protocol
- **When anything goes wrong** — a bug that took >10 minutes, a wrong assumption, a broken build, a rejected approach, owner correction — log it IMMEDIATELY in MISTAKES.md, then fix it.
- **Read MISTAKES.md at the start of every session** and actively check new work against every entry.
- **Before marking any ticket done**, run the relevant entries as a checklist.
- If the same mistake is made twice, escalate: add a hard rule to section 3 of this file referencing the entry.

### 6.2 Entry format
```md
## M-### — <short title> (YYYY-MM-DD, ticket P-###)
**What happened:** ...
**Root cause:** ...
**Fix applied:** ...
**Prevention rule:** <one imperative sentence to check in future work>
```

### 6.3 Pre-seeded lessons (from prior projects — treat as already-made mistakes)

## M-001 — Missing CSS token and font files broke entire styling
**What happened:** A previous frontend (KORVI) rendered unstyled because token CSS and font files were referenced but never created/loaded.
**Prevention rule:** P-002 is not done until a test page visibly renders all tokens and all three fonts in the browser; screenshot it.

## M-002 — Building components before foundations
**Prevention rule:** Never build a component that depends on tokens, fonts, or layout primitives that do not yet exist and verify.

## M-003 — Plausible-looking placeholder content treated as real
**Prevention rule:** All pending content uses visibly-fake markers ([METRIC PENDING]) and a TODO-CONTENT log entry; never realistic invented numbers.

## M-004 — Claiming completion without verification
**Prevention rule:** Run build + view rendered output at 375/768/1280 before any "done".

---

## 7. QUALITY GATES (run before every commit)

```bash
npm run lint && npm run typecheck && npm run build
```
Plus manual: render check at 3 breakpoints, keyboard-tab through any new interactive element, check reduced-motion if animation was touched.

PR/merge to main additionally requires: Lighthouse CI green, axe clean on changed pages, PROGRESS.md updated.

---

## 8. CONTENT & OWNER FACTS (use these, never guess)

- Name: Olayele Gbenga Awujoola (informal: Ireola). Location: Lagos, Nigeria. Remote-friendly globally.
- Email: smarworld25@gmail.com — NEVER use olayeleawujoola@gmail.com (does not exist).
- GitHub: github.com/Ireolami · LinkedIn: linkedin.com/in/olayele-awujoola · ORCID: 0000-0002-9432-8984
- Verified metrics usable in copy: 462,885 farmers (One Acre Fund RCT, 7-arm study), 150+ students taught (SQI College of ICT), 14-node ATS pipeline, ML benchmarks AUC ~0.85, peer-reviewed publication in UMYU Scientifica.
- Companies/institutions referenceable: HMC Tech (founder), E-Know Consult, SQI College of ICT, FUOYE (B.Sc. CS, in progress), Rufus Giwa Polytechnic (HND Biochemistry), Lagos State Water Corporation (project context).
- Availability badge copy: "Open to Data/AI roles & select consulting".
- Anything not listed here → TODO-CONTENT, ask the owner.

## 9. THINGS CLAUDE MUST NEVER DO ON THIS PROJECT

- Never add a database, CMS, or auth system in v1.
- Never install a dependency without recording why in the session log.
- Never put forex/trading content in hero, nav, titles, or metadata.
- Never use custom cursors, scroll-jacking, or animations >400ms.
- Never commit secrets, console.logs, or commented-out code blocks.
- Never rewrite working code wholesale "to improve it" without a ticket.
- Never skip updating PROGRESS.md, even for tiny sessions.
