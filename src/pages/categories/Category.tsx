import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { getCategory } from "../../api/category";
import ProductList from "@components/Products/ProductList";
import type { ProductResponse } from "@typings";

function Category() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [perPage] = useState(5);

  useEffect(() => {
    const category = getCategory(
      categorySlug!,
      searchParams.get("page") ?? "1",
      perPage
    );
    if (category) {
      const productsResponse = {} as ProductResponse;
      productsResponse.items = category.products;
      productsResponse.current = category.current;
      productsResponse.pages = category.pages;
      productsResponse.perPage = category.perPage;
      productsResponse.total = category.total;
      setProducts(productsResponse);
    }
  }, [searchParams, perPage, categorySlug]);

  return (
    <div>
      <ProductList products={products} perPage={perPage} title="Categories" />
    </div>
  );
}

export default Category;
