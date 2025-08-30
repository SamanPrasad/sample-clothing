import React from "react";
import menu from "../../../../data/menu";
import MenuItem from "./MenuItem/MenuItem";

function MainMenu() {
  return (
    <div className="font-[Poppins] text-white bg-black h-12 w-full hidden lg:flex justify-center items-center gap-3 px-40 z-50">
      {menu.map((item) => {
        return <MenuItem key={item.id} menu={item} />;
      })}
    </div>
  );
}

export default MainMenu;
