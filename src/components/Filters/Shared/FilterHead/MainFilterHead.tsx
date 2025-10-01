import FilterTitle from "../FilterTitle";
import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  title: string;
  selectedList?: Set<number> | Set<string>;
}>;

function MainFilterHead({ title, selectedList = undefined, children }: Props) {
  return (
    <div className="flex justify-between w-full border border-[#23232354] px-4 py-2">
      <FilterTitle title={title} selectedList={selectedList ?? null} />
      {children}
    </div>
  );
}

export default MainFilterHead;
