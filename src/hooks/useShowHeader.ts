import { useEffect, useState } from "react";

function useShowHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let prevScroll = 0;
    const handleNavbar = () => {
      const currentScroll = window.scrollY;
      if (currentScroll < prevScroll) {
        setShow(true);
      } else {
        setShow(false);
      }

      prevScroll = currentScroll;
    };

    window.addEventListener("scroll", handleNavbar);
    return () => window.removeEventListener("scroll", handleNavbar);
  }, []);

  return show;
}

export default useShowHeader;
