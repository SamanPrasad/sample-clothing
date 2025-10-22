import GridSwitcher from "@components/GridLayout/GridSwitcher";
import PerPage from "@components/PerPage";
import type { GridLayoutProps } from "@hooks/useGridLayoutControls";
import { type Dispatch, type SetStateAction } from "react";
import FiltersList from "./FiltersList/Mobile";
import type { ProductType } from "@typings";

type Props = {
  gridLayoutControls: GridLayoutProps;
  perPage: number;
  setPerPage: Dispatch<SetStateAction<number>>;
  type: string;
  products: ProductType[];
};

function GridLayout({
  gridLayoutControls,
  perPage,
  setPerPage,
  type,
  products,
}: Props) {
  return (
    <div className="w-full flex flex-col xs:flex-row justify-between items-center mt-[5vw] xs:mt-0 lg:mt-20 px-6">
      <FiltersList products={products} type={type} />
      <div className="relative lg:left-1/2 lg:-translate-x-1/2">
        <GridSwitcher gridLayout={gridLayoutControls} />
      </div>
      <PerPage perPage={perPage} setPerPage={setPerPage} />
    </div>
  );
}

export default GridLayout;
