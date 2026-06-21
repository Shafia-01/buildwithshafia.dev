"use client";

import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { FadeRise } from "@/components/motion/primitives";
import { MetaLabel, SectionNumber } from "@/components/typography";
import { featuredProject } from "@/content/meta/site";

export function FeaturedWork() {
  return (
    <section
      data-testid="featured-work"
      className="px-6 lg:px-12 py-24 md:py-32"
    >
      <div className="max-w-wide mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <SectionNumber number="03" name="THE FEATURED WORK" />
            <h2 className="mt-6 font-display text-headline-xl md:text-display-md text-ink leading-[0.95] tracking-tight">
              The crown jewel
            </h2>
          </div>
          <Link
            href="/work"
            data-testid="featured-see-all"
            className="hidden md:inline-flex items-center gap-1.5 font-mono text-meta-xs uppercase text-ink-soft brass-underline"
          >
            See all 6 →
          </Link>
        </div>

        <FadeRise>
          <Link
            href={featuredProject.href}
            data-testid={`featured-card-${featuredProject.slug}`}
            className="group block relative overflow-hidden border border-rule-strong bg-paper-soft"
          >
            {/* Poster placeholder — replaceable */}
            <div className="aspect-[16/10] relative bg-gradient-to-br from-linen via-paper-soft to-linen-deep overflow-hidden">
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
              {/* Center play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex flex-col items-center gap-3 text-ink-soft group-hover:text-brass transition-colors duration-base">
                  <PlayCircle className="w-16 h-16 stroke-[1]" />
                  <MetaLabel>Demo preview · autoplay on hover</MetaLabel>
                </div>
              </div>
              {/* Brass corner-tick (appears on hover) */}
              <div className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                <div className="absolute top-0 right-0 w-full h-px bg-brass" />
                <div className="absolute top-0 right-0 w-px h-full bg-brass" />
              </div>
            </div>

            {/* Caption */}
            <div className="p-6 md:p-10 grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <div>
                <MetaLabel className="text-brass">01 · FLAGSHIP</MetaLabel>
                <h3 className="mt-3 font-display text-headline-lg md:text-display-sm text-ink leading-[1] tracking-tight">
                  {featuredProject.title}
                </h3>
                <p className="mt-3 font-editorial italic text-quote text-ink-soft max-w-4xl">
                  {featuredProject.blurb}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 font-mono text-meta-xs uppercase text-brass brass-underline">
                Read the case study <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </Link>
        </FadeRise>

        {/* Hint for remaining */}
        <FadeRise delay={0.15} className="mt-8 text-center md:text-left">
          <MetaLabel>
            + Stratix · CartVerse · MediScan · PacketWatch · CineScope →
          </MetaLabel>
        </FadeRise>
      </div>
    </section>
  );
}
