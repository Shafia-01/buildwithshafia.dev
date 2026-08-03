import type { Metadata } from "next";
import { SectionNumber } from "@/components/typography";
import { FadeRise } from "@/components/motion/primitives";

export const metadata: Metadata = {
  title: "The Builder",
  description: "Who, What, Why, and How Shafia Ameeruddin approaches engineering systems and product design.",
};

export default function TheBuilderPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-16">
          <SectionNumber number="01" name="THE BUILDER" />
          <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
            Philosophy of engineering
          </h1>
        </div>

        {/* Drop cap opener & intro */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="font-editorial italic text-headline-sm md:text-headline-md text-ink-soft leading-relaxed drop-cap">
            I believe that software is an editorial medium. The code we write, the layouts we design, and the systems we assemble reflect a philosophy of intent. In a world crowded with disposable interfaces, building with intention means prioritizing clarity, performance, and durability over raw volume.
          </p>
        </div>

        {/* 4 Essay panels: Who, What, Why, How */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <FadeRise delay={0.05} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHO] The Engineer
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              I am an AI Systems Engineer who builds intelligent products from idea to production. I do not just configure model parameters; I design the networks, clean the raw inputs, frame user interfaces, and package code into production architectures. My background spans B.Tech CSE foundations to shipping multi-agent corporate systems.
            </p>
          </FadeRise>

          <FadeRise delay={0.1} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHAT] The Craft
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              I craft applications that bridge machine learning capabilities with human actions. This means building emotion-aware multimodal tutor spaces, agentic market research cycles using stateful graphs, and network threat monitors executing packet inspections. I work across Python, Next.js, FastAPI, PyTorch, and Docker.
            </p>
          </FadeRise>

          <FadeRise delay={0.15} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHY] The Purpose
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              Models are only as useful as the pipeline surrounding them. I believe the true challenge of contemporary engineering is not finding larger models, but orchestrating existing resources to deliver reliable outcomes. Speed, data sanitation, robust memory tiers, and offline fallback options are the indicators of a mature system.
            </p>
          </FadeRise>

          <FadeRise delay={0.2} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [HOW] The Method
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              I develop products with a prototype-driven, iterative flow. I set up strict testing environments, inspect network traffic drops, evaluate speaker cosine benchmarks, and structure caching layers to optimize latency. My goal is to build software that is clean, secure, and ready for deployment under high volumes.
            </p>
          </FadeRise>
        </div>

        {/* Manifesto closer */}
        <FadeRise delay={0.25} className="max-w-4xl mx-auto border border-rule-strong bg-paper-soft p-8 text-center rounded-sm">
          <h3 className="font-display text-headline-md text-ink leading-tight mb-4">
            "We build things not to occupy space, but to create meaning."
          </h3>
          <p className="font-mono text-meta-xs uppercase tracking-wider text-brass">
            Shafia Ameeruddin - 2026 Manifesto
          </p>
        </FadeRise>
      </div>
    </main>
  );
}
