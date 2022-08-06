import { Container, Grid } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";

import { ParsedUrlQuery } from "querystring";
import {
  ProductDetailsCard,
  ProductDetailsTabs,
  ProductRelated,
} from "../../components";
import { ProductItem } from "../../contracts/product.type";
import json from "../api/data.json";

interface IParams extends ParsedUrlQuery {
  id: string;
}
interface Props {
  product: ProductItem;
}

export default function ProductDetails({ product }: Props) {
  console.log(product);
  return (
    <div className="bg-light">
      <ProductDetailsCard />
      <div className="mt-5">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <ProductDetailsTabs />
            </Grid>
            <Grid item xs={12} md={4}>
              <ProductRelated />
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const resp = await json.products;
  const paths = resp.map((product: any) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const response = await json.products;

  const products = response.filter((item) => item.id === id);
  return {
    props: {
      product: products[0],
    },
  };
};
