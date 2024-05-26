import { configureStore } from "@reduxjs/toolkit";
import heartSlice from "./Heart";
import cartSlice from './Card'
import { api } from "./Api";

export const store = configureStore({
  reducer: {
    heart: heartSlice,
    cart: cartSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(api.middleware),
});