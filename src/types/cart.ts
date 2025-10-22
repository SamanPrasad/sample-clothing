import type { VariantType } from "./product";

export type CartItem = {
  productVariant: VariantType;
  count: number;
};
