import React, { useEffect, useRef, useState } from "react";
import type { Menu } from "../MainMenu/MenuItem/MenuItem";
import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";
import * as motion from "motion/react-client";
import { AnimatePresence, easeIn, easeInOut } from "motion/react";
import { useSelector } from "react-redux";
import type { RootStore } from "../../../../store/store";

interface Props {
  menuItem: Menu;
  delay: number;
}

function MenuItem({ menuItem, delay }: Props) {
  //used because otherwise MenuItem open status is not toggled because this is from outside of MenuItem
  const menuOpen = useSelector((store: RootStore) => store.menu.open);
  const [open, setOpen] = useState(false);
  const childrenRef = useRef<HTMLUListElement | null>(null);

  const variants = {
    visible: (val: number) => {
      return {
        x: menuOpen ? 0 : -200,
        transition: {
          delay: 0.1 * val,
          duration: 0.7,
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
      <h1 className="flex justify-start items-center text-2xl font-normal">
        <Link to={menuItem.uri}>{menuItem.menu}</Link>
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
                <MenuItem menuItem={menu} delay={index} />
              ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default MenuItem;
