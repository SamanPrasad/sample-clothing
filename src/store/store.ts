import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
