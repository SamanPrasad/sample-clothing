import React, { useEffect, useRef, useState } from "react";
import Curve from "./Curve";
import { useSelector } from "react-redux";
import type { RootStore } from "../../../../store/store";
import * as motion from "motion/react-client";
import Search from "../../Header/Components/Search/Search";
import menu from "../../../../data/menu";
import MenuItem from "./MenuItem";

function MobileMenu() {
  const open = useSelector((store: RootStore) => store.menu.open);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(menuRef.current?.scrollWidth ?? 0);
  }, [open]);

  return (
    <motion.div
      initial={{
        x: -1000,
      }}
      animate={{
        x: open ? 0 : -width,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      ref={menuRef}
      className="flex flex-col lg:hidden absolute z-40 left-0 top-0 w-full h-full sm:w-3/5 md:w-2/5"
    >
      <div className="absolute w-full top-0 left-0">
        <motion.div
          animate={{
            x: open ? 0 : -300,
          }}
          transition={{
            duration: 0.7,
          }}
          className="search mt-10 px-5 w-full"
        >
          <Search />
        </motion.div>
        <div className="content mt-10 px-5 ps-10 w-full">
          <ul>
            {menu.map((item, index) => (
              <MenuItem menuItem={item} delay={index} />
            ))}
          </ul>
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}

export default MobileMenu;
