import { useCallback, type PropsWithChildren } from "react";
import styleObj from "./Quantity.module.css";
import type { SizeType } from "@typings";
import type { SetStateFuncType } from "types/utils";
import clsx from "clsx";

type Props = PropsWithChildren<{
  selectedSize: SizeType | null;
  selectedQuantity: number;
  setQuantity: SetStateFuncType<number>;
}>;

function Quantity({ selectedSize, selectedQuantity, setQuantity }: Props) {
  const changeQuantity = useCallback(
    (operator: "inc" | "dec") => {
      if (operator == "inc" && selectedSize) {
        setQuantity((prev) =>
          prev == selectedSize.availableStock ? prev : prev + 1,
        );
      } else if (operator == "dec" && selectedSize) {
        setQuantity((prev) => (prev == 1 ? 1 : prev - 1));
      }
    },
    [setQuantity, selectedSize],
  );
  return (
    <div className="flex flex-col mt-3">
      <span className="text-sm font-theme uppercase">Quantity</span>
      <div className="flex justify-center border border-gray-500 rounded-3xl w-28 py-1 px-2.5 mt-2.5">
        <button
          className="w-3 text-md font-theme"
          onClick={() => changeQuantity("dec")}
        >
          -
        </button>
        <input
          style={styleObj}
          className={clsx(
            styleObj.quantity,
            "w-16 text-center text-sm font-theme",
          )}
          type="number"
          min="1"
          max={selectedSize?.availableStock}
          value={selectedQuantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
        <button
          className="w-3 text-md font-theme"
          onClick={() => changeQuantity("inc")}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Quantity;
