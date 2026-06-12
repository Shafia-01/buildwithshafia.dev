export const site = {
  name: "Shafia Ameeruddin",
  title: "Shafia Ameeruddin — AI Engineer",
  role: "AI Engineer",
  tagline: "Building intelligent products from idea to production.",
  differentiator: "I ship complete AI products, not just AI models.",
  location: "India · Open to Relocation · Open to Remote",
  status: "Available · 2026",
  url: "https://buildwithshafia.dev",
  email: "shafiaameeruddin637@gmail.com",
  linkedin: "https://linkedin.com/in/shafiaameeruddin",
  github: "https://github.com/Shafia-01",
  resumePath: "/resume/Shafia_Ameeruddin_AI_Engineer_Resume.pdf",
  techStack: [
    "Python",
    "FastAPI",
    "React 19",
    "Next.js",
    "TypeScript",
    "LangChain",
    "FAISS",
    "MongoDB",
    "Gemini",
    "Groq",
    "Ollama",
    "Whisper",
    "PyTorch",
    "OpenCV",
    "D3.js",
    "Tailwind",
    "Docker",
    "AWS",
    "MySQL",
    "Scapy",
    "scikit-learn",
  ],
} as const;

export const navLinks = [
  { label: "Journey", href: "/journey", section: "02" },
  { label: "Work", href: "/work", section: "03" },
  { label: "Lab", href: "/lab", section: "04" },
  { label: "Community", href: "/community", section: "05" },
  { label: "Skills", href: "/skills", section: "06" },
  { label: "Contact", href: "/contact", section: "07" },
] as const;

export const sections = [
  { number: "01", name: "THE BUILDER", href: "/the-builder" },
  { number: "02", name: "THE JOURNEY", href: "/journey" },
  { number: "03", name: "THE WORK", href: "/work" },
  { number: "04", name: "THE LAB", href: "/lab" },
  { number: "05", name: "COMMUNITY", href: "/community" },
  { number: "06", name: "CAPABILITIES", href: "/skills" },
  { number: "07", name: "LET'S BUILD", href: "/contact" },
] as const;

export const featuredProject = {
  slug: "learnify-ai",
  title: "Learnify AI",
  blurb: "A multimodal AI tutor with emotion-aware adaptive learning.",
  href: "/work/learnify-ai",
};
