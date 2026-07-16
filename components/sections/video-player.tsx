"use client";

import { SectionNumber } from "@/components/typography";
import { FadeRise } from "@/components/motion/primitives";

interface VideoPlayerProps {
  url: string;
  projectTitle: string;
}

export function VideoPlayer({ url, projectTitle }: VideoPlayerProps) {
  // Extract YouTube ID
  const getYouTubeId = (urlStr: string): string | null => {
    try {
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = urlStr.match(regExp);
      return match && match[2].length === 11 ? match[2] : null;
    } catch {
      return null;
    }
  };

  const videoId = getYouTubeId(url);

  if (!videoId) {
    return null;
  }

  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=0`;

  return (
    <div id="demo-video" className="scroll-mt-24">
      <FadeRise className="space-y-6 my-16">
        <div className="flex items-center justify-between border-b border-rule pb-2">
          <SectionNumber number="DEMO" name="WATCH VIDEO WALKTHROUGH" />
          <span className="font-mono text-[9px] uppercase tracking-wider bg-brass/10 text-brass px-2 py-0.5 rounded-sm">
            YouTube Embed
          </span>
        </div>

        <div className="relative w-full aspect-video overflow-hidden rounded-md border border-rule-strong bg-paper-soft shadow-md group hover:border-brass transition-all duration-300">
          {/* Decorative corner accents to match premium style */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brass z-10 opacity-60 pointer-events-none" />
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brass z-10 opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brass z-10 opacity-60 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brass z-10 opacity-60 pointer-events-none" />

          <iframe
            src={embedUrl}
            title={`${projectTitle} Demo Video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full border-0"
          />
        </div>
      </FadeRise>
    </div>
  );
}
