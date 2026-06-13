"use client";

import { useActionState } from "react";
import { useSearchParams } from "next/navigation";
import { submitContact } from "@/app/actions/contact";
import type { ActionResult } from "@/app/actions/contact";

const initialState: ActionResult = { success: false };

const inputClass =
  "w-full rounded-lg border border-border bg-bg-subtle px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors";

const selectClass =
  "w-full rounded-lg border border-border bg-bg-subtle px-4 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors appearance-none cursor-pointer";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);
  const searchParams = useSearchParams();
  const preselectedService = searchParams.get("service") ?? "";

  if (state.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-xl border border-[color:var(--success)]/30 bg-[color:var(--success)]/5 p-8 text-center flex flex-col gap-3"
      >
        <div
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: "rgba(34,197,94,0.12)" }}
        >
          <svg className="h-6 w-6" style={{ color: "var(--success)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-base font-semibold text-text-primary">Inquiry received.</p>
        <p className="text-sm text-text-secondary">
          Thank you — I review every inquiry personally and reply within 48 hours. Check your inbox.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5" aria-label="Project inquiry form">
      {/* Honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="sr-only" />

      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-name" className="text-sm font-medium text-text-secondary">
            Full name <span className="text-[color:var(--error)]" aria-label="required">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Amara Okafor"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-email" className="text-sm font-medium text-text-secondary">
            Work email <span className="text-[color:var(--error)]" aria-label="required">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@company.com"
            className={inputClass}
          />
        </div>
      </div>

      {/* Row 2: Company + Service */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-company" className="text-sm font-medium text-text-secondary">
            Company / Organisation
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="Your company (optional)"
            className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-service" className="text-sm font-medium text-text-secondary">
            Service needed
          </label>
          <div className="relative">
            <select
              id="cf-service"
              name="service"
              defaultValue={preselectedService}
              className={selectClass}
            >
              <option value="">Select a service…</option>
              <option value="Data Analytics & Business Intelligence">Data Analytics & BI</option>
              <option value="AI Automation & Workflow Engineering">AI Automation</option>
              <option value="AI Agent Development">AI Agent Development</option>
              <option value="Data Engineering & Pipelines">Data Engineering</option>
              <option value="Research & Statistical Analysis">Research & Analysis</option>
              <option value="Data Training & Consulting">Training & Consulting</option>
              <option value="Other / Not sure yet">Other / Not sure yet</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
              <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Project description */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-message" className="text-sm font-medium text-text-secondary">
          Project description <span className="text-[color:var(--error)]" aria-label="required">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="Describe the problem you need solved. The more context you give, the better I can scope the work."
          className={`${inputClass} resize-y`}
        />
        <p className="text-xs text-text-muted">What problem do you need solved? What data do you have? What outcome matters?</p>
      </div>

      {/* Row 3: Budget + Timeline */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-budget" className="text-sm font-medium text-text-secondary">
            Budget range
          </label>
          <div className="relative">
            <select id="cf-budget" name="budget" className={selectClass}>
              <option value="">Prefer not to say</option>
              <option value="Under $500">Under $500</option>
              <option value="$500 – $2,000">$500 – $2,000</option>
              <option value="$2,000 – $5,000">$2,000 – $5,000</option>
              <option value="$5,000 – $10,000">$5,000 – $10,000</option>
              <option value="$10,000+">$10,000+</option>
              <option value="Not sure yet">Not sure yet</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
              <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="cf-timeline" className="text-sm font-medium text-text-secondary">
            Timeline
          </label>
          <div className="relative">
            <select id="cf-timeline" name="timeline" className={selectClass}>
              <option value="">Flexible</option>
              <option value="ASAP">ASAP</option>
              <option value="Within 1 month">Within 1 month</option>
              <option value="1 – 3 months">1 – 3 months</option>
              <option value="3 – 6 months">3 – 6 months</option>
              <option value="Ongoing / retainer">Ongoing / retainer</option>
            </select>
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
              <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* How did you find me */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="cf-source" className="text-sm font-medium text-text-secondary">
          How did you find me?
        </label>
        <div className="relative">
          <select id="cf-source" name="source" className={selectClass}>
            <option value="">Select one (optional)</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="GitHub">GitHub</option>
            <option value="Referral">Referral / word of mouth</option>
            <option value="Google Search">Google search</option>
            <option value="Twitter / X">Twitter / X</option>
            <option value="Other">Other</option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2" aria-hidden="true">
            <svg className="h-4 w-4 text-text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {state.error && (
        <p role="alert" aria-live="polite" className="rounded-lg border border-[color:var(--error)]/30 bg-[color:var(--error)]/5 px-4 py-2.5 text-sm text-[color:var(--error)]">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-lg bg-accent py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending inquiry…" : "Send inquiry →"}
      </button>

      <p className="text-center text-xs text-text-muted">
        I review every inquiry personally. No spam, no auto-responders.
      </p>
    </form>
  );
}
