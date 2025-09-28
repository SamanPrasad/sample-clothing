import { IoIosArrowUp } from "react-icons/io";
import { categories } from "@data/categories";
import { useState } from "react";
import ClearAll from "./StateComponents/ClearAll";
import ShowMore from "./StateComponents/ShowMore";
import FilterTitle from "./StateComponents/FilterTitle";

function CategoryFilter() {
  const [selectedList, setSelectedList] = useState<number[]>([]);
  const [showAll, setShowAll] = useState(false);

  const toggleSelect = (id: number) => {
    setSelectedList((prev) => {
      return prev.includes(id)
        ? prev.filter((val) => val !== id)
        : [...prev, id];
    });
  };

  return (
    <div className="relative group z-50">
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="category" selectedList={selectedList} />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <div className="absolute min-w-full left-0 top-0 opacity-0 max-h-0 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 py-0.5 flex flex-col items-start overflow-hidden shadow-theme">
        <div className="bg-white w-full px-4 py-2.5">
          <ul
            className="pb-3 mb-2 h-36"
            style={{ overflowY: showAll ? "scroll" : "hidden" }}
          >
            {categories.length > 0 &&
              categories.map((category) => (
                <li key={category.id}>
                  <input
                    className="accent-black"
                    type="checkbox"
                    id={`category-${category.id}`}
                    checked={selectedList.includes(category.id)}
                    onChange={() => toggleSelect(category.id)}
                  />
                  <label
                    className="ms-1.5 font-[Poppins] text-xs tracking-wide"
                    htmlFor={`category-${category.id}`}
                  >
                    {`${category.title} (${category.products.length})`}
                  </label>
                </li>
              ))}
          </ul>
          <ClearAll clearAll={() => setSelectedList([])} />
          <ShowMore showAll={showAll} setShowAll={setShowAll} />
        </div>
      </div>
    </div>
  );
}

export default CategoryFilter;
