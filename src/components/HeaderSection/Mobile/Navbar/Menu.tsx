import { useEffect, useRef } from "react";
import Curve from "./Curve";
import * as motion from "motion/react-client";
import menu from "../../../../data/menu";
import MenuItem from "./MenuItem";
import Hamburger from "../../Components/Hamburger";
import Search from "../../Components/Search/Search";
import Overlay from "@components/Overlay";
import { useViewWidth } from "@hooks/useViewWidth";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";

interface Props {
  open: boolean;
  toggle: (status: boolean) => void;
}

function Menu({ open, toggle }: Props) {
  const menuRef = useRef<HTMLDivElement | null>(null);
  const width = useViewWidth();
  useLockBodyScroll(open);

  //close mobile menu when view port get larger
  useEffect(() => {
    if (width >= 1024 && open) {
      toggle(false);
    }
  }, [width]);

  return (
    <>
      <Overlay openStatus={open} close={() => toggle(false)} />
      <motion.div
        initial={{
          x: -600,
        }}
        animate={{
          x: open ? 0 : -600,
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        ref={menuRef}
        className="flex flex-col lg:hidden z-[99] fixed left-0 top-0 w-full h-full sm:w-3/5 md:w-2/5"
      >
        <div className="w-full">
          <div className="w-16 flex-none p-2.5 pt-3.5 ps-3.5 box-border">
            <Hamburger
              open={open}
              toggle={(status: boolean) => toggle(status)}
            />
          </div>
          <motion.div
            animate={{
              x: open ? 0 : -300,
            }}
            transition={{
              delay: open ? 0.3 : 0,
              duration: 0.6,
            }}
            className="search mt-2 px-8 w-full"
          >
            <Search />
          </motion.div>
          <div className="content mt-10 px-5 ps-10 w-full">
            <ul>
              {menu.map((item, index) => (
                <MenuItem
                  key={index}
                  menuItem={item}
                  delay={index}
                  menuOpen={open}
                  toggle={() => toggle(false)}
                />
              ))}
            </ul>
          </div>
        </div>
        <Curve open={open} />
      </motion.div>
    </>
  );
}

export default Menu;
