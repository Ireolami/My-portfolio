import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ExternalLink, BookOpen, FlaskConical, Cpu, GraduationCap, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { allArticles } from "@/lib/articles";
import type { ArticleCategory, ArticleType } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays, research, and tutorials by Olayele Gbenga Awujoola — on African tech, AI systems, data engineering, and mother-tongue education.",
};

const categoryMeta: Record<ArticleCategory, { label: string; color: string; Icon: React.ElementType }> = {
  research:   { label: "Research",    color: "var(--cat-research)", Icon: FlaskConical },
  ai:         { label: "AI",          color: "var(--cat-ai)",       Icon: Cpu },
  data:       { label: "Data",        color: "var(--cat-data)",     Icon: BookOpen },
  education:  { label: "Education",   color: "#F59E0B",             Icon: GraduationCap },
  engineering:{ label: "Engineering", color: "var(--cat-dev)",      Icon: Wrench },
};

const typeLabel: Record<ArticleType, string> = {
  publication: "Publication",
  essay:       "Essay",
  tutorial:    "Tutorial",
  opinion:     "Opinion",
};

function formatDate(dateStr: string) {
  if (dateStr.startsWith("[TODO")) return "Coming soon";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function ArticleCard({ article }: { article: (typeof allArticles)[number] }) {
  const cat = categoryMeta[article.category];
  const Icon = cat.Icon;
  const isExternal = !!article.externalUrl;
  const isDraft = !!article.draft;

  const href = isExternal
    ? article.externalUrl!
    : `/writing/${article.slug}`;

  const CardInner = (
    <article
      className={`group flex flex-col gap-4 rounded-xl border bg-bg-elevated p-6 h-full transition-colors duration-200 ${
        isDraft
          ? "border-border opacity-70"
          : "border-border hover:border-accent/30"
      }`}
    >
      {/* Top row: category chip + type + draft badge */}
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <div className="flex items-center gap-1.5">
          <Icon className="h-3.5 w-3.5" style={{ color: cat.color }} aria-hidden="true" />
          <span className="text-xs font-mono font-medium" style={{ color: cat.color }}>
            {cat.label}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-text-muted">{typeLabel[article.type]}</span>
          {isDraft && (
            <span className="rounded-full border border-border px-2 py-0.5 text-xs text-text-muted">
              Coming soon
            </span>
          )}
          {isExternal && !isDraft && (
            <ExternalLink className="h-3 w-3 text-text-muted" aria-hidden="true" />
          )}
        </div>
      </div>

      {/* Title */}
      <h2 className="text-base font-semibold text-text-primary leading-snug group-hover:text-accent transition-colors duration-150">
        {article.title}
      </h2>

      {/* Excerpt */}
      <p className="text-sm text-text-secondary leading-relaxed flex-1">
        {article.excerpt}
      </p>

      {/* Footer: date + reading time */}
      <div className="flex items-center justify-between gap-2 pt-2 border-t border-border">
        <time dateTime={article.date} className="text-xs text-text-muted">
          {formatDate(article.date)}
        </time>
        {article.readingTime && (
          <span className="text-xs text-text-muted">{article.readingTime}</span>
        )}
      </div>

      {/* Tags */}
      {article.tags && article.tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-bg-subtle px-2 py-0.5 text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );

  if (isDraft) {
    return <div className="cursor-not-allowed">{CardInner}</div>;
  }

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
        {CardInner}
      </a>
    );
  }

  return (
    <Link href={href} className="block h-full">
      {CardInner}
    </Link>
  );
}

export default function WritingPage() {
  const published = allArticles.filter((a) => !a.draft);
  const drafts = allArticles.filter((a) => a.draft);

  return (
    <main id="main" className="pt-16">
      {/* Hero */}
      <section className="section bg-bg" aria-labelledby="writing-heading">
        <div className="container-content max-w-3xl">
          <Reveal>
            <span className="text-xs font-mono uppercase tracking-[0.08em] text-accent">
              Writing
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 id="writing-heading" className="mt-3 text-text-primary">
              Ideas worth writing down.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-lg text-text-secondary leading-relaxed">
              I write about African tech, AI systems that work in production, the craft of data
              engineering, and why mother-tongue education matters. Infrequent — but only when I
              have something to actually say.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Published */}
      {published.length > 0 && (
        <section className="section bg-bg-subtle pt-0" aria-labelledby="published-heading">
          <div className="container-content">
            <Reveal>
              <h2
                id="published-heading"
                className="text-xs font-mono uppercase tracking-[0.08em] text-accent mb-8"
              >
                Published
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {published.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.05}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Coming soon */}
      {drafts.length > 0 && (
        <section className="section bg-bg" aria-labelledby="upcoming-heading">
          <div className="container-content">
            <Reveal>
              <div className="flex items-center justify-between mb-8">
                <h2
                  id="upcoming-heading"
                  className="text-xs font-mono uppercase tracking-[0.08em] text-accent"
                >
                  Coming soon
                </h2>
                <span className="text-xs text-text-muted">{drafts.length} in progress</span>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {drafts.map((article, i) => (
                <Reveal key={article.slug} delay={i * 0.04}>
                  <ArticleCard article={article} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter / notify CTA */}
      <section className="section bg-bg-subtle" aria-labelledby="notify-heading">
        <div className="container-content">
          <Reveal>
            <div className="rounded-2xl border border-border bg-bg-elevated p-8 sm:p-12 text-center max-w-2xl mx-auto">
              <h2 id="notify-heading" className="text-text-primary">
                Get notified when I publish.
              </h2>
              <p className="mt-3 text-text-secondary leading-relaxed">
                No newsletter cadence to fill. I send one email when something new goes up —
                that is it.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-sm mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for writing notifications"
                  className="flex-1 rounded-lg border border-border bg-bg-subtle px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-colors"
                />
                {/* TODO-CONTENT: wire up newsletter signup — Resend Audiences or Buttondown */}
                <button
                  type="button"
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2 whitespace-nowrap"
                >
                  Notify me
                  <ArrowRight className="inline ml-1.5 h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
              <p className="mt-4 text-xs text-text-muted">No spam. Unsubscribe any time.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
