import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Mail, MessageSquare, Clock, Globe } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";
import { EmailCopyButton } from "./EmailCopyButton";

export const metadata: Metadata = {
  title: "Contact — Start a Project",
  description:
    "Send a project inquiry to Olayele Gbenga Awujoola — Data Analyst and AI Automation Engineer. Open to data, AI, and automation projects globally.",
};

const EMAIL = "smarworld25@gmail.com";
const WHATSAPP_URL =
  "https://wa.me/message/PLACEHOLDER?text=Hi%20Olayele%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.";

const reasons = [
  {
    icon: Clock,
    title: "48-hour response",
    desc: "Every inquiry gets a personal reply — not an auto-responder.",
  },
  {
    icon: Globe,
    title: "Remote-friendly globally",
    desc: "Lagos-based, working with clients across Africa, Europe, and the Americas.",
  },
  {
    icon: MessageSquare,
    title: "Clear scoping",
    desc: "After your inquiry I send a plain-English proposal: what gets built, by when, and how we measure success.",
  },
];

export default function ContactPage() {
  return (
    <main id="main" className="pt-16">
      {/* Page hero */}
      <section className="section bg-bg pb-0" aria-labelledby="contact-heading">
        <div className="container-content max-w-3xl">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="contact-heading" className="mt-3 text-text-primary">
              Start a project.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              Fill in what you know — even rough details help. I will ask the right follow-up
              questions to scope the work properly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main two-column layout */}
      <section className="section bg-bg" aria-label="Contact details and inquiry form">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16">

            {/* Left: reasons + channels */}
            <div className="flex flex-col gap-8">

              {/* Why work with me */}
              <Reveal>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base font-semibold text-text-primary">
                    What happens when you reach out
                  </h2>
                  <ul className="flex flex-col gap-4">
                    {reasons.map((r) => {
                      const Icon = r.icon;
                      return (
                        <li key={r.title} className="flex items-start gap-3">
                          <div
                            className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
                            style={{ background: "var(--accent-subtle)" }}
                          >
                            <Icon className="h-4 w-4 text-accent" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-sm font-medium text-text-primary">{r.title}</p>
                            <p className="mt-0.5 text-sm text-text-muted leading-relaxed">{r.desc}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Reveal>

              {/* Divider */}
              <div className="border-t border-border" role="separator" />

              {/* Direct channels */}
              <Reveal delay={0.05}>
                <div className="flex flex-col gap-4">
                  <h2 className="text-base font-semibold text-text-primary">
                    Prefer direct contact?
                  </h2>

                  {/* Email */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-4">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "var(--accent-subtle)" }}
                      >
                        <Mail className="h-4 w-4 text-accent" aria-hidden="true" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs text-text-muted">Email</p>
                        <p className="text-sm font-mono text-text-primary truncate">{EMAIL}</p>
                      </div>
                    </div>
                    <EmailCopyButton email={EMAIL} />
                  </div>

                  {/* WhatsApp */}
                  <Link
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 rounded-xl border border-border bg-bg-elevated p-4 hover:border-accent/40 transition-colors group"
                    aria-label="Open WhatsApp conversation"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                        style={{ background: "rgba(37,211,102,0.12)" }}
                      >
                        <MessageSquare className="h-4 w-4" style={{ color: "#25D166" }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-text-muted">WhatsApp</p>
                        <p className="text-sm text-text-primary">Start a conversation</p>
                      </div>
                    </div>
                    <span className="text-xs text-text-muted group-hover:text-accent transition-colors shrink-0">
                      Open →
                    </span>
                  </Link>
                </div>
              </Reveal>

              {/* Social links */}
              <Reveal delay={0.1}>
                <div className="flex items-center gap-4 flex-wrap">
                  {[
                    { label: "GitHub", href: "https://github.com/Ireolami" },
                    { label: "LinkedIn", href: "https://linkedin.com/in/olayele-awujoola" },
                    { label: "ORCID", href: "https://orcid.org/0000-0002-9432-8984" },
                  ].map((s) => (
                    <Link
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-muted hover:text-text-primary transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Right: lead-gen form */}
            <Reveal delay={0.05}>
              <div className="rounded-2xl border border-border bg-bg-elevated p-6 sm:p-8">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold text-text-primary">Send a project inquiry</h2>
                  <p className="mt-1 text-sm text-text-muted">
                    Fields marked <span className="text-[color:var(--error)]">*</span> are required.
                  </p>
                </div>
                <Suspense fallback={<div className="h-96 animate-pulse rounded-xl bg-bg-subtle" />}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="section bg-bg-subtle" aria-labelledby="faq-heading">
        <div className="container-content max-w-3xl">
          <Reveal>
            <h2 id="faq-heading" className="text-base font-semibold text-text-primary mb-6">
              Common questions
            </h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {[
              {
                q: "Do you work with clients outside Nigeria?",
                a: "Yes. I work remotely with clients across Africa, Europe, the UK, and North America. Timezone coordination is straightforward — I keep flexible hours.",
              },
              {
                q: "How long does a typical project take?",
                a: "Small automations: 1–2 weeks. Analytics dashboards: 2–4 weeks. Full AI agent builds: 4–8 weeks. I scope every project individually and give you a timeline in the proposal.",
              },
              {
                q: "What happens if I don't have all the data yet?",
                a: "That is fine — mention it in your inquiry. Part of what I do is help clients assess what data they have, what they need to collect, and how to build the infrastructure to capture it.",
              },
              {
                q: "Can I hire you on a retainer?",
                a: "Yes. Monthly retainer engagements are available for ongoing analytics support, automation maintenance, or embedded advisory work. Select 'Ongoing / retainer' in the timeline field.",
              },
            ].map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04}>
                <div className="rounded-xl border border-border bg-bg-elevated p-5">
                  <p className="text-sm font-semibold text-text-primary">{item.q}</p>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.a}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
