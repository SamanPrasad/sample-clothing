import { useCallback, useEffect, useMemo, useState } from "react";
import SizeButton from "./SizeButton";
import type { ProductType } from "@typings";
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
  const [allSizes, setAllSizes] = useState<string[]>([]);
  const { selectedSizes, setSelectedSizes } = useProductsContext();

  const availableSizes = useMemo(() => {
    return Array.from(
      new Set(
        products.flatMap((product) =>
          product.variants
            .map((variant) => variant.sizes.map((size) => size.size).flat())
            .flat(),
        ),
      ),
    );
  }, [products]);

  const unavailableSizes = useMemo(() => {
    return allSizes.filter((size) => !availableSizes.includes(size));
  }, [products, allSizes]);

  const toggleSelect = useCallback(
    (size: string) => {
      setSelectedSizes((prev) => {
        const newSet = new Set(prev);
        prev.has(size) ? newSet.delete(size) : newSet.add(size);
        return newSet;
      });
    },
    [setSelectedSizes],
  );
  useEffect(() => {
    //Get sizes using API
    setAllSizes(["M", "L", "XL", "26", "28", "XXL", "S", "30", "32", "XS"]);
  }, [products]);

  return (
    <div
      className={clsx(
        "w-full top-9 left-0 pt-0.5 duration-300",
        isOpen && "max-h-60",
        !isOpen && "max-h-0",
        cssClasses,
      )}
    >
      <Dropdown isOpen={isOpen}>
        <div
          className={clsx(
            "w-full bg-white px-3 pt-1.5 pb-3 duration-300",
            !isOpen && "-translate-y-9",
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
              unavailableSizes.map((size) => (
                <SizeButton key={size} size={size} available={false} />
              ))}
          </div>
          <ClearAll clearAll={() => setSelectedSizes(new Set())} />
        </div>
      </Dropdown>
    </div>
  );
}

export default SizeMenu;
