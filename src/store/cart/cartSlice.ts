import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem, VariantType } from "@typings";

type CartState = {
  cartItems: CartItem[];
};

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (cart, action) => {
      cart.cartItems = action.payload;
    },
    addToCart: (cart, action: PayloadAction<VariantType>) => {
      const index = cart.cartItems.findIndex(
        (item) => item.productVariant.id == action.payload.id
      );
      if (index > -1) {
        cart.cartItems[index].count += 1;
      } else {
        cart.cartItems.push({ productVariant: action.payload, count: 0 });
      }
    },
    // removeFromCart: (items) => {
    //   items.count -= 1;
    // },
  },
});

export const { addToCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;
