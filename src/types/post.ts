export type post = {
  title: string;
  caption: string;
  status: 'P' | 'R' | 'A';
  display_created_at: string;
  compressed_content_url: string;
};
