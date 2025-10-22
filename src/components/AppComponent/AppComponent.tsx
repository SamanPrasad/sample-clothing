import HeaderSection from "../HeaderSection/HeaderSection";
import Footer from "../Footer/Footer";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Guard from "../Guard";
import type { RootStore } from "@store";
import "./AppComponent.css";
import { MemoizedAnimatedOutlet } from "@components/AnimatedOutlet";
import { useThemeMode } from "@context/ThemeProvider";

function AppComponent() {
  const userState = useSelector((store: RootStore) => store.user.status);
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

  // if (!userState) {
  //   return <Guard />;
  // }

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
