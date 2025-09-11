import { products } from "@data/products";
import type { ProductResponse, ProductType } from "@typings";

export const getProducts = (page: string, perPage: number) => {
  const response = {} as ProductResponse;

  if (!products) {
    return null;
  }

  response.pages = Math.ceil(products.length / perPage);
  response.total = products.length;
  response.perPage = perPage;

  if (page) {
    const pageNumber = parseInt(page) > 0 ? parseInt(page) : 1;
    const items = products
      .map((item, index) => {
        if (
          index >= (pageNumber - 1) * perPage &&
          index < pageNumber * perPage
        ) {
          return item;
        }
      })
      .filter((item) => item) as ProductType[];

    response.items = items;
    response.current = pageNumber;
  }

  return response;
};
