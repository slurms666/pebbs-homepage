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
    filename: "Sunlight_and_Shade.pdf",
    title: "Aspect - Preliminary Research into Development of an App for Homebuyers",
    summary:
      "Preliminary research for Aspect, a proposed app for homebuyers that would show how sunlight and shade move across a property throughout the day. The aim is to help buyers understand light levels, orientation, and how outdoor and indoor spaces are likely to feel at different times before making a purchase decision."
  },
  {
    filename: "European Roulette Tables in Online and Live Casinos - pebbs.pdf",
    title: "European Roulette Tables in Online and Live Casinos",
    summary:
      "A research paper examining how European roulette tables are presented and structured across online and live casino environments. The document is intended to support clearer product thinking, interface design, and analysis around roulette-focused tools and data workflows."
  },
  {
    filename: "How Pebbs.app services can help small businesses in Liverpool.pdf",
    title: "How Pebbs.app Services Can Help Small Businesses in Liverpool",
    summary:
      "A practical paper outlining how websites, software, automation, booking systems, CRM tools, and related digital services can help small businesses in Liverpool improve professionalism, reduce admin, handle enquiries more clearly, and support growth."
  }
];
