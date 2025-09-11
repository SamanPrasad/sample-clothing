import type { GridLayoutType, GridValueType } from "@typings";
import type { ProductType } from "@typings";
import ProductCard from "./ProductCard";

type Props = {
  layout: GridLayoutType;
  grid: GridValueType;
  products: ProductType[];
  parent: string;
};

const gridClasses: Record<GridValueType, string> = {
  1: "grid-cols-1",
  2: "grid-cols-2",
  3: "grid-cols-3",
  4: "grid-cols-4",
};

function ProductsList({ layout, grid, products, parent }: Props) {
  const gridClass = layout == "vertical" ? "grid-cols-1" : gridClasses[grid];

  return (
    <div className={`w-full grid ${gridClass}  gap-7 mb-18 px-4 mt-10`}>
      {products.map((item) => (
        <ProductCard product={item} parent={parent} layout={layout} />
      ))}
    </div>
  );
}

export default ProductsList;
