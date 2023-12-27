'use client';

import Axios from '@/services/configAxios';
import URLS from '@/services/urls';
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    Axios.get(URLS.landing);
  }, []);

  return <>this page is for test</>;
};

export default Index;
