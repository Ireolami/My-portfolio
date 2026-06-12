import Link from "next/link";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const footerNav = [
  {
    heading: "Work",
    links: [
      { href: "/projects", label: "Projects" },
      { href: "/services", label: "Services" },
      { href: "/resume", label: "Resume" },
      { href: "/research", label: "Research" },
    ],
  },
  {
    heading: "Writing",
    links: [
      { href: "/writing", label: "Blog" },
      { href: "/writing#newsletter", label: "Newsletter" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "https://github.com/Ireolami", label: "GitHub", external: true },
      { href: "https://linkedin.com/in/olayele-awujoola", label: "LinkedIn", external: true },
    ],
  },
];

const socials = [
  { href: "https://github.com/Ireolami", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/olayele-awujoola", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:smarworld25@gmail.com", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer
      className="border-t border-border bg-bg-elevated"
      aria-label="Site footer"
      data-theme-force="dark"
    >
      <div className="container-content py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="flex flex-col gap-4 md:col-span-1">
            <div>
              <Link
                href="/"
                className="font-display text-xl font-semibold text-text-primary hover:text-accent transition-colors"
              >
                Ireola
              </Link>
              <p className="mt-2 text-sm text-text-muted leading-relaxed">
                Data analyst and AI automation engineer. Building systems that ship and produce
                measurable outcomes.
              </p>
            </div>

            <p className="text-xs text-text-muted">
              Lagos, Nigeria &middot; Working globally, remote
            </p>

            <div className="flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-text-muted border border-border hover:text-accent hover:border-accent/40 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {footerNav.map((section) => (
            <div key={section.heading}>
              <p className="text-xs font-mono uppercase tracking-[0.08em] text-text-muted mb-4">
                {section.heading}
              </p>
              <ul className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={"external" in link && link.external ? "_blank" : undefined}
                      rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1 text-sm text-text-secondary hover:text-text-primary transition-colors"
                    >
                      {link.label}
                      {"external" in link && link.external && (
                        <ExternalLink className="h-3 w-3 opacity-50" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Olayele Gbenga Awujoola. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with Next.js &middot;{" "}
            <Link
              href="https://github.com/Ireolami"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors underline underline-offset-2"
            >
              Open source on GitHub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
