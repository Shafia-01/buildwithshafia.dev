export interface ConnectionNode {
  label: string;
  date?: string;
  subImpacts: string[];
}

export interface NetworkConnection {
  id: string;
  label: string;
  date: string;
  connections: ConnectionNode[];
}

export const communityNetwork: NetworkConnection[] = [
  {
    id: "gdg",
    label: "Google Developer Groups on Campus, Jamia Hamdard",
    date: "Jan 2024 – Aug 2025",
    connections: [
      {
        label: "PR & Social Media Associate",
        date: "Jan 2024 – Sep 2024",
        subImpacts: [
          "Boosted Instagram engagement by 50% through compelling content and campaigns.",
          "Coordinated cross-functional execution of digital strategies aligned with 15+ workshops/events per year."
        ]
      },
      {
        label: "Social Media Manager",
        date: "Sep 2024 – Aug 2025",
        subImpacts: [
          "Led a 10-member social media team, revamping the organization's social media presence and executing data-driven content strategies.",
          "Drove 85% growth in digital reach and 40% higher content efficiency.",
          "Secured 5+ new industry partnerships."
        ]
      }
    ]
  },
  {
    id: "ieee",
    label: "IEEE Jamia Hamdard Student Branch",
    date: "Aug 2023 – Jul 2025",
    connections: [
      {
        label: "Design & Creative Member / Core Volunteer / Event Host & Coordinator",
        subImpacts: [
          "Designed 10+ visual assets including event posters, invitations, and the IEEE JHSB Annual Magazine cover.",
          "Hosted 5+ flagship events including Think Tank Trivia (Technozova 4.0) and Hack-IEEE-thon RPA Bootcamp.",
          "Contributed to 25+ flagship IEEE events impacting 700+ participants, boosting engagement and branch visibility by 40% and event participation by 30% through cross-functional coordination."
        ]
      }
    ]
  },
  {
    id: "placement-cell",
    label: "Placement Cell, Jamia Hamdard",
    date: "Mar 2024 – May 2025",
    connections: [
      {
        label: "Student Coordinator",
        subImpacts: [
          "Facilitated connections between 200+ students and industry recruiters.",
          "Coordinated placement activities and campus recruitment scheduling with cell leadership."
        ]
      }
    ]
  },
  {
    id: "enord",
    label: "ENORD",
    date: "Jan 2024",
    connections: [
      {
        label: "Product Launch & Event Assistant",
        subImpacts: [
          "Coordinated ENORD's DRONE DAY aerospace product launch, managing pre-event logistics for 150+ participants with zero operational delays.",
          "Analyzed post-event attendee feedback and engagement metrics to inform future product launches and marketing strategies."
        ]
      }
    ]
  }
];

export const communityStats = [
  { metric: "85%", label: "Digital reach growth (GDG)" },
  { metric: "40%", label: "Content efficiency lift (GDG)" },
  { metric: "5+", label: "New industry partnerships (GDG)" },
  { metric: "30%", label: "Event participation lift (IEEE)" },
  { metric: "700+", label: "Participants reached (IEEE)" },
  { metric: "25+", label: "Flagship events contribution (IEEE)" }
];
