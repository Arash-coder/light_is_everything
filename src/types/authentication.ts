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
