// config for fetch for getting datas form apis

import { cookies } from 'next/headers';

////constants////
const BASEURL = process.env.NEXT_PUBLIC_BASE_URL;
////constants////

export const Fetch = async (url: string, method = 'GET', data?: any) => {
  const cookie = cookies();
  const token = cookie.get('token');

  const headers: any = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Headers': '*',
    mode: 'no-cors',
    Accept: 'application/json'
  };

  if (token) headers.Authorization = `Bearer ${token.value}`;

  try {
    const response = await fetch(
      `${BASEURL}${url}`,
      method === 'GET'
        ? {
            headers: {
              ...headers
            },
            method: method
          }
        : {
            headers: {
              ...headers
            },
            method: method,
            body: JSON.stringify(data)
          }
    );

    if (!response.ok) {
      const Error_data = await response.json();
      console.log('Error_data', Error_data);
      throw new Error(
        Error_data.message ||
          Error_data.erros.message ||
          'خطا در دریافت اطلاعات'
      );
    }
    const data_response = await response.json();
    // console.log("data_response", data_response);
    // if (!data_response.status) {
    //   throw new Error(
    //     data_response?.message ||
    //       data_response.erros?.message ||
    //       "خطا در دریافت اطلاعات"
    //   );
    // }

    return data_response;
  } catch (error: any) {
    console.log(error.message ?? 'خطا در دریافت اطلاعات');
    return {
      text1: error.message,
      text2: error
    };
  }
};

// config for axios for posting datas to the apis

// import { getCookie } from 'cookies-next';
// import axios from 'axios';

// export const Axios = axios.create({
//   baseURL: BASEURL,
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': '*',
//     'Access-Control-Allow-Headers': '*',
//     mode: 'no-cors'
//   }
// });

// Axios.interceptors.request.use(
//   (config) => {
//     if (typeof window !== 'undefined') {
//       const token = getCookie('token');
//       if (token) {
//         config.headers.Authorization = `Bearer ${token}`; // for Spring Boot back-end
//       }
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );
