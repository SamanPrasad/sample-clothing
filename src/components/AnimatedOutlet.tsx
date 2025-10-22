import { AnimatePresence } from "motion/react";
import { memo, useRef } from "react";
import { Outlet, useLocation } from "react-router";
import * as motion from "motion/react-client";

function AnimatedOutlet() {
  const location = useLocation();
  const navigationId = useRef(0);
  navigationId.current++;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={location.pathname + "-" + navigationId.current}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedOutlet;

export const MemoizedAnimatedOutlet = memo(AnimatedOutlet);
