import type { ProductType } from "../../types/product";
import noImage from "../../assets/no-image.png";
import QuickAdd from "./QuickAdd";
import type { GridLayoutType } from "@typings";
import getExcerpt from "@utils/getExcerpt";
import { useContext } from "react";
import { ViewWidthContext } from "@context/ViewWidthProvider";

interface Props {
  product: ProductType;
  parent: string;
  layout: GridLayoutType;
}

function ProductCard({ product, parent, layout }: Props) {
  const viewWidth = useContext(ViewWidthContext);
  const excerpt = getExcerpt(product.description, 200);

  const isHorizontal =
    (layout == "vertical" && viewWidth < 550) || layout == "horizontal";
  const isVerticle = layout == "vertical" && viewWidth >= 550;

  return (
    <div className={`w-full ${isHorizontal ? "" : "flex"}`}>
      <div
        className={`${
          isHorizontal
            ? "w-full"
            : "w-[250px] sm:w-2/5 md:w-1/3 lg:w-1/4 flex-none"
        } aspect-[0.7] relative group hover:rotate-2 transition-[rotate] duration-[2s] overflow-hidden`}
      >
        <img
          src={product.images[0] ?? noImage}
          alt=""
          className="absolute w-full h-full object-center object-cover transition-[scale,opacity] group-hover:scale-110 group-hover:opacity-0 duration-[2s,0.5s] z-10"
        />
        <img
          src={product.images[1] ?? noImage}
          alt=""
          className="absolute w-full h-full object-center object-cover transition-[scale,opacity] opacity-50 group-hover:scale-110 group-hover:opacity-100 duration-[2s,0.5s]"
        />
        {isHorizontal && (
          <div className="absolute top-[100%] w-full z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-150">
            <QuickAdd />
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
          className={`${
            isVerticle ? "" : "text-center"
          } uppercase font-[Poppins] font-semibold text-xs opacity-30 tracking-wider`}
        >
          {parent}
        </h1>
        <p
          className={`${
            isVerticle ? "" : "text-center"
          } font-[Poppins] text-xs font-medium mt-1 tracking-wide`}
        >
          {product.title}
        </p>
        {isVerticle && (
          <p className="hidden sm:block font-[Poppins] text-xs font-normal text-[#232323] mt-3">
            {excerpt}
          </p>
        )}

        <h1
          className={`${
            isVerticle ? "" : "text-center"
          } font-[Poppins] text-sm font-semibold mt-3 tracking-wide`}
        >
          Rs {product.price}
        </h1>
        {isVerticle && (
          <div className="w-48 mt-5">
            <QuickAdd />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
