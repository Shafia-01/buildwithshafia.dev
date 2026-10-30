export interface Milestone {
  id: string;
  date: string;
  title: string;
  organization: string;
  role?: string;
  description: string;
  category: "education" | "experience" | "internship" | "extra-curricular" | "milestone";
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
    date: "Sep 2022 – Jun 2026",
    title: "Bachelor of Technology in Computer Science and Engineering",
    organization: "Jamia Hamdard",
    category: "education",
    description: "Relevant coursework: Data Structures & Algorithms, Operating Systems, Object Oriented Programming, Database Management Systems, Computer Networks"
  },
  {
    id: "ieee-jhsb",
    date: "Aug 2023 – Jul 2025",
    title: "Student Coordinator",
    organization: "IEEE Jamia Hamdard Student Branch",
    category: "experience",
    description: "Contributed to 25+ flagship IEEE events impacting 700+ participants, boosting engagement and branch visibility by 40% and event participation by 30% through design support, hosting, and cross-functional coordination."
  },
  {
    id: "enord",
    date: "Jan 2024",
    title: "Product Launch & Event Assistant",
    organization: "enord",
    category: "extra-curricular",
    description: "Coordinated pre-event logistics for DRONE DAY, an aerospace product launch serving 150+ participants, and analyzed attendee feedback to inform future product launches and marketing strategies."
  },
  {
    id: "gdg-pr-associate",
    date: "Jan 2024 – Sep 2024",
    title: "PR & Social Media Associate",
    organization: "Google Developer Groups on Campus, Jamia Hamdard",
    category: "experience",
    description: "Increased social media engagement by 50% through creative content creation and targeted campaigns; promoted 15+ annual workshops and events, strengthening community participation and visibility."
  },
  {
    id: "placement-cell",
    date: "Mar 2024 – May 2025",
    title: "Student Coordinator",
    organization: "The Department of Placement and Alumni Affairs, Jamia Hamdard",
    category: "experience",
    description: "Facilitated industry connections for 200+ students and supported campus recruitment coordination with Placement Cell leadership."
  },
  {
    id: "gdg-social-media-manager",
    date: "Sep 2024 – Aug 2025",
    title: "Social Media Manager",
    organization: "Google Developer Groups on Campus, Jamia Hamdard",
    category: "experience",
    description: "Led a 10-member social media team, revamping the organization's social media presence and executing data-driven content strategies, driving 65% growth in digital reach, 40% higher content efficiency, and 5+ new industry partnerships."
  },
  {
    id: "packetwatch",
    date: "Dec 2024",
    title: "PacketWatch",
    organization: "Independent Project",
    category: "milestone",
    description: "Built a Scapy and Random Forest threat detector extracting 27 flow features from 20-second live Wi-Fi captures, with sub-second inference on 100-row CSV logs via a Streamlit dashboard."
  },
  {
    id: "dssywlc",
    date: "Feb 2025",
    title: "Participant",
    organization: "DSSYWLC'24, IEEE Delhi Section SAC",
    category: "extra-curricular",
    description: "Participated in the Delhi Section Students' Young Professionals, Women in Engineering, Life Members' Congress (DSSYWLC-24), attending technical sessions, workshops, and interactive activities focused on technology and professional development."
  },
  {
    id: "google",
    date: "March 2025",
    title: "Participant",
    organization: "Google Solutions Challenge 2025",
    category: "extra-curricular",
    description: ""
  },
  {
    id: "icidssd",
    date: "April 2025",
    title: "Student Volunteer",
    organization: "ICIDSSD'25, Jamia Hamdard",
    category: "extra-curricular",
    description: "Coordinated conference operations and hosted one track at the 5th International Conference on ICT for Digital, Smart and Sustainable Development (ICIDSSD ’25), supporting session execution, scripts, and award arrangements with a 50-member team at an 8-track, 2-day conference with 100+ participants."
  },
  {
    id: "mediscan",
    date: "May 2025",
    title: "MediScan",
    organization: "Independent Project",
    category: "milestone",
    description: "Developed a medical vs. non-medical image classifier by fine-tuning ResNet18 in PyTorch with staged transfer learning and early stopping, achieving 100% validation accuracy (101/101), with Streamlit and CLI interfaces at ~52 ms CPU latency."
  },
  {
    id: "cartverse-shipped",
    date: "June 2025 – July 2025",
    title: "CartVerse",
    organization: "Walmart Sparkathon 2025",
    category: "milestone",
    description: "Built a Walmart shopping assistant with 2 independent pipelines, mapping 26 emotional states to categories via a 3-tier sentiment fallback and generating frequency-based carts for 10 mock users using cached SerpAPI search."
  },
  {
    id: "adobe",
    date: "July 2025",
    title: "Participant",
    organization: "Adobe India Hackathon 2025",
    category: "extra-curricular",
    description: ""
  },
  {
    id: "edunet-internship",
    date: "Aug 2025 – Sep 2025",
    title: "Front-End Web Developer Intern",
    organization: "Edunet Foundation",
    category: "internship",
    description: "Developed and deployed 'CineScope', a full-stack movie platform (Node.js, Express, OMDb API) with 8 features, a server-side API-key proxy, 6 validation checks, 3 recovery mechanisms, 5 production fixes."
  },
  {
    id: "cyart-internship",
    date: "Sep 2025 – Dec 2025",
    title: "AI Engineer Intern",
    organization: "CyArt",
    category: "internship",
    description: "Engineered a concurrent Python news analytics pipeline processing 494+ headlines from 20 RSS sources, improving ingestion performance by 20%, achieving 19 headlines/sec throughput, and generating 1,877+ sentiment classifications via 3 NLP engines."
  },
  {
    id: "learnify-ai-flagship",
    date: "Feb 2026 – April 2026",
    title: "Learnify AI - Flagship Build",
    organization: "Independent Project",
    category: "milestone",
    highlight: true,
    description: ""
  },
  {
    id: "graduation",
    date: "June 2026",
    title: "Graduation - B.Tech Computer Science and Engineering",
    organization: "Jamia Hamdard",
    category: "education",
    description: "Completed | CGPA 8.55/10"
  },
  {
    id: "stratix-shipped",
    date: "Jul 2026 – Sep 2026",
    title: "Stratix",
    organization: "Independent Project",
    category: "milestone",
    description: "Built an agentic AI-powered autonomous SEO intelligence platform: a 9-node LangGraph pipeline with a ReAct agent, 5 tools, 2 human approval gates, confidence scoring, an LLM critic, and LLM-as-judge evals, validated by 238 tests."
  }
];
