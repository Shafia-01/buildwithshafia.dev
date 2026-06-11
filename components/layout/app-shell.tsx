"use client";

import { useState, type ReactNode } from "react";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { TopNav } from "@/components/layout/top-nav";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Footer } from "@/components/layout/footer";
import { CommandPalette } from "@/components/command/command-palette";

export function AppShell({ children }: { children: ReactNode }) {
  const [paletteOpen, setPaletteOpen] = useState(false);
  return (
    <ThemeProvider>
      <ScrollProgress />
      <TopNav onOpenPalette={() => setPaletteOpen(true)} />
      <CommandPalette open={paletteOpen} setOpen={setPaletteOpen} />
      <main className="pt-16 relative z-10">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
