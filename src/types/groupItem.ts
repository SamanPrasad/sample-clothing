import type { ProductType } from "./product";

export type GroupItem = {
  id: number;
  title: string;
  image: string;
  slug: string;
  groupType: string;
  productCount: number;
};

export type Group = {
  title: string;
  items: GroupItem[];
};

export interface ProductResponse {
  products: ProductType[];
  total?: number;
  pages?: number;
  current?: number;
  perPage?: number;
}

export interface GroupResponse extends ProductResponse {
  group: GroupItem;
}
