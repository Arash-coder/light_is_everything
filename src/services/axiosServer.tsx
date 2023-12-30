// config for axios for posting datas to the apis

import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';
import URLS from './urls';
import { cookies } from 'next/headers';

////constants////
const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
////constants////

const Axios = axios.create({
  baseURL: BASEURL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    mode: 'no-cors'
  }
  // timeout: 5000,
  // signal: AbortSignal.timeout(5000)
});

Axios.interceptors.request.use(
  (config) => {
    const cookieStore = cookies();
    const token = cookieStore.get('access');
    // console.log('token', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token.value}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const cookieStore = cookies();
    const refresh = cookieStore.get('refresh');
    const original = err.config;
    const status = err.response ? err.response.status : null;
    if (status === 401) {
      deleteCookie('access');

      try {
        const res = await axios.post(
          process.env.NEXT_PUBLIC_BASE_URL + URLS.auth.refresh,
          {
            refresh: refresh?.value
          }
        );
        cookieStore.set('access', res.data.access);
        return await Axios(original);
      } catch (error) {
        console.log('error', error);
        cookieStore.delete('access');
        cookieStore.delete('refresh');
        return Promise.reject(error);
      }
    }
    return Promise.resolve(err);
  }
);

export default Axios;
