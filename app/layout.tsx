import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/layout/app-shell";
import { SITE_URL } from "@/lib/utils";
import { site } from "@/content/meta/site";

const fraunces = Fraunces({
  subsets: ["latin", "latin-ext"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: site.title,
    template: "%s · Shafia Ameeruddin — AI Engineer",
  },
  description:
    "Shafia Ameeruddin — AI Engineer building intelligent products from idea to production. Multimodal AI, RAG pipelines, GenAI orchestration, and full-stack systems.",
  keywords: [
    "AI Engineer",
    "GenAI Engineer",
    "RAG",
    "LangChain",
    "FastAPI",
    "Python",
    "Shafia Ameeruddin",
    "Founding Engineer",
    "Multimodal AI"
  ],
  authors: [{ name: "Shafia Ameeruddin", url: SITE_URL }],
  creator: "Shafia Ameeruddin",
  openGraph: {
    title: site.title,
    description: site.tagline,
    url: SITE_URL,
    siteName: site.title,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F5F1E8" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1B1E" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrument.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        <AppShell>{children}</AppShell>
        {/* JSON-LD Person schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shafia Ameeruddin",
              jobTitle: "AI Engineer",
              url: SITE_URL,
              email: site.email,
              sameAs: [site.linkedin, site.github],
              address: { "@type": "PostalAddress", addressLocality: "Mumbai", addressCountry: "IN" },
            }),
          }}
        />
      </body>
    </html>
  );
}
