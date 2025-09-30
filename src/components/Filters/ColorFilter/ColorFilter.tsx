import type { ProductType } from "@typings";
import { IoIosArrowUp } from "react-icons/io";
import FilterTitle from "../StateComponents/FilterTitle";
import ColorMenu from "./ColorMenu";
import { useProductsContext } from "@hooks/useProductContext";

type Props = {
  products?: ProductType[];
};

function ColorFilter({ products = [] }: Props) {
  const { selectedColors } = useProductsContext();

  return (
    <div className="relative group z-50">
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="color" selectedList={selectedColors} />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <ColorMenu products={products} />
    </div>
  );
}

export default ColorFilter;
