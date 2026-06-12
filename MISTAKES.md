# Mistakes Log

## M-001 — Missing CSS token and font files broke entire styling (pre-seeded)
**What happened:** A previous frontend (KORVI) rendered unstyled because token CSS and font files were referenced but never created/loaded.
**Root cause:** Build assumed files existed without verification.
**Fix applied:** P-002 verified: globals.css created before any component; fonts installed via next/font before any typography component.
**Prevention rule:** P-002 is not done until a test page visibly renders all tokens and all three fonts in the browser; screenshot it.

## M-002 — Building components before foundations (pre-seeded)
**Prevention rule:** Never build a component that depends on tokens, fonts, or layout primitives that do not yet exist and verify.

## M-003 — Plausible-looking placeholder content treated as real (pre-seeded)
**Prevention rule:** All pending content uses visibly-fake markers ([METRIC PENDING] / [visual pending]) and a TODO-CONTENT log entry.

## M-004 — Claiming completion without verification (pre-seeded)
**Prevention rule:** Run build + view rendered output at 375/768/1280 before any "done".

## M-005 — framer-motion m.* vs motion.* in LazyMotion strict mode (2026-06-12, P-003/P-005)
**What happened:** LazyMotion with strict=true requires using `m` import (not `motion`) from framer-motion. Using `motion.div` throws a warning/error in strict mode.
**Root cause:** LazyMotion strict mode intentionally blocks `motion.*` to enforce lazy loading.
**Fix applied:** All animated components use `import { m } from "framer-motion"` and `<m.div>` not `<motion.div>`.
**Prevention rule:** Always import `m` (not `motion`) for animated elements when LazyMotion strict is active.

## M-006 — Tailwind v4 @theme inline is required for CSS var → utility bridge (2026-06-12, P-002)
**What happened:** In Tailwind v4, defining `--color-accent` in @theme without `inline` compiles to a static value, breaking theme switching.
**Root cause:** @theme without `inline` resolves CSS var() at build time.
**Fix applied:** globals.css uses `@theme inline { --color-accent: var(--accent); }` so utilities reference live CSS vars.
**Prevention rule:** Always use `@theme inline` when design tokens must respond to data-theme attribute changes.
