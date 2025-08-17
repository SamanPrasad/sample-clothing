import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart/cartSlice";

function Cart() {
  const dispath = useDispatch();
  return (
    <div>
      <button onClick={() => dispath(addToCart())}>Add To Cart</button>
    </div>
  );
}

export default Cart;
