import "../App.css";
import { Outlet } from "react-router";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

function RootComponent() {
  useEffect(() => {
    const handleFocus = () => (document.title = "Kelly Felder Clone");
    const handleBlur = () => (document.title = "A bespoke tale of luxary ❤");
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div>
      <HeaderSection />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootComponent;
