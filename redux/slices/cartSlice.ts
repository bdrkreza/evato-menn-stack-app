import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { RootState } from "./../store/store";

type price = {
  price: number;
};

type ICartItems = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  featuredAsset: { preview: string };
  variants: Array<price>;
  variantList: string;
  cartQuantity: number;
};

interface ICartProduct {
  cartItems: ICartItems[];
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
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.info(`increased ${state?.cartItems[itemIndex].name} +quantity`, {
          position: "bottom-left",
        });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems?.push(tempProduct);
        toast.success(`${action.payload.name} added to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
      toast.error(`${action.payload.name} remove to cart`, {
        position: "bottom-left",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.info(`Decreased ${action.payload.name} - quantity`, {
          position: "bottom-left",
        });
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        toast.error(`${action.payload.name} remove to cart`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cartItem", JSON.stringify(state.cartItems));
    },
  },
});

export const cartItem = (state: RootState) => state.cart;

export const { addToCart, removeFromCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
