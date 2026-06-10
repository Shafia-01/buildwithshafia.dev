# Phase 4 — Technical Architecture & Repository Blueprint

*No code. Architecture, content strategy, and repo blueprint only. Awaiting approval for Phase 5.*

---

## 1. Complete Next.js Architecture

### 1.1 Stack lock-in

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 15** (App Router) | RSC for content pages, streaming, file-based routing |
| Language | **TypeScript 5** (strict) | Type-safety on content schemas + RAG payloads |
| Styling | **Tailwind CSS 4** + shadcn/ui | Token-driven design system from Phase 3 |
| Motion | **Framer Motion** + **Motion One** for low-overhead micro-interactions | Already specified in Phase 3 |
| Content | **MDX 3** + `contentlayer2` (or `velite`) for typed content | Type-safe project pages, hot-reload during writing |
| 3D / Graph | **D3.js** (community + skills), **Mermaid** (architecture diagrams) | Lightweight, no Three.js bloat |
| State | React Server Components by default; minimal client state via `zustand` for chat | Server-first |
| Forms | `react-hook-form` + `zod` validation | Request-demo modal |
| Icons | **Lucide React** (1.5px stroke) | Editorial-friendly |

### 1.2 Route structure (App Router)

```
app/
├── layout.tsx                       # Root layout — fonts, theme, nav, footer, orb
├── page.tsx                         # /  Cover Page
├── opengraph-image.tsx              # Default OG card generator
├── icon.tsx                         # Dynamic favicon
├── robots.ts                        # Robots config
├── sitemap.ts                       # Dynamic sitemap
│
├── the-builder/
│   └── page.tsx                     # /the-builder
│
├── journey/
│   └── page.tsx                     # /journey
│
├── work/
│   ├── page.tsx                     # /work — Product Archive grid
│   └── [slug]/
│       ├── page.tsx                 # /work/[slug] — dynamic project page
│       └── opengraph-image.tsx      # Per-project OG card
│
├── lab/
│   ├── page.tsx                     # /lab — Engineering Lab landing
│   └── [slug]/
│       └── page.tsx                 # /lab/[slug] — sub-case studies
│
├── community/
│   └── page.tsx                     # /community
│
├── skills/
│   └── page.tsx                     # /skills
│
├── ask-shafia/
│   └── page.tsx                     # /ask-shafia — full-page chat
│
├── contact/
│   └── page.tsx                     # /contact
│
└── api/
    └── [[...path]]/
        └── route.ts                 # Single catch-all (per env constraint)
                                     # Internal sub-routes:
                                     #   /api/chat        → Ask Shafia RAG
                                     #   /api/chat/stream → Streaming SSE
                                     #   /api/request-demo→ Submit demo request
                                     #   /api/track       → Custom analytics ping
                                     #   /api/health      → Health check
```

### 1.3 Layout strategy

- **Single root layout** (`app/layout.tsx`) carries: font preloads, theme provider, top nav, scroll-progress bar, command palette mount point, persistent **Ask Shafia orb**, footer.
- **No nested layouts** for marketing pages — every page is composable from sections to avoid layout-tree complexity.
- **Route segments use `loading.tsx`** where streaming benefits (project pages → progressively reveal architecture/video).
- **`error.tsx`** at root + project route — graceful fallbacks ("Something broke. Here's the GitHub repo →").
- **`not-found.tsx`** — editorial 404 ("This page got lost in production").
- **Project pages use `generateStaticParams`** to prerender all 6 project routes at build time. Lab pages same.

### 1.4 Component hierarchy

```
Root Layout
├── <ThemeProvider>         (light/dark, system-aware)
├── <FontProvider>          (Fraunces, Instrument Serif, Inter, JetBrains Mono)
├── <TopNav>
│   ├── <Logo>
│   ├── <NavLinks>
│   ├── <ResumePill>
│   └── <CommandPaletteTrigger>
├── <ScrollProgress>
├── <CommandPalette>        (⌘K modal — globally mounted, lazy-loaded)
├── <AskShafiaOrb>          (floating button)
├── <AskShafiaSheet>        (bottom-sheet variant of chat — lazy)
│
├── {children}              # Page content
│
└── <Footer>
    ├── <FooterLinks>
    ├── <FooterStatus>
    └── <FooterCredit>
```

### 1.5 Shared components (importable everywhere)

Grouped by domain (mapped from Phase 3 inventory):

```
components/
├── ui/                     # shadcn primitives (button, card, badge, dialog, tabs, tooltip…)
├── layout/                 # TopNav, Footer, ScrollProgress, SectionMarker
├── typography/             # DisplayHeading, Headline, BodyText, PullQuote, DropCap, MetaLabel
├── sections/               # Hero, MetricStrip, MarqueeBand, FeaturedWork
├── projects/               # ProjectPoster, ProjectCTABar, ProjectHero, EngineeringDecisionCard
├── timeline/               # TimelineSpine, MilestoneCard, PromotionConnector
├── community/              # NetworkGraph (D3 force)
├── skills/                 # ConstellationCluster, SkillDot
├── chat/                   # AskShafiaOrb, AskShafiaSheet, ChatThread, PromptChip, SourcePill, RelatedChip, StreamingMessage
├── media/                  # DemoVideo, ScreenshotCarousel, ArchitectureDiagram
├── forms/                  # RequestDemoModal
├── command/                # CommandPalette, CommandGroup, CommandItem
└── motion/                 # FadeRise, LetterStagger, WordStagger, MagneticButton, CountUp, NodeDraw
```

### 1.6 Server vs client component policy

- **Default = Server Component.** Pages, sections, metric strips, typography wrappers.
- **Client Components only when needed:** Anything with `useState`, `useEffect`, motion primitives, D3, chat, command palette, theme toggle, video controls.
- **Boundary discipline:** Page-level files stay server; client components imported as leaves to keep JS bundle small.

---

## 2. Content Management Strategy

### 2.1 Content philosophy
- **Project information is data, not JSX.** Every project is a typed MDX file with frontmatter.
- **Single source of truth** for each project lives in `content/projects/[slug].mdx`.
- **No CMS in v1** — file-based content keeps Git history meaningful (matches the 100+ commit narrative).
- **Future-proofed** for headless CMS (Sanity / Contentlayer / Velite) without code changes.

### 2.2 Project content schema (typed via Zod / Velite)

```
ProjectSchema {
  slug                     string
  order                    number               # archive ordering 1..6
  title                    string
  oneLiner                 string               # under title
  pullQuote                string               # italic hero quote
  status                   "shipped" | "ongoing"
  demoState                "A" | "B" | "C"      # 3-state CTA system
  timeline                 { start: ISO, end: ISO }
  domains                  string[]             # ["AI/RAG", "Full-Stack", "CV"…]
  stack                    {
                             backend: string[]
                             frontend: string[]
                             aiml: string[]
                             infra: string[]
                           }
  metrics                  { label: string, value: string, accent?: bool }[]   # hero strip
  problem                  MDX
  solution                 MDX
  architecture             {
                             mermaid: string             # raw mermaid src
                             diagram?: string            # alt SVG path
                             caption: string
                           }
  engineeringDecisions     { title: string, summary: string, body: MDX }[]
  features                 { icon: string, title: string, body: string }[]
  performance              { label: string, value: string }[]
  screenshots              { src: string, alt: string, caption?: string }[]
  buildTimeline            { date: ISO, label: string }[]
  lessons                  string[]
  roadmap                  string[]
  links                    {
                             github?: string
                             liveDemo?: string
                             watchDemo?: string         # video URL (R2/Cloudinary)
                             walkthrough?: string
                             architectureDoc?: string
                             requestDemo?: boolean
                           }
  seo                      { ogTitle, ogDescription, ogImage? }
  next                     string               # next project slug
}
```

### 2.3 Content directory layout

```
content/
├── projects/
│   ├── learnify-ai.mdx
│   ├── keylytics.mdx
│   ├── walmart-innovation-suite.mdx
│   ├── mediscan.mdx
│   ├── ai-threat-detection.mdx
│   └── cinescope.mdx
├── lab/
│   ├── cyart/
│   │   ├── news-sentiment-pipeline.mdx
│   │   ├── surveillance-engineering.mdx
│   │   └── voice-cloning-benchmarks.mdx
│   └── edunet/
│       └── cinescope-build.mdx
├── timeline/
│   └── milestones.ts                # typed array of milestones incl. GDG progression
├── community/
│   └── network.ts                   # nodes + edges for D3 (GDG/IEEE/PC/ENORD)
├── skills/
│   └── ecosystem.ts                 # 9 constellation clusters
├── builder/
│   └── essay.mdx                    # /the-builder long-form
└── meta/
    ├── site.ts                      # site name, default OG, social links
    └── resume.ts                    # resume version + path
```

### 2.4 How content powers routes

- `/work` → reads all `content/projects/*.mdx`, sorts by `order`, renders `<ProjectPoster>` grid.
- `/work/[slug]` → resolves slug, loads MDX, hydrates `<ProjectHero>`, `<MetricStrip>`, `<ArchitectureDiagram>`, etc.
- `<ProjectCTABar>` reads `demoState` + `links` and renders only matching CTAs (e.g., MediScan = State B → no Live Demo button).
- `/journey` → consumes `content/timeline/milestones.ts` including GDG PR Associate → Social Media Manager promotion with `<PromotionConnector>`.
- `/community` → consumes `content/community/network.ts` (now includes ENORD node).

### 2.5 Authoring workflow
1. Add or edit MDX in `content/`
2. Type-check runs on build via Velite/Contentlayer schema
3. Commit and push → Vercel rebuilds affected pages
4. Per-project OG card auto-regenerates from frontmatter

---

## 3. Media Strategy

### 3.1 Storage tiers

| Asset type | Storage | Reason |
|---|---|---|
| Project posters (≤300KB AVIF/WebP) | `/public/media/[slug]/poster.*` | Static, served from edge |
| Architecture diagrams | Mermaid source (in MDX) + rendered SVG cache | Source-of-truth in repo |
| Screenshots (compressed) | `/public/media/[slug]/screens/*` | Lightweight (each ≤200KB) |
| Demo videos (heavy) | **Cloudflare R2** or **Vercel Blob** (CDN-served, signed URLs not needed) | Keeps repo small; CDN performance |
| Resume PDF | `/public/resume/shafia-2026.pdf` (versioned filename) | Stable URL |
| OG images | Dynamic via `@vercel/og` at edge | No storage cost |

### 3.2 Demo video handling

- **Format:** `.mp4` (H.264) + `.webm` (VP9) dual-source for compatibility
- **Bitrate target:** ≤ 1.5 Mbps; resolution 1280×720 for cards, 1920×1080 for hero
- **Length cap:** 60–90s per project
- **Encoding pipeline (one-time, ffmpeg):**
  - Source recording → 2-pass H.264 + VP9 outputs
  - Generate poster frame (`.webp` at 0.5s mark)
  - Output ≤6MB per format
- **Playback strategy:**
  - `autoplay muted loop playsinline preload="metadata"` on project hero
  - Click anywhere on the video → unmute toggle
  - `<DemoVideo>` component uses IntersectionObserver to **only autoplay when in viewport**
  - **On mobile:** preload disabled until card scrolled into viewport (data savings)
- **Fallback:** If video fails to load, poster image stays with a `▶ Watch Demo` overlay button → opens video in dialog

### 3.3 Screenshot handling

- Source PNG/heavy JPG → converted to **AVIF + WebP** at build time
- Served via `next/image` with `sizes` hint for responsive layouts
- LQIP (low-quality image placeholder, base64 ~24B) for blur-up
- **No GIF screenshots ever** — converted to short looping MP4s instead

### 3.4 Asset optimization

- **next/image** everywhere; native lazy loading
- AVIF first, WebP fallback, raw JPG never served
- Build-time image optimization via `next/image` + sharp
- Per-page CSS budget: <30KB gzipped; per-page JS budget: <120KB First Load JS
- **Font subsetting:** Latin + Latin-ext only; variable-axis Fraunces single file (~45KB)
- Preconnect to `fonts.googleapis.com` + media CDN domains in `<head>`

### 3.5 Lazy loading strategy

| Asset | Strategy |
|---|---|
| Hero images (above fold) | Eager + `priority` |
| Below-fold screenshots | Native lazy + LQIP |
| Project cards in /work | LQIP + viewport-triggered video preview |
| D3 community graph | Dynamic import on route enter |
| Chat (`AskShafiaSheet`) | Dynamic import on first orb interaction |
| Command Palette | Dynamic import on first `⌘K` or click |
| Mermaid renderer | Dynamic import per project page |
| Recharts (if used in Learnify analytics teaser) | Dynamic import |

---

## 4. SEO Strategy

### 4.1 Metadata architecture

- **Per-route `generateMetadata`** with typed inputs (title, description, OG image, canonical)
- **Template:** `"%s · Shafia Ameeruddin — AI Engineer"`
- **Description rule:** every page has a ≤155-char description ending with the keyword phrase ("AI Engineer", "GenAI Engineer", "RAG", etc.)

### 4.2 Recruiter-searchable keyword surface

Strategic keyword placement across pages (without stuffing):

| Page | Keyword anchors |
|---|---|
| `/` | "AI Engineer", "GenAI Engineer", "AI products from idea to production", "Mumbai" |
| `/the-builder` | "RAG", "LLM orchestration", "multimodal", "production AI" |
| `/work` | "AI Engineer portfolio", "production AI projects" |
| Each project page | Tech stack keywords + role keywords + outcome metrics |
| `/skills` | "LangChain", "FAISS", "FastAPI", "React 19", "PyTorch", "Hugging Face" |
| `/contact` | "Available for hire", "AI Engineer roles", "Founding Engineer" |

### 4.3 Open Graph & Twitter cards

- **Dynamic OG generation** via `@vercel/og` (edge function)
- **Per-project OG card** — auto-generated from MDX frontmatter:
  - Background: paper (or char in dark variant)
  - Title in Fraunces 72px
  - Tagline in Inter 24px
  - Brass rule + "Shafia Ameeruddin · AI Engineer" footer
  - One signature metric badge
- **Default OG** for site root: cover-page composition
- **Twitter card:** `summary_large_image`

### 4.4 Structured data (JSON-LD)

| Schema | Where |
|---|---|
| `Person` | Root layout — name, jobTitle "AI Engineer", url, sameAs (LinkedIn, GitHub, email), worksFor (Jamia Hamdard) |
| `WebSite` | Root + SearchAction pointing to `/ask-shafia?q=` |
| `CreativeWork` (one per project) | Each `/work/[slug]` — name, description, dateCreated, programmingLanguage, codeRepository, image |
| `BreadcrumbList` | Project + lab pages |
| `FAQPage` | `/ask-shafia` — top 6 suggested prompts encoded as FAQ entries (recruiter-search bait) |
| `Organization` (for orgs in community) | GDG, IEEE, ENORD as memberOf |

### 4.5 Crawl & indexing

- `robots.ts`: allow all except `/api/*`
- `sitemap.ts`: dynamic — built from project slugs, lab slugs, static routes
- Canonical URLs on every page
- `lang="en"` on root html
- No client-side-only routes (all pre-rendered or streamed)

### 4.6 Project SEO specifics

- Each project page URL is the **clean lowercase slug** (e.g., `/work/learnify-ai`)
- Each project's `<h1>` includes the project name + role-keyword pairing
- "Built with" tech list rendered as semantic `<ul>` for crawlability
- Architecture sections include alt text + caption with stack keywords

---

## 5. Ask Shafia AI Architecture

### 5.1 High-level design

```
        ┌────────────────────────────────────────┐
        │  User asks question in chat            │
        └─────────────────┬──────────────────────┘
                          ▼
                ┌─────────────────────┐
                │  /api/chat/stream   │  (Edge runtime)
                └─────────┬───────────┘
                          ▼
              ┌──────────────────────────┐
              │  Guard layer             │
              │  (off-topic redirect,    │
              │   rate-limit per IP)     │
              └──────────┬───────────────┘
                         ▼
              ┌──────────────────────────┐
              │  Retrieval               │
              │  Vector search top-K=5   │
              └──────────┬───────────────┘
                         ▼
              ┌──────────────────────────┐
              │  Prompt assembly         │
              │  (system + sources)      │
              └──────────┬───────────────┘
                         ▼
              ┌──────────────────────────┐
              │  LLM call (streaming)    │
              │  Provider TBD (Phase 5)  │
              └──────────┬───────────────┘
                         ▼
              ┌──────────────────────────┐
              │  Stream tokens via SSE   │
              │  + source citations     │
              └──────────────────────────┘
```

### 5.2 Knowledge sources

All sources baked at **build time** into a single embedded vector store:

| Source | Content | Update cadence |
|---|---|---|
| `content/builder/essay.mdx` | The Builder essay | On edit |
| `content/projects/*.mdx` | All 6 project pages (every field) | On edit |
| `content/lab/**/*.mdx` | Lab case studies | On edit |
| `content/timeline/milestones.ts` | Education, leadership, internships | On edit |
| `content/community/network.ts` | GDG (both roles), IEEE, ENORD, PC | On edit |
| `content/skills/ecosystem.ts` | All 9 capability clusters | On edit |
| `data/resume/resume-2026.json` | Structured resume export | On résumé refresh |
| `data/profile/linkedin.json` | LinkedIn highlights | Manual snapshot |
| `data/profile/github.json` | Pinned repos + descriptions | Manual snapshot |
| `data/availability.json` | Open-to-roles, location, response-time | Manual |

### 5.3 Vector store choice

- **In-process** lightweight vector store using `@xenova/transformers` + **all-MiniLM-L6-v2** embeddings, OR
- **Hosted** option: Upstash Vector / Pinecone serverless (free tier sufficient)
- **Build step:** A `scripts/build-kb.ts` runs at deploy time → reads all knowledge sources → chunks (~400 tokens, 60-token overlap) → embeds → writes JSON vector index to `/public/kb/index.json` (or pushes to hosted vector DB)
- **Why in-process is viable here:** Total knowledge corpus is ~80–120 KB of text after chunking. A flat in-memory index loaded at edge cold-start is < 50ms.

### 5.4 Retrieval flow

1. User query → embed (same MiniLM-L6) at runtime (edge-compatible via Transformers.js)
2. Cosine similarity vs corpus → top-K=5 chunks with source metadata
3. Filter by minimum similarity threshold (0.45) to reject off-topic
4. Assemble system prompt:
   - Persona: third-person spokesperson for Shafia
   - Tone rules: 1–2 sentence answer + bullets + sources + related CTAs
   - Refusal rules: never speculate beyond corpus
5. Stream LLM response with token-by-token SSE → client `<StreamingMessage>` component renders progressively

### 5.5 LLM provider — to confirm with user (carried from Phase 1)

Awaiting your pick from:
- **Google Gemini 2.5 Flash** — cheapest, fastest, multimodal
- **Anthropic Claude Sonnet 4.5** — best reasoning, premium voice
- **OpenAI GPT-4.1 / 5.x** — recruiter-familiar

We'll integrate via the **Emergent universal LLM key** if you don't have a personal API key — same key works across all three providers, so you can swap models without re-integrating.

### 5.6 Cost considerations

| Lever | Strategy |
|---|---|
| Embedding model | Run client/edge-side via Transformers.js → **$0/query** |
| Retrieval | In-process flat index → **$0/query** |
| LLM tokens | Cap response at 300 tokens; system prompt ~600 tokens; context ~1200 tokens → ~2.1K tokens/turn |
| Rate-limiting | 20 messages/IP/day via Upstash Redis or in-memory edge cache |
| Cache popular queries | Cache top-50 likely recruiter questions (resolved nightly) — hashed by query → cached response with 24h TTL |
| Provider failover | Auto-degrade Sonnet → Gemini → cached canned answer on provider error |
| Estimated cost (Gemini 2.5 Flash) | ~$0.0003/turn → **$3 for 10K recruiter conversations** |

### 5.7 Privacy & safety

- No conversation logging by default (only anonymous query counts for analytics)
- Optional opt-in "share this conversation" generates a hashed URL with sanitized text
- Off-topic / abusive queries deflected with a friendly redirect to project content
- All responses include source attribution to portfolio pages

---

## 6. Deployment Architecture

### 6.1 Hosting

- **Platform:** Vercel (Hobby → Pro for analytics)
- **Region:** Auto (edge functions globally distributed)
- **Domain:** Pending your pick (`shafia.dev` recommended; alternatives `shafia.engineer`, `shafia.ai`)
- **SSL:** Automatic via Vercel
- **Preview deployments:** Every PR → preview URL for content review

### 6.2 Build pipeline

```
git push → GitHub Actions:
  → lint (eslint + prettier)
  → typecheck (tsc --noEmit)
  → unit tests (vitest)
  → build (next build)
  → KB build (scripts/build-kb.ts)
  → deploy preview → Vercel
  → on main merge → production deploy
```

### 6.3 Environment variables

| Var | Use | Where |
|---|---|---|
| `LLM_PROVIDER` | "gemini" / "anthropic" / "openai" | Server |
| `EMERGENT_LLM_KEY` | Universal LLM key | Server only |
| `R2_PUBLIC_BASE` | CDN base for videos | Server + client |
| `UPSTASH_REDIS_URL` | Rate-limiting | Server |
| `UPSTASH_VECTOR_URL` | (Optional, if hosted vector) | Server |
| `NEXT_PUBLIC_SITE_URL` | Canonical + OG | Both |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Analytics | Client |

### 6.4 Analytics

- **Plausible Analytics** (privacy-first, cookieless) — primary analytics
- **Vercel Analytics** — real-user perf metrics, Core Web Vitals
- **Custom events** (via `/api/track`):
  - `cta_clicked` (which CTA on which project)
  - `chat_opened`, `chat_question_asked`, `chat_source_clicked`
  - `resume_downloaded`
  - `command_palette_opened`
  - `request_demo_submitted`
- **Recruiter funnel dashboard:** Cover view → Project view → Chat or Contact → Resume download

### 6.5 Performance monitoring

- **Vercel Speed Insights** — TTFB, LCP, FID, CLS per route
- **Sentry** (free tier) — runtime errors + chat-stream failure tracking
- **Performance budgets enforced in CI:**
  - LCP < 2.0s
  - CLS < 0.05
  - First Load JS < 150KB
  - Per-route JS < 120KB
- **Lighthouse CI** action on PRs — fails build if scores < 95 on Performance / Accessibility / Best Practices / SEO

---

## 7. Scalability Plan

The portfolio is designed so that **adding content never requires architectural changes**.

### 7.1 Adding a new project

1. Create `content/projects/new-slug.mdx` with frontmatter
2. Drop poster + screenshots to `/public/media/new-slug/`
3. Upload demo video to R2
4. Commit. That's it.
5. Vercel rebuild → automatically appears in `/work` grid, sitemap, KB index, OG cards

### 7.2 Adding a blog (future-ready)

`/blog` route already pre-planned but not built in v1. Adding it later:
- New route segment `app/blog/[slug]/page.tsx`
- New content dir `content/blog/*.mdx` with `BlogSchema` (title, date, tags, body)
- Added to sitemap auto-generator
- KB build script picks up blog content → Ask Shafia can answer blog questions
- Nav gains a "Writing" link (already reserved space in layout)

### 7.3 Adding achievements / publications

`content/achievements.ts` typed array → consumed by Journey timeline and optionally a `/achievements` page if volume grows. ENORD's Aerospace Launch already follows this pattern.

### 7.4 Adding a new experience

`content/timeline/milestones.ts` accepts new entries. The promotion-pattern (GDG PR → Manager) is generalized: any milestone can declare a `promotedTo` field, automatically rendering `<PromotionConnector>`.

### 7.5 Adding new lab case studies

Same as projects — drop MDX into `content/lab/[org]/[slug].mdx`. The lab landing dynamically lists all entries grouped by org.

### 7.6 Internationalization (deferred but unblocked)

- All copy lives in MDX/TS files, not hard-coded in components
- Adding `next-intl` later wraps content keys without touching components
- Routes already support `[locale]` prefix migration

### 7.7 CMS migration (deferred but unblocked)

- Velite/Contentlayer schema → portable to Sanity / Contentful / Payload
- Once portfolio is high-traffic and Shafia wants non-Git editing, swap content layer without touching pages

### 7.8 Adding new CTA types

`ProjectCTABar` accepts an arbitrary `ctas[]` array. New types (e.g., `📦 Download Dataset`, `📊 Benchmarks PDF`) added to the CTA registry without touching the bar component.

### 7.9 Adding new community orgs

Append to `content/community/network.ts` — D3 graph re-renders automatically with new nodes/edges.

---

## 8. Repository Structure (Complete Tree)

```
shafia-portfolio/
│
├── .github/
│   ├── workflows/
│   │   ├── ci.yml                       # lint, typecheck, test, build
│   │   ├── lighthouse.yml               # perf regression
│   │   └── kb-rebuild.yml               # rebuild knowledge base on content change
│   ├── ISSUE_TEMPLATE/
│   │   ├── content-update.md
│   │   ├── bug.md
│   │   └── feature.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   └── dependabot.yml
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx                          # /
│   ├── opengraph-image.tsx
│   ├── icon.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── manifest.ts
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── loading.tsx
│   │
│   ├── the-builder/page.tsx
│   ├── journey/page.tsx
│   ├── work/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       ├── page.tsx
│   │       ├── opengraph-image.tsx
│   │       └── loading.tsx
│   ├── lab/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── community/page.tsx
│   ├── skills/page.tsx
│   ├── ask-shafia/page.tsx
│   ├── contact/page.tsx
│   │
│   └── api/
│       └── [[...path]]/route.ts          # catch-all dispatching to internal handlers
│
├── components/
│   ├── ui/                               # shadcn primitives
│   ├── layout/
│   │   ├── top-nav.tsx
│   │   ├── footer.tsx
│   │   ├── scroll-progress.tsx
│   │   └── section-marker.tsx
│   ├── typography/
│   │   ├── display-heading.tsx
│   │   ├── headline.tsx
│   │   ├── body-text.tsx
│   │   ├── pull-quote.tsx
│   │   ├── drop-cap.tsx
│   │   └── meta-label.tsx
│   ├── sections/
│   │   ├── hero-cover.tsx
│   │   ├── metric-strip.tsx
│   │   ├── marquee-band.tsx
│   │   └── featured-work.tsx
│   ├── projects/
│   │   ├── project-poster.tsx
│   │   ├── project-hero.tsx
│   │   ├── project-cta-bar.tsx
│   │   ├── engineering-decision-card.tsx
│   │   ├── feature-grid.tsx
│   │   ├── build-timeline.tsx
│   │   └── lessons-roadmap.tsx
│   ├── timeline/
│   │   ├── timeline-spine.tsx
│   │   ├── milestone-card.tsx
│   │   └── promotion-connector.tsx
│   ├── community/
│   │   └── network-graph.tsx
│   ├── skills/
│   │   ├── constellation-cluster.tsx
│   │   └── skill-dot.tsx
│   ├── chat/
│   │   ├── ask-shafia-orb.tsx
│   │   ├── ask-shafia-sheet.tsx
│   │   ├── ask-shafia-page.tsx
│   │   ├── chat-thread.tsx
│   │   ├── prompt-chip.tsx
│   │   ├── streaming-message.tsx
│   │   ├── source-pill.tsx
│   │   └── related-chip.tsx
│   ├── media/
│   │   ├── demo-video.tsx
│   │   ├── screenshot-carousel.tsx
│   │   └── architecture-diagram.tsx
│   ├── forms/
│   │   └── request-demo-modal.tsx
│   ├── command/
│   │   ├── command-palette.tsx
│   │   ├── command-group.tsx
│   │   └── command-item.tsx
│   ├── motion/
│   │   ├── fade-rise.tsx
│   │   ├── letter-stagger.tsx
│   │   ├── word-stagger.tsx
│   │   ├── magnetic-button.tsx
│   │   ├── count-up.tsx
│   │   └── node-draw.tsx
│   └── providers/
│       ├── theme-provider.tsx
│       └── font-provider.tsx
│
├── content/
│   ├── projects/
│   │   ├── learnify-ai.mdx
│   │   ├── keylytics.mdx
│   │   ├── walmart-innovation-suite.mdx
│   │   ├── mediscan.mdx
│   │   ├── ai-threat-detection.mdx
│   │   └── cinescope.mdx
│   ├── lab/
│   │   ├── cyart/
│   │   │   ├── news-sentiment-pipeline.mdx
│   │   │   ├── surveillance-engineering.mdx
│   │   │   └── voice-cloning-benchmarks.mdx
│   │   └── edunet/
│   │       └── cinescope-build.mdx
│   ├── timeline/
│   │   └── milestones.ts
│   ├── community/
│   │   └── network.ts
│   ├── skills/
│   │   └── ecosystem.ts
│   ├── builder/
│   │   └── essay.mdx
│   └── meta/
│       ├── site.ts
│       └── resume.ts
│
├── data/
│   ├── resume/
│   │   └── resume-2026.json
│   ├── profile/
│   │   ├── linkedin.json
│   │   └── github.json
│   └── availability.json
│
├── lib/
│   ├── rag/
│   │   ├── embed.ts
│   │   ├── retrieve.ts
│   │   ├── prompt-builder.ts
│   │   ├── llm-client.ts
│   │   └── kb-loader.ts
│   ├── content/
│   │   ├── schema.ts                     # Zod schemas for projects, lab, etc.
│   │   └── loader.ts                     # typed content loaders
│   ├── seo/
│   │   ├── metadata.ts
│   │   └── jsonld.ts
│   ├── analytics/
│   │   └── track.ts
│   ├── utils/
│   │   ├── cn.ts
│   │   ├── format.ts
│   │   └── url.ts
│   └── motion/
│       └── tokens.ts                      # easing curves + durations
│
├── public/
│   ├── media/
│   │   ├── learnify-ai/
│   │   │   ├── poster.webp
│   │   │   ├── screens/
│   │   │   └── architecture.svg
│   │   ├── keylytics/
│   │   ├── walmart-innovation-suite/
│   │   ├── mediscan/
│   │   ├── ai-threat-detection/
│   │   └── cinescope/
│   ├── og/                                # static fallback OG cards
│   ├── kb/
│   │   └── index.json                     # built knowledge-base index
│   ├── resume/
│   │   └── shafia-2026.pdf
│   ├── fonts/                             # self-hosted woff2 (optional)
│   └── favicon/
│
├── scripts/
│   ├── build-kb.ts                        # build vector index
│   ├── optimize-media.ts                  # batch image/video optimization
│   ├── generate-og.ts                     # batch OG card generator (CI fallback)
│   └── commit-plan.md                     # the 100+ commit history reference
│
├── styles/
│   └── globals.css
│
├── tests/
│   ├── e2e/
│   │   ├── nav.spec.ts
│   │   ├── chat.spec.ts
│   │   └── project-pages.spec.ts
│   ├── unit/
│   │   ├── rag.test.ts
│   │   └── content-schema.test.ts
│   └── visual/
│       └── snapshots/
│
├── docs/
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── CONTENT_GUIDE.md
│   ├── ROADMAP.md
│   ├── DEPLOYMENT.md
│   └── CONTRIBUTING.md
│
├── .env.example
├── .eslintrc.cjs
├── .gitignore
├── .prettierrc
├── components.json                        # shadcn config
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── velite.config.ts                       # (or contentlayer.config.ts)
├── vitest.config.ts
├── playwright.config.ts
└── README.md
```

---

## ✅ Phase 4 Complete

**Decisions I need from you before Phase 5 begins:**

1. **Domain pick** — `shafia.dev` / `shafia.engineer` / `shafia.ai` / `shafiaameeruddin.com` / other?
2. **LLM provider for Ask Shafia** — Gemini 2.5 Flash (cheap/fast) / Claude Sonnet 4.5 (premium) / OpenAI GPT? I recommend **Gemini 2.5 Flash** for cost + speed, with cached fallback. I'll use the **Emergent universal LLM key** if you don't have your own.
3. **Vector store** — In-process via Transformers.js (free, ~50ms cold start) or hosted (Upstash Vector — free tier sufficient)? Recommend **in-process** to start.
4. **Content authoring tool** — **Velite** (newer, faster, simpler) or **Contentlayer2**? Recommend **Velite**.
5. **Analytics** — Plausible (paid, $9/mo, privacy-first) or just Vercel Analytics (free)? Recommend **Plausible** for the dashboard quality, but Vercel Analytics alone is fine for v1.
6. **Demo videos** — do you have recordings ready for Learnify, KeyLytics, Walmart Suite, MediScan, AI Threat Detection? Or should Phase 5 ship with **placeholder slots** that you fill in later?
7. **Confirm:** Approve this architecture wholesale → I move to **Phase 5: Implementation kickoff** (Next.js scaffold + design tokens + Cover Page + nav + theme + first deploy).
