import type { Metadata } from "next";
import { HeroCover } from "@/components/sections/hero-cover";
import { MarqueeBand } from "@/components/sections/marquee-band";
import { FeaturedWork } from "@/components/sections/featured-work";

export const metadata: Metadata = {
  title: "Shafia Ameeruddin - AI Engineer",
  description:
    "AI Engineer building intelligent products from idea to production. I ship complete AI products, not just AI models.",
};

export default function Home() {
  return (
    <>
      <HeroCover />
      <MarqueeBand />
      <FeaturedWork />
    </>
  );
}
