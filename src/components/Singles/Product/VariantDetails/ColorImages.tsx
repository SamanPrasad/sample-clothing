import type { SizeType, VariantType } from "@typings";
import { useCallback, type PropsWithChildren } from "react";
import clsx from "clsx";
import type { SetStateFuncType } from "types/utils";

type Props = PropsWithChildren<{
  variants: VariantType[];
  selectedVariant: VariantType | null;
  selectedSize: SizeType | null;
  setVariant: SetStateFuncType<VariantType | null>;
  setSize: SetStateFuncType<SizeType | null>;
}>;

function ColorImages({
  variants,
  selectedVariant,
  setVariant,
  setSize,
}: Props) {
  const setSelectedVariant = useCallback(
    (variant: VariantType) => {
      setVariant(variant);

      setSize((prev) => {
        //if the already selected size is in the new variant,
        // use it or set the first size of the new variant of which stock > 0
        const existingSize =
          prev &&
          variant.sizes.find((size) => {
            return size.size == prev.size && size.availableStock > 0;
          });

        return existingSize
          ? existingSize
          : variant.sizes.find((size) => size.availableStock > 0) || null;
      });
    },
    [setVariant],
  );
  return (
    <div className="mt-2.5">
      <span className="uppercase text-sm font-theme">
        select color : {selectedVariant?.color}
      </span>
      <div className="flex justify-start items-center gap-2.5 mt-2">
        {variants.map((variant) => {
          return (
            <div
              className={clsx(
                "w-7 aspect-square rounded-3xl transition-all duration-300 border flex justify-center items-center overflow-hidden cursor-pointer",
                variant.color == selectedVariant?.color && "border-gray-600",
                variant.color != selectedVariant?.color && "border-transparent",
              )}
            >
              <img
                className={clsx(
                  "rounded-3xl transition-all duration-300",
                  variant.color == selectedVariant?.color && "w-3/5 h-3/5",
                  variant.color != selectedVariant?.color && "w-full h-full",
                )}
                src={"/products/" + variant.images[0] + ".jpg"}
                onClick={() => setSelectedVariant(variant)}
              ></img>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ColorImages;
