export type magazine = {
  title: string;
  description: string;
  download_url: string;
  cover_url: string;
};

export type magazinesResponse = {
  results: magazine[];
  count: number;
};
