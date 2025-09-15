import Accordion from "./Accordion";
import type { MenuItem } from "../Menu/Menu";

function AccordionList({ data }: { data: MenuItem[] }) {
  return (
    <div>
      {data.map((menu, index) => (
        <Accordion key={index} item={menu} />
      ))}
    </div>
  );
}

export default AccordionList;
