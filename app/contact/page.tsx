import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { EmailCopyButton } from "./EmailCopyButton";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Olayele Gbenga Awujoola — Data Analyst and AI Automation Engineer based in Lagos, Nigeria.",
};

const WHATSAPP_URL =
  "https://wa.me/message/PLACEHOLDER?text=Hi%20Olayele%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

const EMAIL = "smarworld25@gmail.com";

export default function ContactPage() {
  return (
    <main id="main" className="pt-16">
      <section className="section bg-bg" aria-labelledby="contact-heading">
        <div className="container-content">
          {/* Page header */}
          <div className="max-w-2xl">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
                Contact
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 id="contact-heading" className="mt-3 text-text-primary">
                Let&apos;s talk.
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-4 text-lg text-text-secondary leading-relaxed">
                Open to Data / AI roles, consulting projects, and collaborations.
                Remote-friendly globally, based in Lagos.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: direct channels */}
            <div className="flex flex-col gap-6">
              <Reveal>
                <h2 className="text-base font-semibold text-text-primary">Direct channels</h2>
              </Reveal>

              {/* Email copy */}
              <Reveal delay={0.04}>
                <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "var(--accent-subtle)" }}
                    >
                      <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">Email</p>
                      <p className="text-sm font-mono text-text-primary">{EMAIL}</p>
                    </div>
                  </div>
                  <EmailCopyButton email={EMAIL} />
                </div>
              </Reveal>

              {/* WhatsApp */}
              <Reveal delay={0.08}>
                <Link
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-4 hover:border-accent/40 transition-colors group"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ background: "rgba(37,211,102,0.12)" }}
                    >
                      <MessageSquare className="h-4 w-4" style={{ color: "#25D166" }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-0.5">WhatsApp</p>
                      <p className="text-sm text-text-primary">Start a conversation</p>
                    </div>
                  </div>
                  <span className="text-xs text-text-muted group-hover:text-accent transition-colors">
                    Open →
                  </span>
                </Link>
              </Reveal>

              {/* Availability note */}
              <Reveal delay={0.12}>
                <div className="rounded-xl border border-border bg-bg-elevated p-4">
                  <p className="text-xs font-mono text-text-muted uppercase tracking-wide mb-2">
                    Availability
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Open to Data / AI roles and select consulting. I respond to emails within 48
                    hours. WhatsApp for faster, more casual conversations.
                  </p>
                </div>
              </Reveal>

              {/* Social links */}
              <Reveal delay={0.16}>
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href="https://github.com/Ireolami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/in/olayele-awujoola"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    LinkedIn
                  </Link>
                  <Link
                    href="https://orcid.org/0000-0002-9432-8984"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted hover:text-text-primary transition-colors"
                  >
                    ORCID
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right: contact form */}
            <div>
              <Reveal>
                <h2 className="text-base font-semibold text-text-primary mb-6">
                  Send a message
                </h2>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
