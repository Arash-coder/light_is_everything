const URLS = {
  landing: '/landing/info',
  auth: {
    sign_up: '/users/signup/',
    sign_in: '/users/login/',
    refresh: '/users/login/refresh/',
    me: '/users/me/'
  },
  members: (page: number, size: number) =>
    `/users/?page=${page}&page_size=${size}`,
  userprofile: (username: string) => `/users/profile/${username}/`,
  userPosts: (username: string) => `/posts/${username}`
};

export default URLS;
