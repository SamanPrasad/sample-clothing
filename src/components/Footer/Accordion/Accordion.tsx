import React, {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Link } from "react-router";
import * as motion from "motion/react-client";

interface Item {
  title: string;
  children: {
    title: string;
    uri: string;
  }[];
}

function Accordion({ item }: { item: Item }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(0);
  const operators = useMemo(() => {
    return {
      plus: "M1.5 14H26.5M14 1.5V26.5",
      minus: "M1.5 12.5H26.5",
    };
  }, []);

  const onClick = useCallback(() => setOpen((prev) => !prev), []);

  useEffect(() => {
    setHeight(contentRef.current?.scrollHeight ?? 0);
  }, []);
  return (
    <div onClick={onClick} className="mb-3">
      <div className="flex justify-between items-center">
        <h2 className="footer-title">{item.title}</h2>
        <div className="flex relative justify-center items-center w-3.5">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              initial={{
                rotate: -90,
              }}
              animate={{
                d: open ? operators.minus : operators.plus,
                rotate: open ? 0 : -90,
              }}
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <hr className="h-[1px] bg-white mt-3" />
      <div
        ref={contentRef}
        className={`flex flex-col mt-3 text-xs font-medium text-gray-300 transition-all ease-in-out duration-300 overflow-hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
        }`}
        style={{ height: open ? height : 0 }}
      >
        {item.children.map((menu) => (
          <Link to={menu.uri} className="uppercase mb-3">
            {menu.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Accordion;

export const MemoizedAccordion = memo(Accordion);
