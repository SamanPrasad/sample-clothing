import { IoIosArrowUp } from "react-icons/io";
import FilterTitle from "../StateComponents/FilterTitle";
import CategoryMenu from "./CategoryMenu";
import { useProductsContext } from "@hooks/useProductContext";

function CategoryFilter() {
  const { selectedCategories } = useProductsContext();

  return (
    <div className="relative group z-50">
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="category" selectedList={selectedCategories} />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <CategoryMenu />
    </div>
  );
}

export default CategoryFilter;
