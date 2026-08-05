export interface SkillGroup {
  id: string;
  title: string;
  skills: string[];
}

export const skillEcosystem: SkillGroup[] = [
  {
    id: "languages",
    title: "Languages",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"]
  },
  {
    id: "ai-ml-genai",
    title: "AI/ML & GenerativeAI",
    skills: [
      "LLMs",
      "Agentic AI",
      "RAG",
      "Prompt Engineering",
      "NLP",
      "Computer Vision",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "PyTorch",
      "FAISS",
      "Scikit-learn",
      "OpenCV",
      "NLTK"   
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    skills: ["FastAPI", "React", "Node.js", "REST APIs", "API Integration", "Streamlit"]
  },
  {
    id: "data-databases",
    title: "Data & Databases",
    skills: ["NumPy", "Pandas", "Matplotlib", "Plotly", "MySQL", "SQLite","MongoDB"]
  },
  {
    id: "cloud-devops-tools",
    title: "Cloud, DevOps & Tools",
    skills: ["AWS", "Docker","Git", "GitHub", "CI/CD"]
  }
];
