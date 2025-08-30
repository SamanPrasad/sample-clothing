import React, { useMemo } from "react";
import * as motion from "motion/react-client";
import { useSelector } from "react-redux";
import type { RootStore } from "../../../../store/store";

function Curve() {
  const open = useSelector((store: RootStore) => store.menu.open);
  const curve = "M0 0 V50 H30 C50 35 50 15 30 0 H0 Z";
  const line = "M0 0 V50 H50 C50 30 50 20 50 0 H0 Z";

  return (
    <motion.svg
      className="w-full h-full"
      viewBox="0 0 50 50"
      preserveAspectRatio="none"
      fill="white"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={curve}
        animate={{
          d: open ? line : curve,
        }}
        transition={{
          delay: open ? 0.2 : 0.1,
          duration: 0.3,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export default Curve;
