import CategoryFilter from "@components/Filters/CategoryFilter";
import ColorFilter from "@components/Filters/ColorFilter";
import PrizeFilter from "@components/Filters/PrizeFilter";
import type { ProductResponse } from "@typings";
import FilterItem from "../FilterItem";
import SizeFilter from "@components/Filters/SizeFilter";

type Props = {
  type: string;
  products: ProductResponse;
};

const filtersList = [CategoryFilter, SizeFilter, PrizeFilter, ColorFilter];

function FiltersList({ type, products }: Props) {
  return (
    <div className="hidden lg:flex justify-center z-50">
      {filtersList.map((Filter, index) => {
        if (type == "categories" && Filter === CategoryFilter) return null;
        return (
          <div key={index} className="w-[15%] mx-2.5">
            <FilterItem
              key={index}
              Filter={Filter}
              products={products.products}
            />
          </div>
        );
      })}
    </div>
  );
}

export default FiltersList;
