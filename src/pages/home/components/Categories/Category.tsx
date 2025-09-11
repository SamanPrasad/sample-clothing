import type { GroupItem } from "@typings";
import getGroupItemLink from "@utils/getGroupItemLink";

interface Props {
  data: GroupItem;
}
function Category({ data }: Props) {
  const uri = getGroupItemLink(data);
  return (
    <div className="flex justify-center group/main items-center w-full aspect-[0.8] relative">
      <div className="flex justify-center w-full h-full overflow-hidden relative group-hover/main:rotate-2 group-hover/main:duration-[3s] duration-150">
        <img
          className="w-full h-full object-cover object-center group-hover/main:scale-110 group-hover/main:duration-[3s] duration-150"
          src={data.img}
        />
        <div className="absolute w-[120%] -translate-y-full group-hover/main:translate-y-full -translate-x-full group-hover/main:translate-x-full h-full bg-[linear-gradient(135deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)] group-hover/main:duration-[5s]"></div>
      </div>
      <div className="absolute w-1/2 py-5 group/title hover:bg-amber-100 cursor-pointer duration-300">
        <a href={uri}>
          <button className="w-full text-center uppercase font-bold tracking-wider cursor-pointer group-hover/title:text-[#232323] text-white duration-300">
            {data.title}
          </button>
        </a>
      </div>
    </div>
  );
}

export default Category;
