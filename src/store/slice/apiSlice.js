import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenInLocalStorage } from './authSlice';

export const apiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/api/v1/',
    prepareHeaders: (headers) => {
      const token = getTokenInLocalStorage();
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUserInfo: builder.query({
      query: queryUserInfo,
      transformResponse: transformResponseUserInfo,
    }),
    getToken: builder.query({
      query: queryToken,
      transformResponse: transformResponseToken,
    }),
  }),
});

function queryToken(credentials) {
  return {
    url: 'user/login',
    method: 'POST',
    body: credentials,
  };
}

function transformResponseToken(response) {
  return response.body.token;
}

function queryUserInfo() {
  return {
    url: 'user/profile',
    method: 'POST',
  };
}

function transformResponseUserInfo(response) {
  return {
    firstName: response.body.firstName,
    lastName: response.body.lastName,
  };
}

export const { useGetUserInfoQuery, useLazyGetTokenQuery } = apiSlice;
