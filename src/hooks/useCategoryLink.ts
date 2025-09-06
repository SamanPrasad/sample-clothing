import type { CategoryType } from "../types/category";

function useCategoryLink(category: CategoryType) {
  return category.slug ? `/categories/${category.slug}` : "";
}

export default useCategoryLink;
