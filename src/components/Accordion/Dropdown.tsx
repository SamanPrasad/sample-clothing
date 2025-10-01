import * as motion from "motion/react-client";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  isOpen: boolean;
}>;

function Dropdown({ isOpen, children }: Props) {
  return (
    <motion.div
      className="flex flex-col overflow-hidden"
      initial={{ height: 0 }}
      animate={{
        height: isOpen ? "auto" : 0,
        y: isOpen ? 0 : -8,
        opacity: isOpen ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export default Dropdown;
