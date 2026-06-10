# Phase 2 — Wireframes & UX Specifications

*Revisions absorbed. No code. Awaiting approval for Phase 3.*

---

## ✏️ Strategy Revisions Applied

| Item | Before | **After (locked)** |
|---|---|---|
| Public title | AI Product Engineer | **AI Engineer** |
| Narrative tagline | Building intelligent systems… | **"AI Engineer who builds intelligent products from idea to production."** |
| Hero differentiator | (various) | **"I ship complete AI products, not just AI models."** |
| AI Threat Detection | CyArt research case study | **Independent personal project → `/work/ai-threat-detection`** |
| CyArt framing | Applied AI Research | **AI Engineering: systems, pipelines, benchmarks, code** |
| `/lab` framing | Research Lab | **Engineering Lab** — internships positioned as build/benchmark work |

**Product Archive (final 5 dedicated routes):**
`Learnify AI · KeyLytics · Walmart Innovation Suite (FeelCart) · AI Threat Detection · CineScope`

**Engineering Lab (final 2 case studies):**
`CyArt Tech` (News Pipeline + Surveillance Engineering + Voice-Cloning Benchmarks) · `Edunet Foundation` (CineScope build journey)

---

## 1. Desktop Wireframes (1440px reference)

### Wireframe Legend
`[ICON]` icon · `———` divider · `▶` autoplay video · `▣` image/poster · `«CTA»` button · `§NN` section marker · `→` link · `▒` muted/dim block

---

### 1.1 `/` — Cover Page

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  SHAFIA                       Work · Journey · Lab · Skills · Ask Shafia   ↓Resume │  ← sticky nav (translucent on scroll)
├──────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   § 00 — INTRODUCTION                                              vol. 01   │
│                                                                              │
│                                                                              │
│   S H A F I A                                                                │  ← 220px Fraunces, ink on paper
│   A M E E R U D D I N                                                        │
│                                                                              │
│   ─────────────                                                              │
│   AI ENGINEER  ·  MUMBAI, IN                                                 │  ← 14px JetBrains mono, brass underline
│                                                                              │
│                                                                              │
│         "I ship complete AI products,                                        │  ← floats lower-right, 32px Instrument Serif
│          not just AI models."                                                │
│                                                                              │
│                                                                              │
│   ↳ available for AI Engineer / GenAI / Founding Eng roles · 2026            │
│                                                                              │
│   «  See the work  →  »      « Ask Shafia AI »      « Download résumé ↓ »    │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  ▒ scroll cue: "↓ keep reading"     ⌘K open command palette                  │
└──────────────────────────────────────────────────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│  ‹‹  Python · FastAPI · React 19 · LangChain · FAISS · MongoDB · Whisper ···  │  ← infinite marquee (slow, ~30s loop)
└──────────────────────────────────────────────────────────────────────────────┘
                                  ▼
┌──────────────────────────────────────────────────────────────────────────────┐
│   THE FEATURED WORK                                                          │
│                                                                              │
│   ┌─────────────────────────┐    Learnify AI                                 │
│   │  ▶ autoplay loop preview │    A multimodal AI tutor with                 │
│   │     learnify dashboard   │    emotion-aware adaptive learning.           │
│   └─────────────────────────┘    ↳ Read the case study →                     │
│                                                                              │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Layout hierarchy:** Display-type name (visual anchor) → Title strip → Pull quote (offset right) → Status line → CTAs → Scroll cue.
**CTA locations:** Three buttons stacked left; floating "Ask Shafia" orb bottom-right (40px diameter, brass background).

---

### 1.2 `/the-builder`

```
┌─ § 01 — THE BUILDER ────────────────────────────────────  Cover · Work · Lab ┐
│                                                                              │
│             Who                                                              │
│             builds the                              ┌─ portrait ─┐           │
│             system                                  │   ▣        │           │
│             behind the                              │  polaroid  │           │
│             system?                                 │  ~360×450  │           │
│                                                     └────────────┘           │
│                                                                              │
│   ─── essay column (640px, 18px Inter, 1.7 leading) ────                     │
│                                                                              │
│   I  build intelligent products from idea to production.   ←─ drop cap "I"   │
│   I work across the stack — RAG pipelines, real-time                         │
│   inference, async backends, expressive frontends — because                  │
│   most "AI" experiences fail at the seams.                                   │
│                                                                              │
│   ───  pull quote (margin-floated, brass underline) ───                      │
│   « I don't fine-tune toy models. I ship complete AI products. »            │
│                                                                              │
│   ─── 4 essay panels (offset grid) ───                                       │
│   ┌─ WHO ────┐  ┌─ WHAT ───┐  ┌─ WHY ────┐  ┌─ HOW ────┐                     │
│   │ origin   │  │ stack +  │  │ values:  │  │ process: │                     │
│   │ story    │  │ domains  │  │ utility, │  │ design → │                     │
│   │          │  │          │  │ privacy, │  │ build →  │                     │
│   │          │  │          │  │ rigor    │  │ ship     │                     │
│   └──────────┘  └──────────┘  └──────────┘  └──────────┘                     │
│                                                                              │
│   ─── manifesto closer (full-bleed, paper-cream surface) ───                 │
│                                                                              │
│       "The future of AI isn't in models.                                     │
│        It's in the products built around them."                              │
│                                                                              │
│                                                « Next: my journey  →  »      │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 1.3 `/journey` — Timeline

```
┌─ § 02 — THE JOURNEY ────────────────────────────────────────────────────────┐
│                                                                              │
│  Education · Leadership · Internships · Projects · Hackathons · Achievements │  ← filter chips
│                                                                              │
│  ╔══════════════════════════════════════════════════════════════════════╗   │
│  ║ 2022 ●────●─────●──────●───────●─────●────●─── 2026 →                ║   │  ← horizontal scroll rail (sticky)
│  ╚══════════════════════════════════════════════════════════════════════╝   │
│        ↑                                                                     │
│   ┌────●───── 2022 · Sep ────────────────────────────────────────────┐      │
│   │  B.Tech CSE, Jamia Hamdard begins · CGPA 8.46                    │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2023 · Aug ────────────────────────────────────────────┐      │
│   │  IEEE Student Coordinator · 25+ events · 700+ participants       │      │
│   │  ▣ event flyer thumbnail                                          │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2024 · Sep ────────────────────────────────────────────┐      │
│   │  GDG Social Media Manager · 65% reach growth · 10-person team    │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2025 · Feb ────────────────────────────────────────────┐      │
│   │  FeelCart (Walmart Innovation Suite) shipped                     │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2025 · Aug → Sep ─ Edunet Foundation Internship        ┐      │
│   │  Frontend Web Dev Intern · shipped CineScope                     │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2025 · Sep → Dec ─ CyArt Tech AI Engineer Intern       ┐      │
│   │  News pipeline · Surveillance system · Voice-cloning benchmarks  │      │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2025 · Oct ──── KeyLytics shipped ──────────────────────┐     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2026 · Jan-Mar ── Learnify AI · flagship build  ⭐      ┐     │  ← brass highlight ring
│   │  Multi-LLM · RAG · WebSocket emotion · 12+ endpoints             │     │
│   └────────────────────────────────────────────────────────────────────┘     │
│                                                                              │
│   ┌────●───── 2026 · May ──── Graduation · B.Tech CSE                ┐      │
│   └────────────────────────────────────────────────────────────────────┘     │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Hierarchy:** Sticky horizontal mini-map at top → vertical milestone cards below. Each card has year-pill, title, 1-sentence description, optional thumbnail. **Brass-ring highlight** on flagship moments.

---

### 1.4 `/work` — Product Archive

```
┌─ § 03 — THE WORK ──────────────────────────────────────────────────────────┐
│                                                                            │
│  PRODUCT                                                                   │
│  ARCHIVE                                              5 shipped products   │
│                                                                            │
│  ─── filter row ───   All  ·  AI/RAG  ·  Full-Stack  ·  CV  ·  GenAI       │
│                                                                            │
│  ┌────────────────────────────┐  ┌────────────────────────────┐            │
│  │                            │  │                            │            │
│  │     ▶  LEARNIFY AI         │  │     ▶  KEYLYTICS           │            │
│  │     poster (16:10)          │  │     poster                │            │
│  │     ───                     │  │     ───                   │            │
│  │  01 · Multimodal AI Tutor   │  │  02 · SEO Intelligence    │            │
│  │  RAG · Emotion · Voice      │  │  10 modules · Gemini AI   │            │
│  │  → Open case study          │  │  → Open case study        │            │
│  └────────────────────────────┘  └────────────────────────────┘            │
│                                                                            │
│  ┌────────────────────────────┐  ┌────────────────────────────┐            │
│  │                            │  │                            │            │
│  │  ▶  WALMART INNOV. SUITE   │  │  ▶  AI THREAT DETECTION   │            │
│  │  ────                       │  │     poster                │            │
│  │  03 · Mood + Auto-Cart      │  │  04 · Real-time CV System │            │
│  │  Emotion · SerpAPI · NLP    │  │  OpenCV · 4 streams       │            │
│  │  → Open case study          │  │  → Open case study        │            │
│  └────────────────────────────┘  └────────────────────────────┘            │
│                                                                            │
│  ┌────────────────────────────┐                                            │
│  │  ▶  CINESCOPE              │                                            │
│  │  ────                       │   « Side experiments on GitHub →  »       │
│  │  05 · Full-Stack Movie     │   (IntelliDoc · MediScan · others)         │
│  │  Express · OMDb proxy      │                                            │
│  │  → Open case study         │                                            │
│  └────────────────────────────┘                                            │
└────────────────────────────────────────────────────────────────────────────┘
```

**Card behavior:** On hover, video preview begins (muted), card lifts 4px, brass corner-tick appears.
**Grid:** 2-col on desktop, 4:3 aspect cards, 48px gutters.

---

### 1.5 `/work/learnify-ai` — Project Detail (Template)

```
┌──────────────────────────────────────────────────────────────────────────────┐
│  ←  Back to Work                                       01 / 05  ●○○○○        │
│                                                                              │
│  LEARNIFY                                                                    │
│  AI                                          ↑ GitHub  ↗ Live  ↓ Demo video  │
│                                                                              │
│  "AI that learns how you learn."                                             │
│                                                                              │
│  ╔════════════════════════════════════════════════════════════════════════╗ │
│  ║                                                                        ║ │
│  ║                    ▶  AUTOPLAY HERO VIDEO (16:9)                       ║ │  ← muted, loops, click for sound
│  ║                       full-bleed within container                      ║ │
│  ║                                                                        ║ │
│  ╚════════════════════════════════════════════════════════════════════════╝ │
│                                                                              │
│  ─── metric strip (sticky on scroll past) ───                                │
│  3× FASTER RAG  ·  40% PERSONALIZATION  ·  12+ ENDPOINTS  ·  0 DOWNTIME      │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § THE PROBLEM                                                               │
│                                                                              │
│  Static PDFs and PPTs don't teach. They sit. Students forget. Existing       │
│  AI tutors are wrappers — they can't see frustration, can't speak the        │
│  learner's language, can't run offline. I built Learnify to fix that.        │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § THE SOLUTION                                                              │
│                                                                              │
│   ┌── PDF/PPT in ──┐    ┌── Adaptive RAG ──┐    ┌── Voice + Emotion out ──┐  │
│   │                │ →  │   FAISS · Gemini  │ →  │   gTTS · DeepFace alert │ │
│   │                │    │   Groq · Ollama   │    │                          │ │
│   └────────────────┘    └───────────────────┘    └──────────────────────────┘ │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § ARCHITECTURE                                                              │
│                                                                              │
│  ╔════════════════════════════════════════════════════════════════════════╗ │
│  ║                                                                        ║ │
│  ║   [ Mermaid → rendered SVG · pan/zoom enabled ]                        ║ │
│  ║   User → React 19 → FastAPI → (Auth · WS · Queue)                      ║ │
│  ║                ↓        ↓                                              ║ │
│  ║              Mongo    FAISS  → LLM Resolver → Gemini/Groq/Ollama       ║ │
│  ║                                                                        ║ │
│  ╚════════════════════════════════════════════════════════════════════════╝ │
│  ↳ Click to expand · view source diagram                                     │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § STACK                                                                     │
│                                                                              │
│  Backend  ·  FastAPI · LangChain · FAISS · Motor (Mongo) · Whisper · gTTS    │
│  Frontend ·  React 19 · Vite · Tailwind 4 · D3.js · Recharts                 │
│  AI/ML    ·  Gemini 2.5 · Groq LLaMA 3.3 · Ollama · DeepFace · MiniLM-L6     │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § ENGINEERING DECISIONS (the differentiator)                                │
│                                                                              │
│  ┌─ 01 ─ Stateful sync on ephemeral hosts ──────────────────────────────┐   │
│  │  Problem: HF Spaces wipes FAISS on restart.                          │   │
│  │  Solution: sync_faiss_with_db() rebuilds from MongoDB chunks.        │   │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ┌─ 02 ─ Decoupled emotion inference (1.5s latency, 30fps video) ──────┐    │
│  │  Webcam → WebSocket bypass → background worker → 5-frame vote queue │    │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ┌─ 03 ─ Runtime LLM hot-swap (Gemini ↔ Groq ↔ Ollama) ────────────────┐    │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ┌─ 04 ─ Bidirectional vector-document sync (FAISS sidecar mapping) ──┐    │
│  └──────────────────────────────────────────────────────────────────────┘   │
│  ┌─ 05 ─ Strict privacy mode (cloud-call interception) ────────────────┐    │
│  └──────────────────────────────────────────────────────────────────────┘   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § FEATURES (4 clusters)                                                     │
│   Adaptive Learning · Multimodal AI · Gamification · Infrastructure          │
│   [ 4-column feature grid with icons ]                                       │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § PERFORMANCE                                                               │
│   3× retrieval speedup · 40% personalization gain · 5 difficulty tiers       │
│   · 6 mini-games · 40+ languages · zero-downtime model swap                  │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § SCREENSHOTS  (horizontal scroll carousel · 1200×750)                      │
│   ▣ ▣ ▣ ▣ ▣ ▣                                                                │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § BUILD TIMELINE (mini visual)                                              │
│   Jan ●─── Setup ─── Feb ●─── RAG Pipeline ─── Mar ●─── Multimodal ── Ship   │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│  § LESSONS LEARNED & ROADMAP                                                 │
│  Lessons (3 bullets) · Roadmap (IVF index · Multi-tenant · SM-2 · SSE)       │
│                                                                              │
├──────────────────────────────────────────────────────────────────────────────┤
│   « ↗ View on GitHub »   « ↗ Live Demo »   « Ask Shafia about this project » │
│                                                                              │
│   Next →  KeyLytics                                                          │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 1.6 `/work/keylytics`

Same template. Specifics:
- **Hero metric strip:** `60% TIME SAVED · 50+ KEYWORDS · <30s STRATEGY · 45% LATENCY ↓`
- **Architecture section:** Gemini ↔ DataForSEO ↔ SerpAPI fallback flow diagram
- **Engineering Decisions (4):** Hybrid intent classifier · Credit-preservation auto-switch · 10-module pipeline orchestration · ROI scoring formula
- **Screenshots:** 6 dashboard captures
- **GitHub + Live demo** at top-right and repeated at bottom

### 1.7 `/work/walmart-innovation-suite`

- **Hero pull-quote:** *"Shop what you feel."*
- **Twin-module split:** Page introduces FeelCart as ONE platform with two engines (MoodCart on left, AutoCart on right) — visually presented as a **diptych**
- **Hero metric strip:** `45% RELEVANCE · 55% FASTER DECISIONS · 70% CART SPEED · 50% RECURRING ACCURACY`
- **Architecture:** Two parallel flows merging into Streamlit UI
- **Engineering Decisions:** Emotion classifier with TextBlob fallback · Category-aware personalization (age/interest/gender) · Frequency-based refill logic · MySQL + JSON hybrid persistence

### 1.8 `/work/ai-threat-detection`

- **Hero pull-quote:** *"Real-time threat detection. 4 streams. One pipeline."*
- **Hero metric strip:** `4 CONCURRENT STREAMS · ~7.4 FPS · 2 MOTION ALGOS · 4 INTEGRITY CHECKS`
- **Architecture:** Multi-stream OpenCV → motion detection → integrity verification → alert engine
- **Engineering Decisions:** Concurrent stream management · Motion algorithm selection rationale · Integrity check design · Alert deduplication
- **Note:** clearly positioned as **independent personal project** (not CyArt)

### 1.9 `/work/cinescope`

- **Hero pull-quote:** *"Your lens into the world of movies."*
- **Hero metric strip:** `8 USER FEATURES · 6 VALIDATION CHECKS · 5 PROD ISSUES RESOLVED · MIT LICENSED`
- **Architecture:** Frontend ↔ Express proxy ↔ OMDb API + localStorage flow
- **Engineering Decisions:** API key gating via proxy · Hybrid client-side persistence · Defensive N/A handling · Modal lifecycle management

---

### 1.10 `/lab` — Engineering Lab

```
┌─ § 04 — THE LAB ───────────────────────────────────────────────────────────┐
│                                                                            │
│  ENGINEERING                                                               │
│  LAB                                          Where I build, benchmark,    │
│                                               and break things in prod.    │
│                                                                            │
│  ─────────────────────────────────────────────────────────────────────     │
│                                                                            │
│  ┌── CyArt Tech ───────────────────────────────────────────────────┐       │
│  │  AI Engineer Intern · Sep – Dec 2025                            │       │
│  │  ─── 3 engineering deliverables ───                             │       │
│  │  ┌─ News Sentiment Pipeline ─┐  ┌─ Surveillance Engineering ──┐ │       │
│  │  │ 494 headlines · 20 RSS · │  │ 4 streams · ~7.4fps · OpenCV │ │       │
│  │  │ 19/sec · 3 NLP engines   │  │ 2 motion algos · 4 checks    │ │       │
│  │  │ → read more              │  │ → read more                  │ │       │
│  │  └──────────────────────────┘  └──────────────────────────────┘ │       │
│  │  ┌─ Voice Cloning Benchmarks ─────────────────────────────────┐  │       │
│  │  │ XTTS-v2 vs VALL-E-X · 15 experiments · 0.965 similarity   │  │       │
│  │  │ → read more                                                │  │       │
│  │  └────────────────────────────────────────────────────────────┘  │       │
│  └──────────────────────────────────────────────────────────────────┘      │
│                                                                            │
│  ┌── Edunet Foundation ────────────────────────────────────────────┐       │
│  │  Frontend Web Dev Intern · Aug – Sep 2025                       │       │
│  │  Shipped CineScope · Express proxy · 6 validations · 5 fixes    │       │
│  │  → read the build journey                                       │       │
│  └──────────────────────────────────────────────────────────────────┘      │
└────────────────────────────────────────────────────────────────────────────┘
```

Each sub-route (`/lab/news-sentiment-pipeline`, `/lab/surveillance-engineering`, `/lab/voice-cloning-benchmarks`, `/lab/cinescope-build`) uses an abbreviated project-detail template: Objective · Architecture · Stack · Engineering work · Results · What I learned.

---

### 1.11 `/community` — Community Impact (Network Map)

```
┌─ § 05 — COMMUNITY ──────────────────────────────────────────────────────────┐
│                                                                              │
│  COMMUNITY                                                                   │
│  IMPACT                              25+ events · 700+ humans reached · 2 orgs│
│                                                                              │
│  ╔════════════════════════════════════════════════════════════════════════╗ │
│  ║                                                                        ║ │
│  ║                     ●  Shafia                                          ║ │  ← D3 force-directed graph
│  ║                   /  |  \                                              ║ │
│  ║                 /    |    \                                            ║ │
│  ║              GDG    IEEE  Placement Cell                               ║ │
│  ║              /\      |\        \                                       ║ │
│  ║   Social   Campaigns Events  Coordination                              ║ │
│  ║   Team     Industry  Hosting                                           ║ │
│  ║   (10)     Partners  Design                                            ║ │
│  ║            (5+)      Support                                           ║ │
│  ║                                                                        ║ │
│  ╚════════════════════════════════════════════════════════════════════════╝ │
│   Click any node to reveal details · drag to rearrange                       │
│                                                                              │
│   ─── stats strip ───                                                        │
│   65% reach growth · 40% engagement lift · 30% participation lift · 700+ reach│
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 1.12 `/skills` — Skill Ecosystem (Constellations)

```
┌─ § 06 — CAPABILITIES ───────────────────────────────────────────────────────┐
│                                                                              │
│  THE                                                                         │
│  ECOSYSTEM                          Not a progress bar in sight.             │
│                                                                              │
│   ─── 9 constellation clusters (offset grid, each cluster ~360×280) ───      │
│                                                                              │
│   ┌─ AI / ML ─────────────┐   ┌─ GenAI ───────────────┐                      │
│   │ • PyTorch    ● Scikit │   │ ● LLMs    ● Prompt Eng│                      │
│   │ ● Transform. ● OpenCV │   │ ● RAG     ● LangChain │                      │
│   │ ● NLTK       ● MiniLM │   │ ● Gemini  ● Groq      │                      │
│   └────────────────────────┘   └────────────────────────┘                    │
│                                                                              │
│   ┌─ Agentic AI ──────────┐   ┌─ Software Eng ────────┐                      │
│   │ ● LLM Orchestration   │   │ ● Python  ● FastAPI   │                      │
│   │ ● Multi-LLM routing   │   │ ● REST APIs           │                      │
│   │ ● Tool use            │   │ ● Async patterns      │                      │
│   └────────────────────────┘   └────────────────────────┘                    │
│                                                                              │
│   ┌─ Frontend ────────────┐   ┌─ Backend ─────────────┐                      │
│   │ ● React 19 ● Vite     │   │ ● FastAPI ● Node.js   │                      │
│   │ ● Tailwind ● D3.js    │   │ ● Express ● Streamlit │                      │
│   └────────────────────────┘   └────────────────────────┘                    │
│                                                                              │
│   ┌─ Databases ───────────┐   ┌─ Cloud / DevOps ──────┐                      │
│   │ ● MongoDB ● MySQL     │   │ ● AWS    ● Docker     │                      │
│   │ ● SQLite  ● FAISS     │   │ ● GH Act ● HF Spaces  │                      │
│   └────────────────────────┘   └────────────────────────┘                    │
│                                                                              │
│   ┌─ Product Development ─┐                                                  │
│   │ ● UX thinking ● Specs │                                                  │
│   │ ● Roadmapping ● Ship  │                                                  │
│   └────────────────────────┘                                                 │
└──────────────────────────────────────────────────────────────────────────────┘
```

**Visual treatment:** Each cluster = a small "star map." Dots vary in size based on depth. Hover a dot → constellation lines glow brass + tooltip "How I used this: [project link]". **No bars, no percentages, no levels.**

---

### 1.13 `/ask-shafia` — RAG Chatbot

```
┌─ § 07 — ASK SHAFIA ────────────────────────────────────────────────────────┐
│                                                                              │
│   Ask Shafia AI                                          ↻ reset · 📎 share  │
│   ── Knowledge: resume · projects · experience · LinkedIn ──                 │
│                                                                              │
│   ┌────────────────────────────────────────────────────────────────────┐    │
│   │                                                                    │    │
│   │  Try asking…                                                       │    │
│   │  ┌───────────────────────────────┐  ┌─────────────────────────────┐│    │
│   │  │ Tell me about Learnify AI     │  │ Why should we hire Shafia?  ││    │
│   │  └───────────────────────────────┘  └─────────────────────────────┘│    │
│   │  ┌───────────────────────────────┐  ┌─────────────────────────────┐│    │
│   │  │ What did she do at CyArt?     │  │ Show me her best RAG work    ││    │
│   │  └───────────────────────────────┘  └─────────────────────────────┘│    │
│   │  ┌───────────────────────────────┐  ┌─────────────────────────────┐│    │
│   │  │ What tech does she know best? │  │ Is she available for hire?   ││    │
│   │  └───────────────────────────────┘  └─────────────────────────────┘│    │
│   │                                                                    │    │
│   │  ─── conversation thread (appears below once started) ───          │    │
│   │                                                                    │    │
│   │  YOU › Tell me about Learnify AI                                   │    │
│   │  SHAFIA-AI › Learnify AI is a production-grade multimodal tutor…   │    │
│   │              ──── streaming text, token by token ────              │    │
│   │              Sources: [resume §projects], [github/Learnify-AI]     │    │
│   │              ┌─ Related ─┐                                         │    │
│   │              │ → Open project page  → View on GitHub               │    │
│   │              └────────────┘                                        │    │
│   │                                                                    │    │
│   └────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│   ┌─ input bar (sticky bottom) ──────────────────────────────────────────┐  │
│   │  Ask anything about Shafia…                                  [↵]    │  │
│   └──────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

### 1.14 `/contact`

```
┌─ § 08 — LET'S BUILD ───────────────────────────────────────────────────────┐
│                                                                              │
│         L E T ' S                                                            │
│         B U I L D                                                            │
│         S O M E T H I N G                                                    │
│         M E A N I N G F U L .                                                │
│                                                                              │
│         ──── 220px Fraunces, ink-on-paper, line-by-line reveal ────          │
│                                                                              │
│   ┌─ 4 contact tiles (2×2 grid, 320px each) ─────────────────────────┐      │
│   │                                                                   │      │
│   │   📧 Email                          ↗ LinkedIn                    │      │
│   │   shafiaameeruddin637@gmail.com    linkedin.com/in/shafia…        │      │
│   │   ─ click to copy                   ─ open in new tab              │      │
│   │                                                                   │      │
│   │   ◐ GitHub                          ↓ Résumé                      │      │
│   │   github.com/Shafia-01              one-click PDF                  │      │
│   │   ─ open in new tab                 ─ versioned 2026.06            │      │
│   │                                                                   │      │
│   └───────────────────────────────────────────────────────────────────┘      │
│                                                                              │
│   ─── status line ───                                                        │
│   Available for AI Engineer · GenAI · Software Engineer · Founding Eng roles │
│   Based in Mumbai, IN · Open to remote · Replies within 24h                  │
│                                                                              │
│   ──── footer ────                                                           │
│   © 2026 Shafia Ameeruddin · Built with intention · Source on GitHub →       │
└──────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Mobile Wireframes (375px reference)

### 2.1 `/` Cover — Mobile
```
┌───────────────────────┐
│ ☰          ⌘  Ask AI │  ← compressed nav; brass circle "Ask AI" pill
├───────────────────────┤
│ § 00                  │
│                       │
│ SHAFIA                │  ← 88px display
│ AMEER-                │
│ UDDIN                 │
│                       │
│ ───                   │
│ AI ENGINEER · MUMBAI  │
│                       │
│ "I ship complete      │
│  AI products,         │
│  not just AI models." │
│                       │
│ ┌─────────────────┐   │
│ │  See the work →│   │
│ └─────────────────┘   │
│ ┌─────────────────┐   │
│ │  Ask Shafia AI │   │
│ └─────────────────┘   │
│ ↓ résumé              │
│                       │
│ ↓ keep scrolling      │
├───────────────────────┤
│ ‹ marquee tech ›      │
└───────────────────────┘
```

### 2.2 `/the-builder` — Mobile
Single-column essay (16px Inter, 1.7 leading, 16px margins). Pull quote = full-width brass-bordered card. Polaroid sits *above* the headline, not beside it. 4 essay panels stack vertically.

### 2.3 `/journey` — Mobile
Horizontal scroll rail collapsed to a **vertical spine** running down left edge (24px from edge), milestone dots glow as user scrolls. Each card stretches full-width minus 56px (left spine + right margin).

### 2.4 `/work` — Mobile
**Single-column stacked posters**, each card 16:9, full-width minus 32px. Tap card → opens project page. Hover behavior replaced by **inline video preview on viewport enter** (autoplay muted).

### 2.5 Project pages — Mobile
- Sticky bottom action bar: `↗ GitHub · ↗ Live · Ask AI` (always reachable, 56px tall).
- Architecture diagrams become **horizontally scrollable** with pinch-zoom.
- Metric strips collapse to 2×2 grid then auto-scroll loop.
- Engineering decision cards stack vertically with accordion expand.

### 2.6 `/lab` — Mobile
CyArt section becomes a vertical accordion (3 collapsible items). Edunet below it.

### 2.7 `/community` — Mobile
D3 force graph replaced by **stacked node-list** (Shafia → 3 orgs → events as nested children). On tap, smooth expand to show event details. *Reasoning:* dense graphs are unusable on mobile.

### 2.8 `/skills` — Mobile
Constellations become **horizontal swipe carousel** — one cluster at a time, full-width. Dot positions preserved within each cluster card.

### 2.9 `/ask-shafia` — Mobile
Full-screen chat (Perplexity-like). Suggested prompts as horizontally scrollable chips above input. Input bar fixed at bottom above mobile keyboard. Source citations open as bottom sheet.

### 2.10 `/contact` — Mobile
Headline becomes 4 lines at 64px each. Contact tiles stack 1-column. Status line and footer below.

### Global mobile nav
**Hamburger reveals full-screen overlay** with editorial-style menu:
```
§ 01  THE BUILDER
§ 02  THE JOURNEY
§ 03  THE WORK
§ 04  THE LAB
§ 05  COMMUNITY
§ 06  CAPABILITIES
§ 07  ASK SHAFIA
§ 08  LET'S BUILD
────
Résumé ↓ · GitHub ↗ · LinkedIn ↗
```
Each item animates in from right with 60ms stagger.

---

## 3. Scroll Storytelling

### Home page narrative arc
| Scroll % | What appears | Motion treatment |
|---|---|---|
| **0%** | Full-bleed cover: name letters animate in left-to-right with 80ms stagger; pull quote fades in last | Letters: opacity 0→1 + y(40→0), cubic-bezier(0.16, 1, 0.3, 1), 1.2s total |
| **5–10%** | Tech marquee fades in below; scroll cue arrow gently bounces (2s loop) | Y-bounce ±4px |
| **15%** | "THE FEATURED WORK" reveal: Learnify poster slides up from below the fold, video starts auto-playing | translateY(80→0), 800ms |
| **25%** | Subtle parallax: pull quote drifts slightly slower than name as user scrolls past hero | parallax ratio 0.85 |
| **35%** | Section marker "§ 01 — THE BUILDER" pins at top for 600ms as user enters Builder preview | sticky position then release |
| **50%** | Word-by-word reveal of one manifesto sentence ("I ship complete AI products…") | each word opacity 0→1, 40ms stagger |
| **65%** | Pre-footer CTA "Ready to build something meaningful?" enters with magnetic hover on button | button warp toward cursor (max 8px translate) |
| **100%** | Footer with dim brass divider; scroll-to-top brass dot fades in bottom-right | — |

### Project page (Learnify) scroll arc
1. **Hero pins** for 1.2s while title and metric strip reveal in sequence (title first, then metric strip slides up)
2. **Demo video** enters viewport → autoplays muted; if user pauses scroll, sound prompt fades in
3. **Architecture section** uses **scroll-pinned animation**: as user scrolls, the diagram nodes draw themselves in sequence (User → React → FastAPI → Mongo → FAISS → LLMs), each with 200ms stagger. Connection lines draw with stroke-dasharray animation.
4. **Engineering Decisions** cards reveal one-by-one with horizontal slide-in from alternating sides (odd: left, even: right)
5. **Metric strip becomes sticky** at top of viewport once user passes hero; collapses to slim 32px bar
6. **Screenshots carousel** auto-advances every 3.5s but pauses on hover
7. **"Next: KeyLytics"** at bottom uses a **page-transition prefetch** — hovering it begins loading the next route

### Pinned sections (consistent across site)
- Section markers (`§ 01`, `§ 02`) pin briefly at top during transitions
- Project hero pins for hero-video reveal
- KeyLytics: stats sticker pins during "10 modules" reveal
- Learnify Architecture diagram pins during node draw-in
- Walmart Suite: split-diptych pins during MoodCart→AutoCart transition

### Transition effects (page-to-page)
- **Curtain reveal:** Brass-gold sheet wipes from bottom-left to top-right (250ms) covering the screen; new page underneath reveals as sheet exits top-right
- **Section anchor:** When navigating via nav, smooth scroll with `ease: [0.32, 0.72, 0, 1]` over 900ms
- **Project → Project (next button):** Horizontal slide (current slides left, next slides in from right)

---

## 4. Motion Design Plan

### Global motion tokens
| Token | Value | Used for |
|---|---|---|
| `ease-editorial` | `cubic-bezier(0.16, 1, 0.3, 1)` | Most reveals, scrolls |
| `ease-snap` | `cubic-bezier(0.32, 0.72, 0, 1)` | Nav transitions |
| `ease-magnetic` | `cubic-bezier(0.22, 1, 0.36, 1)` | Button hover warp |
| `dur-fast` | 200ms | Hover states |
| `dur-base` | 400ms | Standard reveals |
| `dur-slow` | 900ms | Page transitions |
| `dur-display` | 1200ms | Hero letter reveals |

### Hero animations
- **Letter-by-letter typography reveal** with mask-clip (letters appear as if pulled up from under a horizontal line). 80ms stagger, ease-editorial.
- **Subtle paper-grain texture** (~3% noise) layered over background — barely perceptible but adds warmth.
- **Cursor proximity glow** on "SHAFIA" — letters within 200px of cursor lift 2px and brighten brass-accent shadow.
- **Status pill pulse** (slow, 3s) — soft brass glow around "Available" indicator.

### Project card transitions
- **Idle:** Static poster, slight 1% opacity overlay
- **Hover (200ms):** Lift 4px, brass corner-tick appears, video begins muted-autoplay, poster shifts to 100% opacity, subtle scale 1.0 → 1.02
- **Click (300ms):** Card expands into full-screen layout (FLIP animation — the card's bounding box morphs into the project page hero), then the rest of the page content fades in beneath
- **Exit (back to grid):** Reverse FLIP

### Hover interactions (global)
- **Links:** Brass underline draws left-to-right (200ms ease-editorial)
- **Buttons:** Magnetic warp toward cursor (max 8px translate), shadow softens
- **Nav items:** Underline + ink darkens 10%
- **Skill dots:** Glow + constellation line highlights to neighbors
- **Timeline cards:** Lift 2px + brass left-border (4px) appears

### Loading states
- **Initial site load:** Brass horizontal line (centered) draws from left edge to right edge (1.2s) while logo type "SHAFIA" fades in — total ~1.5s. No spinning circles, no skeleton shimmer.
- **Page navigation:** Top-edge brass progress bar (Linear/Vercel style, 3px tall)
- **Ask Shafia AI streaming:** Tokens stream in with subtle cursor blink at end (• character pulses)
- **Image loading:** LQIP (low-quality image placeholder) blur-up via Next/Image
- **Video loading:** Poster frame visible, brass play triangle fades in if not autoplaying

### Page transitions
- **Default:** Cross-fade with subtle ink curtain (brass underline sweeps left to right at top)
- **Work → Project Detail:** FLIP animation (card morphs to hero)
- **Project → Project (next):** Horizontal slide with curtain
- **Anywhere → Ask Shafia:** Page dims to 80%, chat slides up from bottom 60% of viewport (or fullscreen on mobile)

### Reduced-motion respect
All animations gated by `prefers-reduced-motion: reduce` → reveals become instant fade-only (200ms), no parallax, no FLIPs.

---

## 5. Project Page Experience (per project)

### Element placement — universal map (top to bottom)

| Position | Element | Behavior |
|---|---|---|
| **Top-left** | `← Back to Work` link | Always visible |
| **Top-right** | `↗ GitHub` · `↗ Live Demo` · pager `01/05` | Sticky on scroll |
| **Hero #1** | Massive project title (220px) | Letter-stagger reveal |
| **Hero #2** | One-line poetic descriptor (40px italic) | Fades in 200ms after title |
| **Hero #3** | Inline icon strip: `↑ GitHub` `↗ Live` `↓ Demo` | Anchored under title |
| **Hero #4** | **Autoplay demo video** (16:9, muted, looped) | Full container width, sound prompt on hover |
| **Below hero** | **Metric strip** (4 large numbers) | Becomes sticky 32px bar after scroll past |
| **Section 1** | The Problem (long-form prose) | Drop cap on first letter |
| **Section 2** | The Solution (3-step flow diagram) | Animated arrows draw on scroll |
| **Section 3** | **Architecture diagram** (Mermaid → SVG) | Click-to-expand modal; nodes draw on scroll-pin |
| **Section 4** | Tech Stack (3-row table: Backend / Frontend / AI) | Static |
| **Section 5** | **Engineering Decisions** (numbered cards, 3–5 each project) | Alternating side reveals |
| **Section 6** | Features (4-column icon grid) | Stagger on viewport |
| **Section 7** | Performance Metrics (4–6 big numbers) | Counter-up animation 0 → value |
| **Section 8** | Screenshots carousel | Auto-advance, pause on hover |
| **Section 9** | Build Timeline (mini horizontal) | Static |
| **Section 10** | Lessons + Future Roadmap (two-column) | Static |
| **Bottom-bar** | `↗ GitHub` · `↗ Live Demo` · `Ask Shafia about this` · `Next →` | Always visible |

### Per-project differentiators

| Project | Unique element |
|---|---|
| **Learnify AI** | 5 engineering-decision cards (highest count); embedded interactive Mermaid; mini video clips of emotion detection demo in features section |
| **KeyLytics** | Interactive ROI scatter plot teaser; Gemini ↔ DataForSEO ↔ SerpAPI fallback chain visual |
| **Walmart Innovation Suite** | **Diptych hero** showing MoodCart UI (left) + AutoCart UI (right) side-by-side; toggle to compare flows |
| **AI Threat Detection** | **4-stream live grid demo** (mock or recorded) showing simultaneous detection; FPS counter overlay |
| **CineScope** | Cinematic red/black/gold accent overrides (subtle — keeps editorial frame but nods to the project's own theme) |

---

## 6. Ask Shafia AI Experience

### Conversation goals (in priority order)
1. **Close the loop** for time-poor recruiters (resume answers in 1 sentence + source)
2. **Drive to project pages** (every answer ends with a link suggestion)
3. **Reinforce positioning** ("AI Engineer", "ships products", quantified outcomes)
4. **Filter unfit roles** ("Is she open to data-entry roles?" → graceful redirect)

### Suggested prompt categories (6 chips, color-coded)

| Chip | Color tag | Example prompts |
|---|---|---|
| **Projects** | brass | "Tell me about Learnify AI" · "What's KeyLytics?" · "Walk me through her best RAG work" |
| **Skills** | ocean | "What tech does she know best?" · "Has she worked with vector databases?" · "How strong is her frontend?" |
| **Experience** | ink | "What did she build at CyArt?" · "What did she ship at Edunet?" · "Has she done internships?" |
| **Resume** | linen | "What's her CGPA?" · "When does she graduate?" · "Where is she based?" |
| **Hiring** | brass | "Why should we hire her?" · "Is she open to remote?" · "What roles is she targeting?" |
| **Leadership** | ocean | "Has she led teams?" · "What's GDG?" · "Tell me about IEEE work" |

### Conversation response framework
Every answer follows this structure:
```
[ Direct 1-2 sentence answer ]

[ Optional: 2-3 supporting bullets with metrics ]

Sources: [resume §section] [project name] [github]

→ Related: [link to project page] [link to lab] [link to GitHub]
```

### Example interactions (showing tone & format)

**Q:** "Why should we hire Shafia?"
**A:** *"Because she ships complete AI products — not just AI models. In the past 18 months, she's built and deployed 5 full-stack AI systems, including Learnify AI, a multimodal tutor with multi-LLM hot-swapping and WebSocket-based emotion detection. She combines real production engineering (FAISS↔Mongo sync, runtime LLM switching) with measurable product impact (3× RAG retrieval, 60% SEO time saved). She's hire-now ready for AI Engineer / Founding Engineer roles."*
Sources: `[resume §summary]` `[learnify-ai]` `[keylytics]`
→ Related: `View Learnify AI →` `Download résumé ↓`

**Q:** "What did she do at CyArt?"
**A:** *"At CyArt, Shafia worked as an AI Engineer Intern (Sep–Dec 2025) building and benchmarking production AI systems. She shipped three deliverables: a concurrent Python news pipeline processing 494+ headlines from 20 RSS sources (19 headlines/sec, 20% throughput gain), a real-time OpenCV surveillance system monitoring 4 streams at ~7.4 FPS, and voice-cloning benchmarks across XTTS-v2 and VALL-E-X achieving 0.965 speaker similarity."*
Sources: `[resume §experience]` `[lab/news-sentiment-pipeline]`
→ Related: `Engineering Lab →`

### UI/UX behaviors
- **Streaming responses** with token-by-token reveal (Perplexity-style)
- **Source pills** below each response — click to navigate
- **"Related" CTAs** below sources — always link to portfolio pages, not external
- **Reset conversation** button (top-right of chat)
- **Share conversation** button (generates URL with conversation hash)
- **Anti-jailbreak posture:** Off-topic queries redirected gracefully — *"That's outside what I can help with — but here's what Shafia has built…"*
- **Recruiter-mode awareness:** First message asks subtly: "Looking for AI Engineer roles? Founding Engineer? Full-stack? I can tailor what I show you." (optional, dismissible)
- **Floating orb access:** A persistent brass orb (40px) bottom-right on every page → opens 60% bottom-sheet chat without leaving current route

---

## 7. Navigation UX

### 7.1 Desktop Navigation

**Top nav bar (sticky, 64px tall, translucent backdrop-blur)**
```
SHAFIA          Work · Journey · Lab · Skills · Ask Shafia          ↓ Résumé  ⌘K
```
- **Logo:** `SHAFIA` in 18px Fraunces — clicks to `/`
- **Center links:** 5 primary routes, 14px JetBrains Mono uppercase, 24px gap, brass underline-draw on hover
- **Right side:** Brass-outlined "↓ Résumé" pill button + `⌘K` icon (opens command palette)
- **Scroll behavior:** First 80px scroll, nav background fades from transparent to `paper @ 92% opacity` + backdrop-blur(8px); border-bottom 1px brass appears
- **Active route indicator:** Subtle brass dot (4px) beneath active link

### 7.2 Mobile Navigation

**Top bar (compressed, 56px tall)**
- Left: `☰` icon (32px)
- Center: empty (or current section marker `§ 03` on inner pages)
- Right: `⌘` icon (search) + brass `Ask AI` pill (28px tall)

**Hamburger overlay (full-screen on tap)**
- Slides in from right with curtain effect (300ms)
- Editorial menu (Section numbers + names, large 32px Fraunces)
- Bottom strip with Résumé/GitHub/LinkedIn icons
- Tap outside or `×` (top-right) to close

### 7.3 Command Palette (`⌘K`)

**Triggered by:** `⌘K` (Mac), `Ctrl+K` (Windows), or palette icon click

**UI:** Centered modal, 560px wide, 480px tall, brass-bordered, paper bg
```
┌────────────────────────────────────────────┐
│  ⌘  Type a command or search…          esc │
├────────────────────────────────────────────┤
│  NAVIGATE                                  │
│    → The Builder           ⌘1              │
│    → Journey               ⌘2              │
│    → Product Archive       ⌘3              │
│    → Engineering Lab       ⌘4              │
│    → Community Impact      ⌘5              │
│    → Skills Ecosystem      ⌘6              │
│    → Ask Shafia AI         ⌘7              │
│    → Contact               ⌘8              │
│                                            │
│  PROJECTS                                  │
│    → Learnify AI                           │
│    → KeyLytics                             │
│    → Walmart Innovation Suite              │
│    → AI Threat Detection                   │
│    → CineScope                             │
│                                            │
│  ACTIONS                                   │
│    ↓ Download résumé                       │
│    ↗ Open LinkedIn                         │
│    ↗ Open GitHub                           │
│    📋 Copy email                            │
│    🌗 Toggle dark mode                      │
│    💬 Ask Shafia AI                         │
│                                            │
│  ─── ↑↓ navigate · ↵ select · esc close ─── │
└────────────────────────────────────────────┘
```
- **Fuzzy search** across page titles, project names, and skill keywords
- **Recent items** shown if no query
- **Keyboard-first design:** arrow nav, enter to confirm, esc to dismiss
- **No mouse required** — recruiters can blitz the entire portfolio via keyboard

### 7.4 Search Experience (within Ask Shafia)

Search and chat unified: typing in the command palette with a `?` prefix (e.g., `? what RAG work has she done?`) routes the query directly to Ask Shafia AI and opens the chat with that question pre-filled and submitted.

**Inline page search:** On project pages with long content, `⌘F` is augmented by a custom find that highlights matches across sections and shows section anchors in a side-rail.

### 7.5 Breadcrumb / Page-context strip
On project and lab sub-pages, a slim 24px strip below nav:
`Work / Learnify AI` — clickable, ink-on-paper, 12px JetBrains Mono

---

## 8. Visual Mockup Descriptions (the "feel" of each page)

### 8.1 `/` — The Cover
Imagine opening a hardback art book. The page is **cream paper** with a faint grain. Your name, **SHAFIA AMEERUDDIN**, doesn't sit on the page — it *occupies* it. The letters are massive, dark emerald-ink Fraunces, set tight enough that they almost touch but loose enough to breathe. Below, a hairline brass rule, then "AI ENGINEER · MUMBAI, IN" in tiny monospace caps — like a stamped subtitle on a magazine cover. To the lower right, a serif quote in italics whispers your differentiator. Three understated buttons rest at the bottom — no shadows, no gradients, just thin brass borders that feel like foil-stamping. The whole composition feels like the cover of *The Atlantic*, but for an AI engineer. Nothing moves until you do — then letters lift gently as your cursor passes near them.

### 8.2 `/the-builder` — The Essay
The screen feels like reading a long-form *New Yorker* piece. Massive serif headline anchors the top-right, a polaroid-style portrait pinned at a slight angle to its left. Below, a single column of generous prose with a brass drop cap "I" beginning the first paragraph. A pull quote floats in the right margin like a footnote, brass-underlined. As you scroll, four offset essay panels (Who/What/Why/How) reveal in a slight grid stagger — each one feels like a magazine sidebar. The page closes with a full-bleed manifesto on cream paper, in 60px italic serif, that feels like a quote etched in stone.

### 8.3 `/journey` — The Timeline
Picture a museum exhibition wall. Across the top, a slim horizontal time-rail with year markers and small brass dots — your visual mini-map. Below, milestone cards descend chronologically, each one feeling like a placard beside a museum artifact. The flagship moment (Learnify AI) has a brass ring around its card, like the centerpiece exhibit. As you scroll, dots on the mini-map illuminate to match your position. Some cards have small image thumbnails (event flyers, screenshots) — not loud, just contextual. The whole page rewards lingering.

### 8.4 `/work` — The Product Archive
This feels like the spread of a Pentagram-designed annual report. A two-column grid of project posters, each one large, confident, and quiet at rest. The posters are 16:9 with a single still frame and the project name in editorial serif. Hover any card and the still becomes a muted-autoplay video, the card lifts subtly, and a tiny brass corner-tick appears. The layout breathes — generous 48px gutters between cards, lots of paper around the edges. At the bottom, a small note in JetBrains Mono points to "side experiments on GitHub" — humble, confident.

### 8.5 `/work/learnify-ai` — The Flagship Case Study
This page feels like opening a Stripe Sessions case study book. The hero is dominated by your demo video — full-bleed, autoplay, no audio — bordered by hairline brass. Above it, the project name in 200px serif. Below, four metrics in massive numbers (3×, 40%, 12+, 0) — like a corporate annual report. As you scroll, the architecture diagram pins to the center of the viewport and *draws itself* — nodes appear one by one, lines connect, the whole topology revealed as if you're watching the system come alive. Engineering decision cards slide in from alternating sides like polaroids being placed on a desk. The page never feels busy because every section has enormous breathing room.

### 8.6 `/work/keylytics`
Same template, but the **accent feels more analytical** — Plotly-style chart teasers pepper the page. The architecture diagram has a "fallback chain" visual that animates a small data packet traveling from Gemini → DataForSEO → SerpAPI on hover. Metrics feel like they belong on a SaaS investor deck.

### 8.7 `/work/walmart-innovation-suite`
The hero is a **diptych**: MoodCart on the left (warm, emotional palette accent), AutoCart on the right (utility-focused). Below, a single unified narrative — both modules feel like sisters, not rivals. The architecture diagram shows two parallel pipelines merging into a Streamlit UI. Walmart blue and yellow are *hinted* through small accent dots, never overpowering your brass-and-ink palette.

### 8.8 `/work/ai-threat-detection`
This page feels **technical and serious** — the closest the portfolio gets to a security white-paper aesthetic. The hero is a recorded 4-stream grid demo with FPS overlays. The metric strip emphasizes throughput (FPS, streams, algorithms). Architecture diagrams use monospace labels. The whole page conveys: *production CV systems engineer*. Despite the topic, the editorial frame keeps it from feeling like a defense-contractor brochure.

### 8.9 `/work/cinescope`
The most **cinematic** of the project pages. While preserving the cream-paper editorial frame, subtle red/black accent notes appear in section dividers and metric strip borders — paying homage to the project's own theme without breaking the portfolio's identity. The hero video previews movie cards animating in. Feels like reading a film magazine.

### 8.10 `/lab` — Engineering Lab
This page feels like opening a workshop journal. Two large entries (CyArt and Edunet), each like a labeled folder containing sub-cards (the engineering deliverables). The framing language is unmistakably **builder, not researcher**: "shipped," "engineered," "benchmarked," "monitored." Each sub-card opens into an abbreviated case study. The visual rhythm is calmer than `/work` — more notebook, less showroom.

### 8.11 `/community` — The Network
The centerpiece is a **D3 force-directed graph** floating on cream paper. Your node sits at the center, ringed by org nodes (GDG, IEEE, Placement Cell), which in turn branch out to event/impact nodes. The graph is alive — nodes gently drift even at rest. Click any node to reveal a detail panel sliding in from the right. Below the graph, a small strip of impact stats (65%, 40%, 30%, 700+) in massive editorial numbers. The page feels like a leadership x-ray.

### 8.12 `/skills` — The Ecosystem
Picture a star chart. Nine constellation clusters arranged in an offset grid, each one a small map of dots and lines. Brand-relevant labels float beside dot clusters. There are no progress bars, no percentages — just relationships. Hover any dot and constellation lines glow brass, with a tooltip pointing to where you've used that skill ("Used in Learnify AI"). The page feels intellectually generous — it shows breadth without bragging.

### 8.13 `/ask-shafia` — The Conversation
The page strips down to essentials — a clean conversational interface that feels like a hybrid of Perplexity and Notion AI. Suggested prompt chips at the top in 6 color-coded categories. As you type or select a prompt, the response streams in token-by-token with source pills appearing as small footnotes. Related links sit below each response as brass-outlined chips. The chat header is minimal — just "Ask Shafia AI" and a quiet "Knowledge: resume · projects · experience · LinkedIn" subtitle. It's not flashy. It's useful.

### 8.14 `/contact` — The Closing Spread
Imagine the inside back cover of a hardback book. The headline "LET'S BUILD SOMETHING MEANINGFUL." takes up most of the page — 220px serif, line-by-line reveal that feels like watching a sentence being inked onto paper. Below, a 2×2 grid of contact tiles — each one a small typographic poster (Email · LinkedIn · GitHub · Résumé). Beneath, a status strip in JetBrains Mono confirms availability, location, and replies-within. The footer is whispered. The whole page is an invitation, not an ask.

---

## ✅ Phase 2 Complete

**Awaiting your sign-off on:**

1. **Wireframe approach** — does the editorial/magazine framing across all 14 routes feel right?
2. **Mobile decisions** — community page collapsing graph to a tree, skills becoming swipe carousel, project sticky bottom action bar — any concerns?
3. **Motion language** — comfortable with letter-by-letter hero reveals, FLIP card-to-page transitions, and scroll-pinned architecture diagram draw-ins?
4. **Ask Shafia AI tone** — does the suggested response framework (1-2 sentence answer + sources + related CTAs) match how you'd like recruiters to be handled?
5. **Project-page differentiators** — agree with the Walmart diptych, AI Threat Detection's 4-stream grid hero, and CineScope's subtle red/gold accents?
6. **Command palette** — keep the `⌘K` recruiter-blitz interface as a feature, or simplify?
