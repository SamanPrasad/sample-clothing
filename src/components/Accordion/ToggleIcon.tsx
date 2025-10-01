import * as motion from "motion/react-client";
import { useMemo } from "react";

type Props = {
  isOpen: boolean;
  strokeColor?: string;
};

function ToggleIcon({ isOpen, strokeColor = "white" }: Props) {
  const operators = useMemo(() => {
    return {
      plus: "M1.5 14H26.5M14 1.5V26.5",
      minus: "M1.5 12.5H26.5",
    };
  }, []);

  return (
    <div className="flex relative justify-center items-center w-3.5">
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            rotate: -90,
          }}
          animate={{
            d: isOpen ? operators.minus : operators.plus,
            rotate: isOpen ? 0 : -90,
          }}
          stroke={strokeColor}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

export default ToggleIcon;
