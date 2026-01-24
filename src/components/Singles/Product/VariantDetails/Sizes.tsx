import type { SizeType, VariantType } from "@typings";
import { useCallback, type PropsWithChildren } from "react";
import clsx from "clsx";
import type { SetStateFuncType } from "types/utils";

type Props = PropsWithChildren<{
  selectedVariant: VariantType | null;
  selectedSize: SizeType | null;
  setQuantity: SetStateFuncType<number>;
  setSize: SetStateFuncType<SizeType | null>;
}>;

function Sizes({ selectedVariant, selectedSize, setSize, setQuantity }: Props) {
  const changeSize = useCallback(
    (size: SizeType) => {
      setQuantity(1);
      setSize(size);
    },
    [setSize, setQuantity],
  );

  console.log("selected size", selectedSize);

  return (
    <section className="mt-4">
      <span className="uppercase text-sm font-theme">select size</span>
      <div className="flex justify-start items-center gap-2.5 mt-2">
        {selectedVariant?.sizes.map((size) => {
          return (
            <span
              className={clsx(
                "border rounded-md w-10 aspect-[3/2.5] flex justify-center items-center text-sm font-theme transition-all duration-200 cursor-pointer uppercase",
                size.size == selectedSize?.size &&
                  " border-black bg-black text-white",
                size.size != selectedSize?.size && " border-gray-400",
                size.availableStock == 0 &&
                  "opacity-40 border-red-600 text-red-600",
                size.availableStock != 0 &&
                  "opacity-100 hover:border-black hover:bg-black hover:text-white",
              )}
              onClick={
                size.availableStock > 0 ? () => changeSize(size) : () => {}
              }
              title={size.availableStock == 0 ? "Out of Stock" : ""}
            >
              {size.size}
            </span>
          );
        })}
      </div>
      {selectedSize && (
        <span className="uppercase text-xs font-theme text-gray-500">
          stock : {selectedSize.availableStock}
        </span>
      )}
    </section>
  );
}

export default Sizes;
