export interface Contact {
  headline: string;
  recruiterCta: string;
  collaborationCta: string;
  hiringCta: string;
  channels: {
    email: string;
    linkedin: string;
    github: string;
    resumePath: string;
  };
  statusLine: string;
}

export const contact: Contact = {
  headline: "Let's build something meaningful.",
  recruiterCta: "Available for AI Engineer / GenAI / ML / Software Engineering roles. India-based, open to remote and relocation. Email or LinkedIn — whichever you check first.",
  collaborationCta: "Working on something AI-related and want a second engineer who can take it from prototype to production? Let's talk.",
  hiringCta: "Hiring for AI Engineer, GenAI Engineer, ML Engineer, or Software Engineer roles? Five shipped products and two engineering internships say I can contribute from day one.",
  channels: {
    email: "shafiaameeruddin637@gmail.com",
    linkedin: "https://linkedin.com/in/shafia-ameeruddin01",
    github: "https://github.com/Shafia-01",
    resumePath: "/resume/Shafia_Ameeruddin_AI_Engineer_Resume.pdf"
  },
  statusLine: "Open to AI Engineering, GenAI Engineering, Machine Learning Engineering, and Software Engineering opportunities. India · Open to Relocation · Open to Remote."
};
