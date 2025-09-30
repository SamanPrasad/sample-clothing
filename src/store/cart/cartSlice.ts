import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "@typings";

type CartState = {
  products: CartItem[];
};

const initialState: CartState = {
  products: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (cart, action) => {
      cart.products = action.payload;
    },
    addToCart: (cart, action: PayloadAction<CartItem>) => {
      cart.products.push(action.payload);
    },
    // removeFromCart: (items) => {
    //   items.count -= 1;
    // },
  },
});

export const { addToCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
