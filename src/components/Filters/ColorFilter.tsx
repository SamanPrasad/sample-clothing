import { colors } from "@data/colors";
import type { ColorType, ProductType } from "@typings";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";
import ClearAll from "./StateComponents/ClearAll";
import FilterTitle from "./StateComponents/FilterTitle";

type Props = {
  products?: ProductType[];
};

function ColorFilter({ products = [] }: Props) {
  const [allColors, setAllColors] = useState<ColorType[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  const availableColors = Array.from(
    new Set(products.map((product) => product.colors).flat())
  );

  const toggleSelect = (color: string) => {
    setSelectedColors((prev) => {
      return prev.includes(color)
        ? prev.filter((col) => col != color)
        : [...prev, color];
    });
  };

  const generateColorButton = (color: string, available: boolean) => {
    return (
      <div
        title={color}
        className={`relative w-8 aspect-square rounded-4xl my-0.5 ${
          color == "white" ? "border border-gray-500" : ""
        } ${available ? "opacity-100 cursor-pointer" : "opacity-40"} 
        ${
          selectedColors.includes(color)
            ? "after:absolute after:w-full after:scale-110 after:rounded-4xl after:border after:border-black after:aspect-square"
            : ""
        }`}
        style={{
          backgroundColor: colors.find((item) => item.color == color)?.code,
        }}
        onClick={
          availableColors.includes(color) ? () => toggleSelect(color) : () => {}
        }
      ></div>
    );
  };

  useEffect(() => {
    setAllColors(colors);
  }, [products]);

  return (
    <div className="relative group z-50">
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="color" selectedList={selectedColors} />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <div className="absolute w-full left-0 top-0 max-h-0 opacity-0 flex justify-center py-2.5 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 overflow-hidden shadow-theme">
        <div className="w-full bg-white px-3">
          <div className="w-full flex justify-start content-around max-h-27 flex-wrap space-x-2 overflow-hidden mb-1.5">
            {availableColors.length > 0 &&
              availableColors.map((color) => generateColorButton(color, true))}
            {allColors.length > 0 &&
              allColors
                .reduce((total, color) => {
                  return availableColors.includes(color.color)
                    ? total
                    : [...total, color];
                }, [] as ColorType[])
                .map((item) => generateColorButton(item.color, false))}
          </div>
          <ClearAll clearAll={() => setSelectedColors([])} />
        </div>
      </div>
    </div>
  );
}

export default ColorFilter;
