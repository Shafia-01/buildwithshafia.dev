"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

const EASE_EDITORIAL: [number, number, number, number] = [0.16, 1, 0.3, 1];

// ── FadeRise — opacity 0→1 + y(24→0) ────────────────────────────────
export function FadeRise({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span" | "p";
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE_EDITORIAL, delay }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// ── LetterStagger — per-letter mask-clip reveal ─────────────────────
export function LetterStagger({
  text,
  className,
  stagger = 0.06,
  delay = 0,
  as: Tag = "h1",
}: {
  text: string;
  className?: string;
  stagger?: number;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "div";
}) {
  const reduce = useReducedMotion();
  const letters = Array.from(text);

  if (reduce) {
    const MotionTag = motion[Tag] as typeof motion.div;
    return (
      <MotionTag
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay }}
        className={className}
      >
        {text}
      </MotionTag>
    );
  }

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const letter: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1.2, ease: EASE_EDITORIAL },
    },
  };

  const Wrapper = motion[Tag] as typeof motion.div;
  return (
    <Wrapper
      variants={container}
      initial="hidden"
      animate="visible"
      className={className}
      aria-label={text}
    >
      {letters.map((char, i) => (
        <span
          key={i}
          aria-hidden
          style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
        >
          <motion.span variants={letter} style={{ display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </motion.span>
        </span>
      ))}
    </Wrapper>
  );
}

// ── WordStagger — word-by-word reveal ───────────────────────────────
export function WordStagger({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  if (reduce) {
    return (
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={className}
      >
        {text}
      </motion.span>
    );
  }

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        visible: { transition: { staggerChildren: 0.04, delayChildren: delay } },
      }}
    >
      {words.map((w, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EDITORIAL } },
          }}
          style={{ display: "inline-block", marginRight: "0.28em" }}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  );
}

// ── MagneticButton — translate toward cursor ────────────────────────
export function MagneticButton({
  children,
  className,
  href,
  onClick,
  ariaLabel,
  testId,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  testId?: string;
}) {
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    if (reduce) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    el.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
  };
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    e.currentTarget.style.transform = "translate(0,0)";
  };

  const Tag: React.ElementType = href ? "a" : "button";
  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      aria-label={ariaLabel}
      data-testid={testId}
      className={className}
      style={{ transition: "transform 200ms cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      {children}
    </Tag>
  );
}
