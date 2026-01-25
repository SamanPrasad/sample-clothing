import type { ProductType, VariantType } from "../../../types/product";
import Add from "../Add";
import type { GridLayoutType } from "@typings";
import getExcerpt from "@utils/getExcerpt";
import { useMemo, useState } from "react";
import ProductImage from "./ProductImage";
import clsx from "clsx";
import ColorImage from "./ColorImage";
import { useViewWidth } from "@hooks/useViewWidth";
import { Link } from "react-router";
import useNoImage from "@hooks/useNoImage";

interface Props {
  product: ProductType;
  parent: string;
  layout: GridLayoutType;
}

function ProductCard({ product, parent, layout }: Props) {
  const viewWidth = useViewWidth();
  const [selectedVariant, setSelectedVariant] = useState<VariantType>(
    product.variants[0],
  );

  const { variantColors } = useMemo(() => {
    const variantColors = new Set<string>();
    const variantsBasedOnColors = new Map<string, VariantType[]>();
    product.variants.forEach((variant) => {
      variantColors.add(variant.color);

      if (!variantsBasedOnColors.has(variant.color)) {
        variantsBasedOnColors.set(variant.color, []);
      }

      variantsBasedOnColors.get(variant.color)!.push(variant);
    });
    return { variantColors: Array.from(variantColors), variantsBasedOnColors };
  }, [product.variants]);

  const excerpt = useMemo(
    () => getExcerpt(product.description, 200),
    [product],
  );

  const isHorizontal = useMemo(() => {
    return (layout == "vertical" && viewWidth < 550) || layout == "horizontal";
  }, [viewWidth, layout]);

  const QuickAdd = useMemo(() => {
    return <Add title="quick add" selectedProduct={selectedVariant} />;
  }, [selectedVariant]);

  const noImage = useNoImage();

  return (
    <div className={clsx("w-full", { flex: !isHorizontal })}>
      <div
        className={clsx(
          "aspect-[0.7] relative group overflow-hidden rounded-2xl",
          isHorizontal && "w-full",
          !isHorizontal && "w-[250px] sm:w-2/5 md:w-1/3 lg:w-1/4 flex-none",
        )}
      >
        <ProductImage
          src={product.variants[0].images[0] ?? noImage}
          alt={product.title}
          extraClasses="group-hover:opacity-0 z-10"
        />
        <ProductImage
          src={product.variants[0].images[1] ?? noImage}
          alt={product.title}
          extraClasses="opacity-50 group-hover:opacity-100"
        />

        {isHorizontal && (
          <div className="absolute top-[100%] w-full z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-300">
            {QuickAdd}
          </div>
        )}
        <div className="absolute text-center text-xs font-[Poppins] left-2.5 top-2.5 w-12 py-1 bg-white z-30 rounded-2xl">
          <span>New</span>
        </div>
        <Link
          to={`/products/${product.slug}`}
          className="absolute w-full h-full z-20"
        />
      </div>
      <div className={`${isHorizontal ? "mb-10 mt-4" : " ms-8 flex-auto"}`}>
        <h1
          className={clsx(
            "uppercase font-[Poppins] font-semibold text-xs opacity-30 tracking-wider",
            isHorizontal && "text-center",
          )}
        >
          {parent}
        </h1>
        <p
          className={clsx(
            "font-[Poppins] text-xs font-medium mt-1 tracking-wide",
            isHorizontal && "text-center",
          )}
        >
          {product.title}
        </p>
        {!isHorizontal && (
          <p className="hidden sm:block font-[Poppins] text-xs font-normal text-[#232323] mt-3">
            {excerpt}
          </p>
        )}

        <h1
          className={clsx(
            "font-[Poppins] text-sm font-semibold mt-3 tracking-wide",
            isHorizontal && "text-center",
          )}
        >
          {/* Rs {selectedVariant.price} */}
        </h1>
        <div
          className={clsx(
            "flex items-center gap-3 mt-5",
            !isHorizontal && "justify-start",
            isHorizontal && "justify-center",
          )}
        >
          {variantColors.map((color) => {
            const variant = product.variants.find(
              (variant) => variant.color == color,
            )!;
            return (
              <ColorImage
                key={variant.color}
                color={variant.color}
                src={variant.images[0] ?? noImage}
                selected={selectedVariant.color == variant.color}
                toggleSelect={() => setSelectedVariant(variant)}
              />
            );
          })}
        </div>
        <div
          className={clsx(
            "flex items-center gap-3 mt-2",
            !isHorizontal && "justify-start",
            isHorizontal && "justify-center",
          )}
        >
          {/* {variantsBasedOnColors.get(selectedVariant.color)!.map((variant) => {
            return (
              <SizeButton
                key={variant.id}
                size={variant.size}
                available={true}
                selected={variant.size == selectedVariant.size}
                toggleSelect={() => setSelectedVariant(variant)}
              />
            );
          })} */}
        </div>
        {!isHorizontal && <div className="w-full mt-5">{QuickAdd}</div>}
      </div>
    </div>
  );
}

export default ProductCard;
