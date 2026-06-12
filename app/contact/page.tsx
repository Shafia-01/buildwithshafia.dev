"use client";

import { useState } from "react";
import { site } from "@/content/meta/site";
import { LetterStagger, FadeRise } from "@/components/motion/primitives";
import { SectionNumber } from "@/components/typography";
import { Copy, Check, Mail, Linkedin, Github, FileDown } from "lucide-react";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <main className="min-h-screen pt-28 pb-24 px-6 lg:px-12 bg-paper text-ink">
      <div className="max-w-wide mx-auto">
        {/* Header spread section */}
        <div className="border-b border-rule pb-12 mb-16">
          <SectionNumber number="07" name="LET'S BUILD" />
          <div className="mt-8">
            <LetterStagger
              text="Let's build something"
              className="font-display text-display-md md:text-display-lg text-ink leading-[0.9] tracking-tight block"
            />
            <LetterStagger
              text="meaningful."
              className="font-display text-display-md md:text-display-lg text-brass leading-[0.9] tracking-tight block mt-2"
            />
          </div>
        </div>

        {/* 2x2 grid contacts / Stacked Mobile */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Email tile */}
          <div
            onClick={handleCopyEmail}
            className="p-8 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base cursor-pointer flex flex-col justify-between group rounded-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Mail className="w-6 h-6 text-brass" />
                <button
                  type="button"
                  aria-label="Copy email to clipboard"
                  className="p-1.5 rounded-full hover:bg-linen transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5 text-ink-muted" />}
                </button>
              </div>
              <h3 className="font-display text-headline-md text-ink">Email</h3>
              <p className="font-mono text-meta-xs text-ink-soft mt-1 lowercase select-all">
                {site.email}
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-rule/50">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brass group-hover:underline">
                {copied ? "Copied!" : "Click to copy email address"}
              </span>
            </div>
          </div>

          {/* LinkedIn tile */}
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-8 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base flex flex-col justify-between group rounded-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Linkedin className="w-6 h-6 text-brass" />
              </div>
              <h3 className="font-display text-headline-md text-ink">LinkedIn</h3>
              <p className="font-mono text-meta-xs text-ink-soft mt-1 lowercase">
                linkedin.com/in/shafiaameeruddin
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-rule/50">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brass inline-flex items-center gap-0.5 group-hover:underline">
                Connect on LinkedIn ↗
              </span>
            </div>
          </a>

          {/* GitHub tile */}
          <a
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="p-8 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base flex flex-col justify-between group rounded-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <Github className="w-6 h-6 text-brass" />
              </div>
              <h3 className="font-display text-headline-md text-ink">GitHub</h3>
              <p className="font-mono text-meta-xs text-ink-soft mt-1 lowercase">
                github.com/Shafia-01
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-rule/50">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brass inline-flex items-center gap-0.5 group-hover:underline">
                Explore Repositories ↗
              </span>
            </div>
          </a>

          {/* RESUME tile */}
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            className="p-8 border border-rule-strong bg-paper-soft hover:border-brass transition-all duration-base flex flex-col justify-between group rounded-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <FileDown className="w-6 h-6 text-brass" />
              </div>
              <h3 className="font-display text-headline-md text-ink">Curriculum Vitae</h3>
              <p className="font-mono text-meta-xs text-ink-soft mt-1 uppercase">
                Shafia_Ameeruddin_Resume.pdf
              </p>
            </div>
            <div className="mt-8 pt-4 border-t border-rule/50">
              <span className="font-mono text-[9px] uppercase tracking-wider text-brass inline-flex items-center gap-0.5 group-hover:underline">
                Download PDF Resume ↓
              </span>
            </div>
          </a>
        </div>

        {/* Status spread bar */}
        <FadeRise delay={0.2} className="p-8 border border-brass bg-brass-glow text-center rounded-sm">
          <p className="font-mono text-meta-sm tracking-wide text-ink-soft leading-relaxed">
            Available for <span className="text-ink font-semibold">AI Engineer</span> · <span className="text-ink font-semibold">GenAI</span> · <span className="text-ink font-semibold">Software Engineer</span> · <span className="text-ink font-semibold">Founding Engineer</span> roles.
          </p>
          <p className="font-mono text-meta-xs tracking-wider text-ink-muted uppercase mt-3">
            Based in India · Open to remote
          </p>
        </FadeRise>
      </div>
    </main>
  );
}
