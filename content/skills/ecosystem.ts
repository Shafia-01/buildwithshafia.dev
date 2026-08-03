export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export const skillEcosystem: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "JavaScript", "SQL", "HTML", "CSS"]
  },
  {
    id: "ai-ml-genai",
    title: "AI / ML & GenAI",
    skills: [
      "LLMs",
      "Generative AI",
      "RAG",
      "Prompt Engineering",
      "Agentic AI",
      "Hugging Face Transformers",
      "LangChain",
      "LangGraph",
      "PyTorch",
      "Scikit-learn",
      "OpenCV",
      "FAISS",
      "NLP"
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    skills: ["FastAPI", "React", "Next.js", "Node.js", "Express.js", "Streamlit", "REST APIs", "API Integration", "WebSockets"]
  },
  {
    id: "data-engineering-databases",
    title: "Data Engineering & Databases",
    skills: ["NumPy", "Pandas", "Plotly", "Matplotlib", "MySQL", "SQLite","MongoDB"]
  },
  {
    id: "cloud-devops-version-control",
    title: "Cloud, DevOps & Version Control",
    skills: ["AWS", "Docker", "Hugging Face Spaces", "Vercel","Git", "GitHub", "CI/CD"]
  }
];
