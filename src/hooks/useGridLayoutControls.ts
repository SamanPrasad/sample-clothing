import type { GridLayoutType, GridValueType } from "@typings";
import { useState } from "react";

export interface GridLayoutObjectType {
  layout: GridLayoutType;
  grid: GridValueType;
}

function useGridLayoutControls(
  defaultLayout: GridLayoutType = "horizontal",
  defaultGrid: GridValueType = 4
) {
  const [grid, setGrid] = useState<GridValueType>(defaultGrid);
  const [layout, setLayout] = useState<GridLayoutType>(defaultLayout);

  return { grid, layout, setGrid, setLayout };
}

export type GridLayoutProps = ReturnType<typeof useGridLayoutControls>;

export default useGridLayoutControls;
