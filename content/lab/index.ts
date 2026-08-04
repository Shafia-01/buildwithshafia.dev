export interface LabItem {
  slug: string;
  title: string;
  category: "CyArt Tech" | "Edunet Foundation";
  objective: string;
  architecture: {
    description: string;
    steps: string[];
  };
  stack: string[];
  engineeringWork: string[];
  results: string[];
  lessons: string[];
}

export const labItems: LabItem[] = [
  {
    slug: "news-sentiment-pipeline",
    title: "News Sentiment Pipeline",
    category: "CyArt Tech",
    objective: "Built a concurrent scraping-to-sentiment pipeline that pulls headlines from 20 RSS sources and scores them in parallel to compare threading and multiprocessing bridging patterns across three interchangeable sentiment backends.",
    architecture: {
      description: "Threaded RSS scraper feeding a multiprocessing pool through a shared queue, with sentiment results appended to disk as each worker returns.",
      steps: [
        "One RSSScraperThread per feed URL parses RSS via feedparser and pushes headline dicts (source, title, link, published) onto a shared multiprocessing.Queue.",
        "The main loop drains the queue with a 1-second poll and dispatches each headline to a multiprocessing.Pool via apply_async, running one of three interchangeable SentimentAnalyzer backends (VADER, Transformers, rule-based).",
        "Each worker result is appended as a JSON line to outputs/results.json1 through a threading.Lock-protected callback, with tqdm progress bars tracking feeds scraped and headlines analyzed.",
        "analyze_results.py reloads the JSON lines into a pandas DataFrame, flattens the nested analysis dict, and exports sentiment distribution and per-source averages to results.csv."
      ]
    },
    stack: ["Python", "feedparser", "NLTK VADER", "Hugging Face Transformers (optional)", "threading", "multiprocessing", "Flask", "pandas", "tqdm"],
    engineeringWork: [
      "Implemented a two-layer concurrency model: threading.Thread instances for I/O-bound RSS scraping and a multiprocessing.Pool for CPU-bound sentiment scoring, bridged by a multiprocessing.Queue.",
      "Built a pluggable SentimentAnalyzer wrapper supporting VADER, a HuggingFace transformers pipeline, and a rule-based positive/negative word-list fallback, selectable via a CLI flag.",
      "Added a threading.Lock-guarded append-only JSON-lines writer, plus a Flask dashboard (app.py) that reuses the same scraper and worker classes for live visualization."
    ],
    results: [
      "20 RSS feeds configured across news and tech sources",
      "17 distinct sources represented in analyzed results",
      "2,163 sentiment records written to outputs/results.json1",
      "1,877 records exported to results.csv via analyze_results.py",
      "Sentiment split of 805 negative, 775 neutral, 583 positive headlines",
      "Default concurrency of 20 scraper threads and (CPU count − 1) analysis processes"
    ],
    lessons: [
      "Feed parsing with feedparser needs defensive .get() lookups, since RSS entries from different publishers use inconsistent field names (title/updated/published) and malformed feeds return empty entry lists rather than raising.",
      "Bridging threads and a multiprocessing pool through one mp.Queue works but requires polling with a timeout in the consumer loop, since a bare queue.get() call blocks the main loop from checking thread liveness or a stop event."
    ]
  },
  {
    slug: "surveillance-engineering",
    title: "Surveillance Engineering",
    category: "CyArt Tech",
    objective: "Built a real-time integrity-monitoring pipeline for four camera streams to flag motion and detect visual tampering (blur, coverage, uniform color) without external ML models.",
    architecture: {
      description: "Four independent StreamProcessor instances read, analyze, and annotate frames per stream, composited into one 2x2 mosaic window each loop iteration.",
      steps: [
        "Each of four video sources (RTSP URLs or local files) is opened via cv2.VideoCapture inside its own StreamProcessor and resized to a fixed 640x360 processing resolution.",
        "Motion is detected per frame with an MOG2 background subtractor, a morphological opening pass to remove noise, and contour-area filtering (>500px) to reject spurious triggers.",
        "Two integrity signals are computed per frame: Laplacian variance for blur (threshold 100) and per-channel histogram dominance for uniform-color/coverage (threshold 0.6), combined into a compromise_percent score checked against a 75% cutoff.",
        "The four annotated frames are stacked into a 2x2 mosaic with an FPS overlay via cv2.imshow, and pressing 's' writes a screenshot to diagrams/."
      ]
    },
    stack: ["Python", "OpenCV", "NumPy", "psutil (optional)"],
    engineeringWork: [
      "Implemented per-stream motion detection using MOG2 background subtraction with a morphological opening pass and contour-area thresholding to separate genuine motion from sensor noise.",
      "Built two independent camera integrity checks — Laplacian variance for blur and histogram channel dominance for uniform-color/coverage — combined into a single compromise heuristic.",
      "Assembled four StreamProcessor instances into a 2x2 mosaic display with rolling per-stream FPS averaging and keyboard-triggered screenshot capture."
    ],
    results: [
      "4 concurrent camera streams processed into one mosaic window",
      "2 integrity checks per frame (blur variance, histogram uniformity)",
      "1 motion-detection method (MOG2 background subtraction with contour filtering)",
      "Blur flagged below a Laplacian variance threshold of 100",
      "Uniform-color/coverage flagged above a 0.6 histogram dominance score",
      "Stream marked compromised at a combined heuristic score of 75% or higher"
    ],
    lessons: [
      "MOG2 background subtraction needs a morphological opening pass and a minimum contour-area cutoff, otherwise single noisy pixels in the foreground mask register as motion.",
      "Frame differencing was evaluated as a fallback to background subtraction but written up as more brittle to noise; the shipped implementation kept a single background-subtraction method rather than a dual-algorithm setup."
    ]
  },
  {
    slug: "voice-cloning-benchmarks",
    title: "Voice Cloning Benchmarks",
    category: "CyArt Tech",
    objective: "Evaluated VALL-E-X's zero-shot voice cloning and general TTS accuracy using Whisper transcription, word error rate, and Wav2Vec2 speaker-embedding cosine similarity across CPU inference runs.",
    architecture: {
      description: "Three standalone scripts generate audio from VALL-E-X, transcribe it with Whisper, and score either transcription accuracy or speaker similarity against a reference clip.",
      steps: [
        "preload_models() loads the VALL-E-X checkpoint once per script; each fixed test sentence (4 for accuracy, 1 long paragraph, 5 for cloning) is passed to generate_audio() with latency timed via time.time().",
        "Generated audio is written to disk with scipy.io.wavfile.write, then reloaded and transcribed by openai-whisper's 'base' model.",
        "jiwer.wer() compares the Whisper transcript against the original text for accuracy and long-paragraph runs; for cloning runs, a Facebook Wav2Vec2-base-960h model embeds both the reference clip and each cloned clip.",
        "Cosine similarity between the mean-pooled Wav2Vec2 embeddings of the reference and cloned audio scores speaker fidelity, printed alongside WER and latency per sentence."
      ]
    },
    stack: ["Python", "VALL-E-X", "PyTorch (CPU)", "torchaudio", "Whisper (openai-whisper)", "Wav2Vec2 (facebook/wav2vec2-base-960h via transformers)", "jiwer", "soundfile"],
    engineeringWork: [
      "Built a Wav2Vec2-based speaker-similarity scorer that loads audio with soundfile, resamples to 16kHz with torchaudio, mean-pools the last hidden state, and computes cosine similarity against a fixed reference clip.",
      "Automated latency and WER measurement around VALL-E-X's generate_audio() call for both short fixed sentences and a longer paragraph, using Whisper transcription as the accuracy ground truth.",
      "Wrote three separate evaluation entry points (accuracy, long-paragraph stability, voice cloning) sharing the same model-preload and Whisper-transcription steps but scoring different criteria."
    ],
    results: [
      "4 fixed sentences run through the TTS accuracy script",
      "3 of 4 accuracy sentences transcribed with zero word errors",
      "Average WER of 0.053 on the 4-sentence accuracy set",
      "5 cloned sentences scored against one fixed reference clip via Wav2Vec2 cosine similarity",
      "Best cloning cosine similarity of 0.965 across the 5 sentences",
      "CPU generation latency of 18–22 seconds per short sentence"
    ],
    lessons: [
      "Wav2Vec2 speaker embeddings require consistent preprocessing — mono conversion and 16kHz resampling — applied identically to the reference and cloned clip, or the cosine similarity score degrades without an obvious cause.",
      "Whisper-derived WER is sensitive to reference-clip quality and duration; the repo's own notes flag prompts under 5 seconds as unreliable for cloning fidelity, independent of the TTS model itself."
    ]
  },
  {
    slug: "cinescope-build-journey",
    title: "CineScope Build Journey",
    category: "Edunet Foundation",
    objective: "Engineered and shipped a clean, single-page search web application using React client architectures and validation filters.",
    architecture: {
      description: "Client search app connected to verified Node proxies to bypass rate limit blocks.",
      steps: [
        "React search input fields capture user typing strings.",
        "Client validator evaluates length and characters prior to network requests.",
        "Node proxy forwards verified queries to OMDb API services.",
        "React elements animate layout changes dynamically."
      ]
    },
    stack: ["React", "Express.js", "Node.js", "OMDb API"],
    engineeringWork: [
      "Configured client-side debouncing limits (300ms delay) to prevent typing queries from draining API quotas.",
      "Built 6 custom state validator tests checking empty inputs, character limits, specials, and numerical filters.",
      "Integrated Express route middlewares resolving cross-origin resource sharing errors in local testing environments."
    ],
    results: [
      "Implemented 8 core client features including favorites list and search histories.",
      "Set up 6 strict query parameter validation checks.",
      "Resolved 5 critical CORS and API key exposure bugs.",
      "Fully documented and released under the open-source MIT license."
    ],
    lessons: [
      "Exposing API tokens in client scripts is dangerous; a simple server proxy prevents security vulnerabilities.",
      "Network failures should not block client interaction; setup fallback mock databases."
    ]
  }
];
