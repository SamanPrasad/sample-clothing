import { colors } from "@data/colors";
import type { ColorType, ProductType } from "@typings";
import { useCallback, useEffect, useMemo, useState } from "react";
import ColorButton from "./ColorButton";
import ClearAll from "../Shared/ClearAll";
import { useProductsContext } from "@hooks/useProductContext";
import Dropdown from "@components/Accordion/Dropdown";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  products: ProductType[];
  cssClasses?: string;
};

function ColorMenu({ isOpen, products, cssClasses }: Props) {
  const [allColors, setAllColors] = useState<ColorType[]>([]);
  const { selectedColors, setSelectedColors } = useProductsContext();

  const availableColors = useMemo(() => {
    return Array.from(
      new Set(
        products
          .map((product) => product.variants.map((variant) => variant.color))
          .flat()
      )
    );
  }, [products]);

  const unavailableColors = useMemo(() => {
    return allColors.reduce((total, color) => {
      return availableColors.includes(color.color) ? total : [...total, color];
    }, [] as ColorType[]);
  }, [availableColors, allColors]);

  const toggleSelect = useCallback((color: string) => {
    setSelectedColors((prev) => {
      const newSet = new Set(prev);
      prev.has(color) ? newSet.delete(color) : newSet.add(color);
      return newSet;
    });
  }, []);

  useEffect(() => {
    //this is for API integration
    setAllColors(colors);
  }, [products]);

  return (
    <div
      className={clsx(
        "min-w-full left-0 top-9 pt-0.5 duration-300 overflow-hidden",
        isOpen && "max-h-60 opacity-100",
        !isOpen && "max-h-0 opacity-0",
        cssClasses
      )}
    >
      <Dropdown isOpen={isOpen}>
        <div
          className={clsx(
            "w-full bg-white px-3 pt-1.5 pb-3 duration-300",
            !isOpen && "-translate-y-9"
          )}
        >
          <div className="w-full flex justify-start content-around max-h-27 flex-wrap space-x-2 overflow-hidden px-0.5 mb-1.5">
            {availableColors.length > 0 && //available colors for the product
              availableColors.map((color) => (
                <ColorButton
                  key={color}
                  color={color}
                  available={true}
                  selected={selectedColors.has(color)}
                  toggleSelect={() => toggleSelect(color)}
                />
              ))}
            {allColors.length > 0 && //unavailable colors
              unavailableColors.map((item) => (
                <ColorButton key={item.color} color={item.color} />
              ))}
          </div>
          <ClearAll clearAll={() => setSelectedColors(new Set())} />
        </div>
      </Dropdown>
    </div>
  );
}

export default ColorMenu;
