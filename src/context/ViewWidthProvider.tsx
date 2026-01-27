import {
  createContext,
  useEffect,
  useState,
  type PropsWithChildren,
} from "react";

type WidthContext = {
  width: number;
  isWidthLoading: boolean;
};

export const ViewWidthContext = createContext<WidthContext | null>(null);

function ViewWidthProvider({ children }: PropsWithChildren) {
  const [width, setWidth] = useState<number>(0);
  const [isWidthLoading, setIsWidthLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthLoading(true);
      setWidth(window.innerWidth);
      setIsWidthLoading(false);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <ViewWidthContext value={{ width, isWidthLoading }}>
      {children}
    </ViewWidthContext>
  );
}

export default ViewWidthProvider;
