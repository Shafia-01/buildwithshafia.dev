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
      "AI Agents",
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
    id: "data-cloud-devops",
    title: "Data, Cloud & DevOps",
    skills: ["NumPy", "Pandas", "Plotly", "Power BI", "MySQL", "MongoDB", "AWS", "Docker", "Hugging Face Spaces", "Git", "GitHub", "CI/CD"]
  },
  {
    id: "networking-security",
    title: "Networking & Security",
    skills: ["Scapy"]
  }
];
