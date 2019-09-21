import * as React from "react";
import { createContext, useContext, useState, useEffect } from "react";

const black: string = "#161617";
const white: string = "#ffffff";

interface ITheme {
  color: string;
  background: string;
}

const themeLight: ITheme = {
  color: "#C9E2AA",
  background: white
};

const themeDark: ITheme = {
  color: white,
  background: black
};

export const theme = () => themeLight;

/*const defaultContextData = {
  dark: false,
  toggle: () => {}
};

const ThemeContext = createContext(defaultContextData);
const useTheme = () => useContext(ThemeContext);

const useEffectDarkMode = () => {
  const [themeState, setThemeState] = useState({
    dark: false,
    hasThemeMounted: false
  });

  useEffect(() => {
    const isDark = localStorage.getItem("dark") === "true";

    setThemeState({
      ...themeState,
      dark: isDark,
      hasThemeMounted: true
    });
  }, []);

  return [themeState, setThemeState];
};

const ThemeModeProvider = ({ children }: React.ReactNode) => {
  const [themeState, setThemeState] = useEffectDarkMode();

  if (!themeState.hasThemeMounted) {
    return <div />;
  }

  {children}
};*/
