import SizeFilter from "@components/Filters/SizeFilter/SizeFilter";
import MobileMenu from "@components/MobileMenu/MobileMenu";
import { useLockBodyScroll } from "@hooks/useLockBodyScroll";
import { useViewWidth } from "@hooks/useViewWidth";
import type { ProductResponse } from "@typings";
import { useEffect, useState } from "react";
import { CiFilter } from "react-icons/ci";
import FilterItem from "../FilterItem";
import CategoryFilter from "@components/Filters/CategoryFilter";
import * as motion from "motion/react-client";
import ColorFilter from "@components/Filters/ColorFilter";
import PrizeFilter from "@components/Filters/PrizeFilter";

type Props = {
  type: string;
  products: ProductResponse;
};

const filtersList = [CategoryFilter, SizeFilter, PrizeFilter, ColorFilter];

function FiltersList({ products, type }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const width = useViewWidth();
  useLockBodyScroll(isOpen);

  //close filter menu when view port get larger
  useEffect(() => {
    if (width >= 1024 && isOpen) {
      setIsOpen(false);
    }
  }, [width]);

  return (
    <div className="lg:hidden flex justify-center items-center">
      <button onClick={() => setIsOpen(true)}>
        <CiFilter className="text-2xl" />
      </button>
      <MobileMenu
        openState={isOpen}
        setOpenState={setIsOpen}
        widthClasses="xs:w-2/3 sm:w-1/2 md:w-2/5"
      >
        <motion.div
          className="w-full px-5 mt-2.5"
          initial={{ x: "-100%" }}
          animate={{ x: isOpen ? 0 : "-100%" }}
          transition={{ duration: isOpen ? 0.3 : 0.5, delay: isOpen ? 0.4 : 0 }}
        >
          {filtersList.map((Filter, index) => {
            return type == "categories" && Filter === CategoryFilter ? null : (
              <div key={index} className="w-full">
                <FilterItem
                  key={index}
                  Filter={Filter}
                  products={products.products}
                />
              </div>
            );
          })}
        </motion.div>
      </MobileMenu>
    </div>
  );
}

export default FiltersList;
