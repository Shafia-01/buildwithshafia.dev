"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  Briefcase,
  Compass,
  Download,
  FlaskConical,
  Github,
  Linkedin,
  Mail,
  Moon,
  PenTool,
  Sparkles,
  Sun,
  User,
  Users,
} from "lucide-react";
import { site } from "@/content/meta/site";

const NAVIGATE = [
  { label: "The Builder", href: "/the-builder", icon: User },
  { label: "Journey", href: "/journey", icon: Compass },
  { label: "Product Archive", href: "/work", icon: Briefcase },
  { label: "Engineering Lab", href: "/lab", icon: FlaskConical },
  { label: "Community Impact", href: "/community", icon: Users },
  { label: "Skills Ecosystem", href: "/skills", icon: Sparkles },
  { label: "Contact", href: "/contact", icon: PenTool },
];

const PROJECTS = [
  { label: "Learnify AI", href: "/work/learnify-ai" },
  { label: "KeyLytics", href: "/work/keylytics" },
  { label: "Walmart Innovation Suite", href: "/work/walmart-innovation-suite" },
  { label: "MediScan", href: "/work/mediscan" },
  { label: "AI Threat Detection", href: "/work/ai-threat-detection" },
  { label: "CineScope", href: "/work/cinescope" },
];

export function CommandPalette({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (v: boolean) => void;
}) {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(!open);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  const go = (href: string) => {
    setOpen(false);
    router.push(href);
  };

  if (!mounted) return null;

  return (
    <>
      {open && (
        <div
          data-testid="command-palette-overlay"
          className="fixed inset-0 z-[60] bg-ink/30 backdrop-blur-sm flex items-start justify-center pt-[15vh] px-4"
          onClick={() => setOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            data-testid="command-palette"
            className="w-full max-w-[560px] bg-paper-soft border-2 border-brass rounded-md shadow-2xl overflow-hidden"
          >
            <Command label="Command Palette" className="w-full">
              <div className="border-b border-rule px-4 py-3 flex items-center gap-2">
                <Command.Input
                  data-testid="command-input"
                  placeholder="Type a command or search…"
                  className="w-full bg-transparent outline-none text-body text-ink placeholder:text-ink-whisper"
                />
                <span className="font-mono text-meta-xs text-ink-muted">esc</span>
              </div>
              <Command.List className="max-h-[420px] overflow-y-auto py-2">
                <Command.Empty className="px-4 py-6 text-center font-mono text-meta-xs uppercase text-ink-muted">
                  No results.
                </Command.Empty>

                <Command.Group heading="Navigate" className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-meta-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-muted">
                  {NAVIGATE.map((n) => (
                    <Command.Item
                      key={n.href}
                      value={`navigate ${n.label}`}
                      onSelect={() => go(n.href)}
                      className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                    >
                      <n.icon className="w-4 h-4 text-ink-muted" />
                      <span>{n.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Projects" className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-meta-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-muted">
                  {PROJECTS.map((p) => (
                    <Command.Item
                      key={p.href}
                      value={`project ${p.label}`}
                      onSelect={() => go(p.href)}
                      className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                    >
                      <ArrowUpRight className="w-4 h-4 text-brass" />
                      <span>{p.label}</span>
                    </Command.Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Actions" className="[&_[cmdk-group-heading]]:px-4 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:font-mono [&_[cmdk-group-heading]]:text-meta-xs [&_[cmdk-group-heading]]:uppercase [&_[cmdk-group-heading]]:text-ink-muted">
                  <Command.Item
                    value="download resume"
                    onSelect={() => {
                      setOpen(false);
                      window.open(site.resumePath, "_blank");
                    }}
                    className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                  >
                    <Download className="w-4 h-4 text-brass" />
                    <span>Download résumé</span>
                  </Command.Item>
                  <Command.Item
                    value="open linkedin"
                    onSelect={() => {
                      setOpen(false);
                      window.open(site.linkedin, "_blank");
                    }}
                    className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                  >
                    <Linkedin className="w-4 h-4 text-ocean" />
                    <span>Open LinkedIn</span>
                  </Command.Item>
                  <Command.Item
                    value="open github"
                    onSelect={() => {
                      setOpen(false);
                      window.open(site.github, "_blank");
                    }}
                    className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-ink" />
                    <span>Open GitHub</span>
                  </Command.Item>
                  <Command.Item
                    value="copy email"
                    onSelect={() => {
                      navigator.clipboard.writeText(site.email);
                      setOpen(false);
                    }}
                    className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-ocean" />
                    <span>Copy email address</span>
                  </Command.Item>
                  <Command.Item
                    value="toggle theme"
                    onSelect={() => {
                      setTheme(resolvedTheme === "dark" ? "light" : "dark");
                      setOpen(false);
                    }}
                    className="px-4 py-2 flex items-center gap-3 text-ink hover:bg-linen data-[selected=true]:bg-linen cursor-pointer"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="w-4 h-4 text-brass" />
                    ) : (
                      <Moon className="w-4 h-4 text-ocean" />
                    )}
                    <span>Toggle dark mode</span>
                  </Command.Item>
                </Command.Group>
              </Command.List>
              <div className="border-t border-rule px-4 py-2 font-mono text-meta-xs uppercase text-ink-muted flex justify-between">
                <span>↑↓ navigate · ↵ select</span>
                <span>⌘K to toggle</span>
              </div>
            </Command>
          </div>
        </div>
      )}
    </>
  );
}
