import { Outlet } from "react-router";
import HeaderSection from "../HeaderSection/HeaderSection";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Guard from "../Guard";
import type { RootStore } from "@store";
import "./AppComponent.css";
import { AnimatePresence } from "motion/react";

function AppComponent() {
  const userState = useSelector((store: RootStore) => store.user.status);

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

  if (!userState) {
    return <Guard />;
  }

  return (
    <AnimatePresence>
      <div>
        <HeaderSection />
        <Outlet />
        <Footer />
      </div>
    </AnimatePresence>
  );
}

export default AppComponent;
