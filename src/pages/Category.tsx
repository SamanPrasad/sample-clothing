import { useParams } from "react-router";
import PageTitle from "../components/PageTitle";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import type { CategoryType } from "../types/category";
import CategoryFilter from "../components/HeaderSection/Components/Filters/CategoryFilter";
import SizeFilter from "../components/HeaderSection/Components/Filters/SizeFilter";
import PrizeFilter from "../components/HeaderSection/Components/Filters/PrizeFilter";
import ColorFilter from "../components/HeaderSection/Components/Filters/ColorFilter";
import ProductPreview from "../components/Products/ProductPreview";
import { categories } from "../data/categories";
import useViewWidth from "../hooks/useViewWidth";
import GridLayout from "../components/GridLayout";

function Category() {
  const { categorySlug } = useParams();
  const [category, setCategory] = useState<CategoryType | null>(null);
  const [loading, setLoading] = useState(true);
  const viewWidth = useViewWidth();
  const [grid, setGrid] = useState<2 | 3 | 4>(4);
  const [layout, setLayout] = useState<"vertical" | "horizontal">("horizontal");

  useEffect(() => {
    setLoading(true);
    setCategory(categories.find((item) => item.slug == categorySlug) ?? null);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (viewWidth >= 1024) {
    }
  }, [viewWidth]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {category ? (
        <div>
          <PageTitle title={category?.title ?? ""} />
          <div className="filter hidden lg:flex justify-center">
            <div className="w-[15%] mx-2.5">
              <CategoryFilter />
            </div>
            <div className="w-[15%] mx-2.5">
              <SizeFilter />
            </div>
            <div className="w-[15%] mx-2.5">
              <PrizeFilter />
            </div>
            <div className="w-[15%] mx-2.5">
              <ColorFilter />
            </div>
          </div>
          <div className="w-full flex justify-center mt-20">
            <div className="flex justify-center items-center w-full">
              <div className="flex items-center">
                <h1 className="uppercase me-4 text-sm font-semibold font-[Poppins]">
                  View as
                </h1>
              </div>
              <GridLayout
                layout={layout}
                gridValue={grid}
                setLayout={(layout: "vertical" | "horizontal") =>
                  setLayout(layout)
                }
                setGridValue={(gridValue: 2 | 3 | 4) => setGrid(gridValue)}
              />
            </div>
          </div>
          <div
            className={`w-full grid ${
              layout == "vertical"
                ? "grid-cols-1"
                : grid == 2
                ? "grid-cols-2"
                : grid == 3
                ? "grid-cols-3"
                : "grid-cols-4"
            }  gap-7 mb-28 px-4 mt-10`}
          >
            {category.products.map((item) => (
              <ProductPreview product={item} parent={category.title} />
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
}

export default Category;
