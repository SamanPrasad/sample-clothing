import { colors } from "@data/colors";
import type { ColorType, ProductType } from "@typings";
import { useCallback, useEffect, useMemo, useState } from "react";
import ColorButton from "./ColorButton";
import ClearAll from "../StateComponents/ClearAll";
import { useProductsContext } from "@hooks/useProductContext";

type Props = {
  products: ProductType[];
};

function ColorMenu({ products }: Props) {
  const [allColors, setAllColors] = useState<ColorType[]>([]);
  const { selectedColors, setSelectedColors } = useProductsContext();

  const availableColors = useMemo(() => {
    return Array.from(
      new Set(products.map((product) => product.colors).flat())
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
    <div className="absolute w-full left-0 top-0 max-h-0 opacity-0 flex justify-center py-2.5 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 overflow-hidden shadow-theme">
      <div className="w-full bg-white px-3">
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
    </div>
  );
}

export default ColorMenu;
