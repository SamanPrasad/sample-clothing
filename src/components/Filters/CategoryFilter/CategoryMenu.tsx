import { useEffect, useRef, useState } from "react";
import ClearAll from "../StateComponents/ClearAll";
import ShowMore from "../StateComponents/ShowMore";
import { useProductsContext } from "@hooks/useProductContext";
import { categories } from "@data/categories";

function CategoryMenu() {
  const [showAll, setShowAll] = useState(false);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const { selectedCategories, setSelectedCategories } = useProductsContext();

  const toggleSelect = (id: number) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      prev.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  };

  useEffect(() => {
    if (!showAll && ulRef.current) {
      ulRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [showAll]);
  return (
    <div className="absolute min-w-full left-0 top-0 opacity-0 max-h-0 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 py-0.5 flex flex-col items-start overflow-hidden shadow-theme">
      <div className="bg-white w-full px-4 py-2.5">
        <ul
          ref={ulRef}
          className={`pb-3 mb-2 h-36 ${
            showAll ? "overflow-y-scroll" : "overflow-y-hidden"
          }`}
        >
          {categories.length > 0 &&
            categories.map((category) => (
              <li key={category.id}>
                <input
                  className="accent-black"
                  type="checkbox"
                  id={`category-${category.id}`}
                  checked={selectedCategories.has(category.id)}
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
        <ClearAll clearAll={() => setSelectedCategories(new Set())} />
        <ShowMore showAll={showAll} setShowAll={setShowAll} />
      </div>
    </div>
  );
}

export default CategoryMenu;
