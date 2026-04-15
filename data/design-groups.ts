export type DesignGroupDefinition = {
  slug: string;
  title: string;
  client?: string;
  description: string;
  date?: string;
  media: string[];
};

// Group related design files together when you want a single entry with one
// description and multiple media items.
export const designGroups: DesignGroupDefinition[] = [
  {
    slug: "pitchfluence-logo",
    title: "Pitchfluence Logo",
    client: "Pitchfluence",
    description:
      "Two logo options created for Pitchfluence, an app in development in the influencer marketing space, shared with permission.",
    media: ["pitch1.png", "pitch2.png"]
  },
  {
    slug: "print-on-demand-design-dog",
    title: "Private Print on Demand Client",
    client: "Private",
    description:
      "One of many characters we created for a client's POD campaign, plus supporting artwork and short product videos they were using in-house, shared with permission.",
    media: ["pod1.jpg", "pod2.png", "noughtydog1.mp4", "noughtydog2.mp4"]
  },
  {
    slug: "customer-t-shirt-designs",
    title: "Customer T-Shirt Designs",
    client: "Several customers",
    description:
      "A selection of t-shirt designs we created for several customers for different needs, from print on demand campaigns to activist rallies. These examples are published here with permission.",
    media: [
      "tshirt-pod-vegan-advert.jpg",
      "tshirt-activist-rally.jpg",
      "tshirt-customer-wear.jpg",
      "tshirt-sarcasm-calories.jpg",
      "tshirt-pod-classic.jpg",
      "tshirt-pod-vegan.jpg"
    ]
  },
  {
    slug: "private-client-logos",
    title: "Private Clients",
    client: "Private",
    description:
      "A small selection of logo designs we created for private clients, shared with permission.",
    media: ["kpc1.jpg", "kpc2.jpg", "spc1.jpg", "spc2.jpg", "fb.jpg"]
  }
];
