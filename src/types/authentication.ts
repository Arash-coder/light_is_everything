export type signupInputs = {
  first_name: string;
  last_name: string;
  password: string;
  email: string;
  mobile: string;
  consfirm_password: string;
  username: string;
  confirm_password: string;
};

export type signinInputs = {
  username: string;
  password: string;
};

export type responseLogin = {
  access: string;
  refresh: string;
};

export type career = {
  id: number;
  title: string;
};

export type updateProfileInputs = {
  first_name: string;
  last_name: string;
  mobile: string;
  email: string;
  bio: string;
  carrier: number;
  username: string;
};

export type updatePasswordInputs = {
  password: string;
  confirm_password: string;
};

export type updateSocialMediaInputs = {
  telegram: string;
  instagram: string;
  linkedin: string;
  x: string;
};
