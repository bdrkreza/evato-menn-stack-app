import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/store";
interface IAuthState {
  token: string | null;
  isLoggedIn: boolean;
}

const initialState: IAuthState = {
  token: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,

  reducers: {
    setToken: (state, { payload }) => {
      localStorage.setItem("token", payload);
      state.token = payload;
      state.isLoggedIn = payload;
    },
    logout: (state) => {
      localStorage.clear();
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

export const selectToken = (state: RootState) => state.auth;

export const { setToken, logout } = authSlice.actions;

export default authSlice.reducer;
