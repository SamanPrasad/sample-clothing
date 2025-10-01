import type { ProductType } from "@typings";
import SizeMenu from "./SizeMenu";
import { useProductsContext } from "@hooks/useProductContext";
import { useState } from "react";
import DesktopFilterHead from "../Shared/FilterHead/Desktop";
import MobileFilterHead from "../Shared/FilterHead/Mobile";

type Props = {
  products: ProductType[];
};

function SizeFilter({ products }: Props) {
  const { selectedSizes } = useProductsContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full z-50">
      <div
        className="hidden lg:flex w-full"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <DesktopFilterHead
          title="size"
          isOpen={isOpen}
          selectedList={selectedSizes}
        />
        <SizeMenu
          products={products}
          isOpen={isOpen}
          cssClasses="absolute shadow-theme"
        />
      </div>
      <div className="flex flex-col lg:hidden w-full">
        <div className="w-full" onClick={() => setIsOpen((prev) => !prev)}>
          <MobileFilterHead
            title="size"
            isOpen={isOpen}
            selectedList={selectedSizes}
          />
        </div>
        <SizeMenu products={products} isOpen={isOpen} />
      </div>
    </div>
  );
}

export default SizeFilter;
