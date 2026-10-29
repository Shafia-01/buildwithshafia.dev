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
    id: "ai-ml",
    title: "AI/ML",
    skills: [
      "Large Language Models (LLMs)",
      "Agentic AI",
      "Generative AI",
      "Prompt Engineering",
      "NLP",
      "Computer Vision",
      "RAG",
      "LangChain",
      "LangGraph",
      "Hugging Face Transformers",
      "PyTorch",
      "Scikit-learn",   
    ]
  },
  {
    id: "software-engineering",
    title: "Software Engineering",
    skills: ["FastAPI", "React", "Node.js", "REST APIs", "Streamlit"]
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
