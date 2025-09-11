import type { CategoryType } from "@typings";

function getCategoryLink(category: CategoryType) {
  return category.slug ? `/categories/${category.slug}` : "";
}

export default getCategoryLink;
