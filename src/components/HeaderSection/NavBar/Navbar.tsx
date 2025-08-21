import "./NavBar.css";
import "flag-icons/css/flag-icons.min.css";
import menu from "../../../data/menu";
import MenuItem from "./MenuItem/MenuItem";

function Navbar() {
  return (
    <div className="navbar text-white bg-black h-12 w-full flex justify-center items-center gap-3 px-40 z-50">
      {menu.map((item) => {
        return <MenuItem key={item.id} menu={item} />;
      })}
    </div>
  );
}

export default Navbar;
