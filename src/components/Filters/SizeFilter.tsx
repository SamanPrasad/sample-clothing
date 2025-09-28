import { IoIosArrowUp } from "react-icons/io";
import { sizes } from "@data/sizes";
import { useEffect, useState } from "react";
import type { ProductType, Size } from "@typings";
import ClearAll from "./StateComponents/ClearAll";
import FilterTitle from "./StateComponents/FilterTitle";

type Props = {
  products: ProductType[];
};

function SizeFilter({ products }: Props) {
  const [allSizes, setAllSizes] = useState<Size[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);

  const availableSizes = Array.from(
    new Set(products.flatMap((product) => product.sizes))
  );

  const toggleSelect = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((sz) => sz !== size) : [...prev, size]
    );
  };

  const generateSizeButton = (size: string, available: boolean) => {
    return (
      <div
        className={`w-10 border text-center my-1.5 ${
          available
            ? "cursor-pointer hover:bg-theme-gray hover:border-theme-gray hover:text-white duration-200"
            : "cursor-context-menu opacity-50"
        }
        ${
          selectedSizes.includes(size)
            ? "bg-theme-gray border-theme-gray text-white"
            : "border-gray-400"
        }
        `}
        onClick={() => toggleSelect(size)}
      >
        <span className="text-center">{size}</span>
      </div>
    );
  };

  useEffect(() => {
    setAllSizes(sizes);
  }, [products]);

  return (
    <div className="relative group z-50">
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="size" selectedList={selectedSizes} />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <div className="absolute w-full left-0 top-0 max-h-0 opacity-0 flex justify-center pt-2.5 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 overflow-hidden shadow-theme">
        <div className="w-full bg-white px-3 pb-4">
          <div className="w-full flex justify-start max-h-38 content-around flex-wrap space-x-2 overflow-hidden mb-3">
            {availableSizes.length > 0 &&
              availableSizes.map((size) => generateSizeButton(size, true))}
            {allSizes.length > 0 &&
              allSizes
                .reduce((total, size) => {
                  return availableSizes.includes(size.size)
                    ? total
                    : [...total, size];
                }, [] as Size[])
                .map((item) => generateSizeButton(item.size, false))}
          </div>
          <ClearAll clearAll={() => setSelectedSizes([])} />
        </div>
      </div>
    </div>
  );
}

export default SizeFilter;
