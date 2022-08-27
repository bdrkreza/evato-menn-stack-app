import Head from "next/head";
import {
  FeaturedProducts,
  GamingProducts,
  HeroBanner,
  TrendingProducts,
  UpcomingProducts,
} from "../components";
import { useGetProductsQuery } from "../redux";

import styles from "../styles/Home.module.css";

const Home = () => {
  const { data, isFetching, isLoading, error } = useGetProductsQuery();

  return (
    <div className={styles.container}>
      <Head>
        <title>evato</title>
        <meta name="description" content="evato electronic web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroBanner />
        <TrendingProducts products={data?.products} />
        <FeaturedProducts products={data?.products} />
        <GamingProducts products={data?.products} />
        <UpcomingProducts products={data?.products} />
      </main>
    </div>
  );
};

export default Home;
