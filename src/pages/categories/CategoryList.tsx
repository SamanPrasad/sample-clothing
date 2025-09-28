import type { Group } from "@typings";
import { categories } from "../../data/categories";
import GroupItemCardList from "@components/Groups/GroupItemCardList";

const group: Group = {
  id: 1,
  title: "categories",
  items: categories,
};

function CategoryList() {
  return <GroupItemCardList group={group} />;
}

export default CategoryList;
