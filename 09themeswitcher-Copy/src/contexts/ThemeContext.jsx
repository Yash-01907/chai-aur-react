import { useState,useEffect } from "react";
import { ThemeContext } from "./theme";
export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  };

  const darkTheme = () => {
    setThemeMode("dark");

  };
  
  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeContext.Provider value={{ lightTheme, darkTheme,themeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
