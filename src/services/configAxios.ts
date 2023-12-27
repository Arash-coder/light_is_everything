// config for axios for posting datas to the apis

import { getCookie } from 'cookies-next';
import axios from 'axios';

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
});

Axios.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = getCookie('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`; // for Spring Boot back-end
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default Axios;
