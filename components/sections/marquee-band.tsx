"use client";

import { site } from "@/content/meta/site";

export function MarqueeBand() {
  // Double the array so the loop is seamless
  const items = [...site.techStack, ...site.techStack];
  return (
    <section
      data-testid="marquee-band"
      aria-label="Technology stack"
      className="border-y border-rule py-6 overflow-hidden bg-paper-soft"
    >
      <div className="flex gap-12 whitespace-nowrap animate-marquee will-change-transform">
        {items.map((t, i) => (
          <span
            key={i}
            className="font-mono text-meta-xs uppercase text-ink-muted flex items-center gap-12 shrink-0"
          >
            {t}
            <span className="w-1 h-1 rounded-full bg-brass" aria-hidden />
          </span>
        ))}
      </div>
    </section>
  );
}
