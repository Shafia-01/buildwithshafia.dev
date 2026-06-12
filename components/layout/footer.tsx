import Link from "next/link";
import { site } from "@/content/meta/site";

export function Footer() {
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-rule mt-32 px-6 lg:px-12"
    >
      <div className="max-w-wide mx-auto py-12 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-headline-md text-ink leading-tight">
            Let's build something meaningful.
          </p>
          <p className="font-mono text-meta-xs uppercase text-ink-muted mt-3">
            {site.status} · {site.location}
          </p>
        </div>
        <div className="flex flex-col gap-2 font-mono text-meta-xs uppercase">
          <a href={`mailto:${site.email}`} className="brass-underline text-ink-soft w-fit">
            ↗ Email
          </a>
          <a href={site.linkedin} className="brass-underline text-ink-soft w-fit" target="_blank" rel="noreferrer">
            ↗ LinkedIn
          </a>
          <a href={site.github} className="brass-underline text-ink-soft w-fit" target="_blank" rel="noreferrer">
            ↗ GitHub
          </a>
          <a href={site.resumePath} className="brass-underline text-brass w-fit" target="_blank" rel="noreferrer">
            ↓ RESUME
          </a>
        </div>
        <div className="md:text-right font-mono text-meta-xs uppercase text-ink-muted">
          <Link href="/contact" className="brass-underline">
            → Contact
          </Link>
          <p className="mt-4 normal-case tracking-normal text-ink-whisper">
            © 2026 Shafia Ameeruddin · Built with intention
          </p>
        </div>
      </div>
    </footer>
  );
}
