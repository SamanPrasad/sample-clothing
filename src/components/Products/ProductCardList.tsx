import type { GridLayoutType, GridValueType } from "@typings";
import type { ProductType } from "@typings";
import NotFound from "@components/NotFound";
import * as motion from "motion/react-client";
import { AnimatePresence } from "motion/react";
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

function ProductCardList({ layout, grid, products, parent }: Props) {
  const gridClass = layout == "vertical" ? "grid-cols-1" : gridClasses[grid];

  if (!products) {
    return <NotFound message="No Product Found" />;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={gridClass}
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className={`w-full grid ${gridClass}  gap-7 mb-18 px-4 mt-10`}
      >
        {products.map((item) => (
          <ProductCard product={item} />
        ))}
      </motion.div>
    </AnimatePresence>
  );
}

export default ProductCardList;
