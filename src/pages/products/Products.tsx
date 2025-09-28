import ProductList from "@components/Products/ProductList";

function Products() {
  return <ProductList queryObj={{ type: "products" }} title="products" />;
}

export default Products;
