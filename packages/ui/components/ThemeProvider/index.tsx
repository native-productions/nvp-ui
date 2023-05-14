import React from "react";

import { NVPUIConfig } from "../../interfaces/IConfig";
import { Theme } from "../../interfaces/ITheme";

const configuration: NVPUIConfig = require("/nvp-ui.config.js");

const defaultTheme: Theme = {
  palletes: {
    light: {
      primary: "#917FB3",
      secondary: "#E5BEEC",
      ternary: "#2A2F4F",
      textColor: {
        primary: "#FFFFFF",
        secondary: "rgb(196, 196, 196)",
        ternary: "#FDE2F3",
      },
    },
  },
};

export const ThemeContext = React.createContext<Theme>(
  configuration && configuration.theme ? configuration.theme : defaultTheme
);

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  if (configuration) {
    if (!configuration.theme) {
      throw "Theme on configuration file is not provided. Make sure to update your nvp-ui.config.js";
    }
  }

  return (
    <ThemeContext.Provider value={configuration.theme ?? defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
