import DarkMode from "@components/DarkMode/DarkMode";
import Account from "../Components/Account";
import Cart from "../Components/Cart";
import Contact from "../Components/Contact";
import Language from "../Components/Language";
import Search from "../Components/Search/Search";
import Title from "../Components/Title";

function Header() {
  return (
    <div className="hidden lg:flex justify-between items-center px-4 py-3 bg-white dark:bg-black duration-700">
      <div className="flex-1 flex">
        <div className="flex-1 flex items-center">
          <Language />
        </div>
        <div className="flex-3 flex items-center">
          <Contact />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center uppercase">
        <Title />
      </div>
      <div className="flex-1 flex justify-end items-center gap-4">
        <div className="h-7 w-1/2">
          <Search />
        </div>
        <div className="w-6">
          <Account />
        </div>
        <div className="h-7">
          <DarkMode />
        </div>
        <div className="w-7">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Header;
