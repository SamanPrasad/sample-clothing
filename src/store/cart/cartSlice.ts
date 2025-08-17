import { createSlice } from "@reduxjs/toolkit";

type CartState = {
  count: number;
};

const initialState: CartState = {
  count: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (items) => {
      items.count += 1;
    },
    removeFromCart: (items) => {
      items.count -= 1;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
