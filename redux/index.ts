import { useGetProductsQuery } from "./reducers/productApi";
import { selectToken, setToken } from "./slices/authSlice";
import { addToCart, cartItem, removeFromCart } from "./slices/cartSlice";

export {
  useGetProductsQuery,
  setToken,
  selectToken,
  addToCart,
  cartItem,
  removeFromCart,
};
