import { AnimatePresence } from "motion/react";
import { useRef } from "react";
import { useLocation, useOutlet } from "react-router";
import * as motion from "motion/react-client";

function AnimatedOutlet() {
  const outlet = useOutlet();
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
        {outlet ? outlet : <p>Select a page</p>}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimatedOutlet;
