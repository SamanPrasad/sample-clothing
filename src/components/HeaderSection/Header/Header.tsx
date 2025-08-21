import React from "react";
import cartDark from "../../../assets/icons/cart-dark.svg";
import search from "../../../assets/icons/search.svg";
import account from "../../../assets/icons/account.svg";
import favourites from "../../../assets/icons/heart.svg";
import { useSelector } from "react-redux";
import type { RootStore } from "../../../store/store";

function Header() {
  const count = useSelector((store: RootStore) => store.cart.count);
  return (
    <div className="header hidden lg:flex lg:justify-between lg:items-center px-3 py-5">
      <div className="flex-1 flex">
        <div className="langugae flex-1 flex items-center">
          <span className="fi fi-gb fis rounded-3xl text-xl"></span>
        </div>
        <div className="contact flex-3 flex items-center">
          <span>Customer service +000000000000</span>
        </div>
      </div>
      <div className="text-[max(20px,3vw)] flex-1 flex items-center justify-center uppercase">
        <span className="font-bold">Kelly Felder Clone</span>
      </div>
      <div className="account flex-1 flex justify-end items-center gap-4">
        <div className="search border-b-black border-b-1 flex-auto flex justify-between">
          <input
            className="focus:outline-none w-10/12"
            type="text"
            placeholder="Search"
          />
          <img src={search} alt="" className="w-8" />
        </div>
        <div className="account">
          <img src={account} alt="" className="w-8" />
        </div>
        <div className="favourite">
          <img src={favourites} alt="" className="w-8" />
        </div>
        <div className="p-0 pt-2 relative">
          <img className="w-8" src={cartDark} alt="" />
          <p className="cart-count">{count}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
