import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getTokenInLocalStorage } from '../../utils/token';

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
      transformErrorResponse: transformErrorQueryToken,
    }),
    updateUser: builder.mutation({
      query: mutationUpdateUser,
      transformErrorResponse: transformErrorUpdateUser,
    })
  }),
});

//query and mutation
function queryToken(credentials) {
  return {
    url: 'user/login',
    method: 'POST',
    body: credentials,
  };
}

function queryUserInfo() {
  return {
    url: 'user/profile',
    method: 'POST',
  };
}

function mutationUpdateUser(user) {
  return {
    url: 'user/profile',
    method: 'PUT',
    body: user,
  };
}

// transform response 
function transformResponseToken(response) {
  return response.body.token;
}

function transformResponseUserInfo(response) {
  return {
    firstName: response.body.firstName,
    lastName: response.body.lastName,
  };
}

// transform error
function transformErrorQueryToken(response) {
  if(response.status === 400) {
    response.errorKey = 'userNotFound';
  } else {
    response.errorKey = 'internalServer';
  }
  return response;
}

function transformErrorUpdateUser(response) {
  if(response.status === 400) {
    response.errorKey = 'invalidFields';
  } else {
    response.errorKey = 'internalServerError';
  }

  return response;
}

export const { useGetUserInfoQuery, useLazyGetTokenQuery, useUpdateUserMutation } = apiSlice;
