import * as motion from "motion/react-client";

interface Props {
  open: boolean;
  toggle: (status: boolean) => void;
}

function Hamburger({ open, toggle }: Props) {
  console.log("open...", open);
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => {
        toggle(!open);
        console.log("vvvvvv", open);
      }}
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
            rotate: open ? -37 : 0,
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
            d: open ? "M15 7.32H15" : "M1.5 7.32H21.5",
            strokeWidth: open ? 0 : 2,
          }}
        />
        <motion.path
          animate={{
            rotate: open ? 37 : 0,
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
