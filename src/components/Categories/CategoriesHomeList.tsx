import { categories } from "../../data/categories";
import CategoriesHomeItem from "./CategoriesHomeItem";

function CategoriesHomeList() {
  return (
    <div className="w-full grid justify-items-center grid-cols-2 lg:grid-cols-4 gap-2.5 my-5">
      {categories.map((category) => (
        <CategoriesHomeItem data={category} />
      ))}
    </div>
  );
}

export default CategoriesHomeList;
