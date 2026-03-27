export type DesignGroupDefinition = {
  slug: string;
  title: string;
  client?: string;
  description: string;
  date?: string;
  images: string[];
};

// Group related design files together when you want a single entry with one
// description and multiple images.
export const designGroups: DesignGroupDefinition[] = [
  {
    slug: "pitchfluence-logo",
    title: "Pitchfluence Logo",
    client: "Pitchfluence",
    description:
      "Two logo options created for Pitchfluence, an app in development in the influencer marketing space, shared with permission.",
    images: ["pitch1.png", "pitch2.png"]
  },
  {
    slug: "print-on-demand-design-dog",
    title: "Private Print on Demand Client",
    client: "Private",
    description:
      "One of many characters we created for a client's POD campaign and an image for an ad they were creating in-house, shared with permission.",
    images: ["pod1.jpg", "pod2.png"]
  },
  {
    slug: "private-client-logos",
    title: "Private Clients",
    client: "Private",
    description:
      "A small selection of logo designs we created for private clients, shared with permission.",
    images: ["kpc1.jpg", "kpc2.jpg", "spc1.jpg", "spc2.jpg", "fb.jpg"]
  }
];
