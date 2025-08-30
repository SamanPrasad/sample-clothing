import StoreProvider from "../store/StoreProvider";
import "../App.css";
import { Outlet } from "react-router";
import HeaderSection from "./HeaderSection/HeaderSection";
import Footer from "./Footer/Footer";
import { useEffect } from "react";

function RootComponent() {
  useEffect(() => {
    window.addEventListener("blur", () => {
      document.title = "A bespoke tale of luxary ❤";
    });
    window.addEventListener("focus", () => {
      document.title = "Kelly Felder Clone";
    });
  }, []);

  return (
    <div>
      <StoreProvider>
        <HeaderSection />
        <Outlet />
        <Footer />
      </StoreProvider>
    </div>
  );
}

export default RootComponent;
