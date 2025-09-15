import { useParams } from "react-router";
import ProductList from "@components/Products/ProductList";

function Category() {
  const { categorySlug } = useParams();

  return (
    <div>
      <ProductList
        queryObj={{
          type: "group",
          groupName: "categories",
          groupItemname: categorySlug,
        }}
        title="Categories"
      />
    </div>
  );
}

export default Category;
