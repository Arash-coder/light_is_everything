export type event = {
  title: string;
  description: string;
  display_date: string;
  location: string;
  image_url: string;
};

export type quote = {
  text: string;
};

export type user_review = {
  avatar_image_url: string;
  full_name: string;
  text: string;
};

export type metric_counter = {
  title: string;
  count: string;
};

export type landingData = {
  events: event[];
  quotes: quote[];
  user_reviews: user_review[];
  metric_counters: metric_counter[];
};
