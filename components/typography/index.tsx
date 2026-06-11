import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function MetaLabel({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-mono text-meta uppercase tracking-[0.08em] text-ink-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function PullQuote({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <blockquote
      className={cn(
        "font-editorial italic text-quote text-ink-soft leading-snug",
        "border-b-2 border-brass pb-2 inline-block",
        className,
      )}
    >
      {children}
    </blockquote>
  );
}

export function SectionNumber({
  number,
  name,
  className,
}: {
  number: string;
  name: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className="inline-block w-1.5 h-1.5 rounded-full bg-brass"
        aria-hidden
      />
      <MetaLabel>
        § {number} — {name}
      </MetaLabel>
    </div>
  );
}
