import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["token"],
  endpoints: (builder) => ({
    token: builder.mutation({
      query: (body: { email: string; password: string }) => ({
        url: `/api/users/login`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useTokenMutation } = authApi;
