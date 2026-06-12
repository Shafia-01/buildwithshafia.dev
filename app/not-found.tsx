import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center px-6 lg:px-12">
      <div className="max-w-narrow">
        <p className="font-mono text-meta-xs uppercase text-brass">404</p>
        <h1 className="mt-6 font-display text-display-md md:text-display-lg text-ink leading-[0.95] tracking-tight">
          This page got lost in production.
        </h1>
        <p className="mt-6 font-editorial italic text-quote text-ink-soft">
          Even good systems have edge cases.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex font-mono text-meta-xs uppercase text-brass brass-underline"
          data-active
        >
          ← Back to cover
        </Link>
      </div>
    </section>
  );
}