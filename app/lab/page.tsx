import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Beaker, FileText, FlaskConical } from "lucide-react";
import { labItems } from "@/content/lab";
import { FadeRise } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel } from "@/components/typography";

export const metadata: Metadata = {
  title: "The Lab",
  description: "Experimental builds, system benchmarks, and research pipelines engineered by Shafia Ameeruddin.",
};

export default function LabLandingPage() {
  const cyArtItems = labItems.filter((item) => item.category === "CyArt Tech");
  const edunetItems = labItems.filter((item) => item.category === "Edunet Foundation");

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-12">
          <SectionNumber number="04" name="THE LAB" />
          <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
            Engineering experiments
          </h1>
          <p className="mt-6 font-editorial italic text-headline-sm md:text-headline-md text-ink-soft max-w-4xl leading-relaxed">
            Shipped microservices, benchmark logs, and technical utility proofs of concept.
          </p>
        </div>

        <div className="space-y-16">
          {/* Group 1: CyArt Tech */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-rule pb-3">
              <FlaskConical className="w-5 h-5 text-brass" />
              <h2 className="font-mono text-meta-sm uppercase tracking-wider text-ink font-bold">
                CyArt Tech Deliverables
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {cyArtItems.map((item, idx) => (
                <FadeRise key={item.slug} delay={idx * 0.05}>
                  <Link
                    href={`/lab/${item.slug}`}
                    className="group block p-6 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base h-full flex flex-col justify-between rounded-sm"
                  >
                    <div>
                      <MetaLabel className="text-brass">0{idx + 1} · BENCHMARK</MetaLabel>
                      <h3 className="font-display text-headline-sm text-ink mt-3 group-hover:text-brass transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-body-xs text-ink-soft mt-3 line-clamp-3 leading-relaxed">
                        {item.objective}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between">
                      <div className="flex flex-wrap gap-1">
                        {item.stack.slice(0, 2).map((s) => (
                          <span key={s} className="font-mono text-[9px] text-ink-muted">
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase text-brass inline-flex items-center gap-0.5">
                        View Logs <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </FadeRise>
              ))}
            </div>
          </section>

          {/* Group 2: Edunet Foundation */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 border-b border-rule pb-3">
              <Beaker className="w-5 h-5 text-brass" />
              <h2 className="font-mono text-meta-sm uppercase tracking-wider text-ink font-bold">
                Edunet Foundation Projects
              </h2>
            </div>

            <div className="max-w-xl">
              {edunetItems.map((item, idx) => {
                const href = item.slug === "cinescope-build-journey" ? "/work/cinescope" : `/lab/${item.slug}`;
                return (
                  <FadeRise key={item.slug} delay={idx * 0.05}>
                    <Link
                      href={href}
                      className="group block p-6 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base flex flex-col justify-between rounded-sm"
                    >
                    <div>
                      <MetaLabel className="text-brass">01 · INTERNSHIP BUILD</MetaLabel>
                      <h3 className="font-display text-headline-sm text-ink mt-3 group-hover:text-brass transition-colors leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-body-xs text-ink-soft mt-3 leading-relaxed">
                        {item.objective}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between">
                      <div className="flex gap-2">
                        {item.stack.map((s) => (
                          <span key={s} className="font-mono text-[9px] text-ink-muted">
                            {s}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[10px] uppercase text-brass inline-flex items-center gap-0.5">
                        View Log <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                </FadeRise>
              );
            })}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
