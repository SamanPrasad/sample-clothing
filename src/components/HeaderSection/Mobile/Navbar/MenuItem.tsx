import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import * as motion from "motion/react-client";
import { AnimatePresence, easeInOut } from "motion/react";
import type { Menu } from "../../Desktop/Navbar/MenuItem/MenuItem";

interface Props {
  menuItem: Menu;
  delay: number;
  menuOpen: boolean;
  toggle: () => void;
}

function MenuItem({ menuItem, delay, menuOpen, toggle }: Props) {
  const [open, setOpen] = useState(false);
  const childrenRef = useRef<HTMLUListElement | null>(null);

  const variants = {
    visible: (val: number) => {
      return {
        x: menuOpen ? 0 : -300,
        transition: {
          delay: 0.1 * val,
          duration: 0.8,
          ease: easeInOut,
        },
      };
    },
    initial: {
      x: 0,
    },
  };

  //close sub menus when main menu is closed
  useEffect(() => {
    setOpen(false);
  }, [menuOpen]);

  return (
    <motion.li
      className="mt-1.5"
      variants={variants}
      initial="initial"
      animate="visible"
      custom={delay}
    >
      <h1 className="flex justify-start items-center text-2xl font-normal text-black dark:text-white duration-700">
        <Link to={menuItem.uri} onClick={() => toggle()}>
          {menuItem.menu}
        </Link>
        {menuItem.children && (
          <IoIosArrowForward
            className={`mt-1 ms-6 transition-transform duration-300 ${
              open ? "rotate-90" : ""
            }`}
            onClick={() => setOpen((prev) => !prev)}
          />
        )}
      </h1>
      <AnimatePresence>
        {open && (
          <motion.ul
            ref={childrenRef}
            className="ms-4 overflow-hidden"
            initial={{
              height: 0,
            }}
            animate={{
              height: "auto",
            }}
            exit={{
              height: 0,
            }}
          >
            {menuItem.children &&
              menuItem.children.map((menu, index) => (
                <MenuItem
                  key={index}
                  menuItem={menu}
                  delay={index}
                  menuOpen={menuOpen}
                  toggle={() => toggle()}
                />
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default MenuItem;
