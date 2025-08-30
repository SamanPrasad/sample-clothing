import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import menuSlice from "./menu/menuSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    menu: menuSlice,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
