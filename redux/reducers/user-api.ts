import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/user/${id}`,
    }),

    token: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: `/users/login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => ({
        url: `/users/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useTokenMutation, useGetUserQuery, useRegisterMutation } =
  authApi;
