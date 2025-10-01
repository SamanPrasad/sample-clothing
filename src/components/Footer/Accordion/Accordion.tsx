import { memo, useCallback, useState } from "react";
import { Link } from "react-router";
import ToggleIcon from "@components/Accordion/ToggleIcon";
import Dropdown from "@components/Accordion/Dropdown";

interface Item {
  title: string;
  children: {
    title: string;
    uri: string;
  }[];
}

function Accordion({ item }: { item: Item }) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = useCallback(() => setIsOpen((prev) => !prev), []);

  return (
    <div onClick={onClick} className="mb-3">
      <div className="flex justify-between items-center">
        <h2 className="footer-title">{item.title}</h2>
        <ToggleIcon isOpen={isOpen} />
      </div>
      <hr className="h-[1px] bg-white mt-3" />
      <Dropdown isOpen={isOpen}>
        {item.children.map((menu, index) => (
          <Link
            key={index}
            to={menu.uri}
            className="uppercase text-xs font-medium text-gray-300 mb-3"
          >
            {menu.title}
          </Link>
        ))}
      </Dropdown>
    </div>
  );
}

export default Accordion;

export const MemoizedAccordion = memo(Accordion);
