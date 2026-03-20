export type PaperMetadata = {
  title?: string;
  date?: string;
};

// Optional overrides keyed by the exact PDF filename.
export const paperMetadata: Record<string, PaperMetadata> = {
  "Sunlight_and_Shade_with_Pebbs_logo.pdf": {
    title: "Sunlight and Shade with Pebbs Logo"
  }
};
