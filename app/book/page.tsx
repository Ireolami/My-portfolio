import type { Metadata } from "next";
import Link from "next/link";
import { CalendarClock, ArrowLeft, Mail, MessageSquare } from "lucide-react";
import { Suspense } from "react";
import { CalEmbed } from "@/components/contact/CalEmbed";

export const metadata: Metadata = {
  title: "Book a Call",
  description:
    "Schedule a free 20-minute intro call with Olayele Awujoola — Data Analyst and AI Automation Engineer based in Lagos, Nigeria.",
};

export default function BookPage() {
  return (
    <main id="main" className="min-h-screen pt-24 pb-24">
      <div className="container-content">
        {/* Back link */}
        <Link
          href="/contact"
          className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-text-primary transition-colors mb-10"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to contact
        </Link>

        {/* Two-column layout: info left, calendar right */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[320px_1fr] lg:gap-14 items-start">
          {/* Left — call details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <CalendarClock className="h-4 w-4 text-accent" />
                <span className="text-xs font-medium text-accent uppercase tracking-widest">
                  Book a Call
                </span>
              </div>
              <h1 className="text-3xl font-bold text-text-primary leading-tight mb-3">
                20-min intro call
              </h1>
              <p className="text-text-secondary leading-relaxed">
                Pick a slot that works for you. No prep needed — just show up and tell me what you
                are trying to build.
              </p>
            </div>

            {/* What we cover */}
            <div className="rounded-xl border border-border bg-bg-elevated p-5 flex flex-col gap-3">
              <p className="text-sm font-semibold text-text-primary">What we cover</p>
              <ul className="flex flex-col gap-2.5 text-sm text-text-secondary">
                {[
                  "Your data or automation problem",
                  "Whether I am the right fit",
                  "Rough scope, timeline, and next steps",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Prefer not to call? */}
            <div className="flex flex-col gap-2">
              <p className="text-xs font-medium text-text-muted uppercase tracking-widest">
                Prefer async?
              </p>
              <Link
                href="mailto:smarworld25@gmail.com"
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <Mail className="h-4 w-4 text-accent flex-shrink-0" />
                smarworld25@gmail.com
              </Link>
              <Link
                href="https://wa.me/2349045232203?text=Hi%20Olayele%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm text-text-secondary hover:text-text-primary transition-colors"
              >
                <MessageSquare className="h-4 w-4 flex-shrink-0" style={{ color: "#25D166" }} />
                WhatsApp
              </Link>
            </div>
          </div>

          {/* Right — Cal.com embed */}
          <div
            className="rounded-2xl border border-border bg-bg-elevated overflow-hidden"
            style={{ minHeight: "680px" }}
          >
            <Suspense
              fallback={
                <div className="flex items-center justify-center h-full min-h-[680px]">
                  <div className="flex flex-col items-center gap-3 text-text-muted">
                    <CalendarClock className="h-8 w-8 animate-pulse" />
                    <p className="text-sm">Loading calendar…</p>
                  </div>
                </div>
              }
            >
              <CalEmbed />
            </Suspense>
          </div>
        </div>
      </div>
    </main>
  );
}
