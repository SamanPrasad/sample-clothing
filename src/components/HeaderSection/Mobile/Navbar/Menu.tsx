import { useEffect, type Dispatch, type SetStateAction } from "react";
import * as motion from "motion/react-client";
import menu from "../../../../data/menu";
import MenuItem from "./MenuItem";
import Search from "../../Components/Search/Search";
import { useViewWidth } from "@hooks/useViewWidth";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";
import MobileMenu from "@components/MobileMenu/MobileMenu";

interface Props {
  openState: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
}

function Menu({ openState, setOpenState }: Props) {
  const { width } = useViewWidth();
  useLockBodyScroll(openState);

  //close mobile menu when view port get larger
  useEffect(() => {
    if (width >= 1024 && openState) {
      setOpenState(false);
    }
  }, [width]);

  return (
    <MobileMenu openState={openState} setOpenState={setOpenState}>
      <div className="w-full">
        <motion.div
          animate={{
            x: openState ? 0 : -300,
          }}
          transition={{
            delay: openState ? 0.3 : 0,
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
                menuOpen={openState}
                toggle={() => setOpenState(false)}
              />
            ))}
          </ul>
        </div>
      </div>
    </MobileMenu>
  );
}

export default Menu;
