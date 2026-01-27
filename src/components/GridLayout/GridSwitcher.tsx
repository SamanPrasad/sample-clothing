import { useCallback, useEffect } from "react";
import GridSwitcherIcon from "./GridSwitcherIcon";
import type { GridLayoutProps } from "../../hooks/useGridLayoutControls";
import type { GridLayoutType, GridValueType } from "@typings";
import { useViewWidth } from "@hooks/useViewWidth";

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
  classList?: string;
}[] = [
  {
    grid: 3,
    layout: "vertical",
  },
  {
    grid: 1,
    layout: "horizontal",
    classList: "block sm:hidden",
  },
  {
    grid: 2,
    layout: "horizontal",
    classList: "hidden xs:block",
  },
  {
    grid: 3,
    layout: "horizontal",
    classList: "hidden md:block",
  },
  {
    grid: 4,
    layout: "horizontal",
    classList: "hidden lg:block",
  },
];

function GridSwitcher({ gridLayout }: Props) {
  const { width: viewWidth } = useViewWidth();

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
    [gridLayout],
  );

  useEffect(() => {
    if (gridLayout.layout == "horizontal")
      gridLayout.setGrid(getGridValue(viewWidth));
  }, [viewWidth]);

  return (
    <div className="flex justify-center items-center my-2.5 xs:my-0 z-30">
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
          <div key={index} className={`${gridItem.classList} mx-0.5`}>
            <GridSwitcherIcon
              bars={gridItem.grid}
              active={isActive}
              layout={gridItem.layout}
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

export default GridSwitcher;
