import * as motion from "motion/react-client";

interface Props {
  title: string;
}

function PageTitle({ title }: Props) {
  return (
    <motion.div
      initial={{ x: "-100%", opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: {
          opacity: { delay: 0.4, duration: 0.7, ease: "backInOut" },
          x: { delay: 0.1, duration: 1, ease: "backInOut" },
        },
      }}
      exit={{ x: "100%", opacity: 0 }}
      className="flex flex-col justify-center items-center h-[20vw] w-full relative"
    >
      <h1 className="text-3xl md:text-5xl font-[Poppins] text-black uppercase font-bold tracking-widest">
        {title}
      </h1>
      <hr className="h-1 w-1/5 border-2 border-black mt-2.5" />
    </motion.div>
  );
}

export default PageTitle;
