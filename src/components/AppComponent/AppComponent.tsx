import HeaderSection from "../HeaderSection/HeaderSection";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import "./AppComponent.css";
import { MemoizedAnimatedOutlet } from "@components/AnimatedOutlet";
import { useThemeMode } from "@context/ThemeProvider";

function AppComponent() {
  const { themeMode } = useThemeMode();

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
    <div className={themeMode == "dark" ? "dark" : ""}>
      <HeaderSection />
      <div className="relative overflow-hidden">
        <MemoizedAnimatedOutlet />
      </div>
      <Footer />
    </div>
  );
}

export default AppComponent;
