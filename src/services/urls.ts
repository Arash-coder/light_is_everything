const URLS = {
  landing: '/landing/info',
  auth: {
    sign_up: '/users/signup/',
    sign_in: '/users/login/',
    reset_password: '/users/reset-password/',
    refresh: '/users/login/refresh/',
    me: '/users/me/',
    careers: '/users/careers/',
    update: '/users/update/',
    password: '/users/update/password/'
  },
  members: (page: number, size: number) =>
    `/users/?page=${page}&page_size=${size}`,
  magazines: (page: number, size: number) =>
    `/magazines/?page=${page}&page_size=${size}`,
  userprofile: (username: string) => `/users/profile/${username}/`,
  userPosts: (username: string) => `/posts/${username}/`,
  gallery: {
    create_post: '/panel/posts/add/',
    get_posts: '/panel/posts/'
  },
  search_user: (name: string) => `/users/?search=${name}`
};

export default URLS;
