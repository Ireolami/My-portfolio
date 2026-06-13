"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;
import Link from "next/link";
import { ArrowDown, Download, Circle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { DataFlowVisual } from "./DataFlowVisual";

const headline = "I build data and AI systems that solve real business problems.";

function WordStagger({ text }: { text: string }) {
  const words = text.split(" ");
  const prefersReducedMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.04,
        delayChildren: 0.1,
      },
    },
  };

  const wordVariant: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: { opacity: 1, y: 0 },
      };

  const accentWords = new Set(["data", "AI"]);

  return (
    <m.h1
      className="text-text-primary"
      variants={container}
      initial="hidden"
      animate="visible"
      aria-label={text}
    >
      {words.map((word, i) => (
        <m.span
          key={i}
          className={`inline-block mr-[0.28em] last:mr-0 ${
            accentWords.has(word) ? "text-gradient" : ""
          }`}
          variants={wordVariant}
          transition={{ duration: 0.25, ease: EASE_OUT }}
        >
          {word}
        </m.span>
      ))}
    </m.h1>
  );
}

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16"
      aria-labelledby="hero-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-bg" aria-hidden="true">
        {/* Ambient glow blobs */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 60% 50% at 15% 85%, var(--accent) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 85% 15%, var(--cat-data) 0%, transparent 60%)",
          }}
        />
        {/* Subtle grid mesh */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="container-content relative z-10 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-7 max-w-2xl">
            {/* Eyebrow */}
            <m.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                Data &middot; AI &middot; Automation
              </span>
            </m.div>

            {/* H1 with word stagger */}
            <div id="hero-heading">
              <WordStagger text={headline} />
            </div>

            {/* Sub */}
            <m.p
              className="text-lg text-text-secondary leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              Data analyst and AI automation engineer. Currently building{" "}
              <span className="text-text-primary font-medium">KORVI</span> — a WhatsApp-native AI
              sales platform for African SMEs. Previously: IoT analytics for Lagos State Water
              Corporation.
            </m.p>

            {/* CTAs */}
            <m.div
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.85 }}
            >
              <Link href="#projects">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto gap-2">
                  <Download className="h-4 w-4" />
                  Get the Resume
                </Button>
              </Link>
            </m.div>

            {/* Availability badge */}
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <span
                className="inline-flex items-center gap-2 text-sm text-text-muted"
                aria-label="Availability status"
              >
                <Circle
                  className="h-2 w-2 fill-current text-success"
                  aria-hidden="true"
                />
                Open to Data/AI roles &amp; select consulting
              </span>
            </m.div>
          </div>

          {/* Right: SVG data-flow visual — hidden on mobile */}
          <m.div
            className="hidden lg:block w-[480px] flex-shrink-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            aria-hidden="true"
          >
            <DataFlowVisual />
          </m.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <m.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        aria-hidden="true"
      >
        <m.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4 text-text-muted" />
        </m.div>
      </m.div>
    </section>
  );
}
