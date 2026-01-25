import { api } from "@api/axiosClient";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { AddToCartPayload, CartItem } from "@typings";

type CartState = {
  cartItems: CartItem[];
  waiting: boolean;
};

const initialState: CartState = {
  cartItems: [],
  waiting: false,
};

export const addToCartAsync = createAsyncThunk<CartItem[], AddToCartPayload>(
  "cart/addToCartAsync",
  async (payload) => {
    const response = await api.post<CartItem[]>("/cart", payload);
    return response.data;
  },
);

export const setCartAsync = createAsyncThunk<CartItem[]>(
  "cart/setCart",
  async () => {
    const response = await api.get<CartItem[]>("/cart");
    return response.data;
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (cart, action) => {
      cart.cartItems = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (cart) => {
        cart.waiting = true;
      })
      .addCase(addToCartAsync.rejected, (cart, payload) => {
        console.log(payload.error);
        cart.waiting = false;
      })
      .addCase(addToCartAsync.fulfilled, (cart, action) => {
        cart.waiting = false;
        cart.cartItems = action.payload;
      })
      .addCase(setCartAsync.fulfilled, (cart, action) => {
        cart.cartItems = action.payload;
      });
  },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;
