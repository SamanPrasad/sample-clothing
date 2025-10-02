import * as motion from "motion/react-client";

interface Props {
  openState: boolean;
}

function Curve({ openState }: Props) {
  const curve = "M0 0 V50 H30 C50 35 50 15 30 0 H0 Z";
  const line = "M0 0 V50 H50 C50 30 50 20 50 0 H0 Z";

  return (
    <motion.svg
      className="w-full h-full absolute left-0 top-0 -z-[100] fill-white dark:fill-black duration-700"
      viewBox="0 0 50 50"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={curve}
        animate={{
          d: openState ? line : curve,
        }}
        transition={{
          delay: openState ? 0.3 : 0,
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
}

export default Curve;
