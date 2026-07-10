<h1 align="center">buildwithshafia.dev</h1>

<p align="center">
  <strong>Editorial-magazine portfolio for <a href="https://github.com/Shafia-01">Shafia Ameeruddin</a> - AI Engineer</strong>
</p>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-15.0-black?style=flat-square&logo=next.js" alt="Next.js"></a>
  <a href="https://typescriptlang.org"><img src="https://img.shields.io/badge/TypeScript-5.6-blue?style=flat-square&logo=typescript" alt="TypeScript"></a>
  <a href="https://tailwindcss.com"><img src="https://img.shields.io/badge/Tailwind_CSS-3.4%2F4.0--Beta-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS"></a>
  <a href="https://framer.com/motion"><img src="https://img.shields.io/badge/Framer_Motion-11.11-black?style=flat-square" alt="Framer Motion"></a>
  <a href="https://vercel.com"><img src="https://img.shields.io/badge/Deployment-Vercel-black?style=flat-square&logo=vercel" alt="Vercel"></a>
</p>

<div align="center">
  <h3>🔗 <a href="https://buildwithshafia-dev.vercel.app/">Building intelligent products from idea to production.</a></h3>
  <p>
    <i>A personal editorial-magazine style portfolio of <a href="https://github.com/Shafia-01">Shafia Ameeruddin</a>, an AI Engineer specializing in shipping complete, production-ready AI products and multi-agent systems. The platform showcases a range of advanced projects spanning retrieval-augmented generation (RAG), autonomous LangGraph workflows, transfer learning, and personalized recommendation systems. Designed with premium, modern web aesthetics, it features fluid micro-animations powered by Framer Motion, responsive Tailwind layouts, dynamic dark/light themes, and an immersive user experience.</i>
  </p>
</div>

---

## Featured Projects Showcased

The portfolio features deep dives and interactive highlights for several engineering projects:

### 1. **Learnify AI**
*   **Tagline:** Multimodal AI tutor with emotion-aware adaptive learning and RAG-powered document chat.
*   **Core Tech:** LangChain, FAISS, DeepFace, Whisper, FastAPI, MongoDB, React, D3.js.
*   **Key Feature:** Streams base64 webcam frames over WebSockets to detect student confusion/fatigue and dynamically adjusts RAG prompt complexity or shifts game modes.

### 2. **Stratix**
*   **Tagline:** Autonomous multi-agent market intelligence platform.
*   **Core Tech:** LangGraph, Gemini (fallback chain), SQLite + WAL, APScheduler, Streamlit, Plotly.
*   **Key Feature:** A stateful 7-node LangGraph orchestration pipeline with deterministic quality gates, adversarial LLM critics, and Human-in-the-Loop checkpoints for planning and report approvals.

### 3. **CartVerse**
*   **Tagline:** Mood-aware and habit-driven shopping assistant for Walmart product discovery.
*   **Core Tech:** DistilBERT emotion classifier, TextBlob, SerpAPI (Walmart engine), MySQL, Streamlit.
*   **Key Feature:** Dual-pipeline system translating unstructured natural language mood descriptions into demographic-adjusted product recommendations alongside automated habit-based refills.

### 4. **MediScan**
*   **Tagline:** Medical vs. non-medical image classifier built on fine-tuned ResNet18.
*   **Core Tech:** PyTorch, ResNet18, PyMuPDF, Streamlit.
*   **Key Feature:** staged transfer learning pipeline with softmax confidence-gating to triage clinical scans from mixed-media ingestion streams.

---

## Repository Structure

The portfolio project is organized as a modern Next.js project using the App Router:

```text
├── app/
│   ├── community/       # Community involvement page
│   ├── contact/         # Interactive contact workspace
│   ├── journey/         # Editorial timeline of career history
│   ├── lab/             # Experimental AI prototypes and showcases
│   ├── skills/          # AI and software engineering capability matrices
│   ├── the-builder/     # Narrative profile/about section
│   ├── work/            # Case studies for major featured projects
│   ├── globals.css      # Core Design System, font configurations, and Tailwind styling
│   └── layout.tsx       # Root layout, theme providers, navigation header/footer
├── components/
│   ├── command/         # Command-palette search/navigation
│   ├── layout/          # Layout containers and shell components
│   ├── motion/          # Shared Framer Motion wraps for page transitions
│   ├── providers/       # Context providers (next-themes, transitions)
│   ├── sections/        # Homepage section components (HeroCover, FeaturedWork, etc.)
│   └── typography/      # Curated typographical elements
├── content/             # Markdown and JSON data definitions for page routes
├── docs/                # Project documentation assets
└── public/              # Static media, icons, and assets
```

---

## Local Development

Ensure you have [Node.js](https://nodejs.org/) installed.

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Shafia01/buildwithshafia.dev.git
    cd buildwithshafia.dev
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Deployment & Hosting

The site is configured for continuous deployment on **Vercel** connected directly to the repository's `main` branch.

*   **Framework Preset:** Next.js
*   **Build Command:** `next build`
*   **Output Directory:** `.next`

