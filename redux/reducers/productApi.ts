import { createApi } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../../contracts/category.type";
import { baseQuery } from "./api";

// Define a service using a base URL and expected endpoints
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQuery,
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getCategory: builder.query<ICategory, void>({
      query: () => ({
        url: `/products/category`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery } = productApi;
