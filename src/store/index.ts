import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";
import userReducer from "./user/userSlice";
import breadcrumbsReducer from "./breadcrumbs/breadcrumbsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    breadcrumbs: breadcrumbsReducer,
  },
});

export type RootStore = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
