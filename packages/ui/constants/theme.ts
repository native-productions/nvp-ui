import { Theme } from "../interfaces";

export const NVP_DEFAULT_THEME: Theme = {
  colorScheme: "light",
  palletes: {
    light: {
      primary: "#917FB3", // Soft purple
      secondary: "#E5BEEC", // Soft pink
      ternary: "#2A2F4F", // Langit Maghrib
      textColor: {
        primary: "#00000", // Basic Black
        secondary: "rgb(196, 196, 196)", // Gray
        ternary: "#FDE2F3", // Light Pink
      },
    },
    dark: {
      primary: "#917FB3",
      secondary: "#E5BEEC",
      ternary: "#2A2F4F",
      textColor: {
        primary: "#FFFFFF", // Basic White
        secondary: "rgb(196, 196, 196)", // Gray
        ternary: "#FDE2F3", // Light Pink
      },
    },
  },
};
