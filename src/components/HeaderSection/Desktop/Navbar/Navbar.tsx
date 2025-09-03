import MenuItem from "./MenuItem/MenuItem";
import menu from "../../../../data/menu";
import useShowHeader from "../../../../hooks/useShowHeader";

function Navbar() {
  const show = useShowHeader();

  return (
    <div
      className={`sticky ${
        show ? "top-0" : "-top-12"
      } font-[Poppins] text-white bg-black h-12 w-full hidden lg:flex justify-center items-center gap-3 px-40 z-50 duration-500`}
    >
      {menu.map((item) => {
        return <MenuItem key={item.id} menu={item} />;
      })}
    </div>
  );
}

export default Navbar;
