"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Play } from "lucide-react";
import { projects } from "@/content/projects";
import { FadeRise } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel } from "@/components/typography";

const FILTER_DOMAINS = [
  { label: "All", value: "All" },
  { label: "AI-RAG", value: "AI-RAG" },
  { label: "Full-Stack", value: "Full-Stack" },
  { label: "Agentic AI", value: "Agentic AI" },
  { label: "CV", value: "CV" },
  { label: "Security", value: "Security" }
];

// Helper to check if a project belongs to a domain tag filter
function matchesFilter(projectSlug: string, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "AI-RAG") return projectSlug === "learnify-ai";
  if (filter === "Full-Stack") return projectSlug === "learnify-ai" || projectSlug === "walmart-innovation-suite" || projectSlug === "cinescope";
  if (filter === "Agentic AI") return projectSlug === "keylytics" || projectSlug === "learnify-ai";
  if (filter === "CV") return projectSlug === "mediscan" || projectSlug === "walmart-innovation-suite";
  if (filter === "Security") return projectSlug === "ai-threat-detection";
  return false;
}

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = projects.filter((p) => matchesFilter(p.slug, activeFilter));

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <SectionNumber number="03" name="THE WORK" />
            <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
              Selected builds.
            </h1>
          </div>

          {/* Custom Domain Filter Chips */}
          <div className="flex flex-wrap gap-2">
            {FILTER_DOMAINS.map((filter) => {
              const active = activeFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-wider border transition-colors duration-fast ${
                    active
                      ? "bg-brass border-brass text-paper"
                      : "bg-paper-soft border-rule text-ink-soft hover:border-ink"
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial 2-column desktop / 1-column mobile Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => {
            const isFlagship = project.slug === "learnify-ai";
            return (
              <FadeRise key={project.slug} delay={index * 0.05}>
                <Link
                  href={`/work/${project.slug}`}
                  data-testid={`project-card-${project.slug}`}
                  className="group block relative overflow-hidden border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base"
                >
                  {/* Poster image placeholder matching FeaturedWork styling */}
                  <div className="aspect-[16/10] relative bg-gradient-to-br from-linen via-paper-soft to-linen-deep overflow-hidden">
                    {/* Decorative grid pattern */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage:
                          "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                      }}
                    />

                    {/* Center play icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex flex-col items-center gap-2 text-ink-soft group-hover:text-brass transition-colors duration-base">
                        <Play className="w-12 h-12 stroke-[1] fill-transparent" />
                        <MetaLabel>Demo preview</MetaLabel>
                      </div>
                    </div>

                    {/* Brass corner-tick (appears on hover) */}
                    <div className="absolute top-4 right-4 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-base">
                      <div className="absolute top-0 right-0 w-full h-px bg-brass" />
                      <div className="absolute top-0 right-0 w-px h-full bg-brass" />
                    </div>
                  </div>

                  {/* Caption info */}
                  <div className="p-6 flex flex-col justify-between min-h-[180px]">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <MetaLabel className={isFlagship ? "text-brass font-bold" : "text-ink-muted"}>
                          {isFlagship ? `${project.order} · FLAGSHIP` : `${project.order} · PROJECT`}
                        </MetaLabel>
                        {/* Domain Tags */}
                        <div className="flex gap-1.5">
                          {project.slug === "learnify-ai" && (
                            <span className="px-2 py-0.5 bg-brass-glow text-brass text-[9px] font-mono rounded-sm">
                              AI-RAG
                            </span>
                          )}
                          {project.slug === "keylytics" && (
                            <span className="px-2 py-0.5 bg-brass-glow text-brass text-[9px] font-mono rounded-sm">
                              AGENTIC AI
                            </span>
                          )}
                        </div>
                      </div>
                      <h2 className="mt-3 font-display text-headline-md text-ink leading-tight">
                        {project.title}
                      </h2>
                      <p className="mt-2 font-editorial italic text-body-sm text-ink-soft line-clamp-2">
                        {project.oneLiner}
                      </p>
                    </div>

                    <div className="mt-4 pt-4 border-t border-rule flex items-center justify-between">
                      <div className="flex gap-2 flex-wrap">
                        {project.stack.aiml.slice(0, 2).map((tech) => (
                          <span key={tech} className="font-mono text-[9px] text-ink-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-1 font-mono text-[10px] uppercase text-brass font-medium">
                        Explore <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeRise>
            );
          })}
        </div>
      </div>
    </main>
  );
}
