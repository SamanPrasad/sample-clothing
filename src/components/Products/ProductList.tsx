import useGridLayoutControls from "@hooks/useGridLayoutControls";
import NotFound from "../NotFound";
import PageTitle from "../PageTitle";
import GridLayout from "../GridLayout/GridLayout";
import Pagination from "../Pagination/Pagination";
import CategoryFilter from "@components/Filters/CategoryFilter";
import SizeFilter from "@components/Filters/SizeFilter";
import PrizeFilter from "@components/Filters/PrizeFilter/PrizeFilter";
import ColorFilter from "@components/Filters/ColorFilter";
import ProductCardList from "./ProductCardList";
import type { ProductResponse } from "@typings";
import PerPage from "@components/PerPage";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { useSearchParams } from "react-router";
import { getCategory } from "../../api/category";
import { getProducts } from "../../api/products";
import Loader from "@components/Loader/Loader";
import useSavePerPage from "@hooks/useSavePerPage";

type Props = {
  title: string;
  queryObj: {
    type: "products" | "categories" | "collections";
    typeItem?: string;
  };
};

const filtersList = [CategoryFilter, SizeFilter, PrizeFilter, ColorFilter];

function ProductList({ title, queryObj }: Props) {
  const gridLayoutControls = useGridLayoutControls();
  const [searchParams] = useSearchParams();
  const { perPage, setPerPage } = useSavePerPage();
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const generateFilter = (Filter: ComponentType<any>, index: number) => {
    return (
      <div key={index} className="w-[15%] mx-2.5">
        {Filter == ColorFilter || Filter == SizeFilter ? (
          <Filter products={products?.products ?? []} />
        ) : (
          <Filter />
        )}
      </div>
    );
  };

  useEffect(() => {
    setLoading(true);
    if (queryObj.type == "categories") {
      const category = getCategory(
        queryObj.typeItem!,
        searchParams.get("page") ?? "1",
        perPage
      );
      setProducts(category);
    } else {
      setProducts(getProducts(searchParams.get("page") ?? "1", perPage));
    }
    setLoading(false);
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchParams, perPage, queryObj]);

  if (loading) {
    return <Loader />;
  }

  if (!products) {
    return (
      <NotFound
        message={`No ${title.charAt(0).toUpperCase()}${title
          .slice(1)
          .toLowerCase()} Found`}
      />
    );
  }

  return (
    <div>
      <PageTitle title={title} />
      <div className="filter hidden lg:flex justify-center z-40">
        {filtersList.map((Filter, index) => {
          if (queryObj.type == "categories") {
            if (Filter != CategoryFilter) return generateFilter(Filter, index);
          } else {
            return generateFilter(Filter, index);
          }
        })}
      </div>
      <div
        ref={scrollRef}
        className="w-full flex flex-col justify-center items-center pt-10 lg:mt-20"
      >
        <div className="flex items-center">
          <h1 className="uppercase text-sm font-semibold font-[Poppins]">
            View as
          </h1>
        </div>
        <div className="relative flex flex-col justify-center items-center w-full mt-1">
          <GridLayout gridLayout={gridLayoutControls} />
          <div className="relative xs:absolute flex w-full justify-center xs:justify-end xs:pe-5 mt-2.5 xs:mt-0">
            <PerPage perPage={perPage} setPerPage={setPerPage} />
          </div>
        </div>
      </div>
      {products.products.length > 0 ? (
        <ProductCardList
          layout={gridLayoutControls.layout}
          grid={gridLayoutControls.grid}
          products={products.products}
          parent={title}
        />
      ) : (
        <div className="py-10 text-2xl">
          <h1>No products found. Please try resetting the filters</h1>
        </div>
      )}

      {products.products.length > 0 && (
        <div className="flex justify-center mb-20">
          <Pagination
            perPage={perPage}
            pagesCount={products.pages}
            total={products.total}
          />
        </div>
      )}
    </div>
  );
}

export default ProductList;
