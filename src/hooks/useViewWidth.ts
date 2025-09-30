import { ViewWidthContext } from "@context/ViewWidthProvider";
import { useContext } from "react";

export const useViewWidth = () => {
  const cntx = useContext(ViewWidthContext);
  if (cntx === null)
    throw new Error("Please call useViewWidth ithin ViewWidthContext");
  return cntx;
};
