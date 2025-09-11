interface Props {
  bars?: number;
  active: boolean;
  changeStatus: () => void;
}

function GridSwitcherIcon({ bars = 1, active, changeStatus }: Props) {
  const grid = [];
  for (let i = 0; i < bars; i++) {
    grid.push(
      <svg
        viewBox="0 0 100 4"
        preserveAspectRatio="none"
        style={{ width: "30px", height: "10px" }}
        className="w-[30px] h-[8px] my-0.5 mx-1"
      >
        <line
          x1="0"
          y1="2"
          x2="100"
          y2="2"
          stroke="#232323"
          stroke-width="8"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    );
  }
  return (
    <div
      onClick={() => changeStatus()}
      className={`${active ? "" : "opacity-40"} border border-[#232323]`}
    >
      {grid}
    </div>
  );
}

export default GridSwitcherIcon;
