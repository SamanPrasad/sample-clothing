import HeaderSection from "../HeaderSection/HeaderSection";
import Footer from "../Footer/Footer";
import { useEffect, useRef } from "react";
import "./AppComponent.css";
import { useThemeMode } from "@context/ThemeProvider";
import { Outlet } from "react-router";
import ScrollUpProvider from "@context/ScrollUpProvider";

function AppComponent() {
  const { themeMode } = useThemeMode();
  const scrollRef = useRef(null);

  useEffect(() => {
    const handleFocus = () => (document.title = "Sample Clothing");
    const handleBlur = () => (document.title = "Best Clothing in the World ❤");
    window.addEventListener("blur", handleBlur);
    window.addEventListener("focus", handleFocus);

    return () => {
      window.removeEventListener("blur", handleBlur);
      window.removeEventListener("focus", handleFocus);
    };
  }, []);

  return (
    <div className={themeMode == "dark" ? "dark" : ""}>
      <div ref={scrollRef} className="scoll-ref"></div>
      <ScrollUpProvider refObj={scrollRef}>
        <HeaderSection />
        <div className="relative">
          <Outlet />
        </div>
        <Footer />
      </ScrollUpProvider>
    </div>
  );
}

export default AppComponent;
