import { useCallback, useContext, useEffect } from "react";
import GridSwitcherIcon from "./GridSwitcherIcon";
import type { GridLayoutProps } from "../../hooks/useGridLayoutControls";
import type { GridLayoutType, GridValueType } from "@typings";
import { ViewWidthContext } from "@context/ViewWidthProvider";

type Props = {
  gridLayout: GridLayoutProps;
};

const getGridValue = (width: number) => {
  if (width < 480) return 1;
  if (width < 768) return 2;
  if (width < 1024) return 3;
  return 4;
};

const gridOptions: {
  grid: GridValueType;
  layout: GridLayoutType;
  classList: string;
}[] = [
  {
    grid: 3,
    layout: "vertical",
    classList: "vertical h-10 cursor-pointer",
  },
  {
    grid: 1,
    layout: "horizontal",
    classList:
      "horizontal-cols-01 flex sm:hidden justify-center items-center h-8  rotate-90 cursor-pointer",
  },
  {
    grid: 2,
    layout: "horizontal",
    classList:
      "horizontal-cols-2 hidden xs:flex justify-center items-center h-8 rotate-90 cursor-pointer",
  },
  {
    grid: 3,
    layout: "horizontal",
    classList:
      "horizontal-cols-3 hidden md:flex justify-center items-center h-11 rotate-90 cursor-pointer",
  },
  {
    grid: 4,
    layout: "horizontal",
    classList:
      "horizontal-cols-4 hidden lg:flex justify-center items-center h-13 rotate-90 translate-x-3 cursor-pointer",
  },
];

function GridLayout({ gridLayout }: Props) {
  const viewWidth = useContext(ViewWidthContext);

  const handleLayout = useCallback(
    ({
      layout,
      gridValue,
    }: {
      layout: GridLayoutType;
      gridValue?: GridValueType | undefined;
    }) => {
      gridLayout.setLayout(layout);
      gridLayout.setGrid(gridValue ?? 4);
    },
    [gridLayout]
  );

  useEffect(() => {
    if (gridLayout.layout == "horizontal")
      gridLayout.setGrid(getGridValue(viewWidth));
  }, [viewWidth]);

  return (
    <div className="flex justify-center items-center">
      {gridOptions.map((gridItem, index) => {
        const isActive =
          gridItem.layout == "vertical"
            ? gridLayout.layout == gridItem.layout
            : gridLayout.layout == gridItem.layout &&
              gridLayout.grid == gridItem.grid;

        const handleLayoutObject =
          gridItem.layout == "vertical"
            ? { layout: gridItem.layout }
            : { layout: gridItem.layout, gridValue: gridItem.grid };

        return (
          <div key={index} className={gridItem.classList}>
            <GridSwitcherIcon
              bars={gridItem.grid}
              active={isActive}
              changeStatus={() => {
                handleLayout(handleLayoutObject);
              }}
            />
          </div>
        );
      })}
    </div>
  );
}

export default GridLayout;
