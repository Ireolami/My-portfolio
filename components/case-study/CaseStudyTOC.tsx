"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface TOCItem {
  id: string;
  label: string;
}

export function CaseStudyTOC({ items }: { items: TOCItem[] }) {
  const [active, setActive] = useState<string>(items[0]?.id ?? "");

  useEffect(() => {
    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 }
    );

    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="text-sm">
      <p className="mb-3 font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-text-muted">
        On this page
      </p>
      <ul className="flex flex-col gap-0.5 border-l border-border">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={cn(
                "-ml-px block border-l-2 py-1 pl-4 leading-snug transition-colors duration-150",
                active === item.id
                  ? "border-accent font-medium text-accent"
                  : "border-transparent text-text-muted hover:text-text-secondary"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
