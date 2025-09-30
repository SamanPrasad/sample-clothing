import type { ProductType } from "../../../types/product";
import Add from "../Add";
import type { CartItem, GridLayoutType } from "@typings";
import getExcerpt from "@utils/getExcerpt";
import { useCallback, useMemo, useState } from "react";
import ProductImage from "./ProductImage";
import clsx from "clsx";
import ColorImage from "./ColorImage";
import SizeButton from "@components/Filters/SizeFilter/SizeButton";
import { useViewWidth } from "@hooks/useViewWidth";

interface Props {
  product: ProductType;
  parent: string;
  layout: GridLayoutType;
}

function ProductCard({ product, parent, layout }: Props) {
  const viewWidth = useViewWidth();
  const [selectedVariant, setSelectedVariant] = useState<CartItem>({
    product,
    color: product.colors[0] ?? "black",
    size: product.sizes[0],
  });

  const excerpt = useMemo(
    () => getExcerpt(product.description, 200),
    [product.description]
  );

  const isHorizontal = useMemo(() => {
    return (layout == "vertical" && viewWidth < 550) || layout == "horizontal";
  }, [viewWidth, layout]);

  const QuickAdd = <Add title="quick add" selectedProduct={selectedVariant} />;

  const toggleColor = useCallback((color: string) => {
    setSelectedVariant((prev) => prev && { ...prev, color });
  }, []);

  const toggleSize = useCallback((size: string) => {
    setSelectedVariant((prev) => prev && { ...prev, size });
  }, []);

  return (
    <div className={clsx("w-full", { flex: !isHorizontal })}>
      <div
        className={clsx(
          "aspect-[0.7] relative group hover:rotate-2 transition-[rotate] duration-[2s] overflow-hidden",
          isHorizontal && "w-full",
          !isHorizontal && "w-[250px] sm:w-2/5 md:w-1/3 lg:w-1/4 flex-none"
        )}
      >
        <ProductImage
          src={product.images[0]}
          alt={product.title}
          extraClasses="group-hover:opacity-0 z-10"
        />
        <ProductImage
          src={product.images[1]}
          alt={product.title}
          extraClasses="opacity-50 group-hover:opacity-100"
        />

        {isHorizontal && (
          <div className="absolute top-[100%] w-full z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-150">
            {QuickAdd}
          </div>
        )}
        <div className="absolute text-center text-xs font-[Poppins] left-0 top-0 w-12 py-1 bg-white z-30">
          <span>New</span>
        </div>
        <a
          href={`/products/${product.slug}`}
          className="absolute w-full h-full z-20"
        />
      </div>
      <div className={`${isHorizontal ? "mb-10 mt-4" : " ms-8 flex-auto"}`}>
        <h1
          className={clsx(
            "uppercase font-[Poppins] font-semibold text-xs opacity-30 tracking-wider",
            isHorizontal && "text-center"
          )}
        >
          {parent}
        </h1>
        <p
          className={clsx(
            "font-[Poppins] text-xs font-medium mt-1 tracking-wide",
            isHorizontal && "text-center"
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
            isHorizontal && "text-center"
          )}
        >
          Rs {product.price}
        </h1>
        <div
          className={clsx(
            "flex items-center gap-3 mt-5",
            !isHorizontal && "justify-start",
            isHorizontal && "justify-center"
          )}
        >
          {product.colors.map((color) => (
            <ColorImage
              color={color}
              src={product.images[0]}
              selected={selectedVariant?.color == color}
              toggleSelect={() => toggleColor(color)}
            />
          ))}
        </div>
        <div
          className={clsx(
            "flex items-center gap-3 mt-2",
            !isHorizontal && "justify-start",
            isHorizontal && "justify-center"
          )}
        >
          {product.sizes.map((size) => (
            <SizeButton
              size={size}
              available={true}
              selected={selectedVariant?.size == size}
              toggleSelect={() => toggleSize(size)}
            />
          ))}
        </div>
        {!isHorizontal && <div className="w-48 mt-5">{QuickAdd}</div>}
      </div>
    </div>
  );
}

export default ProductCard;
