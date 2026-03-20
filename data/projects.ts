export type ProjectEntry = {
  title: string;
  description: string;
  status: "Live" | "In Progress" | "Research";
  link: string;
  featured?: boolean;
};

export const projects: ProjectEntry[] = [
  {
    title: "Pebbs Index",
    description:
      "A searchable index for technical assets, project references, and internal knowledge artifacts with an emphasis on clarity and speed.",
    status: "Live",
    link: "https://example.com/pebbs-index",
    featured: true
  },
  {
    title: "Pebbs Lab Notes",
    description:
      "A publishing workflow for lightweight experiments, working notes, and research outputs across product and engineering topics.",
    status: "In Progress",
    link: "https://example.com/pebbs-lab-notes",
    featured: true
  },
  {
    title: "Pebbs Methods",
    description:
      "A framework for turning exploratory research and client discovery into structured implementation plans.",
    status: "Research",
    link: "https://example.com/pebbs-methods",
    featured: true
  },
  {
    title: "Pebbs Console",
    description:
      "A minimal operational dashboard for checking activity, milestones, and release readiness across products.",
    status: "In Progress",
    link: "https://example.com/pebbs-console"
  }
];
