import useGridLayoutControls from "@hooks/useGridLayoutControls";
import NotFound from "../NotFound";
import PageTitle from "../PageTitle";
import GridLayout from "../GridLayout/GridLayout";
import Pagination from "../Pagination/Pagination";
import type { Response } from "@typings";
import CategoryFilter from "@components/Filters/CategoryFilter";
import SizeFilter from "@components/Filters/SizeFilter";
import PrizeFilter from "@components/Filters/PrizeFilter";
import ColorFilter from "@components/Filters/ColorFilter";
import ProductsList from "@components/Products/ProductsList";

type Props = {
  data: Response | null;
  perPage: number;
};

function ItemsGroup({ data, perPage }: Props) {
  const gridLayoutControls = useGridLayoutControls();

  if (!data) {
    return <NotFound message="Category Not Found" />;
  }

  return (
    <div>
      <PageTitle title={data.category.title ?? ""} />
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
      {data.products.length > 0 ? (
        <ProductsList
          layout={gridLayoutControls.layout}
          grid={gridLayoutControls.grid}
          products={data.products}
          parent={data.category.title}
        />
      ) : (
        <div className="py-10 text-2xl">
          <h1>No data found. Please try resetting the filters</h1>
        </div>
      )}

      {data.products.length > 0 && (
        <div className="flex justify-center mb-20">
          <Pagination
            perPage={perPage}
            pagesCount={data.pages}
            total={data.total}
          />
        </div>
      )}
    </div>
  );
}

export default ItemsGroup;
