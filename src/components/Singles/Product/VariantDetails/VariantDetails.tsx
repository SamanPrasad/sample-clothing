import type { ProductType, SizeType, VariantType } from "@typings";
import { type PropsWithChildren } from "react";
import ColorImages from "./ColorImages";
import Sizes from "./Sizes";
import type { SetStateFuncType } from "types/utils";

type Props = PropsWithChildren<{
  product: ProductType;
  selectedVariant: VariantType | null;
  selectedSize: SizeType | null;
  setVariant: SetStateFuncType<VariantType | null>;
  setSize: SetStateFuncType<SizeType | null>;
  setQuantity: SetStateFuncType<number>;
}>;

function VariantDetails({
  selectedVariant,
  selectedSize,
  setVariant,
  setSize,
  setQuantity,
  product,
}: Props) {
  return (
    <section>
      {selectedSize && (
        <h3 className="text-xs font-theme font-light">
          sku : {selectedSize.sku}
        </h3>
      )}
      {selectedSize && (
        <h1 className="text-3xl font-bold font-theme py-5">
          Rs {selectedSize.price.toLocaleString()}
        </h1>
      )}
      <ColorImages
        selectedVariant={selectedVariant}
        selectedSize={selectedSize}
        setVariant={setVariant}
        setSize={setSize}
        variants={product.variants}
      />
      <Sizes
        selectedVariant={selectedVariant}
        selectedSize={selectedSize}
        setSize={setSize}
        setQuantity={setQuantity}
      />
      {selectedSize == null && (
        <p className="text-red-600 text-sm font-theme mt-2.5">Out of Stock !</p>
      )}
    </section>
  );
}

export default VariantDetails;
