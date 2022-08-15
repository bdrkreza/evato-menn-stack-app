import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `/api/user/${id}`,
    }),

    token: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: `/api/users/login`,
        method: "POST",
        body,
      }),
    }),
    register: builder.mutation({
      query: (body: { name: string; email: string; password: string }) => ({
        url: `/api/users`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useTokenMutation, useGetUserQuery, useRegisterMutation } =
  authApi;
