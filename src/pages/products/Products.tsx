import ProductList from "@components/Products/ProductList";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useLocation } from "react-router";

function Products() {
  const location = useLocation();
  return (
    <motion.div
      key={location.pathname}
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 120,
        mass: 20,
      }}
    >
      <ProductList queryObj={{ type: "products" }} title="products" />
    </motion.div>
  );
}

export default Products;
