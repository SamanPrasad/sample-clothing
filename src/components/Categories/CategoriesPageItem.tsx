import useCategoryLink from "../../hooks/useCategoryLink";
import type { CategoryType } from "../../types/category";

interface Props {
  data: CategoryType;
}

function CategoriesPageItem({ data }: Props) {
  const url = useCategoryLink(data);

  return (
    <div className="w-full group relative perspective-[1000px]">
      <div className="front w-full transform-3d group-hover:rotate-y-180 backface-hidden duration-700">
        <a href={url}>
          <img
            src={data.img}
            className="image object-cover object-center w-full aspect-square"
          />
          <div className="title w-full mt-5">
            <h1 className="text-3xl font-bold uppercase text-center">
              {data.title}
            </h1>
          </div>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center rotate-y-180 group-hover:rotate-y-360 duration-700 transform-3d backface-hidden absolute left-0 top-0 w-full h-full aspect-square">
        <a href={url}>
          <button className="uppercase cursor-pointer w-3xs rounded-lg h-20 bg-[#232323] text-2xl font-bold text-white">
            Shop Now
          </button>
        </a>
        <h2 className="mt-2 text-[#232323]">{data.products.length} Products</h2>
      </div>
    </div>
  );
}

export default CategoriesPageItem;
