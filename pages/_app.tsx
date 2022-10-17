import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-neutral-800">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
