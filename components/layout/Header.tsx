"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-30 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-bg/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container-content flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-lg font-semibold text-text-primary hover:text-accent transition-colors focus-visible:outline-accent"
          aria-label="Ireola — home"
        >
          Ireola
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/");
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-3 py-1.5 text-sm font-medium rounded-md transition-colors",
                  "hover:text-text-primary focus-visible:outline-accent",
                  active ? "text-text-primary" : "text-text-secondary"
                )}
              >
                {link.label}
                {active && (
                  <m.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-accent"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTAs + theme toggle */}
        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant="secondary" size="sm" className="gap-1.5">
            <Download className="h-3.5 w-3.5" />
            Resume
          </Button>
          <Button variant="primary" size="sm" className="gap-1.5">
            Book a Call
            <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
