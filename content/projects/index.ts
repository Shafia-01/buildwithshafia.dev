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
    steps: {
      title: string;
      description: string;
    }[];
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
    oneLiner: "Multimodal AI tutor with emotion-aware adaptive learning and RAG-powered document chat.",
    pullQuote: "Personalizing academic study using real-time affective computing, retrieval-augmented generation, and gamified quizzing.",
    metrics: [
      "3x faster contextual retrieval",
      "3 swappable LLMs",
      "5 difficulty tiers",
      "6 AI-mini-games",
      "40% personalization improvement"
    ],
    stack: {
      backend: [
        "FastAPI",
        "Pydantic / pydantic-settings",
        "Motor (async MongoDB driver)",
        "SlowAPI (rate limiting)",
        "python-jose (JWT)",
        "bcrypt (password hashing)",
        "pdfplumber",
        "python-pptx",
        "httpx",
        "anyio"
      ],
      frontend: [
        "React 19",
        "Vite 8",
        "Tailwind CSS 4",
        "D3.js (force-directed knowledge graph)",
        "Recharts (analytics charts)",
        "Axios (HTTP client with Bearer interceptor)",
        "React Router v7",
        "react-webcam"
      ],
      aiml: [
        "LangChain (chains, prompts, output parsers)",
        "all-MiniLM-L6-v2 (sentence-transformers)",
        "FAISS (faiss-cpu, IndexFlatL2)",
        "DeepFace (facial emotion analysis)",
        "OpenCV (frame decoding)",
        "Whisper (local ASR, openai-whisper)",
        "gTTS (multilingual TTS)",
        "NLTK (noun-phrase extraction)",
        "NetworkX (knowledge graph)"
      ],
      infra: [
        "MongoDB (Motor async, 11 collections)",
        "FAISS IndexFlatL2 (in-process vector store)",
        "JSON sidecar (chunk_id mapping)",
        "Docker (multi-stage build)",
        "Hugging Face Spaces (Docker SDK)",
        "GitHub Actions (CI/CD deploy workflow)",
        "Uvicorn"
      ]
    },
    problem: "Static learning platforms deliver identical content regardless of a student's current knowledge level, emotional state, or uploaded materials. Generic AI chat wrappers lack source grounding, producing hallucinated answers without citations. Deploying ML inference—speech transcription, facial emotion detection, vector search—across cloud services introduces privacy risk, latency, and API cost. Most projects also ignore the cold-start problem: ephemeral container hosts lose in-memory vector indexes on restart, breaking retrieval entirely.",
    solution: "Learnify AI ingests PDFs, PPTs, and text files into a local FAISS vector store, answers questions using a user-scoped RAG pipeline with level-adaptive prompts, and cites exact source pages. DeepFace runs asynchronously over WebSocket to detect confusion or fatigue and trigger interventions. Whisper handles on-device speech transcription. A gamification layer tracks XP, streaks, and badges. On container restart, the system auto-rebuilds the FAISS index from MongoDB, ensuring continuity across ephemeral deployments.",
    architecture: {
      description: "Sequential ingestion-to-retrieval pipeline with async emotion loop and runtime LLM hot-swapping.",
      steps: [
        {
          title: "Document Ingestion",
          description: "Uploaded files are parsed with pdfplumber, python-pptx, or paragraph splitting, then chunked to 500 characters with 50-character overlap using RecursiveCharacterTextSplitter."
        },
        {
          title: "Embedding and Indexing",
          description: "all-MiniLM-L6-v2 generates 384-dimensional vectors locally. Embeddings are added to a FAISS IndexFlatL2; a JSON sidecar maps integer positions to chunk_id strings."
        },
        {
          title: "RAG Query Execution",
          description: "The query is embedded, FAISS returns 50 candidates, MongoDB filters by user_id, results are reranked by distance, and the top 5 chunks are injected into a level-specific prompt."
        },
        {
          title: "LLM Generation",
          description: "LangChain chains route to Gemini, Groq, or local Ollama based on runtime_config. Responses are parsed with regex to extract clean answer text and structured citation objects."
        },
        {
          title: "Emotion Intervention Loop",
          description: "Browser sends base64 webcam frames over WebSocket every two seconds. DeepFace runs in an asyncio thread; a 5-frame majority-vote deque smooths noisy predictions before dispatching interventions."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "JSON Sidecar for FAISS Deletion",
        description: "FAISS IndexFlatL2 has no native string ID support. A parallel JSON sidecar maps sequential integer indices to chunk_id strings, enabling targeted remove_ids() calls without full index rebuilds. The tradeoff is a second file write on every insert or delete."
      },
      {
        title: "Auto-Rebuild on Ephemeral Hosts",
        description: "Hugging Face Spaces discard local files on restart. sync_faiss_with_db() detects a missing index at startup and regenerates embeddings from MongoDB chunks, recovering the RAG pipeline automatically at the cost of startup latency on cold containers."
      },
      {
        title: "Privacy Mode Hard Block",
        description: "When privacy mode is active, get_llm() raises RuntimeError rather than silently falling back to cloud APIs. This prevents data leakage at the cost of availability when Ollama is unreachable, a deliberate tradeoff chosen for privacy guarantees."
      },
      {
        title: "Decoupled Emotion Analysis Thread",
        description: "DeepFace inference takes up to 1.5 seconds per frame. Running it inside asyncio.to_thread() decouples it from the WebSocket receive loop, keeping the connection alive and the video preview smooth without blocking the event loop."
      },
      {
        title: "User-Scoped Vector Retrieval",
        description: "A shared FAISS index stores all users' chunks. Post-retrieval filtering in MongoDB by user_id enforces data isolation. Fetching 50 candidates rather than 5 compensates for filtered-out records from other users."
      }
    ],
    features: [
      {
        title: "Level-Adaptive RAG Responses",
        description: "Three distinct PromptTemplates (beginner, intermediate, advanced) adjust explanation depth and vocabulary. The active template is selected per request based on stored user level."
      },
      {
        title: "Real-Time Emotion Interventions",
        description: "WebSocket streams webcam frames to DeepFace. Detected confusion triggers a quiz difficulty reduction and simplification mode; fatigue triggers a break recommendation; frustration triggers an analogy-based explanation."
      },
      {
        title: "Runtime LLM Hot-Swapping",
        description: "A mutable runtime_config singleton allows switching between Gemini, Groq, and Ollama mid-session via a POST endpoint, persisting the preference to MongoDB without restarting the server."
      },
      {
        title: "Gamified Content-Driven Mini-Games",
        description: "Six games (Snake Quiz, Falling Quiz, Memory Match, Word Scramble, Flashcard Flip, Tic-Tac-Toe) generate questions and vocabulary by sampling the user's own uploaded document chunks through the LLM."
      }
    ],
    performance: [
      "Sub-2-second Groq LLaMA inference path for RAG responses on typical chunk sets",
      "FAISS IndexFlatL2 exact nearest-neighbor search across thousands of chunks without a separate vector database process",
      "On-device Whisper base model transcription with no audio data sent to external APIs",
      "Emotion smoothing deque reduces false-positive intervention triggers across 5-frame majority vote window"
    ],
    lessons: [
      "Ephemeral container storage breaks stateful ML indexes silently; startup validation and auto-rebuild are necessary, not optional, for any vector store deployed on serverless infrastructure.",
      "Decoupling CPU-bound ML inference from the async event loop with asyncio.to_thread is straightforward but requires careful state management to avoid race conditions when multiple WebSocket sessions share session buffers."
    ],
    roadmap: [
      "Migrate FAISS IndexFlatL2 to IndexIVFFlat to maintain sub-millisecond retrieval as chunk counts exceed 100k, and partition indexes by user to prevent under-retrieval from cross-user filtering.",
      "Replace synchronous LLM chain invocations with Server-Sent Events streaming to deliver token-by-token output to the frontend, reducing perceived latency on longer analytical responses."
    ],
    links: {
      github: "https://github.com/Shafia-01/Learnify-AI"
    }
  },
  {
    slug: "stratix",
    order: "02",
    title: "Stratix",
    oneLiner: "Autonomous multi-agent market intelligence platform.",
    pullQuote: "Re-imagining SEO research through stateful, multi-agent orchestration.",
    metrics: [
      "7-node LangGraph pipeline",
      "6 tools executed",
      "173 test cases",
      "100% core test coverage"
    ],
    stack: {
      backend: [
        "FastAPI",
        "Pydantic v2",
        "SQLAlchemy",
        "APScheduler",
        "Tenacity"
      ],
      frontend: [
        "Streamlit",
        "Plotly"
      ],
      aiml: [
        "LangGraph",
        "LangChain Core",
        "langchain-google-genai (Gemini)",
        "LangSmith"
      ],
      infra: [
        "SQLite (WAL mode)",
        "Docker",
        "Docker Compose",
        "Uvicorn",
        "GitHub Actions CI"
      ]
    },
    problem: "SEO and market research tools typically return raw, disconnected data — keyword lists, SERP snippets, competitor rankings — and leave the analyst to manually cross-reference them into a strategy. Each data source (search volume, SERP structure, competitor gaps, trends) has different reliability, and tools rarely expose how confident their own output is. The result is research workflows that require constant manual judgment calls about which data to trust, with no systematic way to catch incomplete or low-quality findings before they influence a final recommendation.",
    solution: "Stratix runs keyword research through a seven-node LangGraph pipeline: a planner drafts a research scope, a ReAct agent executes registered tools (keyword research, SERP analysis, competitor gap, trend forecasting, topic clustering, intent classification), a deterministic aggregator computes per-tool confidence scores, a quality gate enforces minimum data thresholds, an adversarial critic LLM reviews findings for weak claims, and a strategy agent synthesizes a report. Human-in-the-loop interrupts pause execution for plan and report approval, with state checkpointed via SqliteSaver so runs survive restarts.",
    architecture: {
      description: "Seven-node LangGraph state machine with two human-in-the-loop interrupts and two retry loops.",
      steps: [
        {
          title: "Planning",
          description: "planner_node calls Gemini to produce a structured ResearchPlan (objectives, requested modules, max_keywords) as JSON, falling back to a default plan on parse failure, then interrupts for human approval."
        },
        {
          title: "Research Execution",
          description: "research_agent_node runs a LangChain create_react_agent against six StructuredTool adapters backed by invoke_tool(), which validates input via Pydantic and returns errors as structured dicts instead of raising."
        },
        {
          title: "Aggregation & Confidence Scoring",
          description: "aggregator_node deterministically builds IntelligenceFindings from collected tool outputs and computes a 0.0–1.0 confidence score per tool using rule-based rubrics (fill ratio, result counts, gap scores)."
        },
        {
          title: "Quality Gate & Critic",
          description: "quality_gate_node enforces minimum keyword count and confidence thresholds before an LLM-based critic_node reviews findings for weak claims and data gaps, routing back to research on REVISE verdicts within a retry budget."
        },
        {
          title: "Strategy Synthesis & Persistence",
          description: "strategy_agent_node synthesizes a StrategyReport via Gemini, interrupts for report approval, then persist_node saves keyword findings to SQLite and triggers LLM-as-judge evaluation of plan, report, and tool reliability."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "SQLite + WAL over PostgreSQL",
        description: "Chosen for trivial single-node deployment. WAL mode and a 5000ms busy_timeout pragma (set via SQLAlchemy connect event) allow concurrent agent tool writes without external database infrastructure, at the cost of a single-writer ceiling under high concurrency."
      },
      {
        title: "Quality gate before critic node",
        description: "A cheap deterministic check (keyword count, confidence threshold) runs before the LLM-based critic to fail fast on obviously insufficient data, avoiding wasted LLM calls on findings that wouldn't pass review anyway."
      },
      {
        title: "Tenacity retries scoped to specific exceptions",
        description: "Retry decorators target only KeylyticsAPIError and requests.RequestException, never bare Exception, so programming errors (TypeError, AttributeError) fail immediately instead of being silently retried and masked."
      },
      {
        title: "Multi-model Gemini fallback chain",
        description: "LLM calls use LangChain's with_fallbacks() across a list of Gemini models (gemma-4-31b-it down to gemini-2.5-flash) so quota exhaustion or transient errors on one model don't break the pipeline mid-run."
      },
      {
        title: "Exception-eating tool dispatch",
        description: "invoke_tool() validates input against each tool's Pydantic model and catches execution errors, returning {\"error\": ..., \"tool\": name} instead of raising — so the ReAct agent receives structured failures and continues rather than crashing the graph."
      }
    ],
    features: [
      {
        title: "Human-in-the-loop checkpoints",
        description: "Graph execution pauses at plan_approval and report_approval interrupts, letting an operator approve, edit, or reject before continuing."
      },
      {
        title: "Per-tool confidence scoring",
        description: "Each research tool's output is scored 0.0–1.0 using deterministic rubrics (fill ratios, result counts, gap scores) surfaced to the strategy agent."
      },
      {
        title: "Adversarial critique loop",
        description: "An LLM critic reviews aggregated findings for weak claims and low-confidence data being used as if reliable, routing back to research when issues are found."
      },
      {
        title: "Scheduled monitoring with report diffing",
        description: "APScheduler-backed recurring jobs re-run research in auto-approve mode and compute keyword score, recommendation, and confidence deltas between runs."
      }
    ],
    performance: [
      "Six-tool registry with uniform dispatch: All tools (keyword_research, serp_analysis, competitor_gap, trend_forecast, topic_cluster, intent_classifier) share one validated invocation path via TOOL_REGISTRY.",
      "Retry-safe external API calls: SerpAPI, DataForSEO, and Google Trends calls use exponential backoff with jitter, scoped to recoverable network and API exceptions only.",
      "Dual-container deployment: Separate Dockerfiles for FastAPI and Streamlit share a SQLite volume via Docker Compose, with a healthcheck gating Streamlit startup on API readiness.",
      "In-process Prometheus-compatible metrics: Thread-safe counters, histograms, and gauges exposed via /metrics in Prometheus text format, with no external metrics infrastructure required."
    ],
    lessons: [
      "Separating a deterministic quality gate from an LLM-based critic node reduces wasted model calls on findings that fail simple count or threshold checks.",
      "Scoping retry decorators to specific exception types (rather than bare Exception) is necessary to avoid masking programming bugs as transient API failures."
    ],
    roadmap: [
      "Replace the SqliteSaver checkpointer and SQLite job store with distributed equivalents to allow horizontal scaling of the API tier.",
      "Move the in-memory metrics collector to the official Prometheus client library with a pushgateway, so metrics survive process restarts and aggregate across replicas."
    ],
    links: {
      github: "https://github.com/Shafia-01/Stratix"
    }
  },
  {
    slug: "cartverse",
    order: "03",
    title: "CartVerse",
    oneLiner: "Mood-aware and habit-driven shopping assistant for Walmart product discovery.",
    pullQuote: "Personalizing retail discovery using emotional state and purchase history.",
    metrics: [
      "2 independent pipelines",
      "3-tier sentiment fallback",
      "26 emotional states mapped",
      "3600-second query cache TTL"
    ],
    stack: {
      backend: [
        "Python",
        "requests",
        "python-dotenv",
        "nest_asyncio",
        "SerpAPI (Walmart engine)"
      ],
      frontend: [
        "Streamlit 1.33.0",
        "Plotly 5.21.0"
      ],
      aiml: [
        "HuggingFace Transformers (distilbert-base-uncased-emotion)",
        "TextBlob (polarity fallback)"
      ],
      infra: [
        "MySQL (mysql-connector-python)",
        "JSON flat-file fallback (mood_history.json, user_history.json)",
        "pandas 2.2.1",
        "joblib",
        "scikit-learn",
        "Streamlit (three entry points: main_app.py, MOODCART/app.py, AUTOCART/app.py)"
      ]
    },
    problem: "Standard e-commerce search relies on explicit queries, ignoring two signals that often drive real purchasing decisions: how a user currently feels, and what they habitually buy. Customers face decision fatigue when browsing without contextual guidance, and generic recommendation engines don't account for emotional state or replenishment cycles. The gap is a system that can interpret unstructured emotional input and infer refill needs from purchase history—without requiring the user to search explicitly.",
    solution: "CartVerse addresses this through two independent pipelines unified under a single Streamlit interface. MoodCart accepts free-text mood descriptions, classifies them through a three-tier fallback chain, maps the result to a product category, and queries live Walmart listings via SerpAPI. AutoCart reads per-user purchase history, ranks items by frequency, applies a refill heuristic, and surfaces trending alternatives. Both pipelines share the same product search layer and Walmart-themed UI.",
    architecture: {
      description: "Dual-pipeline Streamlit application with layered sentiment classification and frequency-based cart generation.",
      steps: [
        {
          title: "User Input Collection",
          description: "MoodCart captures free-text mood descriptions alongside sidebar demographics (age, gender, interest). AutoCart reads pre-loaded JSON purchase histories and a user selector dropdown."
        },
        {
          title: "Mood Classification (Three-Tier Fallback)",
          description: "Input passes through direct regex keyword lookup against mood_map.json, then a HuggingFace DistilBERT emotion classifier, then TextBlob polarity scoring as a last resort."
        },
        {
          title: "Category Resolution",
          description: "The detected mood maps to a base category via mood_map.json. An adjust_category function then refines it using age group, gender, and interest—e.g., \"toys\" becomes \"collectibles or hobby kits for adults\" for users over 19."
        },
        {
          title: "Product Search via SerpAPI",
          description: "A search term is built from the adjusted category and interest, checked against a fallback keyword table, then sent to SerpAPI's Walmart engine with retry logic for 429 rate-limit responses."
        },
        {
          title: "Persistence and Display",
          description: "Mood interactions are written to mood_history.json and optionally to MySQL. A Plotly timeline visualizes historical mood data. Product results render in a two-column grid with images and Walmart links."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "Three-Tier Sentiment Fallback",
        description: "Rather than depending solely on the DistilBERT pipeline—which has startup latency and can fail in memory-constrained environments—the system first tries fast regex matching, then the ML model, then TextBlob. This keeps the app functional regardless of resource availability."
      },
      {
        title: "Lazy Model Loading via Singleton",
        description: "The HuggingFace pipeline is instantiated only on first use through a module-level singleton (get_emotion_classifier). This avoids blocking the Streamlit startup path and reduces perceived load time when the classifier is never invoked."
      },
      {
        title: "Demographic Category Adjustment at Runtime",
        description: "A deterministic adjust_category function modifies mood-derived categories using age, gender, and interest at query time rather than training a separate model. This makes the logic auditable and easy to extend without retraining."
      },
      {
        title: "SerpAPI Caching with Retry",
        description: "Product queries are wrapped in @st.cache_data(ttl=3600) to avoid redundant API calls within a session window. A retry loop with delay handles 429 responses before surfacing an error to the user."
      },
      {
        title: "Dual Entry Points with Shared Logic",
        description: "MOODCART/app.py and AUTOCART/app.py can run standalone, while main_app.py composes both under tabs. Shared utilities (SerpAPI client, mood model) are imported as packages, avoiding code duplication."
      }
    ],
    features: [
      {
        title: "Emotion-to-Product Mapping",
        description: "Translates unstructured natural language mood descriptions into Walmart product categories, adjusted dynamically for user demographics across 26 mapped emotional states."
      },
      {
        title: "Frequency-Based Cart Generation",
        description: "Parses per-user purchase history JSON, ranks items by occurrence, applies a refill check, and retrieves trending Walmart alternatives via SerpAPI for each qualifying item."
      },
      {
        title: "Mood History Timeline",
        description: "Persists each mood interaction to local JSON and optionally MySQL, then renders an interactive Plotly line chart filterable by 7-day, 30-day, or all-time windows."
      }
    ],
    performance: [
      "SerpAPI responses cached for 3600 seconds per query to minimize quota usage",
      "Retry loop handles rate-limit (429) responses with configurable delay and attempt count",
      "Lazy classifier loading defers DistilBERT initialization until first mood submission",
      "Direct keyword lookup resolves common moods without invoking the ML model"
    ],
    lessons: [
      "Multi-tiered fallback chains are more resilient than single-model pipelines in resource-variable deployment environments.",
      "Building demographic heuristics as explicit deterministic code rather than learned behavior makes category logic transparent and easy to audit."
    ],
    roadmap: [
      "Implement real refill logic in needs_refill using purchase recency and quantity thresholds instead of the current always-true stub.",
      "Add structured logging and unit tests around mood mapping, category adjustment, and SerpAPI response parsing to catch regressions as logic evolves."
    ],
    links: {
      github: "https://github.com/Shafia-01/CartVerse"
    }
  },
  {
    slug: "mediscan",
    order: "04",
    title: "MediScan",
    oneLiner: "Medical vs. non-medical image classifier built on fine-tuned ResNet18 with multi-modal input support.",
    pullQuote: "Automating clinical image triage through staged transfer learning and confidence-aware inference.",
    metrics: [
      "12 fine-tuning epochs",
      "100% classification accuracy",
      "102ms average inference latency",
      "2 interface modes (Streamlit & CLI)"
    ],
    stack: {
      backend: [
        "Python 3.9+",
        "Pillow",
        "PyMuPDF (pymupdf)",
        "requests",
        "BeautifulSoup4"
      ],
      frontend: [
        "Streamlit",
        "pandas (results table, CSV export)",
        "Matplotlib (CLI display mode)"
      ],
      aiml: [
        "PyTorch 2.x",
        "torchvision (ResNet18, ImageNet weights, transforms)",
        "NumPy"
      ],
      infra: [
        "Streamlit (local or Community Cloud)",
        "atexit-based temp directory cleanup",
        "argparse CLI"
      ]
    },
    problem: "Medical data pipelines routinely receive mixed image streams — clinical scans alongside unrelated attachments — requiring manual review to separate them. At scale, this creates a bottleneck in database indexing, data ingestion, and patient privacy workflows. Generic classifiers lack the confidence calibration needed for clinical contexts, where a false positive (mislabeling a non-medical image as medical) carries real downstream consequences.",
    solution: "MediScan wraps a ResNet18 backbone, fine-tuned via staged transfer learning, into a deployable Streamlit application and CLI. Users supply images directly, via PDF upload, or via URL. The extractor layer handles binary PDF parsing (PyMuPDF) and HTML scraping (BeautifulSoup) before passing images through the classifier. Predictions below a configurable softmax threshold are labeled uncertain rather than forced into a class, giving downstream systems a reliable signal.",
    architecture: {
      description: "Single-model inference pipeline with multi-modal input extraction and confidence-gated output.",
      steps: [
        {
          title: "Input ingestion",
          description: "User supplies raw images, a PDF, or a URL. The Streamlit app or CLI routes to the appropriate extractor, saving inputs to a session-scoped temporary directory."
        },
        {
          title: "Image extraction",
          description: "PDFs are parsed via PyMuPDF XREF traversal; URLs are scraped with BeautifulSoup, filtered by content-type, and SSRF-checked via DNS resolution against private and loopback subnets."
        },
        {
          title: "Preprocessing",
          description: "Each image is resized to 256px, center-cropped to 224×224, and normalized using ImageNet mean and standard deviation values before tensor conversion."
        },
        {
          title: "Inference with TTA",
          description: "The model predicts on the original image and its horizontal flip; softmax probabilities are averaged across both passes to produce a more stable confidence estimate."
        },
        {
          title: "Confidence-gated output",
          description: "Predictions with max softmax below the configured threshold (default 0.60) are labeled uncertain. Remaining results are rendered in the UI grid or printed to CLI summary."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "Staged Transfer Learning",
        description: "The ResNet18 backbone is frozen for the first 3 epochs while only the classification head trains at lr=1e-3. All layers are then unfrozen at lr=3e-4. This prevents catastrophic forgetting of ImageNet features while allowing domain adaptation."
      },
      {
        title: "WeightedRandomSampler for Class Imbalance",
        description: "Training sample weights are set inversely proportional to class frequency using WeightedRandomSampler. This ensures balanced gradient updates without discarding data, avoiding the accuracy inflation that majority-class overrepresentation causes."
      },
      {
        title: "Confidence Thresholding",
        description: "Rather than forcing every prediction into a binary class, outputs below the 0.60 softmax threshold are surfaced as uncertain. This trades recall for reliability — appropriate for pipelines where a wrong label is more costly than an abstention."
      },
      {
        title: "Test-Time Augmentation",
        description: "Horizontal flip augmentation is applied at inference time, with probabilities averaged across both orientations. The 2x inference cost is accepted in exchange for reduced sensitivity to image framing; the --no-tta flag lets CLI users skip this when throughput matters."
      },
      {
        title: "SSRF Protection on URL Scraping",
        description: "Before fetching any URL or resolved image src, the hostname is resolved via socket.getaddrinfo and each returned IP is checked against loopback, link-local, private ranges, and the AWS metadata address. Invalid schemes are also rejected outright."
      }
    ],
    features: [
      {
        title: "Multi-modal input extraction",
        description: "Accepts raw image uploads, embedded images from PDF documents (via PyMuPDF XREF traversal), and images scraped from public web pages — up to 50 images per source."
      },
      {
        title: "Confidence-gated classification",
        description: "Classifies images as medical, non_medical, or uncertain based on a configurable softmax threshold, preventing low-confidence outputs from propagating into downstream systems."
      },
      {
        title: "SSRF-safe URL scraping",
        description: "Validates all outbound image URLs against private IP ranges, loopback addresses, and cloud metadata endpoints before initiating any HTTP request."
      },
      {
        title: "Headless-compatible CLI",
        description: "Supports automated pipelines via argparse flags for threshold control, TTA toggling, result export, and uncertain-image collection. Falls back to saving Matplotlib output as PNG when no display is available."
      }
    ],
    performance: [
      "100% accuracy on 101-image validation set (medical and non_medical, threshold 0.60, TTA disabled)",
      "~52 ms average inference time per image on CPU (ResNet18, no TTA)",
      "TTA doubles per-image inference cost; --no-tta flag available for throughput-sensitive runs",
      "PDF and URL extraction capped at 50 images per source; files under 100 bytes skipped automatically"
    ],
    lessons: [
      "TTA measurably improves robustness against framing variation but introduces a fixed 2x latency penalty — exposing it as an optional flag is necessary for usability at document scale.",
      "Softmax confidence thresholding requires empirical tuning; the right threshold is dataset-dependent, and using a single default value trades off recall against false positive control in ways that only become visible during domain-specific evaluation."
    ],
    roadmap: [
      "Add per-class calibration curves or temperature scaling to improve the reliability of the softmax confidence scores as a true probability estimate.",
      "Support multi-page PDF rendering (rasterizing pages to images) in addition to XObject extraction, to capture diagrams and figures not stored as embedded image objects."
    ],
    links: {
      github: "https://github.com/Shafia-01/MediScan"
    }
  },
  {
    slug: "packetwatch",
    order: "05",
    title: "PacketWatch",
    oneLiner: "Watching the wire. In real time.",
    pullQuote: "Detecting network threats through ML-driven packet analysis.",
    metrics: [
      "27 statistical flow features",
      "Sub-second CSV inference",
      "20-second live capture window",
      "100 Random Forest estimators"
    ],
    stack: {
      backend: [
        "Python",
        "Scapy (packet capture and parsing)",
        "pandas (DataFrame manipulation)",
        "NumPy (numerical operations)"
      ],
      frontend: [
        "Streamlit (dashboard and file upload UI)"
      ],
      aiml: [
        "scikit-learn (RandomForestClassifier, SimpleImputer, StandardScaler)",
        "joblib (model and pipeline serialization)"
      ],
      infra: [
        "libpcap / Npcap (OS-level packet capture driver)",
        "Local execution (requires administrator/root privileges for live capture)"
      ]
    },
    problem: "Home and public Wi-Fi networks are routinely exposed to DoS floods, port scans, and man-in-the-middle exploits. Traditional intrusion detection systems depend on static rule sets and known signatures—they cannot generalize to novel attack patterns or subtle statistical anomalies in traffic flow. Security engineers need a tool that evaluates multi-dimensional flow characteristics rather than matching fixed rules, and that works equally well against historical log exports and live captured traffic.",
    solution: "PacketWatch captures raw packets via Scapy, extracts 27 statistical flow features per session, and runs them through a trained Random Forest classifier to produce a binary verdict—Normal or Threat. A Streamlit dashboard exposes two operating modes: offline CSV analysis for historical log review, and live sniffing against the auto-detected Wi-Fi interface. All preprocessing uses the exact imputer and scaler objects serialized during training, eliminating the risk of inference-time data leakage.",
    architecture: {
      description: "Three-layer pipeline: packet ingestion → statistical feature extraction → ML inference, surfaced through a dual-mode Streamlit dashboard.",
      steps: [
        {
          title: "Packet Ingestion",
          description: "Scapy sniffs the auto-detected Wi-Fi interface for a configurable timeout window, or a CSV of pre-captured flow records is uploaded directly through the dashboard."
        },
        {
          title: "Feature Extraction",
          description: "Raw packets are reduced to 27 flow-level statistical features—including IAT means and standard deviations, packet length stats, directional counts, and destination port—via feature_extraction.py."
        },
        {
          title: "Preprocessing",
          description: "The fitted SimpleImputer replaces NaN/Inf values with column means; the fitted StandardScaler normalizes the feature vector. Both objects are loaded from .pkl files produced at training time."
        },
        {
          title: "Model Inference",
          description: "The preprocessed feature array is passed to a 100-estimator Random Forest classifier that returns a binary label: 0 (Normal) or 1 (Threat)."
        },
        {
          title: "Dashboard Presentation",
          description: "Streamlit surfaces the verdict with per-row predictions on uploaded CSVs, downloadable scored results, and live interface metadata (SSID, channel, packet count) for real-time scans."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "Joblib Serialization of Preprocessing Objects",
        description: "The imputer and scaler fitted during training are saved as .pkl files and reloaded at inference time. This guarantees the exact same transformation is applied to live data as was applied to training data, preventing subtle scaling mismatches that would silently degrade accuracy."
      },
      {
        title: "Scapy over External CLI Tools",
        description: "Scapy provides a Python-native packet parsing API, removing subprocess dependencies on tcpdump or tshark. This simplifies cross-platform deployment and gives direct programmatic access to packet fields without parsing text output."
      },
      {
        title: "Dual-Mode Architecture",
        description: "Offline CSV analysis and live sniffing share the same preprocessing and inference pipeline. This avoids duplicated logic and ensures predictions are consistent regardless of input source."
      },
      {
        title: "Platform-Aware Interface Auto-Detection",
        description: "realtime_detector.py queries OS-specific commands (netsh on Windows, iw dev on Linux, networksetup on macOS) to identify the active Wi-Fi interface at runtime, removing the need for manual configuration."
      },
      {
        title: "Strict Feature Alignment at Inference",
        description: "preprocess_dataframe loads the saved feature_names.pkl and reorders DataFrame columns to match training order exactly, raising a ValueError on missing features rather than silently producing a malformed input."
      }
    ],
    features: [
      {
        title: "Live Wi-Fi Threat Detection",
        description: "Sniffs the active network interface, extracts flow statistics from captured packets, and returns a Threat or Normal verdict alongside interface metadata including SSID and channel."
      },
      {
        title: "Offline CSV Log Analysis",
        description: "Accepts uploaded CSV files of network flow records, scores each row individually, annotates results with prediction labels, and provides a downloadable scored CSV."
      },
      {
        title: "Cross-Platform Interface Discovery",
        description: "Automatically identifies the Wi-Fi interface on Windows, Linux, and macOS using native system commands, with privilege checks before attempting captures."
      }
    ],
    performance: [
      "Sub-second inference on 100-row CSV uploads",
      "O(n) feature extraction scaling linearly with packet count",
      "20-second capture window optimized for flow-level statistical stability",
      "Single-process deployment with no external service dependencies"
    ],
    lessons: [
      "Serializing preprocessing objects at training time and reloading them at inference is mandatory—fitting a new imputer or scaler on inference data produces different transformations and silently corrupts predictions.",
      "Mapping frame-level Scapy attributes to flow-level statistical features requires explicit directional tracking per packet; treating all packets as equivalent discards the asymmetry that distinguishes attack traffic."
    ],
    roadmap: [
      "Replace hardcoded idle feature placeholders (Idle Mean/Max/Min) with actual inter-flow idle period measurement derived from packet timestamps, and retrain the model on updated features.",
      "Add multi-class classification to distinguish attack subtypes (DoS, port scan, MITM) rather than returning only a binary Normal/Threat label."
    ],
    links: {
      github: "https://github.com/Shafia-01/PacketWatch"
    }
  },
  {
    slug: "cinescope",
    order: "06",
    title: "CineScope",
    oneLiner: "Developed and deployed CineScope, a full-stack movie discovery platform with a secure Express proxy backend and 8 user-facing features.",
    pullQuote: "Integrating the OMDb API to deliver search, reviews, ratings, and personalized watchlists with robust server-side security.",
    metrics: [
      "8 user-facing features",
      "6 request validation checks",
      "3 error recovery mechanisms",
      "5 production-critical issues resolved"
    ],
    stack: {
      backend: [
        "Node.js",
        "Express.js",
        "node-fetch",
        "dotenv",
        "cors"
      ],
      frontend: [
        "HTML5",
        "CSS3 (CSS Grid, Flexbox)",
        "Vanilla JavaScript (ES6+)"
      ],
      aiml: [],
      infra: [
        "Browser localStorage API",
        "OMDb REST API",
        "Render (Express backend)",
        "Netlify (Static frontend)"
      ]
    },
    problem: "Movie enthusiasts searching for a simple tool to browse films, leave reviews, and track a watchlist are pushed toward bloated platforms that require account creation before any meaningful interaction. Direct client-side API integrations expose private keys in browser network traffic, while heavy frontend frameworks add unnecessary overhead for a single-purpose utility. There was no lightweight, self-contained option that handled API security, local persistence, and a clean UI without requiring backend databases or user authentication.",
    solution: "CineScope is a full-stack movie discovery platform using HTML, CSS, JavaScript, Node.js, and Express, integrating the OMDb API to deliver 8 user-facing features. To protect API credentials, it uses a secure Express proxy architecture with robust validation and error handling, implementing 6 validation checks, 3 recovery mechanisms, and resolving 5 production-critical issues to improve reliability and deployment readiness. Watchlist and review data persist via localStorage, eliminating the need for a database.",
    architecture: {
      description: "Single-page frontend with Express reverse proxy and client-side localStorage persistence.",
      steps: [
        {
          title: "User Search Input",
          description: "User types a query into the search bar; a keyup or button-click event triggers fetchMovies(), which sends a GET request to the Express proxy's /search endpoint."
        },
        {
          title: "Express Proxy — Search Route",
          description: "The /search route reads req.query.q, constructs the OMDb API URL with the server-side OMDB_KEY env variable, fetches results, and returns sanitized JSON to the client."
        },
        {
          title: "Dynamic Card Rendering",
          description: "The frontend receives the Search array, iterates via displayMovies(), and injects movie-card DOM elements into the CSS Grid container without page reload."
        },
        {
          title: "Movie Detail Modal",
          description: "Clicking a card calls openMovieDetails(imdbID), fetching from /details/:id on the proxy, which hits OMDb's full-plot endpoint and populates the modal's inner HTML."
        },
        {
          title: "LocalStorage Persistence",
          description: "Watchlist additions and review submissions are serialized to localStorage under fixed keys; both are loaded on page init and re-synced after every user interaction."
        }
      ]
    },
    engineeringDecisions: [
      {
        title: "Secure Express Proxy with Robust Validation",
        description: "Engineered a secure Express proxy architecture to prevent API key exposure. Implemented 6 query validation checks and 3 recovery mechanisms (such as rate limits and fallback handles) to resolve 5 production-critical issues, dramatically improving application reliability and deployment readiness."
      },
      {
        title: "localStorage Over a Backend Database",
        description: "Watchlist and review data are user-specific and low-volume. Using localStorage eliminates the need for a database, authentication, and session management, significantly reducing infrastructure overhead for a single-user utility. The tradeoff is data is browser-local and not portable."
      },
      {
        title: "Vanilla JS Over a Frontend Framework",
        description: "The interaction surface—search, modal, watchlist, reviews—is straightforward DOM manipulation. Vanilla JS with direct event listeners avoids framework build tooling, reduces bundle size, and keeps the frontend deployable as a plain static file with no compilation step."
      },
      {
        title: "Dynamic Event Listener Assignment on Modal",
        description: "reviewForm.onsubmit and addToWatchlistBtn.onclick are reassigned each time a modal opens, binding the current movie's IMDb ID into the closure. This avoids maintaining a global selected-movie state variable and keeps handler logic co-located with the modal lifecycle."
      }
    ],
    features: [
      {
        title: "8 User-Facing Features",
        description: "Provides a full-suite discovery experience including dynamic search, detailed info modals, user ratings, star reviews, and personalized watchlists."
      },
      {
        title: "Secure OMDb API Gateway",
        description: "All movie search and detail requests are proxied through Express, with the API key injected server-side. Client-side code never touches credentials directly."
      },
      {
        title: "Robust Request Validation",
        description: "Enforces 6 distinct query verification checks server-side to block malformed requests, injection attempts, and API quota abuse."
      }
    ],
    performance: [
      "8 user-facing features fully integrated and running with zero framework overhead",
      "6 request validation checks and 3 recovery mechanisms safeguarding the backend proxy",
      "5 production-critical errors resolved, making the project ready for hosting/deployment",
      "Zero client-side credential exposure under network inspection"
    ],
    lessons: [
      "Binding modal event handlers (onsubmit, onclick) on each open rather than once at init is necessary when the handler must close over dynamic per-movie state like imdbID.",
      "localStorage is sufficient for single-device personal state but becomes the first bottleneck if cross-device sync or multi-user features are introduced; the schema should be designed with that migration in mind from the start."
    ],
    roadmap: [
      "Replace localStorage with a cloud database (MongoDB or PostgreSQL) and introduce JWT-based authentication to enable cross-device watchlist and review sync.",
      "Add server-side response caching on the Express proxy (e.g., in-memory or Redis) to reduce redundant OMDb API calls for repeated searches and detail lookups."
    ],
    links: {
      github: "https://github.com/Shafia-01/CineScope"
    }
  }
];
