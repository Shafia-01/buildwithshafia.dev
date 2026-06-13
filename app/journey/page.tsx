import type { Metadata } from "next";
import { milestones } from "@/content/timeline/milestones";
import { FadeRise, WordStagger } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel } from "@/components/typography";
import { Award, Briefcase, GraduationCap, School } from "lucide-react";

export const metadata: Metadata = {
  title: "Journey",
  description: "The professional timeline and academic milestones of Shafia Ameeruddin, AI Engineer.",
};

export default function JourneyPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-16">
          <SectionNumber number="02" name="THE JOURNEY" />
          <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
            Chronology of a builder.
          </h1>
          <p className="mt-6 font-editorial italic text-quote text-ink-soft max-w-2xl leading-relaxed">
            <WordStagger text="Tracing the path from foundational computer science theory to shipping agentic systems and multi-modal AI pipelines." />
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
          {/* Vertical spine line */}
          <div className="absolute left-[11px] md:left-1/2 top-0 bottom-0 w-[2px] bg-rule -translate-x-[1px]" />

          <div className="space-y-16">
            {milestones.map((item, index) => {
              const isEven = index % 2 === 0;
              const Icon =
                item.category === "education"
                  ? GraduationCap
                  : item.category === "internship"
                  ? Briefcase
                  : item.category === "achievement"
                  ? Award
                  : School;

              return (
                <div
                  key={item.id}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline bullet dot */}
                  <div className="absolute left-[-29px] md:left-1/2 top-2 md:top-auto w-6 h-6 rounded-full border-2 border-paper bg-paper flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <div
                      className={`w-3.5 h-3.5 rounded-full ${
                        item.highlight ? "bg-brass animate-pulse ring-4 ring-brass-glow" : "bg-ink-muted"
                      }`}
                    />
                  </div>

                  {/* Card Block */}
                  <FadeRise delay={index * 0.05} className="w-full md:w-1/2 px-0 md:px-8">
                    <div
                      className={`relative p-6 border rounded-sm bg-paper-soft hover:border-brass transition-all duration-base ${
                        item.highlight ? "border-brass ring-1 ring-brass-glow" : "border-rule-strong"
                      }`}
                    >
                      {/* Mobile Date */}
                      <div className="md:hidden mb-2">
                        <span className="font-mono text-meta-xs tracking-wider text-brass-deep font-semibold">
                          {item.date}
                        </span>
                      </div>

                      {/* Header row */}
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-1.5 rounded-sm bg-linen text-ink-soft">
                          <Icon className="w-4 h-4" />
                        </div>
                        <MetaLabel className="text-brass">
                          {item.category.toUpperCase()}
                        </MetaLabel>
                      </div>

                      <h3 className="font-display text-headline-sm md:text-headline-md text-ink leading-tight">
                        {item.title}
                      </h3>
                      <p className="font-mono text-meta-xs text-ink-muted mt-1 uppercase">
                        {item.organization}
                      </p>

                      <p className="mt-3 text-body-sm text-ink-soft leading-relaxed">
                        {item.description}
                      </p>

                      {/* GDG Promotion Path badges */}
                      {item.id === "gdg-pr-associate" && (
                        <>
                          <div className="mt-4 pt-3 border-t border-rule/50 flex items-center justify-between">
                            <span className="font-mono text-[9px] uppercase tracking-wider text-brass font-bold">
                              Promotion Path
                            </span>
                            <span className="font-mono text-[9px] uppercase tracking-wider text-brass-deep bg-linen px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                              Promoted to Manager ↓
                            </span>
                          </div>
                          {/* Visual Promotion Connector (Desktop) */}
                          <div 
                            className="hidden md:block absolute left-full top-1/2 w-8 border-y-2 border-r-2 border-dashed border-brass/40 rounded-r-md pointer-events-none"
                            style={{ height: "38.5rem" }}
                          >
                            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rotate-90 text-brass">
                              <svg className="w-3 h-3 fill-brass" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        </>
                      )}

                      {item.id === "gdg-social-media-manager" && (
                        <div className="mt-4 pt-3 border-t border-rule/50 flex items-center justify-between">
                          <span className="font-mono text-[9px] uppercase tracking-wider text-brass font-bold">
                            Promotion Path
                          </span>
                          <span className="font-mono text-[9px] uppercase tracking-wider text-brass-deep bg-linen px-2 py-0.5 rounded-full flex items-center gap-1 font-bold">
                            ↑ Promoted from Associate
                          </span>
                        </div>
                      )}
                    </div>
                  </FadeRise>

                  {/* Date Block (Desktop) */}
                  <div className={`hidden md:block w-1/2 px-8 ${isEven ? "text-right" : "text-left"}`}>
                    <span className="font-mono text-meta-sm tracking-wider text-brass-deep font-semibold">
                      {item.date}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
