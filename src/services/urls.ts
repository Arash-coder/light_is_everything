const URLS = {
  landing: '/landing/info',
  auth: {
    sign_up: '/users/signup/',
    sign_in: '/users/login/',
    refresh: '/users/login/refresh/',
    me: '/users/me/',
    careers: '/users/careers/',
    update: '/users/update/',
    password: '/users/update/password/'
  },
  members: (page: number, size: number) =>
    `/users/?page=${page}&page_size=${size}`,
  userprofile: (username: string) => `/users/profile/${username}/`,
  userPosts: (username: string) => `/posts/${username}/`,
  gallery: {
    create_post: '/panel/posts/',
    get_posts: '/panel/posts/'
  }
};

export default URLS;
