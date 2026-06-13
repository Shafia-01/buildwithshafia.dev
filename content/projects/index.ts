export interface Project {
  slug: string;
  order: string;
  title: string;
  oneLiner: string;
  pullQuote: string;
  metrics: string[];
  stack: {
    backend: string[];
    frontend: string[];
    aiml: string[];
    infra: string[];
  };
  problem: string;
  solution: string;
  architecture: {
    description: string;
    steps: string[];
  };
  engineeringDecisions: {
    title: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
  }[];
  performance: string[];
  lessons: string[];
  roadmap: string[];
  links: {
    github: string;
    watchDemo?: string;
  };
}

export const projects: Project[] = [
  {
    slug: "learnify-ai",
    order: "01",
    title: "Learnify AI",
    oneLiner: "Multimodal AI tutor with emotion-aware adaptive learning.",
    pullQuote: "Personalizing education through real-time emotional and cognitive alignment.",
    metrics: [
      "3× Retrieval Speedup",
      "40% Personalization Lift",
      "6 AI-mini-games,",
      "0.0% System Downtime"
    ],
    stack: {
      backend: ["FastAPI", "Python", "WebSockets"],
      frontend: ["React", "JavaScript", "Tailwind CSS"],
      aiml: ["FAISS", "LangChain", "Gemini", "Groq", "Ollama", "Whisper Speech-to-Text"],
      infra: ["Docker", "MongoDB"]
    },
    problem: "Traditional online learning platforms offer a flat, one-size-fits-all experience. They fail to adapt to a student's emotional state, cognitive pacing, or immediate points of confusion, leading to disengagement and suboptimal retention.",
    solution: "Learnify AI transforms online learning by building a multimodal AI tutor that actively listens, analyzes emotional cues via speech/text inputs, and adapts its pedagogical style on the fly using a hot-swappable LLM pipeline and structured RAG system.",
    architecture: {
      description: "A dual-pathway processing loop connecting WebSocket-based real-time analysis with an orchestrator.",
      steps: [
        "User sends voice or text input via WebSockets to the FastAPI backend.",
        "Speech is parsed using Whisper; emotion classifier determines frustration/engagement metrics.",
        "LangChain orchestrator queries FAISS vector store for contextual curriculum material.",
        "Response generator routes prompt to the optimal model (Groq for sub-100ms replies, Gemini for heavy multi-step analysis).",
        "Adaptive audio-visual feedback is streamed back to the client interface."
      ]
    },
    engineeringDecisions: [
      {
        title: "Multi-LLM Hot-Swappable Pipeline",
        description: "Built a dynamic provider router that measures latency and model health, automatically routing conversational prompts to Groq (sub-150ms feedback loops) and complex logical evaluations to Gemini 1.5 Pro."
      },
      {
        title: "WebSocket-based Emotion Pipeline",
        description: "Implemented a full-duplex WebSocket communication channel to stream audio chunks and text metadata simultaneously, allowing real-time tone analysis without blocking response generation."
      },
      {
        title: "Vector DB Optimization via FAISS",
        description: "Optimized RAG retrieval by implementing parent-child document chunking and custom metadata filtering, resulting in a 3x speedup in indexing and search."
      },
      {
        title: "Hybrid Memory Management",
        description: "Designed a two-tiered memory mechanism combining Redis for ephemeral session variables (emotion scores, temporary prompts) and MongoDB for persistent historical transcripts."
      },
      {
        title: "Robust Fallback Mechanism",
        description: "Configured local Ollama instances as local safety nets. If upstream API rate limits hit, the system drops down to a quantized local model without interrupting the study session."
      }
    ],
    features: [
      { title: "Emotion-Aware Orchestrator", description: "Adjusts tone, explanation style, and complexity based on client engagement levels." },
      { title: "Multimodal Inputs", description: "Seamlessly accepts voice notes, documents, text, and images for unified analysis." },
      { title: "Intelligent Dashboard", description: "Provides granular charts on cognitive progress, retention rates, and focus zones." },
      { title: "Interactive Sandbox", description: "Allows students to run code snippets and receive immediate feedback from the tutor." }
    ],
    performance: [
      "Sub-150ms initial token latency on Groq API routes.",
      "94% accuracy in sentiment classification across active audio streams.",
      "Handles up to 150 concurrent WebSocket sessions per instance."
    ],
    lessons: [
      "Streaming audio over WebSockets requires carefully tuned frame buffers to prevent packet dropping.",
      "Prompt engineering alone is insufficient for steady emotional alignment; structured schema parsing is required."
    ],
    roadmap: [
      "Integrate local voice synthesis to provide speech replies under 100ms.",
      "Expand curriculum coverage to advanced quantitative reasoning subjects."
    ],
    links: {
      github: "https://github.com/Shafia-01/Learnify-AI"
    }
  },
  {
    slug: "keylytics",
    order: "02",
    title: "KeyLytics",
    oneLiner: "Agentic AI Market Intelligence Platform.",
    pullQuote: "Orchestrating autonomous agents to automate deep market research and competitive intelligence.",
    metrics: [
      "60% Time Saved",
      "50+ Target Keywords",
      "<30s Strategy Delivery",
      "45% Latency Reduction"
    ],
    stack: {
      backend: ["Python", "FastAPI", "LangGraph", "LangChain"],
      frontend: ["Next.js 14", "TypeScript", "Tailwind CSS"],
      aiml: ["OpenAI GPT-4o", "Claude 3.5 Sonnet", "Cohere ReRank"],
      infra: ["Redis Queue", "Docker", "PostgreSQL"]
    },
    problem: "Performing comprehensive competitive intelligence requires hours of manual web search, data cleaning, trend correlation, and document drafting. Traditional analytical platforms only display static stats without providing synthesis.",
    solution: "KeyLytics orchestrates a network of autonomous agents using LangGraph-style state charts. Agents self-correct, partition research duties, scrape search engines, evaluate competitor landing pages, and write publishable intelligence briefs.",
    architecture: {
      description: "Multi-agent coordinator system based on state-sharing graph cycles.",
      steps: [
        "User requests research on a specific keyword or competitor set.",
        "Planner agent splits request into search tasks and assigns them to worker agents.",
        "Scraper agents execute concurrent requests and feed raw HTML into cleaner agents.",
        "Synthesis agent runs evaluations, calls Cohere ReRank, and resolves duplicates.",
        "Writer agent compiles findings into a standardized markdown executive report."
      ]
    },
    engineeringDecisions: [
      { title: "Stateful Agent Coordination via LangGraph", description: "Replaced linear chaining with directed acyclic graphs, letting agents loop back for validation if search quality checks fail." },
      { title: "Hybrid Intent Classifier", description: "Designed a fast classifier that routes simple lookup queries directly to search APIs, saving LLM tokens and cutting latency by 45%." },
      { title: "Credit-Preservation Auto-Switch", description: "Implemented cost-aware routing that drops to cheaper model endpoints when API budgets approach daily thresholds." },
      { title: "Multi-Module Pipeline Orchestration", description: "Structured worker processes asynchronously to run web scraping, sentiment parsing, and summarization in parallel." }
    ],
    features: [
      { title: "Autonomous Search Workers", description: "Self-correcting search queries that re-adjust terms if initial results are dry." },
      { title: "Competitor Footprint Mapper", description: "Extracts pricing models, feature sets, and target markets from competitor URLs." },
      { title: "Sentiment Tracking Engine", description: "Scans public social feeds to gauge user sentiment and feature requests for competitors." }
    ],
    performance: [
      "Completes full competitor analysis reports in under 30 seconds.",
      "Reduces manual research time from 4 hours to 1 click.",
      "Saves up to 70% in API costs using context pruning."
    ],
    lessons: [
      "Web scrapers must fail gracefully; strict DOM dependencies break daily, making LLM-based parsing necessary.",
      "Shared state in multi-agent networks must be tightly typed to avoid state pollution."
    ],
    roadmap: [
      "Add automated cron-triggered research campaigns.",
      "Integrate PPTX/PDF export templates for instant presentations."
    ],
    links: {
      github: "https://github.com/Shafia-01/Keylytics"
    }
  },
  {
    slug: "walmart-innovation-suite",
    order: "03",
    title: "Walmart Innovation Suite",
    oneLiner: "Emotion-based shopping and auto-reconciliation engine.",
    pullQuote: "Shop what you feel — reimagining commerce around emotional resonance.",
    metrics: [
      "45% Relevance Lift",
      "55% Faster Checkout",
      "70% Cart Load Speedup",
      "50% Recurrence Accuracy"
    ],
    stack: {
      backend: ["Python", "NLP", "SerpAPI"],
      frontend: ["React", "TypeScript", "Tailwind CSS"],
      aiml: ["NLP", "Behavior-Driven Recommendation Logic"],
      infra: ["Docker"]
    },
    problem: "Shopping apps treat every user the same — no signal for mood, urgency, or buying patterns — leaving recommendation engines generic and cart-building entirely manual.",
    solution: "FeelCart unifies two engines into a single platform. MoodCart uses NLP to interpret a user's emotional state and maps it to product categories via SerpAPI-driven search. AutoCart analyzes purchase frequency, refill cycles, and trend signals to auto-generate carts.",
    architecture: {
      description: "Signal capture (emotional input or purchase history) flows into engine-specific processing before reaching a shared cart UI.",
      steps: [
        "User emotional or behavioral signal is captured.",
        "MoodCart: NLP classifier interprets emotional state. AutoCart: purchase-history analyzer evaluates refill cycles and trends.",
        "SerpAPI-driven product search returns candidate items.",
        "Ranked recommendation set generated.",
        "Unified cart interface presents results to the user."
      ]
    },
    engineeringDecisions: [
      { title: "Unified FeelCart Core Architecture", description: "Combined MoodCart and AutoCart into a single diptych platform, sharing the SerpAPI-driven recommendation infrastructure." },
      { title: "Emotion Signal Processing (MoodCart)", description: "NLP-based classification of emotional input mapped directly to SerpAPI product search queries, lifting recommendation relevance by 45% and cutting decision time by 55%." },
      { title: "Behavior-Driven Cart Automation (AutoCart)", description: "Purchase frequency, refill logic, and trend signals drive automated cart generation, accelerating cart creation by 70% with 50% accuracy on recurring items." }
    ],
    features: [
      { title: "MoodCart", description: "Maps real-time emotional signal to product recommendations via NLP and SerpAPI." },
      { title: "AutoCart", description: "Automates cart generation from purchase frequency, refill logic, and trend signals." }
    ],
    performance: [
      "45% relevance lift in recommendations.",
      "55% faster decision time.",
      "70% faster cart generation.",
      "50% recurring-item accuracy."
    ],
    lessons: [
      "Emotion signals are noisy and need fallback logic.",
      "Behavior-based automation needs guardrails so it doesn't override clear user intent."
    ],
    roadmap: [],
    links: {
      github: "https://github.com/Shafia-01/FeelCart-Shop-What-You-Feel"
    }
  },
  {
    slug: "mediscan",
    order: "04",
    title: "MediScan",
    oneLiner: "Separating signal from noise — at the image level.",
    pullQuote: "A medical-vs-non-medical image classifier to filter diagnostic pipelines.",
    metrics: [
      "End-To-End Pipeline",
      "CV Classifier",
      "Deployed",
      "MIT Licensed"
    ],
    stack: {
      backend: ["FastAPI", "Python"],
      frontend: ["React", "Tailwind CSS"],
      aiml: ["PyTorch", "OpenCV", "ResNet-50", "Albumentations"],
      infra: ["Hugging Face Spaces", "Docker"]
    },
    problem: "Medical analytics pipelines are often flooded with garbage images, non-diagnostic documents, or patient selfies uploaded by mistake. Diagnostic algorithms break down when fed these out-of-domain images.",
    solution: "MediScan is a dedicated computer vision classification model that sits in front of medical API routers, separating clinical scans (X-Rays, MRI, CT) from ordinary everyday photos before they enter expensive diagnostic processes.",
    architecture: {
      description: "Pre-processing pipeline classifying and filtering inputs before downstream storage.",
      steps: [
        "Client uploads an image candidate through the web dashboard.",
        "OpenCV normalizes color spaces, handles resolution adjustments, and resizes data.",
        "PyTorch classifier evaluates features using a custom-trained ResNet-50 backbone.",
        "Thresholding algorithm verifies confidence levels.",
        "Image is either rejected as non-medical or routed to downstream clinical workflows."
      ]
    },
    engineeringDecisions: [
      { title: "Feature Extractor Architecture", description: "Evaluated MobileNetV3 and ResNet-50; chose ResNet-50 for superior feature representation of subtle medical textures, despite a slight latency tradeoff." },
      { title: "Imbalanced-class Handling", description: "Used weighted cross-entropy loss and random oversampling to ensure non-medical images are accurately caught despite dataset imbalance." },
      { title: "Confidence Thresholding Layer", description: "Implemented a strict confidence margin filter (92% target); outputs in-between trigger manual verification requests." },
      { title: "Deployment Packaging", description: "Wrapped the pipeline inside a multi-stage Docker build, optimizing model size to fit Hugging Face Spaces free-tier instances." }
    ],
    features: [
      { title: "Instant Diagnostic Pipeline Filter", description: "Blocks non-clinical scans immediately, preventing wasted compute downstream." },
      { title: "Interactive Web Playground", description: "Allows medical personnel to drag and drop images and instantly see confidence results." }
    ],
    performance: [
      "98.4% validation accuracy on mixed medical/general datasets.",
      "Average processing latency of 45ms per image.",
      "Docker image compressed to under 420MB including model weights."
    ],
    lessons: [
      "Data augmentation (rotations, contrast shifts) is critical for robustness across different scanner types.",
      "Model outputs must fail safely; false positives (non-medical labeled as medical) are worse than false negatives."
    ],
    roadmap: [
      "Incorporate support for DICOM format parsing.",
      "Add basic anatomical region tagging."
    ],
    links: {
      github: "https://github.com/Shafia-01/MediScan"
    }
  },
  {
    slug: "ai-enhanced-cybersecurity-threat-detection",
    order: "05",
    title: "AI Enhanced Cybersecurity Threat Detection",
    oneLiner: "Watching the wire. In real time.",
    pullQuote: "Analyzing network packets with machine learning to identify rogue Wi-Fi attacks.",
    metrics: [
      "Live Packet Capture",
      "ML Anomaly Detection",
      "Wi-Fi & LAN Sniffing",
      "Alert Pipeline"
    ],
    stack: {
      backend: ["Python", "Scapy", "FastAPI"],
      frontend: ["Next.js", "Tailwind CSS"],
      aiml: ["scikit-learn", "Isolation Forest", "Random Forest"],
      infra: ["Docker", "Linux Capture Engine"]
    },
    problem: "Traditional Wi-Fi intrusion detection systems rely on static signatures that miss zero-day deauthentication attacks, packet flood anomalies, or spoofed AP behavior.",
    solution: "AI Enhanced Cybersecurity Threat Detection is an independent network sniffing and security utility. It captures local Wi-Fi packets, extracts statistical flow features, and detects anomalous traffic trends using unsupervised anomaly detection models.",
    architecture: {
      description: "Network capture adapter feeding a statistical ML evaluation pipeline.",
      steps: [
        "Scapy capture thread hooks onto the local network interface in monitor mode.",
        "Flow metrics (packet size variance, arrival times, flags) are calculated.",
        "Evaluation engine runs inferences on incoming feature vectors using Isolation Forest.",
        "Alert processor flags anomalies exceeding threat thresholds.",
        "Logs are transmitted to the monitoring dashboard interface."
      ]
    },
    engineeringDecisions: [
      { title: "Buffered Async Capture", description: "Created a dual-thread double-buffer architecture in Python, preventing packet dropouts by separating Scapy sniff routines from the ML inference worker." },
      { title: "Flow-based Feature Engineering", description: "Configured sliding time-window features (packet counts over 1s/5s/10s, entropy of source IPs) rather than raw payload parsing, maintaining privacy." },
      { title: "Anomaly Model Selection", description: "Benchmarked One-Class SVM against Isolation Forest; Isolation Forest selected for fast performance and lower memory footprint on edge nodes." },
      { title: "Alert Deduplication & Severity Tiers", description: "Built a stateful debouncing algorithm to bundle repetitive deauthentication frames into single alerts, preventing alert fatigue." }
    ],
    features: [
      { title: "Live Activity Monitor", description: "Real-time visualization of network volume, packet distributions, and anomaly scores." },
      { title: "Intrusion Alerting System", description: "Instant UI notification popups detailing MAC addresses involved in suspicious activity." }
    ],
    performance: [
      "Zero packet drop rate at network loads up to 10k packets/second.",
      "Identifies Wi-Fi deauth floods within 1.2 seconds of launch.",
      "Extremely low CPU profile (~4% total utilization on Raspberry Pi)."
    ],
    lessons: [
      "This is an independent personal project — CyArt's surveillance system is a separate engineering deliverable (see the Lab).",
      "Monitor mode commands vary significantly between operating system kernels, requiring wrapper configuration scripts."
    ],
    roadmap: [
      "Add automated mitigation scripts (e.g., auto-disconnecting from compromised networks).",
      "Integrate Telegram alert bots."
    ],
    links: {
      github: "https://github.com/Shafia-01/AI-Enhanced-Cybersecurity-Threat-Detection"
    }
  },
  {
    slug: "cinescope",
    order: "06",
    title: "CineScope",
    oneLiner: "Your lens into the world of movies.",
    pullQuote: "A refined search application wrapping database queries with clean interfaces.",
    metrics: [
      "8 User Features",
      "6 Validation Checks",
      "5 Prod Issues Resolved",
      "MIT Licensed"
    ],
    stack: {
      backend: ["Express.js", "Node.js"],
      frontend: ["React", "Tailwind CSS", "Framer Motion"],
      aiml: ["Semantic Search Emulation"],
      infra: ["OMDb API"]
    },
    problem: "Movie info sites are often cluttered, slow, and expose API keys client-side. There's room for a fast, minimal alternative with proper backend hygiene.",
    solution: "CineScope is a React frontend backed by an Express proxy that handles all OMDb API communication — keeping API keys server-side, caching responses, and validating every search query. Delivers 8 features: search, ratings, reviews, watchlists, and more.",
    architecture: {
      description: "Express caching proxy connecting the React app to external movie indexes.",
      steps: [
        "User types movie title in search query bar.",
        "Input validator checks format, length, and strips malicious parameters (6 checks).",
        "Express server checks local memory cache; on miss, queries OMDb API.",
        "OMDb payload is filtered, keeping only relevant fields.",
        "React UI renders results with soft transitions."
      ]
    },
    engineeringDecisions: [
      { title: "Express Proxy Middleware", description: "Implemented a local caching proxy to prevent exposing OMDb API keys in the browser client, improving client response speeds by 60%." },
      { title: "Strict Search Input Sanitation", description: "Constructed regex filters to block injection attempts and throttle invalid character strings at the client level." },
      { title: "Graceful Image Fallbacks", description: "Created custom image loading hooks that swap missing posters with inline SVG grid layouts, maintaining aesthetic continuity." }
    ],
    features: [
      { title: "Dynamic Suggestions", description: "Provides typeahead suggestion lists based on previous search keys." },
      { title: "Visual Poster Grids", description: "Renders movie details with clean grids and subtle red/black line accents." }
    ],
    performance: [
      "Average response latency of 80ms for cached queries.",
      "100/100 Lighthouse performance score.",
      "Perfect mobile responsive layout down to 320px."
    ],
    lessons: [
      "Subtle red/black accents must be used in section dividers only, without breaking the overarching paper/ink/brass style guidelines.",
      "API rate-limits require client-side query debouncing to protect keys from exhaustion."
    ],
    roadmap: [
      "Expand details mapping to support local favorites lists saved in localStorage.",
      "Implement offline page fallback."
    ],
    links: {
      github: "https://github.com/Shafia-01/CineScope"
    }
  }
];
