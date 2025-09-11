import { Link } from "react-router";
import getCategoryLink from "@utils/getGroupItemLink";
import type { GroupItem } from "@typings";

interface Props {
  groupItem: GroupItem;
}

function GroupItemCard({ groupItem }: Props) {
  const url = getCategoryLink(groupItem);

  return (
    <div className="w-full group relative perspective-[1000px]">
      <div className="front w-full transform-3d group-hover:rotate-y-180 backface-hidden duration-700">
        <Link to={url}>
          <img
            src={groupItem.img}
            className="image object-cover object-center w-full aspect-square"
          />
          <div className="title w-full mt-5">
            <h1 className="text-3xl font-bold uppercase text-center">
              {groupItem.title}
            </h1>
          </div>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center rotate-y-180 group-hover:rotate-y-360 duration-700 transform-3d backface-hidden absolute left-0 top-0 w-full h-full aspect-square">
        <Link to={url}>
          <button className="uppercase cursor-pointer w-3xs rounded-lg h-20 bg-[#232323] text-2xl font-bold text-white">
            Shop Now
          </button>
        </Link>
        <h2 className="mt-2 text-[#232323]">
          {groupItem.products.length} Products
        </h2>
      </div>
    </div>
  );
}

export default GroupItemCard;
