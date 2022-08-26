import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { RootState } from "../store/store";

type TUser = {
  name: string;
  email: string;
  role: string;
};

interface IAuthState {
  token: string | undefined;
}

const initialState: IAuthState = {
  token: Cookies.get("user"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setToken: (state, { payload }) => {
      Cookies.set("user", payload);
      state.token = payload;
      toast.success(`${payload?.user?.name} Login successfully`, {
        position: "bottom-left",
      });
    },
    logout: (state) => {
      Cookies.remove("user");
      state.token = undefined;
    },
  },
});

export const selectToken = (state: RootState) => state.auth;

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
