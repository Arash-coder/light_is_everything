export type member = {
  full_name: string;
  email: string;
  avatar_image_url: string;
  username: string;
  biography: string;
  instagram_url: string;
  twitter_url: string;
  linkedin_url: string;
  telegram_url: string;
  career_title: string;
};

export type usersResponse = {
  results: member[];
  count: number;
};
