import React from "react";
import LoaderAnimation from "./LoaderAnimation";

function Loader() {
  return (
    <div className="w-full h-[130vw] md:h-[40vw] flex justify-center items-center">
      <div className="w-10">
        <LoaderAnimation />
      </div>
    </div>
  );
}

export default Loader;
