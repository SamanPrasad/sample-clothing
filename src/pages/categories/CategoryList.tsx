import type { Group } from "@typings";
import { categories } from "../../data/categories";
import GroupItemCardList from "@components/Groups/GroupItemCardList";
import * as motion from "motion/react-client";

const group: Group = {
  id: 1,
  title: "categories",
  items: categories,
};

function CategoryList() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{
        type: "spring",
        stiffness: 1000,
        damping: 120,
        mass: 20,
      }}
    >
      <GroupItemCardList group={group} />;
    </motion.div>
  );
}

export default CategoryList;
