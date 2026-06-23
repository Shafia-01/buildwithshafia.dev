import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Beaker, CheckCircle2 } from "lucide-react";
import { labItems } from "@/content/lab";
import { LetterStagger } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel } from "@/components/typography";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return labItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = labItems.find((p) => p.slug === slug);
  if (!item) return {};

  return {
    title: `${item.title} — Lab Logs`,
    description: `Engineering logs for ${item.title}. Stack: ${item.stack.join(", ")}.`,
  };
}

export default async function LabDetailPage({ params }: Props) {
  const { slug } = await params;
  if (slug === "cinescope-build-journey") {
    redirect("/work/cinescope");
  }
  const itemIndex = labItems.findIndex((p) => p.slug === slug);
  if (itemIndex === -1) notFound();

  const item = labItems[itemIndex];
  const nextItem = labItems[(itemIndex + 1) % labItems.length];
  const nextItemHref = nextItem.slug === "cinescope-build-journey" ? "/work/cinescope" : `/lab/${nextItem.slug}`;

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Back Link */}
        <Link
          href="/lab"
          className="inline-flex items-center gap-2 font-mono text-meta-xs uppercase text-ink-muted hover:text-ink transition-colors mb-12 group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          Back to Lab
        </Link>

        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-12">
          <SectionNumber number="04" name={item.category.toUpperCase()} />
          <div className="mt-6">
            <LetterStagger
              text={item.title}
              className="font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight"
            />
          </div>
          <p className="mt-6 font-editorial italic text-headline-sm md:text-headline-md text-ink-soft max-w-3xl leading-relaxed">
            {item.objective}
          </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-[1.8fr_1fr] gap-12 lg:gap-16">
          {/* Main Column */}
          <div className="space-y-12">
            {/* System Architecture */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                System Architecture
              </h2>
              <p className="text-body-sm text-ink-muted leading-relaxed mb-6">
                {item.architecture.description}
              </p>

              {/* Step flow */}
              <div className="space-y-4 pl-4 border-l-2 border-brass">
                {item.architecture.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="font-mono text-meta-xs text-brass font-bold mt-0.5 shrink-0">
                      STEP {idx + 1}
                    </span>
                    <p className="text-body-sm text-ink-soft leading-relaxed">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Engineering work */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                Engineering Implementation
              </h2>
              <div className="space-y-4">
                {item.engineeringWork.map((work, idx) => (
                  <div key={idx} className="p-5 border border-rule-strong bg-paper-soft rounded-sm">
                    <p className="text-body-sm text-ink-soft leading-relaxed">
                      {work}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Ingestion results list */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                Measured Results & Benchmarks
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {item.results.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-4 border border-rule bg-paper-soft rounded-sm">
                    <CheckCircle2 className="w-5 h-5 text-success shrink-0" />
                    <span className="font-mono text-meta-xs text-ink font-medium">
                      {res}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons Learned */}
            <section className="space-y-4">
              <h2 className="font-display text-headline-lg text-ink border-b border-rule pb-2">
                Lessons & Retrospectives
              </h2>
              <ul className="space-y-3">
                {item.lessons.map((lesson, idx) => (
                  <li key={idx} className="text-body-sm text-ink-soft leading-relaxed flex items-start gap-2">
                    <span className="text-brass mt-1 shrink-0">•</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 lg:sticky lg:top-24 h-fit">
            {/* Tech Stack Box */}
            <div className="p-6 border border-rule-strong bg-paper-soft rounded-sm">
              <h3 className="font-mono text-meta-xs uppercase text-ink-muted border-b border-rule pb-2 mb-4">
                Stack & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((s) => (
                  <span key={s} className="px-3 py-1 bg-linen text-ink-soft text-meta-xs font-mono rounded-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Next Lab Item Card */}
            <Link
              href={nextItemHref}
              className="block p-6 border border-rule-strong bg-paper-soft hover:border-brass hover:shadow-sm transition-all duration-base group rounded-sm"
            >
              <MetaLabel className="text-brass">Up Next →</MetaLabel>
              <h3 className="mt-2 font-display text-headline-sm text-ink leading-tight group-hover:text-brass transition-colors">
                {nextItem.title}
              </h3>
              <p className="text-body-xs text-ink-soft mt-1 line-clamp-2 leading-relaxed">
                {nextItem.objective}
              </p>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
