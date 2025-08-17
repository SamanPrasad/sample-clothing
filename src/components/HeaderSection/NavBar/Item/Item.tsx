import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import MenuItemList from "../MenuItemList/MenuItemList";
import "./Item.css";

interface Menu {
  id: number;
  menu: string;
  level: number;
  uri: string;
  children?: Menu[];
}

interface Props {
  menu: Menu;
}

function Item({ menu }: Props) {
  return (
    <div className={"menu-item group flex justify-start relative"}>
      <Link
        to={menu.uri}
        className={`flex justify-between items-center w-full ps-9 pe-2 text-start py-1 ${
          location.pathname + location.search == menu.uri ? "active" : ""
        }`}
      >
        {menu.menu}
        {menu.children && <IoIosArrowForward className="ms-2" />}
      </Link>
      {menu.children && (
        <MenuItemList
          menu={menu.children}
          styleClass={`group-hover:block group-active:block group-focus:block rounded-md hidden ${
            menu.level < 2 ? "parent-level" : "sub-level"
          }`}
        />
      )}
    </div>
  );
}

export default Item;
