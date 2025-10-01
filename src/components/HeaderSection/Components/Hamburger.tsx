import * as motion from "motion/react-client";
import type { Dispatch, SetStateAction } from "react";

interface Props {
  openState: boolean;
  setOpenState: Dispatch<SetStateAction<boolean>>;
}

function Hamburger({ openState, setOpenState }: Props) {
  return (
    <svg
      className="w-full h-full cursor-pointer"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => setOpenState((prev) => !prev)}
    >
      <motion.g
        style={{
          stroke: "black",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <motion.path
          animate={{
            rotate: openState ? -37 : 0,
            originX: 1,
            originY: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          d="M1.5 1.32001H21.5"
        />
        <motion.path
          initial={{
            d: "M1.5 7.32H21.5",
          }}
          animate={{
            d: openState ? "M15 7.32H15" : "M1.5 7.32H21.5",
            strokeWidth: openState ? 0 : 2,
          }}
        />
        <motion.path
          animate={{
            rotate: openState ? 37 : 0,
            originX: 1,
            originY: 1,
          }}
          transition={{
            duration: 0.5,
          }}
          d="M1.5 13.32H21.5"
        />
      </motion.g>
    </svg>
  );
}

export default Hamburger;
