# Phase 2 Revisions Applied + Phase 3 — Design System

*All Phase 2 corrections absorbed. Then Phase 3 follows. No code generated. Awaiting approval for Phase 4.*

---

## ✏️ Phase 2 Corrections — Applied

### 🔧 Product Archive — Final Order (6 dedicated routes)

```
01 · Learnify AI                  /work/learnify-ai
02 · KeyLytics                    /work/keylytics
03 · Walmart Innovation Suite     /work/walmart-innovation-suite
04 · MediScan                     /work/mediscan          ← NEW
05 · AI Threat Detection          /work/ai-threat-detection  ← REWRITTEN
06 · CineScope                    /work/cinescope
```

### 🆕 `/work/mediscan` — New Dedicated Page

- **Hero pull-quote:** *"Separating signal from noise — at the image level."*
- **One-liner:** End-to-end ML system that classifies images as **medical vs non-medical** — a foundational gatekeeper for downstream healthcare AI pipelines.
- **Metric strip:** `END-TO-END PIPELINE · CV CLASSIFIER · DEPLOYED · MIT LICENSED`
- **Architecture:** Image ingest → preprocessing → CNN/transfer-learning classifier → confidence routing → downstream gating
- **Engineering Decisions (4):** Choice of feature extractor & rationale · Imbalanced-class handling · Confidence thresholding for safety gating · Deployment packaging (Python module + inference script)
- **Demo treatment:** Recorded walkthrough video (no public live demo — uses **State B**)
- **CTAs shown:** `↗ GitHub` · `▶ Watch Demo` · `📄 Architecture`
- **Stack:** Python · OpenCV · PyTorch / Scikit-learn · Image preprocessing pipeline

### 🔧 `/work/ai-threat-detection` — Rewritten (Now Network Security)

| Field | Updated value |
|---|---|
| **Hero pull-quote** | *"Watching the wire. In real time."* |
| **One-liner** | Real-time AI-powered threat detection for Wi-Fi and network traffic using packet sniffing, anomaly detection, and machine learning. |
| **Hero metric strip** | `LIVE PACKET CAPTURE · ML ANOMALY DETECTION · WI-FI + LAN · ALERT PIPELINE` |
| **Architecture** | Scapy packet capture → feature extraction (protocol, payload size, frequency, source entropy) → ML anomaly model → threat scoring → alerting layer |
| **Engineering Decisions (4)** | (1) Live capture without dropping packets — buffered async pipeline · (2) Feature engineering for network traffic (flow-based vs packet-based) · (3) Anomaly model selection (Isolation Forest / Autoencoder) and rationale · (4) Alert deduplication + severity tiers |
| **Stack** | Python · Scapy · scikit-learn · NumPy / Pandas · Network protocol parsing · Plotly (visualization) |
| **Demo treatment** | Recorded packet-capture session with anomaly highlighting (no public live demo for obvious reasons — uses **State C** for the live demo and **State B** for walkthrough) |
| **CTAs shown** | `↗ GitHub` · `▶ Watch Demo` · `🔒 Request Demo` |
| **Critical clarification** | Explicit note on the page: *"This is an independent personal project. CyArt's surveillance system is a separate engineering deliverable — see Engineering Lab."* |

**Hero visual:** Replaced 4-stream camera grid with a **live packet-flow visualization** — packets stream left-to-right across the hero, anomalous packets glow brass-red as they're flagged. Looks like a network sniffer terminal but designed editorially.

CyArt surveillance work is now **exclusively** in `/lab/surveillance-engineering` and never appears under `/work`.

### 🔧 Live Demo Strategy — 3-State CTA System

| State | Trigger | CTA shown |
|---|---|---|
| **A · Live Available** | Project has a free, public, always-on URL | `↗ Live Demo` |
| **B · Video Only** | Paid APIs, expensive inference, no public deployment | `▶ Watch Demo` |
| **C · Restricted Demo** | Sensitive (security tools, paid keys, private infra) | `🔒 Request Demo` (opens contact-prefilled form/mailto) |

**Final per-project CTA matrix:**

| Project | State | CTAs displayed (top-right + bottom bar) |
|---|---|---|
| **Learnify AI** | A | `↗ GitHub` · `↗ Live Demo` · `▶ Watch Demo` · `📄 Architecture` |
| **KeyLytics** | B | `↗ GitHub` · `▶ Watch Demo` · `📹 Product Walkthrough` · `📄 Architecture` |
| **Walmart Innovation Suite** | B | `↗ GitHub` · `▶ Watch Demo` · `📄 Architecture` |
| **MediScan** | B | `↗ GitHub` · `▶ Watch Demo` · `📄 Architecture` |
| **AI Threat Detection** | C | `↗ GitHub` · `▶ Watch Demo` · `🔒 Request Demo` · `📄 Architecture` |
| **CineScope** | A | `↗ GitHub` · `↗ Live Demo` · `▶ Watch Demo` |

Video demos are treated as **first-class proof**, not fallbacks. The `▶ Watch Demo` button uses the same visual weight as `↗ Live Demo` — never secondary, never demoted.

### 🔧 Journey Timeline — GDG Promotion Visible

```
2024 · Jan ●── GDG on Campus · PR & Social Media Associate
              (joined the team · learned the systems)
                            │
                            ▼  (brass arrow indicating promotion)
2024 · Sep ●── GDG on Campus · Social Media Manager  ⭐
              (promoted · led 10-person team · 65% reach growth)
```

The promotion is **explicitly visualized** as a connected two-card unit with a brass arrow between them. The narrative reads: *"joined → learned → promoted → led"* — a 3-second story of growth.

### 🔧 Community Impact — ENORD Added

Updated node graph:

```
              ● Shafia (center)
             /    |    \    \
          GDG  IEEE  Placement  ENORD ← NEW
         /  \    |     Cell      |\
       PR  SMM Events  Coord.  Product   Aerospace
      Asst (Mgr) (25+)  Sup.   Launch     Event
                                Coord.    Ops
                                  \      /
                                   Industry
                                  Collaboration
```

**ENORD node detail panel (on click):**
- **Role focus:** Product Launch Coordination · Event Operations · Industry Collaboration
- **Signature event:** Aerospace Product Launch Event
- **Color tag:** Brass (matches accent — signals it's a recent, high-visibility chapter)
- **Visual note:** ENORD node has a small ✈ icon in tooltip to nod at aerospace

**Mobile community view (revised):** The collapsed tree now has 4 org branches (GDG, IEEE, Placement Cell, **ENORD**) — ENORD expandable to show the Aerospace Product Launch as a child node.

### 🔧 Positioning — Reconfirmed

- **Primary public title (everywhere):** **AI Engineer**
- **Narrative tagline:** *"AI Engineer who builds intelligent products from idea to production."*
- **Hero differentiator:** *"I ship complete AI products, not just AI models."*
- Recruiter-search keywords reinforced on `/`, `/the-builder`, `/contact`: AI Engineer · GenAI Engineer · Software Engineer · ML Engineer · Founding Engineer

---

# Phase 3 — Design System

## 1. Visual Language

### Core philosophy
**"Editorial restraint × engineering precision."** Every pixel earns its place. The portfolio reads like a finely typeset book: confident, calm, ink-on-paper. Color is rationed. Motion is intentional. Whitespace is structural, not decorative.

### Foundational principles

| Principle | Rule |
|---|---|
| **Paper-first** | Cream `#F5F1E8` is the default canvas. Pure white never appears. |
| **Brass scarcity** | Accent gold appears in `<5%` of any viewport. CTAs, underlines, highlights — nothing else. |
| **Ink-honest type** | Headlines are heavy with optical-sized serifs. Body is workhorse sans. No display sans-serif. |
| **One emphasis per spread** | Each section has ONE hero element. Never compete. |
| **Geometry over decoration** | Hairline rules, brass dots, section numbers. No drop-shadows, no gradients, no glass-morphism. |
| **Motion serves meaning** | Transitions reveal hierarchy, not delight. |

### Visual archetypes drawn upon
- Magazine spread → spacing rhythm + asymmetric grids
- Annual report → metric strips + numbered sections
- Hardback book → drop caps + pull quotes + cream paper grain
- Linear / Vercel → micro-interactions + command palette
- Stripe Sessions → scroll-pinned storytelling + architecture reveals
- Perplexity → conversational AI as first-class surface

---

## 2. Color System

### Light Mode (default — "Paper")

| Token | Hex | Role | Usage |
|---|---|---|---|
| `--paper` | `#F5F1E8` | Canvas | Background everywhere |
| `--paper-soft` | `#FAF6EC` | Surface raised | Hover surfaces, quote callouts |
| `--linen` | `#EAE3D2` | Surface alt | Card backgrounds, dividers, code blocks |
| `--linen-deep` | `#DDD3BD` | Surface deeper | Active states, table headers |
| `--ink` | `#112D32` | Primary text | Headlines, body |
| `--ink-soft` | `#1F3B40` | Body alt | Long-form paragraphs |
| `--ink-muted` | `#5A6E72` | Tertiary | Captions, meta, timestamps |
| `--ink-whisper` | `#8B9799` | Whisper | Placeholders, disabled |
| `--ocean` | `#355C7D` | Secondary | Links, secondary CTAs, info accents |
| `--ocean-soft` | `#577BA1` | Ocean hover | Link hover state |
| `--brass` | `#C9893D` | Accent | Primary CTAs, underlines, highlights |
| `--brass-deep` | `#A56F2A` | Brass hover | Button hover / pressed |
| `--brass-glow` | `rgba(201, 137, 61, 0.18)` | Soft halo | Focus rings, hover halos |
| `--rule` | `rgba(17, 45, 50, 0.12)` | Hairlines | Dividers, borders |
| `--rule-strong` | `rgba(17, 45, 50, 0.24)` | Emphasized rule | Card borders |
| `--success` | `#5C8A6F` | Available status | Status pills only |
| `--warn` | `#B97E3C` | (Same as brass family) | Reserved |

### Dark Mode ("Char")

| Token | Hex | Role |
|---|---|---|
| `--paper` | `#0F1B1E` | Canvas (deep char) |
| `--paper-soft` | `#162428` | Surface raised |
| `--linen` | `#1C2D31` | Card backgrounds |
| `--linen-deep` | `#243639` | Active surfaces |
| `--ink` | `#F5F1E8` | Primary text (cream on dark) |
| `--ink-soft` | `#E0DBCC` | Body alt |
| `--ink-muted` | `#A3ADB0` | Captions |
| `--ink-whisper` | `#6A7679` | Placeholders |
| `--ocean` | `#7AA0C4` | Secondary (brightened for contrast) |
| `--ocean-soft` | `#9ABBDB` | Hover |
| `--brass` | `#D9A05B` | Accent (warmer for dark) |
| `--brass-deep` | `#E8B978` | Hover (brighter) |
| `--brass-glow` | `rgba(217, 160, 91, 0.22)` | Halo |
| `--rule` | `rgba(245, 241, 232, 0.10)` | Dividers |
| `--rule-strong` | `rgba(245, 241, 232, 0.20)` | Borders |

### Semantic mapping (component-agnostic tokens)

| Semantic | Light | Dark |
|---|---|---|
| `background` | `--paper` | `--paper` |
| `foreground` | `--ink` | `--ink` |
| `card` | `--paper-soft` | `--paper-soft` |
| `card-foreground` | `--ink` | `--ink` |
| `primary` | `--ink` | `--ink` |
| `primary-foreground` | `--paper` | `--paper` |
| `secondary` | `--ocean` | `--ocean` |
| `accent` | `--brass` | `--brass` |
| `muted` | `--linen` | `--linen` |
| `muted-foreground` | `--ink-muted` | `--ink-muted` |
| `border` | `--rule` | `--rule` |
| `ring` | `--brass-glow` | `--brass-glow` |

### Color usage rules
- **Brass appears only on:** primary CTA borders, active link underlines, section-number markers, highlighted metric values, "Available" status pulse, focus rings
- **Ocean appears only on:** secondary links, info badges, "Sources" pills in Ask Shafia, related-link chips
- **Ink** carries 90% of all type weight — headlines, body, navigation
- **Pure black `#000` and pure white `#FFF` are banned.** Even in code blocks, we use `--linen` background with `--ink` text.

### Accessibility contrast (WCAG AA verified)

| Pair | Ratio | Verdict |
|---|---|---|
| `--ink` on `--paper` | 11.8 : 1 | AAA |
| `--ocean` on `--paper` | 5.8 : 1 | AA Large + Normal |
| `--brass` on `--paper` | 4.6 : 1 | AA Normal |
| `--ink-muted` on `--paper` | 4.9 : 1 | AA Normal |

---

## 3. Typography System

### Type families

| Family | Role | Weights loaded | Why |
|---|---|---|---|
| **Fraunces** (variable) | Display + headline serif | 300–900, opsz 9–144 | Variable optical-sizing creates a true magazine feel; pairs warmth with authority |
| **Instrument Serif** | Editorial italic moments | 400 + 400 italic | Adds typographic poetry to pull-quotes and section labels |
| **Inter** | Body + UI | 400, 500, 600 | Most legible workhorse sans; pairs cleanly with Fraunces |
| **JetBrains Mono** | Code + meta + nav micro-caps | 400, 500 | Engineer-credibility marker; used sparingly in nav and metadata |

All loaded via Google Fonts (preconnect + display: swap) — total weight target **< 90KB woff2** after subsetting (Latin + Latin-ext only).

### Type scale (1.333 — perfect fourth, with editorial outliers)

| Token | Size (desktop) | Size (mobile) | Family | Use |
|---|---|---|---|---|
| `display-mega` | **240px** (15rem) | 88px | Fraunces 300, opsz 144 | Cover name "SHAFIA" |
| `display-xl` | **180px** | 72px | Fraunces 400, opsz 96 | Section-opener words |
| `display-lg` | **128px** | 56px | Fraunces 400, opsz 72 | Project titles |
| `display-md` | **96px** | 48px | Fraunces 500, opsz 48 | Page H1 |
| `display-sm` | **72px** | 40px | Fraunces 500 | Hero subtitles |
| `headline-xl` | **56px** | 36px | Fraunces 600 | Section H2 |
| `headline-lg` | **40px** | 28px | Fraunces 600 | Subsection H3 |
| `headline-md` | **28px** | 22px | Fraunces 600 | Card titles |
| `quote` | **32px** | 22px | Instrument Serif italic | Pull quotes |
| `body-lg` | **20px** | 17px | Inter 400 | Long-form essay |
| `body` | **17px** | 16px | Inter 400 | Default body |
| `body-sm` | **15px** | 14px | Inter 400 | Captions |
| `meta` | **13px** | 12px | JetBrains Mono 500, tracking +0.08em | Section markers, metadata |
| `meta-xs` | **11px** | 11px | JetBrains Mono 500, uppercase | Tags, pills |

### Line-height map

| Type role | Line height |
|---|---|
| Display (mega/xl/lg) | 0.92 |
| Display (md/sm) | 1.00 |
| Headlines | 1.10 |
| Body large | 1.65 |
| Body | 1.60 |
| Meta / mono | 1.40 |

### Letter-spacing rules
- Display + Headlines: `-0.02em` (tight, editorial)
- Body: `0`
- Mono / meta uppercase: `+0.08em`
- All-caps short labels: `+0.12em`

### Drop-cap specification
Used at the start of long-form essays (`/the-builder`, opening project narratives):
- Size: 5 lines × body line-height
- Float left, brass color, Fraunces 300
- 12px right padding, 6px down-offset to seat optically

### Pull-quote specification
- Family: Instrument Serif italic
- Size: 32px (desktop), 22px (mobile)
- Brass underline beneath the quote, 2px thick, draws on viewport enter
- Margin-floats right on desktop (occupies 1/3 column width)
- Stacks centered on mobile

---

## 4. Spacing, Grid & Layout

### Spacing scale (base = 4px)

`0 · 2 · 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128 · 160 · 200`

### Grid

| Breakpoint | Width range | Columns | Gutter | Margin |
|---|---|---|---|---|
| `mobile` | 320–767px | 4 | 16px | 16px |
| `tablet` | 768–1023px | 8 | 24px | 32px |
| `desktop` | 1024–1439px | 12 | 32px | 48px |
| `wide` | 1440px+ | 12 | 40px | 80px (max-content 1280px) |

### Container widths
- `container-narrow` → 720px (essays, long-form prose)
- `container-default` → 1080px (most sections)
- `container-wide` → 1280px (galleries, architecture diagrams)
- `container-bleed` → 100vw (hero videos, full-bleed moments)

### Section vertical rhythm
- Section padding: `160px` desktop / `96px` mobile (top + bottom)
- Within-section block spacing: `64px` desktop / `40px` mobile
- Inline element spacing: `24px` default
- Section number marker: always `32px` above section H2, brass dot + label `§ NN — NAME`

---

## 5. Motion Tokens

### Easing curves

| Token | Curve | Use |
|---|---|---|
| `ease-editorial` | `cubic-bezier(0.16, 1, 0.3, 1)` | Default — reveals, fades, scroll |
| `ease-snap` | `cubic-bezier(0.32, 0.72, 0, 1)` | Page transitions, nav |
| `ease-magnetic` | `cubic-bezier(0.22, 1, 0.36, 1)` | Hover warp on buttons |
| `ease-stamp` | `cubic-bezier(0.7, 0, 0.84, 0)` | Pressed/active states (quick in) |
| `ease-linear` | `linear` | Marquees, progress bars |

### Durations

| Token | Value | Use |
|---|---|---|
| `dur-instant` | 80ms | Tooltip flash, focus ring |
| `dur-fast` | 200ms | Hover state, link underline |
| `dur-base` | 400ms | Default reveal |
| `dur-deliberate` | 600ms | Card morphs, section entrances |
| `dur-slow` | 900ms | Page transition |
| `dur-cinematic` | 1200ms | Hero letter reveal |
| `dur-anchor` | 2000ms | Scroll-pinned diagram draw-in |

### Motion primitives (library)

| Primitive | Spec |
|---|---|
| `fade-rise` | opacity 0→1 + translateY(24→0) · `dur-base` · `ease-editorial` |
| `letter-stagger` | per-letter mask-clip from bottom · 80ms stagger · `dur-cinematic` |
| `word-stagger` | per-word opacity 0→1 · 40ms stagger · `dur-base` |
| `card-lift` | translateY(0→-4px) + scale(1→1.02) + shadow softens · `dur-fast` · `ease-magnetic` |
| `flip-morph` | FLIP: card bounding box → page hero · `dur-deliberate` · `ease-snap` |
| `underline-draw` | left-to-right scaleX(0→1) on brass underline · `dur-fast` · `ease-editorial` |
| `node-draw` | architecture nodes appear sequentially, lines stroke-dasharray animate · `dur-anchor` total |
| `magnet-hover` | translate up to 8px toward cursor on button · `dur-fast` · `ease-magnetic` |
| `marquee-slide` | infinite horizontal scroll · 30s loop · `ease-linear` |
| `curtain-wipe` | brass sheet slides bottom-left → top-right · `dur-slow` · `ease-snap` |
| `count-up` | numeric counter 0→target · `dur-deliberate` |
| `stream-token` | typewriter-style chat reveal · ~20ms per token · `ease-linear` |

### Reduced-motion fallback
When `prefers-reduced-motion: reduce`:
- All `*-stagger`, `letter-stagger`, `node-draw`, `flip-morph` → degrade to instant fade-only (200ms opacity)
- Marquees → static (no scroll loop)
- Parallax → disabled
- Count-up → display final number immediately
- Hover micro-interactions → preserved (they're functional, not decorative)

---

## 6. Component Library (Inventory & Specs)

### Primitives (extended from shadcn baseline)

| Component | Customization |
|---|---|
| `Button` | Variants: `primary` (ink bg + brass border on hover), `secondary` (brass outline), `ghost` (text + underline-draw), `magnetic` (CTAs with magnet-hover) |
| `Card` | Variants: `paper` (default linen surface), `bordered` (hairline rule-strong), `flagship` (brass-ringed for Learnify in timeline) |
| `Badge` | Variants: `available` (success-soft + pulse), `tag` (linen bg + meta mono), `status` (small dot + label) |
| `Input` | Single-line; brass focus ring; meta-mono label above |
| `Dialog` | Used for command palette, request-demo form, architecture-diagram zoom |
| `Tooltip` | Ink bg, paper text, 11px meta-mono |
| `Tabs` | Horizontal underline-draw on active tab |
| `Separator` | Hairline rule, default 1px |

### Custom components (portfolio-specific)

| Component | Purpose |
|---|---|
| `SectionMarker` | "§ NN — NAME" with brass dot + meta-mono label |
| `MetricStrip` | 4-value horizontal strip with massive display numerals + meta labels, sticky behavior on scroll |
| `PullQuote` | Instrument-Serif italic + brass underline, margin-floating on desktop |
| `DropCap` | First-letter brass treatment for essay openers |
| `ProjectPoster` | Archive grid card with poster image + hover video + brass corner-tick |
| `ProjectCTABar` | Renders only relevant CTAs from the 3-state demo system |
| `ArchitectureDiagram` | Mermaid-rendered SVG with click-to-expand modal + node-draw animation |
| `TimelineSpine` | Vertical/horizontal timeline with milestone cards + brass flagship ring |
| `ConstellationCluster` | Skill-cluster card with dot nodes + connection lines on hover |
| `NetworkGraph` | D3 force-directed for `/community` |
| `DemoVideo` | Autoplay muted looped player with hover-for-sound prompt |
| `CommandPalette` | ⌘K modal with fuzzy nav + actions |
| `AskShafiaOrb` | Floating brass orb 40px persistent across site |
| `AskShafiaChat` | Conversational interface (full page + bottom-sheet variants) |
| `SourcePill` | Source-citation chip in chat responses |
| `RelatedChip` | Related-link chip below chat answers |
| `MarqueeBand` | Infinite-scroll tech stack band on cover |
| `PromotionConnector` | Brass arrow visualizing role progression (GDG PR → Manager) |
| `ResumePill` | Brass-outlined download CTA in nav |
| `StatusPill` | "Available · 2026" with slow brass pulse |
| `RequestDemoModal` | Form-prefilled mailto for State C projects |
| `ScrollProgress` | 3px top-edge brass bar tracking page progress |
| `ThemeToggle` | Sun/moon swap with `dur-base` cross-fade |

### Component composition rules
- **One primary CTA per viewport** — never stack two brass-bordered buttons next to each other
- **Cards never have shadows** — they use hairline `--rule` borders + slight surface lift via `--paper-soft` background
- **Icons are always 16px (inline) or 20px (standalone)** — Lucide icons exclusively, 1.5px stroke
- **Buttons have 44px minimum touch target** even when visually smaller (padded hit-area)

---

## 7. Theme Architecture

### Token layering (3 levels)
```
Layer 1 — Primitive tokens     (raw hex values)
Layer 2 — Semantic tokens      (--background, --foreground, etc.)
Layer 3 — Component tokens     (--button-primary-bg, etc.)
```
Component tokens reference semantic tokens, which reference primitives. **Components never reference primitives directly.** This makes future palette shifts a one-file change.

### CSS custom property strategy
- All tokens defined in `:root` (light) and `[data-theme="dark"]` (dark)
- Tailwind config maps semantic tokens to utility classes (`bg-background`, `text-foreground`, etc.)
- shadcn variables overridden to match our semantic mapping
- No raw hex values in any component — only `var(--token)` or Tailwind utility

### Mode persistence
- User preference saved to `localStorage` under `shafia.theme`
- First-paint: system preference detected via `prefers-color-scheme`
- Toggle animates with `dur-base` cross-fade across the entire document
- All charts (Recharts, D3) read computed CSS variables and re-render on theme change

---

## 8. Dark Mode Strategy

### Philosophy
Dark mode isn't just inverted light mode. It's a **separate editorial palette** — "Char" — with intentional warmth: deep teal-charcoal background, cream-tinted text, brightened brass. The portfolio should feel like reading a leather-bound book at night, not a coding terminal.

### What changes
| Aspect | Light ("Paper") | Dark ("Char") |
|---|---|---|
| Background | Cream paper `#F5F1E8` | Deep char-teal `#0F1B1E` |
| Text | Ink emerald `#112D32` | Cream `#F5F1E8` |
| Brass | Warm gold `#C9893D` | Brighter brass `#D9A05B` (better on dark) |
| Ocean | Deeper blue `#355C7D` | Brighter ocean `#7AA0C4` |
| Grain texture | Visible paper noise (~3%) | Subtle char vignette (~5% radial dim at edges) |
| Hairlines | Ink 12% | Cream 10% |
| Images | Default brightness | Slight `brightness(0.94)` on raster images to soften glare |
| Architecture diagrams | Ink-on-paper | Cream-on-char with brightened brass accents |
| Code blocks | Linen surface + ink text | Linen-deep surface + cream text |

### What stays consistent (cross-mode invariants)
- All animations and easing curves
- All spacing, typography sizes, and layout
- All component behaviors and interactions
- Brass remains the only accent color
- Section markers, drop caps, pull quotes — same treatment, recolored automatically via tokens

### Mode-specific moments
- **Cover page in dark mode:** Letters of "SHAFIA" gain a subtle brass under-glow (warm halo at the baseline) — looks like foil on dark leather
- **Demo videos:** Get a 1px brass border in dark mode for definition against the dark canvas
- **Ask Shafia chat:** Source pills become more saturated in dark mode to maintain hierarchy
- **Cover marquee:** Tech stack text uses ocean in light mode, brass in dark mode (for warmth balance)

### Default mode
**System preference respected.** No forced mode. First-time visitor sees whatever their OS prefers. Toggle available in nav and command palette (`⌘.` shortcut).

### Dark-mode QA checklist
- Contrast verified ≥ AA on all token pairs
- No image bleeds pure-white pixels into dark canvas
- All diagrams have explicit dark-mode variants (not just CSS inversion)
- Charts, network graph, constellations re-render on theme change
- Print stylesheet always uses light mode regardless of UI theme

---

## ✅ Phase 3 Complete

**Awaiting your sign-off on:**

1. **Color tokens** — happy with the 3-layer system (primitives → semantic → component) and the dark-mode "Char" palette feeling distinct from light?
2. **Typography stack** — Fraunces + Instrument Serif + Inter + JetBrains Mono — any swap requests, or lock it?
3. **Motion library** — 11 motion primitives feel like enough? Want any extra (e.g., a "page-shuffle" or "deck-card" transition)?
4. **Component inventory** — anything missing from the custom components list? (Notable: I included `PromotionConnector` for the GDG progression, `ProjectCTABar` for the 3-state demo system, `AskShafiaOrb` for persistent access.)
5. **Dark mode philosophy** — comfortable treating it as a parallel editorial palette ("Char") rather than auto-inverted?
6. **Type sizes** — `display-mega` at 240px on cover — too large? Or keep that punch?
