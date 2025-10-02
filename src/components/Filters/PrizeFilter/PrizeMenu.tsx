import Dropdown from "@components/Accordion/Dropdown";
import clsx from "clsx";
import { useMemo, useRef, useState } from "react";
import prizeStyles from "./PrizeFilter.module.css";

type Props = {
  isOpen: boolean;
  cssClasses?: string;
};

const min = 0;
const max = 50000;

function PrizeMenu({ isOpen, cssClasses }: Props) {
  const [startValue, setStartValue] = useState(min);
  const [endValue, setEndValue] = useState(max);
  const minInputRef = useRef<HTMLInputElement | null>(null);
  const maxInputRef = useRef<HTMLInputElement | null>(null);

  const backgroundImage = useMemo(() => {
    const start = Math.min(startValue, endValue);
    const end = Math.max(startValue, endValue);
    const startPercentage = ((start - min) / (max - min)) * 100;
    const endPercentage = ((end - min) / (max - min)) * 100;

    return `linear-gradient(to right, #99a1af 0%, #99a1af ${startPercentage}%, black ${startPercentage}% , black ${endPercentage}%, #99a1af ${endPercentage}% , #99a1af 100%)`;
  }, [startValue, endValue, min, max]);

  const handleOnMouseLeave = () => {
    minInputRef.current?.blur();
    maxInputRef.current?.blur();
  };

  return (
    <div
      className={clsx(
        "w-full top-9 left-0 duration-300 overflow-hidden pt-0.5",
        isOpen && "max-h-60 opacity-100",
        !isOpen && "max-h-0 opacity-0",
        cssClasses
      )}
      onMouseLeave={handleOnMouseLeave}
    >
      <Dropdown isOpen={isOpen}>
        <div
          className={clsx(
            "w-full bg-white px-3 pt-1.5 pb-3",
            !isOpen && "-translate-y-9 duration-300"
          )}
        >
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
              className={clsx("w-full absolute", prizeStyles["slider"])}
              onChange={(e) => setStartValue(Number(e.currentTarget.value))}
              value={startValue}
            />
            <input
              min={min}
              max={max}
              step={1}
              type="range"
              className={clsx("w-full absolute", prizeStyles["slider"])}
              onChange={(e) => setEndValue(Number(e.currentTarget.value))}
              value={endValue}
            />
          </div>
          <div className="w-full flex justify-between">
            <input
              ref={minInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              onChange={(e) => setStartValue(Number(e.currentTarget.value))}
              onBlur={(e) => setStartValue(Number(e.currentTarget.value))}
              value={startValue}
            />
            <input
              ref={maxInputRef}
              className="w-2/5 p-1.5 border border-gray-500"
              type="number"
              onChange={(e) => setEndValue(Number(e.currentTarget.value))}
              onBlur={(e) => setEndValue(Number(e.currentTarget.value))}
              value={endValue}
            />
          </div>
        </div>
      </Dropdown>
    </div>
  );
}

export default PrizeMenu;
