import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export function AboutTeaser() {
  return (
    <section className="section bg-bg" aria-labelledby="about-teaser-heading">
      <div className="container-content">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Photo */}
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div className="relative aspect-[4/5] rounded-2xl border border-border overflow-hidden shadow-2xl">
                <Image
                  src="/images/profile.jpg"
                  alt="Olayele Gbenga Awujoola — Data Analyst and AI Automation Engineer, Lagos Nigeria"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 90vw, 400px"
                  priority
                />
                {/* Subtle gradient overlay at bottom for text legibility */}
                <div
                  className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
                  style={{
                    background: "linear-gradient(to top, rgba(10,10,11,0.5), transparent)",
                  }}
                  aria-hidden="true"
                />
              </div>

              {/* HMC Tech floating tag */}
              <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-bg-elevated p-3 shadow-xl backdrop-blur-sm">
                <p className="text-xs font-mono text-text-muted">Founder</p>
                <p className="text-sm font-semibold text-text-primary">HMC Tech</p>
                <p className="text-xs text-text-muted">Lagos, Nigeria</p>
              </div>

              {/* Accent glow behind card */}
              <div
                className="absolute -z-10 -bottom-6 -right-6 h-48 w-48 rounded-full opacity-15 blur-2xl"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />
            </div>
          </Reveal>

          {/* Text */}
          <div className="flex flex-col gap-6">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                About
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 id="about-teaser-heading" className="text-text-primary">
                Lagos-based builder. Biochemistry to data science.
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="flex flex-col gap-4 text-text-secondary leading-relaxed">
                <p>
                  I started in biochemistry, moved into data science and AI engineering, and now
                  build systems for real markets — starting with Africa, where connectivity
                  constraints and scale demand honest, robust engineering.
                </p>
                <p>
                  Founder of HMC Tech, where I architect KORVI — a WhatsApp-native AI sales
                  platform built for the businesses that power African economies. I also teach:
                  150+ students have gone through my data skills courses at SQI College of ICT.
                </p>
                <p>
                  I write about mother-tongue education, African tech, and the craft of building
                  reliable systems.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors group"
              >
                Full story
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
