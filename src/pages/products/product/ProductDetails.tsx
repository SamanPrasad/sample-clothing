import AddToCart from "@components/Singles/Product/AddToCart/AddToCart";
import Quantity from "@components/Singles/Product/Quantity/Quantity";
import VariantDetails from "@components/Singles/Product/VariantDetails/VariantDetails";
import type { ProductType, SizeType, VariantType } from "@typings";
import { type PropsWithChildren } from "react";
import type { SetStateFuncType } from "types/utils";

type Props = PropsWithChildren<{
  product: ProductType | null;
  selectedVariant: VariantType | null;
  selectedSize: SizeType | null;
  selectedQuantity: number;
  setVariant: SetStateFuncType<VariantType | null>;
  setSize: SetStateFuncType<SizeType | null>;
  setQuantity: SetStateFuncType<number>;
}>;

function ProductDetails({
  product,
  selectedVariant,
  selectedSize,
  selectedQuantity,
  setVariant,
  setSize,
  setQuantity,
}: Props) {
  if (!product || !selectedVariant) {
    return <h2>No Product Found</h2>;
  }

  return (
    <div className="mb-2.5">
      <h2 className="text-3xl font-theme">{product.title}</h2>
      <VariantDetails
        selectedVariant={selectedVariant}
        selectedSize={selectedSize}
        setVariant={setVariant}
        setSize={setSize}
        setQuantity={setQuantity}
        product={product}
      />
      <Quantity
        selectedSize={selectedSize}
        selectedQuantity={selectedQuantity}
        setQuantity={setQuantity}
      />
      <div className="mt-10">
        <AddToCart
          productId={product.id}
          variant={selectedVariant.color}
          size={selectedSize?.size}
          count={selectedQuantity}
        />
      </div>
      <div className="mt-10 flex flex-col items-start">
        <div className="pb-2.5 border-b-2 border-black">
          <span className="font-theme text-sm font-normal">Description</span>
        </div>
        <div className="border-t border-gray-300 py-8 font-theme text-sm font-light">
          {product.description}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
