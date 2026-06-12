"use client";

import { m, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export function Reveal({ children, className, delay = 0, duration = 0.3 }: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: { opacity: 1, y: 0 },
      };

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration, delay, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}

export function RevealGroup({
  children,
  className,
  stagger = 0.06,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const prefersReducedMotion = useReducedMotion();

  return (
    <m.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: prefersReducedMotion ? 0 : stagger },
        },
      }}
    >
      {children}
    </m.div>
  );
}

export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  const variants: Variants = prefersReducedMotion
    ? { hidden: { opacity: 0 }, visible: { opacity: 1 } }
    : { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } };

  return (
    <m.div
      className={cn(className)}
      variants={variants}
      transition={{ duration: 0.3, ease: EASE_OUT }}
    >
      {children}
    </m.div>
  );
}
