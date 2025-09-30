import { IoIosArrowUp } from "react-icons/io";
import FilterTitle from "../StateComponents/FilterTitle";
import { useMemo, useRef, useState } from "react";
import "./PrizeFilter.css";

const min = 0;
const max = 50000;

function PrizeFilter() {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);

  const handleOnMouseLeave = () => {
    minInputRef.current?.blur();
    maxInputRef.current?.blur();
  };

  const backgroundImage = useMemo(() => {
    const start = Math.min(startValue, endValue);
    const end = Math.max(startValue, endValue);
    const startPercentage = ((start - min) / (max - min)) * 100;
    const endPercentage = ((end - min) / (max - min)) * 100;

    return `linear-gradient(to right, #99a1af 0%, #99a1af ${startPercentage}%, black ${startPercentage}% , black ${endPercentage}%, #99a1af ${endPercentage}% , #99a1af 100%)`;
  }, [startValue, endValue, min, max]);

  return (
    <div className="relative group z-50" onMouseLeave={handleOnMouseLeave}>
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="price" />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <div className="absolute w-[120%] top-0 left-0 max-h-0 opacity-0 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 shadow-theme overflow-hidden pt-2.5">
        <div className="w-full bg-white px-3 pb-4">
          <div className="w-full relative flex justify-center items-center h-8">
            <div
              className="w-full h-2.5 rounded-2xl"
              style={{ backgroundImage }}
            ></div>
            <input
              min={min}
              max={max}
              step={1}
              type="range"
              className="slider slider-min w-full absolute"
              onChange={(e) => setStartValue(Number(e.currentTarget.value))}
              value={startValue}
            />
            <input
              min={min}
              max={max}
              step={1}
              type="range"
              className="slider slider-max w-full absolute"
              onChange={(e) => setEndValue(Number(e.currentTarget.value))}
              value={endValue}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              ref={minInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              value={startValue}
              onChange={(e) => Number(e.currentTarget.value)}
              onBlur={(e) => Number(e.currentTarget.value)}
            />
            <input
              ref={maxInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              value={endValue}
              onChange={(e) => Number(e.currentTarget.value)}
              onBlur={(e) => Number(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeFilter;
