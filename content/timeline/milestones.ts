export interface Milestone {
  id: string;
  date: string;
  title: string;
  organization: string;
  role?: string;
  description: string;
  category: "education" | "experience" | "internship" | "achievement" | "milestone";
  highlight?: boolean;
  promotionTo?: {
    title: string;
    description: string;
  };
}

export const milestones: Milestone[] = [
  {
    id: "education-btech",
    date: "Aug 2020 — Jun 2024",
    title: "B.Tech in Computer Science & Engineering",
    organization: "Jamia Hamdard",
    category: "education",
    description: "Built strong foundations in data structures, algorithms, network architecture, and databases. Graduated with a focus on intelligent systems."
  },
  {
    id: "ieee-coordinator",
    date: "Sep 2021 — Jul 2023",
    title: "IEEE Student Coordinator",
    organization: "IEEE Student Branch",
    category: "achievement",
    description: "Orchestrated tech workshops, hackathons, and guest lectures. Bridge builder between academic research and hands-on coding communities."
  },
  {
    id: "gdg-associate",
    date: "Oct 2022 — Jun 2023",
    title: "GDG PR & Social Media Associate",
    organization: "Google Developer Groups (GDG)",
    role: "PR & Social Media Associate",
    category: "experience",
    description: "Managed outreach campaigns and technical writing publications, expanding local developer engagement by 35%.",
    promotionTo: {
      title: "GDG Social Media Manager",
      description: "Promoted to lead the community outreach, managing a cross-functional team of contributors and increasing engagement metrics by 40%."
    }
  },
  {
    id: "edunet-internship",
    date: "Jun 2023 — Aug 2023",
    title: "AI-ML Engineering Intern",
    organization: "Edunet Foundation",
    category: "internship",
    description: "Shipped the core search indexer for CineScope, debugging Express proxy layers and OMDb search response validators."
  },
  {
    id: "cyart-internship",
    date: "Sep 2023 — Dec 2023",
    title: "AI Systems Engineering Intern",
    organization: "CyArt Tech",
    category: "internship",
    description: "Shipped three core engineering deliverables: 1) RSS-based News Sentiment Pipeline, 2) Multi-camera Surveillance integrity checks, 3) XTTS-v2 Voice Cloning benchmarks."
  },
  {
    id: "walmart-innovation",
    date: "Jan 2024",
    title: "Walmart Innovation Suite",
    organization: "Walmart Hackathon",
    category: "achievement",
    description: "Shipped FeelCart, a diptych commerce tool linking DeepFace emotional states with dynamic cart recommendation cycles."
  },
  {
    id: "keylytics-launch",
    date: "Mar 2024",
    title: "KeyLytics Shipped",
    organization: "Independent Project",
    category: "milestone",
    description: "Launched an autonomous agentic market intelligence platform using LangGraph models to automate corporate competitor reporting."
  },
  {
    id: "learnify-ai",
    date: "May 2024",
    title: "Learnify AI Flagship Build",
    organization: "Independent Project",
    category: "milestone",
    highlight: true,
    description: "Engineered a multimodal AI tutor with live WebSocket emotion tracking, 3x FAISS vector retrieval speedups, and dynamic Groq/Gemini hot-swapping."
  },
  {
    id: "graduation",
    date: "Jun 2024",
    title: "Graduation — B.Tech CSE",
    organization: "Jamia Hamdard University",
    category: "education",
    description: "Successfully graduated. Awarded degree with honors in computer science."
  }
];
