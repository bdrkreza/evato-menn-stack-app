import { useGetProductQuery, useGetProductsQuery } from "./reducers/productApi";
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
  setToken,
  selectToken,
  addToCart,
  cartItem,
  removeFromCart,
  decreaseCart,
};
