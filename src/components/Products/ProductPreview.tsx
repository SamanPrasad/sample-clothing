import type { ProductType } from "../../types/product";
import noImage from "../../assets/no-image.png";
import QuickAdd from "./QuickAdd";

interface Props {
  product: ProductType;
  parent: string;
}

function ProductPreview({ product, parent }: Props) {
  return (
    <div className="w-full">
      <div className="w-full aspect-[0.7] relative group hover:rotate-2 duration-[2s] overflow-hidden">
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
        <div className="absolute top-[100%] w-full z-30 opacity-0 group-hover:opacity-100 group-hover:-translate-y-full duration-150">
          <QuickAdd />
        </div>
        <div className="absolute text-center text-xs font-[Poppins] left-0 top-0 w-12 py-1 bg-white z-30">
          <span>New</span>
        </div>
        <a href={`/${product.slug}`} className="absolute w-full h-full z-20" />
      </div>
      <div className="mb-10 mt-4">
        <h1 className="text-center uppercase font-[Poppins] font-semibold text-xs opacity-30 tracking-wider">
          {parent}
        </h1>
        <p className="text-center font-[Poppins] text-sm mt-1 tracking-wide">
          {product.title}
        </p>
        <h1 className="text-center font-[Poppins] text-sm font-semibold mt-3 tracking-wide">
          Rs {product.price}
        </h1>
      </div>
    </div>
  );
}

export default ProductPreview;
