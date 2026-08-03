"use client";

import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { LetterStagger, FadeRise, MagneticButton } from "@/components/motion/primitives";
import { PullQuote, MetaLabel, SectionNumber } from "@/components/typography";
import { site } from "@/content/meta/site";

export function HeroCover() {
  return (
    <section
      data-testid="hero-cover"
      className="min-h-[calc(100vh-4rem)] px-6 lg:px-12 pt-12 pb-20 flex flex-col"
    >
      <div className="max-w-wide w-full mx-auto flex-1 flex flex-col">
        {/* Top strip */}
        <div className="flex items-center justify-between mb-12 md:mb-20">
          <SectionNumber number="00" name="INTRODUCTION" />
          <MetaLabel className="hidden md:inline">vol. 01</MetaLabel>
        </div>

        {/* Massive name */}
        <div className="flex-1 flex flex-col justify-center relative">
          <LetterStagger
            as="h1"
            text="SHAFIA"
            className="font-display font-light text-[20vw] md:text-[15rem] leading-[0.85] tracking-tight text-ink"
          />
          <LetterStagger
            as="h1"
            text="AMEERUDDIN"
            stagger={0.04}
            delay={0.4}
            className="font-display font-light text-[10vw] md:text-[7.5rem] leading-[0.9] tracking-tight text-ink-soft mt-2"
          />

          {/* Brass rule */}
          <FadeRise delay={1.0} className="mt-10 md:mt-14">
            <div className="flex items-center gap-4">
              <div className="h-px w-16 bg-brass" />
              <MetaLabel className="text-ink">
                AI ENGINEER · {site.location.toUpperCase()}
              </MetaLabel>
            </div>
          </FadeRise>

          {/* Pull quote — floats lower-right on desktop */}
          <FadeRise delay={1.2} className="mt-14 md:mt-20 md:ml-auto md:max-w-md">
            <PullQuote className="text-2xl md:text-3xl">
              "{site.differentiator}"
            </PullQuote>
          </FadeRise>
        </div>

        {/* Status + CTAs */}
        <FadeRise delay={1.5} className="mt-16 md:mt-24">
          <div className="flex items-center gap-2 mb-6">
            <span className="inline-block w-2 h-2 rounded-full bg-success animate-brass-pulse" aria-hidden />
            <MetaLabel> Available for AI / GenAI / Software / Founding Engineer roles · 2026</MetaLabel>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticButton
              href="/the-builder"
              testId="hero-cta-builder"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper border border-ink hover:bg-brass hover:border-brass hover:text-paper font-mono text-meta-xs uppercase transition-colors duration-fast"
            >
              The Builder
            </MagneticButton>
            <MagneticButton
              href="/work"
              testId="hero-cta-work"
              className="inline-flex items-center gap-2 px-6 py-3 border border-brass text-brass hover:bg-brass hover:text-paper font-mono text-meta-xs uppercase transition-colors duration-fast"
            >
              See the work <ArrowRight className="w-3.5 h-3.5" />
            </MagneticButton>
            <MagneticButton
              href={site.resumePath}
              testId="hero-cta-resume"
              className="inline-flex items-center gap-2 px-6 py-3 border border-rule-strong text-ink-soft hover:border-ink hover:text-ink font-mono text-meta-xs uppercase transition-colors duration-fast"
            >
              <Download className="w-3.5 h-3.5" /> RESUME
            </MagneticButton>
          </div>
        </FadeRise>

        {/* Scroll cue */}
        <FadeRise delay={1.8} className="mt-20 flex items-center justify-between border-t border-rule pt-6">
          <MetaLabel className="animate-bounce-soft">↓ keep reading</MetaLabel>
          <MetaLabel className="hidden md:inline">⌘K open command palette</MetaLabel>
        </FadeRise>
      </div>
    </section>
  );
}
