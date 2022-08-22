import { createApi } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../../types/category.type";
import { IProducts } from "../../types/product.type";

import { baseQuery } from "./api";

interface IProduct {
  error: boolean;
  products: IProducts[] | undefined;
  success: boolean;
}

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
    getProducts: builder.query<IProduct, void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery, useGetProductsQuery } = productApi;
