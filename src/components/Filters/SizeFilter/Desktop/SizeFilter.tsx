import { IoIosArrowUp } from "react-icons/io";
import type { ProductType } from "@typings";
import FilterTitle from "../../StateComponents/FilterTitle";
import SizeMenu from "../SizeMenu";
import { useProductsContext } from "@hooks/useProductContext";
import { useState } from "react";
import clsx from "clsx";

type Props = {
  products: ProductType[];
};

function SizeFilter({ products }: Props) {
  const { selectedSizes } = useProductsContext();
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative z-50"
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="size" selectedList={selectedSizes} />
        <IoIosArrowUp
          className={clsx(
            "mt-0.5 opacity-50 duration-300",
            open && "rotate-180"
          )}
        />
      </div>
      <SizeMenu products={products} open={open} />
    </div>
  );
}

export default SizeFilter;
