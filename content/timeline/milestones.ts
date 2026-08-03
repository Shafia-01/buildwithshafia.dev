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
    date: string;
    description: string;
  };
}

export const milestones: Milestone[] = [
  {
    id: "education-btech",
    date: "Sep 2022 – June 2026",
    title: "Bachelor of Technology in Computer Science and Engineering",
    organization: "Jamia Hamdard University",
    category: "education",
    description: "CGPA 8.55/10. Relevant coursework: Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management Systems."
  },
  {
    id: "ieee-jhsb",
    date: "Aug 2023 – Jul 2025",
    title: "Student Coordinator",
    organization: "IEEE Jamia Hamdard Student Branch",
    category: "achievement",
    description: "Contributed to 25+ flagship IEEE events impacting 700+ participants, boosting engagement and branch visibility by 40% and event participation by 30% through design support, hosting, and cross-functional coordination."
  },
  {
    id: "gdg-pr-associate",
    date: "Jan 2024 – Sep 2024",
    title: "PR & Social Media Associate",
    organization: "Google Developer Groups on Campus, Jamia Hamdard",
    category: "experience",
    description: "Boosted Instagram engagement by 50% through visually compelling, timely content and campaigns. Coordinated cross-functional execution of digital strategies aligned with 15+ workshops/events per year."
  },
  {
    id: "placement-cell",
    date: "Mar 2024 – May 2025",
    title: "Student Coordinator, Placement Cell",
    organization: "The Department of Placement and Alumni Affairs, Jamia Hamdard",
    category: "experience",
    description: "Facilitated connections between 200+ students and industry recruiters, enhancing placement opportunities through proactive outreach. Coordinated placement activities with cell heads and team members."
  },
  {
    id: "gdg-social-media-manager",
    date: "Sep 2024 – Aug 2025",
    title: "Social Media Manager",
    organization: "Google Developer Groups on Campus, Jamia Hamdard",
    category: "experience",
    description: "Led a 10-member social media team, revamping the organization's social media presence and executing data-driven content strategies, driving 85% growth in digital reach, 40% higher content efficiency, and 5+ new industry partnerships."
  },
  {
    id: "cartverse-shipped",
    date: "Feb 2025 – Mar 2025",
    title: "CartVerse Shipped",
    organization: "Independent Project",
    category: "milestone",
    description: "Dual-module AI shopping assistant (MoodCart + AutoCart) using NLP and SerpAPI, boosting recommendation relevance by 45% and reducing decision time by 55%."
  },
  {
    id: "edunet-internship",
    date: "Aug 2025 – Sep 2025",
    title: "Front-End Web Developer Intern",
    organization: "Edunet Foundation",
    category: "internship",
    description: "Developed and deployed CineScope, a full-stack movie discovery platform integrating the OMDb API with 8 user-facing features. Engineered a secure Express proxy with 6 validation checks, 3 recovery mechanisms, and resolved 5 production-critical issues."
  },
  {
    id: "cyart-internship",
    date: "Sep 2025 – Dec 2025",
    title: "AI Engineer Intern",
    organization: "CyArt Tech",
    category: "internship",
    description: "Engineered a concurrent Python news analytics pipeline processing 494+ headlines from 20 RSS sources (19 headlines/sec, 20% ingestion improvement, 1,877+ sentiment classifications via 3 NLP engines). Developed a real-time OpenCV surveillance system monitoring 4 concurrent camera streams at ~7.4 FPS with 2 motion-detection algorithms and 4 integrity checks. Researched and benchmarked XTTS-v2 and VALL-E-X through 15+ voice-cloning experiments, achieving 0.965 speaker similarity."
  },
  {
    id: "stratix-shipped",
    date: "Oct 2025 – Nov 2025",
    title: "Stratix",
    organization: "Independent Project",
    category: "milestone",
    description: "Agentic AI-powered SEO platform automating keyword and SERP analysis, cutting research time by 60%, improving accuracy by 35%, and scaling results to 50+ keywords per query."
  },
  {
    id: "learnify-ai-flagship",
    date: "Feb 2026 – April 2026",
    title: "Learnify AI - Flagship Build",
    organization: "Independent Project",
    category: "milestone",
    highlight: true,
    description: "Multimodal AI tutoring platform with hot-swappable multi-LLM orchestration (Gemini, Groq, Ollama), real-time DeepFace/OpenCV emotion detection, and a level-adaptive RAG pipeline delivering 3x faster contextual retrieval and a 40% personalization lift."
  },
  {
    id: "graduation",
    date: "June 2026",
    title: "Graduation - B.Tech Computer Science and Engineering",
    organization: "Jamia Hamdard University",
    category: "education",
    description: "Completed Bachelor of Technology in Computer Science and Engineering, CGPA 8.55/10."
  }
];
