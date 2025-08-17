import React from "react";
import data from "../data/products.json";
import { NavLink } from "react-router";
import MemoizedSlider from "../components/Slider/Slider";

function Home() {
  return (
    <div>
      <MemoizedSlider />
    </div>
  );
}

export default Home;
