type MediaDetails = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectMedia =
  | (MediaDetails & { type: "image" })
  | (MediaDetails & { type: "video"; poster?: string });
