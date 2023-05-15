import "../styles/global.css";

import type { AppProps } from "next/app";
import ThemeProvider from "ui/components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider colorScheme="light">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
