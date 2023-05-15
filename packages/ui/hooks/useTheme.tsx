import { useContext } from "react";

import { ThemeContext } from "../components/ThemeProvider";

const useTheme = () => {
  const { palletes, colorScheme } = useContext(ThemeContext);

  return { palletes, colorScheme };
};

export default useTheme;
