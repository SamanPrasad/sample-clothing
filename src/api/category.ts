import { categories } from "@data/categories";
import type { GroupResponse, ProductType } from "@typings";

export const getCategory = (slug: string, page: string, perPage: number) => {
  const category = categories.find((item) => item.slug == slug) ?? null;
  const response = {} as GroupResponse;

  if (!category) {
    return null;
  }

  response.pages = Math.ceil(category.products.length / perPage);
  response.total = category.products.length;
  response.perPage = perPage;

  if (page) {
    const pageNumber = parseInt(page) > 0 ? parseInt(page) : 1;
    const products = category?.products
      .map((item, index) => {
        if (
          index >= (pageNumber - 1) * perPage &&
          index < pageNumber * perPage
        ) {
          return item;
        }
      })
      .filter((item) => item) as ProductType[];

    response.products = products;
    response.current = pageNumber;
  }

  response.group = category;
  return response;
};
