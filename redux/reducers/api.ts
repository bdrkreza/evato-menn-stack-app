import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { RootState } from "../store/store";

export const baseQuery = fetchBaseQuery({
  baseUrl: "/api",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    console.log("tokent is valid", token);
    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
