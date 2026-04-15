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
  }
};
