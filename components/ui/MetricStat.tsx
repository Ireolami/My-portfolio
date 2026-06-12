"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface MetricStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  className?: string;
}

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [count, setCount] = useState(0);
  const startTime = useRef<number | null>(null);
  const rafId = useRef<number>(0);

  useEffect(() => {
    if (!active) return;

    const step = (timestamp: number) => {
      if (!startTime.current) startTime.current = timestamp;
      const progress = Math.min((timestamp - startTime.current) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafId.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId.current);
  }, [target, duration, active]);

  return count;
}

export function MetricStat({ value, suffix = "", prefix = "", label, className }: MetricStatProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  const prefersReducedMotion =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false;

  const count = useCountUp(value, 1200, prefersReducedMotion ? false : inView);
  const displayValue = prefersReducedMotion ? value : count;

  return (
    <div ref={ref} className={cn("flex flex-col gap-1", className)}>
      <span className="font-mono text-3xl font-bold text-text-primary tabular-nums">
        {prefix}
        {displayValue.toLocaleString()}
        {suffix}
      </span>
      <span className="text-sm text-text-muted leading-tight">{label}</span>
    </div>
  );
}
