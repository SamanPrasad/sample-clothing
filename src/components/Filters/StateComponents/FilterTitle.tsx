type Props = {
  title: string;
  selectedList?: string[] | number[] | undefined;
};

function FilterTitle({ title, selectedList }: Props) {
  return (
    <label className="uppercase text-sm font-semibold tracking-wider font-[Poppins] text-[#232323]">
      <span className="me-1.5">{title}</span>
      {selectedList && selectedList.length > 0 ? (
        <span className="inline-block w-5 text-center aspect-square rounded-2xl bg-black text-white font-normal">
          {selectedList?.length}
        </span>
      ) : null}
    </label>
  );
}

export default FilterTitle;
