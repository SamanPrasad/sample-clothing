import type { ProductType } from "@typings";
import {
  createContext,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

type ProductContextType = {
  products: ProductType[] | null;
  selectedColors: Set<string>;
  setSelectedColors: Dispatch<SetStateAction<Set<string>>>;
  selectedCategories: Set<number>;
  setSelectedCategories: Dispatch<SetStateAction<Set<number>>>;
  selectedSizes: Set<string>;
  setSelectedSizes: Dispatch<SetStateAction<Set<string>>>;
};

type Props = {
  context: ProductContextType;
} & PropsWithChildren;

export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ context, children }: Props) => {
  return <ProductContext value={context}>{children}</ProductContext>;
};

export default ProductProvider;
