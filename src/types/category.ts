import type { ProductType } from "./product";

export type CategoryType = {
  id: number;
  title: string;
  img: string;
  slug: string;
  groupType: string;
  products: ProductType[];
};
