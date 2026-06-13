import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    "",
    "/the-builder",
    "/journey",
    "/work",
    "/lab",
    "/community",
    "/skills",
    "/contact",
  ];
  const projects = [
    "learnify-ai",
    "keylytics",
    "walmart-innovation-suite",
    "mediscan",
    "ai-enhanced-cybersecurity-threat-detection",
    "cinescope",
  ];
  return [
    ...routes.map((r) => ({
      url: `${SITE_URL}${r}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: r === "" ? 1 : 0.8,
    })),
    ...projects.map((slug) => ({
      url: `${SITE_URL}/work/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
