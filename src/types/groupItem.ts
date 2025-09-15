import type { ProductType } from "./product";

export type GroupItem = {
  id: number;
  title: string;
  slug: string;
  groupType: string;
  img: string;
  products: ProductType[];
};

export type Group = {
  id: number;
  title: string;
  items: GroupItem[];
};

type GroupItemType = {
  id: number;
  title: string;
  img: string;
  slug: string;
};

export interface ProductResponse {
  products: ProductType[];
  total: number;
  pages: number;
  current: number;
  perPage: number;
}

export interface GroupResponse extends ProductResponse {
  group: GroupItemType;
}
