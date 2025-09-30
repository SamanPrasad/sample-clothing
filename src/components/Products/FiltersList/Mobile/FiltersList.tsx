// import SizeFilter from "@components/Filters/SizeFilter/Mobile";
import Overlay from "@components/Overlay";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";
import { useViewWidth } from "@hooks/useViewWidth";
import type { ProductResponse } from "@typings";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

type Props = {
  type: string;
  products: ProductResponse;
};

// const filtersList = [SizeFilter];

function FiltersList({}: Props) {
  const [open, setOpen] = useState(false);
  const width = useViewWidth();
  useLockBodyScroll(open);

  //close filter menu when view port get larger
  useEffect(() => {
    if (width >= 1024 && open) {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className="lg:hidden flex justify-center items-center">
      <button onClick={() => setOpen(true)}>
        <CiFilter className="text-2xl" />
      </button>
      <Overlay openStatus={open} close={() => setOpen(false)} />
      <div
        className={clsx(
          "fixed top-0 left-0 -translate-x-full bg-amber-500 w-full xs:w-2/3 sm:w-1/2 md:w-2/5 h-lvh z-[100] duration-700 ease-in-out",
          open && "translate-x-0"
        )}
      >
        <button onClick={() => setOpen(false)}>
          <IoClose />
        </button>
        FiltersList
      </div>
    </div>
  );
}

export default FiltersList;
