import MainFilterHead from "../MainFilterHead";
import ToggleIcon from "@components/Accordion/ToggleIcon";

type Props = {
  isOpen: boolean;
  selectedList?: Set<number> | Set<string>;
  title: string;
};

function FilterHead({ isOpen, selectedList, title }: Props) {
  return (
    <div className="w-full">
      <MainFilterHead title={title} selectedList={selectedList}>
        <ToggleIcon isOpen={isOpen} strokeColor="black" />
      </MainFilterHead>
    </div>
  );
}

export default FilterHead;
