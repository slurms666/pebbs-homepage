export type DesignMetadata = {
  title?: string;
  date?: string;
  summary?: string;
};

// Optional overrides keyed by the exact design filename.
export const designMetadata: Record<string, DesignMetadata> = {};
