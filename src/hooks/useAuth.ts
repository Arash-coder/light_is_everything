import { cookies } from 'next/headers';

function useAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('access');

  return {
    isLogin: token?.value ? true : false,
    token: token?.value
  };
}

export default useAuth;
