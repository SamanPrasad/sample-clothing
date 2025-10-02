import DarkModeIcon from "./DarkModeIcon";
import * as motion from "motion/react-client";
import { useThemeMode } from "@context/ThemeProvider";

function DarkMode() {
  const { themeMode, setThemeMode } = useThemeMode();

  const isDark = themeMode == "dark" ? true : false;

  return (
    <div
      className="h-full aspect-[2] rounded-2xl cursor-pointer bg-white dark:bg-black border-2 border-gray-500 duration-700 p-1"
      onClick={() =>
        setThemeMode((prev) => (prev == "dark" ? "light" : "dark"))
      }
    >
      <div className="relative h-full">
        <motion.div
          className="absolute h-full aspect-square rounded-2xl z-20"
          initial={{
            backgroundColor: isDark ? "#ffffff" : "#000000",
            x: isDark ? "-100%" : 0,
            left: isDark ? "100%" : 0,
          }}
          animate={{
            backgroundColor: isDark ? "#ffffff" : "#000000",
            x: isDark ? "-100%" : 0,
            left: isDark ? "100%" : 0,
          }}
          transition={{ duration: 0.4 }}
        ></motion.div>
        <motion.div
          initial={{ x: isDark ? "100%" : 0, right: isDark ? "100%" : 0 }}
          animate={{
            x: isDark ? "100%" : 0,
            right: isDark ? "100%" : 0,
          }}
          transition={{ duration: 0.4 }}
          className="absolute h-full"
        >
          <DarkModeIcon isDark={isDark} />
        </motion.div>
      </div>
    </div>
  );
}

export default DarkMode;
