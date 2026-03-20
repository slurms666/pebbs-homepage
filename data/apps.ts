export type AppEntry = {
  title: string;
  description: string;
  link: string;
};

export const apps: AppEntry[] = [
  {
    title: "Pebbs Atlas",
    description:
      "A compact internal-style knowledge interface for navigating product notes, references, and linked resources.",
    link: "https://example.com/pebbs-atlas"
  },
  {
    title: "Pebbs Signals",
    description:
      "A monitoring and reporting surface for turning operational events into a clear weekly view.",
    link: "https://example.com/pebbs-signals"
  },
  {
    title: "Pebbs Studio",
    description:
      "A rapid prototyping environment for testing product concepts, workflows, and lightweight AI-assisted tools.",
    link: "https://example.com/pebbs-studio"
  }
];
