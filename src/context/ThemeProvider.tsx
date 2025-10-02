import {
  createContext,
  useContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

type ThemeMode = "dark" | "light";

type ThemeContextType = {
  themeMode: ThemeMode;
  setThemeMode: Dispatch<SetStateAction<ThemeMode>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function ThemeProvider({ children }: PropsWithChildren) {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedMode = localStorage.getItem("theme-mode") as ThemeMode | null;
    if (storedMode) return storedMode;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    localStorage.setItem("theme-mode", themeMode);
  }, [themeMode]);

  return (
    <ThemeContext value={{ themeMode, setThemeMode }}>{children}</ThemeContext>
  );
}

export default ThemeProvider;

export const useThemeMode = () => {
  const cntx = useContext(ThemeContext);
  if (!cntx) throw new Error("Plase use useContext within Theme Context!");
  return cntx;
};
