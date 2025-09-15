import type { GridLayoutType, GridValueType } from "@typings";

interface Props {
  bars: GridValueType;
  layout: GridLayoutType;
  active: boolean;
  changeStatus: () => void;
}

function GridSwitcherIcon({ bars, layout, active, changeStatus }: Props) {
  const gridList = [];
  if (layout == "horizontal") {
    for (let i = 0; i < bars; i++) {
      gridList.push(<div className="w-1 h-5 bg-black my-1"></div>);
    }
  } else {
    for (let i = 0; i < 3; i++) {
      gridList.push(<div className="w-5 h-1 bg-black m-1"></div>);
    }
  }
  return (
    <div
      onClick={() => changeStatus()}
      className={`${active ? "" : "opacity-40"} ${
        layout == "horizontal"
          ? "flex justify-center items-center gap-1 px-1"
          : ""
      } border border-[#232323] cursor-pointer`}
    >
      {gridList}
    </div>
  );
}

export default GridSwitcherIcon;
