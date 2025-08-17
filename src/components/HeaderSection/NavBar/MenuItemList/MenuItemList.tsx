import React from "react";
import { Link } from "react-router";
import Item from "../Item/Item";
import "./MenuItemList.css";

interface Menu {
  id: number;
  menu: string;
  level: number;
  uri: string;
  children?: Menu[];
}

interface Props {
  menu: Menu[];
  styleClass: string;
}

function MenuItemList({ menu, styleClass }: Props) {
  return (
    <div
      className={`menu-item-children border-2 border-amber-600 z-50 bg-amber-300 ${styleClass}`}
    >
      {/* <div className="menu-item-children-context"> */}
      {menu.map((item) => (
        <Item menu={item} />
      ))}
      {/* </div> */}
    </div>
  );
}

export default MenuItemList;
