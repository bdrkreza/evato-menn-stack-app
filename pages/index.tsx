import type { GetStaticProps } from "next";
import Head from "next/head";
import {
  FeaturedProducts,
  GamingProducts,
  HeroBanner,
  TrendingProducts,
  UpcomingProducts,
} from "../components";
import { ProductItem } from "../contracts/product.type";
import styles from "../styles/Home.module.css";
import product from "./api/data.json";
interface Props {
  products: Array<ProductItem>;
}
const Home = ({ products }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>evato</title>
        <meta name="description" content="evato electronic web app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <HeroBanner />
        <TrendingProducts products={products} />
        <FeaturedProducts products={products} />
        <GamingProducts products={products} />
        <UpcomingProducts products={products} />
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async (): Promise<any> => {
  const { products } = await product;
  return {
    props: {
      products: products,
    },
  };
};
