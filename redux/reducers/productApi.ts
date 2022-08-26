import { createApi } from "@reduxjs/toolkit/query/react";
import { ICategory } from "../../types/category.type";
import { IProducts } from "../../types/product.type";

import { baseQuery } from "./api";

type TProducts = {
  error: boolean;
  products: IProducts[] | undefined;
  success: boolean;
};

type TProduct = {
  error: boolean;
  product: IProducts | undefined;
  success: boolean;
};

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
    getProducts: builder.query<TProducts, void>({
      query: () => ({
        url: `/products`,
        method: "GET",
      }),
    }),
    getProduct: builder.query<TProduct, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetCategoryQuery, useGetProductsQuery, useGetProductQuery } =
  productApi;
