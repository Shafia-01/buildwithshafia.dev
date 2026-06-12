export interface ImpactNode {
  label: string;
  subImpacts?: string[];
}

export interface NetworkConnection {
  id: string;
  label: string;
  connections: ImpactNode[];
}

export const communityNetwork: NetworkConnection[] = [
  {
    id: "gdg",
    label: "Google Developer Groups (GDG)",
    connections: [
      {
        label: "PR & Social Media Associate",
        subImpacts: [
          "Developed core outreach strategies and managed content releases.",
          "Fostered collaboration between local developer chapters."
        ]
      },
      {
        label: "Social Media Manager",
        subImpacts: [
          "Led a 5-person editorial volunteer group.",
          "Drove a 65% increase in community reach and 40% rise in active event engagement."
        ]
      }
    ]
  },
  {
    id: "ieee",
    label: "IEEE Student Branch",
    connections: [
      {
        label: "Student Coordinator",
        subImpacts: [
          "Organized 12+ technical hackathons, coding workshops, and guest lectures.",
          "Secured engagement from 250+ active student developers."
        ]
      }
    ]
  },
  {
    id: "placement-cell",
    label: "Placement Cell Co-lead",
    connections: [
      {
        label: "Outreach & Student Coordinator",
        subImpacts: [
          "Coordinated recruitment drives with tech firms, aligning training resources.",
          "Boosted student event participation rates by 30%."
        ]
      }
    ]
  },
  {
    id: "enord",
    label: "ENORD Robotics Collaboration",
    connections: [
      {
        label: "Tech Consultant / Contributor",
        subImpacts: [
          "Assisted with integration tests on embedded boards.",
          "Designed data-feed monitoring utilities to log sensor anomalies."
        ]
      }
    ]
  }
];

export const communityStats = [
  { metric: "65%", label: "Reach growth" },
  { metric: "40%", label: "Engagement lift" },
  { metric: "30%", label: "Participation lift" },
  { metric: "700+", label: "Developer reach" }
];
