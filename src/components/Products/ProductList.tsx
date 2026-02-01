import useGridLayoutControls from "@hooks/useGridLayoutControls";
import NotFound from "../NotFound";
import PageTitle from "../PageTitle";
import Pagination from "../Pagination/Pagination";
import ProductCardList from "./ProductCardList";
import { useEffect, useRef, useState } from "react";
import Loader from "@components/Loader/Loader";
import useSavePerPage from "@hooks/useSavePerPage";
import ProductProvider from "@context/ProductProvider";
import GridLayout from "./GridLayout";
import DesktopFiltersList from "./FiltersList/Desktop";
import useProducts from "@hooks/useProducts";

type Props = {
  title: string;
  queryObj: {
    type: "products" | "categories" | "collections";
    typeItem?: string;
  };
};

function ProductList({ title, queryObj }: Props) {
  const gridLayoutControls = useGridLayoutControls();
  const { perPage, setPerPage } = useSavePerPage();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { products, numberOfPages, total, loading } = useProducts(
    currentPage,
    perPage,
  );
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selectedColors, setSelectedColors] = useState<Set<string>>(new Set());
  const [selectedCategories, setSelectedCategories] = useState<Set<number>>(
    new Set(),
  );
  const [selectedSizes, setSelectedSizes] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (numberOfPages != 0 && numberOfPages < currentPage) {
      setCurrentPage(numberOfPages);
    }
  }, [perPage, numberOfPages]);

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

  const hasProducts = products.length > 0;

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
      <div className="px-10">
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
            products={products}
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
              pagesCount={numberOfPages}
              total={total}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </ProductProvider>
  );
}

export default ProductList;
