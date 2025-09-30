import useGridLayoutControls from "@hooks/useGridLayoutControls";
import NotFound from "../NotFound";
import PageTitle from "../PageTitle";
import Pagination from "../Pagination/Pagination";
import ProductCardList from "./ProductCardList";
import type { ProductResponse } from "@typings";
import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { getCategory } from "../../api/category";
import { getProducts } from "../../api/products";
import Loader from "@components/Loader/Loader";
import useSavePerPage from "@hooks/useSavePerPage";
import ProductProvider from "@context/ProductProvider";
import GridLayout from "./GridLayout";
import DesktopFiltersList from "./FiltersList/Desktop";

type Props = {
  title: string;
  queryObj: {
    type: "products" | "categories" | "collections";
    typeItem?: string;
  };
};

function ProductList({ title, queryObj }: Props) {
  const gridLayoutControls = useGridLayoutControls();
  const [searchParams] = useSearchParams();
  const { perPage, setPerPage } = useSavePerPage();
  const [products, setProducts] = useState<ProductResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<number>>(
    new Set()
  );
  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());

  useEffect(() => {
    //FOr API integration
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

  const hasProducts = products.products.length > 0;

  return (
    <ProductProvider
      context={{
        products: products,
        selectedColors: selectedColors,
        setSelectedColors: setSelectedColors,
        selectedCategories: selectedCategories,
        setSelectedCategories: setSelectedCategories,
        selectedSizes: selectedSizes,
        setSelectedSizes: setSelectedSizes,
      }}
    >
      <div>
        <PageTitle title={title} />
        <DesktopFiltersList type={queryObj.type} products={products} />
        <div ref={scrollRef}>
          <GridLayout
            gridLayoutControls={gridLayoutControls}
            perPage={perPage}
            setPerPage={setPerPage}
            products={products}
            type={queryObj.type}
          />
        </div>
        {hasProducts ? (
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

        {hasProducts && (
          <div className="flex justify-center mb-20">
            <Pagination
              perPage={perPage}
              pagesCount={products.pages}
              total={products.total}
            />
          </div>
        )}
      </div>
    </ProductProvider>
  );
}

export default ProductList;
