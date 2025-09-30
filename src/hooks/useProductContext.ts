import { ProductContext } from "@context/ProductProvider";
import { useContext } from "react";

export const useProductsContext = () => {
  const cntx = useContext(ProductContext);
  if (!cntx)
    throw new Error("useProductsCOntext must be used within ProductsContext");
  return cntx;
};
