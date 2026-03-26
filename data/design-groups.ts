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
export const designGroups: DesignGroupDefinition[] = [];
