"use client";

import { useState } from "react";
import { Copy, Check, ExternalLink, MessageCircle, CalendarDays } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const EMAIL = "smarworld25@gmail.com";
const WHATSAPP_URL = "https://wa.me/234?text=Hi%20Ireola%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback: do nothing
    }
  }

  return (
    <section className="section bg-bg" id="contact" aria-labelledby="contact-heading">
      <div className="container-content">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            heading="Let's build something"
            sub="Pick the channel that fits you. I respond within 24 hours."
            align="center"
            id="contact-heading"
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {/* Email */}
          <Reveal delay={0.05}>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-subtle">
                <Copy className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">Email</h3>
                <p className="mt-1 text-sm text-text-muted">
                  Best for detailed project briefs and role inquiries.
                </p>
              </div>
              <div className="mt-auto">
                <p className="mb-3 font-mono text-sm text-text-secondary break-all">{EMAIL}</p>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={copyEmail}
                  className="gap-2 w-full justify-center"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-success" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy email
                    </>
                  )}
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Book a call */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4 rounded-xl border border-accent/30 bg-accent-subtle p-6 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/20">
                <CalendarDays className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">Book a Call</h3>
                <p className="mt-1 text-sm text-text-muted">
                  20-min discovery call. Founders, hiring managers, and clients.
                </p>
              </div>
              <div className="mt-auto">
                {/* TODO-CONTENT: owner to supply Cal.com username */}
                <Button
                  variant="primary"
                  size="sm"
                  className="gap-2 w-full justify-center"
                  onClick={() => window.open("https://cal.com", "_blank")}
                >
                  <CalendarDays className="h-3.5 w-3.5" />
                  Book free 20-min call
                </Button>
              </div>
            </div>
          </Reveal>

          {/* WhatsApp */}
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4 rounded-xl border border-border bg-bg-elevated p-6 h-full">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:rgba(16,185,129,0.1)]">
                <MessageCircle className="h-5 w-5 text-cat-auto" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary">WhatsApp</h3>
                <p className="mt-1 text-sm text-text-muted">
                  For African clients and quick questions. Low-friction.
                </p>
              </div>
              <div className="mt-auto">
                <Button
                  variant="secondary"
                  size="sm"
                  className="gap-2 w-full justify-center border-[color:rgba(16,185,129,0.3)] text-cat-auto hover:bg-[color:rgba(16,185,129,0.08)]"
                  onClick={() => window.open(WHATSAPP_URL, "_blank")}
                >
                  <MessageCircle className="h-3.5 w-3.5" />
                  Message on WhatsApp
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
