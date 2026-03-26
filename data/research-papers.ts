export type ResearchPaperEntry = {
  filename: string;
  title?: string;
  date?: string;
  summary?: string;
};

// Optional paper details keyed by filename, but stored as a simple list so it is
// easier to maintain as the library grows.
export const researchPapers: ResearchPaperEntry[] = [
  {
    filename: "Sunlight_and_Shade_with_Pebbs_logo.pdf",
    title: "Aspect - Preliminary Research into Development of an App for Homebuyers",
    summary:
      "Preliminary research for Aspect, a proposed app for homebuyers that would show how sunlight and shade move across a property throughout the day. The aim is to help buyers understand light levels, orientation, and how outdoor and indoor spaces are likely to feel at different times before making a purchase decision."
  }
];
