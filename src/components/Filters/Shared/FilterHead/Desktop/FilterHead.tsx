import MainFilterHead from "../MainFilterHead";
import { IoIosArrowUp } from "react-icons/io";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  selectedList?: Set<number> | Set<string>;
  title: string;
};

function FilterHead({ isOpen, selectedList, title }: Props) {
  return (
    <div className="w-full">
      <MainFilterHead title={title} selectedList={selectedList}>
        <IoIosArrowUp
          className={clsx(
            "mt-0.5 opacity-50 duration-300",
            isOpen && "rotate-180"
          )}
        />
      </MainFilterHead>
    </div>
  );
}

export default FilterHead;
