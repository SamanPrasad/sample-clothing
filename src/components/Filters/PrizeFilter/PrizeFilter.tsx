import { IoIosArrowUp } from "react-icons/io";
import FilterTitle from "../StateComponents/FilterTitle";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import "./PrizeFilter.css";

const min = 0;
const max = 50000;

function PrizeFilter() {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);
  const minRef = useRef<HTMLInputElement | null>(null);
  const maxRef = useRef<HTMLInputElement | null>(null);
  const barRef = useRef<HTMLInputElement | null>(null);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);

  const handleRangeChange = () => {
    if (!minRef.current || !maxRef.current) return;
    setEndValue(Number(maxRef.current.value));
    setStartValue(Number(minRef.current.value));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const element = e.currentTarget;

    if (Number(element.value) < min) {
      element.value = min.toString();
    }

    if (Number(element.value) > max) {
      element.value = max.toString();
    }
    if (element == minInputRef.current) {
      setStartValue(Number(element.value));
      if (minRef.current) minRef.current.value = element.value;
    } else {
      setEndValue(Number(element.value));
      if (maxRef.current) maxRef.current.value = element.value;
    }
  };

  const handleOnMouseLeave = () => {
    minInputRef.current?.blur();
    maxInputRef.current?.blur();
  };

  useEffect(() => {
    const startPercentage =
      (((startValue < endValue ? startValue : endValue) - min) / (max - min)) *
      100;
    const selectedPercentage =
      (Math.abs(endValue - startValue) / (max - min)) * 100;

    if (barRef.current) {
      barRef.current.style.backgroundImage = `linear-gradient(to right, #99a1af 0%, #99a1af ${startPercentage}%, black ${startPercentage}% , black ${
        startPercentage + selectedPercentage
      }%, #99a1af ${startPercentage + selectedPercentage}% ,#99a1af 100%)`;
    }
  }, [startValue, endValue]);

  return (
    <div className="relative group z-50" onMouseLeave={handleOnMouseLeave}>
      <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
        <FilterTitle title="price" />
        <IoIosArrowUp className="mt-0.5 opacity-50 group-hover:rotate-180 duration-300" />
      </div>
      <div className="absolute w-[120%] top-0 left-0 max-h-0 opacity-0 group-hover:top-9 group-hover:max-h-60 group-hover:opacity-100 duration-300 shadow-theme overflow-hidden pt-2.5">
        <div className="w-full bg-white px-3 pb-4">
          <div className="w-full relative flex justify-center items-center h-8">
            <div ref={barRef} className="w-full h-2.5 rounded-2xl"></div>
            <input
              ref={minRef}
              min={min}
              max={max}
              step={1}
              type="range"
              className="slider slider-min w-full absolute"
              onChange={handleRangeChange}
              defaultValue={min}
            />
            <input
              ref={maxRef}
              min={min}
              max={max}
              step={1}
              type="range"
              className="slider slider-max w-full absolute"
              onChange={handleRangeChange}
              defaultValue={max}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              ref={minInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              value={startValue}
              onChange={handleInputChange}
              onBlur={handleInputChange}
            />
            <input
              ref={maxInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              value={endValue}
              onChange={handleInputChange}
              onBlur={handleInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrizeFilter;
