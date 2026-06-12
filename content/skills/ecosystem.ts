export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export const skillEcosystem: SkillGroup[] = [
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    skills: ["PyTorch", "OpenCV", "DeepFace", "scikit-learn", "Statistical Modeling", "Feature Engineering"]
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    skills: ["Gemini 1.5 Pro", "LLaMA-3", "Claude 3.5 Sonnet", "Prompt Engineering", "Whisper STT", "Voice Synthesis"]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    skills: ["LangGraph", "LangChain Orchestrator", "FAISS Vector DB", "RAG Pipelines", "Autonomous Agents", "Multi-Agent Networks"]
  },
  {
    id: "software-eng",
    title: "Software Engineering",
    skills: ["TypeScript", "Python", "Data Structures", "Algorithm Design", "REST APIs", "WebSocket Servers"]
  },
  {
    id: "frontend",
    title: "Frontend Development",
    skills: ["Next.js 15", "React 19", "Tailwind CSS", "Framer Motion", "Responsive Layouts", "Aesthetic UI Design"]
  },
  {
    id: "backend",
    title: "Backend Architectures",
    skills: ["FastAPI", "Express.js", "Node.js", "Asynchronous Programming", "API Gateways", "Proxy Middleware"]
  },
  {
    id: "databases",
    title: "Databases & Storage",
    skills: ["MongoDB", "PostgreSQL", "Redis Cache", "Vector Indexes", "SQL / NoSQL Schema Design"]
  },
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    skills: ["Docker Containers", "AWS ECS", "GCP", "Hugging Face Spaces", "Vercel Deployments", "CI/CD Pipelines"]
  },
  {
    id: "product-dev",
    title: "Product Development",
    skills: ["Founding Engineer Mindset", "User-Centric Prototyping", "Technical Writing", "Rapid Development Cycle"]
  }
];
