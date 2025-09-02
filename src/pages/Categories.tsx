import React from "react";
import categoriesImage from "../assets/categories.jpg";

function Categories() {
  return (
    <div>
      <div className="title min-h-40 h-[30vw] w-full relative">
        <svg
          viewBox="0 0 50 50"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <clipPath id="wave" clipPathUnits="objectBoundingBox">
              <path
                d="M0 0 H1 V0.71 C0.75 1 0.25 1 0 0.75 Z"
                stroke="black"
                strokeWidth={2}
              />
            </clipPath>
          </defs>
        </svg>
        <div
          className={`w-full h-full absolute top-0 left-0 [clip-path:url(#wave)] bg-cover bg-top -z-10`}
          style={{
            backgroundImage: `url('${categoriesImage}')`,
          }}
        ></div>

        <div className="backdrop-blur-[2px] w-full h-full absolute left-0 top-0 [clip-path:url(#wave)]">
          <h1 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl md:text-5xl font-[Poppins] text-white uppercase font-bold tracking-widest">
            Categories
          </h1>
        </div>
      </div>
      <div className="breadcrumbs"></div>
      <div className="categories h-[200vh]">
        <div className="categories-list"></div>
        <div className="loadmore"></div>
      </div>
    </div>
  );
}

export default Categories;
