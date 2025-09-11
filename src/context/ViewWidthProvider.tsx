import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

export const ViewWidthContext = createContext(0);

function ViewWidthProvider({ children }: PropsWithChildren) {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return <ViewWidthContext value={width}>{children}</ViewWidthContext>;
}

export default ViewWidthProvider;
