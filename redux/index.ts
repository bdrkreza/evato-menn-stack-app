import { useGetProductQuery, useGetProductsQuery } from "./reducers/productApi";
import { useGetUserQuery } from "./reducers/user-api";
import { selectToken, setToken } from "./slices/authSlice";
import {
  addToCart,
  cartItem,
  decreaseCart,
  removeFromCart,
} from "./slices/cartSlice";

export {
  useGetProductsQuery,
  useGetProductQuery,
  useGetUserQuery,
  setToken,
  selectToken,
  addToCart,
  cartItem,
  removeFromCart,
  decreaseCart,
};
