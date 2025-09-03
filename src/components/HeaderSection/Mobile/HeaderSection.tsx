import { useState } from "react";
import Header from "./Header";
import Menu from "./Navbar/Menu";

function HeaderSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Header open={open} toggle={(status: boolean) => setOpen(status)} />
      <Menu open={open} toggle={(status: boolean) => setOpen(status)} />
    </>
  );
}

export default HeaderSection;
