"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);
  return (
    <section className="min-h-[80vh] flex items-center px-6 lg:px-12">
      <div className="max-w-narrow">
        <p className="font-mono text-meta-xs uppercase text-brass">§ ERR</p>
        <h1 className="mt-6 font-display text-display-md text-ink leading-[0.95] tracking-tight">
          Something broke.
        </h1>
        <p className="mt-6 font-editorial italic text-quote text-ink-soft">
          The good news: it&apos;s fixable. The repo is open.
        </p>
        <div className="mt-10 flex gap-4">
          <button
            type="button"
            onClick={reset}
            className="px-5 py-2.5 bg-ink text-paper font-mono text-meta-xs uppercase hover:bg-brass transition-colors duration-fast"
          >
            Retry
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 border border-brass text-brass font-mono text-meta-xs uppercase hover:bg-brass hover:text-paper transition-colors duration-fast"
          >
            Back to cover
          </Link>
        </div>
      </div>
    </section>
  );
}
