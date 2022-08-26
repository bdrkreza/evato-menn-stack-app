import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { IProducts } from "../../types/product.type";
import { RootState } from "../store/store";

interface ICartProduct {
  cartItems: IProducts[];
  cartTotalQuantity: number;
  cartTotalAmount: number;
}

const initialState: ICartProduct = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex: any = state.cartItems?.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state?.cartItems[itemIndex].title} +quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems?.push(tempProduct);
        toast.success(`${action.payload.title} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.title} remove to cart`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload._id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.title} - quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload._id
        );
        toast.error(`${action.payload.title} remove to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
    getTotals(state) {
      const { quantity, total } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = parseInt(price) * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const cartItem = (state: RootState) => state.cart;

export const { addToCart, removeFromCart, decreaseCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
