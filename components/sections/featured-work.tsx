"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, PlayCircle } from "lucide-react";
import { FadeRise } from "@/components/motion/primitives";
import { MetaLabel, SectionNumber } from "@/components/typography";
import { featuredProject } from "@/content/meta/site";
import { projects } from "@/content/projects";

export function FeaturedWork() {
  const [isHovered, setIsHovered] = useState(false);

  // Find the project configuration and get watchDemo link
  const project = projects.find((p) => p.slug === featuredProject.slug);
  const watchDemoUrl = project?.links?.watchDemo;

  const getYouTubeId = (urlStr: string): string | null => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = urlStr.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    } catch {
      return null;
    }
  };

  const videoId = watchDemoUrl ? getYouTubeId(watchDemoUrl) : null;

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
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group block relative overflow-hidden border border-rule-strong bg-paper-soft"
          >
            {/* Poster placeholder — replaceable */}
            <div className="aspect-[16/10] relative bg-gradient-to-br from-linen via-paper-soft to-linen-deep overflow-hidden">
              {/* YouTube Thumbnail Background if available */}
              {videoId && (
                <img
                  src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                  alt={`${project?.title} Thumbnail`}
                  className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-base z-0"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                  }}
                />
              )}
              {/* Decorative grid pattern */}
              <div
                className="absolute inset-0 opacity-30 z-10"
                style={{
                  backgroundImage:
                    "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
                  backgroundSize: "64px 64px",
                }}
              />
              {/* Center play icon */}
              {(!videoId || !isHovered) && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <PlayCircle className="w-16 h-16 stroke-[1] text-ink-soft group-hover:text-brass transition-colors duration-base" />
                </div>
              )}

              {/* YouTube Video Preview on Hover */}
              {videoId && isHovered && (
                <div className="absolute inset-0 z-20 transition-opacity duration-500">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-105"
                    allow="autoplay; encrypted-media"
                    title={`${project?.title || "Project"} Demo Video`}
                  />
                  {/* Overlay to ensure clicks register on the Link and not the iframe */}
                  <div className="absolute inset-0 bg-transparent" />
                </div>
              )}

              {/* Brass corner-tick (appears on hover) */}
              <div className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-base z-30">
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
