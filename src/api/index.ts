import { RootState } from '@/redux/store';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const lumosAPI = createApi({
  reducerPath: 'noxAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as RootState).auth.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    }
  }),
  endpoints: (builder) => ({
    landingInfo: builder.query({
      query: () => `/landing/info/`
    }),
    usersMe: builder.query<any, string>({
      query: () => `/users/me/`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
