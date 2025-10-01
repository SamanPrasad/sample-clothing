import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  showAll: boolean;
  setShowAll: (value: (prev: boolean) => boolean) => void;
};

function ShowMore({ showAll, setShowAll }: Props) {
  return (
    <button
      className="group/show-all h-6 flex items-center border border-theme-gray hover:bg-theme-gray hover:text-white rounded-sm font-theme text-sm cursor-pointer mt-2.5 p-0 px-0.5"
      onClick={() => setShowAll((prev: boolean) => !prev)}
    >
      <span>
        <IoIosArrowUp className="translate-y-[3px] group-hover/show-all:text-white" />
        <IoIosArrowDown className="-translate-y-[3px] group-hover/show-all:text-white" />
      </span>{" "}
      {showAll ? "Show Less" : "Show All"}
    </button>
  );
}

export default ShowMore;
