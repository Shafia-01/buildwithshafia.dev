"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Command, Download, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { navLinks, site } from "@/content/meta/site";

export function TopNav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="top-nav"
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-base ease-editorial",
        "h-16 flex items-center",
        scrolled
          ? "bg-paper/90 backdrop-blur-md border-b border-rule"
          : "bg-transparent",
      )}
    >
      <div className="w-full max-w-wide mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          data-testid="nav-logo"
          className="font-display text-xl tracking-tight text-ink hover:text-brass transition-colors duration-fast"
        >
          SHAFIA
        </Link>

        {/* Center links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => {
            const active = pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className={cn(
                  "font-mono text-meta-xs uppercase brass-underline",
                  active ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
                data-active={active}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-3">
          <a
            href={site.resumePath}
            target="_blank"
            rel="noreferrer"
            data-testid="nav-resume-cta"
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-brass text-brass font-mono text-meta-xs uppercase hover:bg-brass hover:text-paper transition-colors duration-fast"
          >
            <Download className="w-3 h-3" /> RESUME
          </a>
          <button
            type="button"
            data-testid="nav-theme-toggle"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full hover:bg-linen transition-colors duration-fast text-ink-soft"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            type="button"
            data-testid="nav-command-trigger"
            aria-label="Open command palette"
            onClick={onOpenPalette}
            className="p-2 rounded-full hover:bg-linen transition-colors duration-fast text-ink-soft"
          >
            <Command className="w-4 h-4" />
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            data-testid="nav-mobile-toggle"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-2 text-ink"
          >
            <span className="block w-5 h-px bg-ink mb-1.5" />
            <span className="block w-5 h-px bg-ink mb-1.5" />
            <span className="block w-3 h-px bg-ink ml-auto" />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          data-testid="mobile-menu-overlay"
          className="fixed inset-0 z-50 bg-paper flex flex-col p-6"
        >
          <div className="flex justify-between items-center mb-12">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="font-display text-xl"
            >
              SHAFIA
            </Link>
            <button
              data-testid="mobile-menu-close"
              onClick={() => setMobileOpen(false)}
              className="text-ink text-2xl font-light"
              aria-label="Close menu"
            >
              ×
            </button>
          </div>
          <nav className="flex flex-col gap-5">
            {navLinks.map((l, i) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-4 group"
                style={{ animation: `fadeSlide 400ms ${i * 60}ms cubic-bezier(0.16,1,0.3,1) both` }}
              >
                <span className="font-mono text-meta-xs text-ink-muted">{l.section}</span>
                <span className="font-display text-headline-lg text-ink group-hover:text-brass transition-colors">
                  {l.label}
                </span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex gap-6 pt-12 border-t border-rule">
            <a href={site.resumePath} className="font-mono text-meta-xs uppercase text-brass">↓ RESUME</a>
            <a href={site.github} className="font-mono text-meta-xs uppercase text-ink-soft">↗ GitHub</a>
            <a href={site.linkedin} className="font-mono text-meta-xs uppercase text-ink-soft">↗ LinkedIn</a>
          </div>
          <style>{`@keyframes fadeSlide { from { opacity: 0; transform: translateX(20px); } to { opacity: 1; transform: translateX(0); } }`}</style>
        </div>
      )}
    </header>
  );
}
