import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../contracts/category.type";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory, void>({
      query: () => ({
        url: `/api/category`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = productApi;
