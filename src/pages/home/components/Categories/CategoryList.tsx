import { categories } from "@data/categories";
import CategoriesHomeItem from "./Category";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useLocation } from "react-router";

function CategoryList() {
  return (
    <div className="w-full grid justify-items-center grid-cols-2 lg:grid-cols-4 gap-2.5 my-5">
      {categories.map((category, index) => (
        <CategoriesHomeItem key={index} data={category} />
      ))}
    </div>
  );
}

export default CategoryList;
