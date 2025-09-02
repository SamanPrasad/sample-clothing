import React, { useEffect, useState } from "react";

function useViewWidth() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    console.log("use");
    const handleResize = () => setWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}

export default useViewWidth;
