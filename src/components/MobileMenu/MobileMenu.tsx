import {
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import Overlay from "../Overlay";
import * as motion from "motion/react-client";
import Curve from "./Curve";
import Hamburger from "@components/HeaderSection/Components/Hamburger";
import clsx from "clsx";

type Props = PropsWithChildren<{
  openState: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
  widthClasses?: string;
}>;

function MobileMenu({
  openState,
  setOpenState,
  widthClasses = "sm:w-3/5 md:w-2/5",
  children,
}: Props) {
  return (
    <>
      <Overlay openStatus={openState} close={() => setOpenState(false)} />
      <motion.div
        initial={{
          x: "-100%",
        }}
        animate={{
          x: openState ? 0 : "-100%",
        }}
        transition={{
          duration: 0.7,
          ease: "easeInOut",
        }}
        className={clsx(
          "flex flex-col lg:hidden z-[99] fixed left-0 top-0 w-full h-full",
          widthClasses
        )}
      >
        <div className="w-16 flex-none p-2.5 pt-3.5 ps-3.5 box-border">
          <Hamburger openState={openState} setOpenState={setOpenState} />
        </div>
        {children}
        <Curve openState={openState} />
      </motion.div>
    </>
  );
}

export default MobileMenu;
