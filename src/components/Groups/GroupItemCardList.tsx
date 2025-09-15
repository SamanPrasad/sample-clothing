import PageTitle from "@components/PageTitle";
import type { Group } from "@typings";
import GroupItemCard from "./GroupItemCard";

type Props = {
  group: Group;
};

function GroupItemCardList({ group }: Props) {
  return (
    <div>
      <PageTitle title={group.title} />
      <div className="w-full flex flex-col items-center bg-white mt-5 mb-40 px-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[repeat(3,minmax(0,370px))] justify-center gap-x-10 gap-y-28">
          {group.items.map((item, index) => (
            <GroupItemCard key={index} groupItem={item} />
          ))}
        </div>
        <div className="loadmore mt-16">
          <button className="uppercase w-xs border border-[#232323] py-3 font-bold text-[#232323] hover:bg-[#232323] hover:text-white cursor-pointer">
            Show More
          </button>
        </div>
      </div>
    </div>
  );
}

export default GroupItemCardList;
