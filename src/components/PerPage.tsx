import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import * as motion from "motion/react-client";

type Props = {
  perPage: number;
  setPerPage: (page: number) => void;
};

const perPageList = [1, 2, 3, 5, 10, 15, 20, 25];

function PerPage({ perPage, setPerPage }: Props) {
  const [open, setOpenStatus] = useState(false);

  const handleClick = (option: number) => {
    setPerPage(option);
    setOpenStatus(false);
  };

  return (
    <div className="flex flex-col xs:flex-row justify-center items-center bg-white z-30">
      <label className="font-[Poppins] text-xs font-medium uppercase text-[#505050] mb-1.5 xs:mb-0 xs:me-2.5">
        items per page
      </label>
      <div className="relative flex flex-col w-20">
        <div
          role="listdown"
          tabIndex={0}
          className="flex justify-between w-full border border-[#23232354] px-4 py-2 cursor-pointer z-20"
          onClick={() => setOpenStatus((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setOpenStatus((prev) => !prev);
            }
          }}
        >
          <span className="text-sm font-medium tracking-wider font-[Poppins] text-[#505050]">
            {perPage}
          </span>
          <IoIosArrowDown className="mt-0.5 ms-1.5 opacity-50" />
        </div>
        <motion.ul
          className="absolute w-full overflow-hidden bg-white shadow-2xl/90"
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: open ? "auto" : 0,
            top: open ? "100%" : 0,
            opacity: open ? 1 : 0,
          }}
          transition={{
            duration: open ? 0.2 : 0,
          }}
        >
          {perPageList.map((option) => (
            <li
              key={option}
              className="w-full text-xs font-medium font-[Poppins] text-[#636363] cursor-pointer px-4.5 my-2.5 hover:underline"
              onClick={() => handleClick(option)}
            >
              {option}
            </li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}

export default PerPage;
