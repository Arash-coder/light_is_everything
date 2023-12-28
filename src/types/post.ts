export type post = {
  title: string;
  caption: string;
  status: 'P' | 'R' | 'A';
  display_created_at: string;
  compressed_content_url: string;
};

export type postInPublic = {
  title: string;
  content_url: string;
  caption: string;
  prepared_tags: string[];
  created_at: string;
};
