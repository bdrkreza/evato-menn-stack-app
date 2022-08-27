import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./api";
interface IUser {
  _id: string;
  name: string;
  email: string;
  cart: string;
  role: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQuery,
  tagTypes: ["users"],
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => "/users/profile",
    }),
    getUsers: builder.query({ query: () => `/users/profile` }),
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

export const {
  useTokenMutation,
  useGetUserQuery,
  useRegisterMutation,
  useGetUsersQuery,
} = authApi;
