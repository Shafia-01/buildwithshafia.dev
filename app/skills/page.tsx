import type { Metadata } from "next";
import { skillEcosystem } from "@/content/skills/ecosystem";
import { FadeRise } from "@/components/motion/primitives";
import { SectionNumber } from "@/components/typography";

export const metadata: Metadata = {
  title: "Skills & Capabilities",
  description: "Technical capability clusters and core competencies of Shafia Ameeruddin.",
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-12">
          <SectionNumber number="06" name="CAPABILITIES" />
          <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
            The capability map
          </h1>
          <p className="mt-6 font-editorial italic text-headline-sm md:text-headline-md text-ink-soft max-w-none lg:whitespace-nowrap leading-relaxed">
            The engineering toolkit behind everything I build - from intelligent systems to production applications.
          </p>
        </div>

        {/* 9 Constellation clusters as simple CSS-grid star map cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {skillEcosystem.map((group, idx) => (
            <FadeRise key={group.id} delay={idx * 0.04} className="w-full md:w-[calc((100%-48px)/3)]">
              <div className="p-6 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base h-full flex flex-col justify-between rounded-sm">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brass shrink-0 animate-pulse" />
                    <h3 className="font-mono text-meta-xs uppercase tracking-wider text-ink font-bold">
                      {group.title}
                    </h3>
                  </div>

                  {/* Dot lists without progress percentages */}
                  <ul className="space-y-2.5">
                    {group.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-body-sm text-ink-soft">
                        <span className="w-1 h-1 bg-ink-muted/60 rounded-full shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-rule/50">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-ink-whisper">
                    CLUSTER 0{idx + 1}
                  </span>
                </div>
              </div>
            </FadeRise>
          ))}
        </div>
      </div>
    </main>
  );
}
