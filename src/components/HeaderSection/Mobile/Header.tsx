import Account from "../Components/Account";
import Cart from "../Components/Cart";
import Hamburger from "../Components/Hamburger";
import SearchIcon from "../Components/Search/SearchIcon";
import Title from "../Components/Title";

interface Props {
  open: boolean;
  toggle: (status: boolean) => void;
}

function Header({ open, toggle }: Props) {
  return (
    <div className="lg:hidden flex h-12">
      <div className="w-16 flex-none p-2.5 pt-3.5 ps-3.5 box-border">
        <Hamburger open={open} toggle={(status: boolean) => toggle(status)} />
      </div>
      <div className="w-7 flex-none flex items-center">
        <SearchIcon />
      </div>
      <div className="min-w-24 grow-1 shrink-0 flex justify-center items-center">
        <Title />
      </div>
      <div className="w-7 flex-none me-1.5">
        <Account />
      </div>
      <div className="min-w-7 mx-2 flex items-center">
        <Cart />
      </div>
    </div>
  );
}

export default Header;
