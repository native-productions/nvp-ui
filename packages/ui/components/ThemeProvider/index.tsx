import React from "react";

import { NVP_DEFAULT_THEME } from "../../constants/theme";
import { NVPUIConfig } from "../../interfaces/IConfig";
import { Theme } from "../../interfaces/ITheme";

const configuration: NVPUIConfig = require("/nvp.config.js");
const defaultTheme: Theme = NVP_DEFAULT_THEME;

interface ThemeProviderProps {
  children: React.ReactNode;
  colorScheme: "light" | "dark";
}

export const ThemeContext = React.createContext<Theme>(
  configuration && configuration.theme ? configuration.theme : defaultTheme
);

const ThemeProvider = ({
  children,
  colorScheme = "light",
}: ThemeProviderProps) => {
  if (configuration) {
    if (!configuration.theme) {
      throw "Theme on configuration file is not provided. Make sure to update your nvp.config.js";
    }
  }

  return (
    <ThemeContext.Provider
      value={{ colorScheme, ...configuration.theme } ?? defaultTheme}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
