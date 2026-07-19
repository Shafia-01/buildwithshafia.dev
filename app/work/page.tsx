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

const PROJECT_TOP_TECH: Record<string, string[]> = {
  "learnify-ai": ["FastAPI", "React", "LangChain", "FAISS", "MongoDB", "JWT"],
  "stratix": ["FastAPI", "Streamlit", "LangGraph", "LangSmith", "SQLite"],
  "cartverse": ["Python", "Streamlit", "Transformers", "SerpAPI", "MySQL"],
  "mediscan": ["PyTorch", "torchvision", "Streamlit", "PyMuPDF", "BeautifulSoup4"],
  "packetwatch": ["Python", "Streamlit", "Scapy", "scikit-learn", "Npcap"],
  "cinescope": ["Vanilla JS", "Node.js", "Express.js", "OMDb API", "localStorage"]
};

// Helper to check if a project belongs to a domain tag filter
function matchesFilter(projectSlug: string, filter: string): boolean {
  if (filter === "All") return true;
  if (filter === "AI-RAG") return projectSlug === "learnify-ai";
  if (filter === "Full-Stack") return projectSlug === "learnify-ai" || projectSlug === "cartverse" || projectSlug === "cinescope";
  if (filter === "Agentic AI") return projectSlug === "stratix" || projectSlug === "learnify-ai";
  if (filter === "CV") return projectSlug === "mediscan" || projectSlug === "cartverse";
  if (filter === "Security") return projectSlug === "packetwatch";
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
              Selected builds
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
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}

function ProjectCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const isFlagship = project.slug === "learnify-ai";

  const getYouTubeId = (urlStr: string): string | null => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = urlStr.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    } catch {
      return null;
    }
  };

  const videoId = project.links.watchDemo ? getYouTubeId(project.links.watchDemo) : null;

  return (
    <FadeRise key={project.slug} delay={index * 0.05} className="h-full">
      <Link
        href={`/work/${project.slug}`}
        data-testid={`project-card-${project.slug}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex flex-col h-full relative overflow-hidden border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base"
      >
        {/* Poster image placeholder matching FeaturedWork styling */}
        <div className="aspect-[16/10] relative bg-gradient-to-br from-linen via-paper-soft to-linen-deep overflow-hidden">
          {/* YouTube Thumbnail Background if available */}
          {videoId && (
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={`${project.title} Thumbnail`}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-base z-0"
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
              }}
            />
          )}
          {/* Decorative grid pattern */}
          <div
            className="absolute inset-0 opacity-20 z-10"
            style={{
              backgroundImage:
                "linear-gradient(var(--rule) 1px, transparent 1px), linear-gradient(90deg, var(--rule) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* Center play icon */}
          {(!videoId || !isHovered) && (
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <Play className="w-12 h-12 stroke-[1] fill-transparent text-ink-soft group-hover:text-brass transition-colors duration-base" />
            </div>
          )}

          {/* YouTube Video Preview on Hover */}
          {videoId && isHovered && (
            <div className="absolute inset-0 z-20 transition-opacity duration-500">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${videoId}&playsinline=1&rel=0&modestbranding=1&enablejsapi=1`}
                className="absolute inset-0 w-full h-full border-0 pointer-events-none scale-105"
                allow="autoplay; encrypted-media"
                title={`${project.title} Demo Video`}
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

        {/* Caption info */}
        <div className="p-6 flex flex-col justify-between flex-1 min-h-[180px]">
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
                {project.slug === "stratix" && (
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
              {PROJECT_TOP_TECH[project.slug]?.slice(0, 5).map((tech) => (
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
}
