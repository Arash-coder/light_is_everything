'use client';

import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';

const useAuthClient = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const token = getCookie('access');

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [token]);

  return { isLoggedIn, token };
};

export default useAuthClient;
