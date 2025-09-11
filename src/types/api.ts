import type { ProductType } from "./product";

type GroupItemType = {
  id: number;
  title: string;
  img: string;
  slug: string;
};

export type Response = {
  category: GroupItemType;
  products: ProductType[];
  total: number;
  pages: number;
  current: number;
  perPage: number;
};
