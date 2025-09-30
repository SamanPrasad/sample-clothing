import type { ProductType } from "./product";

export type CartItem = {
  product: ProductType;
  size: string;
  color: string;
};
