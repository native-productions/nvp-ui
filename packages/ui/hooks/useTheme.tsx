import { useContext } from "react";

import { ThemeContext } from "../components/ThemeProvider";

const useTheme = () => {
  const { palletes } = useContext(ThemeContext);

  return { palletes };
};

export default useTheme;
