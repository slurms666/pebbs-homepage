export type DesignMetadata = {
  title?: string;
  date?: string;
  summary?: string;
};

// Optional overrides keyed by the exact design filename.
export const designMetadata: Record<string, DesignMetadata> = {
  "tshirt-pod-vegan-advert.jpg": {
    title: "Vegan Feminist Campaign Advert"
  },
  "tshirt-activist-rally.jpg": {
    title: "Activist Rally Shirt"
  },
  "tshirt-customer-wear.jpg": {
    title: "Customer Wear Example"
  },
  "tshirt-sarcasm-calories.jpg": {
    title: "Sarcasm Calories Design"
  },
  "tshirt-pod-classic.jpg": {
    title: "Print on Demand Mockup"
  },
  "tshirt-pod-vegan.jpg": {
    title: "Vegan Feminist Shirt Mockup"
  },
  "noughtydog1.mp4": {
    title: "Noughty Dog Product Video 1",
    summary: "Short product clip created for a private print-on-demand client."
  },
  "noughtydog2.mp4": {
    title: "Noughty Dog Product Video 2",
    summary: "Additional product clip created for a private print-on-demand client."
  }
};
