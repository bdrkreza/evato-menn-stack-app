import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Layout from "../layout";
import store from "../redux/store/store";
import "../styles/globals.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
