import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router";
import "./MenuItem.css";

interface Menu {
  id: number;
  menu: string;
  level: number;
  uri: string;
  children?: Menu[];
}

function MenuItem({ menu }: { menu: Menu }) {
  const location = useLocation();
  const divRef = useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = useState(false);
  const [height, setHeight] = useState(0);
  const [open, setOpenStatus] = useState(false);

  useEffect(() => {
    setHeight(divRef.current?.scrollHeight ?? 0);
  }, [open]);

  return (
    <div
      className={"menu-item z-50 flex justify-start relative"}
      onMouseEnter={() => setOpenStatus(true)}
      onMouseLeave={() => {
        setOpenStatus(false);
        setOverflow(false);
      }}
    >
      <Link
        to={menu.uri}
        className={`flex justify-between items-center w-full px-9 text-start py-1 z-40 ${
          location.pathname + location.search == menu.uri ? "active" : ""
        }`}
      >
        {menu.menu}
        {menu.children && <IoIosArrowForward className="ms-2 mt-[2px]" />}
      </Link>
      {open && menu.children && (
        <div
          className={`menu-item-children rounded-md top-full shadow-[1px_1px_15px_rgba(0, 0, 0, 0.452)]
            ${open ? "menu-open" : ""} 
            ${menu.level < 2 ? " parent-level" : " sub-level"}
          `}
          style={{
            height,
            opacity: open ? 1 : 0,
            transform: open ? "translateY(0)" : "translateY(-20px)",
            overflow: overflow ? "visible" : "hidden",
          }}
          ref={divRef}
          onTransitionEnd={() => {
            setOverflow(true);
          }}
        >
          {menu.children.map((item) => (
            <MenuItem menu={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
