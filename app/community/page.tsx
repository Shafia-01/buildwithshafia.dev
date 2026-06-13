"use client";

import { useState } from "react";
import { communityNetwork, communityStats } from "@/content/community/network";
import { FadeRise } from "@/components/motion/primitives";
import { SectionNumber, MetaLabel } from "@/components/typography";
import { ChevronDown, ChevronUp, Network, Users } from "lucide-react";

export default function CommunityPage() {
  const [openAccordions, setOpenAccordions] = useState<Record<string, boolean>>({
    gdg: true
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Header Section */}
        <div className="border-b border-rule pb-12 mb-12">
          <SectionNumber number="05" name="COMMUNITY" />
          <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
            Developer ecology
          </h1>
          <p className="mt-6 font-editorial italic text-headline-sm md:text-headline-md text-ink-soft max-w-4xl leading-relaxed">
            Collaborative leadership, group orchestration, and metrics-driven community impact.
          </p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {communityStats.map((stat, i) => (
            <div key={i} className="p-5 border border-rule-strong bg-paper-soft text-center rounded-sm">
              <span className="block font-display text-display-xs text-brass font-bold leading-none">
                {stat.metric}
              </span>
              <span className="block font-mono text-[9px] uppercase tracking-wider text-ink-muted mt-2">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Community Node List (Mobile & Desktop Accordion/Tree layout) */}
        <div className="grid md:grid-cols-[1fr_2.5fr] gap-8 items-start">
          <div className="p-6 border border-rule-strong bg-paper-soft rounded-sm">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-5 h-5 text-brass" />
              <h3 className="font-display text-headline-sm text-ink">Shafia Ameeruddin</h3>
            </div>
            <p className="text-body-xs text-ink-soft leading-relaxed">
              Serving as a bridge between foundational developer groups and academic coordination panels in India.
            </p>
            <div className="mt-6 space-y-2 font-mono text-[10px] text-brass uppercase font-bold">
              <div>→ GDG Social Media Manager & Team Lead</div>
              <div>→ IEEE Student Coordinator</div>
              <div>→ Placement Cell Student Coordinator</div>
            </div>
          </div>

          <div className="space-y-4">
            {communityNetwork.map((node, index) => {
              const isOpen = !!openAccordions[node.id];
              return (
                <FadeRise key={node.id} delay={index * 0.05} className="w-full">
                  <div className="border border-rule-strong bg-paper-soft rounded-sm">
                    {/* Header trigger */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(node.id)}
                      className="w-full flex items-center justify-between p-5 text-left font-display text-headline-sm md:text-headline-md text-ink hover:text-brass transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Network className="w-4 h-4 text-brass" />
                        <span>{node.label}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-ink-muted" /> : <ChevronDown className="w-4 h-4 text-ink-muted" />}
                    </button>

                    {/* Accordion content */}
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-rule/50 space-y-4">
                        {node.connections.map((conn, idx) => (
                          <div key={idx} className="pl-4 border-l border-brass/50">
                            <h4 className="font-mono text-meta-xs text-brass uppercase font-bold mb-2">
                              {conn.label}
                            </h4>
                            <ul className="space-y-1.5">
                              {conn.subImpacts?.map((imp, i) => (
                                <li key={i} className="text-body-xs text-ink-soft leading-relaxed list-disc list-inside">
                                  {imp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </FadeRise>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
