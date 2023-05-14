const { createTheme } = require("./utils/theme");

const configs = {
  theme: createTheme({
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
      dark: {},
    },
  }),
};

module.exports = configs;
