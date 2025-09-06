import { useCallback } from "react";
import GridSwitcherIcon from "./GridSwitcherIcon";

interface Props {
  layout: "vertical" | "horizontal";
  gridValue: 2 | 3 | 4 | undefined;
  setLayout: (layout: "vertical" | "horizontal") => void;
  setGridValue: (gridValue: 2 | 3 | 4) => void;
}

function GridLayout({ layout, gridValue, setLayout, setGridValue }: Props) {
  const handleLyaout = useCallback(
    (layout: "vertical" | "horizontal", gridValue?: 2 | 3 | 4 | undefined) => {
      setLayout(layout);
      setGridValue(gridValue ?? 4);
      console.log(layout, gridValue);
    },
    []
  );

  return (
    <div className="flex justify-center items-center">
      <div className="h-10  cursor-pointer">
        <GridSwitcherIcon
          bars={3}
          active={layout == "vertical"}
          changeStatus={() => handleLyaout("vertical")}
        />
      </div>
      <div className="hidden sm:flex justify-center items-center h-8  rotate-90 cursor-pointer">
        <GridSwitcherIcon
          bars={2}
          active={layout == "horizontal" && gridValue == 2}
          changeStatus={() => handleLyaout("horizontal", 2)}
        />
      </div>
      <div className="hidden md:flex justify-center items-center  h-11  rotate-90 translate-x-0.5 cursor-pointer">
        <GridSwitcherIcon
          bars={3}
          active={layout == "horizontal" && gridValue == 3}
          changeStatus={() => handleLyaout("horizontal", 3)}
        />
      </div>
      <div className="hidden lg:flex justify-center items-center h-13  rotate-90 translate-x-3.5 cursor-pointer">
        <GridSwitcherIcon
          bars={4}
          active={layout == "horizontal" && gridValue == 4}
          changeStatus={() => handleLyaout("horizontal", 4)}
        />
      </div>
    </div>
  );
}

export default GridLayout;
