import { useEffect, useRef, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router";
import styles from "./MenuItem.module.css";

export interface Menu {
  id: number;
  menu: string;
  level: number;
  uri: string;
  children?: Menu[];
}

interface Props {
  menu: Menu;
}

function MenuItem({ menu }: Props) {
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
      className={`${styles.menuItem} z-50 relative ${
        menu.level != 1 ? "px-1" : ""
      }`}
      onMouseEnter={() => setOpenStatus(true)}
      onMouseLeave={() => {
        setOpenStatus(false);
        setOverflow(false);
      }}
    >
      <Link
        to={menu.uri}
        className={`${
          styles.menuItemLink
        } flex justify-between items-center w-full px-9 my-1 ${
          menu.level == 2 ? "pe-2" : ""
        } text-start py-1 z-40 
        ${
          location.pathname + location.search == menu.uri ||
          (location.pathname.includes(menu.uri) && menu.uri != "/")
            ? `${styles.active}`
            : ""
        }
        `}
      >
        {menu.menu}
        {menu.level != 1 && menu.children && (
          <IoIosArrowForward className="ms-2 mt-[2px]" />
        )}
      </Link>
      {open && menu.children && (
        <div
          className={`${
            styles.menuItemChildren
          } rounded-md top-full shadow-[1px_1px_15px_rgba(0, 0, 0, 0.452)]
            ${open ? `${styles.menuOpen}` : ""} 
            ${menu.level < 2 ? ` ${styles.parentLevel}` : ` ${styles.subLevel}`}
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
            <MenuItem key={item.id} menu={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
