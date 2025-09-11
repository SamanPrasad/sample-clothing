import useGridLayoutControls from "@hooks/useGridLayoutControls";
import NotFound from "../NotFound";
import PageTitle from "../PageTitle";
import GridLayout from "../GridLayout/GridLayout";
import Pagination from "../Pagination/Pagination";
import CategoryFilter from "@components/Filters/CategoryFilter";
import SizeFilter from "@components/Filters/SizeFilter";
import PrizeFilter from "@components/Filters/PrizeFilter";
import ColorFilter from "@components/Filters/ColorFilter";
import ProductCardList from "./ProductCardList";
import type { ProductResponse } from "@typings";

type Props = {
  products: ProductResponse | null;
  perPage: number;
  title: string;
};

function ProductList({ products, title, perPage }: Props) {
  const gridLayoutControls = useGridLayoutControls();

  if (!products) {
    return <NotFound message="Category Not Found" />;
  }

  return (
    <div>
      <PageTitle title={title} />
      <div className="filter hidden lg:flex justify-center">
        {[CategoryFilter, SizeFilter, PrizeFilter, ColorFilter].map(
          (Filter, index) => (
            <div key={index} className="w-[15%] mx-2.5">
              <Filter />
            </div>
          )
        )}
      </div>
      <div className="w-full flex justify-center mt-10 lg:mt-20">
        <div className="flex justify-center items-center w-full">
          <div className="flex items-center">
            <h1 className="uppercase me-4 text-sm font-semibold font-[Poppins]">
              View as
            </h1>
          </div>
          <GridLayout gridLayout={gridLayoutControls} />
        </div>
        <div className="hidden lg:felx">Pages</div>
        <div className="hidden lg:flex">Sort By</div>
      </div>
      {products.items.length > 0 ? (
        <ProductCardList
          layout={gridLayoutControls.layout}
          grid={gridLayoutControls.grid}
          products={products.items}
          parent={title}
        />
      ) : (
        <div className="py-10 text-2xl">
          <h1>No products found. Please try resetting the filters</h1>
        </div>
      )}

      {products.items.length > 0 && (
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
