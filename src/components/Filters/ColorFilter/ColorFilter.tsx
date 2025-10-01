import type { ProductType } from "@typings";
import ColorMenu from "./ColorMenu";
import { useProductsContext } from "@hooks/useProductContext";
import { useState } from "react";
import DesktopFilterHead from "../Shared/FilterHead/Desktop";
import MobileFilterHead from "../Shared/FilterHead/Mobile";

type Props = {
  products?: ProductType[];
};

function ColorFilter({ products = [] }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedColors } = useProductsContext();

  return (
    <div className="relative w-full z-50">
      <div
        className="hidden lg:flex w-full"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <DesktopFilterHead
          title="color"
          isOpen={isOpen}
          selectedList={selectedColors}
        />
        <ColorMenu
          products={products}
          isOpen={isOpen}
          cssClasses="absolute shadow-theme"
        />
      </div>
      <div className="flex flex-col lg:hidden w-full">
        <div className="w-full" onClick={() => setIsOpen((prev) => !prev)}>
          <MobileFilterHead
            title="color"
            isOpen={isOpen}
            selectedList={selectedColors}
          />
        </div>
        <ColorMenu products={products} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default ColorFilter;
