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
            Engineering with Intent
          </h1>
        </div>

        {/* Drop cap opener & intro */}
        <div className="max-w-3xl mx-auto mb-20">
          <p className="font-editorial italic text-headline-sm md:text-headline-md text-ink-soft leading-relaxed drop-cap">
            I don't build software simply because I enjoy writing code. I build because I enjoy solving problems, refining ideas, and creating products that people genuinely find useful. Engineering is the foundation, but usefulness is always the goal.
            Every project begins with an unfamiliar problem, imperfect constraints, and a series of decisions that gradually transform ideas into reliable systems. Over time, I've found myself spending less energy chasing the newest technologies and more energy understanding how different pieces fit together. Whether I'm building AI-powered applications, backend services, evaluation pipelines, or developer tools, I'm drawn to systems that can be understood, tested, improved, and trusted.
            For me, good engineering doesn't stop at making something work - it also considers how people experience it. I enjoy building software that is technically sound, practically useful, and thoughtfully designed, where reliability, usability, and visual clarity evolve together rather than competing for attention.
          </p>
        </div>

        {/* 4 Essay panels: Who, What, Why, How */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-24">
          <FadeRise delay={0.05} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHO I AM] The Engineer
            </h2>
            <div className="space-y-5 text-body-sm text-ink-soft leading-relaxed">
              <p>
                I have gradually become an engineer who enjoys building complete products rather than isolated features. What excites me isn't a single framework, model, or technology - it's understanding how an entire system comes together. I naturally gravitate toward work that spans architecture, backend services, AI integration, user experience, and deployment because each layer contributes to the reliability of the final product.
              </p>

              <p>
                As my projects have grown in complexity, I've become less interested in proving that something can work and more interested in making sure it continues to work under changing conditions. That shift has shaped how I approach engineering today. I enjoy taking loosely defined ideas, understanding the underlying problem, and turning them into structured systems that people can actually use.
              </p>

              <p>
                I also enjoy the iterative nature of building. Even after a feature works, I'm usually asking what could make it clearer, simpler, or more valuable. The most rewarding part of engineering, for me, isn't reaching the finish line - it's continuously refining a product until both the technology and the experience feel intentional.
              </p>
            </div>
          </FadeRise>

          <FadeRise delay={0.1} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHAT I BUILD] The Craft
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              Across my work, the technologies evolve, but the engineering patterns remain remarkably consistent. I tend to build systems that combine intelligent decision-making with dependable software engineering. Some retrieve and organize knowledge, others coordinate multiple AI components, evaluate machine learning models, process live data streams, or automate repetitive workflows. Although the domains vary, the objective rarely changes: transform complex technology into products that solve real problems in a reliable and maintainable way.
              Rather than treating artificial intelligence as the product itself, I see it as one component within a larger engineering system. APIs, databases, backend services, evaluation pipelines, frontend experiences, and deployment workflows all contribute equally to whether a product succeeds. The most valuable software, in my experience, isn't defined by the sophistication of a single model, but by how seamlessly every part of the system works together.
              I'm also constantly thinking about what could make a product better - not just technically, but experientially. Sometimes that's a new capability, sometimes it's a simpler workflow, and sometimes it's a small interaction that makes an application feel more intuitive. I enjoy designing products that people don't just use, but genuinely enjoy using.
            </p>
          </FadeRise>

          <FadeRise delay={0.15} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [WHY I BUILD] The Purpose
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              My perspective on engineering has been shaped as much by experimentation as by building products. Working on benchmarking pipelines, real-time monitoring systems, computer vision applications, and production-oriented AI software reinforced an important lesson: impressive demonstrations are easier to create than dependable systems. Reliability comes from careful evaluation, thoughtful architecture, and continuous refinement - not from adding more complexity.
              That experience has made me value engineering practices that often receive less attention than new technologies. Clear interfaces, measurable outcomes, repeatable evaluation, documentation, observability, and graceful failure handling consistently have a greater impact on the quality of a product than any individual framework or model.
              More importantly, I believe technology should simplify complexity, not introduce it. I enjoy building software that helps people make better decisions, reduces friction in their workflow, or makes something that once felt complicated feel natural. For me, that's where engineering becomes meaningful.
            </p>
          </FadeRise>

          <FadeRise delay={0.2} className="space-y-4">
            <h2 className="font-mono text-meta-xs uppercase tracking-wider text-brass font-bold border-b border-rule pb-2">
              [HOW I WORK] The Method
            </h2>
            <p className="text-body-sm text-ink-soft leading-relaxed">
              I usually begin with architecture before implementation. I prefer understanding how information flows through a system, identifying potential failure points, and defining clear responsibilities between components before writing significant amounts of code. Once that foundation is in place, I work iteratively - building small pieces, validating assumptions early, documenting important decisions, and refining the system through testing and observation rather than intuition alone.
              I also believe engineering doesn't end when a feature works. Evaluation, debugging, profiling, and incremental improvement are integral parts of the development process. Every iteration should leave the system a little clearer, a little more maintainable, and a little easier to extend than before.
              Beyond functionality, I pay close attention to how software feels. Visual design, interaction, and information hierarchy aren't separate from engineering - they're part of how people understand a system. I enjoy refining interfaces until they feel intuitive, not because aesthetics are the goal, but because thoughtful design reduces cognitive effort and helps people focus on what they're trying to accomplish.
              When I build something, I'm rarely asking, "Is it finished?" More often, I'm asking, "How can this be more useful?" That question continues to shape every product I create.
            </p>
          </FadeRise>
        </div>

        {/* Manifesto closer */}
        <FadeRise delay={0.25} className="max-w-4xl mx-auto border border-rule-strong bg-paper-soft p-8 text-center rounded-sm">
          <h3 className="font-display text-headline-md text-ink leading-tight mb-4">
            "I don't measure success by how much technology I can fit into a product. I measure it by whether the product solves the right problem, feels intuitive to use, and continues to become better with every iteration."
          </h3>
          <p className="font-mono text-meta-xs uppercase tracking-wider text-brass">
            — Shafia Ameeruddin · 2026
          </p>
        </FadeRise>
      </div>
    </main>
  );
}
