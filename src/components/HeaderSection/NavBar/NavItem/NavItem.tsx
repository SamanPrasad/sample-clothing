import React, {
  useEffect,
  useRef,
  useState,
  type MouseEventHandler,
  type Ref,
} from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./NavItem.css";
import { IoIosArrowForward } from "react-icons/io";

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

function NavItem({ menu, styleClass }: Props) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const contextRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      className={`menu-item-children z-50 bg-black/50 absolute ${styleClass}`}
    >
      <div className="menu-item-children-context">
        {menu.map((item, index) => {
          return (
            <div className={"menu-item group flex justify-start relative"}>
              <Link
                to={item.uri}
                className={`flex justify-between items-center w-full ps-9 pe-2 text-start py-1 ${
                  location.pathname + location.search == item.uri
                    ? "active"
                    : ""
                }`}
              >
                {item.menu}
                {item.children && <IoIosArrowForward className="ms-2" />}
              </Link>
              {item.children && (
                <NavItem
                  menu={item.children}
                  styleClass={`${index} group-hover:block group-active:block group-focus:block rounded-md hidden ${
                    item.level < 3 ? "sub-level" : "parent-level"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavItem;
