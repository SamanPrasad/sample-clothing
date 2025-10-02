import { useState } from "react";
import PrizeMenu from "./PrizeMenu";
import DesktopFilterHead from "../Shared/FilterHead/Desktop";
import MobileFilterHead from "../Shared/FilterHead/Mobile";

function PrizeFilter() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative w-full z-50">
      <div
        className="hidden lg:flex w-full"
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <DesktopFilterHead title="prize" isOpen={isOpen} />
        <PrizeMenu isOpen={isOpen} cssClasses="absolute shadow-theme" />
      </div>
      <div className="flex flex-col lg:hidden w-full">
        <div className="w-full" onClick={() => setIsOpen((prev) => !prev)}>
          <MobileFilterHead title="prize" isOpen={isOpen} />
        </div>
        <PrizeMenu isOpen={isOpen} />
      </div>
    </div>
  );
}

export default PrizeFilter;
