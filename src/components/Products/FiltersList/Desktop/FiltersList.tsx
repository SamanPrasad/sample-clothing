import CategoryFilter from "@components/Filters/CategoryFilter";
import ColorFilter from "@components/Filters/ColorFilter";
import PrizeFilter from "@components/Filters/PrizeFilter/PrizeFilter";
import SizeFilter from "@components/Filters/SizeFilter/Desktop";
import type { ProductResponse } from "@typings";
import { useCallback, type ComponentType } from "react";

type Props = {
  type: string;
  products: ProductResponse;
};

const filtersList = [CategoryFilter, SizeFilter, PrizeFilter, ColorFilter];

function FiltersList({ type, products }: Props) {
  const generateFilter = useCallback(
    (Filter: ComponentType<any>, index: number) => {
      const filterProps =
        Filter == ColorFilter || Filter == SizeFilter
          ? { products: products?.products ?? [] }
          : {};
      return (
        <div key={index} className="w-[15%] mx-2.5">
          <Filter {...filterProps} />
        </div>
      );
    },
    [products]
  );

  return (
    <div className="hidden lg:flex justify-center z-40">
      {filtersList.map((Filter, index) => {
        if (type == "categories" && Filter === CategoryFilter) return null;
        return generateFilter(Filter, index);
      })}
    </div>
  );
}

export default FiltersList;
