import { IoIosArrowUp } from "react-icons/io";

function SizeFilter() {
  return (
    <div className="group flex justify-between w-full border border-[#23232354] px-4 py-2">
      <h1 className="uppercase text-sm font-semibold tracking-wider font-[Poppins] text-[#232323]">
        size
      </h1>
      <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
    </div>
  );
}

export default SizeFilter;
