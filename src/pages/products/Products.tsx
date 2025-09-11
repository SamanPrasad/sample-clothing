import ProductList from "@components/Products/ProductList";
import type { ProductResponse } from "@typings";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router";
import { getProducts } from "../../api/products";

function Products() {
  const { categorySlug } = useParams();
  const [searchParams] = useSearchParams();
  const [products, setproducts] = useState<ProductResponse | null>(null);
  const [perPage] = useState(5);

  useEffect(() => {
    setproducts(getProducts(searchParams.get("page") ?? "1", perPage));
  }, [searchParams, perPage, categorySlug]);
  return (
    <div>
      <ProductList products={products} title="products" perPage={3} />
    </div>
  );
}

export default Products;
