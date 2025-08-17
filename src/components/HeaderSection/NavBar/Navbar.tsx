import logoDark from "../../../assets/logo-dark.svg";
import { Link, NavLink, useLocation } from "react-router";
import "./NavBar.css";
import "flag-icons/css/flag-icons.min.css";
import NavItem from "./NavItem/NavItem";
import menu from "../../../data/menu";
import { useRef } from "react";
import Item from "./Item/Item";

function Navbar() {
  const location = useLocation();
  const path = location.pathname + location.search;
  const contextRef = useRef<HTMLDivElement | null>(null);

  const mouseOver = () => {
    const height = contextRef.current?.offsetHeight;
    console.log(height);
    console.log(contextRef.current);
    // console.log(num);
  };
  return (
    <div className="navbar text-white bg-black h-12 w-full flex justify-center items-center gap-3 px-40 z-50">
      {menu.map((item, index) => {
        return <Item menu={item} />;
      })}
    </div>
  );
}

export default Navbar;
