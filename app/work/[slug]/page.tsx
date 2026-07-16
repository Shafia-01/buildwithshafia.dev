import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Play, ArrowRight, Video } from "lucide-react";
import { projects } from "@/content/projects";
import { LetterStagger, FadeRise } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel, PullQuote } from "@/components/typography";
import { VideoPlayer } from "@/components/sections/video-player";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: `${project.title} — Case Study`,
    description: `${project.oneLiner} Built with ${project.stack.aiml.join(", ")}.`,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  if (projectIndex === -1) notFound();

  const project = projects[projectIndex];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  // Specific accent divider logic for CineScope (Wave 5 requirement)
  const isCineScope = project.slug === "cinescope";

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Back Link */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-mono text-meta-xs uppercase text-ink-muted hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>

        {/* Title & One-liner Header */}
        <div className="border-b border-rule pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <SectionNumber number={project.order} name="PROJECT DETAIL" />
            <div className="mt-6">
              <LetterStagger
                text={project.title}
                className="font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight"
              />
            </div>
            <p className="mt-6 font-editorial italic text-headline-sm md:text-headline-md text-ink-soft max-w-4xl leading-snug">
              {project.oneLiner}
            </p>
          </div>

          <div className="flex gap-3 shrink-0 md:mb-2">
            <a
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-ink bg-ink text-paper font-mono text-meta-xs uppercase hover:bg-brass hover:border-brass transition-colors rounded-sm"
            >
              <Github className="w-3.5 h-3.5" /> ↗ GitHub
            </a>

            {project.links.watchDemo ? (
              <a
                href="#demo-video"
                className="inline-flex items-center gap-2 px-4 py-2 border border-brass text-brass font-mono text-meta-xs uppercase hover:bg-brass hover:text-paper transition-colors rounded-sm"
              >
                <Play className="w-3.5 h-3.5" /> ▶ Watch Demo
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 border border-rule-strong bg-paper-soft text-ink-whisper font-mono text-meta-xs uppercase cursor-not-allowed rounded-sm">
                <Video className="w-3.5 h-3.5" /> Demo coming soon
              </div>
            )}
          </div>
        </div>

        {/* Pull Quote & Metric Strip */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 items-start mb-16">
          <div className="space-y-6">
            <PullQuote className="text-quote-lg max-w-2xl">{project.pullQuote}</PullQuote>
          </div>

          {/* Metric Strip (4 cards) */}
          <div className="grid grid-cols-2 gap-4">
            {project.metrics.map((metric, i) => (
              <div key={i} className="p-4 border border-rule-strong bg-paper-soft rounded-sm">
                <span className="block font-display text-headline-md text-brass font-semibold tracking-tight">
                  {metric.split(" ")[0]}
                </span>
                <span className="block font-mono text-[9px] uppercase tracking-wider text-ink-muted mt-1 leading-tight">
                  {metric.split(" ").slice(1).join(" ")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Inline YouTube Video Player */}
        {project.links.watchDemo && (
          <VideoPlayer url={project.links.watchDemo} projectTitle={project.title} />
        )}

        {/* Details Layout */}
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-16">
          {/* Main Column */}
          <div className="space-y-12">
            {/* Problem section with Drop-Cap prose */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                The Problem
              </h2>
              <div className="text-body-md text-ink-soft leading-relaxed drop-cap">
                {project.problem}
              </div>
            </section>

            {/* Solution Section */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                The Solution
              </h2>
              <p className="text-body-md text-ink-soft leading-relaxed">
                {project.solution}
              </p>
            </section>

            {/* Architecture Section */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                System Architecture
              </h2>
              <p className="text-body-sm text-ink-muted leading-relaxed mb-6">
                {project.architecture.description}
              </p>

              {/* Simple Flow Architecture Grid via SVG/CSS lines */}
              <div className="space-y-4 relative pl-8 md:pl-0">
                {/* Connected flow vertical spine */}
                <div className="absolute left-[15px] top-4 bottom-4 w-px bg-brass md:hidden" />

                <div className="grid md:grid-cols-5 gap-4 items-start">
                  {project.architecture.steps.map((step, idx) => (
                    <div key={idx} className="relative flex flex-col md:items-center text-left md:text-center">
                      <div className="flex items-start gap-3 md:flex-col md:items-center md:gap-2">
                        <div className="w-8 h-8 rounded-full border border-brass flex items-center justify-center font-mono text-meta-xs text-brass bg-paper z-10 shrink-0 mt-0.5 md:mt-0">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-ink leading-snug md:mt-2">
                            {step.title}
                          </p>
                          <p className="text-[9.5px] text-ink-muted leading-relaxed mt-1">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      {/* Connection lines on desktop */}
                      {idx < project.architecture.steps.length - 1 && (
                        <div className="hidden md:block absolute top-4 left-[60%] right-[-40%] h-px bg-brass z-0" />
                      )}
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Engineering Decisions (alternating slide-in details) */}
            <section className="space-y-6">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                Key Engineering Decisions
              </h2>
              <div className="grid gap-4">
                {project.engineeringDecisions.map((decision, idx) => (
                  <div
                    key={idx}
                    className="p-6 border border-rule-strong bg-paper-soft hover:border-brass transition-colors rounded-sm"
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-meta-sm text-brass font-bold leading-none">
                        [0{idx + 1}]
                      </span>
                      <div>
                        <h3 className="font-display text-headline-sm text-ink leading-tight mb-2">
                          {decision.title}
                        </h3>
                        <p className="text-body-sm text-ink-soft leading-relaxed">
                          {decision.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Features Grid */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                System Capabilities
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, i) => (
                  <div key={i} className="p-5 border border-rule bg-paper-soft rounded-sm">
                    <h3 className="font-display text-headline-sm text-ink mb-1.5">{feature.title}</h3>
                    <p className="text-body-xs text-ink-soft leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Performance Strip */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                Performance Benchmarks
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.performance.map((metric, i) => (
                  <li key={i} className="p-4 bg-linen-deep/10 border border-rule-strong rounded-sm text-center">
                    <span className="font-mono text-meta-xs text-brass-deep block mb-1">METRIC 0{i + 1}</span>
                    <span className="font-display text-headline-xs text-ink">{metric}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Lessons & Roadmap */}
            <div className="grid sm:grid-cols-2 gap-8 border-t border-rule pt-8">
              <div>
                <h3 className="font-mono text-meta-xs uppercase text-brass mb-3">Lessons Learned</h3>
                <ul className="space-y-2">
                  {project.lessons.map((lesson, i) => (
                    <li key={i} className="text-body-xs text-ink-soft leading-relaxed flex items-start gap-2">
                      <span className="text-brass mt-1">•</span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-mono text-meta-xs uppercase text-brass mb-3">Future Roadmap</h3>
                <ul className="space-y-2">
                  {project.roadmap.map((goal, i) => (
                    <li key={i} className="text-body-xs text-ink-soft leading-relaxed flex items-start gap-2">
                      <span className="text-brass mt-1">→</span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specific subtle red/black divider accent for CineScope only */}
            {isCineScope && (
              <div className="flex items-center justify-center gap-1 py-4">
                <span className="w-16 h-px bg-red-600/40" />
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="w-4 h-4 rounded-full border border-ink bg-transparent" />
                <span className="w-2 h-2 rounded-full bg-red-600" />
                <span className="w-16 h-px bg-red-600/40" />
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">
            {/* Tech Stack Box */}
            <div className="p-6 border border-rule-strong bg-paper-soft rounded-sm">
              <h3 className="font-mono text-meta-xs uppercase text-ink-muted border-b border-rule pb-2 mb-4">
                Tech Stack
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-mono text-[10px] text-brass uppercase font-bold mb-1">AI / ML</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.aiml.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-linen text-ink-soft text-[10px] font-mono rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-brass uppercase font-bold mb-1">Backend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.backend.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-linen text-ink-soft text-[10px] font-mono rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-brass uppercase font-bold mb-1">Frontend</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.frontend.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-linen text-ink-soft text-[10px] font-mono rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-brass uppercase font-bold mb-1">Infra</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.infra.map((s) => (
                      <span key={s} className="px-2 py-0.5 bg-linen text-ink-soft text-[10px] font-mono rounded-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Next Project link card */}
            <Link
              href={`/work/${nextProject.slug}`}
              className="block p-6 border border-rule-strong bg-paper-soft hover:border-brass hover:shadow-sm transition-all duration-base group rounded-sm"
            >
              <MetaLabel className="text-brass">Up Next →</MetaLabel>
              <h3 className="mt-2 font-display text-headline-md text-ink leading-tight group-hover:text-brass transition-colors">
                {nextProject.title}
              </h3>
              <p className="text-body-xs text-ink-soft mt-1 line-clamp-2 leading-relaxed">
                {nextProject.oneLiner}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
