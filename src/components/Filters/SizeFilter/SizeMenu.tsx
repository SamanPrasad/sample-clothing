import { useCallback, useEffect, useMemo, useState } from "react";
import SizeButton from "./SizeButton";
import type { ProductType, Size } from "@typings";
import { sizes } from "@data/sizes";
import ClearAll from "../Shared/ClearAll";
import { useProductsContext } from "@hooks/useProductContext";
import clsx from "clsx";
import Dropdown from "@components/Accordion/Dropdown";

type Props = {
  products: ProductType[];
  isOpen: boolean;
  cssClasses?: string;
};

function SizeMenu({ products, isOpen, cssClasses }: Props) {
  const [allSizes, setAllSizes] = useState<Size[]>([]);
  const { selectedSizes, setSelectedSizes } = useProductsContext();

  const availableSizes = useMemo(() => {
    return Array.from(new Set(products.flatMap((product) => product.sizes)));
  }, [products]);

  const unavailableSizes = useMemo(() => {
    return allSizes.filter((size) => !availableSizes.includes(size.size));
  }, [products, allSizes]);

  const toggleSelect = useCallback(
    (size: string) => {
      setSelectedSizes((prev) => {
        const newSet = new Set(prev);
        prev.has(size) ? newSet.delete(size) : newSet.add(size);
        return newSet;
      });
    },
    [setSelectedSizes]
  );
  useEffect(() => {
    //Get sizes using API
    setAllSizes(sizes);
  }, [products]);

  return (
    <div
      className={clsx(
        "w-full top-9 left-0 pt-0.5 duration-300",
        isOpen && "max-h-60",
        !isOpen && "max-h-0",
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
          <div className="w-full flex justify-start max-h-38 content-around flex-wrap space-x-2 overflow-hidden mb-3">
            {availableSizes.length > 0 &&
              availableSizes.map((size) => (
                <SizeButton
                  key={size}
                  size={size}
                  available={true}
                  selected={selectedSizes.has(size)}
                  toggleSelect={() => toggleSelect(size)}
                />
              ))}
            {unavailableSizes.length > 0 &&
              unavailableSizes.map((item) => (
                <SizeButton
                  key={item.size}
                  size={item.size}
                  available={false}
                />
              ))}
          </div>
          <ClearAll clearAll={() => setSelectedSizes(new Set())} />
        </div>
      </Dropdown>
    </div>
  );
}

export default SizeMenu;
