import ColorFilter from "@components/Filters/ColorFilter";
import SizeFilter from "@components/Filters/SizeFilter/SizeFilter";
import type { ProductType } from "@typings";
import { type ComponentType } from "react";

type Props = {
  Filter: ComponentType<any>;
  products: ProductType[];
};

function FilterItem({ Filter, products }: Props) {
  const filterProps =
    Filter == ColorFilter || Filter == SizeFilter ? { products: products } : {};
  return <Filter {...filterProps} />;
}

export default FilterItem;
