export type PaperMetadata = {
  title?: string;
  date?: string;
};

// Optional overrides keyed by the exact PDF filename.
export const paperMetadata: Record<string, PaperMetadata> = {};
