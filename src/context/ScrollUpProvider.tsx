import React, {
  createContext,
  useContext,
  useEffect,
  type PropsWithChildren,
  type RefObject,
} from "react";

type Props = PropsWithChildren<{
  refObj: RefObject<HTMLElement | null>;
}>;

const ScrollRef = createContext<RefObject<HTMLElement | null> | null>(null);

function ScrollUpProvider({ refObj, children }: Props) {
  return <ScrollRef value={refObj}>{children}</ScrollRef>;
}

export default ScrollUpProvider;

export const useScrollUp = (dependency: any) => {
  const ref = useContext(ScrollRef);
  if (!ref) {
    throw new Error("Use within Scroll Up Provider! ");
  }

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [dependency]);
};
