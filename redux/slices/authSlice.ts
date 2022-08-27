import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { RootState } from "../store/store";

interface IAuthState {
  token: string | undefined;
}

const initialState: IAuthState = {
  token: Cookies.get("token"),
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setToken: (state, { payload }) => {
      Cookies.set("token", payload);
      state.token = payload;
      toast.success(`${payload?.user?.name} Login successfully`, {
        position: "bottom-left",
      });
    },
    logout: (state) => {
      Cookies.remove("token");
      state.token = undefined;
    },
  },
});

export const selectToken = (state: RootState) => state.auth;

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
