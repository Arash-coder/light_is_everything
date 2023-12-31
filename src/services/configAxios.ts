// config for axios for posting datas to the apis

import { getCookie, setCookie, deleteCookie } from 'cookies-next';
import axios from 'axios';
import URLS from './urls';
import { redirect } from 'next/navigation';
import { toast } from 'react-toastify';

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
    const token = getCookie('access');
    // console.log('token', token);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const original = err.config;
    const status = err.response ? err.response.status : null;
    const errors = Object.keys(err.response.data);

    errors.map((error) => {
      toast.error(err.response.data[error][0]);
    });
    if (
      err.response.data.detail ===
      'No active account found with the given credentials'
    ) {
      return;
    }

    if (status === 401) {
      deleteCookie('access');

      try {
        const res = await axios.post(
          process.env.NEXT_PUBLIC_BASE_URL + URLS.auth.refresh,
          {
            refresh: getCookie('refresh')
          }
        );
        console.log('res', res);
        setCookie('access', res.data.access);
        return await Axios(original);
      } catch (error) {
        deleteCookie('access');
        deleteCookie('refresh');
        window.location.reload();
        return Promise.reject(error);
      }
    }
    return Promise.resolve(err);
  }
);

export default Axios;
