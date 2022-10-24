import "../styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
