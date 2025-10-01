import { useEffect, useRef, useState } from "react";
import ClearAll from "../Shared/ClearAll";
import ShowMore from "../Shared/ShowMore";
import { useProductsContext } from "@hooks/useProductContext";
import { categories } from "@data/categories";
import Dropdown from "@components/Accordion/Dropdown";
import clsx from "clsx";

type Props = {
  isOpen: boolean;
  cssClasses?: string;
};

function CategoryMenu({ isOpen, cssClasses }: Props) {
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
    <div
      className={clsx(
        "min-w-full left-0 top-9 duration-300 overflow-hidden pt-0.5",
        isOpen && "max-h-60 opacity-100",
        !isOpen && "max-h-0 opacity-0",
        cssClasses
      )}
    >
      <Dropdown isOpen={isOpen}>
        <div
          className={clsx(
            "bg-white w-full px-4 pt-1.5 pb-3 duration-300",
            !isOpen && "-translate-y-6"
          )}
        >
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
      </Dropdown>
    </div>
  );
}

export default CategoryMenu;
