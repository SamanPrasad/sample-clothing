import React from "react";
import { useSelector } from "react-redux";
import type { RootStore } from "../../../../store/store";

function Cart() {
  const count = useSelector((store: RootStore) => store.cart.count);
  return (
    <div className="p-0 pt-2 relative">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
        <path
          d="M5.33331 6H19.8672C20.4687 6 20.9341 6.52718 20.8595 7.12403L20.1095 13.124C20.0469 13.6245 19.6215 14 19.1172 14H16.5555H9.44442H7.99998"
          stroke="black"
          strokeLinejoin="round"
        />
        <path
          d="M2 4H4.23362C4.68578 4 5.08169 4.30341 5.19924 4.74003L8.30076 16.26C8.41831 16.6966 8.81422 17 9.26638 17H19"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21C10.5523 21 11 20.5523 11 20C11 19.4477 10.5523 19 10 19C9.44772 19 9 19.4477 9 20C9 20.5523 9.44772 21 10 21Z"
          stroke="black"
          strokeLinejoin="round"
        />
        <path
          d="M17.5 21C18.0523 21 18.5 20.5523 18.5 20C18.5 19.4477 18.0523 19 17.5 19C16.9477 19 16.5 19.4477 16.5 20C16.5 20.5523 16.9477 21 17.5 21Z"
          stroke="black"
          strokeLinejoin="round"
        />
      </svg>
      <p className="absolute min-w-5 p-0.5 top-0 -right-1.5 text-xs bg-red-700 text-white aspect-square rounded-full flex justify-center items-center">
        {count}
      </p>
    </div>
  );
}

export default Cart;
