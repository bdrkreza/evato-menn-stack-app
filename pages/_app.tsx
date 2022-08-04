import type { AppProps } from "next/app";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Layout from "../layout";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
